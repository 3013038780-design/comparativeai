---
title: Data Security Law (DSL)
description: China's foundational statute on data security, effective 2021-09-01; the classified-and-graded regime for "important data" (*重要数据*) bears directly on AI training-data governance
ruleName: Data Security Law of the People's Republic of China (《中华人民共和国数据安全法》)
issuer: Standing Committee of the National People's Congress (NPC-SC / 全国人民代表大会常务委员会)
level: national-law
binding: hard
effectiveDate: 2021-09-01
publishedDate: 2021-06-10
originalUrl: http://www.npc.gov.cn/npc/c2/c30834/202106/t20210610_311888.html
relatedTopics:
  - data-training
snapshotDate: 2026-06-28
sidebar:
  label: DSL Data Security Law (2021)
  order: 11
---

> **📑 Legal hierarchy**: Level 1 · Law | **Enacting body**: NPC **Standing Committee** | **Effective**: 2021-09-01 | **Character**: hard law

> **⚠️ Hierarchy note**: This instrument is a **law enacted by the NPC Standing Committee** (Level 1) — the highest rank. Alongside CSL and PIPL, it forms the so-called "three data laws" of China. See [Index of Chinese Rules](/rules/china/#the-legal-hierarchy-at-a-glance).

## English Summary

The **Data Security Law of the People's Republic of China (DSL)**, effective 2021-09-01, governs data processing activities conducted within the PRC (and extraterritorially where national security is implicated). It introduces (i) a tiered classification of data into *general*, *important*, and *core* (national-security) categories, (ii) sector-specific duties for "important data" handlers including risk assessments and export controls, and (iii) a blocking statute (Article 36) prohibiting organizations from transferring data stored in the PRC to foreign judicial or law-enforcement bodies without CAC approval. DSL is one of the three pillars of China's data regime (with CSL and PIPL) and frames AI training-data compliance.

## Overview

Three features of DSL matter most for AI governance:

1. **Classified-and-graded regime (Article 21)**: data are sorted into three tiers — general, important, core — with graduated duties. As of 2026, sector-by-sector catalogues of "important data" (*重要数据*) are still under piecemeal development, leaving the concrete scope as the regime's main governance uncertainty.
2. **Duties on handlers of important data (Articles 27, 30)**: processing activities require a **risk assessment** and periodic reporting.
3. **Cross-border data transfer (Article 31)**: outbound transfer of important data goes through the CAC-administered **security assessment** (running parallel to PIPL's cross-border provisions).

## Direct Impact on AI

- **Training-data hygiene**: datasets that include "important data" require separate assessment.
- **Data marketplaces**: Article 33 obliges data-trading intermediaries to verify the identity and source of data, constraining synthetic-data markets.
- **Foreign judicial / investigative cooperation**: Article 36, the "blocking clause," routes requests for China-resident AI data through the CAC.

## Core Provisions

### Article 21 · Classification and Grading

> 国家建立数据分类分级保护制度，根据数据在经济社会发展中的重要程度，以及一旦遭到篡改、破坏、泄露或者非法获取、非法利用，对国家安全、公共利益或者个人、组织合法权益造成的危害程度，对数据实行分类分级保护。

> **— English gloss —** Article 21. The State establishes a classified-and-graded data protection regime, affording tiered protection based on data's importance to economic and social development and on the extent of harm to national security, the public interest, or the lawful rights and interests of individuals and organizations that would result from tampering, destruction, leakage, or unlawful acquisition or use.

### Articles 27, 30 · Risk Assessment for Important Data

Handlers of important data shall:

- designate a data-security officer and responsible body;
- **conduct risk assessments periodically** and report to the competent authority;
- cover in the assessment: data types, volume, processing purposes, risks faced, and mitigation measures.

### Article 31 · Outbound Transfer

Outbound security administration for **important data** collected and generated during domestic operations by CII operators is governed by the *Cybersecurity Law*; for **other data handlers**, outbound security administration of important data shall be formulated by the national cybersecurity-and-informatization department together with relevant State Council departments.

→ Operationalized by the *Measures for the Security Assessment of Outbound Data Transfers* (CAC 2022).

### Article 36 · Blocking Clause

> 非经中华人民共和国主管机关批准，境内的组织、个人不得向外国司法或者执法机构提供存储于中华人民共和国境内的数据。

> **— English gloss —** Article 36. Organizations and individuals within China shall not provide data stored in the PRC to foreign judicial or law-enforcement authorities without approval from the competent PRC authorities.

**Impact**: multinational companies facing discovery or foreign regulatory investigations must obtain CAC approval before producing China-resident data.

## Enforcement

Primary authority: the national data-security coordination mechanism; sector competence goes to the relevant sector regulator.

Penalty gradient (Articles 45–52):

- ordinary violations: warning, order to rectify, fines (up to RMB 5 million);
- serious violations: order to suspend operations / revocation of permits + fines on directly responsible persons;
- violations of the **core data** regime: fines up to RMB 10 million; serious cases engage criminal liability.

## Relationship with Other Rules

- **CSL**: the antecedent statute; DSL is a specialized extension of CSL on the data dimension.
- **PIPL**: parallel (personal information vs. data).
- **Measures for the Security Assessment of Outbound Data Transfers**: implementing rules for Article 31.
- **Sector-specific "important data" catalogues**: the landing of the classified-and-graded regime (as of 2026 most sectors remain in draft).

## Source Text and Translations

| Language | Source | Link |
| --- | --- | --- |
| Chinese (original) | National People's Congress | [npc.gov.cn](http://www.npc.gov.cn/npc/c2/c30834/202106/t20210610_311888.html) |
| English | **China Law Translate** | [chinalawtranslate.com/data-security-law](https://www.chinalawtranslate.com/data-security-law/) |

## Version History

| Date | Event |
| --- | --- |
| 2021-06-10 | Passed by the NPC Standing Committee |
| 2021-09-01 | Effective |
