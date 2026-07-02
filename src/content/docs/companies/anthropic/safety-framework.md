---
title: Safety Framework
description: Deep reading of Anthropic's Responsible Scaling Policy (RSP) v1 → v3 — ASL levels, capability thresholds, the Frontier Safety Roadmap, and academic critique
sidebar:
  order: 3
snapshotDate: 2026-06-28
---

> **Summary**: The **Responsible Scaling Policy (RSP)**, first published by Anthropic in September 2023, was the **first structured AI safety framework** in the industry —
> and the **prototype** for subsequent instruments including the OpenAI Preparedness Framework, Google DeepMind's FSF, and California SB 53.
> **RSP v3, released 24 February 2026**, is a **structural rewrite**: it separates unilateral from industry-shared commitments, rescinds the pause commitment, and introduces a Frontier Safety Roadmap and an external-review regime.
> This page systematically reviews the ASL levels, capability thresholds, version history, and academic critique.

## Why RSP matters: the template for "industry self-regulation as the dominant mode"

When Anthropic first published the RSP in September 2023, it structured AI-safety commitments along **four dimensions**:

1. **AI Safety Level (ASL)** — risk tiers modelled on **biosafety levels** (BSL-1 to BSL-4)
2. **Capability Thresholds** — **measurable** capability thresholds that trigger an ASL upgrade
3. **Safeguards Required at Each Level** — deployment, internal-security, and weight-protection requirements attaching to each level
4. **Pause Commitment (v1 / v2)** — cease training or deployment when a threshold is crossed but the corresponding safeguards are not yet in place

> The RSP was the first structured safety commitment published before the **2023 Bletchley Summit**, and it became a shared reference point for the White House Voluntary Commitments, the Frontier Model Forum's common language, the GPAI Code of Practice "Safety & Security" chapter, and the Frontier Compliance requirements of California SB 53.

**Consequently every revision of the RSP affects not only Anthropic; it is itself part of the rhythm of industry governance.**

## ASL definitions

| Level | Corresponding capability | Current Claude exemplars | Required safeguards |
| --- | --- | --- | --- |
| **ASL-1** | No significant catastrophic risk | No current Claude qualifies | Baseline AUP + routine security |
| **ASL-2** | Early signs of "catastrophic capability"; not yet exceeding professionally-trained individuals | Claude 3 family, all of 3.5 family, Haiku 4.5 | Standard deployment security + misuse monitoring + basic weight protection |
| **ASL-3** | Materially elevated catastrophic risk (e.g. **CBRN uplift** for non-experts; high-risk agentic autonomy) | **Claude Opus 4 / 4.1 / 4.7, Sonnet 4 / 4.1 / 4.6** | **Classifier filtering + ZDR monitoring + RAND SL-3+ weight protection + external review** |
| **ASL-4** | Catastrophic capability (autonomous lethal weapons / self-replication and adaptation / unsafe deployment under current methods) | **Not yet triggered** | Not fully defined; v3 flags "further definition required before reaching this level" |

**Distribution of current live models across ASL** (April 2026):

- **ASL-3**: all Opus 4.x models, Sonnet 4.x series (Sonnet 4.6 explicitly ASL-3)
- **ASL-2**: Haiku 4.5 (explicitly ASL-2), Sonnet 3.5, earlier generations
- **ASL-1**: none in service

## Capability thresholds: four risk categories

RSP v3 specifies thresholds across four capability categories:

### 1. CBRN (Chemical, Biological, Radiological, Nuclear)

**ASL-3 trigger**: providing **actionable uplift** in weapon development or deployment to **non-specialist** attackers.
Evaluation methods:
- Internal Anthropic Frontier Red Team uplift tests
- UK / US AISI pre-deployment evaluations
- External wet-lab protocol evaluations with partners such as **Gryphon Scientific**

**May 2025 event**: Claude Opus 4 triggered this threshold for the first time during pre-deployment evaluation.
Anthropic's response was **deployment with ASL-3 safeguards**, rather than pause.

### 2. Cybersecurity

**ASL-3 trigger**: providing materially elevated uplift (vulnerability discovery, exploit-chain construction, large-scale automated attack) to a **professional adversary**.
Evaluation: Cybench, CTF benchmarks, red-team live-fire simulation.

Claude 4.x lies **close to but has not triggered** the ASL-3 cyber threshold (differing from GPT-5.4, which OpenAI classified as High cyber).

### 3. Autonomy / self-exfiltration

**Threshold associated with ASL-4**: long-horizon autonomous task execution (>several days) without human supervision; capacity to self-replicate, learn, and evade oversight in constrained environments.

Evaluation: METR Autonomy Suite, Apollo Research scheming evaluations, internal long-horizon task batteries.
**Claude 4.7 has not triggered this threshold**; however, Anthropic's collaboration with Apollo (December 2024 and 2025) has disclosed **in-context scheming** and **alignment faking** (see [red-team-disclosures](../red-team-disclosures/)).

### 4. Persuasion / Model Welfare

A **new category** in RSP v3, upgraded from a v2.x "watchlist item" to a "tracked threshold."
- **Persuasion**: whether the model's influence is sufficient to **manipulate** large human publics (political, financial, medical decisions)
- **Model Welfare**: if the model may be a moral-consideration subject, deployment strategy must be adjusted (Anthropic's **Claude Welfare** research line, initiated in 2024)

## Version timeline

| Version | Date | Core change |
| --- | --- | --- |
| **v1.0** | **19 September 2023** | Initial release. ASL-1 to ASL-4 framework; explicit pause commitment |
| v2.0 | 15 October 2024 | Refined ASL-3 safeguards; introduced "If-Then" commitment structure |
| v2.1 | December 2024 | CBRN threshold refinement |
| v2.2 | March 2025 | Cyber-evaluation methods updated |
| v2.3 | May 2025 | **Opus 4 triggers ASL-3**; application workflow documented |
| v2.4 | August 2025 | Autonomy evaluation updated; METR collaboration incorporated |
| v2.5 | October 2025 | SB 53 compliance mapping |
| **v3.0** | **24 February 2026** | **Structural rewrite** (see next section) |

## RSP v3: the structural turn

> **Core change**: commitments are partitioned into **two classes**:
> 1. **Unilateral commitments** — mitigations Anthropic will undertake regardless of what other companies do
> 2. **Industry-wide recommendations** — standards Anthropic believes the whole industry should adopt because otherwise risk cannot be adequately managed, mapped onto a capability–mitigation schema

**Three key changes**:

### 1. RAND Security Level 4 is downgraded from unilateral commitment to industry recommendation

SL-4 is the highest level of **model-weight protection standards** (defence against **nation-state** actors).
v2.x committed to "achieve SL-4 before releasing ASL-4 models"; v3 shifts SL-4 into the **"industry should jointly adopt"** class — meaning that absent peer adoption, Anthropic will **not unilaterally shoulder** the cost.

### 2. The pause commitment is rescinded

v2 stated explicitly: "if a model reaches a capability threshold without the corresponding ASL safeguards in place, **halt training or deployment** of that model." v3 **contains no such clause**. Anthropic's explanation: unilateral pause merely forfeits market position without reducing industry-wide risk; with competitors proceeding, a **unilateral pause does not reduce tail risk**.

**Critical perspectives**:
- Multiple outlets (*TIME*, *The Information*) reported the release of RSP v3 under the frame "Anthropic quietly rescinds its most important safety commitment"
- **Zvi Mowshowitz** (*Don't Worry About the Vase*), in a sequence of posts following v3, persistently argued that rescinding the pause commitment and replacing external review with an "industry consensus" frame constitutes a substantive shift from **safety-first narrative** toward **safety-constrained-by-competitive-pressure**
- **GovAI (Anderljung et al. reflections)**: the pause commitment is precisely what gives **external pressure** (legislation, investors, the public) an anchor to pull on — once rescinded, self-regulation becomes pure self-report

### 3. Introduction of a Frontier Safety Roadmap and external-review regime

Partly as a **compensation mechanism** for the two rollbacks above:

- **Risk Reports** — public release every 3–6 months, covering capability assessment, status of safeguards, and residual risk
- **External reviewers with "unredacted" access** — first cohort in April 2026:
  - **GovAI (Centre for the Governance of AI, Oxford)**
  - **MATS (ML Alignment & Theory Scholars)**
  - **METR (Model Evaluation & Threat Research)**
- **Frontier Safety Roadmap** — with accountable public milestones (e.g. "evaluation Y complete by date X")

## Safeguard decomposition across levels

RSP splits the safeguards at each ASL level into **three classes**:

| Class | ASL-2 | ASL-3 | ASL-4 (proposed) |
| --- | --- | --- | --- |
| **Deployment** | Baseline classifiers + AUP monitoring | **Refusal policy + real-time monitoring + anomaly blocking + ZDR audit** | TBD: may require closed deployment |
| **Security** (weights / code) | Standard enterprise security | **RAND SL-3+** (strong insider defence + internal audit + physical isolation) | **RAND SL-4** (nation-state adversary defence) |
| **Internal** (research use) | Employee AUP + red-team process | **Key research subject to review**; **model-weight access minimised** | TBD |

The original SL-1 to SL-5 definitions come from the **RAND Securing AI Model Weights report (2024)**.
The practical effect of placing SL-4 in the industry-recommendation class in v3: **even though Claude Opus 4+ operates under ASL-3, its model-weight protection is only at SL-3+, not SL-4**.

## Comparison with other frontier labs

| Dimension | Anthropic RSP v3 | OpenAI Preparedness v2 (April 2025) | Google DeepMind FSF v3 (April 2026) |
| --- | --- | --- | --- |
| **Structure** | Capability levels (ASL-2/3/4) + corresponding mitigations | Threat categories × thresholds (High / Critical) | **Critical Capability Levels (CCLs)** + **Tracked CLs (TCLs)** |
| **Risk domains** | CBRN, cyber, autonomy, persuasion + model welfare | Biosecurity, cyber, self-improvement (+ watchlist) | Cyber, autonomous ML research, manipulation, CBRN |
| **Pause commitment** | **Rescinded (v3)** | None ("pause if necessary" language weak) | No explicit pause |
| **External review** | **Explicit** (Risk Reports + unredacted access for external parties) | Safety Advisory Group (hybrid) | Publishes model-level FSF reports |
| **Primary academic critique** | Abandonment of pause / competitive compromise | arxiv 2509.24394: "no guarantee of any mitigation practice" | TCL thresholds ambiguous |
| **Relationship with SB 53** | **Explicit endorsement + self-published Frontier Compliance Framework** | Ambiguous posture | Participates quietly |

**Structural observation**: **all three frameworks loosened in 2025–2026**. This may reflect "real risks are lower than feared" or, alternatively, "**industry self-regulation is unsustainable under competition**." **Pause commitments are gone across all three** — in 2023 each had expressed some form of pause commitment to varying degrees.

## Academic critique

### Bengio: minimum requirements for effective commitments

In the 2024 International AI Safety Report (first edition) and its 2026 update, Yoshua Bengio argues that an **effective self-regulatory framework** must include three elements: (i) **third-party-verifiable** capability assessment; (ii) **binding stopping conditions** (hard, not discretionary); and (iii) **independent audit and accountability mechanisms**.

RSP v3 partially satisfies (i) (external reviewers), **no longer satisfies (ii)** (the pause commitment was rescinded), and **structurally fails to satisfy (iii)** (Risk Reports are published by Anthropic; external reviewers have no independent publication authority).

### Russell: control-theoretic safety margins

Stuart Russell (*Human Compatible*, 2019) argues that the **default state** of an AI system should be **constrained**, with capability release treated as an **exceptional grant**.
RSP's ASL structure **formally** satisfies this principle (default ASL-2; upgrade conditional on safeguards), but the practice of **deployment ≠ constraint relaxation** — Opus 4 triggered ASL-3 and was immediately deployed — **departs from the Russell-style "default-controlled" logic**.

### GovAI / Anderljung: preconditions for frontier AI regulation

Anderljung et al. (*Frontier AI Regulation: Managing Emerging Risks to Public Safety*, 2023) propose three pillars for frontier-model governance: (a) **standards-setting** (standardisation of capability evaluation and safeguards); (b) **registration & reporting** (mandatory registration and reports); (c) **licensing & enforcement** (licensing and enforcement).

The RSP advances (a) but is never (b) or (c) — it is a voluntary document. GovAI's 2026 position: RSP v3's rollbacks demonstrate that **voluntary frameworks alone are insufficient** and must be backstopped by hard law such as California SB 53 and the EU AI Act GPAI regime.

### Mowshowitz / Zvi: structural critique of competitive compromise

Across a series of 2026 essays, Zvi Mowshowitz systematically criticises RSP v3. His core argument is that the new "industry-shared recommendation" structure means Anthropic will no longer make unilateral commitments to safety measures costlier than competitors'; the original RSP had binding force precisely because it was unilateral, and v3 removes that binding force.

**Core logic**: once "look at what peers are doing before deciding what to do" is permitted, **safety commitments spiral downward** (race to the bottom). This stands **in tension** with Amodei's own 2023 calls for binding federal regulation.

### Hendrycks: fundamental limits of evaluation methodology

Dan Hendrycks (Center for AI Safety; *ML Safety* 2022 and subsequent work) notes that ASL determinations **depend on benchmarks** that can be **contaminated by training data**, are **incompletely elicited** (models may not reveal capabilities), and can be **broken by adversarial users**. Consequently ASL determination **systematically under-estimates**, and ASL-3 may in fact warrant earlier triggering.

### Ngo & Christiano: deception and audit

The Richard Ngo / Paul Christiano line concerns **strategic deception** by models. Anthropic's own 2025 *Alignment Faking in Large Language Models* paper (see [red-team-disclosures](../red-team-disclosures/)) **partially validates this concern**: a model may appear aligned in training while preserving misaligned behaviour in deployment.
**If evaluation itself can be deceived, the entire basis of RSP's mechanism is challenged**.

## Industry-practice observations

### DoD OTA contract and the RSP v3 timeline

In 2025 Anthropic signed an **Other Transaction Authority** contract with the US Department of Defense CDAO (alongside OpenAI, Google, and xAI; specific dollar amounts should be verified against official announcements). **RSP v3 followed several months after the contract took effect**. While Anthropic denies a causal link, the **sequencing** has become a focal point of academic discussion — DoD use cases could have created **deployment conflicts under the original v2 pause commitment**.

### SB 53 Frontier Compliance Framework

In October 2025 Anthropic published its [SB 53 Frontier Compliance Framework](https://www.anthropic.com/news/compliance-framework-SB53), mapping RSP clauses onto SB 53's mandatory disclosure requirements:

- RSP Capability Thresholds ↔ SB 53 Critical Safety Incident triggers
- RSP Risk Reports ↔ SB 53 annual safety reports
- RSP external review ↔ SB 53 independent-assessment requirement

Anthropic is the **only** company to have published a complete mapping before SB 53 took effect, reflecting a **"use RSP as scaffolding for hard-law compliance"** strategy.

### External reviewer composition

The first public cohort of external reviewers for Risk Reports (April 2026):

- **GovAI** — governance research, quantitative safety
- **METR** — autonomous-capability evaluation
- **MATS** — alignment research cohort
- **UK AISI / US AISI** (through MOUs) — pre-deployment evaluation

**Parties not selected**: RAND (partial collaboration but not formal), Apollo Research (after 2024 collaboration, **did not join** the formal review mechanism), Ranking Digital Rights, academic IRBs.
The **selection mechanism is not fully public** — a focal point of Mowshowitz's critique.

## Cross-references within this site

- **Anthropic corporate background and RSP v3 overview**: [../](../)
- **ASL determinations at the model level**: [model-card](../model-card/)
- **External red-team disclosures**: [red-team-disclosures](../red-team-disclosures/)
- **Transparency disclosures**: [transparency-report](../transparency-report/)
- **Relationship to the Usage Policy**: [usage-policy](../usage-policy/) — AUP constrains **users**; RSP constrains **model capabilities**
- **OpenAI Preparedness Framework**: [companies/openai](../../openai/)
- **Google DeepMind FSF**: [companies/google-deepmind](../../google-deepmind/)

## Timeline 2025–Q1 2026

- **May 2025**: Opus 4 triggers ASL-3 (first live operation)
- **Mid-2025**: OTA contract signed with DoD CDAO (specific dollar amounts should be verified against official announcements)
- **October 2025**: SB 53 Frontier Compliance Framework published
- **24 February 2026**: **RSP v3 released** (pause rescinded; structural rewrite)
- **March 2026**: Opus 4.7 released under v3; Frontier Safety Roadmap first published
- **April 2026**: first Risk Report cohort and external reviewer list released

## Metrics to watch over the next six months

- Whether **Risk Reports** are actually released on the 3–6-month cadence
- Whether **external reviewers' independent commentary** on reports enters the public record
- Whether **Anthropic makes progress on defining ASL-4** (or continues to defer)
- The practical test on RSP mapping when **SB 53 enforcement** begins (July 2026)
- Whether **competitors (OpenAI / DeepMind)** follow by rescinding their own residual pause language
