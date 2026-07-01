---
title: Safety Framework
description: Panoramic view of the OpenAI Preparedness Framework v1 → v2, academic critique (arxiv 2509.24394), and structure of the Safety Advisory Group
sidebar:
  order: 3
snapshotDate: 2026-06-28
---

> **Snapshot**: based on the [Preparedness Framework v2.0 (15 April 2025)](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf),
> 2025–2026 blog updates, and the [Safety & Security Committee](https://openai.com/index/establishing-a-safety-and-security-committee/) disclosures;
> incorporating actual-operation data from **GPT-5.4's first "High cyber" trigger (March 2026)**.

## 1. What is the Preparedness Framework?

Published by OpenAI **since December 2023**, the Preparedness Framework is an **internal risk-management document** designed to:

- Define **frontier capability thresholds** (what capabilities count as "frontier risks")
- Map **mitigations** (what deployment or security actions must follow a trigger)
- Establish **decision procedures** (who judges and who signs off)

It is **not the Usage Policy** (which constrains user behaviour) and **not the Model Spec** (which specifies model behaviour); it is a **self-regulatory archive of the company's own training and deployment decisions** — one of the two principal exemplars of the "capability-threshold self-regulation" genre, alongside Anthropic's **RSP**.

## 2. Version history

| Version | Date | Core structure | Key changes |
| --- | --- | --- | --- |
| **v1.0** | **18 December 2023** | 4 tiers (Low / Medium / High / Critical) × 4 categories | Initial release; responding to the July 2023 White House Voluntary Commitments |
| v1.1 updates | May 2024, September 2024, multiple addenda | Same | Refinement of evaluation procedures for GPT-4o and o1 |
| **v2.0** | **15 April 2025** | **2 tiers (High / Critical) × 3 tracked + 5 watched** | **Structural rewrite** (see §3) |
| v2.1 addendum | October 2025 | Same as v2.0 | Added Sora 2 evaluation procedure |
| **v2.2 addendum** | **March 2026** | Same as v2.0 | **First trigger**: GPT-5.4 "High cyber" determination |

## 3. Detailed v2 architecture

### Three "Tracked Categories" (formally tracked)

1. **Biological & Chemical**
   - High threshold: for actors **with relevant disciplinary background**, the model provides "meaningful uplift" capable of executing large-scale biological / chemical harm
   - Critical threshold: for actors **without relevant background**, the model can independently guide execution
2. **Cybersecurity**
   - High threshold: the model materially raises attack success for operators **with baseline capability**
   - Critical threshold: the model can **independently** discover and exploit critical-infrastructure vulnerabilities
3. **AI Self-improvement**
   - High threshold: the model can **independently execute** substantial portions of contemporary AI-research workflows
   - Critical threshold: the model can **materially accelerate** frontier AI research, threatening human control over AI development

### Five "Watched Categories" (observed, not formally triggered)

- Long-Range Autonomy
- Sandbagging (intentional under-performance)
- Autonomous Replication & Adaptation
- Undermining Safeguards
- Nuclear & Radiological — **tracked in v1, downgraded to watched in v2**

### Threshold determination and response

| Threshold | Official description | Response |
| --- | --- | --- |
| **High** | Materially increases existing severe-harm pathways | Deployment restriction + Safety Advisory Group sign-off |
| **Critical** | Opens previously-unprecedented severe-harm pathways | Suspend deployment pending independent safety evidence |

## 4. The v1 → v2 "dilution": key deletions

| Item | v1 | v2 |
| --- | --- | --- |
| Number of threshold tiers | 4 (Low / Medium / High / Critical) | **2 (High / Critical)** |
| Number of risk categories | 4 (+ Persuasion) | 3 tracked + 5 watched |
| Persuasion category | **Tracked** (Medium trigger for targeted manipulation) | **Downgraded** (folded into Model Spec behavioural side) |
| Nuclear & Radiological | Tracked | **Downgraded to Watched** |
| Pause commitment | "Pause deployment if Critical triggers" | **Retained but softened** ("on consideration") |
| External review conditions | Explicit | Loose ("the Safety Advisory Group may include external advisors") |

**Official narrative** ([openai.com/safety/preparedness](https://openai.com/safety/)):

- "Focus on genuinely high-risk categories"
- "Reduce the compliance burden of Low / Medium to avoid slowing routine iteration"
- "Persuasion is better covered by Model Spec and user-layer policy"

## 5. Academic critique: arxiv 2509.24394 and "no guaranteed practice"

The September 2025 paper arxiv 2509.24394, *Does OpenAI's Preparedness Framework Make Binding Safety Commitments?* (authors include GovAI and SaferAI researchers), reaches the headline conclusion:

> The 2025 OpenAI Preparedness Framework does not guarantee any AI risk mitigation practices.

### The paper's four-layer argument

1. **"Safeguard sufficiency" adjudication is entirely internal**
   - The repeated phrasing "**sufficient safeguards**" is **never externalised as an auditable standard**
   - The full Safety Advisory Group membership is not publicly disclosed
2. **The "on consideration" clause allows ex post re-interpretation**
   - The text's "weighing considerations including capability, deployment scope, ..." allows any mitigation decision to be legitimated
3. **The "capability–mitigation" mapping is not a hard binding**
   - Reaching High does not automatically trigger a specific measure; the text uses "may include" rather than "shall"
4. **The text contains no "shall not deploy" hard prohibitions**
   - A contrast with the original pause commitment in Anthropic RSP v2; v2 **lacks even that**

### Other academic and policy critique

- **Zvi Mowshowitz** (*Don't Worry About the Vase*): version-by-version breakdown of v1 vs. v2 wording changes; characteristic argument that v2 reads closer to marketing than to an operative risk framework
- **Stuart Russell** (UC Berkeley): in repeated 2025 interviews, treats Preparedness v2 alongside RSP v3 as a systemic retreat in industry self-regulation
- **FLI** (Future of Life Institute) *AI Safety Index*: OpenAI Preparedness's score was materially reduced after v2 release
- **Markus Anderljung** (GovAI Director): repeated 2025 commentary noting that voluntary commitments without hard-constraint text are unsustainable under competitive pressure

## 6. v2's first operation: GPT-5.4 "High cyber" case (March 2026)

On release of GPT-5.4 in March 2026, the official OpenAI blog "Deploying GPT-5.4 under Preparedness Framework v2" announced:

> Following Preparedness evaluations, **GPT-5.4 has been assessed at High capability in the Cybersecurity category**.

Response measures:

1. **Tiered deployment**
   - ChatGPT surface: **blocks** reverse-engineering and exploit-development requests
   - API: **Trusted Access Program** (TAP), open only to security researchers vetted by human review
   - **GPT-5.4-Cyber** (14 April 2026): stand-alone endpoint with full cyber capabilities
2. **Asynchronous monitoring**
   - Zero Data Retention (ZDR) customers: asynchronous blocking + ex post audit
3. **Trusted Access vetting**
   - Identity verification + employer verification + use-case declaration + NDA
   - Order of magnitude of approved vettings not officially disclosed (only informal press estimates)

### Critique: triggering the threshold ≠ restricting the capability

- **Apollo Research** April 2026 blog post: TAP vetting strength is **lower than** Anthropic's equivalent "safeguarded deployment" mechanism for Claude Opus 4.7
- **SaferAI**: post-High mitigations are **primarily at the access-control layer**; the model's underlying uplift has not been reduced
- **UK CAISI** (formerly UK AISI): proposed **stricter deployment recommendations** in pre-deployment testing; OpenAI opted for a weaker variant

## 7. Governance structure: Safety Advisory Group and Safety & Security Committee

### Safety Advisory Group (SAG)

- **Composition**: internal safety team leads + a small number of external advisors (full membership **not fully public**)
- **Function**: advises on Preparedness evaluation conclusions and deployment decisions
- **Authority boundary**: **no veto authority** — final decisions rest with the CEO and the Safety & Security Committee

### Safety & Security Committee (SSC, established May 2024)

| Item | Detail |
| --- | --- |
| Context of founding | Established after the **dissolution of the Superalignment team** (May 2024) and the departures of Jan Leike / Sutskever |
| First chair | **Sam Altman** (concurrent with CEO) |
| September 2024 chair rotation | **Zico Kolter** (CMU) assumes the chair; Altman shifts to "member" |
| Members | Kolter, Bret Taylor (board chair), Adam D'Angelo, Nicole Seligman |
| Authority | Review safety matters; report to the board |
| Controversy | Members are **simultaneously** board members → independence in question |

**Structural critiques** (Helen Toner 2024 TED talk, Tim O'Reilly, Gary Marcus):

- SSC's "self-evaluation" problem: less an independent oversight body than **an internal company safety-reporting mechanism**
- After the November 2023 board episode, **members with external independent judgement (Toner, McCauley) had departed**
- By contrast, the **Anthropic Long-Term Benefit Trust** has, in formal authority at least, a "director-removal" pathway; OpenAI's 2024–2025 restructuring has **weakened** the check that the non-profit body holds over the commercial entity

## 8. Comparison with peer frontier labs

| Dimension | OpenAI Preparedness v2 | Anthropic RSP v3 | Google DeepMind FSF v3 | xAI |
| --- | --- | --- | --- | --- |
| Release date | 15 April 2025 | 24 February 2026 | April 2026 | None |
| Architecture | Risk categories × 2-tier thresholds | ASL capability levels | CCL + TCL | None |
| Pause commitment | **Weak** ("if necessary") | **Rescinded** | No explicit commitment | — |
| External review | SAG (includes external members) | Risk Reports with external review | FSF-report publication | — |
| First trigger case | **GPT-5.4 High cyber (March 2026)** | Claude Opus 4 ASL-3 biochem (May 2025) | Gemini 3 Pro TCL manipulation (November 2025) | — |
| Core academic critique | arxiv 2509.24394 | Abandonment of pause | TCL thresholds ambiguous | No framework |

### Common pattern: the "loosening" of 2025–2026

All three labs have retreated from commitments, in different directions:

- **Anthropic**: rescinded pause; shifted to "industry-shared obligation"
- **OpenAI**: consolidated thresholds; downgraded Nuclear / Persuasion priority
- **DeepMind**: deleted Gemini "military prohibition" (2024); expanded CCL (2025) but without pause

**Structural implication**: absent hard-law backstops, **competitive pressure drives the weakest commitment to become the common floor** (race-to-the-bottom dynamics) — the consistent observation of Mowshowitz, Anderljung, Toner, and the same reasoning behind California SB 53, Article 55 of the EU AI Act, and other proposed legislation.

## 9. Interface with hard law

| Regime | Relevant provisions | Role of Preparedness |
| --- | --- | --- |
| **EU AI Act** | Art. 55 systemic-risk mitigation | Citable as "state-of-the-art" mitigation practice for compliance |
| **EU GPAI Code of Practice** | Safety & Security chapter | OpenAI **partially reserves** (has not fully accepted chapter obligations) |
| **California SB 53** | §22757.11 frontier-developer protocol | Preparedness may serve as the required "written protocol" |
| **White House Voluntary Commitments (July 2023)** | Capability-evaluation commitments | Preparedness provides compliance evidence |
| **Seoul Commitments (May 2024)** | Frontier AI safety commitments | Preparedness is OpenAI's corresponding document under this 16-company framework |

## 10. Industry practice: how Preparedness shapes deployment decisions

The following is inferable from public information as the **actual decision chain**:

1. **Pre-training complete** → internal eval + baseline capability benchmarks
2. **Preparedness Team evaluates** → scoring the 3 tracked + 5 watched categories
3. **External red team evaluations (METR / Apollo / UK CAISI / US CAISI)** → reports submitted
4. **SAG deliberation** → advisory memorandum
5. **SSC approval + CEO sign-off** → deployment scope decided
6. **Release of System Card + Preparedness tables** → public disclosure of the conclusions
7. **Ongoing monitoring** → post-deployment re-evaluation (GPT-5.4 → v2.2 addendum)

**Gating cases observed**:

- **o1 release (December 2024)**: Apollo's disclosed "scheming" results led to deployment adjustments (disabling certain tool-use, adding CoT monitoring)
- **Sora 2 (September 2025)**: Safety Systems' influence-operations and child-safety evaluations delayed release by weeks
- **GPT-5.4 (March 2026)**: the High-cyber trigger delayed default ChatGPT roll-out **by several weeks** and moved distribution to TAP mode

These illustrate that Preparedness **has affected timing** but **has not affected whether to release**. Contrasted with Anthropic's **delayed ASL-3 activation** for Opus 4, or DeepMind's **staged CBRN roll-out** for Gemini 3, OpenAI's Preparedness remains the weakest on "stopping."

## 11. Further reading

- **Primary**: [Preparedness Framework v2 PDF](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf); [SSC announcement](https://openai.com/index/establishing-a-safety-and-security-committee/); [Preparedness blog index](https://openai.com/safety/)
- **Academic**: arxiv 2509.24394; Anderljung et al., *Frontier AI Regulation* (2023, arxiv 2307.03718); Hendrycks et al., *An Overview of Catastrophic AI Risks* (2023, arxiv 2306.12001)
- **Critique**: Zvi Mowshowitz, *OpenAI Delenda Est* series; Helen Toner TED 2024; FLI AI Safety Index 2025; *TIME*, "Inside OpenAI's Safety Shake-up" (June 2024)
- **Cross-references**: [OpenAI overview](./), [red-team disclosures](./red-team-disclosures/), [Anthropic safety framework](/companies/anthropic/safety-framework/), [methodology](/methodology/)
