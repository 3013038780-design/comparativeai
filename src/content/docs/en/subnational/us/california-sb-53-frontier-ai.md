---
title: California SB 53 — Transparency in Frontier Artificial Intelligence Act
description: Signed by California on 2025-09-29, effective 2026-01-01; the first US state law specifically targeting frontier AI safety and transparency
ruleName: California SB 53 — Transparency in Frontier Artificial Intelligence Act (TFAIA)
issuer: California State Legislature (Senator Scott Wiener, D-San Francisco); signed by Governor Gavin Newsom
level: state-law
binding: hard
effectiveDate: 2026-01-01
publishedDate: 2025-09-29
originalUrl: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53
relatedTopics:
  - frontier-gpai
  - risk-classification
snapshotDate: 2026-04-21
sidebar:
  label: California SB 53 (2026, Frontier AI)
  order: 5
---

## Summary

**Senate Bill 53 — California *Transparency in Frontier Artificial Intelligence Act* (TFAIA)**, drafted by State Senator **Scott Wiener (D-SF)** and signed by **Governor Newsom on 2025-09-29**, **enters into force on 2026-01-01**.

**Significance**: **the first US state law specifically targeting safety and transparency for frontier AI models**. Following SB-1047 (vetoed by Newsom in 2024), California enters the frontier-AI regulatory space in a more measured but more focused form.

## Scope

### Definition of "Frontier Model"

> "A foundation model trained on a quantity of computing power greater than 10²⁶ integer or floating-point operations (FLOPs)".

→ The same threshold used in Biden EO 14110 (now rescinded). Covers:
- the GPT-4o / o3 / o4 series (OpenAI)
- the Claude Opus / Sonnet series (Anthropic)
- the Gemini Ultra series (Google DeepMind)
- the Llama 3+ series (Meta)
- the Grok series (xAI)

### "Large Frontier Developer"

Frontier-model developers with annual revenue **≥ $500M** bear **heightened obligations**.

## Core obligations

### 1. Frontier AI Framework disclosure

Large frontier developers must **publish an AI Framework on the company website** describing:
- How it incorporates **national standards, international standards, and industry-consensus best practices**.
- Specific references: **NIST AI RMF**, ISO/IEC 42001, MLCommons, etc.
- Alignment with the **White House Voluntary Commitments**, the **EU GPAI Code of Practice**, the **Frontier Model Forum**, and similar frameworks.

### 2. Transparency reports on model releases

On every **new model release or material modification**:
- **Release date**.
- The model's **modalities** (text / vision / audio / multimodal).
- **Intended uses**.
- Any **deployment limitations**.
- **Summary and results of the catastrophic-risk assessment** (large developers only).

### 3. Critical safety-incident reporting

- Report **potential critical safety incidents** to the **California Office of Emergency Services (OES)**.
- Covering: biological weapons, cyber-attacks, loss of model-autonomy control, large-scale manipulation, etc.

### 4. Whistleblower protection

- Employees and contractors who disclose significant **health or safety risks** of frontier models receive **civil and criminal protections**.
- Employers are prohibited from retaliating against whistleblowers.

## Penalties

- **Up to $1,000,000 per violation** (for large developers with annual revenue ≥ $500M).
- The California Attorney General has **sole enforcement authority**.
- **No private right of action**.

## Comparison with SB-1047 (same author — Wiener)

| Dimension | SB-1047 (2024, vetoed) | SB 53 (2026, in force) |
| --- | --- | --- |
| Core | **Mandatory safety obligations** + "kill switch" + reporting | **Transparency + framework disclosure** |
| Scope | "Covered model" (compute + $100M training cost) | "Frontier model" (compute alone) |
| Type of obligation | Substantive capability controls | Documentation + disclosure |
| Penalties | High (including state AG injunctive relief) | Up to $1M / violation |
| Political fate | Vetoed by Governor Newsom 2024-09 | Signed by Governor Newsom 2025-09 |

**Strategy**: a retreat from "mandatory obligations" to "transparency", avoiding the reason given for Newsom's veto ("stifles California innovation") while preserving the regulatory value of "government access to systematic information".

## Corporate response

### Anthropic (headquartered in California)

Published its *SB 53 Compliance Framework* (2025-10):
- Publishes **Usage Policy + RSP + Model Card** as the Framework.
- Internalizes the CA OES critical-safety-incident reporting process.
- Updates whistleblower policy.

### OpenAI / Google DeepMind

- Compliance plans are **expected to be merged with the EU GPAI Code of Practice** (which likewise covers transparency + safety).
- A "single documentation set" strategy spanning EU / CA is gradually taking shape.

### Non-US companies

- Mistral, DeepSeek and others are equally subject if their models cross the 10²⁶ FLOP threshold + are made available in California.

## Conflict with EO 14365

SB 53 is one of the **primary targets** of EO 14365 (2025-12):
- EO 14365 tasks the AI Litigation Task Force with challenging "unduly burdensome" state laws.
- The California Attorney General has explicitly signalled **continued enforcement**.
- Federal lawsuits are expected in 2026-Q1/Q2.

**Nevertheless**: EO 14365 cannot independently preempt state law (it requires Congressional legislation or a Supreme Court ruling); SB 53 **continues to take effect** in the near term.

## Primary text and archives

| Source | Link |
| --- | --- |
| Full text (California legislature) | [leginfo.legislature.ca.gov/.../SB53](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53) |
| Governor's signing statement | [gov.ca.gov/2025/09/29/.../sb-53](https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/) |
| Future of Privacy Forum commentary | [fpf.org/blog/californias-sb-53-the-first-frontier-ai-law-explained](https://fpf.org/blog/californias-sb-53-the-first-frontier-ai-law-explained/) |
| Brookings commentary | [brookings.edu/articles/what-is-californias-ai-safety-law](https://www.brookings.edu/articles/what-is-californias-ai-safety-law/) |
| Anthropic compliance framework | [anthropic.com/news/compliance-framework-SB53](https://www.anthropic.com/news/compliance-framework-SB53) |

## Revision history

| Date | Event |
| --- | --- |
| 2024-09 | SB-1047 vetoed by Governor Newsom |
| 2025-02 | SB 53 re-drafted by Senator Wiener |
| 2025-09-29 | Signed by Governor Newsom |
| 2026-01-01 | In force |
| 2026-Q1+ | Federal litigation expected (against the backdrop of EO 14365) |
