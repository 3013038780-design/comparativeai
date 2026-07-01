---
title: Model Card
description: Gemini technical reports and model card archive; the evolution from Gemini 1.0 to Gemini 3 Pro and its capability disclosures
sidebar:
  order: 2
snapshotDate: 2026-06-28
---

> **2025-11 milestone**: The **Gemini 3 Pro Model Card** was released **concurrently** with the [FSF Report](./safety-framework/)
> — the first industry instance of a paired "technical report + standalone safety report" model card format.
> Anthropic's Claude Opus 4.7 Card (2025-12) subsequently adopted a similar structure.

## Google's origins in the model card paradigm

Google is **one of the academic birthplaces of the model card paradigm**. The 2019 FAT* paper by
Raji, Gebru and others, *"Model Cards for Model Reporting"* ([arxiv:1810.03993](https://arxiv.org/abs/1810.03993)),
proposed the model card standard, and Google's internal PAIR and Ethical AI teams productized it around
the same period. Yet **a tension persists between this early academic contribution and the quality of Google's
own model cards** — see the academic critique section below.

## Evolution of Gemini technical reports

| Version | Release date | Technical report / Model card | Key capabilities / milestones |
| --- | --- | --- | --- |
| Gemini 1.0 (Ultra/Pro/Nano) | 2023-12-06 | [Gemini: A Family of Highly Capable Multimodal Models](https://arxiv.org/abs/2312.11805) | First "natively multimodal" training; MMLU 90.0 (Ultra) |
| Gemini 1.5 Pro | 2024-02-15 | [Gemini 1.5 Technical Report](https://arxiv.org/abs/2403.05530) | **Million-token context** (extensible to 10M); MoE architecture |
| Gemini 1.5 Flash | 2024-05 | Updated 1.5 Report | Low-latency distillation |
| Gemini 2.0 Flash | 2024-12 | [deepmind.google/technologies/gemini/flash/](https://deepmind.google/technologies/gemini/flash/) | First "agentic-first" design (Project Astra / Mariner) |
| Gemini 2.5 Pro | 2025-03 | [Gemini 2.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_2_5_report.pdf) | **Deep Think** reasoning mode; MMMU 84.0 |
| Gemini 2.5 Flash | 2025-04 | Same | "Thinking budget" toggle |
| Gemini 2.5 FSF Report | 2025-04 | [First paired safety document](https://storage.googleapis.com/deepmind-media/gemini/gemini_2_5_fsf_report.pdf) | See [safety-framework](./safety-framework/) |
| **Gemini 3 Pro** | **2025-11** | [Gemini 3 Pro Model Card](https://deepmind.google/technologies/gemini/) + **standalone FSF Report** | **Agent-core**; GPQA Diamond / SWE-bench Verified aligned with contemporary frontier (exact scores per official Model Card) |
| Gemini 3 Ultra | 2026-Q1 (expected) | Announced | — |
| Gemini 3.5 series | 2026-Q2 (expected) | — | — |

## Structure of the 2025-11 Gemini 3 Pro Model Card

The Gemini 3 Pro Model Card is **among the most comprehensive model cards released to date** in industry, organized in seven sections:

1. **Model Summary**: architecture (sparse MoE variant), training compute (disclosed as "greater than Gemini 2.5 Pro"; **specific FLOP figures are not disclosed**, continuing Google's practice of withholding precise compute), training cutoff.
2. **Capability Evaluations**:
   - **MMLU / MMLU-Pro** (knowledge)
   - **GPQA Diamond** (research-level scientific QA)
   - **AIME 2024 / 2025** (mathematics)
   - **MATH-500** (foundational mathematics)
   - **LiveCodeBench** (programming, **continuously updated**)
   - **SWE-bench Verified** (real-world code modification tasks)
   - **MMMU / MathVista** (multimodal)
   - **Video-MME** (video understanding)
   - **HumanEval / MBPP** (classic programming)
3. **Long Context**: needle-in-haystack (text/video/code tri-modal) achieving **near-perfect recall at 1M-2M tokens**.
4. **Tool Use & Agents**: agentic evaluations including **TAU-bench, GAIA, Browsecomp**.
5. **Multilinguality**: cross-lingual MMLU-Pro / MGSM across 140+ languages.
6. **Known Limitations**: hallucination tendency, weak temporal reasoning, domain-specific biases (gender / race / religion).
7. **Responsible Deployment**: SynthID watermarking, content moderation, refusal policies, FSF Report cross-references.

### Comparison with the Gemini 1.0 Model Card

The **2023-12 Gemini 1.0 Model Card** was 8 pages and focused mainly on static benchmarks such as MMLU / GSM8K / HumanEval.
The **Gemini 3 Pro Model Card runs to roughly 60 pages**, with additions including:

- **Agentic behavior evaluations** (tool use, multi-turn planning, long-horizon tasks)
- **Honesty and deception evaluations** (MACHIAVELLI / TruthfulQA / DeepMind's in-house Sycophancy benchmark)
- **Sandbagging detection** (whether the model deliberately underperforms)
- **Dangerous Capability subset** (quantitative figures provided in the FSF Report)
- **Quantified cultural bias** (BBQ / CrowS-Pairs + DeepMind's in-house GlobalBias)

## Core capability narrative

### 1M-10M context (the Gemini 1.5 differentiator)

The **1M-10M context window of Gemini 1.5 Pro** was an engineering victory built on DeepMind's work in MoE + Ring-Attention-class
algorithms. The technical report disclosed **over 99% recall on a 2M-token code-repository haystack** and, for 10M-token video
haystacks sampled at 1 fps, **"30-second clip localization"**.

**Academic critique**: A 2024 "Context Rot" study by the Chroma team found that reasoning quality in Gemini 1.5 **degrades
noticeably beyond 200K tokens** (though retrieval remains accurate). DeepMind **partially responded** in the Gemini 2.5 / 3 Pro
reports — introducing an "Effective Context" metric rather than relying solely on "Haystack Recall".

### Deep Think (the Gemini 2.5 reasoning paradigm)

Gemini 2.5 Pro introduced **Deep Think** in 2025-03 — long chains-of-thought plus multi-path search and self-verification.
On math benchmarks such as AIME 2024, its results sit in the same tier as the contemporaneous o1 series and Claude 3.7 Sonnet
(specific scores per technical report).
**Rohin Shah** (DeepMind Alignment), in public research discussion during 2025, noted that Deep Think training **incorporated
scheming evaluations as counter-example data**, reducing the model's tendency toward "self-rationalizing deception" in long CoT.

### Agentic (the Gemini 3 Pro positioning)

**Gemini 3 Pro is explicitly positioned as an "agent-first model"**:

- **Project Mariner** (browser agent) co-evolved with Gemini 3 Pro
- **Project Astra** (real-time multimodal assistant)
- Native **Function Calling / Code Execution** integration in Google AI Studio
- **SWE-bench Verified** performance sits in the same frontier band as Claude Opus 4.x and GPT-5 (specific scores per each vendor's official Model Card)

## Academic critique and methodological disputes

### Raji & Gebru on the implementation of the model card standard

In a 2024 *FAccT Retrospective*, Raji assessed model card implementation across eight major labs.
Her observation was that **Google was the earliest adopter but its quality has varied in recent years** — she highlighted that
during 2023-2024 Google had released **extremely abbreviated PaLM 2 model cards** (fewer than five pages, a sharp contrast
with OpenAI's contemporaneous GPT-4 System Card).
**Quality improved markedly from Gemini 2.5 onward in 2025**, though **training data disclosure remains insufficient**.

### Benchmark contamination

In Q3 2025, the **Anthropic Alignment Team** published commentary noting that **LiveCodeBench and SWE-bench Verified face
contamination risks in frontier-model training sets** (*"Evaluation Integrity in Frontier Models"*).
DeepMind's response in the Gemini 3 Pro Card: using the **"contamination-free split" of SWE-bench Verified** together with
**LiveCodeBench Pro** (time slices strictly later than the training cutoff).

### François Chollet (ARC-AGI) and the anti-benchmark position

Chollet released **ARC-AGI-2 / ARC-AGI-3** in 2024-2025. Even with Deep Think, Gemini 2.5 remains orders of magnitude below
human performance on these benchmarks (specific scores per the official ARC Prize Foundation leaderboard). Chollet's central
argument is that knowledge benchmarks such as MMLU / GPQA are saturated, and that genuine abstract generalization remains
far from solved. Google DeepMind's Gemini 3 Pro Card **cites ARC-AGI-2 as a limitations indicator for the first time** — a
notable shift in posture.

### Gary Marcus's sustained critique

Marcus has long criticized LLM model cards for **"substituting benchmark scores for genuine understanding"**.
In his *Marcus on AI* posts following the 2026 Gemini 3 launch, he has continued to argue that even with Gemini 3 Pro's
strong performance on knowledge benchmarks such as GPQA, in scenarios requiring genuine retrieval — such as legal and
medical citations — **it still produces a material proportion of fabricated citations** (independent third-party evaluations
comparing it with Claude Opus 4.x show problems of comparable magnitude).
This reflects **the deeper limits of the "benchmark-is-everything" model card paradigm**.

### Shane Legg's (DeepMind co-founder / Chief AGI Scientist) evaluation philosophy

Legg has expressed a consistent public position across multiple venues: model cards should not be treated as marketing
collateral, and **evaluations should proactively cover the tasks at which a model is most likely to fail**, rather than
merely selecting benchmarks on which the model excels. This amounts to a public expression of **internal recognition of
the benchmark-arms-race problem**. The **Rohin Shah** team subsequently added a "capability misalignment" section to the
Gemini 3 Pro Card — a proactive disclosure of **what the model can do vs. what it should do**.

## Training data disclosure and compliance

### EU AI Act Art. 53(1)(d) training summary obligation

As a "systemic risk GPAI" (compute >> 10²⁵ FLOP), Gemini 3 Pro is required to publish a **training data summary**.
Following Google's signing of the GPAI CoP in 2025-08, the summary was released according to the CoP Transparency Chapter
template:

- Public web crawl (subject to robots.txt + [Web & App Controls](https://myactivity.google.com/))
- Public YouTube video (**over creator protest**, with figures including MrBeast publicly opposing)
- Compliant subsets of Google Books / Scholar
- Synthetic data (including Gemini 2.5 self-supervised generation)
- Third-party licensed corpora

**Undisclosed**: specific source proportions, the ratio of synthetic to real data, and the specific logic for identifying
copyrighted content.

### Data opt-out mechanisms

- **Web crawl**: disabled via the `Google-Extended` user-agent in robots.txt (launched 2023-09)
- **Google user data**: disabled via [Web & App Activity Controls](https://myaccount.google.com/data-and-privacy)
- **YouTube creators**: a third-party training opt-out was added in 2024-07 (**applies only to non-Google models**; Google's
  own Gemini training continues to use the data)
- **Workspace user content**: **not used for training by default** (enterprise privacy commitment)

**Critique**: the EFF and *Mozilla Internet Health Report 2025* note that the `Google-Extended` opt-out **is not retroactive**
— previously crawled data is not deleted.

## Industry practitioner perspective

### The AIPR (AI Principles Review) process

**AIPR** is Google's cross-product internal AI review process:

- Research teams submit AIPR proposals
- Cross-functional review by Google Responsible AI + DeepMind Safety + Legal + PM
- **Decisions are recorded internally**; model cards disclose only conclusory judgments that have cleared AIPR
- AIPR underwent **substantial scale-up** during 2024-2025, though **process transparency remains low** (one of the legacy
  effects of the Timnit Gebru episode)

### The Vertex AI Model Garden governance layer

When enterprise customers access Gemini through **Vertex AI Model Garden**:

- They automatically receive a **Model Card Summary** (simplified version)
- They can download the full **Model Card PDF** + **FSF Report**
- The **Responsible AI Toolkit** provides safety classifiers, grounding, and citation checks

This represents **industry's deepest enterprise integration of the model card** to date — the model card is not merely
documentation but **part of the SDK interface**.

### Documentation layering across Gemini App / AI Studio / Vertex

| Deployment surface | Visible documentation | Update cadence |
| --- | --- | --- |
| Gemini consumer app | Simplified "About Gemini" | With product updates |
| Google AI Studio | Model Card summary + FSF Report links | With model versions |
| Vertex AI (enterprise) | **Full Model Card PDF + Responsible AI Toolkit** | With model versions |
| Academic / external eval | Full Technical Report on arXiv | At release |

## Peer comparison

| Dimension | Gemini 3 Pro (2025-11) | Claude Opus 4.7 (2025-12) | GPT-5 (2025-08) |
| --- | --- | --- | --- |
| Technical report length | ~60 pages | ~50 pages | ~40 pages |
| Training compute disclosure | **Specific FLOP not disclosed** | Not disclosed | Not disclosed |
| Training data summary | EU CoP template | EU CoP template | EU CoP template (partially withheld) |
| Safety report separation | **Yes (FSF Report)** | Yes (Risk Reports) | Embedded in System Card |
| Agentic evaluation depth | **Deepest** | Deep | Deep |
| Benchmark contamination disclosure | **Yes** | Yes | Partial |
| Bias evaluation | BBQ + GlobalBias | BBQ + Anthropic Constitution eval | BBQ + System Card |

## Key timeline

- **2019**: Raji & Gebru *Model Cards* paper (with Google employee authorship)
- **2023-12**: Gemini 1.0 Technical Report
- **2024-02**: Gemini 1.5, million-token context
- **2024-12**: Gemini 2.0 Flash, agentic debut
- **2025-03**: Gemini 2.5 Pro + Deep Think
- **2025-04**: **Gemini 2.5 FSF Report** (first model card with paired safety report)
- **2025-11**: **Gemini 3 Pro Model Card + FSF Report**
- **2026-Q1**: Gemini 3 Ultra expected
- **2026-Q2**: Gemini 3.5 series expected

## Cross-links

- Company-level overview: [Google DeepMind index](/companies/google-deepmind/)
- Usage policy and AI Principles: [Usage Policy](./usage-policy/)
- FSF framework and Reports: [Safety Framework](./safety-framework/)
- Red-teaming and external evaluation: [Red-Team Disclosures](./red-team-disclosures/)
- Comparison: [Claude Model Cards](/companies/anthropic/model-card/)
- EU AI Act Art. 53 training summary obligation: [EU AI Act](/rules/eu/ai-act/)
