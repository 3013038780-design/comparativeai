---
title: Personal Information Protection Law (PIPL)
description: China's foundational statute on personal information, effective 2021-11-01; its provisions on automated decision-making and sensitive personal information form the compliance floor for AI governance
ruleName: Personal Information Protection Law of the People's Republic of China (《中华人民共和国个人信息保护法》)
issuer: Standing Committee of the National People's Congress (NPC-SC / 全国人民代表大会常务委员会)
level: national-law
binding: hard
effectiveDate: 2021-11-01
publishedDate: 2021-08-20
originalUrl: http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html
relatedTopics:
  - data-training
  - risk-classification
snapshotDate: 2026-04-21
sidebar:
  label: PIPL Personal Information Protection Law (2021)
  order: 10
---

> **📑 Legal hierarchy**: Level 1 · Law | **Enacting body**: NPC **Standing Committee** | **Effective**: 2021-11-01 | **Character**: hard law

> **⚠️ Hierarchy note**: This instrument is a **law enacted by the NPC Standing Committee** (Level 1) — the highest rank. When downstream AI departmental rules (the Generative AI Measures, Deep Synthesis Provisions, etc.) handle personal information, they must route back to this Law. See [Index of Chinese Rules](/en/rules/china/#the-legal-hierarchy-at-a-glance).

## English Summary

The **Personal Information Protection Law of the People's Republic of China (PIPL)** is China's umbrella data-protection statute, effective 2021-11-01. It establishes (i) consent as the default lawful basis, (ii) a "separate consent" regime for sensitive personal information including biometrics and minors' data, (iii) algorithm-transparency and opt-out rights for automated decision-making (Article 24), and (iv) extraterritorial reach over services targeting PRC residents. PIPL sits on top of the Cybersecurity Law (CSL) and Data Security Law (DSL), and serves as the operative floor for all subsequent AI-specific rules (Deep Synthesis, Generative AI Interim Measures, Labeling Measures).

## Overview

PIPL's role in AI governance is **not that of an AI-specific law**, but virtually every AI compliance question eventually routes through it:

- **Training data**: scraping, authorization, or user-generated content touching personal information → PIPL.
- **Faces / voiceprints**: sensitive personal information → Articles 28–32 of PIPL (separate consent, impact assessment).
- **Algorithmic recommendation / generated content**: automated decision-making → Article 24.
- **Cross-border transfer**: security assessments, standard contracts → Articles 38–43.
- **Children**: personal information of minors under 14 is treated as sensitive → Article 31.

## Provisions Most Relevant to AI Governance

### Article 24 · Automated Decision-Making

> 个人信息处理者利用个人信息进行自动化决策，应当保证决策的透明度和结果公平、公正，不得对个人在交易价格等交易条件上实行不合理的差别待遇。
>
> 通过自动化决策方式向个人进行信息推送、商业营销，应当同时提供不针对其个人特征的选项，或者向个人提供便捷的拒绝方式。
>
> 通过自动化决策方式作出对个人权益有重大影响的决定，个人有权要求个人信息处理者予以说明，并有权拒绝个人信息处理者仅通过自动化决策的方式作出决定。

> **— English gloss —** Article 24. Personal-information handlers using personal information for automated decision-making shall ensure transparency and fairness of outcomes, and shall not impose unreasonable differential treatment on individuals regarding transaction prices or other conditions.
>
> Where information is pushed or commercial marketing is conducted by automated decision-making, handlers shall concurrently offer an option not targeted at the individual's personal characteristics, or provide a convenient means to refuse.
>
> Where automated decision-making produces a decision with significant impact on the individual's rights and interests, the individual has the right to request an explanation from the handler and the right to refuse decisions made solely by automated means.

**Significance**: this is China's counterpart to GDPR Article 22. The "allow users to turn off recommendation" requirement under Article 17 of the *Algorithm Recommendation Provisions* is, in substance, the operationalization of this article.

### Article 28 · Sensitive Personal Information

Defined as "personal information that, once leaked or unlawfully used, is liable to harm the natural person's human dignity or endanger their person or property," expressly enumerating **biometric data, religious beliefs, specific identities, medical and health information, financial accounts, and whereabouts**, as well as the personal information of minors under 14.

Processing requires: **separate consent** + **a specific purpose and sufficient necessity** + a **personal information protection impact assessment**.

### Article 31 · Minors

Personal information of minors under 14 is treated as sensitive personal information; processing requires consent from a parent or guardian. AI-generated and synthesized content rules, "minors mode," and services aimed at minors all cite this article directly.

### Articles 38–43 · Cross-Border Transfer

PIPL provides three lawful cross-border pathways:

1. Undergoing a **security assessment** organized by the national cybersecurity-and-informatization department (for large-scale handlers and CII operators);
2. **Personal-information protection certification**;
3. **Standard contractual clauses** (SCCs).

AI model training that relies on offshore compute or data sources must assess whether cross-border rules are engaged.

## Enforcement

Primary authority: the CAC leads; MPS and SAMR coordinate within their mandates.

Penalty gradient (Article 66):

- ordinary violations: warning, order to rectify, confiscation of unlawful gains, fines (up to RMB 1 million);
- serious violations: fines of **up to RMB 100 million or 5% of prior-year turnover**, orders to suspend operations, and revocation of business licenses;
- directly responsible individuals: fines of RMB 10,000–1,000,000, and industry bans.

**Leading case**: the 2022 Didi case (RMB 8.026 billion, imposed on the combined basis of CSL + DSL + PIPL) remains the largest single fine since PIPL came into force.

## Relationship with Other Rules

- **CSL / DSL**: parallel upstream statutes. Enforcement commonly stacks the three laws.
- **Deep Synthesis Provisions / Generative AI Measures**: synthesis involving faces or voiceprints → must route back to Article 28 of PIPL.
- **Algorithm Recommendation Provisions**: the automated-decision-making clauses elaborate PIPL Article 24.
- **Provisions on the Online Protection of Children's Personal Information (2019)** + **Regulations on the Protection of Minors Online (2024)**: intersect with PIPL Article 31.
- **Measures for the Security Assessment of Outbound Data Transfers (CAC 2022)**: implementing rules for PIPL Article 40.

## Source Text and Translations

| Language | Source | Link |
| --- | --- | --- |
| Chinese (original) | National People's Congress | [npc.gov.cn](http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html) |
| English | **China Law Translate** | [chinalawtranslate.com/en/personal-information-protection-law](https://www.chinalawtranslate.com/en/personal-information-protection-law/) |
| English (official English version) | NPC Observer | [npcobserver.com/.../personal-information-protection-law](https://npcobserver.com/legislation/personal-information-protection-law/) |

## Cited Sources

- NPC Standing Committee release: http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html
- CAC PIPL portal: https://www.cac.gov.cn/
- Stanford DigiChina in-depth series: https://digichina.stanford.edu/
- Covington & Burling *Inside Privacy* China column
- CAIDP PIPL Report

## Version History

| Date | Event |
| --- | --- |
| 2020-10 | First reading draft |
| 2021-08-20 | Passed at third reading |
| 2021-11-01 | Effective |
