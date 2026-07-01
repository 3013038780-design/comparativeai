---
title: Tencent 腾讯
description: Tencent Hunyuan 混元 profile — consumer ecosystem + full-line multimodal open-source (2026-06-28)
sidebar:
  order: 10
  label: Tencent 腾讯
snapshotDate: 2026-06-28
---

## Company profile

- **Founded**: 1998
- **Headquarters**: Shenzhen
- **Main AI products / brand**: the **Hunyuan 混元** model family
  - **Hunyuan LLM** (MoE architecture, trillion-parameter flagship)
  - **HunyuanImage 3.0** (image generation)
  - **HunyuanVideo** (video generation, 13B parameters, **open-sourced**)
  - **HunyuanVideo-Avatar** (speaking digital-human video)
  - **HunyuanVideo-I2V** (image-to-video)
  - **HunyuanCustom** (consistent-character video)
  - **Hunyuan 3D / 3D world model** (**the industry's first open-source navigable 3D scene generator**)
  - **Hunyuan GameCraft** (game-video generation)
  - **Hunyuan-large-vision** (multimodal understanding; **#1 in LMArena Vision in China**)
  - Small-size models (0.5B / 1.8B / 4B / 7B reasoning)
- **Business model**:
  - **Consumer-ecosystem embedding**: WeChat, QQ, Tencent Video, Tencent Meeting, games (Honor of Kings, etc.)
  - **Tencent Cloud** (B2B): Hunyuan API
  - **Investment portfolio** (Epic Games 40%, Discord, Supercell, Riot 100%, etc.): technology collaborations with portfolio companies

## Strategic positioning: **late starter + full-line open-source catch-up**

### Late starter

Tencent **started noticeably later than Baidu and Alibaba** in the generative-AI wave:
- Tencent's response was conservative during China's 2023 "hundred-model war"
- Hunyuan's intensive releases only started in 2024
- **The WeChat ecosystem moat** means Tencent does not need to bet aggressively on consumer AI entry points

### Catch-up strategy: **full-line multimodal open-source**

Between 2024 and 2026 Tencent adopted an **aggressive open-source strategy**:
- **HunyuanVideo**: open-sourced in 2024 (GitHub + HuggingFace), **13B parameters, 120-second inference**
- **Hunyuan 3D world model**: released and open-sourced at WAIC 2025 — **the first open-source navigable 3D scene generator in the industry**
- **Community downloads exceed 2.3 million** (2025 Q4 data), **the most popular 3D open-source model globally**
- **Multimodal small-model series open-sourced** (0.5B–7B)

**Commercial logic of open-sourcing:**
- **Not monetising via model API** (Tencent's main business is advertising + games + social)
- Open source functions as a **brand and talent-attraction tool**
- **Cloud-service differentiation**: the open-source ecosystem drives Tencent Cloud customers toward the Hunyuan API

## Deep dive: **AI governance at a platform-type company**

### Categorising within the Chinese AI ecosystem

Tencent is a prototypical case of the **"platform-type company AI"** — distinguishable from:
- **Pure AI labs** (DeepSeek, Moonshot): model → API
- **National team** (Baidu): model → government / industry applications
- **E-commerce cloud** (Alibaba): model → cloud-service monetisation
- **Content + algorithm** (ByteDance): model → consumer product
- **Platform-type** (Tencent): model → **AI augmentation of an existing consumer ecosystem**

**Governance implications:**
- Tencent's AI governance is **embedded within platform governance** (WeChat content moderation, anti-addiction in gaming, financial-services risk control)
- **"Platform rules first, AI rules next"** — not "AI rules first"
- Similar to ByteDance but **without the cross-border strain** (Tencent's business is mostly domestic; overseas is relatively low-profile)

### Two dimensions of governance pressure

**Domestic:**
- WeChat and QQ, as services with "public-opinion or social-mobilisation attributes," carry **the heaviest algorithm-recommendation filing obligations**
- Minor-protection anti-addiction rules (gaming) intersect with AI-companionship / virtual-character rules
- Compliance boundary for **WeChat Mini Program AI applications** (tens of thousands of AI mini programs)

**Overseas (limited):**
- Portfolio companies (Epic, Riot, Discord) operate independently in the U.S. / EU
- WeChat international (WeChat) is banned on U.S. government devices
- Subject to CFIUS review, but far lighter than ByteDance

### Self-regulation posture

Tencent's public AI self-regulation documents:
- **No standalone safety framework** (similar to other Chinese companies)
- 2018 *Tencent AI Ethics Principles* (one of the earlier Chinese corporate AI-principles documents)
- Participation in TC260 standard-drafting (multiple)
- **Technical reports accompanying open-source models** include some safety-evaluation disclosure

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | Tencent Hunyuan / Tencent Cloud service agreement | [hunyuan.tencent.com](https://hunyuan.tencent.com/) / [cloud.tencent.com](https://cloud.tencent.com/product/tclm) | — |
| Technical reports | HunyuanVideo / 3D / Image 3 Technical Reports | [github.com/Tencent-Hunyuan](https://github.com/Tencent-Hunyuan) | — |
| AI principles | *Tencent AI Ethics Principles 腾讯人工智能伦理原则* (2018) | _search "Tencent AI ethics principles"_ | — |
| Transparency | CAC algorithm filings + WeChat / QQ business transparency reports | [cac.gov.cn](https://www.cac.gov.cn/) | — |

## Regulatory-compliance posture

- **China**:
  - Hunyuan series CAC algorithm filings
  - TC260-003-2024 compliance
  - **WeChat / QQ / Video Accounts** as one of China's largest platforms — all AI-related functions involve multi-layered compliance
  - Cross-compliance between **gaming anti-addiction** rules and AI-related features
  - **Payments + finance** (WeChat Pay) AI applications subject to financial regulation
- **United States**:
  - No U.S. consumer AI products
  - Portfolio companies operate independently
  - CFIUS scrutiny exists but is not a focus
- **European Union**:
  - Hunyuan open-source models are downloadable in the EU
  - No EU consumer products
- **Southeast Asia / Middle East**: Tencent Cloud + gaming business is meaningfully present

## Company posture, in brief

- **Platform first**: AI as an augmentation of existing business lines, not an independent product line
- **Full-line open-source strategy**: open-source as a catch-up tool
- **Governance leverages existing platform mechanisms**: WeChat content moderation, gaming anti-addiction, etc., extended to AI
- **Stable government relations**: the multi-year "technology for good 科技向善" narrative aligns with state policy
