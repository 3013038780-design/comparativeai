---
title: Company Practice
description: Industry self-regulation at leading AI companies, grouped by jurisdiction — the soft-law companion to binding rules
sidebar:
  order: 5
---

## Why "Company Practice" is a separate axis

**Voluntary industry commitments are one of the largest pillars of contemporary AI governance.** In several
critical areas, company-authored frameworks, policies, and commitments have **predated** and **shaped**
the regulatory texts that followed:

- **Anthropic's Responsible Scaling Policy** (RSP, Sept 2023) preceded the EU AI Act GPAI chapter (2024) and California SB 53 (2025)
- The **NIST AI RMF** (2023) exported a "risk management" paradigm that several U.S. states later adopted as a rebuttable compliance-by-reference path
- The **Frontier Model Forum** (2023) supplied the shared industry vocabulary underneath the White House Voluntary Commitments
- The **GPAI Code of Practice** (2025) turned voluntary industry practice into a formal presumption-of-conformity tool under the AI Act

**But 2025–2026 shows structural erosion:**
- Anthropic **RSP v3** (Feb 2026) **removes the pause commitment**
- OpenAI **Preparedness v2** (Apr 2025) **simplifies thresholds** (deleting Low / Medium tiers)
- Google DeepMind (2024) **deleted its military-use prohibition** from the AI Principles
- xAI **rejects** the industry self-regulation paradigm outright

This exposes the inherent limit of voluntary commitments: **absent binding law, the "floor" of self-regulation
is set by the least self-disciplined player in the market.**

This axis archives **publicly released, durably accessible company documents** under that structural framing.
Each company page organises materials in the same **five categories**.

See [Methodology §3–4](/en/methodology/#company-attribution) for archival principles and attribution rules.

## Included companies (by jurisdiction)

### United States

#### Model layer (frontier labs)

| Company | Safety framework | Positioning | Page |
| --- | --- | --- | --- |
| **Anthropic** | **RSP v3** (Feb 2026, pause commitment withdrawn) | Safety-first | [anthropic](/en/companies/anthropic/) |
| **OpenAI** | **Preparedness v2** (Apr 2025, simplified thresholds) | Commercial acceleration | [openai](/en/companies/openai/) |
| **Google DeepMind** | **FSF v3** (Apr 2026, **expanded** CCL + TCL) | Balanced | [google-deepmind](/en/companies/google-deepmind/) |
| **xAI** | Weak (no counterpart document) | **Anti-self-regulation** | [en/companies/xai](/en/companies/xai/) |

#### Infrastructure layer

| Company | Role | Positioning | Page |
| --- | --- | --- | --- |
| **NVIDIA** | **Single-vendor dominance in AI GPUs** + export-control focal point | "Selling shovels" in the AI gold rush | [nvidia](/en/companies/nvidia/) |

### European Union

| Company | Safety framework | Positioning | Page |
| --- | --- | --- | --- |
| **Mistral AI** (France) | No standalone framework; relies on **open-source + GPAI CoP signature** | Sovereign European AI | [mistral](/en/companies/mistral/) |

### China (PRC)

#### Platform incumbents

| Company | Safety framework | Positioning | Page |
| --- | --- | --- | --- |
| **Baidu 百度** | None standalone; **participates in national standard-setting** (TC260) | National-team player | [baidu](/en/companies/baidu/) |
| **Alibaba 阿里巴巴** | None standalone; **open-source across the line** (Qwen 通义千问) | Open-source ecosystem | [alibaba](/en/companies/alibaba/) |
| **ByteDance 字节跳动** | None standalone; **embedded compliance** (CAC + Party committee) | Globally fragmented | [bytedance](/en/companies/bytedance/) |
| **Tencent 腾讯** | None standalone; **full-line multimodal open source** (Hunyuan 混元) | Platform-embedded AI | [tencent](/en/companies/tencent/) |

#### AI-native startups

| Company | Safety framework | Positioning | Page |
| --- | --- | --- | --- |
| **ZhipuAI 智谱** | None standalone; **listed on HKEX 2513.HK** | National-team + academic heritage | [zhipuai](/en/companies/zhipuai/) |
| **Moonshot 月之暗面** | None standalone; open-source Kimi K2.5 | Long-context + paid breakout | [moonshot](/en/companies/moonshot/) |
| **MiniMax** | None standalone; Talkie is an overseas hit | AI companionship + going global | [minimax](/en/companies/minimax/) |
| **DeepSeek** | None standalone; **maximalist open source** (MIT) | **The "DeepSeek moment" of Jan 2025** | [deepseek](/en/companies/deepseek/) |

## Three models of self-regulation, compared

**U.S. frontier labs — "structured self-regulation":**
- Publish standalone safety frameworks (RSP / Preparedness / FSF)
- Publicly commit to a capability-threshold → mitigation mapping
- Coordinate through industry venues (Frontier Model Forum, GPAI CoP)
- 2025–2026: broad **erosion** (Anthropic withdraws pause, OpenAI simplifies, Google deletes the military prohibition)

**EU — "institutionalised self-regulation":**
- Few standalone corporate frameworks (Mistral has no RSP-equivalent either)
- Presumption of conformity achieved via **GPAI Code of Practice signature**
- **Open source + hard law** used as a joint transparency mechanism
- Self-regulation tightly coupled to the AI Act

**China — "embedded self-regulation":**
- **No** standalone corporate safety framework documents
- Self-regulation equals participation in national standard-setting (TC260-003, the AI Safety Governance Framework)
- Compliance delivered through CAC algorithm filings (算法备案) plus internal Party-committee coordination
- **Open source functions as the de facto transparency mechanism** (Alibaba Qwen 通义千问, part of Baidu ERNIE 文心, DeepSeek maximalist)

## Cross-jurisdictional observations (2026 Q1 snapshot)

### GPAI Code of Practice signature matrix

| Company | Transparency | Copyright | Safety & Security |
| --- | --- | --- | --- |
| Anthropic | Signed | Signed | Signed |
| Google DeepMind | Signed | Signed | Signed |
| Microsoft | Signed | Signed | Signed |
| Mistral | Signed | Signed | Signed |
| OpenAI | Signed | Signed | Signed with partial reservations |
| Meta | Signed | Objected | Signed |
| xAI | Signed | Signed | Objected |
| Alibaba / Baidu / DeepSeek / ByteDance | Not signed | Not signed | Not signed |

### Compute thresholds and compliance pressure

- **California SB 53** 10^26 FLOP threshold: Claude Opus, GPT-5, Gemini Ultra, Grok 4, Llama 4 Max
- **EU AI Act** 10^25 FLOP systemic-risk threshold: the above plus Mistral Large 2/3, and **likely** Qwen 3.5 and ERNIE 5.0
- **China filings (备案)**: services with ≥ 1 million users trigger mandatory safety assessment (Art. 22 of the 2026-04 Anthropomorphic Interaction Measures 人工智能拟人化互动服务管理暂行办法)

### Narrative differentiation

- **"Safety first"**: Anthropic
- **"Acceleration first"**: OpenAI, xAI
- **"Balanced safety"**: Google DeepMind
- **"Sovereign AI"**: Mistral
- **"Serving the state"**: Baidu
- **"Open-source ecosystem"**: Alibaba, DeepSeek
- **"Geopolitical crossfire"**: ByteDance (involuntarily)

## Five-category archive structure (per company)

1. **Usage / Acceptable Use Policy** — what users may and may not do with the model
2. **Model Card / System Card** — capabilities, training data, evaluations
3. **Safety Framework** — responsible scaling, preparedness, frontier-risk management
4. **Transparency Report** — periodic disclosures (data requests, content moderation, etc.)
5. **Red-Team & Eval Disclosures** — third-party evaluations and red-team results

Each item carries a `snapshot_date`, a link to the original source, and an archived copy on this site (PDFs in `public/archives/`).
**No normative framing** — we list the original clauses and factual differences, not editorial judgments.

## v2 roadmap (pending a v1 quality review)

After strict AI-relevance filtering, the following companies may be added later:

- **United States**: Meta (the Llama team — important, but open-source governance can be represented through Mistral for v1)
- **European Union**: Aleph Alpha, Stability AI, Black Forest Labs (**confirmed not being added**)
- **China**: Baichuan 百川智能, StepFun 阶跃星辰, 01.AI 零一万物 (medium priority among AI-native startups); Huawei (**confirmed not being added**)

**Current focus**: **deepening the existing 13 companies.** Five frontier labs (Anthropic, OpenAI, Google DeepMind,
ByteDance, DeepSeek) already have substantive analysis across all five subpages; the remaining eight are rendered as
consolidated index pages, with subpages expanded as company activity warrants.
