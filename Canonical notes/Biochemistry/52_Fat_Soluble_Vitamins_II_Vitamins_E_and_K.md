---
title: 'Fat-soluble Vitamins II: Vitamins E and K'
subject: Biochemistry
chapter: 52
batch: 5
tags:
- biochemistry
- vitamins
- vitamin-e
- vitamin-k
- coagulation
- warfarin
- medical-notes
- neet-pg
- ini-cet
aliases: []
---

# 52. Fat-soluble Vitamins II: Vitamins E and K

## 1. Vitamin E (Tocopherols & Tocotrienols)

### Active Form & Molecular Function
* **Active Isomer:** **$\alpha$-Tocopherol** is the most biologically active isomer.
* **Mechanism of Action:** Acts as a potent **lipid-soluble chain-breaking antioxidant** inside cell membranes. It scavenges lipid peroxyl free radicals ($\text{ROO}^\bullet$), halting the propagation of lipid peroxidation in polyunsaturated fatty acids (PUFA).
* **Antioxidant Recycling:** Tocopheroxyl radical is regenerated back to active $\alpha$-tocopherol by **Vitamin C (Ascorbate)** and reduced **Glutathione (GSH)**.

```mermaid
graph LR
    ROS[Lipid Peroxyl Radical ROO.] + VitE[Reduced Vitamin E] --> Lipid[Lipid Hydroperoxide ROOH] + VitERad[Vitamin E Radical]
    VitERad + VitC[Vitamin C / Ascorbate] --> VitE
```

### Clinical Deficiency & Toxicity Spectrum
* **Deficiency Causes:** Fat malabsorption syndromes (cystic fibrosis, celiac disease, abetalipoproteinemia, cholestasis).
* **Deficiency Features:**
  * **Hemolytic Anemia:** Increased oxidative fragility of erythrocyte membranes.
  * **Neurological Deficits:** Spinocerebellar ataxia, loss of proprioception and vibratory sense (posterior column degeneration), muscle weakness, and absent deep tendon reflexes.
  * **Differential Pearl:** Vitamin E deficiency presents identically to **Friedreich ataxia** and **Vitamin $B_{12}$ deficiency**, but **WITHOUT megaloblastic anemia, hypersegmented neutrophils, or elevated methylmalonic acid/homocysteine**.
* **Toxicity:** High doses inhibit Vitamin K-dependent carboxylase activity, potentiating anticoagulant drugs (Warfarin) and increasing hemorrhagic risk.

---

## 2. Vitamin K (Phylloquinone, Menaquinone, Menadione)

### Vitamer Forms
* **Vitamin $K_1$ (Phylloquinone):** Found in green leafy vegetables.
* **Vitamin $K_2$ (Menaquinone):** Synthesized by intestinal bacterial flora.
* **Vitamin $K_3$ (Menadione):** Synthetic water-soluble formulation.

### Biochemical Function: The Vitamin K Cycle
Vitamin K is an essential cofactor for **$\gamma$-Glutamyl Carboxylase**, which converts specific Glutamate (Glu) residues into **$\gamma$-Carboxyglutamate (Gla)** on target proteins.

```mermaid
graph TD
    Glu[Glutamate Residues on Clotting Factors II, VII, IX, X, C, S] -->|gamma-Glutamyl Carboxylase + Active Vit K Hydroquinone| Gla[gamma-Carboxyglutamate Gla Residues]
    Gla -->|Binds Ca2+| Membrane[Anchors to Phospholipid Membranes]
    
    ActiveVitK[Active Reduced Vitamin K Hydroquinone] -->|Oxidized in Carboxylation| VitK epoxide[Vitamin K Epoxide]
    VitK epoxide -->|VKORC1 / Vitamin K Epoxide Reductase| ActiveVitK
    
    Warfarin[Warfarin / Coumadin] --x|Competitive Inhibition| VKORC1
```

* **Target Clotting Factors:** **Factors II (Prothrombin), VII, IX, X**, and **Proteins C and S** *(Mnemonic: **1972**)*.
* **Functional Role of Gla:** Gla residues possess two negative carboxylic acid groups that bind divalent **$\text{Ca}^{2+}$**, enabling clotting factors to anchor to negatively charged phospholipid membranes on activated platelets.

### Mechanism of Action of Warfarin
* **Warfarin / Coumadin** competitively inhibits **Vitamin K Epoxide Reductase (VKORC1)**.
* Prevents regeneration of reduced active Vitamin K hydroquinone, arresting $\gamma$-carboxylation of Factors II, VII, IX, X, leading to systemic anticoagulation.

### Hemorrhagic Disease of the Newborn & Adult Deficiency
* **Neonatal Deficiency:** Newborns are severely prone to Vitamin K deficiency due to:
  1. Minimal placental transfer of Vitamin K.
  2. Sterile neonatal gut (lack of bacterial $K_2$ synthesis).
  3. Low concentration of Vitamin K in human breast milk.
* **Manifestation:** **Hemorrhagic Disease of the Newborn** (bleeding from umbilical stump, GI tract, or fatal intracranial hemorrhage).
* **Prevention:** Standard single intramuscular dose of **Vitamin $K_1$ (1.0 mg)** administered to all newborns at birth.
* **Adult Deficiency:** Caused by prolonged broad-spectrum antibiotic therapy (clears intestinal flora) or fat malabsorption. Laboratory profile: **Prolonged Prothrombin Time (PT / INR)** initially, followed by prolonged aPTT.

---

## High-Yield NEET PG / INI-CET Points
* **Vitamin E Deficiency Neuro-Presents Like:** $B_{12}$ deficiency/Friedreich ataxia, but **WITHOUT megaloblastic anemia**.
* **Vitamin K Dependent Factors:** **II, VII, IX, X, Protein C, Protein S**.
* **Shortest Half-Life Factor:** **Factor VII** (hence PT/INR rises first in Vitamin K deficiency or Warfarin therapy).
* **Molecular Target of Warfarin:** **VKORC1** (Vitamin K Epoxide Reductase).
* **Standard Newborn Prophylaxis:** **1 mg IM Vitamin $K_1$ at birth** to prevent intracranial hemorrhage.

---
