---
title: Cybersecurity Law (CSL)
description: China's foundational cybersecurity statute, effective 2017-06-01; its duties for Critical Information Infrastructure (CII) operators and network operators form the compliance baseline for all AI services
ruleName: Cybersecurity Law of the People's Republic of China (《中华人民共和国网络安全法》)
issuer: Standing Committee of the National People's Congress (NPC-SC / 全国人民代表大会常务委员会)
level: national-law
binding: hard
effectiveDate: 2017-06-01
publishedDate: 2016-11-07
originalUrl: http://www.npc.gov.cn/npc/c2/c30834/201611/t20161107_207389.html
relatedTopics:
  - risk-classification
  - data-training
snapshotDate: 2026-06-28
sidebar:
  label: CSL Cybersecurity Law (2017)
  order: 12
---

> **📑 Legal hierarchy**: Level 1 · Law | **Enacting body**: NPC **Standing Committee** | **Effective**: 2017-06-01 | **Character**: hard law

> **⚠️ Hierarchy note**: This instrument is a **law enacted by the NPC Standing Committee** (Level 1) — the highest rank. The penalty provisions of most subsequent AI-specific departmental rules cite back to Article 68 of this Law. See [Index of Chinese Rules](/rules/china/#the-legal-hierarchy-at-a-glance).

## English Summary

The **Cybersecurity Law (CSL)**, effective 2017-06-01, is the foundational statute for China's cyber and data governance. It introduces (i) real-name registration, (ii) MLPS 2.0 (Multi-Level Protection Scheme) tiering for network operators, (iii) stringent duties for **Critical Information Infrastructure (CII) operators**, including data localization and security review for procurement of network products, and (iv) the penalty framework that most subsequent AI-specific rules (Deep Synthesis, Generative AI Interim Measures, Labeling Measures) cite as their enforcement basis.

## Overview

CSL's role in AI governance: **it is not an AI-specific law, but almost every AI-specific departmental rule routes its penalty provisions back to Article 68 of CSL.**

Key institutions:

1. **MLPS 2.0 (Multi-Level Protection Scheme)**: all network operators are graded on a 1–5 scale, with progressively heavier duties.
2. **CII operators**: operators of critical information infrastructure in energy, finance, transport, public communications, e-government and related sectors — providing AI services to CII operators triggers a **cybersecurity review**.
3. **Data localization**: CII operators shall, as a default, store domestically the personal information and important data they collect within China.
4. **Network content governance**: Article 47 requires network operators to handle and report unlawful information.

## Direct Impact on AI

- **Service filing (*备案*)**: the operator filing system established by CSL → the algorithmic filing regime of Article 17 of the Generative AI Measures follows the same pathway.
- **Cybersecurity review**: a large-model service entering CII contexts such as finance or energy → triggers the 2023-revised *Measures for Cybersecurity Review*.
- **Handling unlawful content**: the "detect → handle → report" chain of Article 47 is the generic template for the unlawful-content duties of Deep Synthesis and Generative AI rules.
- **Penalty linkage**: Articles 64–68 are the default penalty anchors cited by China's AI departmental rules.

## Core Provisions (selected)

### Article 21 · MLPS

> 国家实行网络安全等级保护制度。网络运营者应当按照网络安全等级保护制度的要求，履行下列安全保护义务…

> **— English gloss —** Article 21. The State implements a Multi-Level Protection Scheme for cybersecurity. Network operators shall, in accordance with the requirements of the MLPS, perform the following security-protection duties…

→ GB/T 22239-2019 *Information Security Technology — Baseline for Cybersecurity MLPS* provides the implementation baseline.

### Articles 31, 37 · CII and Localization

> 在中华人民共和国境内运营中收集和产生的**个人信息和重要数据**应当在境内存储。因业务需要，确需向境外提供的，应当按照国家网信部门会同国务院有关部门制定的办法进行安全评估。

> **— English gloss —** The **personal information and important data** collected and generated during operations within the territory of the PRC shall be stored domestically. Where business necessity requires outbound transfer, a security assessment shall be conducted under measures formulated by the State cybersecurity-and-informatization department together with relevant State Council departments.

### Article 47 · Handling Unlawful Information

> 网络运营者应当加强对其用户发布的信息的管理，发现法律、行政法规禁止发布或者传输的信息的，应当立即停止传输该信息，采取消除等处置措施，防止信息扩散，保存有关记录，并向有关主管部门报告。

> **— English gloss —** Network operators shall strengthen the management of information posted by their users. Upon discovering information whose publication or transmission is prohibited by law or administrative regulation, they shall immediately halt transmission, take remedial measures such as deletion to prevent dissemination, preserve relevant records, and report to the competent authorities.

### Article 68 · Penalties for Information Services

The central penalty provision cited by AI departmental rules:

- warning, confiscation of illegal gains;
- **fines of RMB 100,000 to 1,000,000**;
- fines of RMB 10,000 to 100,000 on persons in charge and other directly responsible personnel;
- in serious cases: orders to suspend operations and rectify, shutdown of websites, revocation of permits.

## Enforcement

Primary authority: the national cybersecurity-and-informatization department (CAC) leads; MPS, MIIT, SAMR, and sector regulators coordinate within their mandates.

CII designation: organized by sector regulators together with the cybersecurity-and-informatization and public-security departments; the result is notified to operators. **The CII catalogue is not public** (designation is "notice-based").

## Relationship with Other Rules

- **DSL**: the specialized law on the data dimension; from 2021 onward, takes over the data aspects from CSL.
- **PIPL**: the specialized law on personal information.
- **Measures for Cybersecurity Review (2023 revision)**: implementing rules for Article 35.
- **Regulations on the Security Protection of Critical Information Infrastructure (2021)**: implementing rules for the CII provisions.
- **All AI departmental rules**: cite CSL as their default penalty anchor.

## Source Text and Translations

| Language | Source | Link |
| --- | --- | --- |
| Chinese (original) | National People's Congress | [npc.gov.cn](http://www.npc.gov.cn/npc/c2/c30834/201611/t20161107_207389.html) |
| English | **China Law Translate** | [chinalawtranslate.com/cybersecurity-law](https://www.chinalawtranslate.com/cybersecurity-law/) |
| English (official English version) | Stanford DigiChina | [digichina.stanford.edu](https://digichina.stanford.edu/) |

## Version History

| Date | Event |
| --- | --- |
| 2016-11-07 | Passed by the NPC Standing Committee |
| 2017-06-01 | Effective |
