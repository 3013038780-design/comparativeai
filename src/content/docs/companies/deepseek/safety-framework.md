---
title: Safety Framework
description: DeepSeek's "minimalist + embedded" safety posture — an open-source path with no RSP / Preparedness / FSF counterpart (2026-06-28)
sidebar:
  order: 3
snapshotDate: 2026-06-30
---

> **One-line framing**: DeepSeek is **the only firm among the world's top-five capability frontier
> labs with no published structured safety framework**. It has no counterpart to Anthropic's RSP,
> OpenAI's Preparedness Framework, Google DeepMind's Frontier Safety Framework, or Meta's
> Frontier AI Framework; it has not signed onto the Frontier Model Forum, the Seoul / Bletchley /
> Paris declarations, or the White House Voluntary Commitments; **nor has it signed the GPAI
> Code of Practice**. Its "safety" is nearly equated with **China's service-side compliance
> (CAC algorithm filing + TC260-003)**, plus **short sections inside the R1 / V3.1 technical
> reports**.

## 1. DeepSeek's "absence list" in frontier safety frameworks

The table below lists **major global frontier AI safety self-regulatory frameworks and
commitments**, and DeepSeek's signing / alignment status:

| Framework / commitment | Originator / lead | Anthropic | OpenAI | Google DM | Meta | **DeepSeek** |
| --- | --- | --- | --- | --- | --- | --- |
| White House Voluntary Commitments (2023) | US | Signed | Signed | Signed | Signed | Not signed |
| Frontier Model Forum | 2023-07 founding four | Founding | Founding | Founding | Joined | Not joined |
| Bletchley Declaration (2023) | UK | Signed | Signed | Signed | Signed | Not signed |
| Seoul AI Safety Commitments (2024) | KR+UK | Signed | Signed | Signed | Signed | Not signed |
| UK / US AISI pre-deployment testing MoUs | UK/US AISI | Yes | Yes | Yes | Partial | Not signed |
| GPAI Code of Practice (2025) | EU | All three chapters | Yes | Yes | Partial | Not signed |
| In-house RSP / Preparedness / FSF | Self | RSP v3 | Preparedness v2 | FSF v3 | FAIF | **None** |

DeepSeek's "across-the-board absence" is **not a random oversight** but is determined by the
following structural factors:

1. **High-Flyer 幻方量化 capital independence**: no international investor pressure to sign onto
   global governance frameworks (contrast with Anthropic's Google / Amazon investors, or OpenAI's
   Microsoft partnership).
2. **Does not enter US / EU markets as an official operator**: chat.deepseek.com does not operate
   directly in the US or EU (host resale does not constitute DeepSeek signing an AUP), lowering
   local compliance burden.
3. **Endogenous substitution from China's governance logic**: CAC filing + TC260-003 + MLPS +
   algorithm security self-assessment reports already form a **complete service-side compliance
   loop**; corporate self-regulatory documents have **low marginal value** under this regime.
4. **Lab size constraints**: DeepSeek's team is far smaller than the leading US frontier labs
   (overseas media mosaics suggest an order-of-magnitude gap; the company has not confirmed
   specific headcount), and it has **no dedicated Trust & Safety department**; by contrast,
   Anthropic, OpenAI and others all maintain full-time safety / policy teams, with a commensurate
   gap in governance documentation capacity.

## 2. The actual vehicles of DeepSeek's safety disclosure

Even without a structured framework, DeepSeek is **not entirely without safety disclosure** —
but the disclosure is scattered across three vehicles:

### Vehicle 1: the Safety section in technical reports

- **V3 technical report §5**: contains Chinese / English safety benchmarks including SafetyBench,
  CVALUES, and TruthfulQA.
- **R1 technical report §5**: briefly discusses R1-Zero's language mixing, format instability,
  and preliminary reward-hacking observations.
- **V3.1 technical blog + HuggingFace README** (2025-08): **first systematic bias / fairness
  evaluation** across Chinese / English benchmarks, covering gender, regional, and occupational
  bias.

### Vehicle 2: CAC filing materials

- **Not public**.
- First batch approved 2023-10; V3 / R1 / V3.1 added successively.
- Includes the "algorithm security self-assessment report," following TC260-003 and the CAC's
  2023 guidance.
- Chinese scholars (Zhang Linghan 张凌寒, Zhu Yue 朱悦) have repeatedly called for **at least
  summary disclosure**; as of 2026-04, this has not happened.

### Vehicle 3: GitHub issues and HuggingFace discussion pages

- Some safety issues are handled via open-source community feedback.
- Company engineers replying to GitHub issues has **become an informal safety-disclosure channel**.
- But there is **no issue-response SLA, no official vulnerability disclosure policy** (no
  security.txt, no bug bounty).

## 3. The irrevocability of open weights and the collapse of a framework assumption

### The shared premise of mainstream safety frameworks

Anthropic RSP, OpenAI Preparedness, DeepMind FSF, and Meta FAIF **all depend on one key
assumption**: **"the company can choose not to deploy, delay deployment, or recall a model once a
risk threshold is crossed."**

- Anthropic RSP v2 original: if a threshold is reached without matching safeguards, **pause
  training or deployment**.
- OpenAI Preparedness: High / Critical thresholds trigger **internal review and possible delayed
  release**.
- DeepMind FSF: Critical Capability Level triggers **deployment gating**.
- Meta FAIF: the Critical tier can "**halt development** of this particular model."

**DeepSeek's open-source strategy structurally invalidates this premise**: once weights are on
HuggingFace, **globally-downloaded copies cannot be recalled**, and "pause," "recall," and
"deployment gating" become conceptually inapplicable.

### Academic debate: bug or feature?

**Open source brings uncontrollable risk** (Bengio / Hinton / Russell camp):

- **Yoshua Bengio** (2024-11 AI Safety Lectures): open-sourcing frontier model weights is
  analogous to "open-sourcing biological-weapon recipes," and should be legally restricted once
  capabilities cross some threshold.
- **Geoffrey Hinton**: has repeatedly expressed concern publicly, though not specifically about
  DeepSeek.
- **Stuart Russell**: in the extended discussion of *Human Compatible*, frames open source as
  **"an additional burden on alignment research."**

**No actual catastrophic misuse has been observed** (Kapoor & Narayanan / Bommasani camp):

- **Kapoor & Narayanan** (Princeton, *AI Snake Oil*; 2025-03 blog): in the 12 months since R1 /
  V3 were open-sourced, **no credible large-scale misuse cases** have surfaced; supposed
  "bioweapon uplift" concerns have been shown by empirical research (Peters et al. 2024) to have
  **small marginal effects**.
- **Rishi Bommasani (Stanford CRFM)**: open weights make **independent safety research** possible
  (third parties can audit / red-team), a governance value closed-source models cannot provide.
- **Elizabeth Seger et al.** (GovAI 2023, *Open-Sourcing Highly Capable Foundation Models*):
  systematically discusses the risk-benefit trade-offs of open / partially open release, calling
  for **capability-tiered release protocols** rather than blanket rules.

**DeepSeek's posture implicitly aligns with the latter camp** (expressed through action rather
than declaration).

### The liability-attribution debate

**Gary Marcus** (NYU / *Rebooting AI*): open weights make **legal and moral attribution of
downstream misuse** extremely ambiguous — if someone fine-tunes R1 into a harmful model, is
responsibility on DeepSeek, on the host, or on the fine-tuner? Marcus argues that open source is
not a "solution to liability" but a "transfer of liability."

**Zhang Linghan** (2024, *The Legal Theory of Responsibility for Frontier Foundation Models*):
Article 22 of the *Generative AI Interim Measures* (《生成式人工智能服务管理暂行办法》) defines
"provider" in a way that **does not clearly cover weight providers**. DeepSeek therefore
**enjoys de facto legal-ambiguity protection** on this question — so long as it does not directly
provide services to the public, whether releasing weights constitutes "service provision" under
the *Interim Measures* remains, as of 2026-04, **without case-law precedent**.

## 4. The "embedded" substitution from China's governance framework

Even without independent corporate self-regulatory documents, DeepSeek remains embedded in the
**full compliance chain of Chinese AI governance**:

### Hard law

- Compliance with the *Cybersecurity Law* (CSL)
- Compliance with the *Data Security Law* (DSL): important-data identification, risk assessment,
  domestic storage
- Compliance with the *Personal Information Protection Law* (PIPL): lawful basis, minimum
  necessity, cross-border transfer

### Ministerial rules

- *Provisions on the Administration of Algorithmic Recommendation for Internet Information
  Services* (effective 2022-03) — the starting point of algorithm filing
- *Provisions on the Administration of Deep Synthesis in Internet Information Services*
  (effective 2023-01) — precursor to synthetic-content labeling
- *Generative AI Interim Measures* (《生成式人工智能服务管理暂行办法》, effective 2023-08) —
  Article 7 on training-data legality, Article 4 on general content safety, Article 17 on safety
  assessment and filing
- *Measures for Labeling of AI-Generated Synthetic Content* (effective 2025-09) — explicit +
  implicit dual labeling

### Technical standards

- **TC260-003-2024** *Basic Security Requirements for Generative AI Services* — 27 security
  requirements, de facto mandatory
- *AI Safety Governance Framework* 1.0 / 2.0 (CAC / TC260) — principled guidance

### Chinese academic critique

- **Zhu Yue 朱悦 (2025)**, *The Tension Between Open Weights and National Data Security Law*:
  argues that **training data of overseas origin + globally distributed weights** creates
  potential conflict with "important data outbound transfer" provisions of the *Data Security
  Law*, and that **DeepSeek is the most stressed sample.**
- **Dai Xin 戴昕 (Peking University)**: in *Digital Rule-of-Law Review* (2024), argues that the
  "as is" disclaimer in the MIT License is **incompatible with Chinese product-liability
  doctrine**, creating significant uncertainty around civil liability for open weights.
- **Zhang Linghan 张凌寒**: repeatedly stresses that "corporate self-regulation is not a
  substitute for supervision," while also noting that in the Chinese model **corporate
  self-regulation has been almost fully replaced by filing**, causing corporate documentation
  capacity to atrophy and producing a **structural asymmetry in global dialogue**.

## 5. International China-AI analyst perspectives

- **Matt Sheehan (CEIP)**, in the *China's AI Regulations and How They Get Made* series, argues
  that DeepSeek's "minimalist self-regulation" is **corporate behavior induced by dense Chinese
  regulation**, not a company choice per se. The governance-documentation costs that DeepSeek
  saves are directly reinvested into R&D, one **source of its cost advantage.**
- **Kendra Schaefer (Trivium China)**: observes that from 2025-Q2 onward, DeepSeek has shown
  **early signs of governance documentation** (a fairness-evaluation section in the V3.1 blog,
  a "known limitations" paragraph in HuggingFace READMEs) — but **still far from structured**.
- **Rebecca Arcesati (MERICS)**: DeepSeek's "non-signature of international commitments" is
  consistent with Alibaba Qwen / Baidu ERNIE's conservative posture, reflecting the structural
  choice by **Chinese frontier labs to collectively avoid international governance forums**;
  this creates a **firm-layer / state-layer governance mismatch** with the Chinese government's
  state-level multilateral positions (such as the 2023-10 Global AI Governance Initiative).
- **Paul Triolo (DGA-Albright Stonebridge)**: DeepSeek embodies Chinese frontier AI industry's
  **"engineer-culture dominance"**, distinct from US frontier labs' **"engineer + policy-staff
  hybrid"** culture; the latter has full policy teams, the former has almost none.

## 6. Comparison with Alibaba Qwen / Baidu ERNIE / ByteDance Doubao

| Dimension | DeepSeek | Alibaba Qwen | Baidu ERNIE | ByteDance Doubao |
| --- | --- | --- | --- | --- |
| Independent safety framework | **None** | Blog + white paper (non-RSP style) | *Wenxin Responsible AI White Paper* | Limited |
| Independent Trust & Safety team | **None** | Yes (Alibaba Cloud Security) | Yes (Baidu Security) | Yes (ByteDance Security & Risk) |
| CAC filing status | Filed | Filed | Filed | Filed |
| International framework signatures | **Zero** | Zero | Zero | Zero |
| Cooperation with AISI / Frontier Red Team | **None** | None | None | None |
| Participation in TC260 standard drafting | Low | **High** | **High** | Medium |
| Public safety research papers | Concentrated in technical reports | Dedicated papers + blog | Responsible-AI column | Few |

**Conclusion**: DeepSeek has **the lowest density of safety documentation** among China's
frontier labs, but the **highest depth of training disclosure** in its technical reports — these
two "most extremes" jointly define DeepSeek's governance identity.

## 7. The structural impact of the quant-capital + AI-research dual track

High-Flyer 幻方量化 (a **quantitative hedge fund (量化私募基金)**) **self-funds DeepSeek**,
distinguishing it from:

- **Kimi / Moonshot**: external funding (Alibaba, Tencent, Sequoia, etc.).
- **Zhipu 智谱**: external funding + Tsinghua (清华) affiliation.
- **MiniMax**: external funding (Tencent, Alibaba, Hillhouse, etc.).

The **governance consequences** of this difference:

- **No investor compliance-KPI pressure**: unlike Anthropic's need to disclose governance
  progress to Google / Amazon.
- **No IPO-preparation pressure**: no exchange requirements for "diligence disclosure of safety
  policy."
- **Pure research prioritization**: Liang Wenfeng 梁文峰 has repeatedly emphasized, in rare public
  interviews (2024-07 *An Yong / Undercurrent*, 2025-02 *FT*), that **"we only do AGI research,"**
  consciously deprioritizing governance documentation.

**The cost**: externally-observable governance signals are minimal, and **DeepSeek's
external-audit friendliness is low** — in sharp contrast with the high external-research
friendliness of its technical reports.

## 8. Observed signs of safety documentation in 2025–2026-Q1

- **2025-03**: API documentation updated with an explicit "user inputs not used for training"
  clause (previously ambiguous).
- **2025-05**: HuggingFace README added "intended use" and "out of scope use" paragraphs for the
  first time (still brief).
- **2025-08 V3.1**: technical blog added a dedicated "alignment & safety evaluation" section
  including bias tests.
- **2025-11**: first DeepSeek engineer participation in the NeurIPS 2025 AI Safety Workshop (as
  an individual, not an official policy appearance).

These **slow but monotonic increments** show that DeepSeek's "safety documentation" is being
**pushed by the global ecosystem** (HuggingFace template norms, academic-journal Broader Impact
requirements, local regulatory pressure applied through downstream hosts) rather than driven by
the firm itself.

## 9. Page conclusion

DeepSeek's "absent" safety framework is not a **governance vacuum** but a **governance path
choice**:

> It has chosen the minimalist path of **"filing equals compliance, papers equal documentation,
> open source equals transparency"** — giving up on the "corporate self-regulation brand," and
> trading relative R&D spending advantage for relative backwardness in governance documentation.
> This choice is internally coherent within **the Chinese context** (with regulation bearing the
> primary burden), but creates **tension and observational blind spots within the global
> governance context**.

DeepSeek is **the key observation point** for whether the **"open source + minimum self-regulation"**
model can be sustained: if no significant large-scale misuse event occurs within 12–24 months,
it becomes the **most important empirical sample** for the position that "open-weight releases
do not require a matching structured self-regulation regime"; conversely, any attributable
serious incident could **redraw the boundaries of global open-source AI governance**.

## References

- DeepSeek-V3 Technical Report (arXiv 2412.19437) §5
- DeepSeek-R1 Technical Report (arXiv 2501.12948) §5
- Seger, E. et al. (2023). *Open-Sourcing Highly Capable Foundation Models.* GovAI
- Kapoor, S. & Narayanan, A. (2024/2025). *AI Snake Oil* & follow-up blog
- Bommasani, R. et al. (2025). *FMTI v1.1.* Stanford CRFM
- Bengio, Y. (2024). *Can We Trust Open-Weight Frontier AI?* AI Safety Lectures
- Marcus, G. (2024). *Open-Sourcing AI Shifts Liability, Doesn't Solve It.* Marcus on AI blog
- Sheehan, M. (2023-2025). *China's AI Regulations and How They Get Made.* CEIP
- Arcesati, R. (2025). *MERICS China Monitor* special issue
- Zhang Linghan 张凌寒 (2024). *The Legal Theory of Responsibility for Frontier Foundation Models*
- Zhu Yue 朱悦 (2025). *The Tension Between Open Weights and National Data Security Law*
- Dai Xin 戴昕 (2024). *The Civil Liability Boundary of Open-Source AI*
- This site: [en/rules/china/generative-ai-interim-measures](/rules/china/generative-ai-interim-measures/)
  · [en/rules/china/tc260-gen-ai-security-basic-requirements](/rules/china/tc260-gen-ai-security-basic-requirements/)
  · [en/rules/china/ai-safety-governance-framework](/rules/china/ai-safety-governance-framework/)
