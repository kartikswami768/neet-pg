---
subject: Oncology
chapter: "08"
tags:
  - oncology
  - hematologic-malignancies
  - leukemia
  - ALL
  - AML
  - APML
  - CML
  - CLL
  - MPN
  - medical-notes
---

# Chapter 8: Acute & Chronic Leukemias

## 8.1 Acute Leukemias

### Acute Lymphoblastic Leukemia (ALL)
ALL is a malignant transformation and clonal proliferation of lymphoid progenitor cells (lymphoblasts) in the bone marrow, blood, and extramedullary sites.
* **Epidemiology**: Most common pediatric cancer, peaking between ages $2\text{ and }5\text{ years}$. A second peak occurs in adults $>60\text{ years}$.

#### Immunophenotypic & Genetic Subtypes
1. **B-Cell ALL (B-ALL)** ($\sim 85\%$ of cases): Expresses **CD10 (CALLA)**, **CD19**, **CD20**, **CD22**, and nuclear **Terminal Deoxynucleotidyl Transferase (TdT)**.
   * **Favorable Genetics**:
     * $t(12;21)(p13;q22)$ *ETV6-RUNX1* (TEL-AML1): Most common pediatric rearrangement ($\sim 25\%$), excellent prognosis.
     * High Hyperdiploidy ($51\text{--}67$ chromosomes).
   * **Unfavorable Genetics**:
     * $t(9;22)(q34;q11.2)$ *BCR-ABL1* (Philadelphia chromosome): Occurs in $25\%$ of adult B-ALL; requires addition of Tyrosine Kinase Inhibitors (Imatinib/Dasatinib) to chemotherapy.
     * $KMT2A$ (MLL) gene rearrangements ($11q23$): Common in infant ALL; highly aggressive.
     * Hypodiploidy ($<44$ chromosomes).
2. **T-Cell ALL (T-ALL)** ($\sim 15\%$): Expresses **CD2**, **CD3**, **CD5**, **CD7**, and TdT. Classically presents in **adolescent males** with a rapidly expanding **anterior mediastinal (thymic) mass**, pleural effusions, and marked leukocytosis.

```mermaid
graph TD
    A[Acute lymphoblastic leukemia] --> B[B-ALL: about 85%]
    A --> C[T-ALL: about 15%]
    B --> D[CD10+, CD19+, TdT+]
    B --> E[t(12;21): favorable-risk association]
    B --> F[t(9;22): adverse-risk association]
    C --> G[CD2+, CD3+, TdT+]
    C --> H[Often adolescent male with an anterior mediastinal mass]
```

#### Diagnostic Criteria & Treatment Phases
* **Bone Marrow Diagnosis**: $\ge 20\%$ lymphoblasts in bone marrow aspirate/biopsy. Microscopic appearance: Small-to-medium blasts with high nuclear-to-cytoplasmic ratio, fine chromatin, and inconspicuous nucleoli. **MPO negative, PAS positive**.
* **Treatment Regimen**:
  1. **Induction**: Combination chemotherapy (Vincristine, Corticosteroid [Dexamethasone], L-Asparaginase $\pm$ Anthracycline) to achieve complete remission ($<5\%$ blasts).
  2. **Consolidation / Intensification**: Multi-agent therapy (High-dose Methotrexate, Cytarabine) to eliminate submicroscopic residual disease.
  3. **Maintenance Therapy**: Daily oral 6-Mercaptopurine (6-MP) and weekly oral Methotrexate for $2\text{--}3\text{ years}$.
  4. **CNS Prophylaxis**: Mandatory in ALL (due to blood-brain barrier sanctuary site); intrathecal Methotrexate $\pm$ Cytarabine.

### Acute Myeloid Leukemia (AML)
Malignant clonal disorder of myeloid progenitor cells characterized by impaired differentiation and accumulation of non-functional myeloblasts.
* **Epidemiology**: Predominantly an adult leukemia (median age $\sim 68\text{ years}$).
* **Morphology & Immunophenotype**: $\ge 20\%$ myeloblasts in marrow/blood. Myeloblasts are large cells with abundant cytoplasm, delicate chromatin, prominent nucleoli, and pathognomonic **Auer Rods** (clumps of fused azurophilic lysosomal granules containing myeloperoxidase). Immunophenotype: **Myeloperoxidase (MPO)** positive, **CD33+**, **CD13+**, **CD117+**, **HLA-DR+**.

#### Cytogenetic Risk Stratification

| Risk Group | Cytogenetic & Molecular Aberrations | Clinical Implications |
| :--- | :--- | :--- |
| **Favorable** | $t(8;21)(q22;q22)$ *RUNX1-RUNX1T1*; $inv(16)(p13q22)$ or $t(16;16)$ *CBFB-MYH11* (Core Binding Factor AML); Mutated *NPM1* (without *FLT3-ITD*); Mutated *CEBPA*. | High complete remission rate; consolidation with high-dose Cytarabine (HiDAC) without routine initial allogeneic stem cell transplant. |
| **Intermediate** | Normal karyotype; Mutated *NPM1* with *FLT3-ITD*; $t(9;11)(p22;q23)$ *MLLT3-KMT2A*. | Intermediate prognosis; transplant considered based on Minimal Residual Disease (MRD). |
| **Unfavorable / Adverse** | Complex karyotype ($\ge 3$ abnormalities); Monosomal karyotype; $-5/5q-$, $-7/7q-$; $inv(3)$ or $t(3;3)$; Mutated *TP53*, *ASXL1*, *RUNX1*; High-allele ratio *FLT3-ITD*. | Poor chemo-responsiveness; early Allogeneic Hematopoietic Stem Cell Transplantation (HSCT) indicated in 1st remission. |

* **Standard Induction Therapy**: **"7 + 3 Regimen"**: Continuous IV **Cytarabine** for 7 days + IV **Daunorubicin** (or Idarubicin) for 3 days. Midostaurin added if *FLT3* mutated.

### Acute Promyelocytic Leukemia (APML / AML M3)
Distinct subtype of AML representing a medical emergency due to high early mortality from severe consumptive coagulopathy and DIC.
* **Cytogenetics & Molecular Pathogenesis**: Driven by the balanced reciprocal translocation **$t(15;17)(q22;q12)$**, fusing the Promyelocytic Leukemia (*PML*) gene on chromosome 15 to the Retinoic Acid Receptor Alpha (*RARA*) gene on chromosome 17. The resulting **PML-RARA** chimeric fusion protein acts as a dominant-negative transcription factor, blocking myeloid differentiation at the promyelocyte stage.
* **Morphology**: Hypergranular promyelocytes packed with numerous Auer rods ("Faggot cells").
* **Targeted Non-Chemotherapy Regimen**:
  * **All-Trans Retinoic Acid (ATRA / Tretinoin)** + **Arsenic Trioxide (ATO)**: ATRA binds RARA and releases the transcriptional block; ATO induces degradation of the PML-RARA protein. Combined ATRA + ATO achieves $>95\%$ cure rates without conventional cytotoxic chemotherapy.
* **Complication - Differentiation Syndrome**: Characterized by fever, fluid retention, pulmonary infiltrates, pleural/pericardial effusions, and acute renal failure occurring during ATRA/ATO therapy due to massive cytokine release from differentiating promyelocytes. Managed with immediate high-dose IV **Dexamethasone** ($10\text{ mg}$ BID) without stopping ATRA/ATO.

---

## 8.2 Chronic Leukemias & Myeloproliferative Neoplasms

### Chronic Myelogenous Leukemia (CML)
CML is a myeloproliferative neoplasm originating from a pluripotent hematopoietic stem cell, characterized by dysregulated expansion of the granulocytic lineage.
* **Cytogenetics & Pathogenesis**: Hallmarked by the **Philadelphia Chromosome ($\text{Ph}^1$)**, resulting from reciprocal translocation **$t(9;22)(q34.1;q11.2)$**. This fuses the *ABL1* proto-oncogene (ch 9) to the *BCR* gene (ch 22), generating a chimeric **p210 $BCR-ABL1$** fusion gene with constitutively active tyrosine kinase activity. This drives unregulated granulopoiesis, inhibition of apoptosis, and altered cell adhesion.

```mermaid
graph LR
    A[Chromosome 9: ABL1] --> C[t(9;22) reciprocal translocation]
    B[Chromosome 22: BCR] --> C
    C --> D[BCR::ABL1 fusion gene: Philadelphia chromosome]
    D --> E[p210 fusion protein]
    E --> F[Constitutively active tyrosine kinase]
```

#### Clinical Phases & Diagnostics
1. **Chronic Phase** ($90\%$ of presentations): Asymptomatic or mild symptoms (fatigue, weight loss, night sweats, left upper quadrant fullness due to **massive splenomegaly**). Peripheral blood shows marked leukocytosis ($>100,000/\mu\text{L}$) with a full spectrum of granulocytic differentiation (myeloblasts $<5\%$, promyelocytes, myelocytes, metamyelocytes, bands, mature neutrophils) with prominent **basophilia** and **eosinophilia**.
2. **Accelerated Phase**: Blasts $10\text{--}19\%$, persistent or increasing splenomegaly/thrombocytosis unresponsive to therapy, secondary cytogenetic abnormalities.
3. **Blast Crisis**: Transformation into an acute leukemia ($\ge 20\%$ blasts in blood/marrow); $70\%$ transform to Acute Myeloid Blast Crisis, $30\%$ to Acute Lymphoid Blast Crisis.
* **Key Diagnostic Differentiation**: **Leukocyte Alkaline Phosphatase (LAP) Score**: Extremely **low or zero** in CML (distinguishes CML from a reactive leukemoid reaction, where LAP is elevated).
* **Targeted Therapy**:
  * **First-Generation TKI**: **Imatinib Mesylate**: Competitively inhibits the ATP-binding pocket of the BCR-ABL1 kinase.
  * **Second/Third-Generation TKIs**: Dasatinib, Nilotinib, Bosutinib, or **Ponatinib** (specifically overcomes the resistant **T315I mutation**).

### Chronic Lymphocytic Leukemia (CLL) / Small Lymphocytic Lymphoma (SLL)
Monomorphic clonal proliferation of morphologically mature but immunologically incompetent B lymphocytes in blood, bone marrow, and secondary lymphoid organs.
* **Immunophenotype**: **CD5+** (aberrant T-cell marker), **CD19+**, **CD20+ (dim)**, **CD23+**, **CD200+**, surface Ig (dim), **FMC7 negative**.
* **Peripheral Blood Smear**: Abundant small, mature-appearing lymphocytes with "block-like" clumped chromatin and fragile, ruptured **"Smudge Cells" / "Basket Cells"**.
* **Prognostic Biomarkers**:
  * **Unfavorable**: **del(17p)** or ***TP53* mutation** (predicts total resistance to chemo-immunotherapy); **del(11q)** (*ATM* loss); Unmutated *IGHV* status; ZAP-70 positive; CD38 positive.
  * **Favorable**: **del(13q)** isolated; Mutated *IGHV* status.
* **Complications**:
  * **Autoimmune Cytopenias**: Warm Autoimmune Hemolytic Anemia (AIHA, positive Coombs test) and Immune Thrombocytopenia (ITP).
  * **Richter Transformation**: Sudden transformation ($\sim 5\text{--}10\%$) of indolent CLL into an aggressive **Diffuse Large B-Cell Lymphoma (DLBCL)**, characterized by rapid lymphadenopathy enlargement, systemic B-symptoms, and rising LDH.
* **Targeted Non-Chemotherapy Regimens**:
  * **Bruton Tyrosine Kinase (BTK) Inhibitors**: **Ibrutinib**, Acalabrutinib, Zanubrutinib.
  * **BCL-2 Inhibitors**: **Venetoclax** (combines with anti-CD20 mAb **Obinutuzumab**).

### Classic Myeloproliferative Neoplasms (MPNs)
Stem cell disorders characterized by autonomous, effective hematopoiesis resulting in peripheral blood erythrocytosis, leukocytosis, or thrombocytosis.
1. **Polycythemia Vera (PV)**: Clonal expansion of red blood cell mass. Driven by the somatic **$JAK2\text{ V617F}$ mutation** in $>95\%$ of cases (exon 14 point mutation causing constitutive JAK-STAT activation independent of Erythropoietin). Features: Elevated Hb/Hct ($>16.5\text{ g/dL}$ in men, $>16.0\text{ g/dL}$ in women), **aquagenic pruritus** (itching after warm bath), splenomegaly, gout, and thrombotic complications (Budd-Chiari syndrome). Serum Erythropoietin (EPO) level is **suppressed/low**.
2. **Essential Thrombocythemia (ET)**: Persistent marked thrombocytosis ($\text{Platelets} \ge 450,000/\mu\text{L}$) with megakaryocytic hyperplasia in bone marrow. Somatic driver mutations: **$JAK2\text{ V617F}$** ($\sim 50\%$), **$CALR$** ($\sim 25\%$), or **$MPL$** ($\sim 5\%$). Clinical features: Erythromelalgia (burning pain and redness in hands/feet relieved by aspirin), microvascular thrombosis, or bleeding.
3. **Primary Myelofibrosis (PMF)**: Clonal myeloproliferation accompanied by reactive bone marrow stromal fibrosis and extramedullary hematopoiesis. Driver mutations: $JAK2$, $CALR$, $MPL$. Features: **Leukoerythroblastic blood picture** (immature granulocytes, nucleated RBCs, and **Teardrop RBCs / Dacrocytes**), **massive splenomegaly**, and severe constitutional symptoms. Marrow aspiration yields a "dry tap"; biopsy confirms dense reticulin/collagen fibrosis.

---

## Subsections Covered & Verification Checklist
- [x] 8.1 Acute Leukemias (ALL B-cell/T-cell markers, t(12;21), t(9;22), CNS prophylaxis; AML Auer rods, MPO, 7+3, cytogenetic risk; APML t(15;17) PML-RARA, DIC, ATRA + ATO, Differentiation Syndrome).
- [x] 8.2 Chronic Leukemias & MPNs (CML Philadelphia ch p210 BCR-ABL1, LAP score, TKIs & T315I; CLL CD5+/CD23+/CD200+, smudge cells, del(17p), Richter transformation, BTK/BCL-2 inhibitors; MPNs PV JAK2 V617F & low EPO, ET erythromelalgia, PMF teardrop cells & dry tap).

### Index Corrections & Source Notes
* *Genetics Update*: In pediatric B-ALL, $t(12;21)$ is the most frequent favorable translocational event, whereas $t(9;22)$ predominates in adult ALL requiring baseline TKI inclusion.
