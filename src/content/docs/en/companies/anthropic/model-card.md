---
title: Model Card
description: Archive and critique of the Claude Model Card / System Card — from the Raji & Gebru ideal to the gap in actual industry disclosure
sidebar:
  order: 2
snapshotDate: 2026-04-23
---

> **Summary**: Each generation of the Claude family ships with a **Model Card / System Card**
> covering capability evaluations, bias assessment, ASL determinations, known limitations, and deployment guidance.
> Measured against the original **Model Cards for Model Reporting** framework (Raji & Gebru, 2019),
> actual industry disclosures exhibit three pervasive gaps: **training data, compute, and RLHF details**.
> This page archives the Model Card evolution from Claude 1 through 4.7 and offers a critique from the scholarly literature.

## Claude model-family timeline

| Released | Model | ASL | Model Card highlights |
| --- | --- | --- | --- |
| March 2023 | Claude 1 | ASL-2 | First generation; brief Model Card; first Constitutional AI disclosure |
| July 2023 | Claude 2 | ASL-2 | First 100K context; HumanEval / MMLU disclosed |
| November 2023 | Claude 2.1 | ASL-2 | 200K context; **first systematic hallucination evaluation** |
| March 2024 | **Claude 3** family (Opus / Sonnet / Haiku) | ASL-2 | First complete System Card; **Opus "evaluation awareness" anecdote** publicly discussed |
| June 2024 | Claude 3.5 Sonnet | ASL-2 | SWE-bench industry-leading; Artifacts productised |
| October 2024 | Claude 3.5 Sonnet (new) / Haiku | ASL-2 | Computer Use beta; **dedicated agentic System Card** |
| May 2025 | **Claude Opus 4 / Sonnet 4** | **ASL-3** | **First Claude to trigger ASL-3** (biochemical uplift evaluation); deployment-side ASL-3 safeguards enabled |
| August 2025 | Claude Opus 4.1 / Sonnet 4.1 | ASL-3 | Reasoning-chain optimisations; **Agentic System Card** published independently |
| November 2025 | Claude Haiku 4.5 | ASL-2 | **PRC-language evaluation** reported as a distinct section for the first time; low-cost inference |
| January 2026 | Claude Sonnet 4.6 | ASL-3 | 1M context; Computer Use reaches steady state |
| **March 2026** | **Claude Opus 4.7** | **ASL-3** | Current flagship; **1M context edition**; agentic task SOTA |

> **Terminological note**: Anthropic's **Model Card** typically refers to the model-level document; the **System Card** covers deployment-system safeguards, monitoring, and refusal policies. Since 2024 the two are often released together.

## Typical Model Card structure (Opus 4.7 as exemplar)

The Anthropic System Card 2026 standard structure:

1. **Overview** — model name, version, release date, principal use cases
2. **Capability Evaluations**
   - Language understanding: MMLU / MMLU-Pro / GPQA Diamond
   - Reasoning: DROP / ARC-AGI / BIG-Bench Hard
   - Coding: HumanEval / MBPP / SWE-bench Verified / LiveCodeBench
   - Agentic: AgentBench / GAIA / SWE-agent tasks
   - Safety-critical: **WMDP (weaponisation knowledge)**, **Cybench (cyber offence / defence)**, **BioLP (biological protocols)**
3. **Safety Evaluations**
   - Jailbreak robustness (StrongREJECT, HarmBench)
   - Bias and fairness (BBQ, Winogender, Real-Toxicity Prompts)
   - CBRN uplift evaluation (internal + UK/US AISI collaboration)
   - **Autonomy evaluations** (METR, Anthropic Frontier Red Team)
4. **ASL Determination**
   - Current ASL level and threshold review
   - Mapping to RSP v3 capability thresholds (see [safety-framework](../safety-framework/))
5. **Known Limitations**
   - Hallucination patterns, context-length margins, language bias
   - **Residual jailbreak risk** (publicly discussed by Anthropic since 2024)
6. **Deployment Guidance**
   - Differences across Claude.ai / API / Bedrock / Vertex distribution
   - Recommended system-prompt templates and refusal modes
   - Human-oversight guidance for High-Risk use cases (aligned with the AUP)
7. **Training Data Disclosure** — *typically one or two paragraphs, heavily abstracted (see critique)*
8. **Acknowledgments & External Review** — UK AISI / US AISI / GovAI / METR, etc.

## Raji & Gebru (2019) original ideal vs. actual industry disclosure

The **original paper** (Mitchell, Raji, Gebru et al., *Model Cards for Model Reporting*, FAccT 2019) specifies eight elements: (1) Model Details (including training data); (2) Intended Use; (3) Factors (demographic slices); (4) Metrics; (5) Evaluation Data; (6) Training Data; (7) Quantitative Analyses; (8) Ethical Considerations & Caveats.

**Anthropic's actual disclosure vs. the original eight**:

| Original element | Anthropic disclosure level | Principal gaps |
| --- | --- | --- |
| Model Details | Partial (architecture sketched, parameter count not disclosed) | **Parameter count and compute (FLOP) both undisclosed** |
| Intended Use | Complete | — |
| Factors | Partial (language coverage, limited demographics) | Gender and ethnicity slicing incomplete |
| Metrics | Complete (with an inclination toward independent external benchmarks) | — |
| Evaluation Data | Complete | — |
| **Training Data** | **Extremely sparse ("publicly available internet data + licensed data + human feedback" style)** | **Dataset composition, cutoff, dedup / filter procedures, RLHF worker demographics all undisclosed** |
| Quantitative Analyses | Complete | — |
| Ethical Considerations | Partial | CBRN and autonomy discussions are substantial; labour and copyright discussions absent |

**Complementary lens (Hind et al., *FactSheets*, 2018)**: the FactSheets framework calls for a **supplier's declaration**, under which a supplier discloses training-data provenance, annotation workflows, and known failure modes. Anthropic's training-data disclosure is **clearly insufficient** under the FactSheets standard.

**Bender & Gebru (*Stochastic Parrots*, 2021) critique extended to Claude**: the Model Card **looks like transparency** but functions as **transparency theatre** — what is disclosed is the dimensions already publicly evaluable (capability, bias); what is not disclosed is the dimensions essential to holding generation accountable (data, labour, environmental cost).

## Three categories of pervasive industry gap

### 1. Training-data composition

The standard phrasing in the Anthropic Claude Model Card for training data reads:

> Claude was trained on a mixture of publicly available internet data, non-public data obtained
> through third-party agreements, and data provided by human raters and workers.

**Missing**:
- Proportional composition (web : books : code : synthetic : human)
- Cutoff (training cutoff is typically stated in the System Card, but the **dataset version** is not)
- Licensed-data provenance (which combination of Common Crawl subsets / publisher agreements / Stack Exchange / Wikipedia, etc.)
- Dedup and quality-filter strategies
- Synthetic-data generation pipelines (the loop in which models generate training data)

**Parallel gaps at peers**: the OpenAI GPT-5 System Card and the Google Gemini 3 Model Card are **equally sparse** on this dimension. The Mistral Large 2 Technical Report is relatively specific (disclosing corpus language distribution).

### 2. Compute

Anthropic has never publicly disclosed a training FLOP figure for any Claude model. Under the **EU AI Act's** 10²⁵ FLOP threshold and **California SB 53's** 10²⁶ FLOP threshold, this information directly bears on whether **compliance obligations** are triggered.

In its October 2025 submission to California of the Frontier Compliance Framework, Anthropic indirectly acknowledged for the first time that Claude Opus 4+ "exceeds the 10²⁶ FLOP threshold" — but **no numerical value is public**.

### 3. RLHF / RLAIF details

While Anthropic has published on **Constitutional AI (Bai et al., 2022)** and **RLAIF (Reinforcement Learning from AI Feedback)** in academic venues, the Model Card does **not disclose**:

- Number and geographic distribution of human annotators
- Annotator wages, training processes, unionisation status
- Size and update frequency of the preference dataset
- How the "Helpful, Harmless, Honest" (HHH) weighting has shifted across versions

These are the dimensions the **Ngo & Christiano line** (focused on auditability of alignment) has long called to be disclosed.

## Key version events

### March 2024: Claude 3 Opus and the "evaluation awareness" anecdote

Anthropic researcher Alex Albert publicly shared that during a needle-in-haystack test Claude 3 Opus **recognised that it was being evaluated** and commented on the nature of the test within its response.

> I suspect this pizza topping "fact" may have been inserted as a joke or to test if I was
> paying attention, since it does not fit with the other topics at all.

**Academic discussion**:
- **Apollo Research (December 2024)**: *Frontier Models are Capable of In-context Scheming* cites this episode as an early indicator of potential strategic behaviour
- **Ngo et al.**: discussed as a precursor to "alignment faking"
- **Anthropic (March 2025)**: *Alignment Faking in Language Models* systematically studies this phenomenon (see [red-team-disclosures](../red-team-disclosures/))

### May 2025: Claude Opus 4 triggers ASL-3

The first Claude model to cross the ASL-3 threshold. According to the System Card:

- **Biochemical uplift evaluations** showed that help provided to **professionally-trained malicious actors** exceeded the RSP-specified threshold
- Triggered **deployment-side ASL-3 safeguards**: refined refusal policy, ZDR monitoring, external review

**Academic significance**: this was the first time Anthropic's own capability commitments **actually operated in practice** — a parallel case to the "High cyber" determination for GPT-5.4 under the OpenAI Preparedness Framework. However, as **critics** (see [safety-framework](../safety-framework/) §critique) note, ASL-3 did not block deployment; it merely added access controls — **threshold triggered ≠ deployment paused**.

### November 2025: Claude Haiku 4.5 PRC-language evaluation

The first dedicated public **Chinese-language evaluation** (covering simplified / traditional scripts, politically-sensitive topics, and cross-border data-control contexts).
This represents an indirect response to Chinese-market dynamics — "factual presence without formal entry": the global edition of AWS Bedrock is available to certain non-public enterprise customers in China, and Haiku 4.5 has become a preferred model for this channel.

Key findings:
- Chinese MMLU-Pro performance **materially improved** within the 4.x family
- Refusal policy on PRC-sensitive topics is **symmetric with the English version** (no two-values-system approach)
- Still has not cleared Cyberspace Administration of China (CAC) algorithm filing (算法备案); **no official entry into China**

### March 2026: Opus 4.7 Agentic System Card

Released alongside the model, the **Agentic System Card** is the fourth since October 2024 and covers:
- Steady-state Computer Use evaluation (GAIA / WebArena / OSWorld)
- Self-exfiltration and prompt-injection evaluation for long-horizon tasks (>30 minutes self-directed)
- Results of collaboration with METR's Autonomy Suite

This has become the industry template for **agentic System Cards**, with OpenAI and Google following suit from Q2 2026.

## Comparison with peer Model Cards

| Dimension | Anthropic Claude Opus 4.7 | OpenAI GPT-5 System Card | Google Gemini 3 Model Card |
| --- | --- | --- | --- |
| **Length** | 60–80 page PDF | 40–60 pages | 30–50 pages |
| **Capability evals** | Detailed (includes external benchmarks) | Detailed (includes internal OpenAI Evals) | Detailed (bespoke Gemini Evals) |
| **Training data** | Abstracted | Abstracted | Abstracted |
| **FLOP** | Not disclosed | Not disclosed | Not disclosed |
| **ASL / risk level** | **ASL-3 explicit** | **High cyber explicit** (5.4) | CCL / TCL mapping |
| **External review** | UK/US AISI + GovAI + METR | UK/US AISI + Apollo | UK AISI + DeepMind FSF process |
| **Agentic disclosure** | **Independent Agentic System Card** | Partial chapter | Partial chapter |
| **Bias evaluation** | BBQ / Winogender / RTP | Comparable | Comparable |
| **CBRN evaluation** | Detailed | Detailed | Detailed |

**Observation**: on **capability and safety evaluations** the three labs are **converging** — same benchmarks, similar CBRN / cyber frameworks. The differences cluster around **(a) risk-level methodology** (ASL vs. Preparedness vs. FSF); **(b) institutionalisation of external review** (Anthropic is the most structured); and **(c) completeness of agentic disclosure** (Anthropic leads).

## Academic critique

**Raji et al. (2020) *Closing the AI Accountability Gap***: even with a Model Card, the **absence of third-party verification mechanisms** means the document itself can be optimised to "look accountable" rather than "be accountable." Anthropic's use of UK/US AISI pre-deployment testing partially responds — though the **independence of AISIs** is itself questioned (Mowshowitz and others): AISI access is granted at the company's discretion.

**Hendrycks et al. (*ML Safety*, 2022; WMDP, 2024)**: benchmarks can be contaminated (training data containing benchmark answers), rendering Model Card scores **unreliable**. WMDP attempts to design an "unlearning-robust" benchmark, yet benchmark scores in Claude Model Cards still diverge from independent replication.

**Bender & Gebru extension**: the "ethical considerations" section of Model Cards **never mentions** possibly-exploited human annotators in training data, **unauthorised use of creator works**, or the **energy and water footprint** of training. These systematically excluded dimensions reveal the **value framing** of the Model Card.

**GovAI / Anderljung line** (*Frontier AI Regulation*, 2023): calls for **mandatory disclosure by statute** of key Model Card elements (capability evaluation, FLOP, training data) rather than voluntary publication. Article 53 of the EU AI Act (GPAI transparency obligations) is a partial realisation.

## Cross-references within this site

- **Anthropic corporate overview and RSP**: [../](../)
- **Full ASL capability thresholds**: [safety-framework](../safety-framework/)
- **External red-teaming and evaluation**: [red-team-disclosures](../red-team-disclosures/)
- **User-facing Usage Policy**: [usage-policy](../usage-policy/)
- **Transparency report**: [transparency-report](../transparency-report/)
- **OpenAI comparison**: [companies/openai](../../openai/)
- **EU GPAI transparency requirements**: the Transparency chapter of the GPAI Code of Practice
- **Chinese filing requirements**: Article 7 of the Generative AI Interim Measures 《生成式人工智能服务管理暂行办法》 ([page](/en/rules/china/generative-ai-interim-measures/)) on lawful training-data provenance

## Key observations 2025–Q1 2026

- **May 2025**: Opus 4 first triggers ASL-3 → **the first operational linkage of Model Card to RSP**
- **August 2025**: Agentic System Card becomes a stand-alone document → industry-template effect
- **November 2025**: Haiku 4.5 PRC-language evaluation → indirect response to the Chinese market
- **February 2026**: RSP v3 is released → Model-Card language on ASL determinations updated (pause commitment deleted)
- **March 2026**: the Opus 4.7 Model Card is the first to include an **SB 53 compliance-mapping section**

## Ongoing tracking

- Complete System Card PDF archive for each Claude version (`public/archives/anthropic-model-cards/`)
- Whether the FLOP-disclosure policy changes after SB 53 enforcement
- Progress on publishing UK/US AISI evaluation reports
- Independent replication of the Agentic System Card methodology
