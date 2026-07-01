---
title: Usage Policy
description: DeepSeek usage policy archive — the interplay between service-side AUP, API terms, MIT-licensed open weights, and China's compliance baseline (2026-06-28)
sidebar:
  order: 1
snapshotDate: 2026-06-28
---

> **One-line framing**: DeepSeek's "usage policy" is **the shortest, least self-regulatory-looking
> document in China's AI industry**. It exists in form (the *Terms of Use* / *Privacy Policy* in
> the chat.deepseek.com footer, plus API terms, plus the MIT License that accompanies the weights),
> but its **content density** is far below OpenAI / Anthropic / Meta. This is not an oversight —
> it is the natural consequence of China's governance logic, in which **service-side compliance
> is carried by filing (算法备案), not by corporate AUPs**.

## 1. Document structure and layering

DeepSeek's usage constraints are distributed across **three mutually independent layers**, and no
single layer is complete on its own:

| Layer | Document | Constrained party | Nature | Approximate length |
| --- | --- | --- | --- | --- |
| **Service-side** | chat.deepseek.com Terms of Use / Privacy Policy | Consumer users | Contract terms + compliance declaration | ~3,500–4,500 Chinese characters |
| **API-side** | api-docs.deepseek.com developer terms | Business / developers | SaaS contract + content norms | ~2,000–3,000 Chinese characters |
| **Weight-side** | `LICENSE` (HuggingFace / GitHub repo root) | Downloaders / fine-tuners / redistributors | **Full text of the MIT License** (~170 words) | Very short |

This **"three-layer decoupling"** is the most important structural feature of DeepSeek's usage
policy: the service-side layer maps onto the CAC filing obligation, the API layer delimits B2B
commercial boundaries, and the weight layer is fully open. The three combined still amount to
**less total text than Anthropic's single Usage Policy document** — a key cross-section for
observing the self-regulatory posture of China's frontier labs.

## 2. Service-side terms: a compliance-driven "minimum viable AUP"

### Core prohibitions (chat.deepseek.com)

The service-side prohibition list essentially **restates Article 4 of the *Generative AI Interim
Measures* (《生成式人工智能服务管理暂行办法》) plus TC260-003's A.1 content-safety baseline**:

- Endangering national security, subverting state power, undermining national unity
- Inciting ethnic hatred, disrupting religious policy
- Disseminating violent, pornographic, gambling, or terrorist content
- Infringing intellectual property, trade secrets, or personal privacy
- Generating false information that disrupts social order

**Structural comparison with Anthropic's AUP**:

- Anthropic's AUP itemizes **weaponization (CBRN)**, **child safety (CSAM + serious physical or
  psychological harm)**, **election interference**, and **critical infrastructure attacks** as
  distinct categories with dedicated prohibitions.
- DeepSeek's terms fold all of these into a **general "do not break the law" clause**, with no
  categorical decomposition.
- Anthropic distinguishes **Consumer Usage Policy** from **Commercial Terms**, distributing
  enterprise compliance responsibility; DeepSeek's service-side terms **make no such distinction**,
  defaulting B2B users to the API terms.

### The "regulatory echo" of the compliance text

Zhu Yue 朱悦 (CASS Institute of Law, 2024), in *Research on Compliance Texts of Generative AI
Services*, observes that **more than 70% of the AUP text of China's frontier labs can be traced
sentence-by-sentence to the *Interim Measures* or to TC260-003**. This is especially pronounced at
DeepSeek — its service terms contain almost no "corporate value judgment" of their own, and instead
**translate regulatory requirements directly into contractual obligations**.

Zhang Linghan 张凌寒 (Data Law Research Institute, China University of Political Science and Law)
has summarized this pattern as **"the substitutive function of compliance text"**: when industry
governance is regulator-led and corporate self-regulation is secondary, the function of a
corporate AUP degrades from "value declaration" to "compliance declaration."

### Topic-refusal behavior

chat.deepseek.com applies a standard **refuse-and-redirect** pattern ("let's talk about something
else") on **politically sensitive topics, historical appraisal, Hong Kong / Macau / Taiwan issues,
and leader-related prompts**. This behavior is not specified in the AUP text; it is jointly
produced by three layers — **training-side RLHF, service-side keyword filtering, and content-safety
APIs**. Third-party testing (systematic probing across multiple GitHub repositories in 2025-Q1)
shows:

- **Refusal rates vary significantly across deployment environments**: chat.deepseek.com official
  service > direct API > locally deployed open weights.
- When the same R1 weights are deployed locally from HuggingFace, the refusal rate on sensitive
  topics is **close to zero**.
- This confirms the basic judgment that **refusal is implemented at the service layer, not at the
  model layer**.

## 3. API usage policy

### Contractual boundaries

DeepSeek's API terms read more like a **technical SaaS contract** than the service-side agreement:

- Per-token pricing (V3 / R1 prices are **extremely low** among China's frontier models, a
  cornerstone of its commercial strategy).
- Rate limits, SLAs, refund mechanisms.
- Data-use clauses: **by default, user API inputs are not used for training** (clarified after the
  2025-03 update).
- Enterprise commercial use **does not require a separate MSA** (except for large contracts).

### The absent "prohibited industries" list

Anthropic's Commercial Terms **explicitly prohibit** certain industries (weapons, surveillance
infrastructure); Meta Llama's Acceptable Use Policy (introduced with Llama 3 and continued in
Llama 4) adds dedicated bans on **"military, warfare, nuclear industry, and espionage"**. **DeepSeek's
API terms contain no such industry blacklist** — everything is folded into the general "do not
break the law" clause.

This is the most direct textual evidence of the **self-regulation depth gap** between Chinese
frontier labs and their US counterparts.

## 4. MIT License: the "maximalist" posture of Chinese open source

### No additional clauses

DeepSeek-V2 / V2.5 / V3 / R1 / V3.1 / VL / Coder / Math weights on HuggingFace and GitHub
**uniformly adopt the MIT License**. Key features of MIT:

- **No "no military use" clause.**
- **No "no surveillance" clause.**
- **No "acceptable use policy" attachment** (unlike the revised licenses of Llama / Falcon /
  Stable Diffusion).
- **No re-licensing trigger tied to usage thresholds** (unlike Llama 3's 700M MAU clause).
- **No restrictions beyond notification / attribution.**

> Irene Solaiman (Hugging Face, 2023, *Gradient of Release*) classifies model releases along a
> six-step gradient from fully closed to fully open; DeepSeek-V3/R1 sit **at the most open end**,
> and are **the only model among the world's top-five capability models released under an
> unmodified MIT License**.

### Comparison with Meta Llama

| Dimension | DeepSeek (MIT) | Meta Llama 3 / 4 (Custom) |
| --- | --- | --- |
| Core license | MIT | Custom license + AUP |
| Commercial use | Unrestricted | **Monthly active users > 700M requires separate license** |
| Prohibited uses | None | AUP lists 13 categories (weapons, law-enforcement abuse, CSAM, etc.) |
| Redistribution | Allowed (retain copyright notice) | Allowed, but **derivative models must include "Llama" in the name** |
| EU applicability | Delegated to downstream compliance | Llama 3 was **briefly excluded from the EU** (later restored) |

**Kapoor & Narayanan** (*AI Snake Oil*, Princeton, 2024) argue that Meta's "Acceptable Use" is
**nearly unenforceable in an open-source context** (who polices global downloaders?), making the
additional clauses more of a **legal insurance policy** than a substantive constraint. DeepSeek's
MIT stance pushes this observation to its logical conclusion — **if it cannot be enforced, do not
pretend it can be**.

## 5. The AUP-attribution problem for overseas hosts

Since 2025-Q1, DeepSeek weights have been served by hosts including **Together AI, Lepton AI,
Fireworks AI, Perplexity, Groq, Cerebras, and AWS Bedrock** (R1 Distill variants listed in
2025-03):

- **Weights flow out under MIT** → redistribution is legal.
- **Services are covered by each host's own AUP**: Together has its own, Lepton has its own, and
  they differ.
- **When users access DeepSeek models via a host, DeepSeek's service-side AUP does not apply.**
- **China's CAC filing** only covers DeepSeek's own service endpoints operated inside China;
  **it carries no extraterritorial effect** over overseas hosts.

This structure — **"open weights → one MIT + N host AUPs + 0 DeepSeek in-China AUPs"** — forms
**one of the most complex maps in global open-source AI governance**, and is the central battleground
for subsequent regulatory debates (the scope of the EU AI Act Article 53 open-source exemption,
the US BIS draft rule on "Advanced Open-Weight AI Models").

## 6. The 2025-01 post-R1 "service disruption / registration restriction" episode

Around 2025-01-27, chat.deepseek.com temporarily **suspended new-user registration**, with an
official statement citing "abnormal registration growth requiring strengthened security." Two
main readings circulate in academia:

1. **Infrastructure reading** (Paul Triolo, DGA-Albright Stonebridge): purely an engineering
   response to traffic exceeding expectations.
2. **Regulatory-communication reading** (Matt Sheehan, CEIP *ChinAI*; Jeffrey Ding, GWU): the
   event may have triggered a non-public coordination window between CAC and DeepSeek — in
   Chinese AI governance, **service-side controllability** is the regulator's primary concern,
   and registration restrictions are a rapid lever for reducing overseas new-traffic exposure.

The two readings are not mutually exclusive. Whatever the primary cause, the episode **demonstrated
the instantaneous effect of service-side compliance leverage**, in stark contrast with the **full
irrevocability of the weight-side release** — the core tension in understanding DeepSeek's
compliance structure.

## 7. Academic and industry observations

### Academic critiques

- **Irene Solaiman (HuggingFace)**: DeepSeek is the **closest boundary case to fully open** on
  the gradient of release, and serves as material for testing the hypothesis that "open source
  substitutes for transparency."
- **Kapoor & Narayanan (Princeton)**: in a 2025-03 blog post, they argue that in the six months
  following DeepSeek's weight release **no catastrophic misuse evidence emerged**, supporting the
  "open-source risks are overstated" camp.
- **Rishi Bommasani et al. (Stanford CRFM)**: in the 2025 update of the Foundation Model
  Transparency Index, DeepSeek's **"methods" and "data" scores rose notably**, but **"usage policy"
  and "downstream impact" scores remain low** — reflecting the asymmetry between technical and
  governance transparency.
- **Zhang Linghan**: in *The Regulatory Paradox of Open-Source AI Models* (2025), she argues that
  China's current framework is anchored in **service-side filing**, and that open-weights release
  itself **does not directly trigger a filing obligation**; but if 2026 brings "providing training
  / fine-tuning materials" into the regulatory perimeter, DeepSeek will be the primary affected
  party.
- **Dai Xin 戴昕 (Peking University Law School)**: from a data-security-law perspective, he
  argues that **the "no restriction" character of MIT is in tension with Article 21 of the
  *Data Security Law* on "important data" controls**, and that supporting rules under the
  *Network Data Security Management Regulation* may tighten this.

### Industry first-hand practice

- **Cautious API adoption by financial clients**: in H1 2025, several Chinese commercial banks
  and leading brokerages took a wait-and-see stance on DeepSeek's API — not because of model
  capability, but because of **thin contract terms** (no enterprise SLA, no detailed written data
  residency commitment).
- **Selective use by educational clients**: K-12 education products (Zuoyebang, Yuanfudao)
  prefer to integrate DeepSeek **through more fully filed intermediary layers** (Alibaba Bailian,
  Baidu Qianfan) rather than connecting directly.
- **AUP confusion among overseas developers**: in 2025-Q2, several North American SaaS companies
  accessing R1 via Together / Fireworks asked their legal teams which AUP actually applied — giving
  rise to a new document genre: the **host-side "open-model AUP explainer" page**.

## 8. Interface with "regulatory compliance positioning"

The **ultimate binding force** of DeepSeek's usage policy does not come from the text itself; it
comes from three external mechanisms:

1. **CAC algorithm filing** (first batch approved in 2023-10; V3 / R1 supplementary filings in
   2024-12 and 2025-01 respectively) — the takedown power on the service side rests with the
   regulator.
2. **TC260-003-2024 baseline** — a recommended standard that is de facto mandatory.
3. **Downstream host AUPs + local regulation in each jurisdiction** (Italy's Garante temporary
   block in early 2025; government-device bans in South Korea / Taiwan / Australia; US DoD /
   Commerce bans in H1 2025; specific dates per official announcements) — the weight layer is
   open, the service layer is severed locally.

> **Conclusion**: DeepSeek's usage policy is a document of **"deliberate blanks plus passive
> backstops"** — it has given up on shaping industry governance through corporate self-regulation,
> and has outsourced all binding force to the combination of **service-side filing + weight-side
> MIT + host-layer compliance in each jurisdiction**. This is both a natural consequence of
> China's governance path and a structural challenge to the global narrative that "frontier labs
> must publish an AUP."

## References and further reading

- chat.deepseek.com (Terms of Use / Privacy Policy pages)
- HuggingFace: `deepseek-ai/DeepSeek-V3` / `DeepSeek-R1` repository LICENSE files
- Solaiman, I. (2023). *The Gradient of Generative AI Release: Methods and Considerations.* FAccT
- Kapoor, S. & Narayanan, A. (2024). *AI Snake Oil.* Princeton University Press
- Bommasani, R. et al. (2024/2025). *The Foundation Model Transparency Index.* Stanford CRFM
- Zhang Linghan 张凌寒 (2025). *The Regulatory Paradox of Open-Source AI Models.* *China Legal Science*
- Zhu Yue 朱悦 (2024). *Research on Compliance Texts of Generative AI Services.* *Chinese Journal of Law*
- Matt Sheehan, *ChinAI Newsletter* 2025-02 special issue
- This site: [en/rules/china/generative-ai-interim-measures](/rules/china/generative-ai-interim-measures/)
  · [en/rules/china/tc260-gen-ai-security-basic-requirements](/rules/china/tc260-gen-ai-security-basic-requirements/)
