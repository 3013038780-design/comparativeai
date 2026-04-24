---
title: GPAI Code of Practice (EU AI Act)
description: Convened by the EU AI Office, finalized 2025-07-10 and adopted by the Commission and AI Board on 2025-08-01; Code of Practice authorized under AI Act Article 56 — signing produces a presumption of compliance
ruleName: General-Purpose AI Code of Practice (GPAI CoP)
issuer: European AI Office (DG CNECT, European Commission) · drafted through multi-round consultation involving approximately 1,000 participants
level: soft-law-code
binding: soft
effectiveDate: 2025-08-02
publishedDate: 2025-07-10
originalUrl: https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
relatedTopics:
  - frontier-gpai
  - data-training
  - content-labeling-provenance
snapshotDate: 2026-04-21
sidebar:
  label: GPAI Code of Practice (2025)
  order: 5
---

## Summary

The **General-Purpose AI Code of Practice (GPAI CoP)** was convened by the **EU AI Office** pursuant to
Article 56 of the [EU AI Act](./ai-act/); following multiple rounds of consultation with **roughly
1,000 participants**, it was **finalized on 2025-07-10**. The **Commission and the AI Board adopted
Adequacy Decisions on 2025-08-01**, synchronized with the **2025-08-02 entry into application of the
AI Act's GPAI provisions**.

**Nature**: a **voluntary instrument**, but **signing produces a presumption of compliance**
(Article 56(8)). Non-signatories must demonstrate compliance on their own, at higher cost.

## Three-chapter structure

### Chapter 1 · Transparency

**Scope**: **all** GPAI model providers (regardless of size / open-source status / compute).

Content:
- Technical documentation (operationalizing the Annex XI template)
- Downstream documentation (operationalizing the Annex XII template)
- **"Sufficiently detailed summary"** of training data (template published by the AI Office in 2024-07)
- Public policy statements

### Chapter 2 · Copyright

**Scope**: all GPAI model providers.

Content:
- Compliance with **EU DSM Copyright Directive** Article 4 (commercial TDM + machine-readable opt-out)
- Recognize and honor **rightsholder opt-out declarations** (robots.txt, ai.txt, etc.)
- **Standardized opt-out recognition workflows**
- Dispute-resolution mechanism with rightsholders

### Chapter 3 · Safety and Security

**Scope**: applies **only** to providers of **GPAI models with systemic risk** (presumptively **≥ 10²⁵ FLOP**;
currently about **5-15 companies**).

Content:
- **Adversarial testing / red teaming**
- **Systemic-risk assessment and mitigation**
- **Serious-incident reporting** (Article 56)
- **Cybersecurity** (model weights + physical infrastructure)
- Post-deployment monitoring

## Signatory status (as of 2025-08-01)

The **AI Office's official signatory list** was published on 2025-08-01. Principal signatories (based on publicly available information):

| Company | Signatory status |
| --- | --- |
| **Anthropic** | ✅ Signed in full |
| **Google DeepMind** | ✅ Signed in full |
| **Microsoft** | ✅ Signed in full |
| **OpenAI** | ✅ Signed, with reservations on certain chapters |
| **Meta** | ⚠️ Signed but dissenting on the **Copyright chapter** |
| **xAI** | ⚠️ Signed but dissenting on the **Safety and Security chapter** |
| **Mistral** | ✅ Signed in full |
| Non-EU companies (DeepSeek, Zhipu, ByteDance) | ❌ No public signatures |

## Operational meaning of the presumption of compliance

Under **AI Act Article 56(8)**:

- **Signing + adherence = presumption of compliance**: the AI Office and member-state authorities
  **presume the provider meets Articles 53-55 obligations** during enforcement
- **Non-signatories**: must submit their own documentation; likely face higher documentation burden and stricter enforcement scrutiny
- **Partial dissent**: still must self-evidence compliance for dissented chapters

## Intersection with other frameworks

### Comparison with the United States

- **Biden Voluntary Commitments (2023-07)**: signed by 8 companies; lost policy backing after EO 14110's revocation
- **GPAI CoP (2025)**: formal legal authority (AI Act Article 56); signing has substantive legal effect
- **Transatlantic compliance**: for companies that signed the 2023 White House Commitments, signing the GPAI CoP enables **documentation reuse**

### Comparison with China

- **TC260-003-2024**: de facto mandatory technical specification, comparable to a "Code of Practice" but formally a technical standard
- **AI Safety Governance Framework 1.0 / 2.0**: cross-scenario risk classification, comparable to the CoP's Safety chapter but broader in scope

### Relation to the G7 Hiroshima Process

- The Hiroshima Code of Conduct (2023-10) is an international voluntary framework
- The GPAI CoP absorbs Hiroshima principles but is **more concrete and more enforceable**

## Timeline

| Date | Event |
| --- | --- |
| 2024-08-01 | EU AI Act enters into force; Article 56 mandates the CoP convening |
| 2024-10 | First draft |
| 2025-04 | Second draft |
| 2025-07-10 | **Final version published** |
| 2025-08-01 | Commission + AI Board Adequacy Decisions; signatory list published |
| 2025-08-02 | AI Act GPAI provisions (Articles 51-56) become applicable |
| 2026-2027 | Iteration based on practice |

## Text and archives

| Source | Link |
| --- | --- |
| Commission GPAI CoP page | [digital-strategy.ec.europa.eu/.../contents-code-gpai](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai) |
| Final version (official) | [code-of-practice.ai](https://code-of-practice.ai/) |
| Signatory task force | [digital-strategy.ec.europa.eu/.../signatory-taskforce-gpai](https://digital-strategy.ec.europa.eu/en/policies/signatory-taskforce-gpai-code-practice) |
| Invitation to sign | [digital-strategy.ec.europa.eu/.../invites-providers-sign](https://digital-strategy.ec.europa.eu/en/library/ai-office-invites-providers-sign-gpai-code-practice) |
| Latham & Watkins analysis | [lw.com/.../eu-ai-act-gpai-model-obligations](https://www.lw.com/en/insights/eu-ai-act-gpai-model-obligations-in-force-and-final-gpai-code-of-practice-in-place) |
| Skadden analysis | [skadden.com/.../eus-general-purpose-ai-obligations](https://www.skadden.com/insights/publications/2025/08/eus-general-purpose-ai-obligations) |
