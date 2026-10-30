---
title: Regulation of Lipolysis, β-Oxidation, Ketogenesis and Gluconeogenesis
subject: Biochemistry
chapter: 34
batch: 4
tags:
- biochemistry
- medical-notes
- neet-pg
- ini-cet
- lipolysis
- metabolic-integration
aliases: []
---

# 34. Regulation of Lipolysis, β-Oxidation, Ketogenesis and Gluconeogenesis

## 1. Hormonal Regulation of Adipose Tissue Lipolysis

Lipolysis is the sequential enzymatic hydrolysis of triacylglycerols (TAGs) stored in adipocyte lipid droplets into free fatty acids (FFAs) and glycerol.

```mermaid
flowchart TD
  A[Catecholamine] --> B[Beta-adrenergic receptor]
  B --> C[Gs and adenylyl cyclase]
  C --> D[cAMP increases]
  D --> E[PKA activation]
  E --> F[Perilipin phosphorylation]
  F --> G[CGI-58 activates ATGL]
  E --> H[HSL phosphorylation and translocation]
  G --> I[TAG to DAG]
  H --> J[DAG to MAG]
  I --> J --> K[MAG lipase: glycerol + fatty acids]
  L[Insulin] -. activates PDE3B and phosphatases .-> M[Lipolysis suppressed]
```

### Key Lipolytic Enzymes
1. **Adipose Triglyceride Lipase (ATGL):** Initiates lipolysis by converting TAG $\rightarrow$ Diacylglycerol (DAG) + 1 FFA. Activated by co-factor **CGI-58**, which dissociates from perilipin upon PKA phosphorylation.
2. **Hormone-Sensitive Lipase (HSL):** Converts DAG $\rightarrow$ Monoacylglycerol (MAG) + 1 FFA. PKA directly phosphorylates HSL (Ser-660), inducing its translocation from cytosol to the droplet surface.
3. **Monoacylglycerol Lipase (MAG Lipase):** Hydrolyzes MAG $\rightarrow$ Glycerol + 1 FFA.

### Antagonistic Action of Insulin
Insulin potently suppresses lipolysis through two mechanisms:
* Activates **Phosphodiesterase 3B (PDE3B)**, hydrolyzing $cAMP \rightarrow 5'-AMP$, shutting off PKA.
* Activates protein phosphatases that dephosphorylate HSL and perilipin.

---

## 2. Cross-Regulation Between $\beta$-Oxidation and Fatty Acid Synthesis

Reciprocal regulation prevents the simultaneous synthesis and destruction of fatty acids.

```mermaid
flowchart LR
  A[Well-fed: insulin high] --> B[Acetyl-CoA carboxylase active]
  B --> C[Malonyl-CoA rises]
  C --> D[CPT-I inhibited]
  D --> E[Long-chain fatty-acid entry into mitochondria falls]
  F[Fasting: insulin falls; catecholamines rise] --> G[ACC activity falls]
  G --> H[Malonyl-CoA falls]
  H --> I[CPT-I disinhibited]
  I --> J[Beta-oxidation increases]
```

---

## 3. Integrated Fasting / Starvation Metabolic Axis

During extended fasting, the starvation network coordinates lipolysis, $\beta$-oxidation, ketogenesis, and gluconeogenesis across tissues.

```mermaid
flowchart TD
  A[Adipose tissue] -->|Lipolysis| B[Free fatty acids + glycerol]
  B --> C[Liver]
  C -->|Beta-oxidation| D[Acetyl-CoA, NADH and ATP]
  D --> E[Pyruvate carboxylase activated; PDH inhibited]
  E --> F[Gluconeogenesis]
  D --> G[Ketogenesis]
  G --> H[Ketone bodies exported]
  H --> I[Brain, heart, muscle and renal cortex use ketones]
  B --> J[Glycerol enters gluconeogenesis]
```

### Step-by-Step Metabolic Events
1. **Adipose mobilization:** Catecholamines activate beta-adrenergic Gs signalling in human adipocytes, increasing $cAMP \rightarrow \text{PKA} \rightarrow$ perilipin/ATGL/HSL activation. The direct lipolytic effect of glucagon in human adipose tissue is limited/variable and should not be treated as the dominant physiological signal. $\rightarrow$ large influx of FFAs and glycerol into plasma.
2. **Hepatic $\beta$-Oxidation Surge:** FFAs enter hepatocytes $\rightarrow$ rapid $\beta$-oxidation yields massive quantities of **NADH**, **$\text{FADH}_2$**, and **Acetyl-CoA**.
3. **Allosteric Switching of Pyruvate Fate:**
   * High Acetyl-CoA **potently inhibits Pyruvate Dehydrogenase (PDH)**, blocking carbohydrate oxidation.
   * High Acetyl-CoA **allosterically activates Pyruvate Carboxylase (PC)**, initiating Gluconeogenesis.
4. **Shunting to Ketogenesis:** High NADH/NAD+ ratio and consumption of oxaloacetate for gluconeogenesis prevents Acetyl-CoA from entering the TCA cycle. Excess Acetyl-CoA is diverted into **Ketogenesis**.

---

## 4. Diabetic Ketoacidosis (DKA) Pathophysiology

```mermaid
flowchart TD
  A[Absolute insulin deficiency with counter-regulatory hormone excess] --> B[Unrestrained adipose lipolysis]
  B --> C[Free fatty acids delivered to liver]
  C --> D[Hepatic beta-oxidation and acetyl-CoA increase]
  D --> E[Ketogenesis increases]
  E --> F[Acetoacetate and beta-hydroxybutyrate accumulate]
  F --> G[High-anion-gap metabolic acidosis]
  G --> H[Kussmaul breathing and dehydration]
```

---

## 5. Coverage Audit

* **Textbook Alignment:** Covers ATGL/HSL/MAG lipase cascade, CGI-58/perilipin mechanics, PDE3B insulin suppression, Malonyl-CoA CPT-I cross-regulation, integrated fasting axis (lipolysis $\rightarrow \beta$-oxidation $\rightarrow$ PC activation / PDH inhibition $\rightarrow$ gluconeogenesis + ketogenesis), and DKA pathophysiology.
* **Integrations:** Includes exact phosphorylation sites (HSL Ser-660), high-anion gap metabolic acidosis links, and hepatic fuel partition logic.
