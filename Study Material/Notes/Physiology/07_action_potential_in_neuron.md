---
title: Action Potential in Neuron
chapter: 07
subject: Physiology
tags:
  - physiology
  - nerve-muscle-physiology
---

# 07 — Action Potential in Neuron

## Depolarization and hyperpolarization

- In the resting condition, the interior of a neuron is negatively charged and the exterior is positively charged.
- Resting membrane potential (RMP): approximately **−70 mV**.
- **Stimulation → depolarization:** RMP becomes more positive.
- **Inhibition → hyperpolarization:** the interior becomes more negative.

![[images/ch07_p043_neuron_polarity.png]]

![[images/ch07_p043_membrane_potential_changes.png]]

### Changes after stimulation

| Term | Description given in the source |
|---|---|
| **Depolarization** | Movement of RMP towards the positive side. |
| **Repolarization** | Membrane potential returns to RMP. |
| **Overshoot** | Depolarization exceeds zero voltage (iso-voltage). |
| **Hyperpolarization** | Movement towards a more negative value than the RMP. |
| **RMP decrease** | During depolarization, the distance from the iso-voltage decreases. |
| **RMP increase** | During hyperpolarization, the distance from the iso-voltage increases. |

## Local potential

- Stimulation from an excitatory neuron affects the postsynaptic membrane, with an RMP of −70 mV.
- The membrane gradually depolarizes and crosses the <u>neuronal membrane threshold voltage of **−55 mV**.</u>
- At threshold, voltage-gated Na⁺ channels in the initial segment open; Na⁺ influx causes a rapid rise in membrane voltage ==from −55 mV to +35 mV and generates an action potential.==
- A gradual change (depolarization or hyperpolarization) in membrane voltage at the synapse is a **local potential/graded potential**. Synapses are formed at dendrites or soma.
- With stimulation, membrane voltage becomes more positive and approaches −55 mV. If the stimulus stops, voltage returns to RMP.
- The change does not propagate over a long distance; it decreases in the region where it was generated, hence “local potential.”

![[images/ch07_p044_local_potential.png]]

## Local potential and action potential

| Feature                   | Local potential                             | Action potential                                                                                                                                                                                         |
| ------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Propagation               | Non-propagated                              | Propagated                                                                                                                                                                                               |
| Amplitude                 | Depends on stimulus strength                | Does not depend on stimulus strength once generated                                                                                                                                                      |
| Change with distance/time | Decremental: decreases with length and time | Non-decremental                                                                                                                                                                                          |
| All-or-none law           | Does not follow                             | Follows the “all or none” law                                                                                                                                                                            |
| Summation                 | Has summation property                      | No summation property                                                                                                                                                                                    |
| Threshold response        | —                                           | When a local potential reaches −55 mV, an action potential is generated and membrane potential rises to +35 mV. Increasing stimulation strength after the AP is generated does not affect its amplitude. |

- **Length constant (λ):** distance at which a local potential is reduced to 37% of its original voltage.
- **Time constant (τ):** time at which a local potential is reduced to 37% of its original voltage.


## Summation of local potential

Summation is the addition of two local potentials. There are two types: temporal and spatial.

![[images/ch07_p045_temporal_spatial_summation.png]]

### Temporal summation (τ)

- The first stimulation causes a local voltage of +5 mV, which gradually decreases over time.
- A second local voltage of +5 mV occurs before the first voltage has decreased.
- The two stimulations sum with a long time constant and reach the neuron's threshold of 10 mV, producing an action potential.
- Two stimuli delivered over time in the same area, requiring a long time constant for summation, produce **temporal summation**.

### Spatial summation (λ)

- Two synapses are required for simultaneous stimulation.
- Local potentials move towards the initial segment.
- Long length constants are required for potentials to reach the initial segment and add to each other.
- **Spatial summation** occurs when stimuli are applied simultaneously at different locations; multiple synapses act simultaneously.

## Recording an action potential

- One electrode is placed inside the cell membrane.
- One electrode is placed on the surface of the cell membrane.
- The recording instrument is placed between the two electrodes.

## Different phases of an action potential

1. **Local potential generation:** stimulation gradually increases membrane voltage towards threshold. Gradual opening of voltage-gated Na⁺ channels allows Na⁺ influx.
2. **Depolarization phase:** once the local voltage crosses threshold, membrane voltage rapidly rises to +35 mV. Rapid opening of voltage-gated Na⁺ channels causes high Na⁺ influx. The source describes this as a positive-feedback phenomenon.
3. **Repolarization phase:** Na⁺ channels become inactive and membrane voltage stabilises; K⁺ channels open and K⁺ exits, making membrane voltage more negative. K⁺ channel opening is described as slow.
4. **After-hyperpolarization:** further K⁺ efflux continues after the RMP of −70 mV is reached, making voltage more negative than RMP. This is attributed to slow closure of K⁺ channels.

| Phase | Mechanism given in the source |
|---|---|
| Local potential generation | Entry of a small amount of Na⁺. |
| Depolarization | Fast entry of Na⁺. |
| Repolarization | Inactivation of Na⁺ channels and slow exit of K⁺. |
| After-hyperpolarization | Slow closure of K⁺ channels, allowing extra K⁺ to exit. |


### Feedback during the action potential

- Opening of voltage-gated Na⁺ channels → Na⁺ influx → depolarization → stimulation of other Na⁺ channels → further opening and Na⁺ influx. The source labels this a **positive-feedback mechanism**.
- Opening of voltage-gated K⁺ channels → K⁺ efflux → hyperpolarization → inhibition of another K⁺ channel. The source labels this a **negative-feedback mechanism**.
- The portion of the action potential above 0 mV is the **overshoot phase**.
- The portions of depolarization and repolarization above the threshold voltage form the **spike-potential phase**.

![[images/ch07_p046_overshoot_spike.png]]

## Ionic permeability/conductance during an action potential

![[images/ch07_p046_ion_conductance_graph.png]]

### Sodium-channel behaviour

- During local-potential generation, Na⁺ channels open gradually (green curve in the source’s explanatory table).
- When threshold is reached, many Na⁺ channels open, and the action potential reaches its peak.
- Na⁺ channels become inactive after the maximum height is reached.
- The green curve is identified as \(g_{Na^+}\), the sodium-channel conductance/permeability curve.

### Potassium-channel behaviour

- K⁺ channels begin opening along with Na⁺ channels but take longer to open and close.
- The blue curve is identified as \(g_{K^+}\), the potassium-channel conductance/permeability curve.
- At the peak of the action potential, the source states that the number of Na⁺ channels exceeds the number of K⁺ channels.
- During after-hyperpolarization, only K⁺ channels remain permeable.
- Maximum Na⁺ permeability: **point C**. Maximum K⁺ permeability: **point D**.
- The membrane voltage is closest to Na⁺ equilibrium potential at point C: +35 mV, close to the Na⁺ equilibrium potential of +63 mV.
- The membrane voltage is closest to K⁺ equilibrium potential at point F: close to −90 mV.
- \((Na^+/K^+)\) ratio is maximal at point C; \((K^+/Na^+)\) ratio is maximal at point F (described as infinite because Na⁺ permeability is zero).

## Refractory period

**Action-potential duration (APD)** is measured from the beginning to the end of the action potential. The source gives these durations:

| Tissue | Action-potential duration |
|---|---:|
| Neuron | 1–3 ms |
| Skeletal muscle | 2–4 ms |
| Myocardium | 200–400 ms |
| Smooth muscles | 10–50 ms |

Depolarization duration + repolarization duration = action-potential duration.

The **refractory period** is the period during an action potential when a second action potential is not possible, or is possible only with a stimulus of higher strength/amplitude.

![[images/ch07_p047_refractory_period_graph.png]]

| Absolute refractory period | Relative refractory period |
|---|---|
| Total depolarization period plus the first one-third of the repolarization period. | Last two-thirds of the repolarization period. |
| A second action potential is not possible. | A second action potential is possible with a stronger stimulus. |
| ==Most voltage-gated Na⁺ channels are in the open or inactivation stage.== | ==Most voltage-gated Na⁺ channels change from the inactive stage to the closed stage.== |

## Different stages of the voltage-gated sodium channel

The source indicates that voltage-gated Na⁺ channels are responsible for action-potential generation in neurons, skeletal muscle and myocardium.

![[images/ch07_p048_voltage_gated_na_cycle.png]]

| Channel stage | Description given in the source |
|---|---|
| **Closed** | At resting membrane potential (−70 mV), the Na⁺ channel is closed. The M gate blocks the inner mouth of the channel; the H gate remains away from the mouth. |
| **Open** | Stimulation depolarises the membrane. The M gate moves away from the inner mouth of the channel; the H gate remains away from the mouth. Time to open: 0.1 ms. |
| **Inactive** | Persistent depolarisation produces the inactivation stage. The M gate remains away from the mouth, while the H gate blocks the inner mouth. Transition directly from inactive to open is not possible. |

![[images/ch07_p048_na_channel_gate_states.png]]

## Hyperkalaemia, hypokalaemia and calcium effects on action potentials

### Hyperkalaemia and action potential

- High extracellular K⁺ limits movement of K⁺ from inside to outside; the source states that K⁺ remains inside and causes gradual depolarization.
- Depolarization opens Na⁺ channels and can generate an action potential.
- Persistent depolarization inactivates voltage-gated Na⁺ channels; no action potential is generated.
- In myocardial cells, the source describes absence of an action potential leading to no cardiac contraction and **diastolic paralysis**.

![[images/ch07_p049_hyperkalemia_effect.png]]

### Hypokalaemia and action potential

- Cells lose more K⁺, increasing negative charge inside the cell and causing hyperpolarization of RMP.
- Action-potential generation becomes difficult.
- The source also states that hyperpolarization inhibits the Na⁺/K⁺-ATPase pump.

![[images/ch07_p049_hypokalemia_effect.png]]

### Calcium and neuronal excitability

The source’s section is headed “Hypocalcemia and Tetany.” It contrasts the following cases:

- **Blood calcium normal or high:** calcium remains attached to the extracellular mouth of voltage-gated Na⁺ channels, causing low Na⁺ permeability.
- **Low blood calcium:** calcium detaches from the channel; the Na⁺ channel opens, Na⁺ permeability and influx increase, and sensitivity of voltage-gated Na⁺ channels rises. Action-potential generation becomes easier and neuronal membrane excitability increases (tetany).
- **Hypercalcemia:** listed as requiring membrane-stabilising agents.

![[images/ch07_p049_calcium_excitability.png]]

## MCQs

### Action-potential waveform: refractory period

An action potential from a mammalian neuron is marked with points A–E. Which pair is correct?

- a. Point A: firing level
- b. Between B and D is the refractory period
- c. After point C, K⁺ closes
- d. At point E, the neuron is hyperexcitable

**Answer: b. Between B and D is the refractory period.** (NEET 2023)

![[images/ch07_p050_mcq_waveform_1.png]]

### Action-potential waveform: C-to-D segment

An action potential from a mammalian neuron is marked with letters. Which is correct regarding segment C to D?

- a. Influx of Na⁺
- b. Efflux of Na⁺
- c. Influx of K⁺
- d. Efflux of K⁺

**Answer: d. Efflux of K⁺.** (INI-CET, November 2022)

![[images/ch07_p050_mcq_waveform_2.png]]

### Ions during different phases

Conduction of two ions during different phases of an action potential is denoted by A and B. Which pair best describes A and B?

- a. Na⁺ and K⁺
- b. Na⁺ and Ca²⁺
- c. K⁺ and Ca²⁺
- d. Ca²⁺ and Na⁺

**Answer: a. Na⁺ and K⁺.** (INI-CET, May 2022)

![[images/ch07_p050_ion_conductance_mcq.png]]

### ==Mechanisms in skeletal-muscle action potentials==

Which statements are correct regarding depolarization, repolarization and hyperpolarization in a skeletal-muscle action potential? (INI-CET, November 2020)

- a. Depolarization is due to influx of Na⁺ through voltage-gated channels.
- b. Depolarization is due to influx of Na⁺ through ligand-gated channels.
- c. Repolarization is due to efflux of K⁺ through voltage-gated channels.
- d. Repolarization is due to efflux of K⁺ through ligand-gated channels.
- e. Hyperpolarization is due to efflux of K⁺.

**Answers as marked in the source:** A — True; B — False; C — True; D — False; E — True.

>[!note] Two Channels at the Neuromuscular Junction
>
>**1. Nicotinic ACh receptor (Ligand-gated channel)**
>
>* **Location:** Motor end plate of the skeletal muscle fibre.
>* **Opening stimulus:** Acetylcholine (ACh) binds to the receptor.
>* **Mechanism:** Non-selective cation channel; Na⁺ enters and K⁺ leaves, producing a net inward positive current.
>* **Result:** Local, graded depolarization called the end-plate potential (EPP).
>
>**2. Voltage-gated Na⁺ channel**
>
>* **Location:** Muscle membrane adjacent to the motor end plate, particularly the perijunctional region.
>* **Opening stimulus:** Membrane depolarization reaching threshold.
>* **Mechanism:** Rapid Na⁺ influx generates the regenerative upstroke of the action potential.
>* **Result:** Skeletal-muscle action potential, which propagates along the sarcolemma and into the T-tubules.
>
**Key distinction**
>
>* **Ligand-gated**: Opens when a chemical ligand (ACh) binds to it.
>* **Voltage-gated:** Opens in response to a sufficient change in membrane potential.
>
>Both channels permit Na⁺ entry, but they have different activation mechanisms and roles.
>
>**Sequence:** ACh binds to nicotinic receptors → EPP develops → threshold is reached in the adjacent membrane → voltage-gated Na⁺ channels open → muscle action potential is generated.
