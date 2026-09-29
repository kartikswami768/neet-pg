```dataview
TABLE pearl-id AS "Pearl ID", file.link AS "Pearl"
FROM "Study Material/Flashcards/Marrow Pearls"
WHERE contains(topic, "Cardiovascular System")
SORT pearl-id ASC
```
