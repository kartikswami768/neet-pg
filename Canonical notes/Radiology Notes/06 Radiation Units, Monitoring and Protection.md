---
title: "Chapter 06: Radiation Units, Monitoring and Protection"
tags:
  - radiology
  - dosimetry
  - radiation-protection
  - TLD-badge
  - ALARA
  - dose-limits
date: 2026-11-08
obsidianEditingMode: live
---

# Chapter 06: Radiation Units, Monitoring and Protection

> [!NOTE]
> Radiation protection (health physics) aims to prevent deterministic effects completely by keeping exposures below thresholds and to reduce stochastic effects to acceptable levels using structured regulatory limits and safety equipment.

---

## 6.1 Dosimetry Units & Quantities

Understanding radiological protection requires a precise distinction between exposure in air, energy absorbed by tissue, biological risk weighting, and nuclear decay rates.

| Measured quantity | Conventional unit | SI unit | Conversion |
| --- | --- | --- | --- |
| Exposure in air | Roentgen (R) | Coulomb per kilogram (C/kg) | 1 R = 2.58 × 10⁻⁴ C/kg |
| Absorbed dose | rad | gray (Gy) | 1 Gy = 100 rad; 1 rad = 10 mGy |
| Equivalent or effective dose | rem | sievert (Sv) | 1 Sv = 100 rem; 1 rem = 10 mSv |
| Radioactivity (activity) | curie (Ci) | becquerel (Bq) | 1 Ci = 3.7 × 10¹⁰ Bq |

### Detailed Mathematical Definitions

#### 1. Exposure Dose ($X$)
* **Definition**: Measures the total electrical charge of ions of one sign produced in a unit mass of dry air by X-rays or $\gamma$-rays.
* **S.I. Unit**: Coulomb per kilogram ($\text{C/kg}$).
* **Conventional Unit**: **Roentgen ($\text{R}$)**.
* **Conversion**: $1\text{ R} = 2.58 \times 10^{-4}\text{ C/kg}$ of air.

#### 2. Absorbed Dose ($D$)
* **Definition**: Measures the amount of energy deposited by ionizing radiation per unit mass of matter/tissue.
* **S.I. Unit**: **Gray ($\text{Gy}$)** ($1\text{ Gy} = 1\text{ Joule/kg}$).
* **Conventional Unit**: **Rad** (Radiation Absorbed Dose).
* **Conversion**: $1\text{ Gy} = 100\text{ Rad}$ ($1\text{ Rad} = 10\text{ mGy} = 0.01\text{ Gy}$).

#### 3. Equivalent Dose ($H_T$)
* **Definition**: Adjusts absorbed dose for the **Radiation Weighting Factor ($W_R$)** (or Quality Factor) of the specific type of radiation, reflecting biological damaging power.

$$H_T = \text{Absorbed Dose } (D) \times \text{Radiation Weighting Factor } (W_R)$$

* **S.I. Unit**: **Sievert ($\text{Sv}$)**.
* **Conventional Unit**: **Rem** (Roentgen Equivalent Man).
* **Conversion**: $1\text{ Sv} = 100\text{ Rem}$ ($1\text{ Rem} = 10\text{ mSv}$).

| Radiation Type | Radiation Weighting Factor ($W_R$) |
| :--- | :--- |
| **X-rays, Gamma ($\gamma$) rays, Beta ($\beta$) particles** | **1** |
| **Protons & Thermal Neutrons** | **2 - 5** |
| **Alpha ($\alpha$) particles, Fast Neutrons, Heavy Nuclei** | **20** |

#### 4. Effective Dose ($E$)
* **Definition**: Adjusts equivalent dose for the **Tissue Weighting Factor ($W_T$)** of specific organs, accounting for varying tissue radiosensitivity to stochastic risk (cancer induction).

$$E = \sum \left( H_T \times W_T \right) = \sum \left( D \times W_R \times W_T \right)$$

* **Key Tissue Weighting Factors ($W_T$)**:
  * Gonads: $0.08$ (ICRP 103) / $0.20$ (ICRP 60)
  * Bone Marrow, Colon, Lung, Stomach, Breast: $0.12$
  * Bladder, Esophagus, Liver, Thyroid: $0.04$
  * Skin, Bone Surface, Brain, Salivary Glands: $0.01$

#### 5. Radioactivity ($A$)
* **Definition**: Rate of decay/disintegration of an unstable radionuclide nucleus.
* **S.I. Unit**: **Becquerel ($\text{Bq}$)** ($1\text{ Bq} = 1\text{ disintegration per second}$).
* **Conventional Unit**: **Curie ($\text{Ci}$)** ($1\text{ Ci} = 3.7 \times 10^{10}\text{ Bq}$).

---

## 6.2 Personnel Monitoring & Safety Equipment

All personnel working in ionizing radiation environments (radiologists, radiographers, interventional cardiologists) must be continuously monitored using radiation badges.

| Badge component | What it estimates or records | Purpose |
| --- | --- | --- |
| Copper/aluminium filter | Signal behind a filter used to estimate deeper penetrating exposure. | Helps distinguish radiation energy and estimate deep dose. |
| Plastic filter | Signal with a different filtration response. | Contributes to shallow or skin-dose assessment. |
| Open window | Unfiltered detector response. | Provides an additional reference response. |
| TLD crystal (e.g., LiF or CaSO₄:Dy) | Stores energy in trapped charge carriers and emits light on heating. | Light output is measured to estimate accumulated dose. |

### 1. Thermoluminescent Dosimeter (TLD) Badge
* **Material**: Contains phosphor crystals of **Lithium Fluoride ($\text{LiF}$)** or **Calcium Sulfate doped with Dysprosium ($\text{CaSO}_4\text{:Dy}$)**.
* **Mechanism**:
  1. Ionizing radiation excites electrons into metastably trapped higher-energy states within the crystal lattice.
  2. During quarterly processing, the TLD disc is heated to $\sim 300^\circ\text{C}$.
  3. Trapped electrons drop back to ground state, releasing visible light proportional to absorbed dose (**Thermoluminescence**).
* **Measurement Range**: Measures doses from $0.01\text{ mGy}$ up to $10\text{ Gy}$.
* **Wearing Position**: Worn on the chest at collar level. If a lead apron is worn, the badge is worn **underneath the lead apron** to record true whole-body effective dose (some interventional protocols specify a second badge outside the apron at the collar).

### 2. Personal Protective Equipment (PPE) & Shielding

| Protective item | Nominal lead equivalence shown in the source | Intended protection |
| --- | --- | --- |
| Standard lead apron | 0.25–0.50 mm Pb equivalent | Attenuates much of the scattered radiation reaching the torso. |
| Gonadal shield | 0.50 mm Pb equivalent | Designed to reduce exposure to the gonads when appropriate and when it does not interfere with imaging. |
| Thyroid collar | 0.50 mm Pb equivalent | Reduces scatter exposure to the thyroid. |
| Lead eyewear | 0.75 mm Pb equivalent | Reduces lens exposure. |
| Mobile lead barrier | 1.50–2.0 mm Pb equivalent | Provides structural shielding for staff. |

---

## 6.3 Radiation Protection Principles & Regulatory Rules

Radiation protection operates under three overarching cardinal principles established by the International Commission on Radiological Protection (ICRP) and national bodies (e.g., AERB):

| Principle | Meaning |
| --- | --- |
| Justification | The expected clinical benefit of an exposure must outweigh its potential harm. |
| Optimization (ALARA) | Keep exposure as low as reasonably achievable while obtaining the information needed for the clinical task. |
| Dose limitation | Regulatory dose limits apply to occupationally exposed workers and the public; medical exposure of patients is managed through justification and optimization rather than a fixed patient dose limit. |

### Operational Rules for Dose Reduction (TDS Principles)
1. **Time**: Minimize exposure duration near radiation sources.
2. **Distance**: Maximize distance from source (**Inverse Square Law**: doubling distance reduces dose by $75\%$).
3. **Shielding**: Use lead aprons, barriers, and collimation.

---

### Gestational Operational Rules: 10-Days Rule vs. 28-Days Rule

| Cycle timing (traditional teaching outline) | Traditional teaching point |
| --- | --- |
| Menstrual day 1 to day 10 | Historically described as a “10-day rule” window for scheduling certain non-urgent examinations when pregnancy is possible. |
| After day 10 until the expected period | Pregnancy possibility should be considered; use appropriate pregnancy screening and local policy. |
| Missed period / around day 28 | Assess for possible pregnancy before non-urgent ionizing-radiation procedures when clinically appropriate. |

**Note:** The traditional “10-day rule” is not a substitute for current pregnancy-screening procedures or urgent clinical judgement. Follow institutional and national guidance.

1. **The 10-Days Rule**: In females of childbearing capacity, elective diagnostic abdominal/pelvic radiologic examinations using ionizing radiation should be restricted to the **first 10 days of the menstrual cycle** (from Day 1 of LMP to Day 10), when pregnancy is least likely.
2. **The 28-Days Rule**: Allows elective examinations throughout the entire 28-day cycle provided the current menstrual period has not been missed. If a period is missed, pregnancy is presumed until proven otherwise.

---

### Dose Limits (AERB & ICRP Guidelines)

| Target Population / Category | Occupational Dose Limit | Public Dose Limit |
| :--- | :--- | :--- |
| **Annual Effective Dose (Whole Body)** | **$20\text{ mSv/year}$** (averaged over 5 consecutive years; max $30\text{ mSv}$ in any single year) | **$1\text{ mSv/year}$** |
| **Equivalent Dose to Lens of Eye** | **$20\text{ mSv/year}$** (lowered from $150\text{ mSv}$ to prevent cataracts) | $15\text{ mSv/year}$ |
| **Equivalent Dose to Skin** | $500\text{ mSv/year}$ | $50\text{ mSv/year}$ |
| **Equivalent Dose to Hands & Feet** | $500\text{ mSv/year}$ | $50\text{ mSv/year}$ |
| **Pregnant Radiation Worker** | **$1\text{ mSv}$ total** to fetus during declared pregnancy ($0.5\text{ mSv/month}$) | $1\text{ mSv/year}$ |

---

> [!TIP]
> **Summary for High-Yield Revision**:
> - **$1\text{ Sv} = 100\text{ Rem}$**; **$1\text{ Gy} = 100\text{ Rad}$**.
> - **Alpha particle Quality Factor**: 20.
> - **TLD Badge Crystal**: Lithium Fluoride ($\text{LiF}$) or $\text{CaSO}_4\text{:Dy}$.
> - **Lead Apron Minimum Thickness**: $0.25 - 0.5\text{ mm}$ Pb equivalent.
> - **Occupational Whole-Body Limit**: $20\text{ mSv/year}$.
> - **Public Whole-Body Limit**: $1\text{ mSv/year}$.
