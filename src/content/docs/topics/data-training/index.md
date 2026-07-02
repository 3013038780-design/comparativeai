---
title: Data and Training
description: A comparison of training-data compliance, copyright, personal-information, and cross-border rules across the three jurisdictions — scholarly debates plus industry practice.
sidebar:
  order: 3
---

## Why this topic matters

Training data is the **central battleground** of LLM-era AI governance: data determines capability, copyright exposure, personal-information compliance, and cross-border compliance. The three jurisdictions diverge most on this issue, and **litigation and legislation are proceeding in parallel**.

## The four core questions

1. **Whose data can be used?** (legal basis / copyright / consent)
2. **How is data quality assured?** (representativeness, bias, quality requirements)
3. **Must it be disclosed?** (training-data summary, transparency)
4. **How is cross-border processing handled?** (data export, the Brussels Effect)

## Snapshot

| Dimension | [China](./china/) | [United States](./us/) | [EU](./eu/) |
| --- | --- | --- | --- |
| Comprehensive privacy law | [PIPL](/rules/china/personal-info-protection-law/) (2021) | **No federal law** (state-law patchwork) | [GDPR](/rules/eu/gdpr/) (2018) |
| AI-specific data provisions | [Generative AI Interim Measures art. 7](/rules/china/generative-ai-interim-measures/) | None | [AI Act art. 10](/rules/eu/ai-act/) |
| **Mandatory training-data summary** | None | None | **[AI Act art. 53](/rules/eu/ai-act/) — world's first** |
| Copyright treatment | No express TDM exception | **Fair-use defence** (in litigation) | **DSM TDM exception** (opt-out permitted) |
| Children's data | PIPL art. 31 | COPPA (federal) | GDPR art. 8 |
| Biometrics | PIPL art. 28 | **Illinois BIPA** and other state laws | GDPR art. 9 |
| Cross-border | PIPL + DSL + CSL | Permissive after EO 14179 | Schrems II + DPF |

## Scholarly debates

### Foundational literature

- **Solove (2006)**, *"A Taxonomy of Privacy"*: the theoretical bedrock of privacy protection.
- **Westin (1967)**, *Privacy and Freedom*: a classic of informational privacy.
- **Nissenbaum (2010)**, *Privacy in Context*: the **contextual-integrity theory** — does training an LLM "repurpose" data in a way that violates context?

### Training data × personal information

- **Kaminski (Colorado) & Urban (Berkeley) (2021)**, *"The Right to Contest AI"*.
- **Edwards & Veale (2017)**, *"Slave to the Algorithm"*.
- **Helberger, Diakopoulos et al. (2023)**: a systematic review of data governance in the AI Act.
- **Leiser & Schneider (2024)**, *"Scraping and Fair Use in AI Training"*.
- **CNIL's two 2025 core recommendations**: **GDPR applies across the AI system lifecycle** (the authoritative French CNIL position).

### Training data × copyright

- **Lemley & Casey (2021)**, *"Fair Learning"* (*Texas Law Review*): **argues for fair use on LLM training**.
- **Henderson, Li, Jurafsky et al. (2023)**, *"Foundation Models and Fair Use"* (Stanford CRFM): a technical-perspective fair-use analysis.
- **Samuelson (Berkeley)**: sustained critical work on AI copyright.
- **Grimmelmann (Cornell)**: continuing analysis of *NYT v. OpenAI* and related litigation.
- **Matthew Sag**, *"The New Legal Landscape for Text Mining and Machine Learning"* (*Journal of Copyright Society*, 2019).
- **Lehman & Johnson**: analysis of copyright ownership in generative-AI outputs.

### Data quality and bias

- **Bender, Gebru, McMillan-Major, Shmitchell (2021)**, *"On the Dangers of Stochastic Parrots"* (one of the most influential FAccT papers) — bias, energy use, and responsibility in LLM training data.
- **Birhane, Prabhu et al.**, *"Multimodal datasets: misogyny, pornography, and malignant stereotypes"*.
- **Buolamwini & Gebru (2018)**, *"Gender Shades"*: the foundational paper on facial-recognition bias.
- **AI Now Institute** reports: structural bias in training datasets.

### Training-data disclosure and transparency

- **Gebru, Morgenstern et al. (2021)**, *"Datasheets for Datasets"*: dataset-documentation standards.
- **Mitchell et al. (2019)**, *"Model Cards for Model Reporting"*.
- **Diakopoulos & Koliska (2017)**: systematic work on algorithmic transparency.
- **Almada & Petit (2023)**: analysis of what "sufficiently detailed summary" means in AI Act art. 53.

### Cross-border data and AI

- **Kuner (Oxford)**: classic work on cross-border data flows.
- **Greenleaf**: ongoing tracking of Asia-Pacific data protection (including international comparison of China's PIPL).
- **Matt Sheehan (Carnegie)**: continuing analysis of the implementation of China's *Measures on Security Assessment of Cross-Border Data Transfers*.

## Core controversies

### 1. "Publicly accessible" ≠ "usable for training"

- **EDPB Dec 2024 Opinion on ChatGPT**: legitimate interest **can** serve as a basis for training, but requires a rigorous LIA.
- **CNIL 2025 guidance**: **being public does not equate to lawful processing**, especially for special categories (biometrics, political views, etc.).
- **Hamburg DPA (2024)**: model weights **do not constitute** personal-data processing (a contested position).
- **United States**: the fair-use defence + *hiQ Labs v. LinkedIn* precedent.
- **China PIPL art. 13**: processing of public information must be "within a reasonable scope"; multiple 2024 cases concerned training-data scraping.

### 2. The machine-readability of copyright opt-outs

- **DSM art. 4**: commercial TDM permitted, but rightsholders may opt out.
- In practice: `robots.txt` / `ai.txt` / the TDMRep standard / the 2025 RSL (Robots Exclusion Standard for LLMs).
- **AI Act art. 53**: GPAI providers **must respect opt-outs** (even for models trained outside the EU).
- Controversy: is a machine-readable "reservation of rights" **legally effective**? Most civil-law jurisdictions have not explicitly confirmed.

### 3. Implementing a "right to deletion" after training

- **GDPR art. 17 / PIPL art. 47**: data subjects may request deletion.
- **Technical obstacles**: **model weights cannot be separately deleted**; machine-unlearning research is far from operational.
- **Positional splits**:
  - **Hamburg DPA 2024**: weights do not constitute personal data → no deletion duty triggered.
  - **Italy Garante**: enforcement action against OpenAI requiring user-data deletion and correction rights.
  - **CNIL 2025**: requires deletion feasibility to be considered **at the design stage**.

### 4. The "level of detail" of a training-data summary

- **AI Act art. 53**: requires a "sufficiently detailed" summary; template issued by the AI Office in Jul 2024.
- **Almada & Petit (2023)** critique: the template is flexible enough that GPAI providers can offer **minimal disclosure**.
- In practice: OpenAI / Anthropic / Google DeepMind began disclosing "categories of data sources" in 2025–2026 but not specific datasets.

## Industry-practice lens

### Training-data strategies of leading AI companies

| Company | Principal sources | Open disclosure | Copyright licensing | Response to EU art. 53 |
| --- | --- | --- | --- | --- |
| [OpenAI](/companies/openai/) | Web + **licensing** (FT, Axel Springer, News Corp) | Low | **Multiple paid licences** | Plans to publish data summary |
| [Anthropic](/companies/anthropic/) | Web + licensed | Medium (partial detail) | Fewer public licence deals | Data summary published |
| [Google DeepMind](/companies/google-deepmind/) | Google Search index + YouTube + licences | Low | Pre-existing media relationships | Publication planned |
| [Meta Llama](/companies/) | Web + Meta platform data (disputed) | **Technical reports include considerable detail** | Few paid licences | Already disclosed |
| [Mistral](/companies/mistral/) | Web + partners | Medium | EU copyright compliance | Published (GPAI CoP requirement) |
| [Alibaba Qwen](/companies/alibaba/) | Chinese-first + partners | **Technical reports include detail** | Unclear | No CoP signature |
| [Baidu ERNIE](/companies/baidu/) | Chinese-first + partners | Partial | Unclear | No CoP signature |
| [DeepSeek](/companies/deepseek/) | Web | **Detailed technical reports** | Unclear | No CoP signature |

### Notable litigation (2023–2026)

- *NYT v. OpenAI & Microsoft* (Dec 2023 onward): the most closely watched copyright lawsuit; ongoing in 2026.
- *Bartz v. Anthropic / Kadrey v. Meta / Tremblay v. OpenAI*: authors' class actions.
- *Andersen v. Stability AI*: text-to-image copyright.
- *Getty Images v. Stability AI* (UK + US): image copyright.
- *Clearview AI*: worldwide BIPA enforcement (Illinois) + multiple national DPAs.

### Notable DPA actions (2023–2026)

- **Italy Garante vs ChatGPT** (Mar 2023 ban; Dec 2024 €15M fine).
- **Italy Garante vs Replika** (Feb 2023 order, AI companionship × minors).
- **Italy Garante vs DeepSeek** (Jan 2025 provisional ban).
- **CNIL vs Clearview AI** (2022 €20M fine).
- **DPC Ireland's investigation of Meta LLaMA**.
- **Hamburg DPA's contested position on weights** (2024).

### Key changes in Q1 2026

- **AI Act art. 53** training-data-summary obligation took effect on **Aug 2, 2025**; the first GPAI providers began disclosing in Q1 2026.
- **GPAI Code of Practice Chapter 2 (Copyright)** signed Aug 1, 2025; **Meta publicly dissented** from the copyright chapter.
- **US fair-use litigation** continues, with some courts preliminarily ruling in favour of OpenAI (Q1 2026: partial win for Anthropic in *Bartz v. Anthropic*).

## Related rules and companies

### Related rules

- **EU**: [GDPR](/rules/eu/gdpr/); [AI Act](/rules/eu/ai-act/) arts. 10 / 53; [GPAI Code of Practice](/rules/eu/gpai-code-of-practice/) Chapter 2; DSM Copyright Directive.
- **China**: [PIPL](/rules/china/personal-info-protection-law/), [DSL](/rules/china/data-security-law/), [CSL](/rules/china/cybersecurity-law/); [Generative AI Interim Measures](/rules/china/generative-ai-interim-measures/) art. 7; [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/) (≤ 5% unlawful content in training corpora).
- **United States**: [NIST AI RMF](/rules/us/nist-ai-rmf/); state laws (CCPA/CPRA, Illinois BIPA, Tennessee ELVIS Act, etc.); **no federal AI-specific data law**.

### Related companies

See the "training data" analysis on individual company pages: [OpenAI](/companies/openai/) / [Anthropic](/companies/anthropic/) / [Mistral](/companies/mistral/) (EU-compliance model) / [DeepSeek](/companies/deepseek/) (open-source-transparency model) / [Alibaba Qwen](/companies/alibaba/) (Chinese + open).

## Jurisdiction deep-dives

- [China](./china/)
- [United States](./us/)
- [EU](./eu/)
