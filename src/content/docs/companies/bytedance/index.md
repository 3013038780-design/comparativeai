---
title: ByteDance 字节跳动
description: ByteDance 字节跳动 (parent of Douyin / TikTok / Doubao 豆包) company profile and policy-document snapshot (2026-06-28)
sidebar:
  order: 4
  label: ByteDance 字节跳动
snapshotDate: 2026-06-28
---

## Company profile

- **Founded**: 2012
- **Headquarters**: Beijing
- **Main AI products**:
  - **Doubao 豆包**: consumer AI assistant
  - **Doubao LLMs / Seed series**: foundation models
  - **Coze 扣子**: AI applications and Agent platform
  - **Cici / overseas Doubao**: international-facing surfaces (subset of features)
  - Embedded AI capabilities in **TikTok, CapCut, Lemon8**, and other apps
- **Business model**: consumer apps (advertising + subscription), Volcano Engine 火山引擎 (B2B cloud services)
- **Positioning**: **first-tier** Chinese domestic LLM company; strong overseas ambition but constrained (especially in the U.S.)

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | Doubao / Coze User Agreement and content rules | [doubao.com](https://www.doubao.com/) / [coze.cn](https://www.coze.cn/) | [usage-policy](./usage-policy/) |
| Model cards | Doubao LLM series technical reports | [volcengine.com](https://www.volcengine.com/product/doubao) | [model-card](./model-card/) |
| Safety framework | Internal risk controls + TC260-003 compliance (limited public documentation) | _limited public documentation_ | [safety-framework](./safety-framework/) |
| Transparency report | CAC filings (multiple batches) | [cac.gov.cn](https://www.cac.gov.cn/) | [transparency-report](./transparency-report/) |
| Red-team disclosures | Limited public red-team disclosure; technical papers on arXiv | [arxiv.org](https://arxiv.org/) | [red-team-disclosures](./red-team-disclosures/) |

## Regulatory-compliance posture

- **China**:
  - Algorithm filing under the [Generative AI Interim Measures](/rules/china/generative-ai-interim-measures/) (multiple Doubao products filed)
  - [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/) compliance
  - Compliance with the [Deep Synthesis Provisions](/rules/china/deep-synthesis-provisions/), [Algorithm Recommendation Provisions](/rules/china/algorithm-recommendation-provisions/), and others
- **United States**: **persistent CFIUS / TikTok legislative pressure** (the 2024 *Protecting Americans from Foreign Adversary Controlled Applications Act* mandated divestiture or ban); Doubao is not available to North-American consumers
- **European Union**: TikTok is a designated DSA Very Large Online Platform (VLOP); in 2024 the Commission opened formal DSA proceedings against TikTok Lite
- **Singapore / Indonesia / Brazil**: ongoing localisation

## Deep dive: **embedded self-regulation — the distinctive mode of Chinese companies**

### The institutional backdrop of Chinese AI company self-regulation

Unlike U.S. / EU companies, Chinese leading AI companies' "self-regulation" is not **independent corporate
choice** standing outside state regulation; it is **embedded within the state-regulatory framework**.
ByteDance is a prototypical case:

- **No standalone "Responsible Scaling Policy"-type document**
- **Safety framework = CAC filing materials + TC260-003 compliance checklist**
- Publicly disclosed "governance commitments" are essentially **compliance statements directed at regulators**
- Internal "safety committees" correspond more to **Party-committee-directed** cross-functional compliance coordination

### ByteDance's compliance architecture (inferred from public materials + industry practice)

**External compliance layer:**
- **CAC algorithm filings**: Doubao, Coze, Volcano Ark, and multiple sub-products filed separately (quarterly CAC publication)
- **TC260-003-2024 compliance**: a de facto requirement for passing filings
- **Deep Synthesis Provisions**: enhanced filings for face-swap and voice-change products
- **Targeted-enforcement response**: rapid rectification in the "Qinglang 清朗" campaign series

**Internal governance layer:**
- **Party committee**: participates in algorithmic values, content moderation for generative outputs, and major technical-roadmap decisions (see the three-tier coordination mechanism cited in [Olivia's graduate thesis](/about/))
- **Content-safety team**: human moderator headcount on the order of **several thousand** (public estimate)
- **Legal / compliance**: liaises with CAC, MIIT, and Ministry of Public Security across multiple regulators
- **Overseas compliance teams**: independent units for TikTok in the U.S. ($1.5B+ invested in content moderation), the EU (DSA VLOP compliance), Singapore, and others

### ByteDance's compliance complexity: **the global regulatory split**

ByteDance is **the only AI company simultaneously subject to intense U.S., EU, and Chinese regulatory scrutiny**:

| Jurisdiction | Primary pressure |
| --- | --- |
| **China** | CAC / MIIT / Ministry of Public Security multi-agency compliance; TC260-003; Qinglang campaigns |
| **United States** | **PAFACA 2024 mandatory divestiture / ban** law; CFIUS review; multiple state-level TikTok government-device bans |
| **European Union** | TikTok VLOP (highest DSA obligation tier); 2024 formal proceedings against TikTok Lite; Italy's Garante investigation |
| **Indonesia / Brazil / India** | Continuous regulatory pressure |

**Result**: ByteDance's compliance costs are **the highest in the global AI industry**, yet self-regulation
position papers are almost impossible to produce — any statement that satisfies one jurisdiction may be
**used against the company in another**.

### Impact on the AI ecosystem

- **De facto leader in China**: Doubao had over **400 million daily actives** in 2026 Q1, #1 in the domestic consumer generative-AI market
- **Volcano Engine**: Doubao LLM API + text-to-image / video APIs; a top-3 enterprise AI cloud in China
- **Overseas constrained**: Doubao international (Cici) is primarily in Southeast Asia / Middle East / Japan; **not actively marketed in the U.S. or major EU countries**
- **Research open-sourcing is restrained**: some technical work open-sourced (Seed-Thinking, Seed-Coder, etc.), much less than DeepSeek or Qwen

## Company posture, in brief

- **Sparse official self-regulation documentation**: in clear contrast to U.S. / EU peers
- **Compliance by action**: filings, human-moderation headcount, rapid regulator response
- **Geopolitics as the greatest friction**: TikTok is the central global-expansion battleground; PAFACA pressure persists
- **Restrained open-sourcing**: smaller releases than Qwen or DeepSeek, with commercial core held back
