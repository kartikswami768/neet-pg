---
title: "Pulmonary Circulation and Anatomical Right-to-Left Shunts"
subject: "Respiratory Physiology and Diagnostics"
topic_number: 14
topic: "Pulmonary Circulation and Anatomical Right-to-Left Shunts"
tags:
  - respiratory-physiology
  - medical-notes
  - neet-pg
  - ini-cet
---

# Topic 14 — Pulmonary Circulation and Anatomical Right-to-Left Shunts

## 1. Hemodynamics of the Pulmonary Circulation
The pulmonary circulation is a low-pressure, low-resistance, high-compliance system designed to accommodate the entire cardiac output ($\approx 5\text{ L/min}$).

$$\text{Pulmonary Vascular Resistance (PVR)} = \frac{\text{Mean PAP} - \text{PCWP}}{\text{Cardiac Output}} = \frac{15 - 5}{5} = \mathbf{2\text{ mmHg/L/min}} = \mathbf{160\text{ dynes}\cdot\text{sec/cm}^5}$$
*(Normal PVR is approximately 1/10th of Systemic Vascular Resistance).*

```mermaid
flowchart TD
    A0["West Zones of the Lung"]
    A0 --> A1["Zone 1 (Apex - Physiological)"]
    A0 --> A2["Zone 2 (Mid-Lung)"]
    A0 --> A3["Zone 3 (Base)"]
    A0 --> A4["PA > Pa > Pv"]
    A0 --> A5["Pa > PA > Pv"]
    A0 --> A6["Pa > Pv > PA"]
    A0 --> A7["Alveolar pressure exceeds arterial"]
    A0 --> A8["Arterial exceeds alveolar;"]
    A0 --> A9["Both arterial and venous exceed"]
    A0 --> A10["Capillaries collapsed (Dead space)"]
    A0 --> A11["waterfall flow mechanics"]
    A0 --> A12["alveolar pressure; Max perfusion"]
```

### West Zones of the Lung

| Zone | Pressure Relationship | Capillary Status | Perfusion Dynamics | Clinical State |
| :--- | :--- | :--- | :--- | :--- |
| **Zone 1** | $P_A > P_a > P_v$ | Capillaries compressed; little or no flow | Alveolar dead-space physiology | Usually limited or absent in healthy upright lungs; may appear with low pulmonary arterial pressure, hypovolaemia, or positive-pressure ventilation |
| **Zone 2 (Mid)** | $P_a > P_A > P_v$ | Intermittently open | Flow determined by $P_a - P_A$ gradient ("Waterfall effect") | Normal mid-lung baseline |
| **Zone 3 (Base)** | $P_a > P_v > P_A$ | Fully distended | Continuous maximal flow driven by $P_a - P_v$ | Normal lower lobe baseline; maximal perfusion |

---

## 2. Hypoxic Pulmonary Vasoconstriction (HPV)

```mermaid
flowchart TD
    A[Low alveolar oxygen tension] --> B[Pulmonary vascular smooth muscle response]
    B --> C[Local pulmonary vasoconstriction]
    C --> D[Less blood flow to poorly ventilated lung units]
    D --> E[Improved regional V/Q matching]
    F[Diffuse alveolar hypoxia] --> G[Widespread pulmonary vasoconstriction]
    G --> H[Pulmonary hypertension and right-heart strain may develop]
```

### Mechanism and Clinical Role
* **Primary trigger:** Low **alveolar** oxygen tension causes pulmonary vasoconstriction. The response increases as local alveolar PO₂ falls, but **60 mmHg is a useful teaching landmark, not an absolute on/off threshold**.
* **Intracellular Pathway:** Hypoxia inhibits voltage-gated potassium channels ($K_v$) $\rightarrow$ cell membrane depolarization $\rightarrow$ influx of $\text{Ca}^{2+}$ through L-type calcium channels $\rightarrow$ smooth muscle contraction.
* **Physiological Purpose:** Shunts pulmonary blood flow away from poorly ventilated/hypoxic lung regions towards well-ventilated regions, optimizing $V/Q$ matching.
* **Pathological Sequelae (Generalized Hypoxia):** High altitude exposure or end-stage lung disease causes **generalized HPV**, leading to acute/chronic **Pulmonary Arterial Hypertension** and secondary **Cor Pulmonale** (right ventricular hypertrophy and failure).

---

## 3. Anatomical Right-to-Left Shunts

```mermaid
flowchart TD
    A0["Anatomical Shunts"]
    A0 --> A1["Normal Physiological Shunt (~1-2% CO)"]
    A0 --> A2["Pathological Right-to-Left Shunts"]
    A0 --> A3["Thebesian Veins (Drain left myocardium into LA)"]
    A0 --> A4["Cyanotic Congenital Heart Disease (Tetralogy of Fallot, TGA)"]
    A0 --> A5["Bronchial Veins (Drain into Pulmonary Veins)"]
    A0 --> A6["Pulmonary Arteriovenous Malformations (Osler-Weber-Rendu)"]
```

### The $100\%\,\text{O}_2$ Hyperoxia Test for Shunt Differentiation

```mermaid
flowchart TD
    A[Severe hypoxaemia: assess cause and obtain appropriate blood gases] --> B[If used, interpret a 100% oxygen test with full clinical context]
    B --> C{Large rise in PaO2?}
    C -- Yes --> D[More consistent with V/Q mismatch or diffusion limitation]
    C -- Limited rise --> E[Consider right-to-left shunt among other explanations]
    D --> F[This test is not definitive; assess imaging, cardiac and pulmonary causes]
    E --> F
```
