---
title: OpenAI
description: OpenAI company profile, Preparedness Framework v2 deep dive, and evolving governance structure (2026-04-22)
sidebar:
  order: 2
  label: OpenAI
snapshotDate: 2026-04-22
---

> **2026 Q1 major update**: **GPT-5.4 (2026-03)** was classified as having "High cyber capability";
> **GPT-5.4-Cyber (2026-04-14)** opened to vetted security professionals; GPT-5.1 was retired on 2026-03-11.

## Company profile

- **Founded**: 2015 (nonprofit) → 2019 (Capped-Profit hybrid) → 2024–2025 corporate restructuring (**tilting toward full for-profit**)
- **Headquarters**: San Francisco, California, USA
- **Main models**: **GPT-5.4 series (2026-03, latest)** / GPT-5.3 / Sora / DALL-E; the o1 / o3 reasoning line has been folded into the GPT-5 mainline
- **Business model**: ChatGPT (consumer / Plus / Team / Enterprise), the API, deep Azure integration, and the Stargate infrastructure initiative
- **Valuation**: **$500B** on secondary markets at end-2025; unconfirmed reporting of a **$1T** round in early 2026
- **User base**: over **800 million ChatGPT weekly actives** (disclosed 2026 Q1)
- **Positioning**: **"AGI commercialisation accelerator"** — a clear drift from the 2015 founding mission after 2024

## Deep dive: Preparedness Framework v2 and the "dilution" of industry self-regulation

### Framework evolution

| Version | Date | Key features |
| --- | --- | --- |
| v1.0 | 2023-12 | Four tiers (Low / Medium / High / Critical) × four risk categories |
| **v2.0** | **2025-04-15** | **Simplified to two tiers** (High / Critical) × three primary risk categories + a watch list |

### v2 core structure

**Three primary ("tracked") risk categories:**
1. **Biological & chemical**: lowering the bar to weapons development / use
2. **Cybersecurity**: large-scale cyberattacks and exploitation of vulnerabilities
3. **AI self-improvement**: novel challenges to human control over AI

**Watch list ("research categories", not formal thresholds):**
- Long-range autonomy
- Sandbagging (deliberate under-performance)
- Autonomous replication and adaptation
- Undermining safeguards
- Nuclear and radiological

**Threshold definitions:**
- **High**: materially increases known pathways to severe harm
- **Critical**: opens **previously unprecedented** pathways to severe harm

### v2's "dilution" relative to v1

v2 cut the threshold tiers from four to two (deleting "Low" and "Medium"). OpenAI's stated rationale is
"focusing on what really matters"; the critical response, led by arxiv 2509.24394 (September 2025,
subsequently cited by peers), is sharper:

> The 2025 OpenAI Preparedness Framework does not guarantee any AI risk mitigation practices.

**Core critiques in the paper:**
1. **"Safeguard sufficiency" determinations rest entirely inside OpenAI**, with no external constraint
2. The **Safety Advisory Group** can, on "holistic grounds," approve any mitigation package it chooses
3. The framework's capability-to-mitigation mapping **permits the company to reinterpret at will when conflicts arise**
4. **No "you must do X" hard obligations** — everything is phrased as "consider," "evaluate," or "take steps as necessary"

### GPT-5.4's "High cyber capability" classification and response

GPT-5.4 is the **first model formally classified as High cyber capability under the Preparedness
Framework**. Responses include:

- **Expanded cybersecurity stack**: deployment-time monitoring, trusted access controls
- **Asynchronous blocking**: high-risk requests are blocked asynchronously on the ZDR (Zero Data Retention) surface
- **GPT-5.4-Cyber**: reverse-engineering, vulnerability, and malware analysis capabilities opened to **human-vetted** security researchers
- **ChatGPT access revoked**: non-vetted users cannot use Cyber capabilities directly from ChatGPT

This is the **Preparedness Framework's first real activation** — yet **critics argue** the "trigger" did not
actually restrict underlying capability; it only layered access controls. The cyber capabilities themselves
**remain fully available to vetted users**.

### Compared with Anthropic RSP and Google DeepMind FSF

| Dimension | OpenAI Preparedness v2 | Anthropic RSP v3 | Google DeepMind FSF v3 |
| --- | --- | --- | --- |
| Methodology | Risk category × threshold | Capability tiers (ASL) | Critical Capability Levels (CCL) |
| Tier granularity | Two tiers (High / Critical) | Continuous ASL escalation | CCL + TCL (Tracked) |
| Pause commitment | **Weak** ("pause if necessary") | **Removed in v3** | No explicit commitment |
| External review | Safety Advisory Group (some external membership) | Risk Reports with external reviewers | Model-level FSF reports |
| Academic critique | **arxiv 2509.24394 — "no guarantees"** | Drew criticism for abandoning pause | TCL thresholds are vague |

**Common thread**: in 2025–2026 all three companies adjusted safety commitments in a direction that **makes room for competition**.

## Model Spec: a new form of behavioural self-regulation

**The Model Spec** (first published in May 2024, continuously updated) is a document unique to OpenAI.
It governs **how models should behave** rather than **what the models can do**:

- **Chain of Command**: OpenAI → developers → users, in priority order
- **Default behaviors**: refusal, abstention, and proactive notification defaults
- **ICloud / privileged requests**: overrides reserved to OpenAI

**Significance**: this is **behavioural self-regulation**, distinct from the **capability-threshold
self-regulation** of RSP / Preparedness. The Model Spec has also been accepted as one of OpenAI's
compliance artefacts for the **"Transparency" chapter of the GPAI Code of Practice**.

## Usage-policy analysis

OpenAI's **Usage Policies** received a major **shortening and blurring** update in October 2025:
- Specific illegal-use categories (politics, medical, etc.) removed
- Shift toward **principle-level language** ("no use for unlawful activity")
- Several explicit "do not generate" prohibitions from the 2024 version were deleted

**Contrast with Anthropic's AUP**: Anthropic retains more specific, more enforceable language; OpenAI's
2025 revision **raises enforcement difficulty**, and industry observers suggest it may pave the way for
relaxed practical limits on government contracts.

## Regulatory-compliance posture

### United States

- **2023 White House Voluntary Commitments**: first-wave signatory
- **Frontier Model Forum**: founding member
- **California SB-1047** (2024): **publicly opposed** (Sam Altman's open letter to Governor Newsom urging veto)
- **California SB 53** (2025): **ambiguous stance**, no public endorsement (in contrast to Anthropic)
- **EO 14179 (Trump deregulation)**: **publicly supportive**
- **AI Action Plan + EO 14365 (state-law preemption)**: **implicitly supportive**; repeated lobbying against state-level mandates
- **Federal contracts**: $200M DoD contract (2024) + multiple GSA contracts

### European Union

- **GPAI Code of Practice**: **signed with reservations** (particularly on the Safety chapter)
- Training-data licensing agreements with European media including **Axel Springer, Financial Times, News Corp**
- **Axel Springer search integration** is a flagship project for GDPR-compliant training

### China

- **Not available in mainland China**
- Served via Azure International or regional partners (Singapore, Japan)
- **Sam Altman's 2024 China visit** was followed by API access for China being closed (2024-06)

### Italy

- **2023-03 Garante temporary ban**: first regulatory ban of a generative AI system globally
- **2024-12 Garante €15M fine**: GDPR violation
- Remains a persistent EU DPA enforcement target

## Structural governance issues

### The November 2023 board crisis

Sam Altman was ousted (2023-11) and reinstated (11-22):
- The episode laid bare the tension between **for-profit and nonprofit** governance
- Safety-oriented board members (Helen Toner, Tasha McCauley) ultimately departed
- The reshaped board tilted toward commercialisation

### The 2024 Safety & Security Committee (SSC)

Replaced the **Superalignment Team** (dissolved in 2024; core members including Ilya Sutskever and Jan Leike
moved to Anthropic):
- SSC is chaired by Altman
- **The company evaluates its own models**, without independent oversight

### 2024–2025 corporate restructuring

Transition from Capped-Profit toward **a more traditional for-profit** structure (pending California
Attorney General approval):
- The nonprofit mission is **retained in principle** but loses operational influence
- Restructuring progress was reviewed by the California AG in December 2025

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | Usage Policies (2025-10 latest) | [openai.com/policies/usage-policies](https://openai.com/policies/usage-policies/) | [usage-policy](./usage-policy/) |
| Model spec | **Model Spec** | [model-spec.openai.com](https://model-spec.openai.com/) | [model-card](./model-card/) |
| Safety framework | **Preparedness Framework v2** (2025-04-15) | [cdn.openai.com/.../preparedness-framework-v2.pdf](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf) | [safety-framework](./safety-framework/) |
| System cards | GPT-5.x / GPT-5.3-Codex System Cards | [openai.com/safety](https://openai.com/safety/) | [red-team-disclosures](./red-team-disclosures/) |
| Transparency | Safety & Transparency Hub | [openai.com/safety](https://openai.com/safety/) | [transparency-report](./transparency-report/) |

## Self-regulation posture: **from "safety first" to "acceleration first"**

OpenAI's self-regulation posture has drifted markedly from 2023 through 2026:

| Period | Posture |
| --- | --- |
| 2015–2019 | "Safe AGI" mission → nonprofit |
| 2020–2022 | "Capped Profit" → safety research + commercialisation |
| 2023–2024 | **Preparedness Framework v1** + Voluntary Commitments |
| **2025–2026** | **Preparedness v2 simplification**, commercial acceleration, **opposition to binding safety legislation**, embrace of government contracts |

**Key turning point**: the May 2024 dissolution of the Superalignment team and the exit of its core members
(Ilya Sutskever, Jan Leike) marks the **effective end of the safety-first narrative**.
