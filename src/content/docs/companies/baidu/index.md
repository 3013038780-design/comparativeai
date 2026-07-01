---
title: Baidu 百度
description: Baidu ERNIE 文心 profile and policy-document snapshot (2026-06-28)
sidebar:
  order: 6
  label: Baidu 百度
snapshotDate: 2026-06-28
---

## Company profile

- **Founded**: 2000
- **Headquarters**: Beijing
- **Main AI products**:
  - **ERNIE Bot 文心一言**: consumer / developer AI assistant
  - **ERNIE 文心 model family**:
    - **ERNIE 5.0** (released 2026-01): **2.4 trillion parameters**, natively multimodal unified modelling; Baidu claims language and multimodal understanding exceeding Gemini 2.5 Pro and GPT-5-High
    - **ERNIE 4.5 series** (open-sourced 2025-06-30, 10 models): tiers at 0.3B / A3B / A47B
  - **Qianfan 千帆 platform** (MaaS): enterprise-facing model deployment and fine-tuning
  - **Apollo**: AI-driven autonomous-driving ecosystem
- **Business model**: search advertising + cloud (including AI) + autonomous driving + AI applications (Wenxiaoyan 文小言, Miaoda 秒哒, etc.)

## Strategic positioning

- **The earliest and heaviest AI investor among China's BAT trio** (started 2010; announced "All in AI" strategy in 2017)
- **In-house chips** (Kunlun 昆仑芯) + **in-house LLM** (ERNIE) + **in-house inference framework** (PaddlePaddle 飞桨) → **full-stack indigenisation**
- **Closed-source flagship + open-source mid-tier** layering (a hedging pattern similar to Anthropic / OpenAI closed + Meta open)

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | ERNIE Bot User Agreement and content rules | [yiyan.baidu.com](https://yiyan.baidu.com/) | — |
| Technical reports | ERNIE 4.5 Technical Report, ERNIE 5.0 Blog | [ernie.baidu.com/blog](https://ernie.baidu.com/blog/) | — |
| Open-source models | ERNIE 4.5 series on GitHub | [github.com/PaddlePaddle/PaddleNLP](https://github.com/PaddlePaddle/PaddleNLP) | — |
| Safety framework | Limited public documentation; TC260-003 compliance as baseline | _limited public documentation_ | — |
| Transparency | CAC algorithm filings (算法备案, multiple batches) | [cac.gov.cn](https://www.cac.gov.cn/) | — |

## Regulatory-compliance posture

- **China**:
  - Algorithm filing under the [Generative AI Interim Measures 生成式人工智能服务管理暂行办法](/rules/china/generative-ai-interim-measures/) — ERNIE Bot was among the **first wave of filed services** (2023-08)
  - [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/) compliance
  - Compliance with the [Deep Synthesis Provisions 深度合成规定](/rules/china/deep-synthesis-provisions/), [Algorithm Recommendation Provisions 算法推荐规定](/rules/china/algorithm-recommendation-provisions/), and others
  - One of the **"New-Generation AI Open Innovation Platforms"** (autonomous driving) — national-team treatment
- **United States**: some consumer AI services **are not offered in the U.S.**; enterprise API is affected by BIS export controls
- **European Union**: **no consumer services in the EU**; ERNIE open weights are downloadable in Europe but trigger AI Act Article 53 obligations
- **Russia / Middle East / Southeast Asia**: ongoing localisation partnerships

## Deep dive: **the "co-governance" self-regulation of a national-team company**

### Baidu's distinctive position

Baidu is **the most deeply embedded** of China's AI "national team" companies:

- **2017 State Council plan**: one of the **first designated "New-Generation AI Open Innovation Platform"** anchor companies (autonomous driving / Apollo)
- **Deep Party-committee embedding**: among the top Chinese platform companies, Party-committee involvement in strategy, algorithmic values, and content moderation is publicly documented at notable levels (see the graduate thesis cited in [About](/about/) §3.2.1)
- **Full-stack indigenisation**: Kunlun (AI chips) + PaddlePaddle (deep-learning framework) + ERNIE (model) + Qianfan (MaaS) — aligned with the national strategy of **"technological self-reliance"**
- **Robin Li 李彦宏's public posture**: regular participation in WAIC, the Two Sessions, and the Wuzhen Internet Conference; at the ERNIE 5.0 launch in January 2026, Li foregrounded a **"benchmarked against GPT-5 High"** narrative of technical confidence

### Institutional features of Baidu's self-regulation

- **Participation in national standard-setting as the primary form of self-regulation**:
  - Participant in the drafting of TC260-003-2024
  - Significant industry input into the AI Safety Governance Framework 1.0 / 2.0
  - Drafting party for multiple AI-related recommended national standards (GB/T)
- **Leadership in algorithm filing**: ERNIE Bot was in the **first wave** of generative-AI services to pass CAC filing (August 2023)
- **AI Ethics Committee**: Baidu established its AI Ethics Committee in 2019, but **public output is limited**
- **Internal red-teaming**: partial disclosure in technical reports; no systematic public documentation

### Governance implications of the ERNIE 4.5 open-source release

The 2025-06-30 open-sourcing of the ERNIE 4.5 family (10 models) marked an **important governance-posture shift** by Baidu:

- **Follows the Alibaba Qwen / DeepSeek open-source wave**: "closed flagship + open mid-tier" has become the mainstream pattern among leading Chinese companies
- **Responds to international open-source pressure**: relative to Meta Llama and Mistral, China's open-source ecosystem has noticeably strengthened
- **Open-source compliance challenge**: ERNIE 4.5's training-data compliance statement in the GitHub model card **is briefer than U.S. counterparts**

### Compared with Alibaba / DeepSeek / ByteDance

| Dimension | Baidu | Alibaba | DeepSeek | ByteDance |
| --- | --- | --- | --- | --- |
| National-team embedding | **Deepest** (Apollo national platform) | Medium (Alibaba Cloud national platform) | Independent | Commercial + geopolitical |
| Open-source depth | Mid-tier open + flagship closed | **Full-line open** (Apache 2.0) | **Maximalist open** (MIT) | Partial open |
| In-house chips | **Kunlun** (full stack) | Tongyi + Hanguang chips | None | None (GPU-purchase dependent) |
| International reach | Medium | **Largest** (Qwen downloads) | **Largest** ("DeepSeek moment") | Medium |
| Industry ecosystem | Qianfan MaaS + autonomous driving | Alibaba Cloud + Bailian 百炼 | API + open-source community | Volcano Engine 火山引擎 + Doubao 豆包 |

## Company posture, in brief

- **Tightly aligned with national AI governance**: first among leading companies to complete algorithm filing; active participation in TC260 standard drafting
- **Self-regulation via participation in standard-setting** rather than standalone commitment documents
- **Deep alignment with national strategy**: Apollo autonomous driving is one of the first "New-Generation AI Open Innovation Platforms"
- **Full-stack indigenisation orientation**: core response to U.S. chip export controls
