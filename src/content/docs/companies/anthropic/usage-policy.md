---
title: Usage Policy
description: Structure of the Anthropic Usage Policy (AUP), 2022–2025 version history, enforceability of terms, and the "shield or curtain" critique
sidebar:
  order: 1
snapshotDate: 2026-06-28
---

> **Summary**: Anthropic's **Usage Policy (AUP)** is among the **most specific and most enforceable** user-facing policies at any frontier lab.
> The May 2025 revision organises the document into three tiers — **Universal Rules / High-Risk Use Cases / Disallowed Uses** —
> and retains explicit prohibitions across four categories: weaponisation, CSAM, elections, and critical infrastructure.
> This page tracks the version history, enforcement architecture, and critiques drawn from contract law, consumer protection, and contextual-integrity perspectives.

## Document positioning

Anthropic's user-facing terms comprise two layered documents:

- **Usage Policy (consumer)**: governing Claude.ai and API individual / developer accounts
- **Commercial Terms of Service**: governing enterprise API use and distribution through AWS Bedrock and GCP Vertex, including a **compliance flow-down** clause

The two documents share the same prohibited categories but allocate responsibility differently: on the consumer side Anthropic enforces directly; on the enterprise side the customer contractually warrants compliance and bears indemnification exposure.
This page focuses on the public Usage Policy; carveouts under the Commercial Terms are discussed in the industry-practice section.

## AUP three-tier structure (May 2025 version)

| Tier | Term | Nature | Representative clauses |
| --- | --- | --- | --- |
| **Universal Rules** | Universal Rules | Apply unconditionally to all users | No unlawful activity; no infringement of others' rights; no malicious code, fraud |
| **High-Risk Use Cases** | High-Risk Use Cases | Permitted subject to disclosure of human oversight and written informed consent | Judicial decisions, medical diagnostic advice, financial credit, employment decisions, insurance underwriting, educational assessment |
| **Disallowed Uses** | Disallowed Uses | Hard prohibitions; immediate termination on breach | Weapons / CSAM / election manipulation / attacks on critical infrastructure / harm to minors |

This tripartite scheme is not isomorphic to the **EU AI Act risk tiers** (unacceptable / high / limited) — the AUP's "high-risk" category targets **user conduct** rather than the model itself. Even so, the **High-Risk Use Case list** in Anthropic's AUP has become one of the reference templates for the "Transparency" chapter of the GPAI Code of Practice.

### Key prohibitions (May 2025 excerpts)

> Develop, design, produce, or acquire weapons (including nuclear, chemical, biological, or radiological),
> weapons of mass destruction, or other means capable of causing mass casualties.

> Generate child sexual abuse material (CSAM), or material that sexualizes minors.

> Interfere with democratic processes, including generating materials intended to mislead voters about
> the time, manner, or location of voting, or impersonating election officials.

> Compromise the security or integrity of critical infrastructure, including power grids, water systems,
> financial systems, transportation, or emergency services.

**Nuance of the election clause**: the AUP does **not** prohibit "drafting candidate speeches" or "analysing policy options"; what is prohibited is **specific disinformation** (misrepresentation of voting logistics, impersonation of officials). This refinement compared with the 2024 version responded to widespread discussion during the 2024 US election cycle about LLM "political neutrality."

## Version history

| Date | Key changes |
| --- | --- |
| **December 2022 (first release)** | Initial publication as the **Acceptable Use Policy**. Largely principled language with coarse categories. |
| **July 2023** | Added weaponisation sub-categories; aligned with the White House Voluntary Commitments. |
| **November 2023** | Split consumer and commercial tiers; clarified that the API and Claude.ai share one prohibited-use list. |
| **April 2024** | First inclusion of "election-year" temporary provisions (aimed at the 2024 US election and European Parliament elections). |
| **September 2024** | Added **child-safety** sub-clauses (a general prohibition on harm to minors, physical and psychological). |
| **May 2025** | **Rewritten as the three-tier Universal / High-Risk / Disallowed structure**; introduced human-oversight requirements for the High-Risk tier. |

**Observation**: Anthropic's revision cadence is **one substantive amendment every 6–12 months** — slower than typical content-policy cycles, but each revision **preserves backwards compatibility**. This contrasts with OpenAI's October 2025 "rewrite into principles" (see below).

## Contrast with OpenAI's October 2025 Usage Policies rewrite

In October 2025 OpenAI converted its Usage Policies from "categorical enumeration" to "principles-based" language, removing specific prohibitions on categories such as political, medical, and legal advice and replacing them with a residual "comply with local law" standard.

| Dimension | Anthropic AUP May 2025 | OpenAI Usage Policies October 2025 |
| --- | --- | --- |
| **Structure** | Three tiers (universal / high-risk / prohibited) | Flat principles with a small set of prohibitions |
| **Enforceability** | Specific categories are verifiable | Principles-based; depends on case-by-case discretion |
| **Weapons clause** | Explicit CBRN four-category ban | Sub-categories removed; reduced to "unlawful weapons" |
| **Election clause** | Specific (voting disinformation, impersonation of officials) | Principles-based ("honest political information") |
| **Medical / legal** | Classified as High-Risk (permitted with oversight) | No longer a distinct category |
| **Enterprise carveouts** | Allocated through Commercial Terms | Negotiable under Enterprise |

**Industry interpretation**: OpenAI's "fuzzification" likely opens compliance space for **government contracts** (particularly DoD and GSA procurements); the commercial cost of Anthropic's retention of specificity is **higher enterprise-compliance communication burden**, offset by **stronger enforcement predictability**.

## Enforcement architecture

AUP enforcement at Anthropic is built from **three overlapping layers**:

### 1. Model layer: Constitutional-AI-driven refusal

Claude's training objective incorporates **Constitutional AI (Bai et al., 2022)** — self-critique and revision against a fixed set of written "constitutional" principles — which lets the model **internalise** AUP boundaries during inference. Practical effects include:

- **Default refusal** of requests for CBRN weapon synthesis pathways
- Near-100% refusal rates for CSAM requests (public red-team data)
- For election-disinformation requests, the model tends to **clarify intent** before deciding whether to respond

**Limitation**: model-layer refusal is **not a direct implementation** of AUP clauses — it is an **approximate alignment** between Anthropic's training objective and the AUP, not equivalence. The 2025 Apollo Research "alignment faking" paper (see [red-team-disclosures](../red-team-disclosures/)) illustrates how training objectives and deployment behaviour can strategically diverge.

### 2. Platform layer: the Trust & Safety team

Anthropic's Trust & Safety team is responsible for:

- **Ex post audit**: sampling reviews of API logs for accounts flagged for violations (excluding ZDR customers)
- **Abuse response**: handling user reports and researcher disclosures
- **Account termination**: a gradient of sanctions from warning to permanent ban
- **Periodic public disclosure of misuse cases** (such as the November 2024 "Disrupting Claude-assisted cyber-attacks" write-up)

Team size has not been officially disclosed; publicly-estimated figures place it at the industry median (comparable to peer frontier-lab T&S organisations).
Relative to Claude.ai's publicly-estimated monthly active users (in the hundreds of millions), **per-reviewer moderation load is substantially higher than at Meta or TikTok**.

### 3. Contractual layer: joint-and-several liability under the Commercial Terms

Enterprise customers obtain three types of "carveout" under the **Commercial Terms**:

1. **Limited carveouts from AUP clauses**: for example, research institutions may conduct controlled red-teaming
2. **ZDR data handling**: Anthropic does not retain inputs or use them for training
3. **Compliance flow-down**: the customer warrants that its end users also abide by the AUP, and is liable for breaches

This means the AUP is **not a direct obligation on end users** but flows through a contractual chain of **Anthropic → enterprise customer → end user**. Where the customer cannot bind its own end users (e.g. embedded consumer applications), **enforcement in practice reverts to model-layer refusal** — which returns us to the limits of Constitutional AI.

## Academic critique: shield or curtain?

**Helen Nissenbaum's contextual-integrity lens** (*Privacy in Context*, 2010) can be extended to AUP analysis: the AUP presupposes a set of **norms for information flow** ("your request should match some legitimate social context"), but the **general-purpose nature of LLMs** makes such context-binding extremely fragile — the semantics of the same question in "academic writing" versus "real-world harm" are almost impossible to distinguish.

**FTC-style consumer-protection lens**: Section 5 of the FTC Act defines "deceptive / unfair" practices in terms that require **consumers to be able to reasonably understand the terms they are subject to**. Since 2024, several consumer-protection articles have questioned the AUP's invocation of "reasonably foreseeable harm" — when model behaviour itself is not fully predictable, the allocation of responsibility for "foreseeable" harm remains vague.

**Mowshowitz / Zvi "shield or curtain" critique** (*Don't Worry About the Vase*, across 2024–2025): the core argument is that once an AUP is used to answer every "what if the model did X" question, it slides from a constraint on the company into a liability shield — a unilaterally published user policy inherently vests interpretive authority in the publisher.
When disputes arise, Anthropic is both author of the clauses and adjudicator of breach.
**Without an independent arbiter** (by contrast with the FTC / ICO powers to review platform ToS), the AUP functions less as "user-rights protection" and more as "corporate legal-risk management."

**Bender & Gebru line of critique** (extending *Stochastic Parrots*, 2021): the AUP's design choice to **push responsibility back onto the user** amounts to **privatising the social externalities** of large models — a position directly in tension with their argument that responsibility for datasets and models should sit with developers rather than users.

## Industry practice: enterprise negotiation and Commercial Terms carveouts

Large enterprise customers (particularly in finance, healthcare, and consulting) typically negotiate several categories of carveout when signing Anthropic's Commercial Terms:

1. **Research carveouts**: permitting controlled adversarial testing (red-teaming), conditional on sharing findings
2. **Industry-specific relaxation of High-Risk clauses**: financial customers require the model **not to reflexively refuse** credit-model explanations
3. **Log-retention control (ZDR)**: a precondition for finance / healthcare / defence customers
4. **Training-data use prohibitions**: enterprise inputs not used for Anthropic model training (the default, now contractualised)
5. **Government customer special terms**: narrowly-defined use scopes under DoD OTA contracts (specific dollar amounts should be verified against official announcements; see [safety-framework](../safety-framework/) for a discussion of the 2025 defence-cooperation timeline)

**AUP flow-through under AWS Bedrock distribution**: customers invoking Claude through Bedrock remain bound by the Anthropic AUP, while **Bedrock's own AUP** (built on the AWS Acceptable Use Policy) constitutes a **parallel contract**.
In practice, the **intersection of the two policies** determines the permitted use — making compliance audits track two lines simultaneously.

**Google Vertex distribution** is analogous; **Snowflake Cortex** introduces a third AUP layer.
This "**AUP layering**" is an emerging complexity in enterprise AI compliance in 2025–2026, with no industry-wide standardisation in sight.

## Cross-references within this site

- **Anthropic corporate overview**: [Anthropic company page](../)
- **RSP and ASL levels**: [safety-framework](../safety-framework/) — the AUP's prohibited categories and the ASL capability thresholds are **two independent constraints** (the former on users, the latter on model capability)
- **Misuse disclosures**: [transparency-report](../transparency-report/) tracks public data on AUP enforcement
- **Red-team disclosures**: [red-team-disclosures](../red-team-disclosures/)
- **Chinese counterpart**: [Generative AI Interim Measures 《生成式人工智能服务管理暂行办法》](/rules/china/generative-ai-interim-measures/) — Article 4 "provider responsibility" is structurally analogous in spirit to the AUP's enterprise flow-down liability, though the enforcing entity is the state rather than a company
- **Anthropomorphic interaction**: [Anthropomorphic Interaction Services Interim Measures 《拟人化互动服务管理暂行办法》](/rules/china/anthropomorphic-interaction-services/) — the requirements on AI role-play and companion scenarios overlap cross-jurisdictionally with the AUP's "harm to minors" clause
- **EU DSA**: Article 14 DSA's **intelligibility requirement for Terms of Service** will create practical pressure on the EU version of Claude.ai
- **OpenAI comparison**: [companies/openai](../../openai/)

## Key events 2025–Q1 2026

- **May 2025**: the AUP is restructured into three tiers
- **July 2025**: "Misuse Report" addresses multiple fraud cases (including **Vibe Hacking** and **AI job-search fraud**)
- **September 2025**: after the entry into force of California SB 53, Anthropic publicly commits to incorporating AUP enforcement data into the annual disclosures of its **Frontier Compliance Framework**
- **November 2025**: the contrast with OpenAI's October 2025 rewrite draws trade-press attention (*The Information*, *Platformer*) to "AUP divergence"
- **February 2026**: RSP v3 is released (see [safety-framework](../safety-framework/)); the **AUP is not revised in parallel** — meaning that the RSP's capability tier and the AUP's use-case tier are now formally **decoupled**
- **March 2026**: Anthropic discloses its first **AUP account-termination statistics** (2025 annual terminations in the **tens of thousands**, with CSAM and weapons queries as leading causes; precise figures should be taken from the official Misuse Report)

## Ongoing tracking

- Whether the mapping between the AUP and EU AI Act GPAI obligations becomes a stand-alone document
- The degree of public disclosure around government-customer carveouts in the Commercial Terms
- How the High-Risk Use Case human-oversight requirement is actually implemented under Bedrock / Vertex distribution
- Public figures on Trust & Safety team size and moderation efficacy
- Judicial cases actually pursuing AUP-violating accounts
