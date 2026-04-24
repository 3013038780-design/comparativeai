---
title: EU AI Act (Regulation 2024/1689)
description: The EU Artificial Intelligence Act entered into force 2024-08-01, phased implementation through 2027; the world's first horizontal AI law, establishing risk tiers, a prohibited list, high-risk compliance, and a dedicated GPAI chapter
ruleName: Regulation (EU) 2024/1689 — Artificial Intelligence Act
issuer: European Parliament & Council
level: eu-regulation
binding: hard
effectiveDate: 2024-08-01
publishedDate: 2024-07-12
originalUrl: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689
relatedTopics:
  - risk-classification
  - frontier-gpai
  - content-labeling-provenance
  - data-training
snapshotDate: 2026-04-21
sidebar:
  label: AI Act (2024)
  order: 1
---

## Summary

The **EU Artificial Intelligence Act** (Regulation (EU) 2024/1689) was published in the Official Journal
of the European Union on 2024-07-12 and entered into force on 2024-08-01 as the **world's first horizontal
AI regulation**. Core design:

1. **Four-tier risk classification**: unacceptable (prohibited) / high-risk / limited risk (transparency) / minimal risk
2. **Dedicated chapter on general-purpose AI models (GPAI)**: Articles 51-56 + Annexes XI / XII / XIII
3. **Phased application**: prohibited list 2025-02-02 → GPAI provisions 2025-08-02 → high risk (most)
   2026-08-02 → high-risk systems embedded in public-sector products 2027-08-02
4. **Governance architecture**: EU AI Office (center) + member-state market surveillance authorities; centralized GPAI oversight

Penalty ceilings are exceptionally high: violations of the prohibited list may reach **7% of global annual turnover**;
other obligations up to 3%.

## English one-liner

The AI Act (Regulation EU 2024/1689) is the world's first horizontal AI law, applying a
risk-tiered approach plus a dedicated chapter on general-purpose AI models, with global
extraterritorial reach and headline penalties up to 7% of worldwide turnover.

## Structure at a glance

| Part | Content | Articles |
| --- | --- | --- |
| I | General provisions | 1-4 |
| II | **Prohibited list** | 5 |
| III | **High-risk AI systems** | 6-49 |
| IV | Transparency obligations (limited risk) | 50 |
| V | **General-purpose AI models (GPAI)** | 51-56 |
| VI | Support for innovation | 57-63 |
| VII | Governance | 64-70 |
| VIII | EU database | 71 |
| IX | Post-market monitoring | 72-94 |
| X | Codes of conduct | 95-96 |
| XI-XIII | Final provisions | 97-113 |

## Prohibited list (Article 5)

Effective 2025-02-02. Prohibits placing on the EU market AI systems that:

1. Use **subliminal, manipulative, or deceptive techniques** causing material harm
2. Exploit **vulnerabilities of specific groups** (including age, disability, socio-economic circumstance) to materially distort behavior
3. Conduct **social scoring** (general-purpose classification/scoring of social behavior or personal characteristics) leading to disproportionate or out-of-context adverse treatment
4. Conduct **predictive policing** based solely on profiling or personality features
5. Perform **untargeted scraping** of facial images to build facial recognition databases
6. Deploy **emotion recognition** in workplace or education settings (with medical / safety exceptions)
7. Perform biometric categorization using **sensitive attributes** (with statutory law-enforcement exceptions)
8. Conduct **real-time remote biometric identification** in publicly accessible spaces for law-enforcement purposes (with three narrow exceptions)

## High-risk AI systems (Articles 6-49)

### Definition (Article 6)

Two categories:
- **Annex I product safety**: AI components embedded in products already covered by EU product-safety legislation (toys, machinery, medical devices, etc.)
- **Annex III standalone use cases**: biometrics, critical infrastructure, education / vocational training, employment / HR management, access to essential private / public services (including credit, insurance), law enforcement, migration and borders, judicial and democratic processes

### Obligation matrix

| Obligation | Article | Key point |
| --- | --- | --- |
| Risk management system | 9 | Entire lifecycle |
| Data governance | 10 | Training / validation / testing data quality |
| Technical documentation | 11 + Annex IV | Detailed documentation |
| Logging | 12 | Automatic event logs |
| Transparency | 13 | Information to deployers |
| Human oversight | 14 | Feasible and effective |
| Accuracy, robustness, cybersecurity | 15 | Quantitative metrics |
| Quality management system | 17 | Providers |
| Conformity assessment | 43 + Annex VI / VII | Self-assessment or third-party |
| CE marking and EU declaration | 47-48 | |
| EU database registration | 49 + 71 | |

## General-purpose AI models (GPAI) (Articles 51-56)

### Two tiers

1. **All GPAI models**: training documentation, downstream documentation, copyright compliance (EU Copyright Directive TDM exception), publicly available training-data summary
2. **GPAI with systemic risk**: cumulative training compute **≥ 10²⁵ FLOP** creates an automatic presumption of systemic risk; or Commission designation

### Additional obligations for systemic-risk GPAI (Article 55)

- Model evaluation including **adversarial testing**
- Systemic-risk assessment and mitigation
- Serious-incident reporting (Article 56)
- **Cybersecurity protection** of the model and physical infrastructure

### Code of Practice

Article 56 authorizes the AI Office to convene a GPAI Code of Practice. **Finalized 2025-07-10**; the
**European Commission and AI Board adopted Adequacy Decisions on 2025-08-01** and published the list
of signatories; after the **2025-08-02 entry into application of the GPAI provisions**, signing the
Code is the de facto path to demonstrating compliance. See the standalone [GPAI Code of Practice](./gpai-code-of-practice/) page.

## Transparency obligations (Article 50 · limited risk)

- Notify users when interacting with AI (chatbot exception: "obvious to a reasonably informed natural person")
- **Machine-readable marking** of synthetic content (Article 50(2))
- Disclosure for biometric categorization / emotion recognition systems
- Deepfake **"artificially generated or manipulated"** disclosure, with limited artistic / satirical exceptions

## Governance architecture

- **EU AI Office** (within Commission DG CNECT): GPAI supervision, Codes of Practice, standardization push
- **EU AI Board** (member-state representatives): coordination mechanism
- **Member-state market surveillance authorities** (MSAs): enforcement of high-risk systems
- **EU database** (Article 71): registration of high-risk systems

## Penalties (Article 99)

- Breach of **Article 5 prohibited list**: up to **EUR 35M or 7% of global annual turnover**
- Breach of other applicable obligations (high-risk, transparency): EUR 15M or 3%
- Supply of false / misleading information: EUR 7.5M or 1%
- GPAI penalties separately (Article 101): up to EUR 15M or 3%

## Timeline (phased application)

| Date | Content that applies |
| --- | --- |
| 2024-08-01 | Regulation enters into force |
| 2025-02-02 | **Article 5 prohibited list** + general provisions (Arts. 1-4) + common definitions + AI literacy obligation |
| 2025-08-02 | **GPAI provisions** (Arts. 51-56) + governance (Part III) + most penalties |
| 2026-08-02 | **High-risk systems** (Annex III) + most remaining provisions |
| 2027-08-02 | Embedded high-risk (in Annex I products) + deferred public-sector provisions |

## Comparison with Chinese rules

- **Risk tiering**: EU four tiers vs. China's Generative AI Measures Article 3 "tiered and graded supervision," which has **yet to produce concrete tiers**
- **GPAI threshold**: EU 10²⁵ FLOP vs. China's absence of a quantitative compute threshold, with lines drawn by service type instead
- **Transparency**: AI Act Article 50 requires machine-readable marking vs. China's Labeling Measures + GB 45438 with more granular technical fields
- **Prohibited list**: AI Act Article 5 contains 8 express prohibitions vs. China's "shall not" clauses scattered across sectoral regulations

## Text and translations

| Language | Source | Link |
| --- | --- | --- |
| English (original) | EUR-Lex | [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689) |
| 24 official EU languages | EUR-Lex | [EUR-Lex multilingual](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689) |
| Chinese (unofficial academic translation) | — | _Cite recognized academic translations; avoid self-made full-text translations_ |
| EU AI Act Explorer | Future of Life Institute | [artificialintelligenceact.eu](https://artificialintelligenceact.eu/) |
| Article lookup tool | EU AI Office | [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) |

## Key commentary

- Mueller (CEPS) commentary series
- Bradford's "Brussels Effect" framework applied to the AI Act
- Engler (Brookings) on GPAI provisions
- MacCarthy's ongoing tracking of the Code of Practice

## Version history

| Date | Event |
| --- | --- |
| 2021-04-21 | Commission proposal |
| 2023-06 | Parliament first-reading position |
| 2023-12-08 | Trilogue political agreement |
| 2024-03-13 | Parliament final vote |
| 2024-05-21 | Council approval |
| 2024-07-12 | Published in Official Journal |
| 2024-08-01 | Entry into force |
| 2025-02-02 | Prohibited list applies |
| 2025-08-02 | GPAI provisions apply |
| 2026-08-02 | High-risk systems apply |
