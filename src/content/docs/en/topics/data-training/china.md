---
title: China — Data and Training
description: China's "three-law stack + TC260 technical standards" compliance path for AI training data.
sidebar:
  order: 2
  label: China
---

## Relevant rules

| Rule | Relationship to training data |
| --- | --- |
| [PIPL](/en/rules/china/personal-info-protection-law/) (2021) | Lawful basis for personal information; sensitive data; cross-border |
| [CSL](/en/rules/china/cybersecurity-law/) (2017) | Data localisation (CII) |
| [DSL](/en/rules/china/data-security-law/) (2021) | Important-data risk assessment and export |
| [TC260-003-2024](/en/rules/china/tc260-gen-ai-security-basic-requirements/) | 5% threshold for corpus lawfulness; source diversity |
| [*Generative AI Interim Measures*](/en/rules/china/generative-ai-interim-measures/) (2023) | Article 7, the training-data-specific provision |

## Three layers of training-data compliance in China

### Law layer (PIPL + DSL + CSL)

- **Personal information**: lawful basis, notice and consent, separate consent for sensitive information, minors.
- **Important data**: identification, risk assessment, export review.
- **Data localisation**: data collected domestically by CII operators must, in principle, remain stored domestically.

### Departmental-rule layer (*Generative AI Interim Measures*, art. 7)

> 《生成式人工智能服务管理暂行办法》第七条: "生成式人工智能服务提供者应当依法开展预训练、优化训练等训练数据处理活动，遵守以下规定：
> （一）使用具有合法来源的数据和基础模型；
> （二）涉及知识产权的，不得侵害他人依法享有的知识产权；
> （三）涉及个人信息的，应当取得个人同意或者符合法律、行政法规规定的其他情形；
> （四）采取有效措施提高训练数据质量，增强训练数据的真实性、准确性、客观性、多样性；
> （五）《网络安全法》《数据安全法》《个人信息保护法》等法律、行政法规的其他有关规定和有关主管部门的相关监管要求。"
>
> — i.e., generative AI service providers must conduct pre-training, fine-tuning, and related data-processing activities in accordance with the law, and must: (1) use data and foundation models with a lawful source; (2) not infringe the intellectual property rights of others; (3) where personal information is involved, obtain consent or comply with other circumstances provided in law or administrative regulations; (4) take effective measures to improve the quality of training data, strengthening its authenticity, accuracy, objectivity, and diversity; (5) comply with all relevant provisions of the *Cybersecurity Law*, the *Data Security Law*, the *Personal Information Protection Law*, and other laws and regulations, and with requirements from competent authorities.

### Technical-standard layer ([TC260-003-2024](/en/rules/china/tc260-gen-ai-security-basic-requirements/))

**Core quantitative requirements**:
- Corpus sampling of 4,000 items; unlawful or harmful content must be **≤ 5%**.
- Source diversity (Chinese / English).
- Annotator training and testing.
- Coverage across 31 risk categories.

## Special issues

### 1. Lawful source and publicly accessible data

The stacking of "lawful source" in art. 7 of the *Generative AI Interim Measures* and "lawful basis" in art. 13 of PIPL:

- **Publicly accessible** (web scraping) ≠ **usable for training**.
- User-generated content (UGC): training-authorisation clauses in user agreements are increasingly common, but whether they satisfy PIPL's **separate-consent** requirement is disputed.

### 2. Intellectual property

- Copyright: the revised *Copyright Law* has not expressly introduced a "text and data mining (TDM) exception".
- In practice: copyright lawsuits triggered by training data (e.g., a 2024 Shanghai case involving a text-to-image model).
- The contours of fair use are unclear.

### 3. Cross-border data

Cross-border scenarios for training data:
- **Domestic training / foreign storage**: data export (security assessment / SCCs / certification — three routes).
- **Foreign training / serving domestic users**: the foreign model itself is not directly covered, but onshore service launch requires a separate assessment.
- **Cross-border sharing of training datasets**: may trigger the blocking provision in art. 36 of the DSL.

### 4. Synthetic data and human feedback (RLHF)

- **Synthetic data**: model-generated training data — not specifically regulated; authenticity and diversity requirements still apply.
- **RLHF annotation data**: TC260-003 has a dedicated section; annotators' labour and data rights have drawn independent attention.

## Comparison with the EU and the US

| Dimension | China | EU | US |
| --- | --- | --- | --- |
| Personal data | PIPL separate consent (sensitive) + lawful basis | GDPR lawful basis + art. 9 special categories | No federal privacy law (state patchwork) |
| Copyright / TDM | No express TDM exception | DSM TDM exception (opt-out mechanism) | Handled under fair-use doctrine |
| Data quality | TC260-003 quantitative (5% / 90%) | AI Act art. 10 quality requirements | NIST RMF principles |
| Cross-border | PIPL + DSL + CSL triple mechanism | Schrems II + DPF | Permissive after EO 14179 |
| Training-data summary | No mandatory disclosure | AI Act art. 53 mandatory | None |
