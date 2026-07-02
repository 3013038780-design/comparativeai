---
title: United States — Data and Training
description: The US approach to training data — no federal privacy law, a patchwork of state laws, and a contested fair-use doctrine.
sidebar:
  order: 3
  label: United States
---

## Relevant rules

| Rule | Relationship to training data |
| --- | --- |
| CCPA / CPRA (California) | State privacy law; obligations on personal information in AI training data |
| COPPA (federal) | Data of children under 13 |
| Section 230 | Platform-liability boundary for user-generated content |
| [NIST AI RMF + GenAI Profile](/rules/us/nist-ai-rmf/) | Voluntary data-governance practice |

## Three-layer fragmentation

### The federal vacuum

The United States still has **no comprehensive federal privacy law**. Federal touchpoints on training data:

- **COPPA**: separate protection for children under 13.
- **HIPAA**: medical data (directly relevant to medical-AI training data).
- **GLBA**: financial information.
- **FERPA**: education records.
- **FCRA / ECOA**: data used in credit decisions.

**Sector-specific + minor-specific**, but **no federal framework for general-purpose training data**.

### The state-law patchwork

- **California (CCPA / CPRA)**: since 2020; **automated-decision rights** (California ADMT rules in force 2025).
- **Virginia, Colorado, Utah, Connecticut, Texas, Oregon**, etc.: GDPR-style privacy laws.
- **Illinois BIPA**: biometric-information law with strong constraints on facial training data.
- **Washington My Health My Data**: extended health data.
- **Tennessee ELVIS Act**: voice-cloning data.

By Apr 2026, **20+ states** have passed comprehensive privacy laws, with varying detail.

### Copyright / fair use

Copyright on training data has been the most intense legal debate in US AI law from 2023 to 2026:

- **2023 *NYT v. OpenAI / Microsoft***: a copyright training lawsuit, ongoing in 2026.
- **Bartz v. Anthropic / Kadrey v. Meta / Tremblay v. OpenAI**: multiple parallel cases.
- ***Andersen v. Stability AI***: text-to-image copyright.
- ***Thaler v. Perlmutter***: authorship of AI-generated works.

**Fair use** is the distinctive US defence, and its "transformative use" standard is still being shaped as applied to LLM training.

## Special issues

### 1. The lawfulness of "publicly accessible" data

- US law is more permissive about scraping "publicly accessible" data than the EU or China.
- *hiQ Labs v. LinkedIn* (2019 / 2022): interpretation of the Computer Fraud and Abuse Act.
- But breach of TOS (terms of service) can still be actionable.

### 2. Children's data

- COPPA: separate consent for those under 13.
- California, New York, and other states: extend to those under 18.
- Risk when training data contains minors' faces or voices: **BIPA + COPPA stacking**.

### 3. Biometrics (especially Illinois BIPA)

- Illinois BIPA has produced a surge in facial-training-data litigation.
- Clearview AI is the canonical case.
- **BIPA allows a private right of action**, with up to $5,000 per violation.

### 4. Synthetic data and de-identification

- No dedicated synthetic-data rule.
- De-identification: HIPAA has clear standards (Safe Harbor / Expert Determination); other domains remain vague.

## Comparison with China and the EU

- **Federal layer**: both China and the EU have comprehensive data-protection laws; the US **does not**.
- **Predictability**: the US is **lowest** (state-law variation + unsettled fair-use litigation).
- **Enforcement**: the US relies primarily on **private litigation** (BIPA, copyright, TCPA, etc.); China relies on CAC enforcement; the EU on DPAs.
- **Training-data summary**: mandatory in the EU; absent in the US; absent in China (filing materials are not public).
