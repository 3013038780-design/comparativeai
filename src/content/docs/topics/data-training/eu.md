---
title: EU — Data and Training
description: The EU's four-layer framework — GDPR + AI Act art. 10 + DSM TDM exception + training-data summary.
sidebar:
  order: 4
  label: EU
---

## Relevant rules

| Rule | Relationship to training data |
| --- | --- |
| [GDPR](/rules/eu/gdpr/) | Lawful basis for personal data; purpose limitation |
| [EU AI Act](/rules/eu/ai-act/) | Art. 10 data governance + art. 53 training-data summary |
| [GPAI Code of Practice](/rules/eu/gpai-code-of-practice/) | Chapter 2 copyright + standardised training-data summary |
| DSM Copyright Directive (2019/790) | TDM exception (arts. 3, 4) |
| [DSA](/rules/eu/dsa/) | VLOP visibility of content used for training |
| [France CNIL AI](/subnational/eu/france-cnil-ai/) | GDPR × AI training-data compliance guidance (12+ papers) |

## The four-layer framework

### 1. GDPR: the personal-data base layer

- **Lawful basis** (art. 6): consent / contract / legal obligation / **legitimate interest** (commonly used).
- **Special categories** (art. 9): biometrics, health, political views — stricter.
- **Purpose limitation** (art. 5): can the original purpose of collection cover "training an AI model"? Still contested.
- **Transparency** (arts. 13–14): notification to data subjects.
- **Right to erasure / right to be forgotten** (art. 17): how can data already embedded in model weights be "deleted"?

**DPA actions**:
- **Garante (IT) vs ChatGPT** (Mar 2023 ban / fine).
- **CNIL (FR)** AI action plan (multiple guidance papers).
- **DPC (IE) vs Meta LLaMA**.
- **Hamburg DPA** — position on whether weight embedding constitutes personal-data processing.

### 2. AI Act art. 10: data governance

For training / validation / test data in high-risk AI systems:
- **Relevant, sufficiently representative, free of errors, complete**.
- Consider the geographic, behavioural, and functional characteristics of the intended use.
- **Bias detection and mitigation**.
- **Special-category data**: may be processed to mitigate bias, but must comply with GDPR exceptions.

Art. 10 runs **in parallel with GDPR**, not in place of it. Companies need two sets of documentation.

### 3. DSM TDM exception (Directive 2019/790)

**Art. 3**: TDM for research purposes by research institutions cannot be excluded (research exception).

**Art. 4**: **Commercial TDM** may be excluded by the rightsholder via a **machine-readable opt-out**.
- The machine-readable form of the "reservation of rights" is the focal controversy.
- `robots.txt`, `ai.txt`, and the TDMRep standard are all candidates.

**AI Act art. 53** references DSM art. 4: GPAI providers **must respect** rightsholders' opt-outs.

### 4. AI Act art. 53: training-data summary

All GPAI providers:
- Publish a **"sufficiently detailed" summary** of training data.
- Template issued by the **AI Office** in Jul 2024.
- Contents: primary data-source categories (web / licensed / user-generated / synthetic, etc.), languages, approximate scale.
- **Does not require listing each dataset**.

This is **the world's first mandatory training-data disclosure** requirement.

## Special issues

### 1. Publicly accessible = trainable?

CNIL, Hamburg DPA, and the EDPB's Dec 2024 opinion:
- "Publicly accessible" is not "lawfully usable".
- The legitimate-interest route requires a three-step test (LIA).
- Special-category data (art. 9) cannot, in principle, be processed merely because it is public.

### 2. Legitimate interest and web scraping

EDPB Dec 2024 opinion on legitimate interest for ChatGPT-style models:
- Legitimate interest **can** serve as a basis, but requires a rigorous LIA.
- Data-subject objections (art. 21) may demand deletion or cessation of use.

### 3. Machine-readability of copyright opt-outs

In current practice:
- Some media companies publish opt-outs via **`robots.txt` / `ai.txt`**.
- Major publishers sign **licensing agreements** (OpenAI × Axel Springer, Financial Times, News Corp, etc.).
- **2025 RSL (Robots Exclusion Standard for LLMs)** is in development.

### 4. Post-training "deletion"

- The "right to be forgotten" (GDPR art. 17) is technically difficult for trained models.
- Machine unlearning research lags behind legal expectations.
- **Hamburg DPA 2024 position**: model weights do not constitute "personal data" (contested).

## Comparison with China and the US

| Dimension | EU | China | US |
| --- | --- | --- | --- |
| Comprehensive privacy law | GDPR | PIPL | None (state-law patchwork) |
| AI-specific data provisions | AI Act art. 10 | Generative AI Interim Measures art. 7 | None |
| Mandatory training-data summary | **Yes** | No | No |
| Copyright TDM exception | **Yes, opt-out permitted** | No express provision | Fair-use defence |
| Children's data | GDPR art. 8 | PIPL art. 31 | COPPA |
| Biometrics | GDPR art. 9 | PIPL art. 28 | Illinois BIPA and other state laws |

The EU has **the most systematised** training-data governance among the three jurisdictions.
