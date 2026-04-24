---
title: Model Card
description: Archive of technical disclosures for Doubao / Seed — Chinese filing materials vs. Western Model Cards as "asymmetric transparency" (snapshot 2026-04-23)
sidebar:
  order: 2
snapshotDate: 2026-04-23
---

> ByteDance **does not** publish anything that corresponds, in the English-language community sense, to a Model Card of the kind issued by Anthropic, OpenAI, or Google DeepMind.
> Doubao's "instruction manual" function is carried by two parallel bodies of material:
> **(1) Volcano Engine 火山方舟 technical blog posts plus occasional arXiv papers** (industry-facing transparency);
> **(2) Algorithm Security Self-Assessment Reports and Training Data Provenance Descriptions filed with the CAC** (regulator-facing transparency, not public).
> Even combined they do not cover the standard "risks / bias / evaluation / limitations" chapters of Western Model Cards—
> which is the core observation of this page: **asymmetric transparency**.

## 1. The Doubao model family (2024–2026 Q1)

### Foundation-model line

| Model | Release | Type | Public disclosure level |
| --- | --- | --- | --- |
| **Doubao 1.0 (Pro / Lite / Character)** | 2024-05, debuted at Volcano Engine Force conference | General-purpose LLM, multiple size tiers | Volcano Engine blog + product page; no standalone paper |
| **Doubao-1.5-Pro** | 2025-01 | General-purpose LLM, MoE architecture | Volcano Engine technical blog (limited disclosure of sparse-activation details) |
| **Doubao-1.5-Pro-256k** | 2025-02 | Long-context variant | Volcano Engine blog |
| **Doubao-1.5-Vision-Pro** | 2025-03 | Multimodal (image understanding) | Volcano Engine blog + arXiv technical report (Seed-VL series) |
| **Doubao-1.5-Thinking** | 2025 Q3 | Reasoning-specialized (compared to o1 / R1) | Blog-level disclosure, some benchmark scores |

### Seed open-source line (restrained open source)

| Model | Release | License |
| --- | --- | --- |
| Seed-ASR | 2024 | Research license |
| Seed-TTS | 2024 | Research license |
| Seed-Coder (small parameter sizes) | 2025 | Apache-2.0 (for some sizes) |
| Seed-Thinking (small-size preview) | 2025 | Apache-2.0 (for some sizes) |
| **Seed-Seedance 1.0 (video generation)** | 2025-06 | Closed-source commercial; competes with Kling / Vidu / Sora |

**Comparison with DeepSeek / Qwen**: DeepSeek V3 / R1 open-sources all weights (MIT); Qwen open-sources all sizes from 0.5B to 72B (Apache-2.0).
ByteDance is noticeably more restrained—only small Seed models are open-sourced, while its flagship Doubao Pro / Pro-256k / Vision-Pro are closed.
This choice is consistent with ByteDance's "commercialization first" corporate DNA and with the geopolitical sensitivity of TikTok's global data assets.

## 2. CAC algorithm filing: the "regulator-side Model Card" for Doubao products

### ByteDance products in the filing roster (cumulative, across batches)

According to the CAC's periodically updated public roster of filed generative AI services, ByteDance's main filed products as of 2026-04-22 include:

- **Doubao (app + web)**: filed 2023-08-31 in the first batch; service entity "Beijing Chuntian Zhiyun Technology Co., Ltd."
- **Coze 扣子**: filed in the 2024 batches
- **Volcano Engine (B-side)**: as a MaaS platform, filed separately with each model separately registered
- **Cici, Doubao's international edition**: not filed in China (export-only)
- **Multiple vertical applications** (education, customer service, e-commerce AI assistants, etc.): filed individually

### "Visible to the regulator, invisible to the public"

Per Article 17 of the *Generative AI Interim Measures* and the CAC's *List of Materials for the Filing of Generative AI Services*, the filing submission must include but **does not make public**:

1. **Algorithm Security Self-Assessment Report** (typically on the order of hundreds of pages), covering:
   - Algorithm principles and technical approach
   - Sources, scale, and cleaning pipeline of training corpora
   - Adversarial safety test results (sampling of the 31 risk categories in TC260-003, with ≥ 1000 test prompts per category)
   - Human annotation and RLHF value-alignment workflow
   - Illegal-content defense mechanism
   - Minor-protection section
2. **Training Data Provenance Description**
3. **Corpus Labeling Rules**
4. **Emergency Response Plan**
5. **User Complaint Handling Description**

> The CAC only publishes the filing roster (product name, filing number, entity, filing date) and **does not publish the contents** of the above materials.
> They cannot be lawfully obtained for academic purposes either. This is the **structural difference** from OpenAI publishing the GPT-4 Technical Report
> or Anthropic publishing a Claude Opus Model Card—
> the question is not "whether such documents exist," but **"to whom they are disclosed."**

## 3. Academic critique: the Model Card problem in the Chinese model

### Chinese scholarship

- **Zhang Linghan 张凌寒**, *Research on the Algorithm Filing System* (2024): the public filing roster resolves **existential visibility**,
  but non-disclosure of the supporting materials leaves **content invisible**. This "partial publicity" is a novel form under administrative law,
  but does limited empowerment work for the public, researchers, and users.
- **Dai Xin 戴昕 (Peking University)**: proposes a "regulatory intimacy vs. public transparency" frame—
  the regulator can penetrate deep into technical detail, but public transparency ends up lower than in the fully marketized U.S. model.
- **Zhu Yue 朱悦 (Tongji University)**: the public dimension of algorithm filing is too thin, leaving **third-party academic assessment nearly impossible**.
  Researchers can only black-box test end products; they cannot verify training-data compliance claims.
- **Wu Hong 吴洪 (Tsinghua)**: relative to the "Intended Use / Out-of-Scope Use" framework of U.S. model cards,
  Chinese filing materials weigh "national security + content compliance" more heavily than "user empowerment"—the two Model Card traditions have **different design philosophies**.

### International scholarship

- **Marietje Schaake (Stanford Cyber Policy)**: "asymmetric transparency" is the key to understanding the disclosure strategy of China's leading AI companies—
  deep transparency toward domestic regulators, high opacity toward the international community.
- **Jeffrey Ding (ChinAI / GWU)**: occasional disclosures on the Volcano Engine technical blog are **richer than commonly assumed**—
  particularly the MoE architecture of Doubao-1.5-Pro and the inference-time scaling details of Seed-Thinking—
  but the format is non-standard, scattered, and does not serve an accountability function.
- **François Chollet (ARC Prize / ex-Google)**: raises concerns about unusually high English-benchmark scores on MMLU / GSM8K / MATH for the Doubao series—
  "training-on-benchmark" contamination is a common concern for top Chinese models, and third-party held-out evaluation is needed.
- **Gary Marcus**: performance of Chinese frontier models degrades noticeably on **OOD English tasks**, suggesting that Chinese benchmark scores transfer poorly.
- **Helen Toner (Georgetown CSET)**: the absence of Model Cards in Chinese leading labs is not a capability issue but an institutional-incentive issue—
  under the incentives of CAC filing, detailed disclosure creates additional legal exposure.
- **Paul Triolo (DGA)**: Doubao's closed-source + commercialization route and DeepSeek's open-source route represent **two survival strategies** in China's AI industry,
  and ByteDance's route is closer to that of global top commercial labs.

## 4. Operational insight: how ByteDance ships technical reports

### Volcano Engine technical blog (primary channel)

ByteDance's functional equivalent of Model Cards is mainly the technical posts published on the Volcano Engine WeChat public account and the Volcano Engine developer blog.
These typically cover:

- Capability summaries at new model launches (MMLU / C-Eval / GSM8K / MATH / HumanEval / MMBench and similar benchmark scores)
- Architecture and training-infrastructure summaries (parameter counts, context windows, MoE structure, training-token totals, etc.)
- Use cases (automotive voice, education, e-commerce)
- Pricing and API call examples

**What is missing**:

- Systematic disclosure of bias / toxicity evaluations
- Details on training-data copyright compliance
- Misuse-risk and out-of-scope warnings
- Red-team findings (only summary compliance-test scores)
- Independent third-party validation of pre-deployment evaluations

### arXiv technical reports (occasional)

The Seed series publishes arXiv papers; representative work from the past year or so includes:

- Seed-TTS (speech synthesis), Seed-ASR (speech recognition)
- Seed-Coder (code)
- Seed-VL (vision-language)
- Seed-Thinking (reasoning model preview)

The disclosure quality of these papers approaches academic standards, but **no arXiv report corresponds to the flagship Doubao-1.5-Pro / Pro-256k**.

## 5. Benchmark comparison (aggregated from Volcano Engine blog and independent evaluations)

> Warning: the table below aggregates approximate figures from public blog posts and third-party tests; it is **not an official Model Card**.
> ByteDance has not issued a consolidated response to international academic retest requests.

| Benchmark | Doubao-1.5-Pro | Claude Opus 4.7 | GPT-4.5 | Gemini 3 Pro | DeepSeek V3 |
| --- | --- | --- | --- | --- | --- |
| MMLU | ~87 | 88+ | 88+ | 89+ | 87+ |
| C-Eval (Chinese) | 88+ | 82 | 83 | 85 | 88+ |
| GSM8K | 95+ | 95+ | 95+ | 95+ | 95+ |
| HumanEval | 89 | 92+ | 90+ | 92+ | 89 |
| MMBench (multimodal) | 84 (Vision-Pro) | 86 | 86 | 88 | — |

**Observation**: Doubao performs strongly on Chinese benchmarks (C-Eval, CMMLU, GaoKao-Bench); on English benchmarks it is close to, but slightly below, top closed-source models;
**on held-out or newly released benchmarks (such as FrontierMath, HLE), participation is far lower than among Western labs**—
this is the transparency pain point most repeatedly raised by the research community.

## 6. Notable developments, 2025–2026 Q1

- **2025-05**: Doubao-1.5-Vision-Pro went live on Volcano Engine as the commercial multimodal flagship,
  with an accompanying Seed-VL technical report.
- **2025-06**: Seed-Seedance 1.0 (video generation) was released, targeting Kling / Vidu / Sora.
- **2025-09**: to align with the *Labeling Measures*, Doubao outputs began adding implicit watermarks conforming to GB 45438-2025 by default.
- **2025 Q4**: ByteDance joined the TC260-003 revision working group and contributed practice cases on content-safety evaluation for large models.
- **2026-02**: Doubao 2.0 was pre-announced; per Volcano Engine, the goal is "unified SOTA across reasoning and multimodality,"
  but as of 2026-04-23 no standalone technical report has appeared.
- **2026-04**: publication of the *Anthropomorphic Interactive Services Measures* means Doubao's "virtual friend / AI persona" features will trigger
  a **model-change re-filing**—under the Chinese regime this is the most important Model Card moment after "new model launch."

## 7. Practical recommendations (for researchers and practitioners)

- To study Doubao's capabilities, first consult the **Volcano Engine WeChat public account and the Volcano Engine developer blog**, then the Seed-series arXiv papers.
- Watch for **CAC filing-roster updates**; they reveal ByteDance's product-line cadence (though not its contents).
- For third-party evaluation, use **held-out Chinese benchmarks** (avoiding C-Eval and other benchmarks with suspected training-set contamination),
  such as FinEval or private holdout sets of SuperCLUE-Math.
- Mapping onto the standard Western Model Card chapters (Intended Use / Risks / Evaluation / Limitations),
  ByteDance's disclosure is relatively complete on "Intended Use" and "Evaluation" but noticeably thin on "Risks" and "Limitations."

## 8. Related index

- Top-level rules: [*Generative AI Interim Measures*](/en/rules/china/generative-ai-interim-measures/) Art. 17 (filing)
  · [TC260-003-2024](/en/rules/china/tc260-gen-ai-security-basic-requirements/)
- Peer comparison: [Anthropic / model-card](/en/companies/anthropic/model-card/)
  · [OpenAI / model-card](/en/companies/openai/model-card/)
  · [DeepMind / model-card](/en/companies/deepmind/model-card/)
- Adjacent company pages: [safety-framework](./safety-framework/) · [red-team-disclosures](./red-team-disclosures/)
