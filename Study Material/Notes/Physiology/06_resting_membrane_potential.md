---
title: Resting Membrane Potential
chapter: 06
subject: Physiology
tags:
  - physiology
  - nerve-muscle-physiology
---

# 06 — Resting Membrane Potential

## Definition and measurement

- **Resting:** the cell remains in equilibrium without external stimulation.
- **Potential:** voltage/charge of the cell.
- **Resting membrane potential (RMP):** voltage difference between the inside and outside of the cell membrane.
  - Voltage inside the cell membrane: resting membrane voltage.
  - Voltage outside the cell membrane: reference voltage.
- The source gives the range of RMP as **−10 mV to −100 mV**.

![[images/ch06_p037_rmp_measurement.png]]

To measure RMP, place the reference electrode outside the cell membrane and the active/recording electrode (a glass micro-electrode) inside. Connect both electrodes to a sensitive voltmeter to measure the voltage difference.

## Origin of resting membrane potential

RMP arises from concentration differences of ions across a selectively permeable membrane.

- Ions are unevenly distributed between extracellular fluid (ECF) and intracellular fluid (ICF).
- The membrane has differential permeability to different ions at rest.
- Leak channels remain open even in the resting condition of the cell.
- **Potassium** is identified as the most important ion for generation of RMP.
- The Na⁺/K⁺-ATPase expels 3 Na⁺ ions and brings 2 K⁺ ions in across the cell membrane, maintaining RMP on the negative side. The source says the pump contributes 5–10% to RMP generation.

## Uneven distribution of ions

| Ion/component | Extracellular fluid (ECF) | Intracellular fluid (ICF) |
|---|---:|---:|
| Na⁺ | 142 mEq/L | 14 mEq/L |
| K⁺ | 4.2 mEq/L | 140 mEq/L |
| Ca²⁺ | 1.3 mEq/L | 0 mEq/L |
| Mg²⁺ | 0.8 mEq/L | 20 mEq/L |
| Cl⁻ | 106 mEq/L | 4 mEq/L |
| Proteins | 7 g/dL (5 mEq/L) | 30 g/dL (40 mEq/L) |

The source states that ECF concentration is about one-third the concentration in seawater today. ECF concentration is maintained by pumps/carrier proteins and the Donnan effect.

## Gibbs–Donnan effect

- Mainly due to protein; also called **Donnan’s effect** and described by Donnan.
- **Cause:** presence of large, impermeant ions on one side of the cell.
- Example: a semipermeable membrane divides a compartment into two compartments. When 12 permeant Na⁺ ions are introduced into one compartment, they distribute equally (6 Na⁺ ions in each compartment). Introducing a large impermeant, negatively charged protein molecule into one compartment changes the distribution of other permeant ions.
- The negatively charged protein attracts positively charged permeant ions (Na⁺) into that compartment and repels negatively charged permeant ions into the opposite compartment. Equilibrium develops after some time.

![[images/ch06_p038_gibbs_donnan.png]]

Gibbs and Donnan formulated mathematical equations to describe this phenomenon:

1. Total positive charges in each compartment equal total negative charges in that compartment:

   \[
   [\text{Total}^+]_A=[\text{Total}^-]_A,\qquad
   [\text{Total}^+]_B=[\text{Total}^-]_B
   \]

2. Considering only permeant ions and neglecting protein:

   \[
   [\mathrm{Na}^+]_A\,[\mathrm{Cl}^-]_A=[\mathrm{Na}^+]_B\,[\mathrm{Cl}^-]_B
   \]

3. After equilibrium, the total number of ions in the two compartments is not equal; the source states **osmotic pressure A ≫ osmotic pressure B**.

The source also states that ICF and ECF are electroneutral.

## Leak channels

- Leak channels generate RMP through diffusion of ions.
- K⁺, Na⁺ and Cl⁻ leak channels contribute to RMP.

![[images/ch06_p039_leak_channel.png]]

### Example: a glial cell with only K⁺ leak channels

- The inside of the cell is initially electroneutral, with equal negative and positive charges (every positive charge is paired with a negative charge).
- K⁺ concentration inside the cell is higher than outside.
- K⁺ moves out of the cell through leak channels along its concentration gradient.
- Negative ions that cannot pass through the leak channel remain inside, leaving negative charge on the inner surface of the cell membrane; positive charge accumulates outside.
- The positive charge outside repels further K⁺ movement. At equilibrium, the electrical gradient pulls extra K⁺ back inside.
- The force of the concentration gradient equals the force of the electrical gradient. The electrochemical gradient establishes equilibrium, and net movement of K⁺ through leak channels becomes zero.
- The voltage difference at equilibrium is the **equilibrium potential** (also termed “isoelectric potential” in the source).

![[images/ch06_p040_glial_vs_mammalian_rmp.png]]

## Nernst equation

**Aim:** calculate the equilibrium potential of an ion.

\[
E_X=\frac{RT}{zF}\ln\!\left(\frac{[X]_{\mathrm{outside}}}{[X]_{\mathrm{inside}}}\right)
\]

\[
E_X=\frac{2.3RT}{zF}\log_{10}\!\left(\frac{[X]_{\mathrm{outside}}}{[X]_{\mathrm{inside}}}\right)
\]

The simplified version given for 37°C is:

\[
E_X=\frac{61\ \mathrm{mV}}{z}\log_{10}\!\left(\frac{[X]_{\mathrm{outside}}}{[X]_{\mathrm{inside}}}\right)
\]

- \(X\): concentration of the ion inside and outside.
- \(RT/F\): constant, given as 26.7 mV at 37°C.
- \(z\): valency of the ion.

### Examples

**Example 1 — K⁺**

- Inside concentration: 140 mEq/L.
- Outside concentration: 14 mEq/L.

\[
E_K=\frac{+61}{+1}\log_{10}(14/140)=-61\ \mathrm{mV}
\]

**Example 2 — Cl⁻**

- Inside concentration: 11 mEq/L.
- Outside concentration: 110 mEq/L.

\[
E_{Cl}=\frac{+61}{-1}\log_{10}(110/11)=-61\ \mathrm{mV}
\]

## Equilibrium potentials of ions in normal mammalian cells

| Ion | Equilibrium potential (mV) |
|---|---:|
| Sodium | +63 |
| Chloride | −70 |
| Potassium | −90 |
| Calcium | +132 |

Calculated using the Nernst equation at 37°C.

### Glial cells and other mammalian cells

- In the source’s glial-cell example, only a K⁺ channel is permeable; the equilibrium potential of K⁺ is −90 mV, and the cell’s RMP is −90 mV.
- If the cell is permeable to only one type of leak channel, the equilibrium potential of that ion equals the RMP of that cell.
- In other mammalian cells, all three leak channels (K⁺, Cl⁻ and Na⁺) contribute to RMP. Each leak channel tends to bring RMP towards its own equilibrium potential.
- RMP moves closer to the equilibrium potential of the most permeable ion.
- Maximum permeability order given: **K⁺ ≫ Cl⁻ ≫ Na⁺**.
- Permeability coefficient, potassium:chloride:sodium = `1:0.45:0.04 = 100:45:4`.
- Maximum channels open in a resting mammalian cell, as stated: 100 K⁺ channels, 45 Cl⁻ channels and 4 Na⁺ channels.

## Goldman–Hodgkin–Katz equation / Goldman constant-field equation

**Aim:** calculate RMP when the cell membrane is permeable to more than one ion. The source says the Nernst equation cannot be used when the membrane is permeable to more than one ion.

\[
V_m=\frac{RT}{F}\ln\!\left(
\frac{P_K[K^+]_o+P_{Na}[Na^+]_o+P_{Cl}[Cl^-]_i}
{P_K[K^+]_i+P_{Na}[Na^+]_i+P_{Cl}[Cl^-]_o}
\right)
\]

- \(V_m\): membrane voltage/RMP.
- \(RT/F\): constant.
- \(\ln\): natural logarithm.
- \(P_K\): potassium permeability; \(P_{Cl}\): chloride permeability; \(P_{Na}\): sodium permeability.
- \([K^+]\), \([Cl^-]\), and \([Na^+]\): ion concentrations.
- Subscript \(i\): inside concentration; subscript \(o\): outside concentration.

## RMP of various cells

Calculated with the Goldman–Hodgkin–Katz equation.

| Cell type | Resting potential (mV) | “Remember” value in source |
|---|---:|---:|
| Neurons | −60 to −70 | −70 |
| Skeletal muscle | −85 to −95 | −90 |
| Smooth muscle | −50 to −60 | −50 to −60 |
| Cardiac muscle | −80 to −90 | −90 |
| Hair cells (cochlea) | −15 to −40 | −40 |
| Astrocyte | −80 to −90 | −90 |
| Erythrocyte | −8 to −12 | −10 |
| Photoreceptor | −40 (dark) to −70 (light) | — |

### Important information

- RMP is most permeable to K⁺.
- Permeability order: K⁺ > Cl⁻ > Na⁺.
- RMP of almost all vertebrate cells is stated to be close to the equilibrium potential of K⁺.
- The source states “RMP of neuron = equilibrium potential of Cl⁻” and “RMP of myocardium = equilibrium potential of K⁺.”
- Hypokalaemia: inside of the cell becomes more negative.
- Hyperkalaemia: inside of the cell becomes more positive.

## MCQs

### Gibbs–Donnan equilibrium

Gibbs–Donnan equilibrium is mainly due to:

- a. Ca²⁺
- b. Phosphate
- c. Bicarbonate
- d. Protein

**Answer: d. Protein.** (AIIMS 2020)

### Raised serum potassium

In a 35-year-old patient, due to intravascular haemolysis, serum K⁺ increases to 5.5 mEq/L. What will happen to the RMP of the peripheral nerve?

- a. More positive
- b. More negative
- c. Remain unchanged
- d. Zero

**Answer: a. More positive.** (NEET 2023)

### Equilibrium potential of an anion

An anion has a concentration of 100 mEq/L in ECF and 10 mEq/L in ICF. What is its equilibrium potential?

- a. +10 mV
- b. −10 mV
- c. +61 mV
- d. −61 mV

**Answer: d. −61 mV.** (INI-CET 2021)
