---
title: "Pressures and Volumes During Normal Breathing"
subject: "Respiratory Physiology and Diagnostics"
topic_number: 3
topic: "Pressures and Volumes During Normal Breathing"
tags:
  - respiratory-physiology
  - medical-notes
  - neet-pg
  - ini-cet
---

# Topic 03 — Pressures and Volumes During Normal Breathing

## 1. Standard Static Lung Volumes and Capacities

```mermaid
flowchart TD
    A0["Lung Volumes and Capacities"]
    A0 --> A1["Primary Volumes (Non-Overlapping)"]
    A0 --> A2["Lung Capacities (Combinations)"]
    A0 --> A3["Tidal Volume (TV ~500 mL)"]
    A0 --> A4["Inspiratory Capacity (IC = TV + IRV)"]
    A0 --> A5["Inspiratory Reserve Volume (IRV ~3000 mL)"]
    A0 --> A6["Functional Residual Capacity (FRC = ERV + RV)"]
    A0 --> A7["Expiratory Reserve Volume (ERV ~1100 mL)"]
    A0 --> A8["Vital Capacity (VC = TV + IRV + ERV)"]
    A0 --> A9["Residual Volume (RV ~1200 mL)"]
    A0 --> A10["Total Lung Capacity (TLC = VC + RV)"]
```

### Primary Lung Volumes

**Reference caveat:** The millilitre values below are traditional approximate values for a healthy adult man; lung volumes vary substantially with height, sex, age, posture, and body habitus. Interpret measured volumes against appropriate reference equations.
1. **Tidal volume ($V_T$ or TV):** Volume inhaled or exhaled with each quiet breath; **about 500 mL** is a traditional adult teaching value, not a universal target. In clinical ventilation, tidal volume is usually prescribed using predicted body weight rather than actual body weight.
2. **Inspiratory Reserve Volume (IRV):** Maximal additional volume inspired above normal $V_T$ ($\approx 3000\text{ mL}$).
3. **Expiratory Reserve Volume (ERV):** Maximal additional volume exhaled after peaceful end-expiration ($\approx 1100\text{ mL}$).
4. **Residual Volume (RV):** Volume remaining in lungs after maximal forced expiration ($\approx 1200\text{ mL}$). **Cannot be measured by simple spirometry.**

### Standard Lung Capacities
1. **Inspiratory Capacity (IC):** $V_T + \text{IRV} \approx 3500\text{ mL}$.
2. **Functional Residual Capacity (FRC):** $\text{ERV} + \text{RV} \approx 2300\text{ mL}$. Resting equilibrium point of respiratory system.
3. **Vital Capacity (VC or FVC):** $V_T + \text{IRV} + \text{ERV} \approx 4600\text{ mL}$.
4. **Total Lung Capacity (TLC):** $\text{VC} + \text{RV} = V_T + \text{IRV} + \text{ERV} + \text{RV} \approx 5800\text{ mL}$.

---

## 2. Measurement of Functional Residual Capacity (FRC) and Residual Volume (RV)
Because RV (and thus FRC and TLC) cannot be exhaled, standard spirometry cannot measure them. Three specialized techniques are used:

```mermaid
flowchart TD
    A0["FRC & RV Measurement Techniques"]
    A0 --> A1["Helium Dilution Method"]
    A0 --> A2["Nitrogen Washout Method"]
    A0 --> A3["Body Plethysmography"]
    A0 --> A4["Closed-Circuit System"]
    A0 --> A5["Open-Circuit System"]
    A0 --> A6["Applies Boyle's Law (P1V1 = P2V2)"]
    A0 --> A7["Uses Insoluble Gas (He)"]
    A0 --> A8["Washes out N2 with 100% O2"]
    A0 --> A9["Measures TOTAL Thoracic Gas Volume"]
    A0 --> A10["Measures Ventilated Volume"]
    A0 --> A11["Includes Trapped Air Behind Obstructions"]
```

### 1. Helium Dilution Technique (Closed-Circuit)
* A spirometer of known volume ($V_1$) and helium concentration ($C_1$) is connected at end-expiration (FRC).
* Patient breathes until helium equilibrates to $C_2$.
$$V_2 (\text{FRC}) = V_1 \times \left( \frac{C_1 - C_2}{C_2} \right)$$

### 2. Nitrogen Washout Technique (Open-Circuit)
* Patient inhales $100\%\,\text{O}_2$ from FRC for several minutes; all exhaled nitrogen is collected and measured.
$$\text{FRC} = \frac{\text{Volume of Exhaled }\text{N}_2}{\text{Initial Alveolar Concentration of }\text{N}_2 (0.79)}$$

### 3. Body Plethysmography (Gold Standard)
* Based on **Boyle's Law** ($P_1 V_1 = P_2 V_2$).
* Patient sits in an airtight box and panting maneuvers are performed against a closed shutter.
* **Clinical Superiority:** Plethysmography measures **Total Thoracic Gas Volume (TGV)**, including non-communicating trapped air behind obstructed airways (e.g., bullae in emphysema), whereas gas dilution methods underestimate FRC in severe obstructive airways disease.

---

## 3. Pressure Dynamics During the Respiratory Cycle

```mermaid
flowchart TD
    A0["Pressure Changes During Quiet Respiratory Cycle"]
    A0 --> A1["Inspiration (2 sec)"]
    A0 --> A2["Expiration (3 sec)"]
    A0 --> A3["0 +---------------------------------------------------------+ Alveolar Pressure (Palv)"]
    A0 --> A4["[0 leads to -1 leads to 0 leads to +1 leads to 0 cmH2O]"]
    A0 --> A5["Intrapleural Pressure (Pip)"]
    A0 --> A6["[-5 leads to -8 leads to -5 cmH2O]"]
    A0 --> A7["0 sec"]
    A0 --> A8["2 sec"]
    A0 --> A9["5 sec"]
```

### Key Pressure Variables
1. **Atmospheric Pressure ($P_{atm}$):** Set as baseline reference ($0\text{ cmH}_2\text{O}$).
2. **Alveolar Pressure ($P_{alv}$):**
   * *Rest (End-expiration):* $0\text{ cmH}_2\text{O}$.
   * *Mid-Inspiration:* Drops to **$-1\text{ cmH}_2\text{O}$**, creating pressure gradient drawing air in.
   * *End-Inspiration:* Returns to $0\text{ cmH}_2\text{O}$.
   * *Mid-Expiration:* Rises to **$+1\text{ cmH}_2\text{O}$**, pushing air out.
3. **Intrapleural Pressure ($P_{ip}$):**
   * Always subatmospheric (negative) under normal physiological conditions due to opposing elastic recoils of lung (inwards) and chest wall (outwards).
   * *Resting FRC:* **$-5\text{ cmH}_2\text{O}$**.
   * *End-Inspiration:* Drops to **$-8\text{ cmH}_2\text{O}$**.
   * *Forced Expiration:* Can become positive ($+30\text{ to }+50\text{ cmH}_2\text{O}$).
4. **Transpulmonary Pressure ($P_{tp}$):**
   $$P_{tp} = P_{alv} - P_{ip}$$
   * Represents the distending force holding the lungs open. Always positive under physiological conditions ($+5\text{ cmH}_2\text{O}$ at resting FRC; $+8\text{ cmH}_2\text{O}$ at end-inspiration).

---

## 4. Hysteresis in the Pressure-Volume Curve

```mermaid
flowchart TD
    A0["Lung Volume-Pressure Hysteresis"]
    A0 --> A1["Volume (L)"]
    A0 --> A2["^"]
    A0 --> A3["Deflation Limb (Higher Compliance)"]
    A0 --> A4["TLC"]
    A0 --> A5["Inspiration Limb (Lower Compliance)"]
    A0 --> A6["FRC"]
    A0 --> A7["Transpulmonary Pressure (cmH2O)"]
```

* **Definition:** Hysteresis refers to the difference between the inflation (inspiration) limb and deflation (expiration) limb of the lung's $P-V$ curve.
* **Mechanism:**
  1. For any given transpulmonary pressure, **lung volume is greater during deflation than during inflation**.
  2. Caused by **surface tension forces** at the air-liquid interface: recruitment of collapsed alveoli during inspiration requires higher opening pressure to overcome liquid surface tension than maintaining open alveoli during deflation.
  3. Saline-filled lungs demonstrate **no hysteresis** and markedly increased compliance due to elimination of air-liquid surface tension.
