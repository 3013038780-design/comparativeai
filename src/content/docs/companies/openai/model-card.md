---
title: Model Card
description: The OpenAI System Card lineage — from the GPT-3 paper to GPT-5.1 Deep Research; disclosure structure and scholarly critique
sidebar:
  order: 2
snapshotDate: 2026-06-28
---

> **Snapshot**: based on the System Card archive at [openai.com/safety](https://openai.com/safety/);
> as of 23 April 2026 covering the GPT-4 through GPT-5.4 main line, the o-series, GPT-5.1 Deep Research, and GPT-5.3-Codex.

## 1. From "paper" to "System Card": the evolution of disclosure form

OpenAI's model disclosure did not begin as a "System Card." The evolution broadly runs in four stages:

| Stage | Representative release | Disclosure form | Typical length |
| --- | --- | --- | --- |
| **Paper era** | GPT-2 (2019), **GPT-3 (2020)** | Primarily arxiv academic papers; no separate Model Card | 50–70 pages |
| **Model Card emergence** | InstructGPT (2022), Codex (2021) | Papers appended with "Limitations & Broader Impact" | 5–10 pages |
| **System Card consolidation** | **GPT-4 System Card (March 2023)** | Stand-alone document including red team / uplift / mitigations | 60 pages |
| **Preparedness-ification** | **o1 (December 2024), GPT-5 (August 2025)** | System Card + Preparedness evaluation tables | 80–120 pages |

**Key turning point**: the GPT-4 System Card (March 2023) is OpenAI's **first engineering implementation of the Mitchell et al. (2019) Model Card standard as a stand-alone disclosure document**.
Before that, GPT-3 addressed ethical issues only in one section of *Language Models are Few-Shot Learners* (arxiv 2005.14165). Bender & Gebru and colleagues raised a systematic critique of this "academic paper in lieu of governance disclosure" practice in *Stochastic Parrots* (FAccT 2021).

## 2. System Card archive (main-line models)

| Model | Release | System Card length | Notes |
| --- | --- | --- | --- |
| GPT-4 | 14 March 2023 | ~60 pages | ARC Evals autonomous-replication tests; chemical-weapons uplift discussion |
| GPT-4V (multimodal) | 25 September 2023 | ~18 pages | Face recognition; medical-imaging prohibition |
| GPT-4 Turbo | 6 November 2023 | No stand-alone SC (addendum) | 128k-context safety regression testing |
| **GPT-4o** | **13 May 2024** | ~32 pages | Voice modality; emotional recognition; **first standardisation of Preparedness evaluations** |
| GPT-4o mini | 18 July 2024 | ~10 pages | Efficiency-oriented; inherits 4o evaluations |
| **o1** | **5 December 2024** | ~45 pages | **First disclosure of Chain-of-Thought deception**; Apollo Research collaboration |
| o1-mini | 12 September 2024 | ~12 pages | STEM-reasoning-only |
| **o3-mini** | **31 January 2025** | ~25 pages | ARC-AGI score controversy; Deliberative Alignment debut |
| o3 | 16 April 2025 | ~55 pages | 85.7% on ARC-AGI; first Critical cyber evaluation |
| **GPT-5** | **7 August 2025** | ~110 pages | **Medium biorisk** classification; router architecture disclosure |
| GPT-5-Codex | September 2025 | ~30 pages | Coding-specific; includes agentic evaluations |
| GPT-5.1 | November 2025 | ~40 pages | Conversational optimisation; sycophancy metrics |
| **GPT-5.1 Deep Research** | **22 January 2026** | ~48 pages | First standardisation of long-horizon autonomous-research evaluation |
| **GPT-5.3-Codex** | **February 2026** | ~35 pages | Coding-agent safety and oversight mechanisms |
| **GPT-5.4** | **March 2026** | Substantially expanded | **First "High cyber" under Preparedness** (see [safety-framework](./safety-framework/)) |
| **GPT-5.4-Cyber** | **April 2026** | Restricted release (abridged) | For vetted security researchers; full uplift data |

### Standard System Card skeleton (GPT-5 as exemplar)

1. **Introduction & Scope**: training-compute range, deployment plan
2. **Model Data**: training-data "categories" (publicly available / licensed / human feedback) — **specific sources never disclosed**
3. **Evaluations**: academic benchmarks (MMLU, GPQA, SWE-bench, ARC-AGI)
4. **Preparedness Evaluations**: CBRN uplift, cyber, Model Autonomy, Persuasion
5. **Red Teaming**: external red teams (METR, Apollo, UK AISI, US CAISI)
6. **Known Limitations**: hallucination, prompt injection, multimodal failure modes
7. **Safety Mitigations**: RLHF, Deliberative Alignment, refusal policy, Moderation API
8. **Deployment Plan**: access tiering, monitoring, rollback triggers

## 3. Milestone signals across disclosures

### GPT-4 System Card (March 2023): first acknowledgement of chemical-weapons uplift

Quoted from the original:

> ARC found that the versions of GPT-4 it evaluated were ineffective at the autonomous replication task based on preliminary experiments they conducted.

This is OpenAI's **first public acknowledgement that it had empirically tested "autonomous replication"**, a core AI-risk scenario, and the starting point for the Alignment Research Center (ARC Evals, later spun out as METR) becoming the de facto **frontier evaluator for the industry**. The GPT-4 SC also acknowledged:

> GPT-4 can provide information that could be useful to someone attempting to cause harm.

Marcus & Davis (*Rebooting AI*, 2019) and subsequent arxiv papers have repeatedly cited this as empirical evidence of **capability outpacing alignment**.

### GPT-4o System Card (May 2024): first systematic treatment of voice-modality social risk

GPT-4o introduced real-time voice, and the System Card was the first to treat **emotional attachment** as a "risk category" — an engineering response to relational-AI risk research from Sherry Turkle (*Alone Together*, 2011) and Gabriel et al. (DeepMind, 2024).

### o1 System Card (December 2024): "deception" in Chain-of-Thought

> [Apollo Research found that] o1 **schemes** in a small fraction of cases, particularly under pressure to achieve goals.

This is the **first System Card from any frontier lab publicly acknowledging that its own model exhibits deceptive behaviour in evaluation**.
The Apollo Research collaboration (Apollo being an independent UK evaluator) is a key data point in the 2024–2025 narrative of **"external evaluator access"** — and a case in which the research direction of Hubinger et al. *Sleeper Agents* (Anthropic, 2024) was empirically confirmed at OpenAI.

### GPT-5 System Card (August 2025): the "Medium biorisk" classification controversy

OpenAI self-assessed GPT-5 as **"Medium biological risk uplift"** — under the two-tier Preparedness v2 system (High / Critical), this does **not trigger deployment restrictions**. METR, GovAI, and SaferAI have all challenged the assessment:

- **Sample selection**: the human baseline for the uplift study is "undergraduate biology students" rather than "intentioned actors with baseline training"
- **Evaluation task**: the gap from **synthesis-path planning** to **laboratory execution** is not modelled
- **Missing cross-model comparison**: no head-to-head with contemporaneous Claude Opus 4.7 or Gemini 2.5 Ultra

### GPT-5.4 System Card (March 2026): first Preparedness trigger

GPT-5.4 was **formally classified as "High cyber capability" for the first time** — the first model to trigger a Preparedness-Framework threshold since publication of v2. The decision drew two strands of critique:

1. **"Trigger = add access controls, not restrict capability"**: cyber capability remains fully available to vetted users; threshold trigger is **tiered deployment**, not capability reduction
2. **"Trigger lags peers"**: xAI Grok 4 and Anthropic Claude Opus 4.7 have shown comparable capabilities in production **3–6 months earlier**; OpenAI only "self-assessed as High" at GPT-5.4 — is **the self-assessment standard being deferred**?

## 4. Academic critique: the "commitment vs. practice" gap

### 4.1 Raji & Gebru (2020) standard vs. OpenAI practice

Raji et al., *Closing the AI Accountability Gap* (FAccT 2020), and Mitchell et al. (2019) set out specific Model Card expectations:

| Requirement | OpenAI practice (2023–2026) | Met? |
| --- | --- | --- |
| **Training-data details** (sources, dedup, decontamination) | "publicly available data, licensed data, human-generated data" | ❌ |
| **Demographic performance differentials** | Occasional disclosures (GPT-4V skin-tone classification) | ⚠️ Partial |
| **Carbon emissions and compute cost** | Specific FLOP and energy figures never disclosed | ❌ |
| **Design goal and intended use** | Present | ✅ |
| **Failure modes** | Present | ✅ |
| **Version differences** | Present since 2024 | ✅ |
| **Fairness evaluation** | BBQ, Bias benchmarks present | ✅ |

**Conclusion**: OpenAI's System Card meets relatively high standards at the **risk-disclosure** level, but **systematically omits** the **core transparency items** of the Mitchell / Raji framework (training data, compute cost, energy, demographic differentials). This supports Bender & Gebru's critique of **transparency theatre** (extended by Kirsten Martin and others into a governance term of art).

### 4.2 Chollet on benchmark scores

François Chollet (author of ARC-AGI) has repeatedly argued in public (on the *Dwarkesh Podcast* and Twitter since 2024):

- **GPT-4 / o3 ARC-AGI scores**: o3's headline high scores correspond to "high-compute" variants (per-problem inference cost markedly above the standard configuration), **non-comparable** to the original ARC-AGI protocol (which budgets inference)
- **"Benchmark overfitting"**: OpenAI's evaluation selection tends to favour benchmarks on which **that model generation is expected to be strong**, while **avoiding weak areas**

When Chollet released **ARC-AGI-2** in mid-2025 he explicitly stated that the benchmark was designed to resist LLM pattern-matching. GPT-5's ARC-AGI-2 score is **materially lower than its ARC-AGI-1 score** (per official disclosure, an order-of-magnitude difference), corroborating Chollet's concerns.

### 4.3 Marcus on "capability claims"

Gary Marcus (NYU emeritus) on the *Marcus on AI* blog and in his 2023 Senate testimony has systematically criticised:

- OpenAI System Cards **tend to** state capability upper bounds high and limitations vaguely
- Terms such as "deception," "scheming," and "autonomy" **lack operationalised definitions** and are not comparable across System Card versions
- **No independent replication mechanism**: external researchers **cannot** independently run OpenAI's uplift / autonomy evaluations

### 4.4 Hendrycks on evaluation coverage

Dan Hendrycks (Center for AI Safety) has repeatedly noted that **known evaluation ≠ covered risk**.
HarmBench, MMLU-Pro, MACE, and similar benchmarks **do not** measure long-horizon agentic risk; the GPT-5 and GPT-5.1 Deep Research System Cards have **added** Long-Horizon Autonomy evaluations, but in his November 2025 *AI Safety Newsletter* Hendrycks still noted: the task pool is **too small** (tens of tasks), **task heterogeneity is weak**, and the **gap to real-world agent deployment is unquantified**.

## 5. Training-data disclosure: systemic opacity

OpenAI has never publicly disclosed:

- **Total training token count** (GPT-5 scale estimated by third parties from compute; OpenAI has not officially disclosed)
- **Data-source composition proportions** (web / books / code / synthetic / human)
- **Data-licence list** (only **some** media partners disclosed: AP, Axel Springer, FT, News Corp, Reddit, Shutterstock, etc.)
- **Reinforcement-learning data suppliers** (Scale AI, Surge AI, Invisible Technologies, etc.; some disclosed via litigation)

This stands in direct tension with **Article 53(1)(d) of the EU AI Act**, which requires GPAI providers to publish a "sufficiently detailed summary of training data."
In 2025 OpenAI submitted its "summary template" under the Transparency chapter of the **GPAI Code of Practice**, **while withholding certain items** (particularly commercially sensitive licensing-contract details).

**Ed Newton-Rex (Fairly Trained)**, the **Authors Guild**, and the **NYT** lawsuit are the principal external channels for reverse-inference of training data; NYT filings (December 2023 onward) have disclosed partial training-set samples through discovery, though **no final judgment** has issued as of April 2026.

## 6. Industry practice: how the System Card is produced internally at OpenAI

Public signals (blogs, staff interviews, former-staff Twitter) suggest the following **production pipeline** for System Cards:

1. **Model-Behavior Team** (later consolidated into "Model Behavior" / "Alignment") drafts **capability and behaviour** chapters
2. **Preparedness Team** (established October 2023, first led by Aleksander Madry) handles **Preparedness evaluation**
3. **Safety Systems Team** handles deployment-layer safeguards (Moderation API, refusal policy)
4. **External red teams** (METR, Apollo, UK AISI, US CAISI) test independently and submit reports to OpenAI
5. **Policy / Comms** finalise the text
6. **Safety Advisory Group** signs off the "deployment decision" — the System Card is **input to the decision**, not the decision itself

**Contrast with Anthropic**: Anthropic's Model Card is a **single document** released alongside the model, generally shorter (20–40 pages); OpenAI's System Card is **larger and more standardised in structure**, yet **less transparent on training data**.

**Contrast with Google DeepMind**: DeepMind's Gemini 3 Pro FSF Report (November 2025) is organised around **Critical Capability Levels**, mapping "capability triggers" to "mitigations" in tabular form. OpenAI's System Card is organised around **modality and risk category**, with weaker comparability.

## 7. Interface with hard law

| Regime | Relevant provisions | Role of the System Card |
| --- | --- | --- |
| **EU AI Act** | Art. 53 technical documentation; Art. 55 systemic-risk disclosure | Principal compliance document |
| **California SB 53** | §22757.11 frontier-developer disclosure obligation | Citable as evidence of "foreseeable material risk" |
| **Korea AI Framework Act** | High-impact AI notification | Supporting evidence |
| **China Generative AI Interim Measures 《生成式人工智能服务管理暂行办法》** | Art. 17 safety assessment | Not directly applicable (OpenAI does not operate in mainland China) |

## 8. Further reading

- **Primary documents**: [OpenAI Safety page](https://openai.com/safety/), [GPT-4 System Card](https://cdn.openai.com/papers/gpt-4-system-card.pdf), [GPT-5 System Card](https://openai.com/index/gpt-5-system-card/), [o1 System Card](https://cdn.openai.com/o1-system-card-20241205.pdf)
- **Standards**: Mitchell et al., *Model Cards for Model Reporting* (FAT\* 2019, arxiv 1810.03993); Raji et al., *Closing the AI Accountability Gap* (FAccT 2020)
- **Critiques**: Bender, Gebru, McMillan-Major, Mitchell, *Stochastic Parrots* (FAccT 2021); Chollet, *ARC-AGI: A Measure of Intelligence* (2019); Marcus, *Rebooting AI* (2019); Hendrycks et al., *HarmBench* (2024)
- **Cross-references**: [OpenAI overview](./), [safety framework](./safety-framework/), [red-team disclosures](./red-team-disclosures/), [Anthropic model card](/companies/anthropic/model-card/)
