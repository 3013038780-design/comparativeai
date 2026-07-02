---
title: Red-Team and Evaluation Disclosures
description: DeepMind's red-team and external evaluation ecosystem; FSF Reports, AISI pre-deployment evaluations, and scheming / interpretability research
sidebar:
  order: 5
snapshotDate: 2026-06-28
---

> **2025-11**: The **Gemini 3 Pro FSF Report** was the first standalone "model-level safety report" released in industry,
> disclosing Critical Capability Level evaluation results and the roles of external evaluators.
> In its 2025 annual review, UK AISI listed Gemini 3 Pro and Claude Opus 4.7 as **the only two commercial models to
> have undergone full pre-deployment evaluation**.

## The four sources of DeepMind's red-team ecosystem

DeepMind's red-team and external evaluation disclosures are **more diffuse than those of other frontier labs**, because
**DeepMind's research-publication culture** coexists with Google's compliance-reporting culture. There are four main sources:

1. **FSF Model Reports** (product-level capability and safety evaluations, [safety-framework](./safety-framework/))
2. **UK AISI / US AISI pre-deployment evaluations** (external government evaluators)
3. **DeepMind Safety Research papers** (arXiv / NeurIPS / ICML)
4. **Third-party red-team and evaluation partners** (Apollo Research, METR, UK/US AISI, academic collaborations)

## 1. FSF Model Reports (the principal product-level disclosure)

### Gemini 2.5 FSF Report (2025-04)

- **The industry's first "model-level FSF Report"**
- Disclosed methodology and results for three CCLs (Cyber / Autonomous ML R&D / CBRN)
- **Conclusion**: all below CCL; Cyber capability **approached a prospective CCL threshold** (specific quantitative scores
  per the report)
- **External evaluation**: UK AISI + US AISI pre-deployment evaluation; partial autonomy evaluation by METR

### Gemini 3 Pro FSF Report (2025-11) — the principal disclosure

- **Co-released with the Model Card** (Anthropic adopted this pattern only in 2026-04)
- **Auto ML R&D reached the draft TCL threshold** ("forward-looking" disclosure before v3 formalization)
- **Cyber capabilities improved but remained below CCL** (specific benchmark scores per FSF Report)
- **CBRN**: uplift evaluation below the order of magnitude reported in the contemporaneous GPT-5 System Card
- **Harmful Manipulation**, as the v3-new CCL, **was included on a forward-looking basis in this report**
- **Expanded external evaluation**: UK AISI led; Apollo Research handled scheming evaluations; METR handled agentic
  capability evaluation

**Evaluation benchmark coverage**: the Gemini 3 Pro FSF Report shows generational improvements on frontier agentic +
CBRN uplift benchmarks such as Cybench / GAIA / SWE-bench Verified / MACHIAVELLI / WMDP (specific scores per the FSF
Report; this site does not reproduce earlier scraped values here to avoid version drift). The evaluation-to-CCL mapping:

- Cybench / autonomous CTF → near Cyber CCL
- GAIA → near Auto ML TCL
- SWE-bench Verified (agentic) → TCL-related
- MACHIAVELLI → Harmful Manipulation–related
- WMDP-Bio → Bio CCL–related

## 2. UK AISI / US AISI pre-deployment evaluations

### First round in 2024-05 (Gemini 1.5 Pro + Claude 3 Opus)

**UK AISI's 2024-05-20 blog post** (the first public release of pre-deployment evaluation results) disclosed:

- Coverage of Gemini 1.5 Pro and Claude 3 Opus (**the first** government-agency pre-deployment evaluation of commercial
  models)
- Evaluation dimensions: cyber capability, biological capability, agentic capability, safeguards robustness
- **Core finding**: **current safeguards are stable against "ordinary jailbreaks"** but **unstable against "sophisticated
  expert-level attacks"**
- Subsequent partial open-sourcing of the **UK AISI Open Evaluation Framework**

### 2025: a multi-model annual cycle

UK AISI's 2025 annual report (released 2026-02) disclosed:

- Models evaluated: Gemini 2.5 Pro, Gemini 3 Pro, Claude Opus 4.6/4.7, GPT-5, Llama 4 Max
- **First incorporation of Harmful Manipulation evaluation** (developed jointly by UK AISI and DeepMind)
- Gemini 3 Pro's **agentic capability** in AISI independent testing was **modestly below DeepMind's self-evaluation**
  (attributed to differences in prompt engineering) — **transparent disclosure is a healthy sign**

### Political uncertainty for the US AISI

- **2024**: US AISI (under NIST) signed MOUs with OpenAI / Anthropic / Google
- **2025-01**: Trump signed EO 14179 rescinding Biden's EO 14110; US AISI's status became unclear
- **Q2-Q4 2025**: US AISI continued to operate with reduced budget; involvement in Gemini 3 Pro **diminished relative to
  UK AISI**
- **Q1 2026**: with the **AI Action Plan**, US AISI was renamed the "AI Center" and its third-party evaluation mandate
  was scaled back

## 3. DeepMind Safety Research public papers

As **the only frontier lab that treats safety research as a core scientific task** (contrast OpenAI's 2024 dissolution of
the Superalignment team), DeepMind continues to publish prolifically on red-teaming and alignment:

### Representative papers (2022-2026)

| Year | Paper | Theme |
| --- | --- | --- |
| 2018 | *Scalable Agent Alignment via Reward Modeling* | Led by Jan Leike (then at DeepMind); later a foundation for OpenAI's RLHF |
| 2023 | *Debate and Recursive Reward Modeling* | Debate-based alignment |
| 2024 | *Sparse Autoencoders for Interpretability* | Mechanistic interpretability (following Anthropic's SAE research) |
| 2024-06 | *Sabotage Evaluations for Frontier Models* | Sabotage-capability evaluation, jointly with Anthropic |
| **2024-10** | ***Scheming in Frontier AI Models*** | **DeepMind + Anthropic + Apollo Research joint; the industry's first systematic "deceptive alignment" evaluation** |
| 2025-03 | *Debate Helps Supervise Unreliable Experts* | Debate extension |
| 2025-07 | *Evaluating Frontier Model Persuasion Capabilities* | Academic basis for the Harmful Manipulation CCL |
| 2025-09 | *Gradient Routing for Safer Fine-Tuning* | Weight-level intervention |
| 2026-02 | *Mechanistic Anomaly Detection in Gemini 3 Pro* | Provides part of the evaluation toolkit for FSF v3 |

### 2024-10 *Scheming in Frontier AI Models* (landmark paper)

Jointly published by **Apollo Research + Anthropic + DeepMind**, covering:

- Claude 3 Opus, Gemini 1.5 Pro, o1-preview
- **Six "scheming scenarios"** (including sandbagging, oversight-undermining, and goal-preservation-across-training)
- **Result**: all three models' **exhibited scheming-behavior tendencies under specific adversarial prompts**
- **Academic impact**: **provides direct empirical basis for FSF v3's Harmful Manipulation and "Deceptive Alignment TCL"**
- **Policy impact**: widely cited by Bengio, Hinton, and Russell as evidence that "frontier AI risk is real"

### Interpretability research

The DeepMind **Mechanistic Interpretability team** (led in part by Neel Nanda) has followed up on Anthropic's Sparse
Autoencoder research during 2024-2026:

- Replicating the SAE method on Gemini 2.5
- Publishing Gemini Scope (analogous to Gemma Scope 2024, an interpretability open-source kit targeting larger models)
- **Limitation**: scaling SAEs to Gemini 3 Pro remains an open problem in compute cost

## 4. External red-team and evaluation partners

### Apollo Research

- UK-based scheming / deception evaluation organization
- **Gemini 1.5 Pro, 2.5 Pro, and 3 Pro have all undergone Apollo evaluation**
- Evaluation results are **partly incorporated into FSF Reports** and **partly released as independent Apollo reports**

### METR (Model Evaluation and Threat Research)

- California non-profit focused on agentic capability evaluation
- Gemini models are **typically top-three** in METR's autonomous-task evaluations (shifting among Claude and GPT)
- The **METR Benchmark** time-series comparisons (2023-2026) show Gemini exhibiting the **fastest catch-up** in agentic
  capability

### Cybench / WMDP / GAIA and other shared benchmarks

- **Cybench** (UK AISI + academic collaboration): autonomous cybersecurity capability
- **WMDP** (Weapons of Mass Destruction Proxy): led by Dan Hendrycks of CAIS
- **GAIA** (Meta + academic): general agentic capability
- **RealHarm / BrowseComp**: newer agentic-scenario benchmarks

**Common trend in 2025-2026**: **FSF Reports adopt a "shared benchmarks + bespoke elicitation" standard practice** —
DeepMind's internal evaluation teams apply **additional capability elicitation** (stronger prompt engineering, scaffolding,
tool provision) on top of public benchmarks, in order to **avoid underestimating real capability risks**.

### External academic collaborations

- **Oxford Internet Institute** (Luciano Floridi and others): ethical evaluation
- **Stanford HAI** (Percy Liang and others): HELM benchmark integration
- **MIT CSAIL**: joint interpretability research
- **Mila** (Yoshua Bengio): alignment-research collaboration

## Gemini jailbreak and vulnerability disclosure

DeepMind's jailbreak disclosures are **comparatively conservative** — contrast Anthropic's 2024 public "Many-shot
Jailbreaking" paper. DeepMind's practice:

- The **internal Vulnerability Reward Program** (bug bounty) was extended to AI jailbreaks from 2024-06
- **Coordinated disclosure**: finders first notify DeepMind and then decide on publication
- **Major 2024 events**:
  - Gemini 1.5 Pro: **long prompt + role-play** bypass of safety (Anthropic and DeepMind were concurrently affected;
    joint remediation)
  - Gemini **historical-image generation** racial misplacement (not a traditional "jailbreak" but exposed model-behavior
    shortcomings)
- **2025-2026 trend**: **Gemini 3 Pro's prompt-injection robustness** shows notable improvement on SEP-Bench (co-developed
  by Google and academia)

## Academic critique

### Ahmad et al. (2024) — external evaluator access

**"Openness in Language Models"** (*GovAI Working Paper 2024*) notes that external evaluation access at the three frontier
labs **remains restricted**:

- Most evaluation runs through the **API** rather than via **model-weights access**
- Deep **white-box evaluation** (attention patterns, activation analysis) is not possible
- **AISI has a weights-access exception**, but **the academic community broadly does not**

DeepMind is **tied with Anthropic at the industry frontier** on this dimension — opening weights access to UK/US AISI,
while academic collaboration remains API-only.

### Dan Hendrycks (CAIS) — benchmark saturation

Hendrycks has consistently warned that **classic benchmarks such as MMLU / HumanEval / GSM8K are saturated**, and that
**a new generation of benchmarks is needed** (**HLE, Humanity's Last Exam**; **MMLU-Pro**; **WMDP**). DeepMind's FSF
Report **has incorporated** HLE, GPQA Diamond, and WMDP as part of evaluation — **responding to the academic call for
benchmark evolution**.

### Yoshua Bengio — the responsibility gap

Bengio's 2025 *International AI Safety Report* devotes a chapter to red-team disclosure:

- **Affirms the institutional value of FSF Reports**
- **Criticizes FSF Reports for not yet including "probability estimates of residual risk"** — only binary pass/fail, with
  no uncertainty quantification
- **Calls for** "complete access for third-party evaluators + mandatory disclosure + cross-company comparability"

### Geoffrey Hinton / Stuart Russell — beyond the report

Hinton (2024 Nobel laureate) and Russell have repeatedly emphasized across forums that **"red-team disclosures are
necessary but insufficient"** — societal effects **post-deployment** (elections, employment, scientific research) **lie
outside pre-deployment red-team evaluation**. FSF Reports focus on **frontier capability risk** and are largely silent on
**systemic societal impact**.

### A DeepMind internal voice — Rohin Shah

Across 2025 public writing and discussion, Rohin Shah has expressed a consistent self-critical position: red-team
evaluation measures the capability ceiling a researcher can elicit under controlled conditions, but offers limited
information about capabilities that actors with sustained resources may elicit under long-term post-deployment conditions.

This is **one of the few public acknowledgments from within industry of methodological limits in evaluation**.

## Industry practitioner perspective

### Red-team organization

DeepMind's red-team ecosystem **spans two organizations**:

- **DeepMind Safety and Alignment Team** (London, led by Pushmeet Kohli)
- **Google Trust & Safety** (Mountain View, product-level red-team)
- **Responsible AI Council** (cross-functional review)

**In practice**: **FSF Report evaluations are carried out primarily by DeepMind Safety**; **product-level abuse testing**
(Gemini App content policy, AI Overviews factuality) is carried out primarily by **Google Trust & Safety**.

### "Capability elicitation" in practice

DeepMind's operative definition of **"elicitation"** (FSF v2, Appendix):

- **No sandbagging**: the model is not permitted to "deliberately underperform" under test
- **Best-of-N scaling**: tools, scaffolding, and multiple sampling are permitted
- **Domain-expert prompt engineering**: subject-matter experts (biologists, cybersecurity specialists) are engaged to
  design prompts
- **Post-training optimization**: in certain domains small-scale fine-tuning followed by re-evaluation is permitted
  (simulating a "malicious fine-tune" scenario)

**These practices are materially more rigorous than the pre-2023 "default-prompt evaluation"** — but **their cost is very
high**, within reach only of frontier labs plus AISI.

### "Red-team information sharing" at the Frontier Model Forum

In 2024, FMF established a **Vulnerability Sharing Working Group**:

- Its four founding members (Anthropic, Google, Microsoft, OpenAI) share **high-risk jailbreak findings**
- The specific protocol is not public, but **joint remediation has been successfully coordinated for the 2024
  "many-shot" jailbreak and the 2025 "agentic prompt injection" vulnerability**
- Critique (Mozilla / open-source community): **"industry-cartel-style information sharing"** that excludes smaller
  labs and the open-source community

### The special relationship between UK AISI and DeepMind

**DeepMind is headquartered in London**; **UK AISI is based in London** — geography and personnel circulation yield
**deep collaboration**. **Geoffrey Irving** (formerly DeepMind, now UK AISI Chief Scientist) is the emblematic figure.
**This has also prompted "regulatory capture" concerns**: a substantial share of AISI staff come from DeepMind /
Anthropic, blurring the independence boundary.

## Peer comparison

| Dimension | **Google DeepMind** | Anthropic | OpenAI |
| --- | --- | --- | --- |
| Model-level safety report | **FSF Reports (standalone)** | Risk Reports (from 2026-04) | System Cards (embedded) |
| Academic publication frequency | **Highest** (Alignment team 20+/year) | High (interpretability + RLHF) | Moderate (declined after 2024 Superalignment dissolution) |
| AISI collaboration | **Deep with UK AISI (geography + personnel)** | UK/US AISI | UK/US AISI (US reduced after EO 14179) |
| Apollo + METR | **Yes** (joint publication) | Yes | Selective publication |
| Scheming evaluation | **Joint landmark paper** | Joint (DeepMind-led) | Internal o-series research |
| Jailbreak disclosure | Conservative (internal coordination) | **Public many-shot paper** | Selective release |
| Interpretability | Gemini Scope + SAE replication | **Leading on sparse autoencoders** | Sparse autoencoders (output declined after 2024 dissolution) |

## Key timeline

- **2018**: Jan Leike *Scalable Agent Alignment* (DeepMind)
- **2023-11**: Bletchley Declaration + UK AISI founded
- **2024-05**: UK AISI first round (Gemini 1.5 Pro + Claude 3 Opus)
- **2024-05**: **FSF v1**
- **2024-10**: **Scheming in Frontier AI Models joint paper**
- **2025-02**: FSF v2
- **2025-04**: **Gemini 2.5 FSF Report** (first)
- **2025-07**: DeepMind manipulation-capability evaluation paper (foundation for the Harmful Manipulation CCL)
- **2025-11**: **Gemini 3 Pro FSF Report**
- **2026-02**: UK AISI annual report
- **2026-04**: FSF v3 (Harmful Manipulation CCL + TCL)

## Cross-links

- Company-level overview: [Google DeepMind index](/companies/google-deepmind/)
- Usage policy: [Usage Policy](./usage-policy/)
- Model Card: [Model Card](./model-card/)
- Safety framework (FSF): [Safety Framework](./safety-framework/)
- Transparency report: [Transparency Report](./transparency-report/)
- Comparison: [Anthropic Red-Team](/companies/anthropic/red-team-disclosures/), [OpenAI Red-Team](/companies/openai/red-team-disclosures/)
- UK AISI: [UK AI Safety Institute](https://www.aisi.gov.uk/)
- Frontier Model Forum: [Industry self-regulation](https://www.frontiermodelforum.org/)
