---
title: Anthropic
description: Anthropic company profile, RSP v3 deep dive, and industry self-regulation posture (2026-06-28)
sidebar:
  order: 1
  label: Anthropic
snapshotDate: 2026-06-28
---

> **2026 Q1 major update**: **RSP v3 released (2026-02-24)** — separates "unilateral commitments" from
> "industry-wide obligations," abandons the pause commitment, institutes Risk Reports on a 3–6 month cadence,
> and designates the [SB 53 Frontier Compliance Framework](https://www.anthropic.com/news/compliance-framework-SB53)
> as the company's California compliance path.

## Company profile

- **Founded**: 2021 (by Dario Amodei, Daniela Amodei, and other former OpenAI staff)
- **Headquarters**: San Francisco, California, USA
- **Main models**: the Claude family (Claude Opus 4.7 / Sonnet 4.6 / Haiku 4.5)
- **Business model**: Claude.ai consumer / API / Claude Code / enterprise / AWS Bedrock and Google Vertex resale channels
- **Funding trajectory**: Google $4B (2023); Amazon $8B cumulative (2024); 2026 valuation above **$60B**
- **Differentiating narrative**: the **safety-first frontier lab**, branded around Constitutional AI and mechanistic interpretability research

## Deep dive: RSP as the origin and evolution of industry self-regulation

### Why RSP is the starting point of voluntary frontier-lab governance

In September 2023 Anthropic released the first **Responsible Scaling Policy (RSP)**, structuring AI-safety
commitments around:

- **AI Safety Levels (ASL)** — a risk-tiering scheme modelled on biosafety levels (BSL-1 through BSL-4)
- **Capability Thresholds** — the capability markers that trigger ASL upgrades
- **Safeguards Required at Each Level** — deployment and internal-security requirements that attach to each level
- **Pause Commitment** (v1 / v2 original) — **halt training or deployment** if a threshold is reached before safeguards are in place

**Institutional significance**: RSP was the **first structured voluntary AI-safety framework globally**, and
it supplied the template for OpenAI's Preparedness Framework, Google DeepMind's Frontier Safety Framework (FSF),
Meta's Frontier AI Framework, and others. The Frontier Model Forum (founded 2023) uses it as a shared vocabulary.
**California SB 53 and the "Safety and Security" chapter of the EU GPAI Code of Practice both echo the RSP structure in part.**

### Version timeline

| Version | Date | Core change |
| --- | --- | --- |
| v1.0 | 2023-09 | Initial release. ASL-1 through ASL-4 framework; explicit pause commitment |
| v2.x | 2024-10 to 2025-10 | Several minor updates; ASL-3 activated for specific models in May 2025 (bioweapon-uplift threshold) |
| **v3.0** | **2026-02-24** | **Structural rewrite** (detailed below) |

### RSP v3 in detail: **a structural shift in voluntary frontier-lab governance**

**Core change**: the RSP is split into **two classes of obligations**:

1. **Mitigations Anthropic will implement regardless of what other labs do** (unilateral commitments)
2. **Capability-to-mitigation mappings that Anthropic believes the whole industry must adopt or else risk cannot be adequately managed** (industry-wide recommendations)

**Key consequences:**
- **RAND Security Level 4** (the highest bar for **model-weight security**, designed to deter nation-state actors) has been **demoted from unilateral commitment to industry recommendation**
- **The pause commitment has been withdrawn**: the v2 text explicitly stated "halt if a threshold is reached before safeguards are ready"; v3 contains **no equivalent clause**
- Anthropic's stated rationale: certain commitments only make sense when **the industry moves in lockstep**, and unilateral adoption merely **erodes market position without reducing real-world risk**

**Areas of controversy** (voiced by *TIME*, GovAI, Zvi Mowshowitz, and others):

1. **The "competitive-pressure rationalisation" risk**: once "wait and see what peers do" becomes legitimate, safety commitments enter a **downward spiral**
2. **Pentagon pressure**: Anthropic signed a **$200M OTA contract with the U.S. Department of Defense in 2025**; RSP v3's demotion arrived six months after that contract took effect
3. **"Industry-wide" is unenforceable**: there is no mechanism to verify that "the industry" in fact adopts any given standard, so the commitment is effectively **no commitment at all**

**Anthropic's rebuttal:**
- The new **Risk Reports** (every 3–6 months) plus **"unredacted" access for external reviewers** (the first cohort in April 2026 includes GovAI, MATS, and METR)
- **No pre-existing mitigations have been weakened**: ASL-3 protections still apply to Claude Opus 4+
- Publication of a **Frontier Safety Roadmap** with publicly accountable metrics

### Comparison with other frontier labs

| Dimension | Anthropic RSP v3 | OpenAI Preparedness v2 (2025-04) | Google DeepMind FSF v3 (2026-04) |
| --- | --- | --- | --- |
| Structure | **Capability tiers** (ASL-2/3/4) + paired mitigations | **Threat category × threshold** (High / Critical) | **Critical Capability Levels (CCLs)** + **Tracked CLs (TCLs)** |
| Risk domains | Bioweapons, cyber, autonomy, persuasion | Bio/chem, cyber, self-improvement (plus long-horizon autonomy, sandbagging, autonomous replication as "watch" categories) | Cyber, autonomous ML research, manipulation, CBRN |
| Pause commitment | **Withdrawn** (v3) | Never formally adopted ("pause if necessary" phrasing is weak) | No explicit pause |
| External review | **Yes, explicit** (Risk Reports include external parties) | Safety Advisory Group (mixed internal + external) | Model-level FSF reports published (e.g. Gemini 3 Pro FSF Report, Nov 2025) |
| Principal criticism | Abandoning pause / competitive compromise | arxiv 2509.24394 — "does not guarantee any mitigation practice" | TCL thresholds are vague |

**Key observation**: **the three frameworks look different on the surface, but each experienced
softening in 2025–2026.** This can be read either as evidence that actual risk is lower than
originally feared, or as evidence that voluntary self-regulation is unsustainable under competitive
pressure — and therefore that **binding external law** (the EU AI Act, California SB 53, follow-on
legislation to EO 14365) is necessary to lock in safety obligations.

## Key analysis of the Usage Policy (AUP)

Anthropic's **Usage Policy** (latest version: May 2025), compared with other frontier labs:

- **Stronger weaponisation limits**: explicit prohibition on "development, design, production, or acquisition of weapons or dangerous chemical, biological, or nuclear materials"
- **More specific child-protection clauses**: CSAM-generation prohibition plus a broader ban on content that would cause "significant physical or psychological harm to minors"
- **Nuanced treatment of elections**: bans "material political manipulation" but permits "assistance drafting genuine political content"
- **Enterprise provisions**: the policy is split between a Consumer Usage Policy and Commercial Terms, distributing compliance burden

**Contrast with OpenAI Usage Policies**: OpenAI's October 2025 refresh shortened and blurred the document (deleting specific prohibited categories in favour of principle-level language); **Anthropic's AUP remains more specific and more enforceable**.

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | Anthropic Usage Policy (AUP) | [anthropic.com/legal/aup](https://www.anthropic.com/legal/aup) | [usage-policy](./usage-policy/) |
| Model card | Claude Model Cards (per release) | [anthropic.com/claude](https://www.anthropic.com/claude) | [model-card](./model-card/) |
| Safety framework | **RSP v3** (2026-02-24) | [anthropic.com/news/responsible-scaling-policy-v3](https://www.anthropic.com/news/responsible-scaling-policy-v3) | [safety-framework](./safety-framework/) |
| SB 53 compliance | Frontier Compliance Framework | [anthropic.com/news/compliance-framework-SB53](https://www.anthropic.com/news/compliance-framework-SB53) | — |
| Transparency report | Transparency Hub | [anthropic.com/transparency](https://www.anthropic.com/transparency) | [transparency-report](./transparency-report/) |
| Red-team disclosures | Frontier Red Team papers / blog | [anthropic.com/research](https://www.anthropic.com/research) | [red-team-disclosures](./red-team-disclosures/) |

## Regulatory-compliance posture

### United States

- **2023 White House Voluntary Commitments**: first-wave signatory
- **Frontier Model Forum**: founding member
- **California SB 53**: **explicit endorsement** (unique among frontier labs); publication of the [Frontier Compliance Framework](https://www.anthropic.com/news/compliance-framework-SB53) as a compliance path
- **EO 14365 (state-law preemption)**: implicit dissatisfaction, but no public opposition
- **Dario Amodei's Senate testimony** (2023, 2024): **publicly called for binding federal AI regulation**, unusual among major-lab CEOs

### European Union

- **GPAI Code of Practice**: **fully signed** (first wave, 2025-08-01; all three chapters)
- **AI Act Arts. 51–56 GPAI obligations**: the Claude line exceeds 10^25 FLOP and Anthropic has prepared systemic-risk documentation

### China

- **Not offered directly in the Chinese market**
- Global AWS Bedrock is accessible to some non-public enterprise customers in China; Chinese consumer services like Doubao 豆包 do not contain Claude
- Technical export is subject to U.S. BIS controls

### United Kingdom

- First-wave partner in **UK AISI (AI Safety Institute)** pre-deployment testing agreements (2024)
- Signed all major statements at the 2024 Bletchley, 2025 Seoul, and 2025 Paris AI Summits

## Self-regulation posture: **the internal contradictions of a "pro-binding-regulation" narrative**

Anthropic's self-regulation posture contains **three structural tensions**:

1. **Rhetoric supporting hard law vs. actual lobbying practice**: the company publicly calls for regulation, yet **publicly opposed the final version of California SB-1047 in 2024**; the 2025 endorsement of SB 53 is a reversal
2. **Unilateral commitments vs. competitive equilibrium**: RSP v3 concedes that "doing safety alone is useless" — but this concession erodes the "moral leader" narrative
3. **Research independence vs. capital dependence**: Amazon $8B + Google $4B represent deep financial entanglement. Whether this affects governance stance has not been publicly disclosed by the company.

**Relative to other frontier labs, Anthropic's self-regulation remains the heaviest**, but 2026 shows
the first signs of **retreat under competitive pressure**.
