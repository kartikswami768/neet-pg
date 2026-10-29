#!/usr/bin/env python3
"""
One-way sync: Obsidian task notes -> Notion Tasks Tracker.

Source of truth:
    00_Strategy/Tasks/**/*.md

The script only writes to Notion. It never modifies repository files.
"""

from __future__ import annotations

import json
import os
import re
import sys
import time
from pathlib import Path
from typing import Any

import requests
import yaml

NOTION_VERSION = "2025-09-03"
NOTION_BASE = "https://api.notion.com/v1"
TASK_ROOT = Path("00_Strategy/Tasks")
DATA_SOURCE_ID = os.environ.get(
    "NOTION_TASKS_DATA_SOURCE_ID",
    "3e527b64-a3ff-80a1-95b2-000be491cc02",
)

SUBJECTS = {
    "Anatomy", "Physiology", "Biochemistry", "Pathology", "Microbiology",
    "Pharmacology", "Forensics", "Community Medicine", "Medicine", "Surgery",
    "Pediatrics", "Obs-Gyne", "ENT", "Ophthalmology", "Orthopaedics",
    "Anesthesiology", "Psychiatry", "Dermatology", "Radiology",
}

STATUS_MAP = {
    "open": "Not started",
    "todo": "Not started",
    "to-do": "Not started",
    "not started": "Not started",
    "in-progress": "In progress",
    "in progress": "In progress",
    "doing": "In progress",
    "done": "Done",
    "completed": "Done",
}

PRIORITY_MAP = {
    "high": "High",
    "medium": "Medium",
    "normal": "Medium",
    "low": "Low",
}

TASK_TYPES = {"Study", "Revision", "Questions", "Test / Exam", "Review", "Administrative"}


def fail(message: str) -> "NoReturn":
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)


def notion_request(
    session: requests.Session,
    method: str,
    path: str,
    *,
    json_body: dict[str, Any] | None = None,
) -> dict[str, Any]:
    url = f"{NOTION_BASE}{path}"
    for attempt in range(6):
        response = session.request(method, url, json=json_body, timeout=30)
        if response.status_code == 429:
            retry_after = response.headers.get("Retry-After", "2")
            try:
                delay = min(float(retry_after), 30.0)
            except ValueError:
                delay = 2.0
            time.sleep(delay)
            continue
        if 200 <= response.status_code < 300:
            return response.json() if response.content else {}
        try:
            detail = response.json()
        except ValueError:
            detail = response.text
        raise RuntimeError(f"Notion API {response.status_code}: {detail}")
    raise RuntimeError("Notion API rate limit persisted after retries")


def build_session() -> requests.Session:
    token = os.environ.get("NOTION_TOKEN")
    if not token:
        fail("NOTION_TOKEN is not set. Add it as a GitHub Actions secret.")
    session = requests.Session()
    session.headers.update(
        {
            "Authorization": f"Bearer {token}",
            "Notion-Version": NOTION_VERSION,
            "Content-Type": "application/json",
        }
    )
    return session


def parse_frontmatter_and_body(text: str) -> tuple[dict[str, Any], str]:
    if not text.startswith("---"):
        return {}, text.strip()

    match = re.match(r"^---\s*\n(.*?)\n---\s*\n?(.*)$", text, flags=re.DOTALL)
    if not match:
        return {}, text.strip()

    raw_frontmatter, body = match.groups()
    data = yaml.safe_load(raw_frontmatter) or {}
    if not isinstance(data, dict):
        data = {}
    return data, body.strip()


def clean_body(body: str) -> str:
    if not body:
        return ""

    # Obsidian embeds/links are useful in Obsidian but noisy in Notion's
    # short Description property.
    body = re.sub(r"!\[\[[^\]]+\]\]\s*", "", body)
    body = re.sub(
        r"\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]",
        lambda m: m.group(2) or m.group(1),
        body,
    )
    body = re.sub(r"^\s*#+\s*", "", body, flags=re.MULTILINE)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return body[:6000]


def as_list(value: Any) -> list[str]:
    if value is None:
        return []
    if isinstance(value, list):
        return [str(v).strip() for v in value if v is not None]
    return [str(value).strip()]


def rich_text(value: str, limit: int = 6000) -> list[dict[str, Any]]:
    value = (value or "")[:limit]
    if not value:
        return []
    # Keep each text object comfortably below Notion's per-rich-text size limit.
    return [
        {"type": "text", "text": {"content": value[i : i + 1800]}}
        for i in range(0, len(value), 1800)
    ]


def title_property(value: str) -> dict[str, Any]:
    return {"title": rich_text(value, limit=1800)}


def text_property(value: str) -> dict[str, Any]:
    return {"rich_text": rich_text(value)}


def select_property(value: str | None) -> dict[str, Any] | None:
    return {"select": {"name": value}} if value else None


def status_property(value: str) -> dict[str, Any]:
    return {"status": {"name": value}}


def date_property(value: str | None) -> dict[str, Any] | None:
    if not value:
        return None
    return {"date": {"start": str(value)}}


def extract_text_property(prop: dict[str, Any]) -> str:
    if prop.get("type") == "title":
        chunks = prop.get("title", [])
    else:
        chunks = prop.get("rich_text", [])
    return "".join(item.get("plain_text", "") for item in chunks)


def extract_page_path(page: dict[str, Any]) -> str:
    return extract_text_property(page.get("properties", {}).get("Obsidian Path", {}))


def extract_page_title(page: dict[str, Any]) -> str:
    return extract_text_property(page.get("properties", {}).get("Task name", {}))


def load_tasks() -> list[dict[str, Any]]:
    tasks: list[dict[str, Any]] = []

    for path in sorted(TASK_ROOT.rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        frontmatter, body = parse_frontmatter_and_body(text)

        tags = {tag.lstrip("#").strip() for tag in as_list(frontmatter.get("tags"))}
        if "task" not in tags:
            continue

        relative_path = path.as_posix()
        title = str(frontmatter.get("title") or path.stem).strip()

        raw_status = str(frontmatter.get("status", "open")).strip().lower()
        status = STATUS_MAP.get(raw_status, "Not started")

        raw_priority = str(frontmatter.get("priority", "normal")).strip().lower()
        priority = PRIORITY_MAP.get(raw_priority, "Medium")

        raw_task_type = (
            frontmatter.get("task type")
            or frontmatter.get("task_type")
            or frontmatter.get("taskType")
            or "Study"
        )
        task_type = str(raw_task_type).strip()
        if task_type not in TASK_TYPES:
            task_type = "Study"

        explicit_subjects = as_list(
            frontmatter.get("subject") or frontmatter.get("subjects")
        )
        subjects = [s for s in explicit_subjects if s in SUBJECTS]

        if not subjects:
            parts = path.relative_to(TASK_ROOT).parts
            if len(parts) > 1 and parts[0] in SUBJECTS:
                subjects = [parts[0]]

        description = str(frontmatter.get("description") or "").strip()
        if not description:
            description = clean_body(body)

        task = {
            "path": relative_path,
            "title": title,
            "status": status,
            "priority": priority,
            "task_type": task_type,
            "subjects": subjects,
            "description": description,
            "due": str(frontmatter["due"]).strip() if frontmatter.get("due") else None,
        }
        tasks.append(task)

    return tasks


def notion_properties(task: dict[str, Any]) -> dict[str, Any]:
    properties: dict[str, Any] = {
        "Task name": title_property(task["title"]),
        "Status": status_property(task["status"]),
        "Priority": select_property(task["priority"]),
        "Task type": select_property(task["task_type"]),
        "Subject": {
            "multi_select": [{"name": name} for name in task["subjects"]]
        },
        "Description": text_property(task["description"]),
        "Obsidian Path": text_property(task["path"]),
    }

    due = date_property(task["due"])
    if due is not None:
        properties["Due date"] = due
    else:
        properties["Due date"] = {"date": None}

    return properties


def get_existing_tasks(session: requests.Session) -> dict[str, dict[str, Any]]:
    existing: dict[str, dict[str, Any]] = {}
    cursor: str | None = None

    while True:
        body: dict[str, Any] = {"page_size": 100}
        if cursor:
            body["start_cursor"] = cursor

        result = notion_request(
            session,
            "POST",
            f"/data_sources/{DATA_SOURCE_ID}/query",
            json_body=body,
        )

        for page in result.get("results", []):
            path = extract_page_path(page)
            if not path:
                continue
            if path in existing:
                print(f"WARNING: duplicate Obsidian Path in Notion: {path}")
                continue
            existing[path] = page

        cursor = result.get("next_cursor")
        if not cursor:
            break

    return existing


def create_page(session: requests.Session, task: dict[str, Any]) -> None:
    body = {
        "parent": {
            "type": "data_source_id",
            "data_source_id": DATA_SOURCE_ID,
        },
        "properties": notion_properties(task),
    }
    notion_request(session, "POST", "/pages", json_body=body)


def update_page(session: requests.Session, page_id: str, task: dict[str, Any]) -> None:
    notion_request(
        session,
        "PATCH",
        f"/pages/{page_id}",
        json_body={"properties": notion_properties(task)},
    )


def main() -> None:
    dry_run = os.environ.get("DRY_RUN", "").lower() in {"1", "true", "yes"}

    tasks = load_tasks()
    print(f"Found {len(tasks)} Obsidian task note(s).")

    if dry_run:
        for task in tasks:
            print(
                f"DRY RUN: {task['status']} | {task['priority']} | "
                f"{task['title']} | {task['path']}"
            )
        return

    session = build_session()
    existing = get_existing_tasks(session)

    created = 0
    updated = 0

    for task in tasks:
        current = existing.get(task["path"])
        if current:
            update_page(session, current["id"], task)
            updated += 1
            print(f"Updated: {task['path']} -> {extract_page_title(current)}")
        else:
            create_page(session, task)
            created += 1
            print(f"Created: {task['path']}")

    print(f"Sync complete: {created} created, {updated} updated.")


if __name__ == "__main__":
    main()
