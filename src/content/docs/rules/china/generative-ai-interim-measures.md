---
title: Interim Measures for the Management of Generative AI Services
description: China's first dedicated departmental rule for public-facing generative AI services, effective 2023-08-15; establishes the filing + security-assessment + training-data-legality triple-gate
ruleName: Interim Measures for the Management of Generative AI Services (《生成式人工智能服务管理暂行办法》)
issuer: Cyberspace Administration of China (CAC) / National Development and Reform Commission (NDRC) / Ministry of Education (MOE) / Ministry of Science and Technology (MOST) / Ministry of Industry and Information Technology (MIIT) / Ministry of Public Security (MPS) / National Radio and Television Administration (NRTA) — seven-ministry joint issuance
level: departmental-rule
binding: hard
effectiveDate: 2023-08-15
publishedDate: 2023-07-13
originalUrl: http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm
relatedTopics:
  - frontier-gpai
  - data-training
  - content-labeling-provenance
  - risk-classification
snapshotDate: 2026-06-28
sidebar:
  label: Generative AI Interim Measures (2023)
  order: 3
---

> **📑 Legal hierarchy**: Level 3 · Departmental rule | **Issuance**: CAC, NDRC, MOE, MOST, MIIT, MPS, NRTA (**seven-ministry joint issuance**) | **Effective**: 2023-08-15 | **Character**: hard law

> **⚠️ Hierarchy note**: The name "**Interim Measures**" (*暂行办法*) does not indicate a State Council "interim regulation." This instrument is a **departmental rule**, jointly issued by **seven State Council ministries**; it is **not** a State Council administrative regulation, and still less a NPC law. "Interim" (*暂行*) reflects the legislator's decision to leave space for policy adjustment under uncertainty about generative-AI governance patterns — it is not a hierarchy marker. See [Index of Chinese Rules](/rules/china/#the-legal-hierarchy-at-a-glance).

## English Summary

The *Interim Measures for the Management of Generative AI Services* (《生成式人工智能服务管理暂行办法》) were jointly issued by the Cyberspace Administration of China (CAC) and six other ministries on 2023-07-13, effective 2023-08-15. Widely characterized by regulators as an **"inclusive and prudent" (包容审慎)** approach, the final version was substantially softer than the April 2023 draft: it narrowed the scope to services **provided to the public within mainland China** (excluding enterprise-internal use and R&D), dropped some of the draft's most stringent training-data guarantees, and embraced **classified and graded supervision** (分类分级). Key obligations include **security assessment** and **algorithm filing** for services with "public opinion or social mobilization capacity," baseline training-data legality duties, and content labeling via the *Deep Synthesis Provisions* and the *Labeling Measures*. The Measures sit at the top of China's AI-specific regulatory stack alongside the 2023 *Deep Synthesis Provisions*.

## Overview

The *Generative AI Interim Measures* are China's **first departmental rule dedicated to generative AI services** (no longer limited to "deep synthesis" as a technical subset). Compared with the *Deep Synthesis Provisions*, they:

- **Shift the regulatory object from technology to service**: the regulated object is the **generative AI product** offered to the public.
- **Extend obligations upstream**: not only service providers but also (in part) the R&D side (training data, foundation models) fall within scope.
- **Introduce "classified and graded supervision"**: this leaves an interface for differentiated, risk- or scenario-based regulation (although the detailed framework remains unpublished).

Between the April 2023 draft for comment and the July 2023 final text, **duties were noticeably softened**: the absolute guarantee that training data be "true and accurate" was replaced with "take effective measures," scope was narrowed to public-facing services, and **enterprise-internal R&D and use** were expressly exempted for the first time. The shift was widely read as Beijing's recognition that over-compliance would choke industrial development.

## Scope

**Applies to**:

- Generative AI services provided to the **public within the People's Republic of China**;
- Generation of text, images, audio, and video.

**Does not apply (express carve-out)**:

- Industry associations, enterprises, educational and research institutions, public cultural institutions, and relevant professional bodies that **develop or apply** generative AI technologies **without providing generative AI services to the domestic public**.

This carve-out — the single largest change from the April 2023 draft to the July final text — creates space for enterprise R&D.

## Core Duties

### On service providers

- **Training-data compliance (Article 7)**:
  - use data and foundation models with **lawful sources**;
  - where intellectual property is implicated, shall not infringe others' IP rights;
  - where personal information is implicated, shall obtain individual consent or satisfy another lawful basis under PIPL;
  - **take effective measures to improve training-data quality**, enhancing authenticity, accuracy, objectivity, and diversity.
- **Algorithm filing (Article 17)**: where the service has public-opinion attributes or social-mobilization capacity, file under the *Algorithm Recommendation Provisions*.
- **Security assessment (Article 17)**: under the same conditions, conduct a security assessment as prescribed.
- **Content labeling**: fulfil under the *Deep Synthesis Provisions* and the *Labeling Measures*.
- **Content moderation**:
  - take **remedial measures** against unlawful content in a timely manner: halt generation, halt transmission, delete;
  - take measures such as further model optimization to rectify, and report to the competent authority;
  - maintain sound **complaint and reporting channels**.
- **User management**:
  - specify and publish the service's target users, contexts, and uses;
  - guide users toward rational and scientific use;
  - discharge **personal-information protection duties** in accordance with law and contract.

### On users

- Shall not generate unlawful content — including content endangering national security, undermining ethnic unity, or promoting violence or obscenity.

## Enforcement and Penalties

- **Competent authorities**: CAC leads; the other six ministries coordinate within their mandates.
- **Penalty basis**: the existing statutory ladder; no standalone penalty provisions.
- **Classified and graded supervision**: the Measures leave an interface for detailed implementing rules (no comprehensive framework yet released).

## Relationship with Other Rules

- **Deep Synthesis Provisions (2023)**: both upstream and parallel. The Deep Synthesis Provisions regulate via **technology**; the *Interim Measures* regulate via **service**; the overlap is primarily in conspicuous labeling and algorithmic filing.
- **Algorithm Recommendation Provisions (2022)**: the Interim Measures incorporate its filing procedure — forming a "one filing system, many rules" structure.
  See [algorithm-recommendation-provisions](/rules/china/algorithm-recommendation-provisions/).
- **Labeling Measures (2025)**: the technical implementing rules for the labeling duty.
  See [biaozhi-banfa](/rules/china/biaozhi-banfa/).
- **Personal Information Protection Law (2021)**: applies jointly where training data processing touches personal information.
- **TC260 series of standards**: the supporting security technical specifications (training-data security, service-level security assessment, etc.).

## Debates and Commentary

1. **The hollow state of "classified and graded supervision"**: the Measures set this out as a principle (Article 3), but as of late 2024 no detailed classification-and-grading rules had been released. In practice compliance remains **one-size-fits-all**.
2. **Execution gap on training-data IP**: the text requires "no infringement," but leaves "lawful source" undefined. In practice, leading firms rely on a mixed model of fair use + licensed content + in-house datasets.
3. **Boundaries of the enterprise-internal carve-out**: does an enterprise API offered externally count as "public-facing"? What scale counts as "public"? In practice, firms use the presence of **an independent consumer product** as the dividing line.
4. **Interface with local pilots**: AI-innovation pilots in Beijing, Shanghai, and Shenzhen may adopt looser compliance postures; how undisclosed "sandbox" mechanisms dovetail with the Measures remains a gray zone.

## Source Text and Translations

| Language | Source | Link |
| --- | --- | --- |
| Chinese (original) | CAC | [cac.gov.cn](http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm) |
| Chinese (archived copy) | This site | [generative-ai-interim-measures-2023-07-13.html](/archives/china/generative-ai-interim-measures-2023-07-13.html) |
| English | **China Law Translate** | [chinalawtranslate.com/generative-ai-interim](https://www.chinalawtranslate.com/generative-ai-interim/) |
| English (structured) | Regulations.AI | [regulations.ai/.../china-2023-7-generative-ai](https://regulations.ai/regulations/china-2023-7-generative-ai) |
| English (academic version) | China Aerospace Studies Institute (CASI) | [airuniversity.af.edu 2023-08-07](https://www.airuniversity.af.edu/Portals/10/CASI/documents/Translations/2023-08-07%20ITOW%20Interim%20Measures%20for%20the%20Management%20of%20Generative%20Artificial%20Intelligence%20Services.pdf) |

## Version History

| Date | Event |
| --- | --- |
| 2023-04-11 | *Measures for the Management of Generative AI Services (Draft for Comment)* released |
| 2023-07-13 | Final text released (name amended to include "Interim"; duties markedly softened) |
| 2023-08-15 | Effective |
| 2026-04-21 | First archived on this site |

## Cited Sources

### Primary
- Official text: http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm
- Draft for comment (for comparison):
  https://www.chinalawtranslate.com/gen-ai-draft/

### Major commentary
- Morrison & Foerster:
  https://www.mofo.com/resources/insights/230724-china-interim-measures-governing-generative-ai
- Covington *Inside Privacy*:
  https://www.insideprivacy.com/artificial-intelligence/key-takeaways-from-chinas-finalized-generative-artificial-intelligence-measures/
- Bird & Bird:
  https://www.twobirds.com/insights/2023/china/what-you-need-to-know-about-china%E2%80%99s-new-generative-ai-measures
- Haynes Boone compliance briefing:
  https://www.haynesboone.com/-/media/project/haynesboone/haynesboone/pdfs/alert-pdfs/2023/china-publishes-interim-measures-for-the-management-of-generative-artificial-intelligence-services.pdf
- Wikipedia (English, with index of revisions):
  https://en.wikipedia.org/wiki/Interim_Measures_for_the_Management_of_Generative_AI_Services

### Related research

- **Matt Sheehan** (Carnegie Endowment) — "Tracing the Roots of China's AI Regulations" (2023-07). Analysis of the evolution from draft to final text; the most systematic first-hand English-language work.
- **Paul Triolo** (DigiChina / Albright Stonebridge) — institutional analysis of multi-ministry joint rulemaking.
- **Helen Toner / Jeffrey Ding** — comparative political-economy readings placing the Interim Measures within the "agile governance" frame.
- **Zhang Linghan** 张凌寒 (China University of Political Science and Law / CUPL) — legal-theoretic critique of the hierarchy of departmental rules and the draftsmanship of "Interim" (*暂行*) legislation.
- **CAIDP** (Center for AI and Digital Policy) — quarterly reports assessing the international influence of the Interim Measures.

---

**Cite this page** (generated 2026-04-21):
> Comparative AI. Commentary on the *Interim Measures for the Management of Generative AI Services*. Accessed YYYY-MM-DD.
> https://comparativeai.org/rules/china/generative-ai-interim-measures/
