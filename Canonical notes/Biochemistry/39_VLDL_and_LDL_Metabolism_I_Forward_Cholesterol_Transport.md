---
title: 'VLDL and LDL Metabolism I: Forward Cholesterol Transport'
subject: Biochemistry
chapter: 39
batch: 4
tags:
- biochemistry
- medical-notes
- neet-pg
- ini-cet
- ldl-metabolism
- pcsk9
aliases: []
---

# 39. VLDL and LDL Metabolism I: Forward Cholesterol Transport

## 1. Overview of Forward Cholesterol Transport

Forward cholesterol transport delivers liver-synthesized and dietary cholesterol to peripheral tissues via apoB-containing lipoproteins: **VLDL $\rightarrow$ IDL $\rightarrow$ LDL**.

```mermaid
flowchart LR
  A[Liver: nascent VLDL with ApoB-100] -->|LPL removes triglyceride| B[IDL remnant]
  B -->|Hepatic lipase or hepatic uptake| C[LDL]
  C -->|ApoB-100 binds LDL receptor| D[Peripheral tissue uptake]
  D --> E[Cholesterol used or stored]
```

---

## 2. Low-Density Lipoprotein (LDL) Characteristics

* **Function:** Principal carrier of plasma cholesterol ($>60\%$ of total circulating cholesterol).
* **Composition:** Cholesteryl ester-dense hydrophobic core surrounded by a monolayer of phospholipids, unesterified cholesterol, and a single structural apoprotein molecule: **ApoB-100**.

---

## 3. LDL Receptor (LDLR) Mechanics and Endocytosis

Michael Brown and Joseph Goldstein elucidated the **receptor-mediated endocytosis pathway** of LDL (Nobel Prize 1985).

```mermaid
flowchart TD
  A[LDL ApoB-100 binds LDL receptor] --> B[Clathrin-mediated endocytosis]
  B --> C[Endosomal acidification]
  C --> D[LDL separates from receptor]
  D --> E[Receptor recycles to plasma membrane]
  D --> F[LDL delivered to lysosome]
  F --> G[Cholesteryl ester hydrolysis and ApoB degradation]
```

```mermaid
flowchart TD
  A[Intracellular free cholesterol rises] --> B[HMG-CoA reductase expression/activity falls]
  A --> C[SREBP-2 activation and LDLR synthesis fall]
  A --> D[ACAT esterification increases]
  D --> E[Cholesteryl ester storage]
```

---

## 4. PCSK9 and Monoclonal Antibody Pharmacology

**PCSK9 (Proprotein Convertase Subtilisin/Kexin Type 9)** is a liver-secreted protease that acts as a post-translational regulator of LDLR density.

```mermaid
flowchart LR
  A[PCSK9 binds LDL receptor] --> B[Receptor directed to lysosome]
  B --> C[LDL receptor number falls]
  C --> D[Plasma LDL-C rises]
  E[PCSK9 antibody] -. blocks binding .-> A
  E --> F[More LDL receptors recycle]
  F --> G[Plasma LDL-C falls]
```

---

## 5. Atherogenesis and Scavenger Receptors

When plasma LDL levels exceed receptor clearance capacity, native LDL becomes trapped in the subendothelial space of arteries and undergoes oxidative modification to **Oxidized LDL (oxLDL)**.

```mermaid
flowchart TD
  A[LDL enters and is retained in arterial intima] --> B[Modification and aggregation]
  B --> C[Macrophage scavenger-receptor uptake]
  C --> D[Foam-cell formation]
  D --> E[Fatty streak and plaque development]
```

---

## 6. Coverage Audit

* **Textbook Alignment:** Covers forward cholesterol transport pathway, LDL structural ApoB-100, LDLR clathrin-coated pit endocytosis steps, 3 intracellular cholesterol regulatory responses (HMG-CoA reductase, SREBP-2 LDLR suppression, ACAT activation), PCSK9 destruction mechanics, and macrophage foam cell atherogenesis.
* **Integrations:** Includes PCSK9 inhibitor pharmacology (Evolocumab, Alirocumab) and SR-A1 scavenger receptor non-saturability.
