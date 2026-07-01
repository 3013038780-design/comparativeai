---
title: Frontier Models and General-Purpose AI (GPAI)
description: A comparison of jurisdiction-specific obligations on foundation / frontier / general-purpose AI models — scholarly debate plus industry frameworks.
sidebar:
  order: 2
---

## Why this topic matters

"Frontier model / GPAI" is the **central controversy** of post-2023 AI governance. Once a single model's capabilities span nearly every downstream application, the traditional "regulate by scenario" approach breaks down, and **direct obligations on the model layer itself** become necessary. But how to define "frontier", who should evaluate it, and whether self-regulation is sufficient — here the three jurisdictions give the most divergent answers.

## Conceptual distinctions

- **Foundation model** (Stanford CRFM, 2021): a large-scale, self-supervised, broadly adaptable model.
- **Frontier model** (popularised by Anthropic / OpenAI / Google DeepMind and the Frontier Model Forum in 2023): the foundation model closest to the frontier of capability — typically high-compute, high-parameter-count.
- **GPAI (general-purpose AI model)**: the **statutory term** in the EU AI Act (art. 3(63)), slightly broader than "frontier".
- **Systemic-risk GPAI**: an AI Act sub-tier, with a presumption threshold at 10²⁵ FLOP.

## Snapshot of dedicated obligations

| Dimension | [China](./china/) | [United States](./us/) | [EU](./eu/) |
| --- | --- | --- | --- |
| Dedicated concept | None (subsumed under "generative AI services") | No federal concept (EO 14110's 10²⁶ FLOP is revoked); California SB 53 defines "frontier model" | **GPAI + systemic-risk GPAI** (two tiers) |
| Compute threshold | None | California SB 53: **10²⁶ FLOP** | **≥ 10²⁵ FLOP** (presumption) |
| Ex-ante gate | **Algorithm filing** (mandatory for public-facing services) | None federally; SB 53 requires **transparency reports + critical safety incident reports** | Presumption of conformity + CE marking |
| Technical standard | [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/) | NIST AI RMF (voluntary) | CEN-CENELEC harmonised standards (in development) |
| Code of conduct | None | 2023 White House Voluntary Commitments | **[GPAI Code of Practice](/rules/eu/gpai-code-of-practice/)** (finalised Jul 10, 2025) |
| Penalties | Cybersecurity Law art. 68 / criminal liability | California SB 53: **$1M / violation** | **3% of global annual turnover** (GPAI) |

## Scholarly debates

### Theoretical foundations of frontier-AI risk

- **Bostrom (2014)**, *Superintelligence* (Oxford) — the **foundational text** on superintelligence risk.
- **Amodei, Olah, Steinhardt et al. (2016)**, *"Concrete Problems in AI Safety"*: the earliest systematic treatment of alignment, robustness, and scalable oversight.
- **Russell (2019)**, *Human Compatible*: a value-alignment framework.
- **Hendrycks et al. (2023)**, *"An Overview of Catastrophic AI Risks"*.
- **Bengio, Hinton, Stuart Russell et al. (2023)**, *"Managing AI Risks in an Era of Rapid Progress"* (*Science* open letter).
- **Anderljung, Barnhart et al. (2023)**, *"Frontier AI Regulation: Managing Emerging Risks to Public Safety"* — **the framework paper for frontier-AI regulation**, co-authored across Anthropic / OpenAI / DeepMind / GovAI.

### Who is qualified to assess frontier capabilities?

- **Optimist / libertarian camp**: Yann LeCun (Meta), Andrew Ng, François Chollet — argue that **frontier risk is overstated** and that regulation suppresses innovation.
- **Cautious / safety camp**: Yoshua Bengio, Geoffrey Hinton, Stuart Russell, Dan Hendrycks — argue that **frontier risk is serious** and requires government action.
- **Governance-design camp**: Markus Anderljung (GovAI), Jess Whittlestone (CLTR), Toby Shevlane (DeepMind) — research specific regulatory tools.

### Academic commentary on the EU GPAI provisions

- **Engler (Brookings)** series: ongoing coverage of GPAI implementation.
- **Helberger & Diakopoulos (2023)**: critique of the drafting process for the AI Act's GPAI chapter.
- **Hacker, Engel, Mauer (2023)**, *"Regulating ChatGPT and Other Large Generative AI Models"* (*FAccT 2023*): one of the **intellectual sources** of the GPAI provisions.
- **Almada (2025)**: criticises the AI Act's presumption-of-conformity mechanism — "standardisation bodies are being asked to carry too much lawmaking weight."

### Chinese scholarship on GPAI governance

- **Xue Lan 薛澜 and Zhang Linghan 张凌寒**: China has no "GPAI" concept; **scenario-based regulation plus filing performs the same function** as a substitute.
- **Matt Sheehan**, *"Tracing the Roots of China's AI Regulations"* (Carnegie, 2024): **TC260-003 functions as the counterpart to the EU GPAI CoP**, but via technical standardisation rather than a code of conduct.
- **Olivia's thesis**: the structural reason China's "inclusive and prudent" approach omits a compute threshold — **industrial structure + catch-up position**.

### The US "no dedicated frontier governance" debate

- **Casey Newton / Platformer**: the federal vacuum amounts to **abandonment of the public interest**.
- **AEI / American Action Forum**: federal **deregulation is necessary** for innovation.
- **Bradford**: the US's "private-power" logic permits industry self-regulation to lead.
- **Haugen, McLaughlin, Zuckerman et al.**: frontier models should be treated as **public infrastructure** and assessed publicly.

## Four core controversies

### 1. The rationality of the 10²⁵ / 10²⁶ FLOP thresholds

- **Weak scientific basis**: the thresholds are "convenient orders of magnitude to regulate", not "capability-transition points".
- **DeepSeek shock** (Jan 2025): frontier-level capability with an order of magnitude less compute — casting doubt on the threshold design.
- **Compute is bypassable**: distributed training, distillation, and post-training tuning can all lift capability on modest compute.

### 2. Open-source vs. closed-source divergences

- **AI Act art. 53(2)**: open-source GPAI is exempt from certain documentation obligations, but **systemic-risk GPAI is not exempt** even when open.
- **In practice**: [Mistral](/companies/mistral/)'s flagship uses the MRL licence (not fully open source), deflecting full open-source obligations.
- **[DeepSeek](/companies/deepseek/)'s all-out open release** → **once weights ship, there is no "pause" to invoke**.
- **Scholarly argument**: Meta / Mistral argue open source is more transparent; Anthropic / OpenAI argue closed source is more controllable.

### 3. Industry self-regulation vs. hard-law constraints

- Frontier-lab self-regulation has **loosened across the board** in 2025–2026 (see [company pages](/companies/)):
  - Anthropic RSP v3 removed the pause commitment.
  - OpenAI Preparedness v2 was simplified.
  - Google DeepMind dropped its military-use prohibition in 2024.
  - xAI rejected the self-regulation paradigm outright.
- **Academic consensus**: in the absence of hard law, **the floor of self-regulation is set by the least-regulated player** — and this is the central argument for the EU AI Act and California SB 53.

### 4. The methodology of capability evaluation

- Each company's red-teaming evaluation is **not comparable** — separate methodologies, proprietary benchmarks.
- **MLCommons AILuminate / AI Luminate**: attempts to build an industry benchmark.
- **UK AISI / US AISI (reorganised as CAISI)**: government-run pre-deployment testing for frontier models.
- **Academic critique** (arxiv 2509.24394): the OpenAI Preparedness Framework "does not guarantee any concrete mitigation".

## Industry-practice lens

### Safety-framework comparison across the main frontier labs

| Company | Framework | Core method | 2025–2026 changes |
| --- | --- | --- | --- |
| [Anthropic](/companies/anthropic/) | **RSP v3** (Feb 2026) | ASL tiers (modelled on BSL) | **Revoked pause commitment**; separates "unilateral" vs. "industry-wide" |
| [OpenAI](/companies/openai/) | **Preparedness v2** (Apr 2025) | Threat categories × High / Critical | **Simplified thresholds** (dropped Low / Medium) |
| [Google DeepMind](/companies/google-deepmind/) | **FSF v3** (Apr 2026) | Critical Capability Levels (CCL) | **Expanded**: new TCLs + manipulation CCL |
| [Mistral](/companies/mistral/) | **No independent framework** | Open source + GPAI CoP signatory | — |
| [xAI](/companies/xai/) | **Weak / absent** | — | Publicly **rejects** the self-regulation paradigm |
| [Meta](/companies/) | Frontier AI Framework | Similar methodology | Ongoing iteration |

### Models plausibly above the compute thresholds (Apr 2026)

**> 10²⁵ FLOP (EU GPAI systemic-risk threshold)**:
- Claude Opus 4.x (Anthropic)
- GPT-5 / 5.3 / 5.4 series (OpenAI)
- Gemini 3 Pro / Ultra (Google DeepMind)
- Grok 4+ (xAI)
- Llama 4 series (Meta)
- Mistral Large 2/3 (Mistral)
- **Likely**: Qwen 3.5 (Alibaba), ERNIE 5.0 (Baidu).

**> 10²⁶ FLOP (California SB 53 frontier threshold)**:
- Claude Opus 4.x, GPT-5 series, Gemini Ultra, Grok 4+, Llama 4 Max.

### Three typical cross-jurisdictional compliance strategies

1. **"One document for three jurisdictions"**: Anthropic / Google DeepMind map their RSP / FSF onto the EU GPAI CoP + California SB 53.
2. **"Jurisdiction-tiered documents"**: OpenAI / Meta prepare separate compliance documents per jurisdiction.
3. **"Abandon the US and EU markets"**: [DeepSeek](/companies/deepseek/) and most Chinese firms focus on the domestic market.

### Structural events in Q1 2026

- **Trump EO 14365** (Dec 2025): attempts to preempt California SB 53 and the Colorado AI Act.
- **Digital Omnibus Proposal** (Nov 2025): proposes a 16-month delay of the AI Act high-risk provisions to Dec 2027.
- **Anthropic RSP v3** (Feb 24, 2026): triggers the "loosening of frontier self-regulation" debate (*TIME* critique).
- **Google DeepMind FSF v3** (Apr 17, 2026): against the tide, expands the framework.

## Related rules

### EU
- [EU AI Act](/rules/eu/ai-act/) arts. 51–56; Annexes XI / XII / XIII
- [GPAI Code of Practice](/rules/eu/gpai-code-of-practice/) (Jul 2025)
- [Digital Omnibus Proposal](/rules/eu/digital-omnibus-proposal/) (Nov 2025)

### China
- [Generative AI Interim Measures](/rules/china/generative-ai-interim-measures/)
- [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/)
- [AI Safety Governance Framework 1.0 / 2.0](/rules/china/ai-safety-governance-framework/)
- [Anthropomorphic Interaction Services Measures](/rules/china/anthropomorphic-interaction-services/)

### United States
- [NIST AI RMF + GenAI Profile](/rules/us/nist-ai-rmf/)
- [EO 14179](/rules/us/eo-14179-removing-barriers-ai/) / [EO 14365](/rules/us/eo-14365-national-ai-framework/)
- [California SB 53](/subnational/us/california-sb-53-frontier-ai/)

## Jurisdiction deep-dives

- [China](./china/)
- [United States](./us/)
- [EU](./eu/)
