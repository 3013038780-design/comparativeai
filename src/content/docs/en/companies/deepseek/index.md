---
title: DeepSeek
description: DeepSeek company profile and policy-document snapshot (2026-04-21)
sidebar:
  order: 5
  label: DeepSeek
snapshotDate: 2026-04-21
---

## Company profile

- **Founded**: 2023 (incubated by the quantitative hedge fund High-Flyer 幻方量化)
- **Headquarters**: Hangzhou
- **Main models**:
  - **DeepSeek-V3** (general-purpose), **DeepSeek-R1** (reasoning), plus V3/R1 derivatives
  - MoE architecture + reinforcement-learning training path are DeepSeek's distinctive technical signatures
  - **Open-source** weights (MIT License) + open API
- **Business model**: API (at extremely low prices) + open-source ecosystem-driven
- **Positioning**: one of **the most globally influential Chinese open-source LLM providers**

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | DeepSeek service agreement / privacy policy | [chat.deepseek.com](https://chat.deepseek.com/) (footer) | [usage-policy](./usage-policy/) |
| Model cards | DeepSeek-V3 / R1 technical reports | GitHub + arXiv | [model-card](./model-card/) |
| Safety framework | Limited public documentation; TC260-003 compliance as baseline | _limited public documentation_ | [safety-framework](./safety-framework/) |
| Transparency report | CAC filings (filed / published) | [cac.gov.cn](https://www.cac.gov.cn/) | [transparency-report](./transparency-report/) |
| Red-team disclosures | Partial disclosure in papers and system cards | [github.com/deepseek-ai](https://github.com/deepseek-ai) | [red-team-disclosures](./red-team-disclosures/) |

## Regulatory-compliance posture

- **China**:
  - Public-facing API / chat services subject to CAC algorithm filing
  - Whether publishing open weights itself requires filing: **regulatory practice is ambiguous** (service / weights dual path)
  - Subject to TC260-003 baseline
- **United States**:
  - The early-2025 "DeepSeek moment" triggered technical shock and policy backlash
  - BIS export-control updates; CFIUS review
  - Bans on **government devices** at the state and federal-agency level
- **European Union**:
  - Open-source models used to provide downstream services in the EU → GPAI obligations apply
  - Italy's Garante issued a temporary ban and investigation in January 2025
- **South Korea / Taiwan**: restrictions on use on government devices

## Deep dive: **maximalist open source + minimal self-regulation**

### DeepSeek's distinctive combination

DeepSeek is the global AI company closest to **"no standalone self-regulation narrative"**:

- **No RSP / Preparedness / FSF-equivalent documents**
- **No explicit safety-principles statement** (unlike Google AI Principles)
- **Extremely thin Usage Policy** (a few hundred words, essentially stating "do not use for unlawful purposes")
- **Safety-evaluation disclosure**: only partial sections of technical reports
- **All governance commitments = CAC filing materials** (not publicly disclosed)

**Compared with Mistral's open source:**
- Mistral: **open source + EU compliance + GPAI CoP signatory**
- DeepSeek: **open source + Chinese compliance + no international industry self-regulation commitment**
- Both substitute open source for transparency, but Mistral adds an EU institutional layer; DeepSeek does not

### Global impact of the "DeepSeek moment" (2025-01)

The January 2025 release of DeepSeek R1 was seismic:
- **Performance comparable to OpenAI o1** but with training cost estimated at **an order of magnitude lower**
- **Open source** → anyone can download, fine-tune, and deploy
- Triggered **U.S. equity-market volatility** (AI stocks sold off) and White House attention
- Accelerated the Trump administration's deregulation + compute-competition narrative in **EO 14179 + the AI Action Plan**

**Three-fold pressure on global AI governance:**
1. **Questioning of compute thresholds**: if $5M can train an o1-class model, how should the EU 10^25 FLOP and California SB 53 10^26 FLOP thresholds be defined? (The DeepSeek-V3 technical report is arxiv 2412.19437; R1 is arxiv 2501.12948.)
2. **Open source is irreversible**: once DeepSeek weights are released, any "pause" or "withdrawal" becomes meaningless
3. **Self-regulation cannot bind open-source companies**: all self-regulation frameworks assume the company controls model access — open source breaks the assumption

### International regulatory responses

- **2025-01 Italy Garante**: **the first EU DPA temporary ban on DeepSeek** (GDPR inadequacy)
- **2025-02 South Korea, Taiwan, Australia**: government-device bans
- **2025-03 U.S. federal agencies**: DoD, Commerce, FCC, etc. ban DeepSeek
- **2025-04 Texas, Virginia, and other states**: state government-device bans
- **2025-10 EU AI Office**: DeepSeek included in GPAI systemic-risk review (operations outside the EU but with model weights flowing in)

### CAC filing's distinctive practical challenge

DeepSeek's compliance architecture:
- **chat.deepseek.com public-facing service** → CAC algorithm filing
- **API service** → likewise filed
- **Open weights (HuggingFace / GitHub)** → **regulatory practice is ambiguous**:
  - CAC has not clarified whether "publishing weights" constitutes "providing a service"
  - Q2 2025 internal CAC discussions considered whether **open models must be filed**
  - As of 2026-04, no definitive rule
  
This is an **open boundary of Chinese AI regulation**, and DeepSeek is the single most important test case.

### Compared with other Chinese companies

| Dimension | DeepSeek | Alibaba Qwen | Baidu ERNIE | ByteDance Doubao |
| --- | --- | --- | --- | --- |
| Open-source strategy | **Maximalist open source** (MIT) | Primarily open (Apache 2.0) | Mixed (4.5 open / 5.0 closed) | Partial open |
| Self-regulation documents | **Least** | Few | Medium (official blog) | Few |
| Government relations | Independent (quantitative hedge fund) | National team (Alibaba Cloud national platform) | National team (Apollo) | Commercial + geopolitical |
| International reach | **Greatest** ("DeepSeek moment") | Large (Qwen global downloads) | Medium | Medium (TikTok + Doubao) |
| Regulatory pressure | **Highest** (multi-country bans) | Medium | Medium | High (TikTok + Doubao) |

## Company posture, in brief

- **Technical-hacker aesthetic + low-price open-source** operating strategy
- **Extremely few public AI-governance position papers**; the company behaves as if **"the model itself is the best statement"**
- Open source's **practical pressure on global AI governance**: **weight releases are irreversible**
- **Quantitative-fund background** gives DeepSeek greater political independence than Alibaba / Baidu (national team) or ByteDance (commercial + geopolitical)
