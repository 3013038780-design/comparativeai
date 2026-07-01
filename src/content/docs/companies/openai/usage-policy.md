---
title: Usage Policy
description: Structure of the OpenAI Usage Policies, the major October 2025 rewrite, erosion of the military prohibition, and enterprise-tier layering
sidebar:
  order: 1
snapshotDate: 2026-06-28
---

> **Snapshot**: based on the 29 October 2025 version of [openai.com/policies/usage-policies](https://openai.com/policies/usage-policies/),
> with reference to [ChatGPT Enterprise Privacy](https://openai.com/enterprise-privacy/) and the Commercial Terms (August 2025 amendment).

## 1. Current structure (after the October 2025 rewrite)

OpenAI has reorganised its user- and developer-facing policy into a **three-layer parallel document system**:

| Tier | Document | Scope | Positioning |
| --- | --- | --- | --- |
| **Universal terms** | Universal Policies | All product users | Compliance and anti-abuse floor |
| **Usage policy** | Usage Policies | ChatGPT end users and API customers | Scenario-specific prohibitions and duties |
| **Building terms** | Building with our products | Developers building on the OpenAI API | Deployment responsibility, content labelling, disclosure obligations |

This structure was carved out of the **single pre-2024 Usage Policy document**. The official rationale is to "make developer duties and consumer duties clearer"; the critical reading is that **splitting the document means no single text lets the reader know all prohibited conduct at one glance**, and increases **the complexity of cross-references among clauses**.

### Core list of prohibitions and restrictions

The clear prohibitions retained in the October 2025 version fall into roughly six categories:

1. **Weapons and critical infrastructure**: "weaponisation" development of military weapons systems (see §4 on the military-prohibition erosion), CBRN weapon R&D, and attacks on critical infrastructure
2. **Child safety**: CSAM (child sexual abuse material), sexualisation of minors, **grooming-style interactions**
3. **Political integrity**: **impersonating candidates or officials**, mass political-persuasion campaigns, **automated generation of election disinformation** (more generalised wording than the 2024 version)
4. **Privacy and data**: unauthorised facial recognition, biometric scraping, **re-identification** from public data
5. **Automated high-risk decisions**: **terminal decisions without human review** in law, medicine, finance, employment, etc.
6. **Financial and fraud**: financial fraud, academic fraud, forged identity documents

## 2. Version history

| Version | Date | Key change |
| --- | --- | --- |
| First release | March 2022 | Published with the public release of the GPT-3 API |
| 2023-03 update | March 2023 | Added "prohibition on generating targeted election-campaign materials" |
| **Major 2024-01 update** | **10 January 2024** | **Quietly deleted** the explicit prohibition on "using our services for military and warfare" (retaining only "weapons development" and "harm to others") |
| 2024-10 | October 2024 | Unified default behaviour across the three product lines (ChatGPT / API / GPT Store) |
| **2025-10 rewrite** | **29 October 2025** | **Language simplification, clause consolidation**; converted the "prohibited categories" into a "principles + examples" structure |

> The January 2024 change was first reported by *The Intercept* ("OpenAI Quietly Deletes Ban on Using ChatGPT for 'Military and Warfare'") and marks the **transition of OpenAI from a "universal mission" narrative to "national-security capitalism."**

## 3. The "simplification–blurring" trade-off in the October 2025 rewrite

The October 2025 rewrite is not mere linguistic polishing: it consolidates **a large number of previously itemised prohibited scenarios** (e.g. "prohibition on minors' insurance pricing," "prohibition on micro-targeted political advertising") **into a small set of principles** ("no unlawful activity or activity that infringes others").

### Official narrative vs. critical reading

**OpenAI's official explanation** (blog post [Updates to our Usage Policies](https://openai.com/index/updated-usage-policies/)):

- "Clearer, more readable"
- "Avoiding redundant enumeration of conduct already covered by law"
- "Providing enterprise customers with a consistent global baseline"

**Academic and industry critiques** enter from three angles:

1. **Contextual integrity (Nissenbaum, 2010)**: Helen Nissenbaum's contextual-integrity theory notes that norms derive binding force from **context-specific commitments**; dissolving specific clauses into "comply with local law" effectively **outsources policy to jurisdictional plurality**, which **loses predictability** in cross-border deployment.

2. **"Vagueness → enforcement discretion"**: Daniel Solove (GWU) has repeatedly noted in the privacy-law context that the vaguer the terms, the **greater the deference regulated parties owe to enforcers**. The same logic applies to OpenAI: deleting specific prohibited categories does not loosen actual enforcement but transfers decision-making from **contractual clauses** to the **discretion of the internal Trust & Safety team**.

3. **Direct contrast with the Anthropic AUP**: Anthropic's Usage Policy (May 2025 edition) moved in the **opposite direction** — it enumerates High-Risk Use Cases in greater detail and sets out "how enterprise customers can obtain carveouts through the Commercial Terms." The two labs' 2025 trajectories are nearly opposite: **OpenAI removes specificity and enlarges its own discretion**; **Anthropic adds specificity and makes customer outcomes more predictable**.

> The most important question about a use policy is not what it prohibits, but **who decides** when something falls within a prohibition.
> — adapted from Kirsten Martin, *Ethics of Data and Analytics* (2022)

## 4. The factual disappearance of the military prohibition

Before 2023, the OpenAI Usage Policy expressly prohibited "activity that has high risk of physical harm, including: **weapons development**; **military and warfare**." The 10 January 2024 update **removed** the "military and warfare" phrasing, retaining only "weapons development" and "harm to others."

### From "removing the prohibition" to "active engagement"

| Date | Event |
| --- | --- |
| 10 January 2024 | Usage Policy removes the "military and warfare" phrasing |
| Late 2024 | Collaboration with Anduril Industries on counter-drone systems for the US military |
| Mid-2025 | OTA contract signed with the US Department of Defense ("Civil Harmony" and other frontier-AI deployments for logistics and cyber defence; specific dollar amounts should be verified against official announcements) |
| October 2025 | The Usage Policy rewrite **adds** "national-security use by the US government and allies" as a **permitted** scenario |
| Q1 2026 | GSA / CIA contract rumours (unconfirmed) |

**Critiques** (Stuart Russell BBC interview 2024; Future of Life Institute 2025 Annual Report):

- The pivot from "we don't do military" to "we are a national-security tool" is accompanied by **no public value-based re-argumentation**
- A **stark contrast** with the 2018 Google Project Maven episode (employees protested → company withdrew)
- It suggests that post-2023 OpenAI's corporate culture **no longer contains internal dissent at Maven-scale**

## 5. Enterprise fragmentation: one policy, many faces

The Usage Policy **is not monolithic** — across OpenAI's product tiers the clause set that actually binds varies by product:

| Product | Default Usage Policy | Overridable by contract | Default data use |
| --- | --- | --- | --- |
| ChatGPT Free / Plus | Fully applicable | No | May be used for training (Plus can opt out) |
| ChatGPT Team | Fully applicable | Partially | **Not used for training** |
| ChatGPT Enterprise | **Some clauses customisable by MSA** | **Yes** | **Not used for training** |
| API (default) | Fully applicable | No (standard terms) | **Not used for training** (default since March 2023) |
| API Enterprise | **Covered by Commercial Terms** | **Yes** | **Not used for training** |

**Practical implication**: ChatGPT Enterprise customers may, through the combined **Master Services Agreement (MSA)** and **Commercial Terms**, **obtain carveouts** from some default Usage Policy clauses (e.g. default limits on certain "high-risk automated decisions"). This is openly discussed in enterprise legal-compliance circles but is **not disclosed in the text of the Usage Policy** — for external observers, **the public policy and the enterprise-contract policy are two different systems**.

## 6. Enforcement: the internal Trust & Safety mechanism

Enforcement of the Usage Policy depends on OpenAI's **Trust & Safety** team (industry-median size, comparable to peer organisations at Meta and Google; exact headcount not publicly disclosed). Enforcement mechanisms include:

1. **Automated detection**: the Moderation API (published 2023, upgraded in 2024 to `omni-moderation-latest`) classifies inputs / outputs
2. **Human review**: escalation to humans may lead to **API-key suspension**, **account ban**, **organisation-wide ban**
3. **GPT Store removal**: removal of offending custom GPTs from the GPT Store (cumulative 2024–2025 removal counts not disclosed)
4. **Ecosystem eviction**: for B2B products calling the API, **wholesale revocation of access**

Known large-scale enforcement events:

| Date | Action | Scale |
| --- | --- | --- |
| February 2024 | Bans on North Korean, Iranian, Russian, and Chinese state-actor accounts | 5 operations, dozens of accounts |
| May 2024 | Influence-operation accounts including "Bad Grammar" and "Doppelganger" | 5 networks |
| October 2024 | First *Influence and Cyber Operations Report* aggregation | 20+ operations to date |
| February 2025 | Disclosure of the "Peer Review" influence operation targeting ChatGPT (PRC-linked) | 1 operation |
| June 2025 | Bans on Sora 2 CSAM generators | Not disclosed |

See the [transparency report](./transparency-report/) for detail.

## 7. Industry practice: how the policy shapes the product

Usage-Policy clauses **directly determine engineering decisions**; the following coupling chains are observable from public signals across 2023–2026:

1. **"Prohibit automated high-risk decisions"** → ChatGPT Enterprise **mandatory logs + audit export**; default "not-a-decision advice" disclaimers for medical / legal scenarios
2. **Child-safety floor** → age-based filtering in Sora video generation, the DALL-E **face policy**, and the ChatGPT **minors-conversation mode** (launched September 2025)
3. **"Election disinformation"** → during the 2024 US election, ChatGPT **redirected election-related queries to CanIVote.org** (later criticised for "avoiding substantive answers")
4. **"CSAM zero tolerance"** → **CSAM hash scanning** and **training-data filtering** in collaboration with Thorn and NCMEC (April 2024 joint statement)
5. **Residual weapons prohibition** → still prohibits **consumer-level** weapon-development use; **national-security exceptions** handled via Commercial Terms rather than the public Policy

## 8. Comparison with peer frontier labs

| Dimension | OpenAI Usage Policies (October 2025) | Anthropic AUP (May 2025) | Google AI Usage Requirements | xAI Acceptable Use |
| --- | --- | --- | --- | --- |
| Structure | Universal / Usage / Building three tiers | Single document + High-Risk annex | By product (Gemini, Vertex) | Minimal single document |
| Military use | **Permits national-security use** | **Express prohibition** of weaponisation | Prohibits core control of weapons systems | **No explicit prohibition** |
| Political content | Principles-based ban on "manipulation" | Ban on **substantive manipulation** + allows genuine drafting | Bans "deceptive political content" | Weak constraints |
| CSAM | Zero tolerance | Zero tolerance | Zero tolerance | Zero tolerance |
| Degree of specificity | **Low (post-October 2025)** | **High** | Medium | **Very low** |
| Enterprise-carveout pathway | MSA + Commercial Terms | Commercial Terms | Enterprise contracts | Opaque |

**Cross-firm conclusion**: Anthropic's AUP remains the **industry ceiling** on specificity and public enforcement disclosure; OpenAI, after the October 2025 rewrite, is closer to Google's "principles + industry guidance" model; xAI **systematically refuses** to make the AUP a verifiable commitment.

## 9. Regulatory interface: the Usage Policy and hard law

The Usage Policy does not sit in a vacuum; it overlaps with the following hard-law regimes:

- **EU AI Act** Art. 5 (prohibited uses), Art. 51–55 (GPAI systemic-risk obligations): the Usage Policy's coverage of **prohibited uses** is typically stricter than the AI Act
- **EU DSA** Art. 14, 34–35 (VLOP Terms & Conditions transparency and risk assessment): after ChatGPT was designated a VLOP, Usage Policy **amendments require prior risk assessment** (OpenAI's October 2025 rewrite **did not publish a complete risk assessment**, which scholars have questioned)
- **California SB 53** §22757.11 (frontier-developer obligations): requires disclosure of "foreseeable material risk" mitigation, with the Usage Policy as one of the cited compliance documents
- **China's Generative AI Interim Measures 《生成式人工智能服务管理暂行办法》** Art. 4, 10, 14: OpenAI does not offer services in mainland China, but indirect access through the **Azure international edition** triggered a **Cyberspace Administration of China (CAC) notice in October 2024** (details not public)

## 10. Further reading

- **Primary**: [OpenAI Usage Policies](https://openai.com/policies/usage-policies/), [Updates blog October 2025](https://openai.com/index/updated-usage-policies/), [Commercial Terms](https://openai.com/policies/business-terms/)
- **Secondary scholarship**: Helen Nissenbaum, *Privacy in Context* (2010); Kirsten Martin, *Ethics of Data and Analytics* (2022); Solove, *The Myth of the Privacy Paradox* (2021)
- **News and investigations**: *The Intercept*, "OpenAI Quietly Deletes Ban on Using ChatGPT for 'Military and Warfare'" (12 January 2024); *TIME*, "Inside OpenAI's Military Turn" (July 2025)
- **Cross-references**: [OpenAI overview](./), [safety framework](./safety-framework/), [transparency report](./transparency-report/), [Anthropic Usage Policy](/companies/anthropic/usage-policy/), [company practice overview](/companies/)
