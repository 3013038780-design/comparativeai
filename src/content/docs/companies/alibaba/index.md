---
title: Alibaba 阿里巴巴
description: Alibaba Tongyi Qwen 通义千问 profile and policy-document snapshot (2026-06-28)
sidebar:
  order: 7
  label: Alibaba 阿里巴巴
snapshotDate: 2026-06-28
---

## Company profile

- **Founded**: 1999
- **Headquarters**: Hangzhou
- **Main AI products**:
  - **Qwen 通义千问 series**:
    - **Qwen 3.5** (released 2026-02-16 on Lunar New Year's Eve): **397B total / 170B active** parameters, natively multimodal; Alibaba claims performance at or above Gemini 3 Pro and GPT-5.2; API input price at **¥0.8 per million tokens** (about one-eighteenth of Gemini 3 Pro)
    - **Qwen 3 series** (released 2025-04)
    - **Qwen 2.5 / 2 / 1** series
  - **Wan 万相**: video generation; Wan 2.6 released 2025-12
  - **Tongyi Lab 通义实验室**: Alibaba's AI R&D hub
  - **Bailian 百炼 (Model Studio)**: enterprise-facing LLM API platform
  - **Quark 夸克**: AI browser / assistant
- **Business model**: e-commerce + cloud (Alibaba Cloud + Tongyi) + payments (Ant Group, separate) + logistics + AI applications

## Strategic positioning: **the open-source-led "Chinese Meta"**

- **Across-the-board Apache 2.0 open source**: Qwen has **400+ open-sourced models, 200,000+ derivatives, and over 1 billion downloads**
- **32% market share of China's enterprise LLM API market**, #1 (2026 Q1 data)
- **Benchmarked against Meta Llama**: open weights + commercialisation services in combination
- **Alibaba Cloud + Tongyi**: dual-engine, with AI as Alibaba Cloud's second growth curve

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | Qwen service agreement + open-source licence | [tongyi.aliyun.com](https://tongyi.aliyun.com/) | — |
| Technical reports | Qwen 3 / 3.5 Technical Report | Qwen site + arXiv | — |
| Open-source models | Qwen GitHub / HuggingFace | [github.com/QwenLM](https://github.com/QwenLM) | — |
| Transparency | CAC algorithm filings (multiple batches) | [cac.gov.cn](https://www.cac.gov.cn/) | — |

## Regulatory-compliance posture

- **China**:
  - Algorithm filing under the [Generative AI Interim Measures](/rules/china/generative-ai-interim-measures/) — Qwen was among the first-wave filed services
  - [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/) compliance
  - Alibaba participates as a **leading company** in the drafting of multiple TC260 standards
- **United States**: Qwen open-source models can be freely downloaded; Quark and other consumer products are not offered in the U.S.
- **European Union**: Qwen open-source models are downloadable in the EU; AI Act Article 53 obligations (training-data summary) would apply if triggered
- **Southeast Asia / Middle East**: active overseas push (Qwen-for-SEA and other localised variants)

## Deep dive: **the Chinese variant of the open-source path**

### The Alibaba open-source narrative and its commercial strategy

Alibaba Qwen is the most successful open-source AI ecosystem from China:

**Metrics** (disclosed as of April 2026):
- **400+ open-source models** (Qwen 1/2/2.5/3/3.5 series + Wan series + multimodal variants)
- **200,000+ derivative models** (fine-tuned on top of Qwen)
- **Over 1 billion downloads** (HuggingFace + ModelScope combined)
- **32% market share of China's enterprise LLM API market**, #1

**Commercial logic:**
- **Open source as customer acquisition**: open weights → developer experimentation → conversion to paid Alibaba Cloud API (analogous to Meta Llama + AWS)
- **Tongyi + Alibaba Cloud dual engine**: AI as Alibaba Cloud's second growth curve
- **Aggressive pricing**: Qwen 3.5 API at ¥0.8 per million input tokens — about one-eighteenth of Gemini 3 Pro

### International compliance pressure on Qwen open source

**Qwen's AI Act compliance position in the EU:**

- Qwen 3.5 training compute **very likely exceeds 10^25 FLOP** → triggers systemic-risk GPAI
- **The open-source exemption in AI Act Art. 53(2)** **does not apply to systemic-risk GPAI**
- In theory, Qwen must meet: adversarial testing, systemic-risk assessment, incident reporting, and cybersecurity
- In practice: Alibaba has **not signed the GPAI Code of Practice** (as of 2026-04-22)
- Whether the EU AI Office will enforce against scenarios where Qwen open weights are downloaded into the EU is an **open boundary**

**Qwen's position in the U.S.:**
- Open-source models are freely downloadable in the U.S.
- Alibaba Cloud International operates in the U.S. but **does not include the Qwen main line** (U.S. compliance risk)
- Potentially affected by future BIS export-control policy targeting "Chinese AI weights"

### The **conspicuous absence** of self-regulation documents

Alibaba is **one of the global #1 open-source AI providers**, yet it has **not published a standalone safety-framework document**:
- No RSP / Preparedness / FSF equivalent
- No standalone AI Principles (only a sub-section embedded in the Alibaba ESG report)
- Not a participant in the Frontier Model Forum
- No public red-team disclosure mechanism

**Explanations:**
- **Regulator interaction is primary**: governance obligations discharged via CAC filings and TC260 participation
- **Open source is itself transparency**: technical reports, model weights, and training details are public
- **Commercial pragmatism**: similar to Meta / Mistral, **avoiding "commitments that constrain future flexibility"**

### Compared with Meta / Mistral's open source

| Dimension | Alibaba Qwen | Meta Llama | Mistral |
| --- | --- | --- | --- |
| Flagship open source | Qwen 3.5 (Apache 2.0) | Llama 3/4 (Llama Community License, use restrictions) | Mistral Large 3 (MRL, research-only) |
| Open-source depth | **Deepest** (including flagship) | Medium (commercial with conditions) | Medium (flagship closed) |
| Self-regulation document | **None** | Responsible Use Guide (weak) | None formal |
| Regulatory engagement | China: strong; elsewhere: weak | U.S.: medium; EU: signed CoP with partial reservations | EU: strong; signed CoP |
| Business model | Alibaba Cloud subscription | Advertising + Meta products | API + Mistral Compute |

## Company posture, in brief

- **Commercial logic of the open-source strategy**: open source for acquisition + cloud services for monetisation; closer to Meta + AWS than to Anthropic
- **No standalone safety framework**: governance obligations discharged via domestic compliance and technical reports
- **Alignment with national strategy**: TC260 standard participation, support for national AI industrial policy
- **Industrial-AI orientation**: B2B and vertical applications (finance, healthcare, manufacturing) over consumer AI
- **International compliance remains to be observed**: unsigned GPAI CoP; potential BIS impact

## Comparison with Meta / Mistral open source

| Dimension | Alibaba Qwen | Meta Llama | Mistral |
| --- | --- | --- | --- |
| Flagship parameters | 397B total / 170B active | ~405B | 675B / 41B active |
| License | Apache 2.0 | Llama 3 Community License (use restrictions) | Apache 2.0 (partial) |
| Home jurisdiction | China | US | France (EU) |
| Business model | Cloud + subscription | Advertising + Meta products | API + Mistral Compute |
| Number of open-source models | 400+ | ~15 | ~20 |
