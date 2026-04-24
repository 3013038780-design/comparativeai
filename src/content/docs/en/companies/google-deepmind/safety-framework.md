---
title: Safety Framework
description: Evolution of DeepMind's Frontier Safety Framework (FSF) v1 to v3; CCL methodology and the 2026-04 Harmful Manipulation CCL
sidebar:
  order: 3
snapshotDate: 2026-04-23
---

> **2026-04-17 FSF v3.0**: adds a **Tracked Capability Levels (TCLs)** early-warning layer
> and a **Harmful Manipulation CCL** governing AI capable of systematically altering human beliefs.
> Against Anthropic RSP v3's **weakening** and OpenAI Preparedness v2's **simplification**,
> DeepMind's FSF is the only frontier safety framework to **expand** in 2026.

## Overview: the institutional position of FSF

The **Frontier Safety Framework (FSF)** is DeepMind's counterpart to Anthropic's RSP (2023-09) and
OpenAI's Preparedness Framework (2023-12) — **the third frontier safety framework**. At its 2024-05 launch
DeepMind positioned it as:

> **"a set of protocols aimed at addressing severe risks that may arise from powerful
> capabilities of future foundation models"**
> — *Frontier Safety Framework, v1.0 Preamble*

Together with Anthropic's RSP, it forms the **"twin cores" of industry self-regulation** within the four-founder
**Frontier Model Forum** (Anthropic, Google, Microsoft, OpenAI): RSP centers on **capability tiers (ASLs)**, while
FSF centers on **Critical Capability Levels (CCLs)**.

## Version evolution

| Version | Date | Core changes | Official release |
| --- | --- | --- | --- |
| v1.0 | 2024-05-17 | Launch; established the CCL concept; **four capability domains** | [deepmind.google blog](https://deepmind.google/discover/blog/introducing-the-frontier-safety-framework/) |
| v2.0 | 2025-02 | Strengthened model-level FSF Report requirements; refined CBRN CCL | [FSF v2](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/updating-the-frontier-safety-framework/frontier-safety-framework_2.pdf) |
| **v3.0** | **2026-04-17** | **Adds TCLs; adds Harmful Manipulation CCL** | [FSF v3](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/strengthening-our-frontier-safety-framework/frontier-safety-framework_3.pdf) |

## CCL methodology (the core innovation since v1)

**Critical Capability Levels (CCLs)** are DeepMind's distinctive abstraction for the capability-to-risk mapping.
**Differences from Anthropic's ASL**:

- ASL is a **single-dimensional capability tier** (ASL-2 / ASL-3 / ASL-4), akin to BSL levels
- **CCLs are capability thresholds defined separately by risk category** — "Cyber CCL", "Autonomous ML R&D CCL", etc.
  are independent axes

**v3 CCL roster** (per the 2026-04 edition):

| Risk domain | CCL name | Triggering condition (summary) |
| --- | --- | --- |
| Cyber | **Cyber Autonomy CCL** | Model can autonomously and at scale conduct sophisticated cyberattacks at a level comparable to a mid-sized state threat |
| Autonomy | **Autonomous ML R&D CCL** | Model can autonomously advance AI R&D at the level of end-to-end contribution equivalent to a DeepMind researcher |
| CBRN | **Bio CCL / Chem CCL** | Model substantially lowers the bar for bio/chemical weapon R&D (for GCSE-level users) |
| Manipulation (new in v3) | **Harmful Manipulation CCL** | Model can systematically shift beliefs / behavior, producing "severe-scale" societal harm |

**Process**:

1. **Early Warning Evaluations**: CCL evaluations run after training and before deployment for every significant model
2. If **below CCL** → normal deployment (standard mitigations only)
3. If **at or above CCL** → **delayed deployment / enhanced mitigations**, with a **FSF Report** published to document the reasoning
4. **Continuous monitoring**: material post-deployment capability gains → trigger re-evaluation

## TCLs (added 2026-04)

**Tracked Capability Levels** are the core v3 innovation — **an early-warning layer below the CCL threshold**.

**Rationale (FSF v3 reasoning, paraphrased)**: CCL thresholds are set high, so a trigger signifies "severe" risk.
But capabilities typically evolve gradually, and waiting until a CCL is reached may leave insufficient lead time to prepare
mitigations — TCLs are introduced as an early-warning layer.

**Role of TCLs**:

- Each CCL is paired with a **"near-threshold" TCL** (typically 50-80% of the CCL)
- Reaching a TCL triggers **internal alert + external disclosure + additional evaluation**
- **Does not trigger deployment restrictions**, but **forces early readiness of mitigation capacity**

**Industry significance**: DeepMind is now **the only frontier lab with a dedicated early-warning layer**:

| Lab | Capability thresholds |
| --- | --- |
| OpenAI Preparedness v2 | High / Critical (2 tiers, simplified 2025-04) |
| Anthropic RSP v3 | ASL-2/3/4/5 (4 tiers, including "deploy standards") |
| **Google DeepMind FSF v3** | **TCL → CCL → "exceed CCL" (3 tiers)** |

## Harmful Manipulation CCL (added 2026-04)

The **most contested v3 addition**. It covers capabilities to "systematically shift human beliefs or behavior at scale".

### Definition (summary)

FSF v3 characterizes the Harmful Manipulation CCL, in essence, as: a model capable of persuasion / manipulation efficiency
markedly above a human baseline, systematically shifting beliefs or behavior and producing severe societal harm at scale.
Exact wording per the formal FSF v3 text.

### Evaluation methodology

- **Controlled experiments**: pitting the model against humans in persuasion tasks (e.g. climate topics, vaccine beliefs)
- **Long-dialogue persistence**: whether model-induced belief shifts persist at 24 hours / 7 days
- **Personalized adaptation**: whether the model can adapt strategy to target characteristics
- **Scalability**: whether mitigations (watermarks, content labels) can offset manipulation effects

### Controversy

**Supportive voices**:

- **Yoshua Bengio**, in recent AI safety reports and public lectures, has consistently listed scaled manipulation among the
  leading AGI risk categories (after autonomy and weaponization); **FSF's adoption aligns with this academic position**.
- **Stuart Russell** (Berkeley CHAI), in multiple public remarks, has emphasized that scaled persuasion / manipulation poses
  an existential risk to democratic institutions.

**Critical voices**:

- **Zvi Mowshowitz** (*Don't Worry About the Vase*), in a series of posts following v3, pointed to internal inconsistency:
  v3 **elevates Harmful Manipulation to a CCL while downgrading Deceptive Alignment / Scheming to a TCL**.
- **Deb Raji** (Mozilla Fellow) and others have argued the definition is vague — how is the "human baseline" delimited,
  and how is it to be distinguished from legitimate persuasion such as advertising or public-health messaging?
- **Industry-aligned commentators** (*a16z* and others) worry that this CCL impedes Gemini's deployment in marketing,
  education, and persuasion-focused AI applications.

### DeepMind's internal debate

**Shane Legg** (DeepMind Chief AGI Scientist), in multiple public remarks across 2025, has noted that the draft Harmful
Manipulation CCL underwent extended internal debate at DeepMind. Dissenting voices (product / commercial) argued that the
CCL could **impede legitimate persuasion applications**; supporters (Safety Research) argued that **once manipulation
capabilities extend to democratic discourse, it is too late**. The final v3 text reflects **a compromise — the definition
is strictly limited to "severe-scale" effects rather than ordinary persuasion**.

## Model-level Gemini FSF Reports

**Model-level FSF Reports** are the core tool introduced in v2 — public CCL evaluation disclosure for each significant model.

### Published FSF Reports

| Model | Release date | CCLs covered | Results |
| --- | --- | --- | --- |
| Gemini 2.5 Pro | 2025-04 | Cyber / Auto ML / CBRN (under v2) | All below CCL; Cyber near TCL (TCL not yet formalized) |
| **Gemini 3 Pro** | **2025-11** | Cyber / Auto ML / CBRN (v2 framework) | All below CCL; Auto ML **reached the draft TCL threshold** — triggering "enhanced monitoring" |
| Gemini 3 Ultra | Expected 2026-Q1 | All four domains (v3 framework) | — |

### Gemini 3 Pro FSF Report (2025-11) — an industry first

This was **the industry's first** instance of a model-level safety evaluation released as a **standalone public report**
(Anthropic's Risk Reports aligned with this format only from 2026-04).

**Report structure**:

1. **Model overview** (cross-referenced to the Model Card)
2. **Evaluated CCLs** (at the time only the three under v2)
3. **Early Warning Evaluation methodology** (partly public; detailed methods in the appendix)
4. **Results**: quantified scores per CCL + human judgment
5. **External Evaluations**: **partial evaluation involvement from UK AISI / US AISI**
6. **Mitigation plan**: pre- and post-release mitigations
7. **Residual uncertainty**: proactive disclosure of risk dimensions not covered

**Significance**: **a template for the first v3-framework full-domain evaluation to accompany Gemini 3 Ultra**
(expected 2026-Q1).

## Three mitigation pillars

Since v1, FSF has specified **three mitigation categories** for each CCL:

1. **Security Mitigations**: model-weight protection (mapped to RAND Security Levels SL-1 through SL-5)
2. **Deployment Mitigations**: access controls, monitoring, and capability restrictions at deployment
3. **Internal Governance**: Responsible AI Council processes + cross-functional review

**v3 addition**: **all TCL-reaching models must simultaneously upgrade Security Mitigations** (i.e., **investing in weight
protection before the CCL is reached, rather than waiting**), responding to critiques from Anderljung (GovAI) and others.

## Academic critique

### Anderljung et al. (GovAI) — framework vs. policy

**Markus Anderljung** (GovAI, and at OpenAI Policy at the time of the paper) authored the 2023 *Frontier AI Regulation*
paper, one of the **theoretical foundations** of frontier safety frameworks. His typical assessment of FSF is that it is a
well-structured framework, but that the very word "Framework" rather than "Policy" already signals weaker binding force.

FSF v3 **retains the Framework designation** (relative to Anthropic's "Policy") and **preserves its soft character**.
In Anderljung's view this cuts both ways — flexibility aids iteration, but lowers commitment-level accountability.

### Bengio on the "Responsibility Gap"

**Yoshua Bengio**, in the 2025 *International AI Safety Report*, cites FSF multiple times as a **positive example**, but
also points to **three shared blind spots across the three labs**:

- **Vague "pause commitments"**: none of the three has an explicit mechanism for "stopping if mitigations fail"
- **Limited external validation**: UK / US AISI participate in evaluations, but **methodology and conclusions remain
  lab-led**
- **The FSF / AI Principles link**: the 2024 deletion of the military prohibition **did not trigger an FSF update**,
  indicating that the two governance layers are **not integrated**

### Zvi Mowshowitz on "Better But Not Enough"

Zvi's consistent position across multiple posts is that DeepMind's framework is relatively rigorous among the three, but
still lacks an enforceable pause commitment. His typical argument on FSF v3 is that TCL is a substantive improvement and
the Harmful Manipulation CCL is directionally correct, but absent a public pause commitment, FSF remains a "framework"
rather than a "constraint".

### Meredith Whittaker (Signal) — governance vs. product

Whittaker's central argument is that placing a Safety Team inside a commercial-product company produces structural conflict
between the frameworks researchers author and the practices product teams execute. Her example: the 2024 Gemini image-
generation historical-distortion episode **triggered no CCL**, because **manipulative "historical generation" falls outside
CCL definitions** — reflecting the framework's limited coverage of real-world harms.

### DeepMind internal voices: Rohin Shah / Geoffrey Irving / Pushmeet Kohli

- **Rohin Shah** (DeepMind Alignment Team Lead), in discussions tied to the FSF v3 release, has publicly acknowledged that
  the calibration of CCL thresholds remains a dynamic learning process.
- **Geoffrey Irving** (formerly DeepMind, now UK AISI): a key figure in aligning FSF with AISI evaluation protocols.
- **Pushmeet Kohli** (DeepMind Safety & Alignment Lead), in multiple 2025 academic appearances, has emphasized that FSF
  must co-evolve with the academic evaluation community rather than remain a closed internal standard.

## Industry practitioner perspective

### Relationship with Google's AI Principles

**FSF sits beneath the AI Principles** but is **released independently**:

```
Google AI Principles (2024 revision)
    └── DeepMind FSF
            ├── CCL definitions
            ├── Early Warning Evaluations
            ├── Model-level FSF Reports
            └── Mitigation Requirements
    └── Google Responsible AI Practices
    └── Generative AI Prohibited Use Policy
```

**Crucially, FSF covers capability risk during model training and pre-deployment**, while the AI Principles and Prohibited
Use cover **uses and scenarios**. The two do not fully overlap — this is the technical reason that "the 2024 AI Principles
revision deleting the military prohibition did not trigger an FSF update".

### The Responsible AI Council process

Google / DeepMind coordinate FSF implementation internally through the **Responsible AI Council**:

- Members: DeepMind Safety + Google Responsible AI + Legal + Product + External advisors
- **All models reaching a CCL or TCL** must undergo Council review
- **Council resolutions** are appended to the FSF Report (**summaries are public**)

### Coordination with the Frontier Model Forum

FSF, Anthropic's RSP, and OpenAI's Preparedness Framework are aligned under a **"terminology harmonization" working group
within the Frontier Model Forum**:

- **"capability elicitation"** standardization
- **Shared "dangerous capability benchmarks"** (e.g. Cybench, WMDP variants)
- **A joint "Scheming Evaluations" paper in 2025** (DeepMind + Anthropic + Apollo Research)

### UK AISI / US AISI pre-deployment evaluations

**External evaluation within the FSF process**:

- Gemini 1.5 Pro (2024-05) — UK AISI (among the first)
- Gemini 2.5 Pro (2025-03) — joint US AISI + UK AISI evaluation
- **Gemini 3 Pro (2025-11) — reduced US AISI involvement following policy retrenchment after EO 14179; UK AISI led**
- **Gemini 3 Ultra (expected 2026-Q1) — AISI involvement will be shaped by follow-up to the AI Action Plan**

## Peer comparison (Q2 2026 snapshot)

| Dimension | **FSF v3 (2026-04)** | Anthropic RSP v3 (2026-02) | OpenAI Preparedness v2 (2025-04) |
| --- | --- | --- | --- |
| Core unit | **CCL (per risk domain)** + **TCL (early warning)** | ASL (single dimension) | High / Critical (two tiers) |
| Risks covered | Cyber / Auto ML / CBRN / **Manipulation** | Bio / Cyber / Auto / Persuasion | Bio / Cyber / Auto / Self-improve |
| Model-level reports | **FSF Reports (2 published)** | Risk Reports (from 2026-04) | System Cards (embedded) |
| Early-warning layer | **TCL (new in v3)** | "Yellow Lines" (informal) | None |
| Pause commitment | Vague ("may delay deployment") | **Withdrawn in v3** | Weak |
| External evaluation | UK/US AISI + independent review | GovAI + MATS + METR | Internal Safety Advisory Group |
| Principal critique | "Framework not policy" / no pause | Pause withdrawn | arXiv critique: "guarantees no mitigation" |

## Key timeline

- **2023-09**: Anthropic RSP v1 (institutional reference for FSF)
- **2023-12**: OpenAI Preparedness Framework v1
- **2024-05**: **FSF v1 released**
- **2025-02**: FSF v2 released
- **2025-04**: **Gemini 2.5 FSF Report (first model-level FSF Report)**
- **2025-10**: DeepMind + Anthropic + Apollo *Scheming Evaluations* paper
- **2025-11**: **Gemini 3 Pro FSF Report (industry's first safety report co-released with a Model Card)**
- **2026-04-17**: **FSF v3 released** (TCL + Harmful Manipulation CCL)

## Cross-links

- Company-level FSF deep analysis: [Google DeepMind index](/en/companies/google-deepmind/)
- Gemini Model Card: [Model Card](./model-card/)
- External red-teaming and AISI evaluation: [Red-Team Disclosures](./red-team-disclosures/)
- Comparison: [Anthropic RSP](/en/companies/anthropic/safety-framework/), [OpenAI Preparedness](/en/companies/openai/safety-framework/)
- Frontier Model Forum industry coordination: [Industry self-regulation](/en/industry/frontier-model-forum/)
- EU GPAI Code of Practice: [GPAI CoP](/en/policies/eu/gpai-cop/)
