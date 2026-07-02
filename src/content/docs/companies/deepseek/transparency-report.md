---
title: Transparency Report
description: DeepSeek's "technical transparency substituting for corporate transparency" model and its global governance controversies (2026-06-28)
sidebar:
  order: 4
snapshotDate: 2026-06-28
---

> **One-line framing**: DeepSeek has no **Transparency Report** in the Western sense (quarterly
> government requests, content takedown statistics, law-enforcement responses), but its
> **technical-dimension transparency** (training data composition, compute, training methods,
> evaluation results) **exceeds that of any closed-source lab**. This asymmetric structure —
> **high technical transparency (技术透明度), low governance transparency** — is Chinese frontier
> labs' implicit reshaping of global transparency norms, challenging the premises of **Ranking
> Digital Rights, the Foundation Model Transparency Index, and the GPAI CoP Transparency
> Chapter** and similar mainstream Western frameworks.

## 1. The Western normative evolution of "Transparency Report"

To understand DeepSeek's absence, one must first be clear about the **normative origins** of
Western Transparency Reports:

- **Origin**: government-request statistics by internet platforms (Google's first in 2010,
  Twitter 2012, Facebook 2013, Apple, Microsoft).
- **Evolution**: from **government data requests** expanded to **content takedown requests,
  copyright complaints, user data, counter-terrorism disclosures, DMA/DSA compliance data,
  election interference response**.
- **AI-lab inheritance**:
  - Anthropic [Transparency Hub](https://www.anthropic.com/transparency): semi-annual government
    requests, legal process, risk reports, Economic Index, etc.
  - OpenAI transparency disclosures: safety evaluations, Preparedness reports, government
    requests.
  - Google DeepMind: transparency integrated with Alphabet reporting.
- **New foundation-model norm**: **Bommasani et al., Foundation Model Transparency Index (FMTI)**
  — 100 indicators across three layers (Upstream / Model / Downstream).

DeepSeek **scores low across all of these norms** — but its FMTI **data-dimension score is
higher than most closed-source firms**.

## 2. The actual vehicles of DeepSeek's transparency disclosure

### Technical transparency (high density)

| Dimension | DeepSeek disclosure | Typical vehicle |
| --- | --- | --- |
| Architectural detail | **Fully public** | V2/V3/R1 technical reports |
| Training-data domain distribution | **Semi-quantitative public** | V3 §2.2 (Chinese / English + code share) |
| Training compute (GPU-hours) | **Fully public** | V3: 2.788M H800 GPU-hours |
| Training methodology (RL/SFT) | **Fully public** | R1 §2–4 |
| Hyperparameters | **Mostly public** | Paper appendix |
| Evaluation results | **Fully public** | 30+ benchmarks |
| Tokenizer / vocabulary | **Fully public** | HuggingFace |
| Weights | **Fully public (MIT)** | HuggingFace / GitHub |
| Training-infrastructure innovations | **Fully public** | DualPipe / FP8 / MLA, etc. |

### Corporate governance transparency (low density / absent)

| Dimension | DeepSeek disclosure | Note |
| --- | --- | --- |
| Headcount / organization chart | **Not disclosed** | Overseas media estimate the lab's size as significantly smaller than leading US labs |
| Funding / equity structure | **Not disclosed** | Known to be High-Flyer self-funded; specific shares not disclosed |
| Government data request statistics | **None** | No such report |
| Content takedown / refusal statistics | **None** | chat.deepseek.com refusal behavior not statistically disclosed |
| Law enforcement response mechanism | **None** | No LEA request policy page |
| Copyright complaint handling | **None** | HuggingFace platform has a generic mechanism |
| Vulnerability disclosure policy | **None** | No security.txt / bug bounty |
| External audit reports | **None** | No AISI / external-review agreements signed |
| CAC filing materials | **Not public** | Filing completed, materials confidential |
| Executive compensation / governance structure | **Not disclosed** | Private company, no disclosure obligation |
| Supply chain / data vendors | **Not disclosed** | Training-data vendors not listed |
| Labor practices (annotation, RLHF) | **Not disclosed** | No annotator working-conditions disclosure |

## 3. DeepSeek in the Foundation Model Transparency Index

### Structure and historical scores

Bommasani et al. FMTI (v1.0 2023-10, v1.1 2024-05, v1.2 2025-Q3 with DeepSeek included) covers
**100 indicators** across three layers:

- **Upstream** (data, labor, compute, methodology, model foundations)
- **Model** (basics, capabilities, risks, limitations, mitigations, distribution)
- **Downstream** (distribution, usage policy, model behavior, downstream impact, feedback, policy
  applications)

### DeepSeek's score structure (2025 FMTI update)

| Dimension | Approximate score | Lateral comparison |
| --- | --- | --- |
| Methods | **High** (> 70%) | Exceeds most closed-source firms |
| Data | **Mid-high** (~55%) | Comparable to Meta Llama |
| Compute | **High** (> 70%) | Above OpenAI / Anthropic |
| Capabilities | **High** | Full evaluation disclosure |
| Risks | **Mid-low** (~30%) | Below Anthropic / OpenAI |
| Mitigations | **Low** (< 25%) | Weakest dimension |
| Distribution | **High** | Fully open |
| Usage Policy | **Low** (< 30%) | Thin text |
| Labor | **Very low** (< 10%) | Almost no disclosure |
| Downstream Impact | **Low** | No tracking mechanism |
| Feedback & Redress | **Low** | No standardized channel |

**Overall pattern**: DeepSeek scores high on the **upstream + model** layers of FMTI, and low on
the **downstream + impact** layers. This is fully consistent with its corporate strategy
(research-oriented, no governance-operations team).

## 4. Academic discussion of "technical transparency" as a substitute for "corporate transparency"

### Western starting point vs. Chinese starting point

**Marietje Schaake (Stanford / former MEP)**, in *The Tech Coup* (2024), argues that Western tech
companies' transparency reports **originated from "content governance disputes"** — governments
demanded data from platforms, and platforms reverse-disclosed to preserve public trust. This is
**"downstream governance transparency."**

**Matt Sheehan** reverse-observes: Chinese frontier AI companies' transparency **originated from
academic publication** — the ML paper paradigm requires method and result disclosure. This is
**"upstream capability transparency."**

These two transparencies are **not different degrees of the same concept, but different disclosures
of different objects**. Using "corporate transparency reports" as the evaluation framework
**systematically underestimates** the transparency of Chinese frontier labs (on the technical
dimension) and **systematically overestimates** the transparency of US frontier labs (on the
upstream dimension).

### Ben Thompson's "information asymmetry" critique

**Ben Thompson (Stratechery)**, in the 2025-01 "DeepSeek FAQ," made the core observation that
DeepSeek's information output to the technical community is **over-abundant** (papers, code,
weights), while its output to the commercial and regulatory communities is near-zero — not
simply "insufficient transparency" but a **selective transparency**, with disclosure concentrated
where global technical reputation is most readily earned, and opacity concentrated where
commercial / regulatory interaction is most sensitive.

Thompson's "selective transparency" critique applies especially well to DeepSeek, but he also
concedes that **US frontier labs' selective transparency is severe in the opposite direction**
(high policy transparency, low technical transparency).

### Ranking Digital Rights' evaluation blind spot

The **Ranking Digital Rights (RDR) Corporate Accountability Index** covers human-rights-related
transparency of telecom, internet, and tech platforms. The RDR framework **does not cover
DeepSeek** (because DeepSeek is neither a platform operator nor a telecom), creating a
**governance-evaluation blind spot**: the RDR 2024 report covers Meta, Google, Microsoft,
Alibaba, Tencent, and Baidu, but **does not separately evaluate DeepSeek / OpenAI / Anthropic**
as "frontier model providers."

> **Marietje Schaake and Jonathan Stray**, among others, have called for RDR to be extended to
> frontier AI labs; as of 2026-04 this has not happened. DeepSeek sits in this gap, **neither
> evaluated nor constrained**.

## 5. The FMTI 2025 update's DeepSeek spotlight

FMTI v1.2 (Stanford CRFM, 2025-Q3) dedicates a section to DeepSeek, with core observations
summarized as:

- The release of R1 prompted a re-assessment of the entire transparency landscape — it provided
  extraordinarily detailed information on training methodology while disclosing almost nothing
  about organizational governance.
- DeepSeek therefore becomes **one of the highest method-transparency frontier models** in the
  FMTI.
- FMTI explicitly cautions: this assessment only reflects technical disclosure density and should
  not be read as a comprehensive responsible-AI-practice score.

This FMTI phrasing reflects researchers' **vigilance against the misreading of "technical
transparency equals overall transparency."**

## 6. Chinese academic transparency discussion

### Zhang Linghan 张凌寒 (China University of Political Science and Law)

In *A Layered Theory of Algorithmic Transparency* (2023), she distinguishes:

1. **Rule transparency**: disclosure of algorithmic principles and policies
2. **Process transparency**: traceability of decision-making chains
3. **Capability transparency**: disclosure of algorithmic capabilities and limitations
4. **Impact transparency**: monitoring of downstream effects

**DeepSeek performs extremely well on layer 3 (capability transparency), and has almost no
disclosure on layers 1, 2, and 4.** Zhang further notes: China's regulatory framework anchors
transparency demands primarily at **layers 1 and 2** (via filing) rather than layer 3, producing
a **mismatch** with DeepSeek's disclosure bias — DeepSeek discloses to the public the layer the
regulator does not especially demand, while layers the regulator demands are sealed inside the
filing.

### Zhu Yue 朱悦 (Chinese Academy of Social Sciences)

In *The "Double Opacity" of Frontier AI* (2025), he notes:

- **Opaque to the public** (corporate governance).
- **Opaque to the regulator** (filing materials not public to the public).

DeepSeek's **technical transparency** is a **third space**: neither corporate-governance
transparency nor regulatory-disclosure transparency, but **disclosure aimed at the academic and
open-source communities**. Zhu considers this **a "norm-uncovered transparency"** — it produces
value, but cannot substitute for traditional transparency-accountability mechanisms.

## 7. Industry first-hand: observable indirect signals

In the absence of official disclosure, researchers infer DeepSeek's operational status from
**indirect signals**:

### High-Flyer and DeepSeek's organizational boundary

- **AI Index 2025 Q4** (Stanford HAI) attempted to map the legal-entity relationship between
  High-Flyer and DeepSeek, but **could not obtain first-hand materials** and had to rely on media
  coverage and business-registration mosaics.
- Publicly known: **Liang Wenfeng 梁文峰 is simultaneously the core leader of both High-Flyer and
  DeepSeek**, with employee overlap; DeepSeek's independent legal-entity status was likely
  established between late 2024 and early 2025 (exact date uncertain).
- **High-Flyer's AUM** is reportedly on the order of hundreds of billions of RMB; its **own
  capital** is sufficient to fund DeepSeek's H800 buildout (specific AUM per company disclosure).

### Overseas host traffic as a "user-scale proxy"

- **Together AI**, **Lepton AI**, and **Fireworks AI** partially disclose call volumes for
  DeepSeek models.
- According to third-party traffic statistics (OpenRouter, Artificial Analysis), DeepSeek models
  (V3 + R1 + distilled variants) held a **significant share of global open-source inference
  traffic** in H1 2025.
- These data are **not from DeepSeek** but objectively reflect the global usage density of the
  models.

### HuggingFace activity statistics

- **Model downloads**: cumulative downloads of V2 through V3.1 weights are on the order of
  **tens of millions**, with R1 contributing most.
- **Community discussion**: R1 repository discussion / likes numbers are **among the highest in
  open-source LLM repositories.**
- **Fine-tuned derivatives**: thousands of derivative models on HuggingFace are based on DeepSeek
  weights.

(Specific numbers per HuggingFace real-time repository statistics.)

## 8. Regulatory transparency pressure in 2025–2026-Q1

### Italy's Garante (early 2025)

The first EU DPA temporary measure against DeepSeek. The Garante's core reasoning was that
DeepSeek did not provide sufficient GDPR compliance description for its data-processing
activities — the first local regulatory cost of **governance-transparency absence** (exact date
per Garante's official announcement).

### Multi-country government-device bans (H1 2025)

- Early 2025: South Korea, Taiwan, Australia successively announced government-device bans.
- H1 2025: US Department of Defense, Department of Commerce, NASA, FCC, and other federal
  agencies successively implemented bans.
- H1 2025: multiple US state-level bans (including Texas, Virginia) followed.
- Mid-2025: parts of the Japanese government and Canadian federal agencies followed.

(Exact announcement dates per official press releases.)

A common phrase across these bans: **"insufficient data-processing transparency,"** **"inability
to assess compliance risk"** — these are the direct consequences of **corporate-governance
transparency absence**, not of DeepSeek's model capability or safety.

### EU AI Office's GPAI systemic-risk review (2025-10)

The EU AI Office added DeepSeek to its GPAI systemic-risk review list. **Because DeepSeek does
not operate directly in the EU**, the EU primarily applies compliance pressure **via downstream
hosts** (Together, Lepton, etc.). This **indirectly pressures** the hosts to demand more
governance information from DeepSeek — **market structure becomes the compliance lever**.

## 9. DeepSeek's value in the global transparency debate

### Positive points

- **Technical reproducibility**: DeepSeek's disclosure enables **global independent research**,
  a scientific value that **closed-source labs cannot provide**.
- **Cost transparency**: the disclosure of H800 GPU-hours lets **global discussion of compute
  economics** be grounded (Epoch AI, Artificial Analysis, and others use these data to build
  training-cost models).
- **Training methodology is verifiable**: the R1 paper discloses GRPO + rule-based rewards in
  detail, and multiple independent teams (Sky-T1, Open-R1) have successfully reproduced it — the
  first **"scientific verification" of a frontier reasoning model**.

### Negative points

- **Governance vacuum**: no standardized interfaces for compliance, user protection, LEA
  response, or data complaints.
- **Legal-risk transfer**: downstream hosts absorb compliance pressure (Together and Lepton face
  higher legal costs).
- **Regulatory-signal confusion**: countries cannot run regulatory assessments on standardized
  information, and are **forced to use blanket bans as a risk-reduction tool.**

## 10. Page conclusion

DeepSeek's transparency practice **structurally challenges global transparency norms**:

> It demonstrates that **"frontier capability can be directly proportional to technical-disclosure
> density"** (undermining the "competitive safety" excuse of closed-source labs), while also
> demonstrating that **"technical disclosure density cannot substitute for governance disclosure
> density"** (the downstream regulatory cost is real).

For transparency researchers (Bommasani, Schaake, Zhang Linghan), DeepSeek is the **most important
observation sample of 2025–2026**: it simultaneously **raises the disclosure floor for
Methods / Data / Compute**, and **lowers the disclosure floor for Governance / Usage / Impact**.
Future transparency frameworks (FMTI v2, GPAI CoP revisions, China's transparency standardization)
must solve the problem of **evaluating both kinds of disclosure simultaneously**.

## References

- Bommasani, R. et al. (2023/2024/2025). *Foundation Model Transparency Index* v1.0/1.1/1.2.
  Stanford CRFM
- Schaake, M. (2024). *The Tech Coup.* Princeton University Press
- Stray, J. & others. *Ranking Digital Rights 2024 Corporate Accountability Index.* RDR
- Sheehan, M. (2025). *ChinAI Newsletter* #300–310
- Thompson, B. (2025-01-27). *DeepSeek FAQ.* Stratechery
- AI Index 2025 Q4 (Stanford HAI), "Chinese Frontier Labs" chapter
- Zhang Linghan 张凌寒 (2023). *A Layered Theory of Algorithmic Transparency.* *Chinese Journal of Law*
- Zhu Yue 朱悦 (2025). *The "Double Opacity" of Frontier AI.* *Tsinghua Law Review*
- Garante per la protezione dei dati personali. (2025-01-30). *Provvedimento DeepSeek*
- EU AI Office (2025-10). *GPAI Systemic Risk List Update*
