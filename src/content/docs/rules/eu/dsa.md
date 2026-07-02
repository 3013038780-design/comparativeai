---
title: Digital Services Act (Regulation 2022/2065)
description: The EU Digital Services Act, fully applicable to intermediary services from 2024-02-17; its algorithmic transparency and systemic-risk provisions for VLOPs / VLOSEs intersect with generative AI
ruleName: Regulation (EU) 2022/2065 — Digital Services Act
issuer: European Parliament & Council
level: eu-regulation
binding: hard
effectiveDate: 2024-02-17
publishedDate: 2022-10-19
originalUrl: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022R2065
relatedTopics:
  - content-labeling-provenance
  - risk-classification
snapshotDate: 2026-06-28
sidebar:
  label: DSA (2024)
  order: 3
---

## Summary

The **Digital Services Act** (Regulation (EU) 2022/2065) was published on 2022-10-19 and became
fully applicable to all intermediary services on 2024-02-17 (it has applied to VLOPs / VLOSEs since
2023-08-25). Core innovations:

1. **Tiered obligations**: ordinary intermediary services → hosting services → online platforms →
   **VLOPs / VLOSEs** (very large, monthly active EU users ≥ 45 million), with obligations escalating at each tier
2. **Systemic-risk obligations** (Articles 34-35): VLOPs / VLOSEs must annually assess systemic risks
   arising from their services, including **dissemination of illegal content, fundamental-rights
   impacts, civic discourse / electoral integrity, and minors' well-being**. The Commission has
   explicitly identified **generative AI and deepfakes** as systemic-risk factors in the DSA context
3. **Algorithmic transparency** (Articles 27, 38): disclosure of recommender-system parameters plus at least one non-profiling option
4. **Crisis response mechanism** (Article 36): in elections, war, or large-scale disasters the Commission may order emergency measures

## Direct impact on AI

### Deepfakes / generative-content dissemination

The DSA does not directly regulate generation, but the **distribution chain** falls under it:
- VLOPs' systemic-risk assessment explicitly covers "systemic misuse of generative AI"
- Multiple 2024 Commission guidelines (on elections, DSA governance) require platforms to apply
  labeling / demotion measures for AI-generated content

### Algorithmic recommendation

- **Article 27**: disclosure of recommender-system parameters; user-adjustable options
- **Article 38** (VLOPs / VLOSEs): must provide **at least one non-profiling-based** recommendation option

### Advertising transparency

- **Articles 26, 39**: advertisement disclosure; advertising repositories (VLOPs / VLOSEs must maintain a public ad library)
- Additional restrictions on political ads and advertising targeted on sensitive personal data

### Data access

- **Article 40**: vetted researchers may apply to **access VLOP / VLOSE data** to study systemic risks
- This matters greatly for AI safety research (e.g., empirical studies of generative AI's impact on public discourse)

## VLOPs / VLOSEs designations (as of 2026-04)

Designated by the Commission in batches in 2023-2024, including:
- Amazon Store, AliExpress, App Store, Google Play, Booking
- Facebook, Instagram, LinkedIn, Pinterest, Snapchat, TikTok, X, YouTube
- Wikipedia, Zalando (under litigation), Shein, Temu
- VLOSEs: Google Search, Bing

**Generative AI services** (ChatGPT, Gemini, etc.) currently are **not** VLOPs / VLOSEs (they do not meet
the monthly-active-user threshold or do not fit the "online platform" definition), but their parent
companies' other services (YouTube, Instagram) are.

## Core provisions (selected)

### Article 16 · Notice and action

All hosting services must provide a notice channel. Applies equally to illegal AI-generated synthetic
content (defamatory deepfakes, IP infringement, etc.).

### Article 27 · Recommender-system transparency

- Disclosure of main parameters
- User-adjustable options
- Explanation via terms and conditions

### Articles 34-35 · Systemic-risk assessment and mitigation

VLOPs / VLOSEs annually must:
- **Assess**: illegal content, fundamental rights, civic discourse, minors
- **Mitigate**: concrete measures + annual report
- **Independent audit** (Article 37)

2024 Commission guidelines expressly state: **deepfakes and large-scale influence operations enabled
by generative AI** are components of Article 34 systemic risk and must be covered in VLOPs' risk assessments.

### Article 36 · Crisis response

The Commission may require temporary measures from VLOPs / VLOSEs during "serious threats to public
security / public health / democratic institutions." **AI-generated disinformation in electoral contexts**
is a triggering scenario that has already been used.

### Article 40 · Researcher data access

Vetted researchers apply; the Commission in 2025 released technical specifications for a DSA Research API.

## Penalties (Article 74)

- Serious infringements: **6% of global annual turnover**
- Others: proportionate
- Procedural violations (failure to provide information, etc.): 1%

**Repeated or serious violations**: the Commission can impose temporary measures on VLOPs / VLOSEs,
and in extreme cases exclude them from the EU market.

## Relationship with AI Act / GDPR

- **Three in parallel**: the same service may be subject to all three
  - AI Act: product-level compliance of the AI system itself
  - DSA: platform liability along the hosting / distribution chain
  - GDPR: personal-data processing
- **AI Act Article 50** (synthetic-content transparency) and **DSA Article 34** (systemic risk) form a
  two-layer defense: "content labeling + distribution dampening"

## Text and translations

| Language | Source | Link |
| --- | --- | --- |
| English (original) | EUR-Lex | [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022R2065) |
| Multilingual versions | EUR-Lex | 24 official languages |
| Commission DSA portal | | [digital-strategy.ec.europa.eu/policies/dsa](https://digital-strategy.ec.europa.eu/policies/digital-services-act-package) |

## Version history

| Date | Event |
| --- | --- |
| 2020-12-15 | Commission proposal |
| 2022-07 | Parliament adoption |
| 2022-10-19 | Published in Official Journal |
| 2023-08-25 | Applicable to VLOPs / VLOSEs |
| 2024-02-17 | Applicable to all intermediary services |
