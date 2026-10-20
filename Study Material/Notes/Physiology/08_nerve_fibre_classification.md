---
title: Nerve Fibre Classification
chapter: 08
subject: Physiology
tags:
  - physiology
  - nerve-muscle-physiology
---

# 08 — Nerve Fibre Classification

## Action-potential conduction

In a myelinated axon:

1. An action potential is generated at a node of Ranvier.
2. Na⁺ enters through voltage-gated Na⁺ channels.
3. Inside the axon cytoplasm, Na⁺ can move bidirectionally within the neuron and moves towards the adjacent node of Ranvier.
4. This induces depolarization at the next node. The induced depolarization exceeds the membrane threshold voltage.
5. Further voltage-gated Na⁺ channels open at the next node, producing Na⁺ influx and a second action potential at that node.
6. The action potential appears to jump from node to node: **saltatory conduction**.

![[images/ch08_p052_saltatory_conduction.png]]

The source notes that ==Na⁺ moving along the neuron can leak out through different channels. To generate an action potential at the next node, Na⁺ loss has to be prevented. The insulating lipid covering, **myelination**, prevents Na⁺ from leaking out across the membrane.==

## Conduction velocity of the action potential

### Increased myelination

- Increased myelination increases transmembrane resistance and decreases membrane capacitance.
- The membrane is described as behaving like a parallel-plate capacitor.
- The source states that increasing myelination increases the thickness of the plates and decreases capacitance.
- Conduction velocity is stated to be inversely proportional to resistance multiplied by capacitance:

$$
CV\propto\frac{1}{RC}
$$

where \(C\) is membrane capacitance and \(R\) is axoplasmic resistance (as named in the source). Decreased membrane capacitance is stated to increase conduction velocity; decreasing the product of \(R\) and \(C\) increases conduction velocity.

> [!quote]
> Basically, the greater the distance between two charges, greater is the distance that electrical field can travel. And electrical field is the real thing behind voltage difference. So greater the separation between two charges → greater the voltage difference → higher voltage difference achieved with lesser amount of charge to be separated.

### Increased axon diameter

- Increased diameter is described as decreasing axoplasmic resistance and increasing membrane capacitance.
- Na⁺ moves from one node to another through the cytoplasm. High axoplasmic resistance slows this movement; decreased axoplasmic resistance facilitates sodium conduction and increases conduction velocity.
- Using the parallel-plate capacitor analogy, the source states that increased distance between plates increases capacitance.
- The source again states \(CV\propto 1/(RC)\), and concludes that increased axon diameter decreases the product of \(R\) and \(C\), increasing conduction velocity.

## Classification of nerve fibres

Mnemonic printed in the source: **“PM Pressurized To Sign The Proposal.”**

| Myelination | Fibre type (Erlanger and Gasser) | Numerical classification (Lloyd and Hunt) | Functions listed in the source | Conduction velocity (m/s) | Diameter (µm) |
|---|---|---|---|---:|---:|
| Myelinated | Aα (alpha) | Ia, Ib | Proprioception and somatic motor | 70–120 | 12–20 |
| Myelinated | Aβ (beta) | II | Pressure, touch | 30–70 | 5–12 |
| Myelinated | Aγ (gamma) | — | Efferent to muscle spindle | 15–30 | 3–6 |
| Myelinated | Aδ (delta) | III | Cold temperature; fast pain | 12–30 | 2–5 |
| Myelinated | B | — | Preganglionic autonomic | 3–12 | <3 |
| Unmyelinated | C | IV | Slow pain and warm temperature; postganglionic sympathetic | 0.5–2 | 0.4–1.2 |

### Important information

- Cold sensation: Aδ fibre.
- Warm sensation, burning pain and freezing pain: C fibre.
- Local anaesthetic sensitivity order as printed: `Aγ and Aδ ≫ Aα and Aβ ≫ B ≫ C`.
- Pressure: `Aα > B > C`.
- Hypoxia: `B > A > C`.
- **Paraesthesia:** inappropriate sensations (burning/pricking); the source associates it with Aδ fibres.
- **Pallesthesia:** ability to perceive vibration; requires intact Pacinian corpuscles.

## Spike duration

The part of the action potential above threshold voltage is called the **spike potential**; the duration of the spike potential is the **spike duration**.

![[images/ch08_p054_spike_duration.png]]

- C fibre: 2 ms.
- B fibre: 1.2 ms.
- A fibre: 0.4–0.5 ms.
- Fast-conducting fibres have a shorter action-potential duration and shorter spike duration; slow-conducting fibres have longer durations.

## Compound action potential

- A compound action potential is recorded from the surface of a mixed nerve.
- Both electrodes are placed on the nerve surface and connected to a recorder.
- A mixed nerve contains multiple types of nerve fibres. One end of the nerve is stimulated at a single point, and the action potential is recorded.
- The source lists Aα, Aβ, Aγ and C fibres as activated, then gives the conduction-velocity and response-arrival order as **Aα > Aβ > Aδ > C**; action potentials reach the recording electrode at different times.

![[images/ch08_p055_mixed_nerve_stimulation.png]]

![[images/ch08_p055_compound_waveform.png]]

| Compound action potential | Monophasic action potential |
|---|---|
| Biphasic | Monophasic |
| Multiple peaks are present | One peak only |
| Does not follow the “all or none” law; compound amplitude increases with stronger stimulation and greater fibre involvement | Follows the “all or none” law |

## Stimulus parameters

### Rheobase

- Minimum intensity of voltage (or current) required to elicit an action potential in any tissue.
- Example: stimulation at 1 mV produces no action potential; 2 mV produces no action potential; at 3 mV, the first action potential is generated. **Rheobase / threshold-voltage stimulus = 3 mV** in this example.
- Further increases to 4 or 5 mV produce action potentials; 4 or 5 mV are suprathreshold stimuli.

### Utilization time

- Minimum duration/time of a stimulus that will produce an action potential using a voltage equal to the rheobase strength.
- Example: 3 mV applied for 1 ms produces no action potential; the same stimulus for 2 ms produces no action potential; for 2.5 ms, an action potential is generated. This is the **utilization time**.

### Chronaxie

- Minimum time of a stimulus that will produce an action potential using twice the rheobase voltage.
- Example: if rheobase voltage is 3 mV, double it to 6 mV. At 6 mV for 1 ms, no action potential is generated; at 6 mV for 2 ms, an action potential is generated. This is the **chronaxie**.

## Excitability of tissue

Stimulus parameters are used to assess tissue excitability.

- Lower chronaxie, utilization time and rheobase values indicate higher tissue excitability.
- Most excitable tissue, as listed: **neuron > skeletal muscles > myocardium > smooth muscles**.
- Lowest chronaxie, as listed: **neuron < skeletal muscles < myocardium < smooth muscles**.

## Strength–duration curve

![[images/ch08_p056_strength_duration_curves.png]]

- X-axis: time/duration.
- Y-axis: voltage/strength.
- The curves are plotted for neuronal tissue.
- Any point on the strength–duration curve indicates the stimulus parameters (duration and voltage) required to produce an action potential.
- **Rheobase:** minimum voltage of a stimulus; the lowermost point of the curve.
- **Utilization time:** minimum duration from the rheobase point; the point on the X-axis corresponding to rheobase voltage.
- **Chronaxie:** minimum duration from the point at twice rheobase strength; it corresponds to double rheobase voltage on the curve.

### Relative excitability and clinical use

![[images/ch08_p057_excitability_curve.png]]

- Excitability order shown: neurons > skeletal muscle > myocardium.
- More excitable tissue: curve shifted to the left. Less excitable tissue: curve shifted to the right.
- The strength–duration curve has clinical utility after repaired nerve injury. Chronaxie and rheobase are measured in follow-up.
  - Decrease in chronaxie → nerve regeneration → good prognosis.
  - Increase in chronaxie → no nerve regeneration → bad prognosis.

## MCQs

### Pressure-associated tingling and numbness

A 35-year-old patient slept with an arm by the side and developed tingling and numbness over the arm. Which statement is correct? (NEET 2022)

- a. Type A fibres are more susceptible to pressure than C fibres.
- b. Type C fibres are more susceptible to pressure than A fibres.
- c. Type C fibres are more susceptible to pressure than B fibres.
- d. Type B fibres are more susceptible to pressure than A fibres.

**Answer: a. Type A fibres are more susceptible to pressure than C fibres.**

### Fibre affected by tingling/numbness

A patient slept with an arm by the side and developed tingling and numbness over the arm. Which fibre is affected? (NEET 2020)

- a. C fibre
- b. Aδ fibre
- c. B fibre
- d. Sympathetic fibre

**Answer: b. Aδ fibre.**

### Decreased conduction velocity in multiple sclerosis

A patient with multiple sclerosis has low nerve-conduction velocity. What may be the cause? (NEET 2020)

- a. Loss of oligodendrocytes
- b. Loss of myelin sheath
- c. Na⁺ channel blockage
- d. Defect in node of Ranvier

**Answer: b. Loss of myelin sheath.** The source notes that both A and B are true, but B is the better option compared with A.

### Slowest-conducting fibre

The slowest-conducting fibre is: (NEET 2019)

- a. Preganglionic autonomic
- b. Postganglionic sympathetic
- c. Somatic motor
- d. Proprioceptive

**Answer: b. Postganglionic sympathetic.**
