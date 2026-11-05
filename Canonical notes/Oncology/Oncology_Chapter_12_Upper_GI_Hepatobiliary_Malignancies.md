---
subject: Oncology
chapter: "12"
tags:
  - oncology
  - gi-oncology
  - gastric-cancer
  - hcc
  - medical-notes
---

# Chapter 12: Upper Gastrointestinal & Hepatobiliary Malignancies

## 12.1 Esophageal & Gastric Carcinoma

### Esophageal Cancer Subtypes & Pathogenesis
1. **Squamous Cell Carcinoma (SCC)**:
   - **Epidemiology**: Most common subtype globally; predominant in Asian "esophageal cancer belt".
   - **Anatomical Site**: Upper and middle thirds of the esophagus.
   - **Risk Factors**: Alcohol abuse, tobacco smoking, achalasia, caustic lye strictures, Plummer-Vinson syndrome, hot beverage consumption, betel nut chewing.
2. **Adenocarcinoma**:
   - **Epidemiology**: Most common subtype in Western nations, rapidly increasing incidence.
   - **Anatomical Site**: Distal third of esophagus and gastroesophageal junction (GEJ).
   - **Risk Factors**: Long-standing GERD, **Barrett Esophagus** (specialized intestinal metaplasia with Alcian blue-positive goblet cells), obesity, tobacco.

```mermaid
graph LR
    A[Chronic gastroesophageal reflux] --> B[Barrett esophagus: intestinal metaplasia]
    B --> C[Dysplasia: low grade or high grade]
    C --> D[Distal esophageal adenocarcinoma]
```

### Gastric Adenocarcinoma Classification
- **Lauren Classification**:
  1. **Intestinal Type**: Cohesive neoplastic glands; associated with *H. pylori* pangastritis, environmental factors, dietary nitrites, chronic atrophic gastritis; males > females; older age.
  2. **Diffuse Type**: Non-cohesive single cells, **Signet-Ring Cell** morphology (mucin vacuole displacing nucleus to periphery), loss of **E-cadherin ($CDH1$)** cell adhesion molecule expression; hereditary diffuse gastric cancer ($CDH1$ mutation); leads to rigid, thickened **Linitis Plastica** ("leather-bottle stomach"); younger patients; equal gender distribution.

```mermaid
graph LR
    A[Intracellular mucin accumulates] --> B[Nucleus is displaced to the cell periphery]
    B --> C[Characteristic crescent-shaped peripheral nucleus]
    C --> D[Signet-ring cell morphology]
```

- **Metastatic Landmarks**:
  - **Virchow Node**: Left supraclavicular lymph node enlargement (Troisier sign).
  - **Sister Mary Joseph Nodule**: Periumbilical metastatic nodule.
  - **Krukenberg Tumor**: Bilateral ovarian metastases with signet-ring cell histology.
  - **Blumer Shelf**: Palpable rectouterine / rectovesical pouch tumor mass on rectal exam.

### Staging & Multimodal Treatment Protocols
- **Diagnostic Workup**: EGD with biopsy, Endoscopic Ultrasound (EUS) for depth of invasion (T-stage) and regional nodes (N-stage), CECT Abdomen/Pelvis, PET/CT.
- **Esophageal Surgery**:
  - **Ivor Lewis Esophagectomy**: Transthoracic subtotal esophagectomy with two-field lymphadenectomy (laparotomy + right thoracotomy).
  - **Transhiatal Esophagectomy**: Abdominal and left neck incision without thoracotomy.
- **Gastric Surgery**:
  - **Gastrectomy with $D_2$ Lymphadenectomy**: Gold standard. Distal gastrectomy for antral lesions ($5\text{ cm}$ clear proximal margin); Total gastrectomy for proximal/diffuse cancers. $D_2$ dissection resects perigastric nodes (stations 1–6) and hepatic artery, celiac, splenic artery nodes (stations 7–11; $\ge 16$ nodes evaluated).
- **Systemic Therapy Protocols**:
  - **Perioperative FLOT Regimen** (Fluorouracil, Leucovorin, Oxaliplatin, Docetaxel): Standard for resectable gastric/GEJ adenocarcinoma ($\ge T_2$ or $N+$).
  - **HER2 Testing**: Trastuzumab added to first-line chemotherapy for HER2-positive metastatic gastric cancer (TOGA trial).
  - **Immunotherapy**: Nivolumab or Pembrolizumab added to chemotherapy for PD-L1 CPS $\ge 5$ metastatic gastric/GEJ cancers.

---

## 12.2 Hepatocellular Carcinoma & Biliary Cancers

### Hepatocellular Carcinoma (HCC)
#### Etiology & Pathogenesis
HCC develops in the setting of chronic liver injury and cirrhosis in 80–90% of cases.
- **Major Etiologies**: Chronic Hepatitis B Virus (HBV - can cause HCC *without prior cirrhosis* via HBx protein integration), Chronic Hepatitis C Virus (HCV), Metabolic Dysfunction-Associated Steatohepatitis (MASH / NAFLD), Alcohol-related liver disease, Aflatoxin $B_1$ exposure (induces specific **$TP53$ codon 249 mutation**).

#### Non-Invasive Diagnostic Criteria (LI-RADS)
Unlike most solid tumors, HCC can be definitively diagnosed in a cirrhotic patient **without histological biopsy** using multiphasic CECT or MRI.
- **Pathognomonic Imaging Triad (LI-RADS 5)**:
  1. Intense **Arterial Phase Hyperenhancement** (hypervascularity fed by hepatic artery).
  2. Late **Portal Venous / Delayed Phase Washout** (hypodensity relative to surrounding liver parenchyma).
  3. Enhancing **Capsule / Pseudocapsule**.
- **Serum Biomarker**: $\mathbf{\alpha\text{-Fetoprotein (AFP)}}$ (values $>400\text{ ng/mL}$ highly specific in clinical context).

| Imaging phase | Key HCC feature assessed |
| :--- | :--- |
| **Non-contrast** | Baseline attenuation/signal before contrast |
| **Arterial phase** | Non-rim arterial-phase hyperenhancement |
| **Portal venous and delayed phases** | Washout relative to the surrounding liver; additional features may support LI-RADS categorization |

#### Staging & Treatment (BCLC System)
- **Very Early / Early Stage (BCLC 0 / A)**: Single lesion $<5\text{ cm}$ or up to 3 lesions $\le 3\text{ cm}$ with preserved liver function (Child-Pugh A).
  - **Resection**: For non-cirrhotic or compensated cirrhotic without portal HTN.
  - **Liver Transplantation**: Milan Criteria (Single lesion $\le 5\text{ cm}$ OR $\le 3$ lesions all $\le 3\text{ cm}$, no vascular invasion/extrahepatic spread).
  - **Ablation**: Radiofrequency Ablation (RFA) or Microwave Ablation for lesions $<3\text{ cm}$.
- **Intermediate Stage (BCLC B)**: Multinodular, asymptomatic, no extrahepatic spread.
  - **TACE**: Transcatheter Arterial Chemoembolization (doxorubicin-eluting beads + gelfoam occlusion of tumor feeding arteries).
- **Advanced Stage (BCLC C)**: Portal vein invasion or extrahepatic metastasis.
  - **First-Line Systemic Therapy**: **Atezolizumab (anti-PD-L1) + Bevacizumab (anti-VEGF)** (IMbrave150 protocol). Alternative: Durvalumab + Tremelimumab or TKIs (Sorafenib / Lenvatinib).

### Biliary Tract Cancers & Gallbladder Carcinoma
- **Cholangiocarcinoma**:
  - Subtypes: Intrahepatic, Perihilar (**Klatskin Tumor** at main hepatic duct bifurcation), Extrahepatic distal.
  - Risk Factors: Primary Sclerosing Cholangitis (PSC - strongly associated with Ulcerative Colitis), Liver flukes (*Clonorchis sinensis*, *Opisthorchis viverrini*), Choledochal cysts, Caroli disease.
  - Clinical: Painless obstructive jaundice, dark urine, acholic stools, pruritus. **Courvoisier Sign** (palpable non-tender gallbladder with obstructive jaundice, indicative of distal obstruction below cystic duct junction).
- **Gallbladder Carcinoma**:
  - Associated with chronic cholelithiasis, porcelain gallbladder (dystrophic calcification; 10–20% cancer risk), gallstone ileus history, and anomalous pancreaticobiliary duct junction.
  - Resection: Simple cholecystectomy for $T_{1a}$; Radical cholecystectomy (wedge resection of liver bed + portal lymphadenectomy) for $\ge T_{1b}$.

---

### Section Checklist & Source Verification
- [x] 12.1 Esophageal & Gastric Carcinoma (Lauren Intestinal vs Diffuse, Signet-ring cells, E-cadherin, Virchow/Krukenberg, FLOT regimen, $D_2$ gastrectomy)
- [x] 12.2 Hepatocellular Carcinoma & Biliary Cancers (LI-RADS arterial enhancement + washout, Milan criteria, Atezolizumab + Bevacizumab, Klatskin tumor, Courvoisier sign)

### Corrections & Notes
- *Diagnostic Correction*: Biopsy of suspected HCC in a transplant candidate is contraindicated if non-invasive imaging criteria (LI-RADS 5) are met, due to the risk of tumor needle-track seeding.
