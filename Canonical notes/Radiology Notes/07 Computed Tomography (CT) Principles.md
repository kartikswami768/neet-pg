---
title: "Chapter 07: Computed Tomography (CT) Principles"
tags:
  - radiology
  - ct-physics
  - hounsfield-units
  - windowing
  - helical-ct
  - mdct
date: 2026-11-08
obsidianEditingMode: live
---

# Chapter 07: Computed Tomography (CT) Principles

## 7.1 Evolution & Equipment Mechanics

Computed Tomography (CT) revolutionized diagnostic radiology by replacing two-dimensional overlapping projection radiographs with cross-sectional tomographic slices representing precise tissue attenuation coefficients. Developed by **Sir Godfrey Hounsfield** and **Allan Cormack** (who shared the Nobel Prize in Physiology or Medicine in 1979), CT technology has progressed through multiple scanner generations to modern multi-detector helical systems.

| Scanner generation / design | Beam and detector arrangement | Acquisition principle | Key point |
| --- | --- | --- | --- |
| First generation | Pencil beam; single detector. | Translate–rotate. | Very slow acquisition. |
| Second generation | Narrow fan beam; small detector array. | Translate–rotate. | Faster than first generation. |
| Third generation | Wide fan beam; curved detector array. | Tube and detector array rotate together. | Detector calibration failure can produce ring artefact. |
| Fourth generation | Rotating X-ray tube with stationary detector ring. | Rotate–stationary. | Large stationary detector array. |
| Helical/spiral CT | Slip-ring technology. | Continuous tube rotation with continuous table movement. | Enables volumetric acquisition. |
| Multidetector CT (MDCT) | Multiple rows of detectors. | Multiple slices acquired per rotation. | Fast coverage and thin-section reconstruction. |

### Scanner Generations & Technological Milestones

> [!NOTE]
> **Key Historical Progression**:
> 1. **1st Generation**: Single pencil X-ray beam paired with a single sodium iodide detector. The tube-detector assembly underwent translation across the patient, rotated by $1^\circ$, and translated again. Total scan time was ~5 minutes per slice.
> 2. **2nd Generation**: Narrow fan-shaped X-ray beam ($5^\circ - 30^\circ$ divergence) paired with a linear array of 30–300 detectors. Still required translate-rotate motion, reducing scan time to 20–30 seconds per slice.
> 3. **3rd Generation (Rotate-Rotate)**: Wide fan-shaped beam covering the entire patient width, paired with a wide curved arc of gas or solid-state detectors (up to 800+ elements). Both tube and detector array rotate $360^\circ$ synchronously around the patient. *Clinical Pitfall*: A miscalibrated or defective detector element creates a characteristic **Ring Artifact** concentric around the rotation center.
> 4. **4th Generation (Rotate-Stationary)**: A full $360^\circ$ stationary ring of thousands of fixed detectors surrounding the gantry, while only the X-ray tube rotates inside. Eliminates ring artifacts but increases cost and scatter.

### Helical (Spiral) CT & Slip-Ring Technology
Conventional axial CT acquired data slice-by-slice, pausing table motion between rotations to prevent winding of power and signal cables. The introduction of **Slip-Ring Technology**—sliding electrical brushes conducting power and data across stationary gantry grooves—allowed continuous, uninterrupted $360^\circ$ rotation of the X-ray tube while the patient table advanced continuously through the gantry.

$$\text{Pitch} = \frac{\text{Table Movement Per } 360^\circ \text{ Rotation (mm)}}{\text{Total Beam Collimation / Width (mm)}}$$

- **Pitch = 1.0**: Contiguous volume coverage without gaps or overlap.
- **Pitch > 1.0**: Table advances faster than beam width. Reduces radiation dose and scan time, but decreases $z$-axis spatial resolution.
- **Pitch < 1.0**: Overlapping acquisition. Increases $z$-axis spatial resolution and image detail, but increases patient radiation exposure.

### Multi-Detector CT (MDCT) & Volumetric Imaging
Modern MDCT systems employ multi-row detector arrays along the $z$-axis (e.g., 16, 64, 128, 256, or 320 detector rows). Instead of a flat fan beam, MDCT utilizes a **3D Cone Beam** geometry. 
- **Isotropic Voxels**: MDCT produces isotropic resolution where voxel dimensions are equal in all three axes ($x = y = z$, e.g., $0.5 \text{ mm} \times 0.5 \text{ mm} \times 0.5 \text{ mm}$). This allows seamless Multiplanar Reformation (MPR) in sagittal, coronal, and oblique planes without loss of image sharpness.

---

## 7.2 Hounsfield Unit (HU) / CT Attenuation Scale

The fundamental physical unit of CT imaging is the **Hounsfield Unit (HU)** (or CT number), which quantifies the linear attenuation coefficient ($\mu$) of a tissue voxel relative to distilled water ($\mu_{\text{water}}$) at standard beam energy.

$$\text{HU} = 1000 \times \left( \frac{\mu_{\text{tissue}} - \mu_{\text{water}}}{\mu_{\text{water}}} \right)$$

By definition:
- **Water** $= 0 \text{ HU}$
- **Air** $= -1000 \text{ HU}$ (attenuation effectively zero)

| Approximate attenuation (HU) | Typical material or tissue | Usual display appearance |
| --- | --- | --- |
| −1000 | Air | Black |
| Around −900 to −500 | Aerated lung | Very dark |
| Around −100 to −50 | Fat | Dark |
| 0 | Water | Intermediate grey |
| Around +20 to +50 | Many soft tissues | Grey; values overlap by tissue and phase |
| Variable; often higher after enhancement | Iodinated contrast in vessels or enhancing tissues | Bright |
| Often +200 to +1000 or higher | Cortical bone and calcification | Very bright |
| Very high and scanner-dependent | Dense metal | Bright with possible streak artefact |

### Standard Reference Attenuation Values

| Tissue / Material | Attenuation Range (HU) | Visual Appearance on Standard Soft Tissue Window |
| :--- | :--- | :--- |
| **Air** | $-1000 \text{ HU}$ | Pure Black (hypodense) |
| **Lung Parenchyma** | $-900 \text{ to } -500 \text{ HU}$ | Very Dark Gray |
| **Fat** | $-100 \text{ to } -50 \text{ HU}$ | Dark Gray / Black |
| **Water / Simple Fluid / CSF** | $0 \text{ HU}$ ($\pm 10 \text{ HU}$) | Reference Baseline Gray |
| **Bile / Lymph** | $+5 \text{ to } +15 \text{ HU}$ | Low-density Gray |
| **Serous Fluid / Transudate** | $0 \text{ to } +20 \text{ HU}$ | Low-density Gray |
| **Exudate / High-Protein Fluid** | $+20 \text{ to } +30 \text{ HU}$ | Intermediate Gray |
| **Unenhanced Soft Tissue / Liver / Spleen** | $+35 \text{ to } +60 \text{ HU}$ | Mid Gray |
| **Acute Hematoma / Whole Blood** | $+45 \text{ to } +80 \text{ HU}$ | Hyperdense / Bright White (due to globin protein concentration) |
| **Intravenous Contrast / Calcified Plaque** | $+100 \text{ to } +300 \text{ HU}$ | Dense White |
| **Cortical Bone** | $+200 \text{ to } +1000+ \text{ HU}$ | Intense White |
| **Surgical Clips / Metallic Implants** | $>+2000 \text{ HU}$ | Pure White with radiating streak artifacts |

> [!IMPORTANT]
> **Diagnostic Pearl — Acute Hemorrhage Evolution on CT**:
> - **Hyperacute (<3 hours)**: Iso- to slightly hyperdense ($+30 \text{ to } +45 \text{ HU}$, liquid unclotted blood).
> - **Acute (1–3 days)**: **Markedly Hyperdense** ($+60 \text{ to } +80 \text{ HU}$) due to clot retraction and high local hemoglobin/protein concentration.
> - **Subacute (1–3 weeks)**: Isodense ($+30 \text{ to } +45 \text{ HU}$) relative to brain parenchyma as red blood cells lyse.
> - **Chronic (>3 weeks)**: Hypodense ($0 \text{ to } +20 \text{ HU}$) as the clot converts to fluid seroma/hygroma.

---

## 7.3 CT Windowing, Reconstruction & Safety

### CT Windowing Dynamics (Window Width & Window Level)
The human eye can only distinguish approximately 20 to 30 shades of gray. However, the CT attenuation scale spans over 2000 HU. **Windowing** maps a selected range of Hounsfield Units to the full grayscale (display black to display white) to optimize visual contrast for specific tissues.

**Window width (WW) and window level (WL)**

The window level is the centre of the displayed attenuation range; the window width is the span of Hounsfield units mapped to the greyscale.

$$\text{Lower bound}=WL-\frac{WW}{2}$$
$$\text{Upper bound}=WL+\frac{WW}{2}$$

| Setting | Effect on display |
|---|---|
| Narrow WW | Higher displayed contrast over a smaller HU range. |
| Wide WW | More HU values included, with lower displayed contrast. |
| Higher WL | Shifts the centre of the displayed HU range upward. |
| Lower WL | Shifts the centre of the displayed HU range downward. |

Values below the lower bound are displayed black and values above the upper bound are displayed white.

1. **Window Level (WL / Center)**: The midpoint HU value around which the window is centered. It represents the average attenuation of the tissue of interest.
2. **Window Width (WW)**: The total range of HU values displayed across the grayscale gradient.
   - **Narrow Window Width** (e.g., Brain Window): Maximizes contrast resolution between tissues with subtle attenuation differences (e.g., gray matter $+35 \text{ HU}$ vs. white matter $+30 \text{ HU}$).
   - **Wide Window Width** (e.g., Bone or Lung Window): Spans thousands of HU to display extreme density gradients without clipping.

### Standard Clinical Window Settings

| Clinical Window | Window Level (WL) | Window Width (WW) | Target Anatomical Structures Displayed |
| :--- | :--- | :--- | :--- |
| **Brain Soft Tissue** | $+40 \text{ HU}$ | $80 \text{ HU}$ | Gray matter, white matter, early ischemic stroke, edema |
| **Abdomen / Pelvis** | $+40 \text{ to } +50 \text{ HU}$ | $350 \text{ to } 400 \text{ HU}$ | Liver, spleen, kidneys, pancreas, bowel wall |
| **Mediastinum / Chest** | $+40 \text{ HU}$ | $350 \text{ to } 400 \text{ HU}$ | Heart, great vessels, mediastinal lymph nodes |
| **Lung Parenchyma** | $-600 \text{ HU}$ | $1500 \text{ HU}$ | Pulmonary interstitium, nodules, emphysema, air bronchograms |
| **Bone Window** | $+400 \text{ to } +500 \text{ HU}$ | $1500 \text{ to } 2000 \text{ HU}$ | Trabecular bone detail, cortical fractures, osteolytic lesions |

### Image Reconstruction Algorithms

| Feature | Filtered back projection (FBP) | Iterative reconstruction (IR) |
| --- | --- | --- |
| Approach | Analytical reconstruction using filtered projections. | Repeated comparison between measured and modelled projection data. |
| Computation | Fast and computationally efficient. | More computationally intensive, though modern systems are highly optimised. |
| Noise | Noise can be prominent at low radiation dose. | Can reduce image noise and permit dose optimisation. |
| Use | Traditional standard reconstruction method. | Widely used in modern CT systems, often in hybrid forms. |

- **Filtered Back Projection (FBP)**: Classical analytic mathematical algorithm. Applies a spatial filter (kernel) to raw projection data before smearing it back across a digital matrix. Fast, but generates high image noise when X-ray photon count (mAs) is reduced.
- **Iterative Reconstruction (IR)**: Modern computational algorithm that repeatedly compares measured projection data against a simulated optical model of the scanner. By iteratively refining the image, IR dramatically reduces image noise and streak artifacts, permitting **radiation dose reductions of 30% to 70%** while maintaining image quality.

### CT Radiation Dosimetry & Metrics

1. **Computed Tomography Dose Index ($\text{CTDI}_{\text{vol}}$)**: Measures the average absorbed radiation dose within a single scanned slice volume (expressed in **mGy**).
2. **Dose Length Product (DLP)**: Quantifies total radiation exposure for an entire CT examination by multiplying slice dose by total scan length along the $z$-axis (expressed in **$\text{mGy}\cdot\text{cm}$**).
   $$\text{DLP} (\text{mGy}\cdot\text{cm}) = \text{CTDI}_{\text{vol}} (\text{mGy}) \times \text{Scan Length} (\text{cm})$$
3. **Effective Dose ($E$)**: Estimates stochastic radiation risk to the whole body (expressed in **mSv**).
   $$E (\text{mSv}) = k \times \text{DLP}$$
   *(where $k$ is a region-specific normalized conversion factor, e.g., $k \approx 0.015 \text{ mSv}\cdot\text{mGy}^{-1}\cdot\text{cm}^{-1}$ for abdomen/pelvis).*

> [!WARNING]
> **CT Radiation Risk Context**:
> - **Chest CT**: $\sim 2 - 5 \text{ mSv}$ ($\approx 100 - 250$ standard chest radiographs).
> - **Abdomen/Pelvis CT**: $\sim 8 - 10 \text{ mSv}$ ($\approx 400 - 500$ standard chest radiographs).
> - **Pediatric CT Protocols**: Must always use age- and weight-adjusted kVp/mAs parameters (Child-sizing) to adhere strictly to ALARA principles.
