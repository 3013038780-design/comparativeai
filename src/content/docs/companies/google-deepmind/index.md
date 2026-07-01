---
title: Google DeepMind
description: Google DeepMind company profile, FSF v3 deep dive, and the evolution of the AI Principles (2026-06-28)
sidebar:
  order: 3
  label: Google DeepMind
snapshotDate: 2026-06-28
---

> **2026-04-17 update**: **FSF v3.0** introduces **Tracked Capability Levels (TCLs)** — an early-warning
> layer triggered before CCL activation — and adds a **"Harmful Manipulation" CCL** covering AI systems capable
> of systematically shifting beliefs. Gemini 3 Pro, released in November 2025, was accompanied by the
> industry's first model-level FSF Report.

## Company profile

- **Founded**: 2010 (DeepMind, London) → acquired by Google in 2014 → merged with Google Brain into **Google DeepMind** in 2023
- **Headquarters**: London, UK (DeepMind origin) + Mountain View, CA (Google)
- **Main models**:
  - **Gemini 3 series** (2025-11: 3 Pro; later Ultra / Flash)
  - Imagen, Veo, Lyria (multimodal generation)
  - **AlphaFold** (biology), AlphaGeometry, AlphaProof (mathematics)
  - **Project Astra** (multimodal agent)
- **Business model**: Google Cloud Vertex AI, the Gemini App, and deep integration across the Google product stack (Search / Workspace / Android)
- **Distinctive features**: **the only one of the three major frontier labs with a fully listed parent company** (Alphabet's financial discipline) and **the deepest cross-disciplinary research portfolio** (AlphaFold and related scientific-AI work)

## Deep dive: the three-phase evolution of the FSF and the CCL methodology

### Framework evolution

| Version | Date | Core change |
| --- | --- | --- |
| v1.0 | 2024-05-17 | Initial release of the Frontier Safety Framework. Establishes the CCL (Critical Capability Level) concept |
| v2.0 | 2025-02 | Adds CBRN refinements; strengthens model-level FSF Report requirements |
| **v3.0** | **2026-04-17** | **Adds the TCL early-warning layer and the "Harmful Manipulation" CCL** |

### CCL (Critical Capability Level) methodology

**FSF's core innovation**: rather than a simple capability tier, FSF uses a **cross-domain CCL list**:

- **Cyber capabilities CCL**: the ability to launch cyberattacks at scale or exploit vulnerabilities
- **Autonomous ML research CCL**: the ability to drive AI R&D autonomously (counterpart to OpenAI's "self-improvement" category)
- **Harmful manipulation CCL (added 2026-04)**: the ability to systematically and substantially shift beliefs and behaviour, producing "severe-scale" harm
- **CBRN CCLs**: chemical, biological, radiological, and nuclear weapons capabilities

**Workflow:**
1. **Early-Warning Evaluations**: every significant model is evaluated against CCL criteria after training
2. If no CCL is reached → normal deployment
3. If a CCL is reached → **deployment is delayed or mitigations are hardened**, and an **FSF Report is published** explaining the reasoning
4. Material capability jumps → re-evaluation

### TCLs (added 2026-04)

**Tracked Capability Levels**: an early-warning layer below CCL.

Purpose:
- **"Track risk as soon as a signal appears"**, rather than waiting for a binary CCL trigger
- Corrects the binary "triggered / not triggered" nature of the CCL regime
- **Compared with OpenAI v2** (only High / Critical): DeepMind now runs a three-level ladder — **TCL → CCL → (exceeds CCL)**

### The Gemini 3 Pro FSF Report (November 2025)

The **first public model-level FSF report in the industry**:
- Discloses which CCLs were evaluated
- Discloses the results (no CCL reached)
- Discloses the evaluation methodology
- **Provides a template for other labs** publishing comparable reports

### Compared with Anthropic RSP and OpenAI Preparedness

| Dimension | Google DM FSF v3 | Anthropic RSP v3 | OpenAI Preparedness v2 |
| --- | --- | --- | --- |
| Core concept | **CCL + TCL** (cross-domain) | **ASL tiers** | Risk category × threshold |
| Early-warning layer | **TCL (added 2026-04)** | None explicit | "Research categories" (weak) |
| Manipulation capabilities | **Dedicated CCL added** | Persuasion factored into ASL | On the watch list |
| Model-level reports | **Gemini 3 Pro FSF Report (industry first)** | Individual model cards + Risk Reports | System Cards |
| Pause commitment | No explicit (ambiguous phrasing) | Removed in v3 | Weak |
| Principal criticism | TCL thresholds are vague | Abandoning pause | arxiv critique of "no guarantees" |

**Key observation**: **DeepMind is moving against the tide in 2026** — while Anthropic weakens and OpenAI
simplifies, DeepMind **expanded** the FSF (adding TCL plus the manipulation CCL). One reading: the reputational
constraint from the Alphabet parent is stronger. An alternative reading: internal tension between
DeepMind's research culture and Google's commercialisation teams makes it harder for safety commitments to drift.

## AI Principles evolution: the 2024 removal of the military-use clause

### The 2018 original Google AI Principles

**Seven affirmative principles** (socially beneficial / avoid creating or reinforcing unfair bias /
safe and controllable / accountable / privacy / scientific excellence / lawful use) plus **four categories
of "AI applications we will not pursue":**
1. Technologies that cause or are likely to cause overall harm
2. **Weapons or other technologies whose principal purpose is to cause injury to people**
3. Surveillance technologies violating internationally accepted norms
4. Applications contrary to international law and human rights

This made Google **the first major tech company to publicly rule out military AI applications**.

### The 2024 revision: **the military-exclusion list was deleted**

In February 2024 Google updated its AI Principles and **removed the four "will not pursue" categories**.
The new version contains only principle-level language, with no explicit prohibited categories.

**Controversy:**
- An internal employee open letter opposed the change (2024-02, signed by several hundred employees)
- *Bloomberg* and other outlets read the move as "clearing the path for Project Nimbus (defence cooperation with Israel) and other military contracts"
- Google's official rationale: "an itemised negative list was too rigid; the new version is more flexible"

**Industry impact**: **other frontier labs followed**. Anthropic accepted a $200M DoD contract in 2025;
OpenAI partnered with Palantir; **military AI is no longer off-limits for frontier labs**.

## Project Nimbus and shared cloud-service controversy

- **Project Nimbus (2021–2024)**: Google + Amazon provided **$1.2B in cloud services to the Israeli government**
- Internal employee strikes in 2024 did not stop the contract
- Constituted a **pressure factor** behind Google's AI-principles revision

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | Generative AI Prohibited Use Policy | [policies.google.com/terms/generative-ai/use-policy](https://policies.google.com/terms/generative-ai/use-policy) | [usage-policy](./usage-policy/) |
| Model cards | Gemini 3 Pro / 2.5 Model Cards | [deepmind.google/technologies/gemini](https://deepmind.google/technologies/gemini/) | [model-card](./model-card/) |
| Safety framework | **FSF v3.0 (2026-04-17)** | [storage.googleapis.com/.../frontier-safety-framework_3.pdf](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/strengthening-our-frontier-safety-framework/frontier-safety-framework_3.pdf) | [safety-framework](./safety-framework/) |
| Model-level FSF Report | Gemini 3 Pro FSF Report (2025-11) | [storage.googleapis.com/.../gemini_3_pro_fsf_report.pdf](https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf) | — |
| Transparency report | Responsibility & Safety Hub | [deepmind.google/about/responsibility-safety](https://deepmind.google/about/responsibility-safety/) | [transparency-report](./transparency-report/) |
| AI Principles | **Google AI Principles (2024 revision)** | [ai.google/responsibility/principles](https://ai.google/responsibility/principles/) | [red-team-disclosures](./red-team-disclosures/) |

## Regulatory-compliance posture

### United States

- **2023 White House Voluntary Commitments**: first-wave signatory
- **Frontier Model Forum**: founding member
- **California SB 53**: ambiguous stance
- **EO 14179 / 14365**: no explicit position

### European Union

- **GPAI Code of Practice**: **fully signed** (first wave, 2025-08-01)
- Gemini 3 Pro exceeds 10^25 FLOP, triggering AI Act systemic-risk obligations
- **CNIL (France)**: ongoing GDPR review of Gemini

### China

- **Gemini consumer services are not offered in mainland China**
- Some Google Cloud enterprise services delivered via partners
- Search / YouTube blocked; mobile business limited

### United Kingdom

- **Home jurisdiction**
- Deep collaboration with the **UK AI Safety Institute** (pre-deployment testing)
- Signed all major statements at the 2024 Bletchley, 2025 Seoul, and 2025 Paris AI Summits

### India / Japan / Brazil / Saudi Arabia

- 2025–2026 deep infrastructure partnerships with sovereign funds and governments (localised Gemini deployments)

## Self-regulation posture: **the "balanced safety" position**

Google DeepMind occupies the **middle ground** among the three frontier labs:

- **Unlike Anthropic**, it does not brand itself around safety
- **Unlike OpenAI**, it has not visibly tilted toward commercial acceleration
- **The 2026 FSF expansion** is a counter-example: it tightened when the industry was loosening

**Structural supports:**
1. **Alphabet parent-company financial stability**: no urgent need to monetise AI quickly
2. **DeepMind research culture**: the core team (Demis Hassabis and others) **is not purely revenue-oriented**
3. **Brand reputation**: Google's search legacy makes anti-discrimination and trust brand-core assets

But there are **cracks**:
- The 2024 AI-principles revision is evidence of commercial pressure
- The Project Nimbus controversy
- The 2024 Gemini image-generation "historical distortion" incident (misrendered races) triggered an internal response
