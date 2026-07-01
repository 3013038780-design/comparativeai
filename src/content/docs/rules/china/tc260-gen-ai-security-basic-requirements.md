---
title: Basic Security Requirements for Generative AI Services (TC260)
description: TC260-003-2024 technical specification; the de facto standard for generative-AI filing and security assessment, covering training data, model safety, and procedural safety
ruleName: Basic Security Requirements for Generative AI Services (TC260-003-2024) (《生成式人工智能服务安全基本要求》)
issuer: National Information Security Standardization Technical Committee (TC260 / 全国网络安全标准化技术委员会)
level: technical-standard
binding: soft
effectiveDate: 2024-02-29
publishedDate: 2024-02-29
originalUrl: https://www.tc260.org.cn/
relatedTopics:
  - frontier-gpai
  - data-training
  - risk-classification
snapshotDate: 2026-06-28
sidebar:
  label: TC260 Basic Security Requirements for Generative AI (2024)
  order: 30
---

> **📑 Legal hierarchy**: Level 5 · Technical standard (voluntary · **de facto mandatory**) | **Issuance**: National Information Security Standardization Technical Committee (TC260) | **Effective**: 2024-02-29 | **Character**: **soft in form, hard in practice**

> **⚠️ Hierarchy note**: Nominally a **voluntary technical specification** (Level 5, the lowest rank); but because CAC uses it as the yardstick for filing (*备案*) review, failing it means no filing — which means no public-facing service — so it operates as a **de facto hard constraint**. This is the canonical case for the "hard law / soft law" categorization framework on this site. See [Index of Chinese Rules](/rules/china/#the-legal-hierarchy-at-a-glance) and [Methodology §2](/methodology/#hard-vs-soft).

## English Summary

**TC260-003-2024 "Basic Security Requirements for Generative AI Services"**, published by China's National Information Security Standardization Technical Committee (TC260) on 2024-02-29, is a **de facto mandatory** technical specification for generative AI service providers seeking algorithmic filing (算法备案) and security assessment (安全评估) under the 2023 Generative AI Interim Measures. It specifies thresholds for (i) training-data corpus legality (< 5% illegal content), (ii) source diversity, (iii) annotator training and test banks, (iv) 31 categories of risk, (v) model-level security testing with a ≥90% pass rate on a 2000-item safety evaluation set. Although technically a voluntary standard, CAC uses it as the benchmark for filing approval.

## Overview

TC260-003-2024 is the **de facto compliance baseline** for Chinese generative AI:

- the *Generative AI Interim Measures* require "security assessment" and "algorithm filing," but **contain no technical specification of their own**;
- TC260-003 fills that gap and serves as CAC's scoring basis in filing review;
- legally it is "voluntary" (soft), but failing it means failing filing → **de facto hard law**.

This is the textbook case in this site's [hard-law / soft-law classification](/methodology/#hard-vs-soft) of "soft law with hard constraint."

## Core Technical Requirements (Summary)

### Corpus (training data) safety

- **Source legality**: each corpus source shall be recorded, with IP / authorization / user-consent chain documented.
- **Corpus sampling**: from any given source, random samples of 4,000 items; **the proportion containing illegal or harmful information shall not exceed 5%**, otherwise the source is "unusable."
- **Source diversity**: Chinese-language sources shall not fall below a specified count; coverage across types (web pages / books / papers) is required.

### Annotation safety

- **Annotators**: must be trained and assessed;
- **Annotation rules**: both functional and safety-related annotation;
- **Sampling checks**: accuracy of annotations is spot-checked.

### Model safety

- **31 categories of safety risk**: politics, violent terrorism, ethnic discrimination, pornography, vulgarity, minors' protection, privacy, IP, etc.
- **Evaluation set**: construct a human-reviewed test set of **≥ 2,000 items** covering the 31 categories above.
- **Pass-rate requirements**: generated-content safety pass rate **≥ 90%**; refusal rates to be kept within a reasonable band (neither too high nor too low).
- **Keyword libraries**: maintain sensitive-term / keyword blocklists.

### Procedural safety

- User registration, real-name verification;
- Mechanisms for detection and disposition of unlawful content;
- Complaints and reports response;
- Security-incident contingency plans.

## De Facto Status

In filing review CAC uses TC260-003 as its yardstick. **Services that fail cannot go live for the public.** For large-model firms, TC260-003's threshold effectively determines:

- which training-data sources are usable (distinguishing Chinese and English-language requirements);
- the scope and rigor of red-team testing;
- which prompts must be refused.

## Evolution

The TC260 series continues to expand:

- TC260-003-2024 (this page): general requirements;
- TC260-004: training-data-specific requirements (in preparation);
- TC260-005+: industry / scenario-specific requirements (in preparation).

Version updates and the next draft should be tracked via announcements at [tc260.org.cn](https://www.tc260.org.cn/).

## Relationship with Other Rules

- **Generative AI Interim Measures** (2023): the upstream departmental rule; TC260-003 is its technical implementing spec.
- **Algorithm Recommendation Provisions / Deep Synthesis Provisions**: filing reuses the same system, but TC260-003 focuses primarily on generative AI.
- **GB 45438-2025 labeling national standard**: a parallel national standard focused on "labeling" technology, while TC260-003 focuses on "content safety."
- **PIPL / DSL**: TC260-003's "corpus legality" rests on these two laws.

## Source Text and Translations

| Language | Source | Link |
| --- | --- | --- |
| Chinese (original) | TC260 | https://www.tc260.org.cn/ |
| English | Stanford DigiChina translation | https://digichina.stanford.edu/ |
| English analysis | Matt Sheehan (Carnegie) "China's AI Regulations and How They Get Made" | https://carnegieendowment.org/ |

## Version History

| Date | Event |
| --- | --- |
| 2023-10 | Draft for public comment |
| 2024-02-29 | Officially released |
