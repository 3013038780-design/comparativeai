---
title: Model Card
description: DeepSeek model technical report archive — the "technical-report-as-model-card" practice across V2/V3/R1/V3.1 and the VL/Coder/Math series (2026-06-28)
sidebar:
  order: 2
snapshotDate: 2026-06-30
---

> **One-line framing**: DeepSeek has no "Model Card" in the Western sense, but its
> **technical reports are, in effect, the most disclosure-dense model documents produced by any
> Chinese frontier lab** — and on certain dimensions (training-data composition, compute
> configuration, RL training detail, ablations) they **exceed OpenAI's GPT-5 System Card or
> Anthropic's Claude Model Card**. This is the extreme case of "technical report as model card,"
> and the external expression of DeepSeek's **maximalist open-source stance (极限开源)**.

## 1. DeepSeek model lineage and technical-report inventory

| Model | Release | Technical report / arXiv | License | Architectural highlights |
| --- | --- | --- | --- | --- |
| DeepSeek-V2 | 2024-05 | arXiv 2405.04434 | MIT | 236B total / 21B active; MLA attention + DeepSeekMoE |
| DeepSeek-V2.5 | 2024-09 | Technical blog | MIT | V2 base fused with Chat / Coder capabilities |
| DeepSeek-Coder V2 | 2024-06 | arXiv 2406.11931 | MIT | Code-specialized; frontier HumanEval / MBPP scores |
| DeepSeek-VL / VL2 | 2024-03 / 2024-12 | arXiv 2403.05525 / 2412.10302 | MIT | Multimodal vision-language |
| DeepSeek-Math | 2024-02 | arXiv 2402.03300 | MIT | First introduction of the GRPO algorithm |
| **DeepSeek-V3** | **2024-12-26** | **arXiv 2412.19437** | MIT | **671B total / 37B active**; FP8 training; improved MoE routing |
| **DeepSeek-R1 / R1-Zero** | **2025-01-20** | **arXiv 2501.12948** | MIT | **Pure-RL reasoning model**; rule-based rewards; distillation to smaller models |
| DeepSeek-V3.1 | 2025-08 | Technical blog + HuggingFace README | MIT | V3 base with long-context, tool use, and reinforced RL alignment |

All of the above papers are **publicly accessible**, and come with weights, configuration files,
partial evaluation scripts, and tokenizers. This is **the most complete open-source delivery
package among global frontier labs**.

## 2. Disclosure depth in the V3 technical report (2024-12-26)

The DeepSeek-V3 report (arXiv 2412.19437) is **the most detailed training-side document of any
frontier model released in 2024**, covering:

- **Architecture**: 671B-total / 37B-active MoE, 61-layer Transformer, Multi-head Latent Attention
  (MLA), DeepSeekMoE routing, **auxiliary-loss-free load balancing** (a V3 innovation).
- **Training data**: 14.8T tokens, **English and Chinese dominant** (exact ratio not disclosed,
  but §2.2 gives domain distribution); includes ~17% code, math / reasoning corpora, and a small
  share of multilingual data.
- **Compute**: the report publishes the precise H800 GPU-hour accounting (pretraining + SFT +
  context extension), and derives the **widely-cited "multi-million-dollar" training cost** by
  assuming a per-GPU-hour price — the exact figure is in the V3 technical report; this derivation
  is the source of the media-quoted **"$5.58M training cost"** number.
- **Parallelism**: 16-way pipeline, 64-way expert parallelism, ZeRO-1 data parallelism; **the first
  large-scale FP8 mixed-precision training run**.
- **Engineering handling of training instability**: loss-spike mitigation, compute-communication
  overlap via the DualPipe schedule.
- **Evaluations**: MMLU, MMLU-Pro, C-Eval, CMMLU, CLUEWSC, GSM8K, MATH, HumanEval, MBPP,
  LiveCodeBench, Codeforces, AIME, GPQA, MMMU, SWE-bench, Aider — 30+ benchmarks.

> **Horizontal comparison**: OpenAI's GPT-4 technical report (2023-03) **deliberately avoids**
> architectural and data details ("for competitive and safety reasons"); the GPT-5 System Card
> (2025-08) continues this practice. Anthropic's Claude 4 Model Card gives the **qualitative
> statement** that training data comes from "public internet + licensed third-party data + user
> opt-in," without specific composition. **DeepSeek-V3's disclosure depth is roughly equivalent
> to a full academic ML preprint** — this is what "technical report as de facto model card"
> means.

## 3. The R1 technical report (2025-01-20) and the "DeepSeek moment"

### Core contributions

The DeepSeek-R1 technical report (arXiv 2501.12948) is **the single most important AI paper of
2025-Q1**, disclosing:

1. **R1-Zero**: running **pure RL directly on V3-Base** (GRPO algorithm + rule-based rewards),
   **without any SFT**, and observing the emergence of long CoT, self-verification, and
   reflection. Rule-based rewards include:
   - Format reward (output must contain a `<think>...</think>` block)
   - Accuracy reward (math problems have deterministic answers; code problems pass unit tests)
2. **R1 proper**: built on R1-Zero with **cold-start SFT + two rounds of RL + rejection-sampling
   SFT**, resolving R1-Zero's readability and language-mixing issues.
3. **Distillation to smaller models**: R1's reasoning traces were distilled into the Qwen / Llama
   1.5B / 7B / 14B / 32B / 70B series, forming the **DeepSeek-R1-Distill-*** family — all open
   source.

### The academic and market shock of the "DeepSeek moment"

- **2025-01-27 single-day rout in US AI equities**: NVDA fell near the double-digit single-day
  limit (hundreds of billions of USD in market-cap evaporation), with broader AI-linked names
  seeing total single-day moves approaching a **trillion dollars**.
- **Ben Thompson (Stratechery)**, in his 2025-01-27 "DeepSeek FAQ," framed this as an
  **"information asymmetry moment"** — the market had previously believed "frontier capability
  requires $100M+ and large amounts of proprietary know-how," and R1 challenged both assumptions
  simultaneously.
- **Jeffrey Ding (GWU)**, writing in *ChinAI*, argued that the real shock was not "capability
  parity" but the **three-in-one of "open source + reproducible + low cost."**
- **Helen Toner (CSET → GovAI-affiliated)**, writing in *Lawfare*, discussed R1's impact on "training
  FLOP thresholds as a regulatory hook": if algorithmic optimization can reduce effective FLOP by
  an order of magnitude, **the rationale behind 10²⁵ / 10²⁶ FLOP thresholds** comes under strain.

### The short "safety considerations" section in the R1 report

§5 "Safety" in the R1 technical report is **DeepSeek's first dedicated safety section in a paper**,
roughly 1–2 pages:

- Chinese and English content-safety benchmarks (SafetyBench, CVALUES)
- Discussion of R1-Zero's **language mixing** (Chinese-English blending), **repetition**, and
  **format instability**
- Mention of safety-oriented rejection-sampling data
- **Does not cover** CBRN, cyber weapons, autonomous replication, or other frontier-capability
  evaluations (the staple topics of Anthropic / OpenAI frontier safety reports)

This confirms DeepSeek's **domestic default equation of "safety" = "content compliance,"** which
is **asymmetric** with Western frontier labs' definition of "safety" = "frontier catastrophic
risk."

## 4. DeepSeek under the historical "Model Card" norm

### The Raji & Gebru 2020 baseline

**Raji, I. D., & Gebru, T. (2020), "Model Cards for Model Reporting"** (FAT*), proposed that a
model card should cover nine dimensions:

1. Model Details (architecture, version, date, type, training resources, citation)
2. Intended Use (primary uses, primary users, out-of-scope uses)
3. Factors (relevant subgroups, instrumentation)
4. Metrics (performance, thresholds, decision boundaries)
5. Evaluation Data (datasets, motivations, preprocessing)
6. Training Data (same)
7. Quantitative Analyses (disaggregated, intersectional)
8. Ethical Considerations
9. Caveats and Recommendations

**DeepSeek's technical reports cover dimensions 1 / 4 / 5 / 6 / 7 far more deeply than** the
official Model Cards of Anthropic / OpenAI; but dimensions **2 / 3 / 8 / 9** (intended use,
subgroup fairness, ethical considerations, recommendations) are **essentially absent**. This
**"heavy on ML research dimensions, light on governance dimensions"** distribution is a key
cross-section of Chinese frontier labs' disclosure culture.

### Internal Chinese comparison with the Qwen family

- **Alibaba Qwen** (tongyi.aliyun.com / Hugging Face): publishes **dual-track documents — papers
  plus a separate Model Card** — with the Model Card formatted closer to the Hugging Face
  standard template (intended use, risks & limitations, training data overview).
- **DeepSeek**: **publishes papers but not Model Cards**; the HuggingFace README is **essentially
  an abstract plus quickstart**.
- **Baidu ERNIE**: closed-source main line plus a small open-source tier (the 4.5 series); Model
  Card format used mainly for enterprise API client documentation.

DeepSeek is the Chinese frontier firm **closest to a pure "ML paper" paradigm** and least
interested in "governance-side documentation."

## 5. Evaluation disclosure and the benchmark-contamination debate

### V3 / R1 evaluation boundaries

Key benchmark results disclosed in the V3 / R1 papers:

| Benchmark | V3 | R1 | Reference (o1 / Claude 4 Sonnet) |
| --- | --- | --- | --- |
| MMLU | 88.5 | 90.8 | Comparable or slightly lower |
| MMLU-Pro | 75.9 | 84.0 | Comparable |
| GPQA Diamond | 59.1 | **71.5** | o1 slightly higher |
| MATH-500 | 90.2 | **97.3** | Comparable to o1 |
| AIME 2024 | 39.2 | **79.8** | Comparable to o1 |
| Codeforces | — | **2029 Elo** | Comparable to o1 |
| SWE-bench Verified | 42.0 | 49.2 | Claude 4 Sonnet higher |
| Aider | 79.7 | 53.3 | — |

### Chollet's ARC-AGI-2 results

**François Chollet (ARC Prize Foundation)**, in public discussion in 2025-Q1, disclosed R1's
score-order on ARC-AGI public sets (significantly below OpenAI o3-preview's contemporary frontier
score; exact percentages per the ARC Prize leaderboard). But Chollet also noted: **R1 was at the
time the only "open-weights + reproducible + method-disclosed" model that scored non-zero**,
making it highly significant on the dimension of "auditable AI progress."

### Hendrycks and contamination concerns

**Dan Hendrycks (Center for AI Safety)** has repeatedly flagged that R1 / V3's **abnormally high
scores** on math benchmarks (especially MATH-500, AIME 2024) have raised community concerns about
**training-set contamination**. DeepSeek's team responded:

- §2 "Data Construction" of the papers discusses decontamination (n-gram overlap filtering).
- But **no full contamination-audit report is public**, so independent verification is not
  possible.
- 2025-Q1 independent research (including Scale AI's PRIVATE-HUMANITY-LASTEXAM test) shows R1's
  scores **drop significantly on unseen problems**, while remaining higher than most open-source
  models.

## 6. Industry first-hand: immediate reproduction in the open ecosystem and the "mini-R1" phenomenon

### HuggingFace distribution and downloads

- V3 and R1 accumulated **hundreds of thousands to millions** of downloads on HuggingFace shortly
  after release.
- R1-Distill-Qwen-32B became **one of the most popular open-source distilled reasoning models**
  in 2025-Q1.
- Ollama, LM Studio, vLLM, and SGLang all added native support in the first week.

(Specific download counts per HuggingFace repository real-time statistics.)

### The "mini-R1" reproduction wave (2025-Q1–Q2)

The **methodological transparency** of the R1 paper enabled rapid reproduction by multiple teams:

- **UC Berkeley Sky-T1** (2025-01, reproduction completed at a reported ultra-low cost on the
  order of several hundred dollars; exact figure per the project's own report).
- **HuggingFace Open-R1** (a fully open-source reproduction project launched in 2025-01).
- **Alibaba Qwen 2.5-Math reasoning variants.**
- **Kimi k1.5 report** (Moonshot, released nearly simultaneously in 2025-01).
- Community "train R1-Zero-tiny for a dollar" teaching notebooks became a 2025-Q1 teaching meme.

### Academic citations

By H1 2026, DeepSeek-V3 and R1 papers had both reached **thousand-plus citation counts** on
Google Scholar (R1's citation growth exceeds V3's due to the originality of the reasoning /
RL training methodology; exact numbers per Google Scholar real-time data).

The R1 paper has become, in effect, **one of the most-cited single papers of 2025 in the LLM
reasoning / RL training subfield**, in stark contrast with the contemporaneous OpenAI o1 system
card (closed source, no method detail).

## 7. Academic critique and normative discussion

- **Bender & Gebru et al. ("Stochastic Parrots" 2021) data-disclosure demand**: DeepSeek's papers
  **satisfy most of the categorical disclosure demands** (source types, language distribution,
  domain shares, decontamination procedures), but **do not publish specific dataset inventories**
  (no verifiable Common-Crawl subset version).
- **Irene Solaiman et al., "Release Decisions"**: DeepSeek is the extreme case of "full release,"
  but its **absence of a corresponding staged-release evaluation** (because everything is released
  at once) means that the empirical question of "how openness gradation affects marginal risk"
  **cannot be observed in stages** at DeepSeek.
- **Peter Henderson (Princeton)**: in a 2025 open-weights governance paper, he identifies
  DeepSeek-R1 as the trigger that **advanced the maturation of the open-weights governance debate
  by 6 to 18 months**.
- **Rishi Bommasani et al., 2025 FMTI**: DeepSeek scores >50% on **Methods / Data / Compute**,
  far above closed-source labs; but scores <30% on **Usage / Policy / Impact / Labor**, embodying
  the **"asymmetric transparency (不对称透明)"** pattern of high technical transparency and low
  governance transparency.

### Chinese academic perspectives

- **Zhang Linghan 张凌寒**: DeepSeek's technical reports **re-frame, at a doctrinal level, the
  paradox of "non-public filing materials vs. fully public model capabilities"** — whether "the
  model itself is the best documentation" constitutes a valid substitute for regulatory
  transparency demands is still a matter for normative debate.
- **Zhu Yue 朱悦**: technical reports functioning as "additional disclosure" in the compliance
  context objectively **lower regulatory cost** (evaluating DeepSeek is easier than evaluating a
  closed-source lab), but also **raise the interpretive tension of future "non-public filing
  materials."**

## 8. Page conclusion

DeepSeek's model-card practice is a typical expression of Chinese AI industry's **"high technical
transparency + low governance disclosure."** From the vantage of academic research and
reproducibility, V3 / R1 technical reports are among the **most verifiable and easiest-to-build-on**
frontier model documents globally; from the vantage of enterprise governance and downstream
compliance, DeepSeek **lacks the Western industry conventions of Model Card, Policy Card, and
System Card**.

> This is the deep feature of DeepSeek as a "Chinese Mistral": Mistral chose "open source + EU
> institutional-layer compliance" as a dual track; DeepSeek chose "open source + minimum Chinese
> filing" as a single track. The former supplements transparency with institutions; the latter
> supplements institutions with papers.

## References

- Raji, I. D. & Gebru, T. (2020). *Model Cards for Model Reporting.* FAT*
- DeepSeek-AI (2024). *DeepSeek-V3 Technical Report.* arXiv:2412.19437
- DeepSeek-AI (2025). *DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL.* arXiv:2501.12948
- DeepSeek-AI (2024). *DeepSeek-V2 Technical Report.* arXiv:2405.04434
- Bommasani, R. et al. (2025). *Foundation Model Transparency Index v1.1.* Stanford CRFM
- Thompson, B. (2025-01-27). *DeepSeek FAQ.* Stratechery
- Ding, J. (2025). *ChinAI Newsletter* #300 & #301
- Toner, H. (2025-02). *What the DeepSeek Moment Reveals.* Lawfare
- Zhang Linghan 张凌寒 (2025). *The Regulatory Paradox of Open-Source AI Models.* *China Legal Science*
