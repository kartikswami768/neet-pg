---
title: General Pharmacology
Subject: Pharmacology
type: notes
tags:
  - "#pharmacology"
---
># General Pharmacology

> [!info]- OCR related notes
> **Primary source:** `02_General_Pharmacology.pdf` (23-page coaching/revision PDF).
>
> **Processing approach:** The PDF was reviewed as a whole, with its text extraction cross-checked against page images for tables, graphs, diagrams, and visually fragmented text. Material was reorganized by **topic rather than page order**, while preserving the educational content of the source. Obvious OCR errors and medically important outdated/overbroad statements are explicitly flagged rather than silently overwritten.
>
> **Source notation**
> -   = content reconstructed from the uploaded PDF.
> - **[Verified/current]** = corrected or clarified using current authoritative medical/regulatory sources.
> - **[OCR/visual correction]** = wording corrected after comparing extracted text with the page image.
> - **[PDF caution]** = the PDF contains a teaching shortcut, oversimplification, or statement that should not be treated as current clinical guidance.
> - **[unclear]** = the source cannot be reconstructed reliably from the available text/image.

> [!info]- Master Topic Map
> | Section | Topic cluster                                                           | PDF pages |
>| ------- | ----------------------------------------------------------------------- | --------: |
>| 1       | Pharmacokinetics: overview + absorption                                 |       1–4 |
>| 2       | Bioavailability + bioequivalence                                        |       4–5 |
>| 3       | Volume of distribution + protein binding + dialysis                     |       5–6 |
>| 4       | Drug metabolism / biotransformation                                     |       6–9 |
>| 5       | Drug excretion + urinary handling                                       |      9–10 |
>| 6       | Clearance, elimination kinetics, loading/maintenance dose, half-life    |     10–13 |
>| 7       | Pharmacodynamics + antagonism                                           |     12–14 |
>| 8       | Dose-response curves, potency, efficacy, therapeutic index, TDM         |     13–15 |
>| 9       | Antidotes / selected poisoning treatments                               |        15 |
>| 10      | Drug receptors + second messengers                                      |     15–17 |
>| 11      | Drug development + clinical-trial phases                                |     17–18 |
>| 12      | Drug nomenclature, counterfeit/spurious/adulterated drugs, orphan drugs |        19 |
>| 13      | Expiry, essential medicines, storage, teratogenic drugs                 |        20 |
>| 14      | Drug management in pregnancy                                            |        21 |
>| 15      | Drug schedules / Indian regulatory terminology                          |     21–22 |
>| 16      | Pharmacovigilance + ADR classification                                  |     22–23 |
>| 17      | Pharmacogenetics + G6PD deficiency                                      |        23 |
# 1. Pharmacokinetics

## 1.1 Pharmacokinetics vs pharmacodynamics

- **Pharmacokinetics (PK):** study of how the drug moves through the body — the body's action on the drug.
- **Pharmacodynamics (PD):** study of the effects/actions produced by a drug, particularly after interaction with its molecular target — the drug's action on the body.

### Core distinction

```text
PHARMACOKINETICS = What the body does to the drug
                    ↓
                  ADME

PHARMACODYNAMICS = What the drug does to the body
                    ↓
              receptor/target → effect
```

**PDF location:** p. 1; the opening page also lists the primary PK parameters and the ADME sequence.

---

## 1.2 ADME framework

| Step             | Source definition                                                       | Main pharmacokinetic concept |
| ---------------- | ----------------------------------------------------------------------- | ---------------------------- |
| **Absorption**   | Drug crosses membranes, e.g. from GI tract into blood                   | Bioavailability (BA)         |
| **Distribution** | Movement from blood to tissues/organs                                   | Volume of distribution (Vd)  |
| **Metabolism**   | Chemical alteration of drug, often increasing polarity/water solubility | Metabolic clearance          |
| **Excretion**    | Removal of drug from body, primarily via urine                          | Renal clearance              |
| **Elimination**  | Metabolism + excretion                                                  | Clearance (CL)               |

### Primary and secondary PK parameters
- **Primary parameters:**
  - Bioavailability (**F / BA**) → principally relates to absorption.
  - Volume of distribution (**Vd**) → distribution.
  - Clearance (**CL**) → elimination.
- **Secondary parameters:** calculated from primary parameters, including:
  - Loading dose
  - Maintenance dose
  - Half-life

>[!info]- Verified/current Definitions 
>- **Clearance** is the volume of plasma from which drug is completely removed per unit time; mathematically, 
>$$
>Clearance\ =\frac{rate\ of\ elimination}{plasma\ concentration}
>$$
>- **Vd** is an **apparent** volume calculated from amount of drug in the body divided by plasma concentration. 
>$$
>V_d\ =\frac{amount\ of\ drug\ in\ body}{plasma\ concentration}
>$$

---

# 2. Mechanisms of Drug Absorption
## 2.1 Simple (passive) diffusion
- Described as the **most common method** of drug transport.
- Favoured by **lipid solubility**, because biological membranes are lipid/phospholipid-rich.
- **Non-ionized, non-polar, lipid-soluble** molecules cross membranes more readily.
- Highly polar/strongly ionized molecules cross lipid membranes poorly.

### High-yield comparison

| Property | Lipid-soluble / non-ionized drug | Polar / ionized drug |
|---|---|---|
| Membrane crossing | Easier | Poorer |
| Oral absorption | Often good | Often poor if strongly ionized |
| BBB penetration | Generally easier | Generally limited |
| Examples from PDF | — | Vancomycin, heparin, aminoglycosides (streptomycin, gentamicin) |

> **Clinical caveat:** A drug's oral absorption cannot be predicted from ionization alone; molecular size, lipophilicity, transporters, GI stability, formulation and permeability also matter. The source uses vancomycin, heparin and aminoglycosides as classic examples of highly polar/ionized drugs with poor oral absorption and poor BBB penetration.

---

## 2.2 Weak acids and weak bases; pKa
- Most drugs are weak acids or weak bases.
- **pKa** is the pH at which approximately **50% of a weak drug is ionized and 50% is unionized**.
>- I believe pKa ∝ base strength ∝ $\frac{1}{acid\ srength}$
- The source gives:
  - **Aspirin pKa ≈ 3.5** → weak acid.
  - **Morphine pKa ≈ 8.5** → weak base.
### Henderson–Hasselbalch equation

**[OCR/visual correction]** The PDF line is directionally correct but compresses the equation.

For a **weak acid**:
$$
pH = pKa + log\frac{[A⁻]}{[HA]}
$$
For a **weak base**:
$$
pH = pKa + log\frac{[B]}{[BH^+]}
$$
Where the **unionized** form usually crosses lipid membranes more readily than the charged form.

### Practical ionization rule
- A weak **acid** is relatively more **unionized** in an acidic environment.
- A weak **base** is relatively more **unionized** in a basic environment.
- In an environment of the opposite pH, the drug becomes more ionized and less membrane-permeable.

>[!abstract]
Weak acid  + acidic medium  → relatively more HA (unionized) → membrane crossing ↑
Weak base  + basic medium   → relatively more B  (unionized) → membrane crossing ↑
Weak acid  + basic medium   → A⁻ (ionized)                 → membrane crossing ↓
Weak base  + acidic medium  → BH⁺ (ionized)                → membrane crossing ↓

> **Exam correction:** The PDF states that changing pH by 1 unit changes ionization by 10%. The more precise statement is that a one-unit difference between pH and pKa changes the **ionized:unionized ratio by a factor of 10** for a simple monoprotic weak acid/base.

---

## 2.3 Ion trapping
The PDF illustrates ion trapping using aspirin:
```text
Aspirin (weak acid, pKa ~3.5)
            ↓
Acidic gastric environment
            ↓
More unionized form
            ↓
Crosses into cells
            ↓
Cell interior is relatively less acidic / near-neutral
            ↓
Greater ionization of aspirin
            ↓
Reduced ability to diffuse back
            ↓
ION TRAPPING
```

The source links this concept to gastric mucosal injury and ulceration and mentions proton-pump inhibitors such as omeprazole/pantoprazole in the treatment context.

**[PDF caution]** The clinical mechanism of aspirin-related ulceration is much broader than simple ion trapping and includes COX inhibition, reduced mucosal prostaglandins and impaired mucosal defense. The diagram should therefore be used as an **ionization concept**, not as a complete explanation of NSAID ulcer pathophysiology.

---

## 2.4 Other transport pathways
### Endocytosis / pinocytosis
- Uptake through membrane vesicles.
- PDF examples: **botulinum toxin**, **vitamin B6**.
### Filtration / paracellular transport
- Passage through aqueous/paracellular pathways.
- PDF example: **subcutaneous insulin** is described as passing through paracellular spaces.
### Facilitated diffusion
- Requires a transporter.
- **No ATP requirement**.
- PDF example: **5-fluorouracil (5-FU)**.
### Active transport
- Requires a transporter and cellular energy.
- PDF examples: **methyldopa**, **levodopa**.

> **Clarification:** Transporter nomenclature is more complex than the slide implies; drug uptake/efflux can involve multiple transporter families, and the exact mechanism is substrate-specific.

---

# 3. P-Glycoprotein and Drug Transport
The source describes P-Glycoprotein (P-gp) as:
- An **ATP-binding cassette (ABC) efflux transporter**.
- Also referred to in the PDF as **MDR-1** (multidrug resistance protein).
- It pumps substrates **out of cells**.
- **Clinical locations/effects highlighted by the PDF**

| location       | effect of P-gp                  |
| -------------- | ------------------------------- |
| GI tract       | limits absorption               |
| Kidney/liver   | contributes to drug elimination |
| BBB / barriers | limits CNS entry                |
| Cancer cells   | contributes to drug resistance  |
### Digoxin example
- **Digoxin** is a classic P-gp substrate.
- **Rifampicin** → P-gp induction → increased P-gp activity → lower digoxin exposure/effect.
- PDF mnemonic for P-gp inhibitors (best remembered as drugs that can cause digoxin toxicity): **QUACK**
  1. **Q**uinidine
  2. **V**erapamil
  3. **A**miodarone
  4. **C**larithromycin / ==erythromycin ==/ cyclosprine
  5. ==**K**etoconazole==

> **[Verified/current]** Use the mnemonic as an exam aid, not as an exhaustive interaction database.

---

# 4. Routes of Drug Administration
## 4.1 Oral route and first-pass metabolism
```text
Oral drug
   ↓
GI absorption (mainly small intestine)
   ↓
Portal vein
   ↓
Liver
   ↓
Systemic circulation
```
### First-pass metabolism (FPM)
- Metabolism of drug **before it reaches systemic circulation**.
- Greater first-pass effect → **lower oral bioavailability**.

**Examples** of drugs with substantial first-pass metabolism:
1. Fentanyl
2. Lidocaine (lignocaine)
3. Natural estrogen
4. Propranolol
5. Morphine
6. Nitrates

High-first-pass drugs may require alternative routes or larger oral doses depending on the drug.
#### Bypassing hepatic first pass
##### 1. Sublingual

```text
Sublingual mucosa
      ↓
Systemic venous drainage
      ↓
SVC → heart
```

- Rapid onset.
- PDF example: **sublingual nitrates** for acute angina.

##### Rectal
- The PDF emphasizes drainage of the lower/external hemorrhoidal circulation into systemic circulation and therefore partial avoidance of first-pass metabolism.
- Example: **rectal diazepam** for acute seizure rescue in children.

> **Clarification:** Rectal absorption and first-pass avoidance are **partial and variable**, not absolute, because upper rectal venous drainage enters the portal system.

##### Intramuscular (IM) — Z-track technique
1. Pull the skin laterally/downward.
2. Insert needle at ~90°.
3. Inject the drug.
4. Release the skin after injection.

**Purpose:** reduce back-leakage of drug into subcutaneous tissue.

**Examples**:
- Iron injections.
- Depot/long-acting antipsychotic preparations.

##### Transdermal route
- Provides sustained drug delivery.
- Can produce relatively stable plasma concentrations.

###### Transdermal absorption sites
- **Maximum absorption:** posterior auricular/mastoid region, scrotum, face/neck.
- **Minimum absorption:** palms and soles because of thick stratum corneum.

###### Transdermal examples

| Drug                          | Clinical use in PDF |
| ----------------------------- | ------------------- |
| Nicotine                      | Smoking cessation   |
| Scopolamine / diphenhydramine | Motion sickness     |
| Nitrates                      | Chronic angina      |
| Clonidine                     | Hypertension        |
| Selegiline                    | Depression          |
| Rivastigmine                  | Alzheimer's disease |
| Rotigotine                    | Parkinson disease   |
| Estrogen                      | HRT                 |

> **Note:** Not every drug listed as an example necessarily uses the same transdermal formulation in every country; formulations are product-specific.

---

# 5. Bioavailability and Bioequivalence
## 5.1 Bioavailability (F)
> Fraction of the administered dose that reaches systemic circulation in **unchanged form**.

- **IV bioavailability = 100%** by definition (assuming accurate administration into the vascular compartment).
$$
Bioavailability\ ≈\frac{AUC(oral)}{AUC(IV)}
$$
>**[Verified/current]** For unequal doses, the ratio must be dose-normalized:
>$$
Bioavailability\ ≈\frac{AUC(oral)\ \times Dose_{iv}}{AUC(IV)\ \times Dose_{oral}}
$$

- **AUC (area under the plasma concentration–time curve)** reflects total systemic exposure.
- **Cmax:** maximum plasma concentration.
- **Tmax:** time to maximum concentration; often used as an indicator of the **rate** of absorption.

## 5.2 Bioequivalence
- Used to compare systemic exposure from different formulations/brands of the **same active drug**.
- Acceptable variation: **80–125%**.
- The slide uses phenytoin as a cautionary example because of its narrow therapeutic range.
	- Phenytoin has a **narrow therapeutic index** and nonlinear/saturable pharmacokinetics at relevant concentrations.
	- Different Phenytoin brands have different bioequivalence value
	- Changing the brand can lead to toxicity or seizure

>**[Verified/current]** 
>- The familiar **80–125%** interval is not simply “acceptable variation between brands.” In standard average bioequivalence testing, the **90% confidence interval** for the ratio of geometric means of the relevant log-transformed PK parameters (commonly AUC and Cmax) is assessed against prespecified equivalence limits, often 80–125%. 
>- The PDF's blanket claim that different brands are “bio-inequivalent” should **not** be taken as a universal regulatory statement.
>- In practice, switching formulations of a narrow-therapeutic-index drug may warrant clinical and/or concentration monitoring depending on the drug, formulation and local policy.

---

# 6. Volume of Distribution (Vd)
## 6.1 Definition
- Vd is the ==apparent== volume relating the **amount of drug in the body** to the **plasma concentration**.
>- Volume of plasm required to keep the drug in same concentration as that of plasma 
- It is not necessarily a real anatomical volume.

$$
V_d\ =\frac{amount\ of\ drug\ in\ body}{plasma\ concentration}
$$

**Interpretation:**

| Vd        | Typical interpretation                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------ |
| Low       | Drug predominantly remains in plasma/extravascular distribution is limited                             |
| High      | Drug is extensively distributed into tissues and/or strongly tissue-bound                              |
| Very high | Extensive tissue sequestration (into fat or other tissues); plasma concentration may be relatively low |

## 6.2 Factors affecting Vd
- ↑ Lipid solubility → generally ↑ Vd.
- ↑ Plasma protein binding → generally ↓ Vd.
- Plasma protein is an important determinant.
- Example: **warfarin** is ~99% albumin-bound and highly lipid soluble.

**Patient-related factors**
- Age
- Sex/gender
- Pregnancy
- Liver disease → altered plasma proteins
- Nephrotic syndrome / CKD → altered protein concentration/binding
- Hemorrhage
- Shock / altered tissue perfusion

**[Verified/current]** Vd is influenced by both plasma protein binding and tissue binding, as well as blood flow and body composition. 

## 6.3 Plasma protein displacement
Two drugs can compete for plasma protein binding sites. Displacement can transiently increase the **free fraction** of a drug.

### Phenytoin + valproate
```text
Valproate competes at albumin
        ↓
Phenytoin free fraction ↑
        ↓
More drug available for distribution / effect
        ↓
Potential toxicity
```

> **Clinical caveat:** Protein-displacement interactions do not automatically cause clinically significant toxicity because the rise in free drug may also increase distribution and elimination. The clinical relevance depends on the drug's clearance, therapeutic index, and other PK properties.

### Sulfonamides + bilirubin in neonates
- Sulfonamides/cotrimoxazole may displace bilirubin from albumin.
- Increased free bilirubin can enter the neonatal brain when the blood–brain barrier is immature.
- The slide links this to **kernicterus** and cautions against use in neonates and late pregnancy.

---

## 6.4 Vd and Hemodialysis
- **High Vd / high protein binding** → dialysis often ineffective because much of the drug is outside plasma or protein-bound.
- **Low Vd / low protein binding** → dialysis more likely to remove drug because more free drug is in plasma.

| Hemodialysis is useful    | “No role” of hemodialysis |
| ------------------------- | ------------------------- |
| Barbiturates              | Amphetamine               |
| ==Lithium==               | Verapamil / warfarin      |
| Alcohol                   | ==Organophosphates==      |
| ==Aspirin / salicylates== | Imipramine                |
| ==Theophylline==          | ==Digoxin==               |
|                           | ==Amiodarone==            |
|                           | ==Benzodiazepines==       |
|                           | ==Chloroquine==           |

>  Chloroquine have an extremely large Vd (~15,000 L), extensive tissue deposition and retinal deposition, producing **bull's-eye/target maculopathy**.

> [!warning]- Current toxicology clarification
> **[Verified/current]** Dialysis decisions are **drug- and poisoning-specific** and should not be based on Vd alone. Current EXTRIP recommendations support extracorporeal treatment in selected severe poisonings, including:
> - **Lithium:** extracorporeal treatment is recommended in severe poisoning under defined clinical/serum-concentration criteria; intermittent hemodialysis is preferred. 
> - **Salicylates:** extracorporeal treatment is recommended in severe poisoning; intermittent hemodialysis is preferred, with bicarbonate therapy continuing between sessions. 
> - **Theophylline:** extracorporeal treatment is recommended in severe poisoning; intermittent hemodialysis is preferred. 
> 
> Therefore, the PDF's table is useful for **exam pattern recognition**, but the real-world rule is →  **consult poison-center/toxicology guidance and indication-specific extracorporeal-removal criteria.**

# 7. Redistribution
- Seen with highly lipid-soluble drugs, particularly some **general anesthetics** such as **thiopentone** and also fentanyl.

### Classic thiopentone concept

IV thiopentone
    ↓
Rapid brain entry
    ↓
Unconsciousness
    ↓
Later redistribution from brain → muscle/fat/other tissues
    ↓
Brain concentration falls
	↓
Anesthetic effect ends rapidly

**Important distinction:** 
- Redistribution is not the same as elimination. 
- Termination of action of all drugs: *Elimination*
- ==Termination of action of Thiopentone: *Redistribution*==

---

# 8. Drug Metabolism / Biotransformation
## 9.1 Definition and purpose
- The **liver** is the major organ of *drug metabolism*.
>- Biotransformation commonly converts relatively lipid-soluble/nonpolar compounds into more polar compounds that are easier to eliminate.
- The **kidney** is the principal organ of *drug excretion*.


Lipid-soluble drug
       ↓
Biotransformation
       ↓
More polar / water-soluble metabolite
       ↓
Renal or other excretion

>Metabolism does not invariably “inactivate” a drug or simply convert it from fat-soluble to water-soluble form. It may produce *inactive metabolites, active metabolites or sometimes toxic metabolites*, and some drugs are administered as prodrugs that require metabolic activation.

## 9.2 Outcomes of metabolism
### Active → inactive
Most common ; pharmacological action decreases after metabolism.

### Active → active
The parent drug is active and the metabolite is also active.
Mnemonic: **FAT CP**

| Parent drug        | Active metabolite |
| ------------------ | ----------------- |
| **F**luoxetine     | Norfluoxetine     |
| **A**llopurinol    | Oxypurinol        |
| **D**iazepam       | Oxazepam          |
| **C**odeine        | Morphine          |
| **P**rimidone      | Phenobarbital     |
| **S**pironolactone | Canrenone         |

> The mnemonic lettering in the PDF is a teaching aid rather than a formal pharmacology classification.

### Inactive → active (prodrug)
  Mnemonic **PLASMA CCD**, including:

| Prodrug                                                          | Pharmacologically active                                                                                                              |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| *P*rednisone                                                     | prednisolone                                                                                                                          |
| *L*evodopa                                                       | dopamine                                                                                                                              |
| *A*CE inhibitors (many, but not all, ACE inhibitors are prodrugs | Captopril and lisinopril are not prodrugs)                                                                                            |
| *S*ulfasalazine                                                  | active metabolites                                                                                                                    |
| *M*ycophenolate mofetil                                          | mycophenolic acid                                                                                                                     |
| *A*cyclovir (Valacyclovir is the prodrug)                        | Acyclovir is the pharmacological active metabolite                                                                                    |
| *C*arbimazole                                                    | methimazole (the conversion relationship is drug-dependent and not a classic universal “prodrug” rule in the same sense as enalapril) |
| *C*lopidogrel                                                    | active metabolite                                                                                                                     |
| *D*ipivefrin                                                     | epinephrine                                                                                                                           |

**[Verified/current correction]** The PDF's “all ACE inhibitors except captopril and lisinopril” shortcut is too broad if interpreted literally. Some ACE inhibitors are administered as active drugs and others as prodrugs; check the individual agent.

**[OCR/visual correction]** The PDF's “Acyclovir” entry should not be treated as an inactive→active prodrug example: **acyclovir itself is pharmacologically active** (after phosphorylation within infected cells). The related prodrug is **valacyclovir**.

---

# 9. Hepatic Metabolism: Phase I and Phase II
```text
Drug
 ├─ Phase I: oxidation / reduction / hydrolysis
 │              ↓
 │          functionalized metabolite
 │
 └─ Phase II: conjugation
                ↓
            more polar metabolite
                ↓
             excretion
```

## 10.1 Phase I reactions
Drug becomes inactive or active
A drug is broken into smaller parts
Described as **functionalization / catabolic** reactions:
- Oxidation
- Reduction
- Hydrolysis
- Cyclization / decyclization (included in the source)
Many oxidation/reduction reactions are carried out by **CYP450 enzymes** associated with the smooth endoplasmic reticulum (microsomal system) aka ==Microsomal Reaction==
## 10.2 Phase II reactions
Drug becomes inactive only
Conjugation reactions that generally attach a polar group to the parent drug/metabolite:
- Glucuronidation
- Glycine conjugation
- Sulfation
- Methylation
- Glutathione conjugation
- Acetylation

Most glucuronidation is microsomal while many other conjugation pathways are non-microsomal.

> [!warning] These reactions are not essentially sequential
> Phase I and Phase II are not obligatorily sequential. A drug may undergo Phase II without Phase I, and some drugs/metabolites can undergo several pathways. 

---

## 10.3 CYP450 System

| CYP            | PDF examples                                                   | High-yield note                                                                   | Induced by |                            |
| -------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------- | -------------------------- |
| **CYP1A2**     | Theophylline, clozapine                                        | ==Induced by smoking==                                                            |            |                            |
| **CYP2C19**    | Clopidogrel                                                    | Bioactivation of clopidogrel                                                      | Omeprazole |                            |
| **CYP2C9**     | Phenytoin, warfarin                                            | Genetic variability; warfarin sensitivity affected by CYP2C9                      |            |                            |
| **CYP2D6**     | Propranolol, haloperidol, fluoxetine, codeine, antiarrhythmics | Major pharmacogenetic variability                                                 |            |                            |
| **CYP2E1**     | Paracetamol                                                    | Important for toxic metabolite formation. Can be induced or inhibited by alcohol. |            |                            |
| **==CYP3A4==** | Atorvastatin, estrogen and many other drugs                    | ==Major drug-metabolizing CYP pathway==                                           | Rifampicin | Ketoconazole, Erythromycin |
|                |                                                                |                                                                                   |            |                            |

**[Verified/current]** CYP-mediated metabolism shows substantial genetic variation and clinically important interactions through enzyme inhibition and induction. 

> **[PDF caution]** “CYP3A4 metabolizes >50% of all drugs” is an exam mnemonic/approximation, not a precise modern quantitative rule.

---

## 10.4 Enzyme Inducers and Inhibitors

### Inducers — mnemonic “GRASS”
- **G**riseofulvin
- **R**ifampicin / rifampin
- **A**nti-epileptics: ==phenobarbital==, phenytoin, carbamazepine
- **S**moking
- **S**t. John's wort
- The PDF also lists **alcohol**, particularly chronic exposure.

```text
Enzyme inducer
      ↓
CYP/transporter activity ↑
      ↓
Faster metabolism of susceptible substrate
      ↓
Drug exposure ↓ (often)
```

### Inhibitors —  mnemonic “COKE + IVC”
- **C**imetidine
- **O**meprazole
- **K**etoconazole
- **E**rythromycin / macrolide example
- **I**soniazid
- **V**alproate
- **C**iprofloxacin
- Grapefruit juice (furanocoumarins)
- Acute alcohol
- Ritonavir

### Alcohol
- **Chronic alcohol** → enzyme induction.
- **Acute alcohol** → enzyme inhibition.

This is a useful high-yield distinction, especially for **CYP2E1**-related metabolism.

### Important PDF overstatement

  “All antiepileptics are enzyme inducers except valproate” is **not correct as a universal statement**. Enzyme-inducing antiseizure medicines include classic agents such as carbamazepine, phenytoin and phenobarbital; other antiseizure drugs have different or minimal induction effects. Use individual drug data.

Similarly, the PDF statement that **isoniazid inhibits all CYP enzymes except CYP2E1** is too broad. Isoniazid has clinically relevant interactions involving several enzymes, but “all except one” should not be learned as a literal pharmacology rule.

---

## 10.5. High-Yield Drug Interaction
### 1. Rifampicin + oral contraceptives

Rifampicin
   ↓ `enzyme/transporter induction`
Faster metabolism of estrogen/progestins
   ↓
Hormonal contraceptive exposure/effect ↓
   ↓
Contraceptive efficacy can be reduced

### 2. Clopidogrel + omeprazole
>Clopidogrel (prodrug)
>       ↓
>CYP2C19 activation
>       ↓
>Active metabolite

>Omeprazole inhibits CYP2C19
>       ↓
>Active clopidogrel metabolite ↓
>       ↓
>Platelet inhibition ↓

**[Verified/current]** Current clopidogrel labeling specifically advises avoiding **omeprazole or esomeprazole** because they significantly reduce clopidogrel's antiplatelet activity. 

### 3. Erythromycin / ketoconazole + older QT-prolonging drugs

  Certain QT prolonging drugs are metabolized by CYP3A4, such as **CAT**:
- Cisapride
- Astemizole
- Terfenadine

- Inhibition of metabolism by ketoconazole/erythromycin → accumulation → **QT prolongation → torsades de pointes**, 
- These agents are no longer in routine clinical use / have been withdrawn or restricted in many jurisdictions.

**Study point:** Keep this as a **historical pharmacology interaction concept**; do not interpret it as an up-to-date list of currently marketed drugs.

---

## 10.6. Acetylation and Genetic Variation
N-Acetyltransferase enzyme is involved
It has 2 types:
1. NAT1
2. NAT2


#### NAT2 polymorphism
NAT2 levels can differ considerably among different individuals. 
- **Fast acetylators:** higher acetylation capacity.
- **Slow acetylators:** lower acetylation capacity.
- Slow acetylation can increase exposure to some substrates and alter toxicity risk.

Drugs handled by NAT2:
- **S**ulfonamides (sulfamethoxazole, sulfadiazine)
- **H**ydralazine
- **I**soniazid
- **P**rocainamide (Type 1B antiarrhytmic like lidocaine)
- **D**apsone (Sulfonamide antimicrobial, used in leprosy)

> Mnemonic: SHIP Drugs

**[PDF caution]** 
	The slide associates fast acetylators with “Americans” and slow acetylators with “Indians/low-protein diets.” This population shorthand is outdated and should **not** be used as an individual patient's genotype or phenotype. NAT2 variation is genetically determined and population frequencies differ, but individual phenotype cannot be reliably inferred from ethnicity alone.

---

# 11. Extrahepatic Metabolism and Hoffman Elimination
## Plasma esterases
- Some drugs are metabolized by esterases in plasma before reaching the liver.
- Examples:
  - **Esmolol** — very short-acting beta-blocker.
  - **Remifentanil** — very short-acting opioid.
  - **Clevidipine** — very short-acting dihydropyridine calcium-channel blocker.
  - **Landiolol** — even shorter-acting beta-blocker than esmolol is highlighted in the source.

## Pseudocholinesterase metabolism
- **Succinylcholine** → plasma pseudocholinesterase (butyrylcholinesterase) metabolism.
- Deficiency / atypical enzyme → ==prolonged paralysis/apnoea==
## Hoffman elimination
- Spontaneous chemical degradation in the body.
- Does **not require hepatic or renal organ function** for the spontaneous degradation step.
- No metabolic enzyme is required for the key elimination reaction.
- Important drugs:
  - **Atracurium**
  - **Cisatracurium**

**Clinical pearl:** Particularly useful when prolonged neuromuscular blockade from organ failure is a concern.

---

# 12. Excretion and Elimination
## 12.1 Routes of excretion
- **Major:** urine.
- **Minor:** bile, sweat, saliva, tears and breast milk.
### General pathway
```text
Drug
 ↓
Metabolism (often, but not always)
 ↓
More polar / excretable species
 ↓
Kidney / bile / other routes
```
## 12.2 Enterohepatic recirculation
Classic example used by the PDF: estrogen from an oral contraceptive.


Liver
 ↓ bile
Intestine
 ↓ bacterial deconjugation / metabolism
Reabsorption
 ↓
Portal circulation
 ↓
Liver


The PDF states that antibiotics can kill intestinal bacteria, reduce estrogen reabsorption and cause contraceptive failure.

**[Verified/current clarification]** This statement is **too broad** when attributed to routine non-rifamycin antibiotics. The major clinically established antibiotic interaction that can substantially reduce combined hormonal contraceptive effectiveness is with **enzyme-inducing antibiotics such as rifampicin/rifabutin**. Routine broad-spectrum antibiotics generally do **not** require backup contraception solely because of enterohepatic interruption.

## 12.3 Drug excretion into breast milk — “SMAL”
- **S**ulfonamides → bilirubin displacement / concern for kernicterus.
- **M**ethotrexate → antineoplastic / potentially toxic.
- **A**spirin → the PDF mentions neonatal Reye syndrome *concern*.
- **L**ithium → passes into breast milk and may expose the infant.

**Clinical caveat:** Breastfeeding decisions are drug-specific; use lactation references and current product labeling rather than the mnemonic alone. Aspirin-associated Reye syndrome is primarily an issue with **aspirin use in children/adolescents with certain viral illnesses**, and is not best represented as a simple “breast milk → Reye syndrome” rule.

---

## 12.4. Renal Excretion
### 12.4.1 Glomerular filtration
- Passive process.
- Only the **unbound** fraction is readily available for filtration.
- High plasma protein binding → less filtration.

The PDF depicts the glomerular barrier as negatively charged and suggests preferential filtration of acidic relative to basic drugs.

> **Correction:** Renal filtration depends strongly on molecular size, charge and protein binding. The “acidic drugs are filtered more than basic drugs” statement is an oversimplified slide shortcut and should not be treated as a universal law.

### 12.4.2 Active tubular secretion
Active secretion uses transport systems and energy.

- **Organic anion transport systems** → examples include ==penicillin-type acidic drugs.==
- **Organic cation transport systems** → handle many basic drugs.
- P-gp participates in renal secretion of certain substrates such as ==digoxin==.

#### Probenecid–penicillin interaction
Probenecid is the uricosuric drug used in gout. It acts by blocking the organic anion transporters in kidney

```text
Probenecid
   ↓
blocks the organic anion transporters in kidney
   ↓
Penicillin renal clearance ↓
   ↓
Plasma concentration / duration ↑
```

  This is a classic and important pharmacology interaction.

### 12.4.3 Forced Diuresis / Urinary Alkalinization

#### Principle
Ionized, water-soluble drug molecules are less likely to undergo tubular reabsorption; therefore urinary pH can sometimes be manipulated to increase elimination of selected drugs.

#### Forced alkaline diuresis / urine alkalinization

```text
Acidic drug
   + alkaline urine
        ↓
Ionization ↑
        ↓
Tubular reabsorption ↓
        ↓
Urinary excretion ↑
```

examples:
- Salicylates (aspirin)
- Methotrexate
- Barbiturates
- Paracetamol is listed by the PDF, although **urinary alkalinization is not a standard routine treatment for acetaminophen/paracetamol poisoning**.

**[Verified/current]** Urinary alkalinization with IV sodium bicarbonate is an established strategy in **salicylate poisoning**, and extracorporeal therapy may be indicated in severe poisoning. 

##### “Antidote” wording

- **Salicylate poisoning:** sodium bicarbonate is part of poisoning management, primarily for serum/urine alkalinization and correction of acid-base abnormalities in appropriate patients.
- The PDF's presentation of bicarbonate as a generic “antidote” is therefore a simplification.

#### Acidifying urine
The source describes:

```text
Basic drug
 + acidic urine
      ↓
Ionization ↑
      ↓
Reabsorption ↓
      ↓
Excretion ↑
```

It gives **ammonium chloride** as the acidifying agent and lists basic drug poisonings including amphetamine, morphine, atropine and quinine.

**[Current clinical caution]** Deliberate urinary acidification is **rarely used in modern poisoning practice** because of limited benefit and potential harm. Do not use this as a bedside poisoning protocol without current toxicology guidance.

---

# 13. Clearance
## Definition
> Clearance is the body's capacity to remove a drug from plasma.

**Verified/current:**

```text
CL = rate of drug elimination / plasma concentration
```

Clearance is conventionally expressed as a **volume/time** (e.g. L/h or mL/min). 

---

# 14. First-Order vs Zero-Order Kinetics

## 14.1 First-order kinetics
- High/adequate clearance capacity relative to the drug concentration.
- A **constant fraction** is removed per unit time.
- Elimination rate is proportional to plasma concentration.
- Half-life is constant.
- Most drugs behave approximately as first-order systems over their therapeutic concentration range.

Example concept:

```text
100 → 50 → 25 → 12.5 → 6.25
```


## 14.2 Zero-order (capacity-limited / saturation) kinetics
- Elimination pathway becomes saturated.
- A **constant amount** is removed per unit time.
- Elimination rate is independent of concentration once fully saturated.
- Half-life is **not constant**; it increases as concentration increases.

Example concept:

```text
100 → 90 → 80 → 70 → 60
```

### “WHATSAPP” mnemonic

- **W**arfarin
- **H**eparin
- ==**A**lcohol==
- **T**heophylline
- ==**S**alicylates==
- ==**P**henytoin==

**[PDF caution]** The mnemonic is **not a reliable list of drugs that are purely zero-order at all concentrations**. Important examples of capacity-limited kinetics include **ethanol**, **phenytoin** at therapeutic/supra-therapeutic concentrations, and **high-dose salicylates**. Some drugs show mixed or concentration-dependent kinetics rather than pure zero-order behavior across all doses.

---

# 15. Pharmacokinetic Formulas
## 15.1 Loading dose
For IV administration:

$$
\text{Loading dose} = Vd\times \text{Target plasma concentration}
$$

**[Verified/current]** For a non-IV route with incomplete bioavailability:
$$
\text{Loading dose} = \frac{Vd\times \text{Target plasma concentration}}{F}
$$
where, F = Bioavailability

The dose is primarily determined by **Vd** and the desired target concentration.

## 15.2 Maintenance dose
$$
\text{Maintenance dose rate} = Clearance \times \text{Target plasma concentration}
$$
Where clearance is
$$
Clearance\ =\frac{rate\ of\ elimination}{plasma\ concentration}
$$
So maintainence Dose rate becomes
$$
\text{Maintainence Dose rate = rate of elimination}
$$

**[Verified/current]** For a route with bioavailability `F`:

$$
\text{Maintenance dose rate} = \frac{Clearance \times \text{Target plasma concentration}}{F}
$$

For intermittent dosing at dosing interval `τ`, the dose per interval is approximately:


$$
\text{Maintenance dose rate} = \frac{Clearance \times \text{Target plasma concentration} \times τ}{F}
$$
 Maintenance dosing is therefore driven primarily by **clearance**, not Vd.
---

# 16. Half-Life
## 16.1 Definition
> Time required for plasma concentration to fall by 50% after absorption.

**[Verified/current]** This formulation is most precise for first-order elimination in a suitable one-compartment/terminal-phase context; half-life is not universally constant under zero-order or complex multicompartment conditions.

### Equation

$$
t_½ = \frac{0.693}k
$$
$$k = \frac{CL}{V_d}$$

Therefore:
$$
t_½ = 0.693 \times \frac{Vd}{CL}
$$

>0.693 is natural log 2 or ln(2)
### Core relationship

```text
↑ Vd → ↑ half-life (if clearance unchanged)
↑ CL → ↓ half-life (if Vd unchanged)
```


## 16.2 Half-Life and Time to Steady State
Approximate fraction eliminated after successive half-lives:

| Half-lives | Fraction remaining | Fraction eliminated |
| ---------: | -----------------: | ------------------: |
|          1 |                50% |                 50% |
|          2 |                25% |                 75% |
|          3 |              12.5% |               87.5% |
|          4 |              6.25% |              93.75% |
|          5 |             3.125% |             96.875% |

### Practical rule

- ~**90% elimination:** about **3.3 half-lives**.
- ~**95% elimination:** about **4–5 half-lives**.
- **Steady state:** approximately **4–5 half-lives** for most first-order drugs under constant dosing.

```text
Dose repeatedly
    ↓
Accumulation
    ↓
~4–5 half-lives
    ↓
Steady state / near steady state
```

> **Important:** A loading dose can reduce the time needed to reach a target concentration; it does not change the drug's elimination half-life.

---

# 17. “Hit-and-Run” / Irreversible Drug Action
Hit-and-run drugs** / “suicide inhibitors” are drugs whose effect persists even after the drug has fallen substantially or disappeared from plasma because the target has been irreversibly modified.
```text
Drug binds target irreversibly
        ↓
Drug leaves plasma / is cleared
        ↓
Target remains functionally inhibited
        ↓
Effect persists until new target molecules are synthesized/recovered
```
Examples given:

- Aspirin → irreversible COX inhibition.
- MAO inhibitors → irreversible inhibition for some agents/classical teaching.
- PPIs (e.g. omeprazole) → irreversible inhibition of the gastric H⁺/K⁺-ATPase pump.
- Ritonavir is listed in the PDF as an irreversible HIV protease inhibitor example.

**[Verified/current correction]** Ritonavir is a **reversible, mechanism-based CYP3A inhibitor** used as a pharmacokinetic booster; it is not correctly described as an irreversible HIV protease inhibitor. For classic pharmacology, use **ritonavir** as a **reversible protease inhibitor with strong CYP3A inhibition**, not as a “hit-and-run” protease inhibitor.

# 18. Pharmacodynamics
## 18.1 Ligand categories
### Agonist
Produces a receptor-mediated effect.
- **Full agonist:** can produce the maximum system response.
- **Partial agonist:** produces a lower maximal response even when occupying available receptors at high concentration.

### Antagonist
- Binds a receptor/target but does not produce the receptor's usual effect.
- It blocks agonist action without changing basal activity.

### Inverse agonist
- Produces an effect in the **opposite direction** to constitutive receptor activity at receptors capable of spontaneous activity.

---

# 19. Types of Antagonism
## 19.1 Physical antagonism
- Agonist/drug is physically adsorbed or retained so that its absorption/action is reduced.
- Example: **activated charcoal** physically adsorbs many substances in the GI tract.

## 19.2 Chemical antagonism
Direct chemical interaction between substances
Neutralizes or removes the effect of one drug.
### Examples
- **Protamine sulfate** neutralizes **heparin**.
- **Chelators** bind metals in poisoning.
- **Sugammadex** encapsulates and reverses steroidal neuromuscular blockers such as **rocuronium and vecuronium**.

## 19.3 Physiological / functional antagonism
Different receptors/pathways produce opposing physiological effects.

| Drug/effect pair              | Opposing physiological actions         |
| ----------------------------- | -------------------------------------- |
| PTH vs calcitonin             | Raises vs lowers serum calcium         |
| Beta-blocker vs glucagon      | Bradycardic vs chronotropic effect     |
| Insulin vs glucagon/GH        | Lowers vs raises glucose               |
| Histamine H1 vs adrenaline β2 | Bronchoconstriction vs bronchodilation |
| Prostacyclin vs TXA2          | Anti-platelet vs pro-platelet effects  |

## 19.4 Pharmacological antagonism
The antagonist interacts with the **same receptor system** as the agonist.
### Competitive antagonist
- Usually binds the same site as the agonist.
- Often structurally similar enough to compete at the same binding site.
- Usually reversible.
- Its effect can be **surmounted** by increasing agonist concentration when the interaction is classic reversible competitive antagonism.

Examples:
- Phenoxybenzamine is listed by the PDF as an alpha antagonist, although it is actually **irreversible**.
- Propranolol → beta antagonist.

> **Correction:** Do not group **phenoxybenzamine** with reversible competitive antagonists; it is a **non-competitive/irreversible alpha-adrenoceptor antagonist** in classical pharmacology.

### Irreversible / non-surmountable antagonism
- Antagonist may bind covalently or otherwise reduce available receptor function.
- Increasing agonist concentration does not fully restore the maximal response.

### Non-competitive antagonism
- Often described as binding at an allosteric/neighboring site.
- Usually produces a non-surmountable reduction in maximum response.

**[PDF caution]** “Non-competitive = always irreversible” is not correct. Non-competitive antagonism can be **reversible or irreversible**, depending on mechanism.

---

# 20. Dose–Response Curves (DRC)
There are two types:
1. Graded: here the response can be graded
2. Quantal: here the response to the drug is absolute and this one is plotted in a population where each person will either have the effect or not.

## 20.1 Graded dose-response curve
- Sigmoid when plotted against log dose/concentration.
- The graph compares agonist, competitive antagonist and non-competitive antagonist.

![[IMG_1138.png]]
### Key parameters
- **Emax / Vmax:** maximum response the agonist can produce.
- **Km or EC50:** concentration producing 50% of maximum response.

> **[OCR/terminology correction]** The PDF repeatedly uses **“Km”** for the dose producing 50% effect. In receptor pharmacology the standard term is **EC50** for a graded concentration–effect curve (or **ED50** in a suitable dose-response context). `Km` is primarily a Michaelis–Menten enzyme-kinetics term and should not be used as the default receptor DRC parameter.

### 20.1.1 Competitive antagonism on a graded DRC
Classic reversible competitive antagonism causes:

- **Rightward shift** of agonist concentration–effect curve.
- **Emax remains unchanged**.
- A higher agonist concentration is required to achieve the same response.
- Therefore **potency decreases**, but **efficacy is unchanged**.

```text
Agonist alone      → lower concentration needed
Agonist + CA      → curve shifts RIGHT
                     Emax unchanged
```

### 20.1.2 Non-competitive antagonism
Typical pattern when receptor function is reduced irreversibly or by allosteric mechanisms that cannot be overcome:

- **Emax decreases**.
- Full agonist dose escalation cannot restore the original maximum response.
- The curve may appear **downward-shifted**.

> **PDF simplification:** The slide says Km remains unchanged. Because the appropriate parameter is EC50 (not Km), the safest interpretation is: **competitive antagonism primarily changes apparent potency; non-competitive antagonism primarily reduces maximal efficacy.** Changes in EC50 can depend on the exact mechanism and receptor reserve.


## 20.2. Lineweaver–Burk / Reciprocal Plot 
![[IMG_1139.png]]
This plot linearized the Michaelis-Menten kinetics.
It is basically reciprocal of Michaelis-Menten Kinetics:
1. Y-axis:1/v
2. X axis: 1/Substrate Concentration
3. Intersection at y axis: 1/Vmax
4. Intersection at x axis: -1/Km

The slide shows reciprocal straight-line representations and states:
- Competitive antagonism → lines intersect because **maximum response is ultimately the same** in the classical reversible competitive model.
- Non-competitive antagonism → no recovery of the same maximum response.

**[Terminology caution]** Lineweaver–Burk plots are **enzyme kinetics**, not the standard modern graphical tool for receptor dose–response analysis. Retain this page as an exam-era pharmacology teaching device rather than a general receptor-pharmacology rule.

### PDF MCQ

> **Question:** True about competitive antagonism:
>
> a. Vmax is unchanged, but 50%-response concentration increases
>
> b. Vmax is reduced, but 50%-response concentration increases
>
> c. Vmax and 50%-response concentration increase
>
> d. Vmax and 50%-response concentration decrease
>
> **PDF answer:** **a**

## 20.3. Efficacy vs Potency
### Efficacy
- Maximum response produced by a drug.
- Independent of the dose once maximum response is reached.
- **Height of curve** = efficacy.
- Higher maximum curve = greater efficacy.

### Potency
- Amount/concentration of drug required to produce a specified level of effect, classically 50% of maximum effect in a graded DRC.
- More leftward curve = greater potency.

```text
Higher Emax      → greater EFFICACY
Further LEFT      → greater POTENCY
```

#### Important clinical distinction
  The slide states that drug selection depends primarily on efficacy rather than potency.

**[Verified/current clarification]** Neither potency nor efficacy should be treated as a universal stand-alone rule for choosing a drug. Clinical selection depends on the indication, effect required, therapeutic index, adverse effects, interactions, dosing convenience, evidence, patient factors, and many other properties. The graph is a **pharmacology concept**, not a clinical prescribing algorithm.

---

## 20.4 Quantal Dose–Response Curve
- Measures an **all-or-none outcome across a population**.
- Response is expressed as the **percentage of individuals responding**.

This is the curve from which population-based measures such as **ED50, TD50 and LD50** can be derived.


# 21. Therapeutic Index and Therapeutic Window
## 21.1 Therapeutic index (TI)
$$
TI = \frac{TD50}{ED50}
$$

- **ED50:** dose producing the desired therapeutic effect in 50% of a population.
- **TD50:** dose producing toxicity in 50%.
- **LD50:** dose producing lethality in 50% (largely a toxicology/research concept, not a routine human clinical dosing quantity).

>Bigger number means more margin between helpful and harmful
### PDF example
- ED50 = 100
- LD50 = 400
```text
TI = 400 / 100 = 4
```

## 21.2 Therapeutic range/window
>Therapeutic Index shows how wide the Therapeutic Window is.

>  The area between effective and toxic concentrations is described as the therapeutic range.

**[Verified/current clarification]** In bedside pharmacology, **therapeutic window** is often described as the concentration range associated with desired efficacy with acceptable toxicity. It is not identical to simply “ED50 to TD50” in a mechanistic sense.

---

## 21.3 Narrow therapeutic index (NTI) drugs
The slide emphasizes therapeutic drug monitoring for:

- **Digoxin**
- Antiarrhythmics
- Aminoglycosides
- Theophylline
- Other CNS drugs
- Lithium
- Certain antiepileptics
- Antipsychotics
- Tricyclic antidepressants
- Immunosuppressants such as cyclosporine/tacrolimus
- Cancer drugs such as methotrexate

**[Verified/current]** TDM (Therapeutic Drug Monitoring) is drug-specific: the clinical usefulness and target ranges differ by drug, indication and patient. A drug having a relatively narrow therapeutic index does not automatically mean a serum concentration must always be measured.

> Phenytoin range: **10–20 µg/dL**.

---

# 22. Antidotes / Specific Poisonings

| Poison/drug                         | Antidote/treatment listed in PDF      | Important current note                                                                                                                                        |
| ----------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Digoxin                             | Digoxin immune Fab (Digibind/DigiFab) | Standard specific antidote in severe toxicity                                                                                                                 |
| Local anesthetic systemic toxicity  | 20% lipid emulsion                    | Standard lipid-rescue therapy in appropriate LAST. It is given iv and thus it changes the distribution of drug, which decreases the free blood levels of drug |
| Salicylates                         | Sodium bicarbonate                    | Urinary/serum alkalinization; severe cases may need extracorporeal therapy                                                                                    |
| Paracetamol                         | N-acetylcysteine (NAC)                | Standard antidote                                                                                                                                             |
| Opioids                             | Naloxone                              | Standard antagonist for opioid toxicity. Naltrexone is used for relapse prevention in opioid and alcohol use disorder                                         |
| Amphetamine                         | Ammonium chloride                     | **[PDF caution]** Urinary acidification is not standard modern routine management; supportive care is central.                                                |
| TCA                                 | Sodium bicarbonate                    | Key treatment for sodium-channel blockade/cardiotoxicity                                                                                                      |
| Organophosphates                    | Atropine + pralidoxime                | Standard approach in significant cholinergic toxicity                                                                                                         |
| Carbamates                          | Atropine                              | Oxime use is context-dependent; PDF's absolute “never pralidoxime” is too broad. they are also AChE inhibitors but they are reversible unlike OPCs.           |
| Atropine / antimuscarinic poisoning | Physostigmine                         | Selective use with contraindications and monitoring                                                                                                           |
| Methanol / ethylene glycol          | Fomepizole                            | Alcohol dehydrogenase inhibition; severe cases may need dialysis                                                                                              |
| Benzodiazepines                     | Flumazenil                            | **Selective use only**; can precipitate seizures/withdrawal in high-risk patients                                                                             |
| Calcium-channel blocker toxicity    | Calcium salts listed                  | Modern severe CCB toxicity management may also require high-dose insulin/euglycemia and other supportive measures                                             |
| Propranolol / beta-blocker          | Glucagon                              | Glucagon is a recognized therapy; severe toxicity may also need high-dose insulin and other advanced measures                                                 |

> **Clinical rule:** These are **high-yield antidote associations**, not complete poisoning protocols. Real overdose management is indication-, severity- and toxin-specific.

---

# 23. Receptor Classification
## 23.1 Four major receptor families

```text
1. Ligand-gated ion channels (ionotropic)
2. G-protein-coupled receptors (GPCRs)
3. Enzyme-linked / kinase receptors
4. Intracellular receptors
```

---

## 23.2 Ionotropic / ligand-gated ion-channel receptors
- Pentameric “rosette” in case of nicotinic acetylcholine receptor or GABA A receptor
- NMDA, AMPA: tetramers
- P2X: trimers

- Receptor opening directly conducts ions.
- Very fast responses.
### Excitatory examples
- **Nicotinic ACh receptor**
- **5-HT3 receptor**
- **NMDA receptor** (Glutamate)

### Inhibitory examples
- **GABA-A receptor**
- **Glycine receptor**


## 23.3. G-Protein-Coupled Receptors (GPCRs)
- Characteristic **7-transmembrane** structure. 
- Shape: Serpentine, Helical.
- Tail has a G-protein (GDP-bound) that activates second messengers
- Cytoplasmic G-protein couples the receptor to intracellular signalling systems.

#### Examples in PDF
- Muscarinic ACh receptors
- Most serotonin receptors (**except 5-HT3**)
- Alpha-adrenergic receptors
- Beta-adrenergic receptors
- Histamine receptors
- Opioid receptors
- Angiotensin receptors

#### High-yield hormone exception from the PDF
The slide notes that most hypothalamic/pituitary hormone receptors are GPCRs **except growth hormone and prolactin**, which use **JAK–STAT** signalling.

### 23.3.1 GPCR Second-Messenger Systems

#### Gs → ↑ cAMP
```text
Receptor
 ↓
Gs
 ↓
Adenylyl cyclase ↑
 ↓
cAMP ↑
 ↓
Protein kinase A / downstream effects
```
- Gs → stimulates adenylyl cyclase → increases cAMP.

#### Gi → ↓ cAMP
```text
Receptor
 ↓
Gi
 ↓
Adenylyl cyclase ↓
 ↓
cAMP ↓
```

#### Gq
Receptor
 ↓
Gq
 ↓
==Phospholipase C ↑==
 ↓
PIP2 → IP3 + DAG
 ↓
==Ca²⁺ mobilisation + PKC activation==


**MCQ:**

> Gq-type GPCR acts by activating:
>
> a. Adenylyl cyclase
>
> b. Phospholipase C
>
> c. Guanylyl cyclase
>
> d. Tyrosine kinase
>
> **Answer: b. Phospholipase C**

---

### 23.3.2 List of Second Messengers
1. IP3
2. DAG
3. cAMP
4. cGMP
#### cGMP and Nitric Oxide
```text
Nitric oxide (NO)
      ↓
Soluble guanylyl cyclase
      ↓
cGMP ↑
      ↓
Vasodilation
```

### Phosphodiesterase
These are the enzymes that degrade cAMP and cGMP

#### PDE inhibitors
- **Sildenafil** is used as the PDF example.
- PDE5 inhibition → reduced cGMP breakdown → cGMP increases → smooth-muscle relaxation/vasodilation.
- PDF indications:
  - Erectile dysfunction
  - Pulmonary arterial hypertension
## 23.4. Enzyme-Linked / Kinase Receptors
### 23.4.1 Receptor tyrosine kinase (RTK)
- Ligand binding activates kinase signalling where the **receptor is the kinase** in a way.
- The slide associates RTKs with growth and cellular proliferation pathways.

Examples (most are insulin and growth factors but not growth hormone):
- **Insulin**
- **IGF-1**
- **VEGF**
- **EGF**

### 23.4.2 JAK–STAT (Janus Kinase / Signal Transducer and Activator of Transcription) receptors
These **receptor lack enzyme activity** by themselves but are covalently attached to JAK enzyme which then hires STAT.
Used by (most are hormones related to growth and cellular development):
- Growth hormone
- Prolactin
- Erythropoietin
- Thrombopoietin
- Interleukins
- Interferons
- Leptin

```text
Ligand
  ↓
Receptor-associated JAK
  ↓
STAT phosphorylation
  ↓
STAT dimerization/translocation
  ↓
Gene transcription
```

---

## 23.5. Intracellular Receptors
Mechanism:
```text
Lipophilic ligand
      ↓
Crosses cell membrane
      ↓
Intracellular receptor
      ↓
DNA regulatory element
      ↓
Altered gene transcription
      ↓
New protein synthesis / genomic effect
```

### Cytoplasmic receptor examples
- Glucocorticoids
- Mineralocorticoids
- Testosterone
- Progesterone
- Vitamin D receptor is included by the PDF in the intracellular group.

### Nuclear receptor examples
- Thyroid hormone receptors (T3/T4)
- Retinoic acid receptors
- PPARs (Peroxisome proliferator activated receptor: regulates lipid metabolism, insulin sensitivity and inflammation)
- Estrogen receptors
  The slide explicitly notes that estrogen receptors are intranuclear while most classical steroid receptors are often taught as cytoplasmic before ligand binding.

---

# 24. Drug Development and Clinical Trials
## 24.1 Overall sequence
```text
Drug discovery
   ↓
Pre-clinical testing
   ├─ laboratory studies
   └─ animal studies
   ↓
Human clinical trials
   ↓
Regulatory review / market authorization
   ↓
Post-marketing surveillance
```

**[Verified/current]** Modern clinical development is iterative and some phases can overlap; the phase numbers are a conventional framework rather than an inflexible sequence. 

---

## 24.2 Clinical Trial Phases — PDF Table Reconstructed

| Phase | PDF label/design            | PDF participant concept            | Main purpose in PDF                                                                                         |
| ----- | --------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **0** | Microdosing                 | 5–10 healthy humans                | PK / target binding; very low radiolabelled dose                                                            |
| **1** | Safety & pharmacology       | 50–100 healthy humans              | Safety, dose range, MTD, ADME; not primarily efficacy                                                       |
| **2** | Therapeutic exploratory     | 500–1000 patients                  | **Preliminary efficacy**; randomized controlled designs; ==highest failure rate noted==                     |
| **3** | Therapeutic confirmatory    | 5000–10,000 heterogeneous patients | **Confirm efficacy**, compare against standard/gold-standard therapy, determine actual dose; most expensive |
| **4** | Post-marketing surveillance | Broad/unknown population           | Detect rare or previously missed adverse effects; action after approval                                     |
### Phase 0
- Microdosing is **not mandatory** in drug development.
- It can be used in selected early-development programs to obtain very early PK/target information.
### Phase 1
Primary focus:
- Safety
- Tolerability
- Dose range
- PK
- Early pharmacology
>Phase 1 is **not** primarily designed for → **efficacy**
### Phase 2
- Initial/therapeutic efficacy.
- Dose exploration.
- Additional safety information.
- Often randomized and controlled.
==Highest Failure Rate==
### Phase 3
- Larger confirmatory efficacy/effectiveness studies.
- More complete safety characterization.
- Comparison with placebo and/or active comparator.

### Phase 4
- Post-marketing surveillance.
- Detection of uncommon, delayed or population-specific harms.

---

## Clinical Trial MCQs from the PDF
### Q1. Phase 1 trial is not done for:

- a. Efficacy
- b. Safety
- c. Maximum tolerated dose
- d. Pharmacokinetics

**PDF answer: a — Efficacy**

### Q2. Phase 1 trial is mainly done for:
- a. Efficacy
- b. Safety
- c. Maximum tolerated dose
- d. Pharmacokinetics

**PDF answer: c — MTD**

**Correction:** Phase 1 is primarily **safety/tolerability and dose-finding**, with pharmacokinetic and pharmacodynamic evaluation. MTD is important in many first-in-human studies but is not the sole or universal endpoint. 

### Q3. Best data on safety
```text
Phase 3 > Phase 2 > Phase 1
```

and elsewhere simply:

```text
Phase 3 > Phase 2
```

**Interpretation:** Later-phase studies generally provide information from larger and more heterogeneous populations, but Phase 1 remains essential for initial safety characterization.
## Bridging Trials and Marketing in India
**Bridging trial** is a Phase 3 trial conducted in a new country for a drug already approved elsewhere.

Example: approved in Europe → seeking approval in India → bridging study.

**[Verified/current]** This is an oversimplification. India regulates clinical trials and new-drug approvals under the **New Drugs and Clinical Trials Rules (NDCTR) 2019**, and the requirement for local clinical data depends on the product, prior approvals, category and regulatory provisions. CDSCO's current FAQ describes circumstances in which local clinical trials may be waived for selected categories of drugs approved in specified countries, with conditions and often a post-marketing/Phase IV commitment. 

> **Exam takeaway:** The PDF's “Europe → India = automatically Phase 3” rule should be treated as an **exam-era simplification**, not a current blanket regulatory rule.


# 25. Placebo and Sham Surgery
## Placebo
- Inert/dummy intervention designed to resemble the investigational treatment sufficiently to maintain blinding.
- Used in randomized controlled trials where ethically appropriate.
## Sham surgery
- it is control or placebo to compare against for the actual intervention.
- A control intervention designed to mimic aspects of an actual procedure without delivering the therapeutic surgical component.
- Can be used in carefully designed trials when justified ethically and scientifically.

# 26. Types of Drugs: Spurious, Misbranded, Adulterated

## 26.1 Spurious drug
- Presented as an imitation of another drug.
- PDF example: label/company appearance matches an original product but **contains no active ingredient**.

## 26.2 Misbranded drug
- Incorrect or misleading labelling / presentation.
- PDF teaching example: a product labelled 500 mg actually containing a lower amount.

## 26.3 Adulterated drug
- Contains contamination or an unsuitable/harmful ingredient.
- PDF example: **ethylene glycol contamination of cough syrup** causing serious pediatric toxicity/fatalities.

> **Regulatory caution:** Indian legal definitions are technical and statute-specific; use the current Drugs and Cosmetics framework when answering legal/regulatory questions rather than relying only on slide definitions. CDSCO publishes the current Drugs Rules framework. 


# 27. Orphan Drugs
- Drugs intended for rare diseases.
- Under the New Drugs and Clinical Trials Rules, 2019, an orphan drug is defined around a disease/condition affecting **not more than 5 lakh persons in India**. 
- Examples:
	- Deferoxamine — iron-chelation therapy.
	- Digoxin immune Fab (Digibind/DigiFab) — digoxin toxicity.
	- Fomepizole — methanol/ethylene glycol poisoning.
	- Vigabatrin — infantile spasms.

> **Caution:** Whether an individual medicine legally qualifies for an orphan-drug regulatory pathway depends on current regulatory criteria; rarity alone does not automatically confer every regulatory designation.

# 28. Drug Nomenclature
## Generic / non-proprietary name
- Not owned by a specific manufacturer.
- Can be used by multiple companies.
- Example: **aspirin**.

## Brand / proprietary name
- Company/trade name.
- Example: **Ecosprin** (aspirin brand example in the PDF).

# 47. Pharmacopoeial Abbreviations
- **IP** = Indian Pharmacopoeia.
- **USP** = United States Pharmacopeia.

The source image shows an example formulation label: **Aspirin gastro-resistant tablets IP 150 mg — Ecosprin-150**.

> **Note:** Pharmacopoeial recognition is about standards/specifications; it does not simply mean that the product was “manufactured in India” or “manufactured in the USA.” The PDF's location-based explanation is an oversimplification.


# 48. Expiry Date
- Has legal/regulatory significance.
- The source states the manufacturer is not responsible for quality assurance after the expiry date.

**Clinical/regulatory caution:** Expiry dates are based on validated stability data and labelled storage conditions. Do not generalize legal liability statements beyond the relevant jurisdiction and product label.

# 49. Essential Medicines
The source describes essential drugs as medicines needed for common/high-priority diseases and lists requirements such as:

- Cost-effectiveness.
- Affordability.
- Appropriate availability in adult and pediatric strengths.
- Appropriate formulations.
- Avoiding unnecessary fixed-dose combinations solely to increase price.

**[Verified/current]** WHO defines essential medicines as medicines that satisfy the priority health-care needs of a population and emphasizes public-health relevance, evidence of efficacy and safety, comparative cost-effectiveness, quality, appropriate dosage forms, availability and affordability. 

> **Important:** A medicine is not “essential” simply because the disease is prevalent; selection is systematic and evidence-based.

---

# 50. Drug Storage Temperatures — PDF Teaching Table

| Label in PDF   |    Temperature |
| -------------- | -------------: |
| Freeze         | −10°C to −20°C |
| Cold           |           <5°C |
| Cool and dry   |         8–15°C |
| Warm           |        30–40°C |
| Excessive heat |          >40°C |

**[PDF caution / verified principle]** These categories are **not universal regulatory storage definitions for every medicine**. Actual storage must follow the **product-specific labelled temperature range** and stability instructions. “Cool,” “cold,” “controlled room temperature,” and “frozen” have jurisdiction- and product-specific meanings. Treat the PDF temperatures as an exam note, not as a universal storage protocol.

# 51. Teratogenic Drugs

  The slide section gives classic drug–fetal effect associations.

| Drug                          | PDF association                                         | Study note                                        |
| ----------------------------- | ------------------------------------------------------- | ------------------------------------------------- |
| **Thalidomide**               | Phocomelia                                              | Classic limb-reduction teratogen                  |
| **Lithium**                   | Ebstein anomaly                                         | Fetal cardiac risk association                    |
| **ACE inhibitors**            | Renal abnormalities/agenesis                            | Fetopathy risk, especially later pregnancy        |
| **ARBs**                      | Renal abnormalities/oligohydramnios sequence            | Fetopathy risk                                    |
| **Warfarin**                  | Bone/cartilage abnormalities                            | Fetal warfarin syndrome + pregnancy bleeding risk |
| **Carbimazole / methimazole** | Aplasia cutis (PDF)                                     | First-trimester embryopathy concern               |
| **Tetracyclines**             | Bone/teeth effects                                      | Classic teaching association                      |
| **Valproate**                 | Neural tube defects                                     | Also broader fetal neurodevelopmental risk        |
| **Methotrexate**              | Neural tube / antifolate-related developmental toxicity | Abortifacient/embryotoxic concerns are broader    |
| **Phenytoin**                 | Cleft lip/palate                                        | Fetal hydantoin spectrum                          |

**[Verified/current]** These examples are classic exam associations, but actual pregnancy risk is drug-, dose-, timing- and indication-specific. “Teratogenic” should not be interpreted as an absolute binary property independent of exposure timing and dose.

---

# 52. Drug Management in Pregnancy
## 52.1 Epilepsy
- “Safest”: **levetiracetam, lamotrigine**.
- “Most teratogenic”: **valproate**
**[Verified/current]** AAN/AES/SMFM guidance recommends, when clinically appropriate, considering **lamotrigine, levetiracetam or oxcarbazepine** to minimize major congenital-malformation risk and recommends avoiding **valproic acid when possible**. 

> Never abruptly discontinue an effective antiseizure medicine solely because of pregnancy; seizure control itself matters.

## 52.2 Bipolar disorder

 

- “Safest”: antipsychotics such as clozapine, quetiapine.
- “Most teratogenic”: valproate.

**[Current caution]** This is too broad to use as a universal ranking. Pregnancy decisions for bipolar disorder should consider the specific agent, dose, trimester, prior response, maternal relapse risk and fetal risk. Clozapine is not a generic “safest antipsychotic” for pregnancy.

## 52.3 Hypertension in pregnancy
 Lists:
- Labetalol
- Hydralazine
- Methyldopa
- Nifedipine
and states ACE inhibitors/ARBs are contraindicated.

**[Verified/current]** Current AHA/ACC guidance lists **labetalol and extended-release nifedipine as preferred first-line oral agents** when antihypertensive therapy is indicated in pregnancy; methyldopa remains an option but may be less effective, and hydralazine is widely used particularly in acute/severe hypertension settings. ACE inhibitors/ARBs are avoided in pregnancy because of fetal toxicity. 

## 52.4 Hyperthyroidism

 

- 1st trimester: **PTU**.
- 2nd/3rd trimester: **carbimazole/methimazole**.
- ACE inhibitors/ARBs contraindicated.

**[Verified/current]** PTU is preferred in the first trimester/through approximately week 16, with consideration of switching to methimazole afterward when appropriate. Both drugs cross the placenta; the dose should be the lowest effective dose needed to control maternal hyperthyroidism. 

## 52.5 Anticoagulation
- Heparin presented as the drug of choice and “safe in all trimesters.”
- Warfarin contraindicated in the first trimester.

**Current clinical clarification:** **LMWH is generally preferred for treatment of acute VTE in pregnancy**, and vitamin K antagonists are generally avoided during pregnancy because of fetal effects, especially during early gestation, although specific indications and mechanical-valve situations require specialist management.

# 53. Indian Drug Schedules — PDF Content vs Current Framework
## Schedule H
- Prescription drugs.
- Label includes **Rx**.
- PDF example: insulin.

## Schedule X
- Described as narcotic/psychotropic drugs with high dependence/addiction potential.
- Red “X” symbol.
- PDF examples: morphine, ketamine.

> **Regulatory caution:** Schedule X is a technical legal schedule, not simply “all addictive narcotic/psychotropic drugs.” Always use the current schedule list and labelling rules for regulatory questions.

## Schedule G
- Drugs requiring medical supervision.
- PDF example: vaccines.

## Schedule Y
- Historical framework associated with requirements for clinical trials in India.
- It was replaced by **NDCTR 2019**.

**[Verified/current]** The **New Drugs and Clinical Trials Rules, 2019** are the modern regulatory framework for new drugs and clinical trials, alongside subsequent amendments and CDSCO guidance. 

### Category X vs Schedule X
- **Category X** in the slide = teratogenic drugs (e.g., thalidomide, ACE inhibitors).
- **Schedule X** = regulatory classification under drug-control rules.

These are **different concepts** despite the same letter.

# 54. Adverse Drug Reactions (ADRs) and Pharmacovigilance
## 54.1 Pharmacovigilance
> Branch/discipline that monitors ADRs.

**[Verified/current]** WHO defines pharmacovigilance as the science and activities relating to the **detection, assessment, understanding and prevention of adverse effects or other drug-related problems**. 

## 54.2 ABCDEF classification
The PDF uses the classic Edwards/Aronson-style classification.

| Type  | PDF label            | Core idea                                            | PDF example                         |
| ----- | -------------------- | ---------------------------------------------------- | ----------------------------------- |
| **A** | Augmented            | Dose-related, predictable pharmacological effect     | High-dose insulin → hypoglycaemia   |
| **B** | Bizarre              | Unpredictable, not dose-related; often idiosyncratic | Penicillin allergy                  |
| **C** | Continuous / chronic | Related to long-term exposure                        | Chronic aspirin → peptic ulceration |
| **D** | Delayed              | Appears after a delay, possibly after exposure       | Teratogenic effects                 |
| **E** | End of treatment     | Withdrawal/rebound after stopping drug               | Opioid/corticosteroid withdrawal    |
| **F** | Failure              | Unexpected therapeutic failure                       | Antimicrobial resistance            |

**Clozapine-Induced Agranulocytosis**
- Classified as **Type B** ADR.
- It is idiosyncratic and that HLA testing is required.
- Routine clozapine safety management relies on **absolute neutrophil count (ANC) monitoring according to current prescribing information/local policy**. FDA removed the U.S. clozapine REMS reporting requirement in February 2025 but continued to recommend ANC monitoring according to prescribing information. The PDF's statement that universal HLA testing is required for all patients is therefore **not correct**. 

# 56. Pharmacogenetics
## 56.1 Warfarin
- VKORC1 and CYP2C9 are important genetic determinants of warfarin dose requirements.

## 56.2 Thiopurines
- Azathioprine / 6-mercaptopurine → Degraded by TPMT(Thiopurine Methyltransferse).
- Deficiency of can predispose to severe myelotoxicity.

**[Verified/current]** Modern pharmacogenetic guidance also recognizes **NUDT15** as clinically important for thiopurine toxicity in addition to TPMT. 

## 56.3 Fluoropyrimidines
- 5-fluorouracil → dihydropyrimidine dehydrogenase (DPD).

**[Verified/current]** The clinically relevant genetic marker is **DPYD**. Reduced DPD activity can markedly increase fluoropyrimidine toxicity; current regulatory and pharmacogenetic guidance includes DPYD/DPD information in treatment decisions. 

## 56.4 Succinylcholine
- Metabolized by plasma pseudocholinesterase.
- Dibucaine number is a functional test used in classical pharmacology teaching.
- Deficiency/atypical enzyme activity → prolonged paralysis and apnoea.

## 56.5 Irinotecan and UGT1A1
- Irinotecan is Used in Colorectal, pancreatic and small cell lung cancer
- It acts by stopping the rebinding of DNA after Topoisomerase separates the two strands of DNA
- Its active metabolite is inactivated by UGT1A1 which is also responsible for glucuronidation of bilirubin. 
- Since this enzyme is deficient in Crigler-Najjar Syndrome, it is contraindicated in Crigler–Najjar syndrome.
- It can cause side effects such as severe neutropenia and severe Diarrhoea

### Atazanavir
It is an HIV protease inhibitor.
It also causes UGT1A1 inhibition
It is also contraindiacted in type II or any type of Crigler-Najjar Syndrome.

## 56.6 Abacavir
- HLA-B*57:01 testing to prevent hypersensitivity.

---

# 57. G6PD Deficiency and Drug-Induced Hemolysis
The source says to avoid drugs that generate oxidative/free-radical stress and lists:

- Nitroprusside
- Nitrates
- Sulfonamides
- Aspirin
- Dapsone
- Metronidazole
- Fluoroquinolones
- Primaquine
- Proguanil
- Quinine

### Current evidence-based framing

**[Verified/current]** Risk is **drug-specific and sometimes dose-specific**, not simply “all nitro and sulfa drugs are contraindicated.” WHO material distinguishes drugs with **definite** risk from those with **possible** risk. Definite/high-confidence examples include:

- Dapsone
- Methylene blue (methylthioninium)
- Nitrofurantoin
- Primaquine and related 8-aminoquinolines
- Rasburicase
- Some sulfonamides
- Several quinolones in WHO guidance

Aspirin, chloroquine, quinidine and quinine are listed in WHO material as drugs with **possible risk in some circumstances**, rather than an absolute universal contraindication. 

For **primaquine/tafenoquine**, current WHO malaria guidance emphasizes using G6PD status to guide safe administration; tafenoquine requires known adequate G6PD activity under the relevant regimen. 

### Exam-safe core list

```text
Classic high-risk G6PD drugs:
Dapsone
Primaquine / 8-aminoquinolines
Rasburicase
Methylene blue
Nitrofurantoin
Selected sulfonamides / oxidant drugs
```

> **Do not convert a broad historical list into a blanket “never prescribe” rule.** Check the specific drug, dose, clinical indication and current reference.

---

# 58. High-Yield Visual Reconstructions from the PDF

## 58.1 ADME map

```text
                 DRUG ADMINISTRATION
                         ↓
                    ABSORPTION
                         ↓
              ┌──── First pass ────┐
              ↓                    ↓
          DISTRIBUTION         systemic blood
              ↓                    ↓
          tissues/organs       METABOLISM
                                   ↓
                           polar/metabolite
                                   ↓
                               EXCRETION
                                   ↓
                                  urine
```

## 58.2 Competitive vs non-competitive antagonism

```text
REVERSIBLE COMPETITIVE
Agonist + antagonist
        ↓
Same receptor site
        ↓
Higher agonist concentration can overcome
        ↓
Emax preserved
        ↓
Curve → right

NON-COMPETITIVE / IRREVERSIBLE
        ↓
Receptor function reduced
        ↓
Increasing agonist cannot restore full effect
        ↓
Emax ↓
        ↓
Curve → lower maximum
```

## 58.3 Receptor families

```text
Ligand
 ├── Ligand-gated ion channel ── milliseconds
 ├── GPCR ── seconds/minutes
 ├── Enzyme-linked / kinase receptor ── minutes/hours
 └── Intracellular receptor ── genomic effects, slower onset
```

## 58.4 Clinical trial progression

```text
Preclinical
   ↓
Phase 0 (optional microdosing)
   ↓
Phase 1 — safety / dose / PK
   ↓
Phase 2 — preliminary efficacy / dose exploration
   ↓
Phase 3 — confirmatory efficacy + larger safety dataset
   ↓
Marketing authorization
   ↓
Phase 4 — post-marketing surveillance
```

## 58.5 Pharmacogenetic decision model

```text
Patient
  ↓
Relevant drug planned
  ↓
Is there a validated pharmacogenetic association?
  ├─ No → standard evidence-based dosing/monitoring
  └─ Yes
       ↓
   Genotype / phenotype as appropriate
       ↓
   Interpret result in drug-specific context
       ↓
   Dose / alternative drug / intensified monitoring
```

---

# 59. OCR / Wording Corrections Worth Remembering

| PDF/OCR wording | Corrected form / interpretation |
|---|---|
| “Pharmacol0gy” | **Pharmacology** |
| “Fentayl” | **Fentanyl** |
| “Lignocaine” | **Lidocaine** (same drug; British/Indian usage of lignocaine is common) |
| “Pka” / “pkb” | **pKa**; morphine is described by its pKa, not pKb in this context |
| “Flunazenil” | **Flumazenil** |
| “Aspiring poisoning” | **Aspirin/salicylate poisoning** |
| “Km” on receptor DRC | Prefer **EC50** (or ED50 depending on curve/context) |
| Phenytoin “10–20 mg/dL” | **10–20 µg/mL** total concentration (classic range) |
| “Ritonavir irreversible protease inhibitor” | Ritonavir is a **reversible HIV protease inhibitor and strong CYP3A inhibitor/booster**; not an irreversible “hit-and-run” protease inhibitor |
| “Acyclovir” as prodrug | **Acyclovir is active; valacyclovir is the prodrug** |
| “All antiepileptics induce CYP except valproate” | **Too broad; induction is agent-specific** |
| “All non-rectal routes bypass first pass” | **Route-specific and variable**; rectal avoidance is partial |
| “All antibiotics cause OCP failure” | **Too broad**; enzyme-inducing antibiotics such as rifampicin/rifabutin are the key clinically important interaction |
| “Clozapine requires routine HLA testing” | **Not universal**; ANC monitoring is central; HLA associations exist but are not a universal prerequisite |
| “All listed drugs are contraindicated in G6PD deficiency” | **Too broad; risk depends on drug, dose and context** |

---

# 60. High-Yield Exam Pearls Consolidated

1. **PK = ADME; PD = drug effect.**
2. **F** reflects systemic availability; **Vd** reflects distribution; **CL** reflects elimination capacity.
3. `Vd = Amount in body / plasma concentration`.
4. `CL = elimination rate / plasma concentration`.
5. `t½ = 0.693 × Vd / CL` for first-order elimination.
6. **Loading dose** depends primarily on **Vd**; **maintenance dose** depends primarily on **CL**.
7. IV bioavailability is **100%**.
8. AUC reflects **extent of systemic exposure**; Tmax is related to absorption rate.
9. **Weak acids** are more unionized in acidic media; **weak bases** are more unionized in basic media.
10. **P-gp is an efflux transporter**; digoxin is a classic substrate.
11. **Rifampicin** is a major enzyme/transporter inducer.
12. **Chronic alcohol** induces CYP2E1; **acute alcohol** inhibits metabolism competitively at relevant pathways.
13. Phase I = oxidation/reduction/hydrolysis; Phase II = conjugation — but they are not obligatorily sequential.
14. **First-order:** constant fraction eliminated; **zero-order:** constant amount eliminated.
15. ~**4–5 half-lives** to approach steady state under first-order conditions.
16. **Competitive antagonist:** right shift, Emax preserved in the classic reversible model.
17. **Non-competitive/irreversible antagonist:** maximal response reduced.
18. **Efficacy = Emax/height; potency = concentration/dose needed for a given effect.**
19. **Therapeutic index = TD50/ED50** in the classical population formulation.
20. **5-HT3 is the serotonin ion-channel exception** to the usual GPCR pattern.
21. **Gq → PLC → IP3/DAG.**
22. **Gs → cAMP ↑; Gi → cAMP ↓.**
23. **NO → guanylyl cyclase → cGMP.**
24. **RTK:** insulin, IGF-1, EGF, VEGF.
25. **JAK–STAT:** GH, prolactin, EPO, TPO, many cytokines, leptin.
26. **Intracellular receptors:** steroid hormones, thyroid hormone, retinoids, vitamin D, PPAR ligands.
27. **Phase 1:** safety/dose/PK; **Phase 2:** exploratory efficacy; **Phase 3:** confirmatory efficacy/safety; **Phase 4:** post-marketing.
28. **Pharmacovigilance continues after approval** because rare/long-latency harms may only emerge in larger real-world populations.
29. **Abacavir + HLA-B*57:01 positive → do not use abacavir.**
30. **Irinotecan ↔ UGT1A1; fluoropyrimidines ↔ DPYD/DPD; thiopurines ↔ TPMT/NUDT15; warfarin ↔ VKORC1/CYP2C9.**
31. **Primaquine/dapsone/rasburicase/methylene blue** are classic high-risk G6PD drugs; not every drug in historical G6PD lists is absolutely contraindicated.
32. **Salicylate poisoning:** serum/urine alkalinization with bicarbonate is high-yield; severe poisoning may require extracorporeal therapy.
33. **Clopidogrel + omeprazole/esomeprazole:** avoid due to CYP2C19 inhibition and reduced antiplatelet activity.
34. **Phenytoin is a narrow-therapeutic-index drug with nonlinear kinetics;** dose increments can produce disproportionately large concentration changes.

---

# 61. Page-by-Page Completeness Audit

| PDF page | Major content captured in this document |
|---:|---|
| 1 | PK/PD definitions, ADME, primary/secondary PK parameters, passive diffusion |
| 2 | Weak acids/bases, pKa, Henderson–Hasselbalch, ion trapping, P-gp, transport mechanisms |
| 3 | P-gp substrate/modulators, oral route, first-pass metabolism, sublingual/rectal/IM/transdermal |
| 4 | Transdermal sites/examples, BA, AUC/Cmax/Tmax, bioequivalence |
| 5 | Vd, factors affecting Vd, protein displacement, dialysis concepts, chloroquine deposition |
| 6 | Redistribution, metabolism overview, active/inactive metabolites, prodrugs |
| 7 | Phase I/II metabolism, CYPs, enzyme inducers/inhibitors |
| 8 | Drug interactions, acetylation/NAT2, extrahepatic metabolism, Hoffman elimination |
| 9 | Excretion routes, enterohepatic recirculation, breast milk, glomerular filtration, secretion, forced diuresis |
| 10 | First-order/zero-order kinetics, WHATSAPP mnemonic, loading/maintenance dose, half-life formula |
| 11 | Half-life decay table, 90/95% elimination, steady state, hit-and-run drugs |
| 12 | Pharmacodynamics, ligand types, physical/chemical/physiological/pharmacological antagonism |
| 13 | Non-competitive antagonism, graded DRC, reciprocal plot, competitive-antagonism MCQ |
| 14 | Efficacy/potency, quantal DRC, TI, narrow TI drugs, TDM |
| 15 | TDM examples, antidotes, ionotropic and GPCR receptor families |
| 16 | G proteins, second messengers, sildenafil/PDE, RTKs, JAK–STAT, intracellular receptors |
| 17 | Intracellular receptor examples, drug development sequence, Phases 0–3 |
| 18 | Phase 4, phase MCQs, bridging trials, placebo, sham surgery |
| 19 | Spurious/misbranded/adulterated, orphan drugs, nomenclature, pharmacopoeia |
| 20 | Expiry, essential medicines, storage temperatures, teratogenic drugs |
| 21 | Pregnancy drug management, schedules H/X/G/Y |
| 22 | Schedule X MCQ, category X distinction, pharmacovigilance, ADR ABCDEF |
| 23 | Clozapine ADR, pharmacogenetics, G6PD deficiency drugs |

**Completeness conclusion:** The major conceptual blocks, drug lists, tables, algorithms, dose-response graphs, receptor diagrams, clinical-trial table and pharmacogenetic section present in the 23-page source have been incorporated into a topic-organized study document. Visual material was treated as part of the source rather than relying solely on OCR text.

---

# 62. Important “Do Not Memorize Literally” Corrections

These are the most important places where the source is useful for exam recall but should not be learned as literal modern clinical law:

- **Bioequivalence = “80–125% variation.”** → Correct interpretation involves the 90% CI for the geometric mean ratio under standard BE methodology. 
- **All antiepileptics are inducers except valproate.** → Too broad.
- **All antibiotics can cause OCP failure via enterohepatic recirculation.** → Too broad.
- **Forced acidic diuresis is a standard poisoning treatment.** → Rare in modern practice.
- **Paracetamol is a standard indication for urinary alkalinization.** → Not a standard treatment for routine acetaminophen poisoning.
- **Every high-Vd drug is automatically “not dialyzable.”** → Dialysis is toxin-specific; current EXTRIP criteria matter. 
- **Ritonavir is an irreversible “hit-and-run” protease inhibitor.** → Incorrect; its major irreversible-like clinical use is not as an irreversible protease inhibitor.
- **Acyclovir is a prodrug.** → Incorrect; valacyclovir is the oral prodrug.
- **Phenytoin therapeutic range 10–20 mg/dL.** → Unit is incorrect; classic total range is ~10–20 µg/mL.
- **Km is the 50% response point on receptor DRC.** → Use EC50/ED50 terminology.
- **Clozapine universally requires HLA testing.** → Not correct; ANC monitoring remains central. 
- **All listed G6PD drugs are absolutely contraindicated.** → Drug- and dose-specific risk; WHO distinguishes definite from possible risk. 
- **Phase 3 is automatically mandatory for every already-approved foreign drug entering India.** → Current Indian regulation provides category-specific pathways and potential local-trial waivers. 

---

# 63. Verification Sources Used

### Core pharmacokinetics / metabolism

1. **Merck Manual Professional Edition — Formulas Defining Basic Pharmacokinetic Parameters.** Definitions/formulas for Vd, clearance and half-life. 

### Bioequivalence

2. **U.S. FDA — Statistical Approaches to Establishing Bioequivalence (Final Guidance, May 2026).** Current statistical framework for bioequivalence. 

### Clinical trials / drug development

3. **U.S. FDA — Step 3: Clinical Research.** Current educational overview of Phase 1–3 development. 
4. **U.S. FDA — Drug Review Process: Continued.** Typical study sizes and stage sequence. 
5. **CDSCO — New Drugs and Clinical Trials Rules, 2019.** Indian regulatory framework. 
6. **CDSCO — FAQ on NDCTR 2019 (2025).** Current explanation of local clinical trial waivers and specific-country approvals. 

### Pharmacovigilance / ADR

7. **WHO — Programme for International Drug Monitoring / Pharmacovigilance.** Definition and purpose of pharmacovigilance. 
8. **WHO adverse-reaction definitions / classification material.** Context for Type A reactions and ADR terminology. 

### Pharmacogenetics

9. **U.S. FDA — Table of Pharmacogenetic Associations (current 2026 version).** Examples including abacavir/HLA-B*57:01, irinotecan/UGT1A1, thiopurines and other clinically relevant pairs. 

### Pregnancy / therapeutic decision-making

10. **AAN/AES/SMFM 2024 guideline on epilepsy in pregnancy.** Lamotrigine/levetiracetam/oxcarbazepine and avoidance of valproate when possible. 
11. **2025 AHA/ACC blood-pressure guideline.** Pregnancy antihypertensive recommendations. 
12. **American Thyroid Association — Hyperthyroidism in Pregnancy.** PTU first trimester/early pregnancy and lowest effective dose. 

### Poisoning / extracorporeal treatment / G6PD

13. **EXTRIP Workgroup — Lithium.** Current extracorporeal-treatment criteria. 
14. **EXTRIP Workgroup — Salicylates.** Current indications for extracorporeal treatment and bicarbonate therapy. 
15. **EXTRIP Workgroup — Theophylline.** Current hemodialysis indications. 
16. **WHO — G6PD / antimalarial safety guidance.** Definite vs possible hemolytic drug risks and the importance of G6PD testing for 8-aminoquinolines. 

### Medicines policy / essential medicines / Indian regulation

17. **WHO — Essential Medicines 2025/2026 resources.** Current definition and selection principles. 
18. **CDSCO — Drugs Rules 1945 and current amendments.** Indian drug schedules/regulatory framework. 

### Drug interaction example

19. **DailyMed — Clopidogrel prescribing information.** CYP2C19 activation and avoidance of omeprazole/esomeprazole. 

---

# 64. Final Study-Use Note

This document intentionally keeps the **exam-oriented architecture of the PDF** while separating it from current clinical corrections. For NEET-PG/INI-CET revision, the PDF mnemonics and associations can be useful; for actual patient care, prescribing, poisoning management or regulatory decisions, use the **current drug label, guideline, poison-centre recommendation or national regulatory standard** rather than an exam mnemonic.
