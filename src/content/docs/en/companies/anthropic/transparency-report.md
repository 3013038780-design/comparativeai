---
title: Transparency Report
description: Disclosure content in Anthropic's Transparency Hub, version history, comparison against the RDR / DSA baselines, and the "transparency theatre" critique
sidebar:
  order: 4
snapshotDate: 2026-04-23
---

> **Summary**: Since its launch in 2024, Anthropic's **Transparency Hub** (anthropic.com/transparency)
> has published, on a semi-annual to annual cadence, metrics on government data requests, content moderation, misuse reports, Trust & Safety enforcement, and political-bias testing.
> Compared with the decades of accumulated practice at Meta and Google, Anthropic's system is **young but professionally executed**.
> This page systematically surveys the disclosures, benchmarks them against peer baselines, and draws on the critiques of "**transparency theatre**" from Kirsten Martin, Mike Ananny, and others.

## The Transparency Hub disclosure matrix

| Category | Disclosed content | First published | Latest cycle |
| --- | --- | --- | --- |
| **Government data requests** | Volume, country, response rate of law-enforcement user-data requests | H1 2024 | H2 2025 (published February 2026) |
| **National-security requests** | NSL / FISA (aggregated within legal limits) | H2 2024 | H2 2025 |
| **Content moderation** | Warnings / suspensions / terminations for AUP violations | H1 2025 | Full-year 2025 (March 2026) |
| **Misuse reports** | Named disclosures of Claude abuse cases (post-mortems) | November 2024 first issue | Cyclical (every 3–6 months) |
| **Trust & Safety enforcement** | Distribution of misuse categories, response times | H1 2025 | Full-year 2025 |
| **Political bias evaluation** | Results of testing Claude's behaviour across the political spectrum | Q3 2025 | Full-year 2025 |
| **Child safety** | CSAM refusal rates, NCMEC-report statistics | H2 2025 | Full-year 2025 |

**Structural benchmarks**: the categories chosen for the Anthropic transparency report **partly track** dimensions from the Meta Community Standards Enforcement Report, the Google Transparency Report, and the Ranking Digital Rights Corporate Accountability Index.

## Version history

| Date | Key event |
| --- | --- |
| 2023–Q1 2024 | No systematic transparency reporting; scattered blog disclosures |
| **May 2024** | First "government-request transparency" half-year report (covering H1 2024) |
| **November 2024** | First named misuse post-mortem, "Disrupting Malicious Uses of Our Models" |
| **February 2025** | H2 2024 government-request report; first country-level breakdown |
| **August 2025** | Transparency Hub formally launches as a unified landing page; first public Trust & Safety enforcement statistics |
| **Q3 2025** | Political-bias evaluation debuts (responding to 2025 "political neutrality" executive pressure) |
| **February 2026** | H2 2025 data; **first chapter dedicated to "AI-assisted large-scale misuse"** |
| **March 2026** | Full-year 2025 report; AUP account terminations disclosed in the **tens of thousands** (precise figures should be taken from the official report) |

## Named misuse disclosures: a distinctive practice

Anthropic's "Disrupting Malicious Uses" series, beginning November 2024, is a **distinctive practice among frontier labs** — **named disclosures of detected and blocked misuse cases** (de-identified). From November 2024 to April 2026 the main categories are:

1. **State-linked cyber operations** (APT-style): specific disclosures of accounts linked to **North Korea, Iran, and Russia** attempting to use Claude for malicious-code assistance and reconnaissance-information analysis
2. **Large-scale job-application fraud**: January 2025 disclosure of mass-generated fabricated résumés and AI candidates impersonating real applicants in remote interviews
3. **Vibe Hacking**: the July 2025 disclosure of a natural-language-driven jailbreak pattern used in social-engineering attacks
4. **Political-influence operations**: November 2025 disclosure of large-scale automated political-content-generation clusters (partisan orientation not disclosed)
5. **CSAM-related refusal data**: February 2026 first disclosure of annual refusal counts and NCMEC reports

**Comparison with OpenAI's "Disrupting deceptive uses of AI" series** (launched May 2024): the two labs' cadence and content are **closely similar**, making them the industry's dual leaders in this practice. Meta and Google have **not produced comparable LLM-misuse disclosures**.

## Political-bias evaluation: a product of external pressure

Trump-administration executive orders in 2025 and US Department of Justice focus on "ideological bias" **directly** drove frontier-lab "political neutrality" disclosures. Anthropic's Q3 2025 inaugural political-bias evaluation covered:

- **Topic list**: ~30 issues including abortion, guns, immigration, climate, cryptocurrency
- **Method**: diverse prompt framings measuring response lean on left/right and liberal/conservative axes
- **Baseline comparisons**: Claude vs. GPT-5 vs. Gemini 3 vs. Grok 4 (a self-published reproducible evaluation)
- **Results**: Claude leans **slightly left** but has moved noticeably toward the centre in the 4.x series; closest to centre among peers other than Grok 4

**Academic critique**: Brookings Institution (*AI and political polarization*, 2024) notes that "neutrality" is itself a **political construct** — the choice of centre-point is a political choice. Anthropic's evaluation uses the **US domestic political spectrum** as frame of reference, with limited applicability to non-US issues.

## Baseline gap relative to Meta / Google

Meta and Google's transparency reporting dates to **2011–2013** (Google 2010, Twitter 2012, Meta 2013), with **over a decade** of methodological accumulation. Anthropic started in 2024, and the **baseline gap** manifests in:

| Dimension | Google (2011–) | Meta (2013–) | Anthropic (2024–) |
| --- | --- | --- | --- |
| **Reporting history** | 14+ years | 12+ years | 2 years |
| **Country-level breakdown** | Complete | Complete | Partial (since 2025) |
| **Legal-basis categorisation** | Complete | Complete | Partial |
| **User-impact metrics** | Accounts + content | Accounts + content | Accounts only (no content counts) |
| **Independent audit** | Partial (PwC, DTTL, etc.) | **Yes** (EY, independent audit) | **None** |
| **Historical data downloads** | Yes | Yes | **Partial** (latest only) |

**Ranking Digital Rights 2024 Corporate Accountability Index** methodology: 300+ indicators across governance / freedom of expression / privacy. Anthropic **has not been included** in the RDR routine evaluation (RDR focuses on platform companies), but internal applicability testing of the relevant G/F/P indicators shows that Anthropic would **score significantly below Meta and Google** — principally because of the three gaps above (history, granularity, independent audit).

## Academic critique: transparency theatre

### Kirsten Martin (Notre Dame)

Martin's extension of **"privacy as contextual integrity" to transparency research** argues that the **choice of disclosure categories** itself reflects a power structure — what is disclosed is "transparency favourable to the company" (government requests demonstrate the company "protects users"), while what is not disclosed (internal management decisions, training data, algorithmic changes) constitutes "opacity unfavourable to the company."

**Anthropic's specific profile**:
- Disclosed: government requests, AUP enforcement, CSAM refusals
- Not disclosed: training-data composition, FLOP, RLHF labour, internal policy changes

### Mike Ananny (USC)

Ananny (*Networked Press Freedom*, 2018; *Seeing Without Knowing*, 2018, with Crawford) advances the core claim that **transparency ≠ accountability**. A transparency report with **no independent verification mechanism** reduces to "the company telling you what it did" — the reader **cannot independently verify** the document's accuracy or completeness.

**Anthropic's response**: the external reviewers introduced in RSP v3 (GovAI / METR / MATS; see [safety-framework](../safety-framework/)) partially respond, but the **audit of transparency reports themselves remains internal**.

### Evelyn Douek (Stanford / Columbia)

Douek (*Content Moderation at Scale*, *The Siren Call of Content Moderation Formalism*) focuses on due process in content moderation:
- Disclosure of rules (AUP) — yes
- Disclosure of violation-category statistics — yes
- **Disclosure of individual-case processing** (appeal mechanisms, exemplary adjudications) — no
- **Disclosure of policy-change decision-making** — no

This is a **structural blind spot** across Anthropic (and the industry) transparency reporting. Douek terms it the "**quantitative skin over a black-box enforcement**" — one knows how many accounts were banned, but not **how each was judged**.

### Alex Stamos (SIO → Krebs Stamos Group)

Stamos, during his time at the Stanford Internet Observatory, repeatedly called for **Trust & Safety as a discipline**. Anthropic's 2024–2025 T&S team build-out is **among the more active industry responses**. Stamos also continually criticised the **inherent conflict** in company self-assessment: even where T&S staff are professionally qualified, a **structure that simultaneously answers to shareholders, compliance, and the public** constrains critical judgement.

## DSA Article 24 / 42 baseline comparison

The **EU Digital Services Act** imposes **structured transparency obligations** on Very Large Online Platforms (VLOPs):

| DSA requirement | Anthropic current practice | Gap |
| --- | --- | --- |
| **Art. 15** (periodic transparency report) | Yes (semi-annual to annual) | No DSA-prescribed format |
| **Art. 24** (advertising transparency) | N/A (Claude is not a platform) | — |
| **Art. 34–35** (systemic risk assessment) | Partial via RSP | **Independence insufficient** |
| **Art. 37** (independent audit) | **None** | **DSA requires annual independent audit** |
| **Art. 40** (researcher data access) | Present (limited collaboration) | Below DSA researcher-access standard |
| **Art. 42** (VLOP transparency database) | Partial (blog-style) | Not incorporated in the DSA database |

**Claude.ai in the EU is not directly subject to VLOP obligations** (user base likely below threshold); but **if it reaches or is designated a VLOP**, current transparency practice is **insufficient to meet Articles 37 / 42**.

## Trust & Safety as a discipline: industry emergence

Beyond transparency reporting, the **Trust & Safety ecosystem** professionalised across 2023–2026:

- **Stanford Internet Observatory** (2019–; reorganisation announced June 2024, some functions transferred to Krebs Stamos Group) — led by Alex Stamos and Renée DiResta
- **Trust & Safety Professional Association** (2020–) — certification, training
- **T&S policy journals**: Stanford *Journal of Online Trust & Safety* founded 2021
- **Key scholars**: Evelyn Douek, Daphne Keller, Kate Klonick, Tarleton Gillespie, Sarah T. Roberts

Anthropic's T&S team grew from a handful at the outset to a mid-industry size through 2023–2026 (exact headcount not publicly disclosed). Hiring pathways draw on Meta Integrity, Twitter, and Stanford SIO, giving the **team's professional profile** a relative lead among frontier labs; but **governance independence** (to whom T&S reports, whether it can override product decisions) is not publicly disclosed.

## Cross-references within this site

- **Anthropic corporate overview**: [../](../)
- **AUP enforcement detail**: [usage-policy](../usage-policy/)
- **Red-team and alignment disclosures**: [red-team-disclosures](../red-team-disclosures/)
- **RSP external review**: [safety-framework](../safety-framework/)
- **Model Card disclosure**: [model-card](../model-card/)
- **OpenAI transparency practice**: [companies/openai](../../openai/)
- **EU DSA**: Articles 15 / 24 / 37 / 40 / 42 DSA
- **California SB 53**: Critical Safety Incident reporting requirement
- **Chinese algorithm filing**: [Generative AI Interim Measures 《生成式人工智能服务管理暂行办法》](/en/rules/china/generative-ai-interim-measures/) — CAC algorithm filing's "algorithmic transparency" mandate and Anthropic-style public disclosure represent **distinct regulatory traditions**

## Observations 2025–Q1 2026

- **August 2025**: Transparency Hub formally launches, consolidating previous scattered disclosures
- **Q3 2025**: political-bias evaluation debuts (responding to US executive pressure)
- **November 2025**: Vibe Hacking and other large-scale misuse disclosures form a sustained narrative
- **February 2026**: H2 2025 data first include attribution disclosures for AI-assisted state-level cyber operations
- **March 2026**: annual report discloses AUP account terminations in the **tens of thousands** (precise figures should be taken from the official report)

## Industry comparison snapshot (April 2026)

| Company | First report | Cadence | Government requests | Misuse disclosure | Independent audit |
| --- | --- | --- | --- | --- | --- |
| **Google** | 2010 | Semi-annual | Detailed | Yes (YouTube / Search) | Partial |
| **Meta** | 2013 | Quarterly + annual | Detailed | Yes (CSER / integrity) | EY |
| **Apple** | 2013 | Semi-annual | Detailed | Limited | N/A |
| **OpenAI** | 2023 | Irregular | Partial | Yes (since 2024) | None |
| **Anthropic** | **2024** | **Semi-annual to annual** | **Partial** | Yes (named) | None |
| **Google DeepMind** | Via Google reports | Same as Google | Same as Google | Partial | Partial |
| **xAI** | None | — | — | — | — |
| **Mistral** | None | — | — | — | — |
| **Chinese firms** (Alibaba / Baidu / ByteDance / DeepSeek) | None | — | — | — | — |

**Two salient facts**:
1. **Frontier-lab transparency practice is less than two years old as a whole**, structurally younger than legacy platform companies
2. **Chinese frontier firms produce no public transparency reports** — transparency is effected through non-public disclosures to the **Cyberspace Administration of China (CAC) algorithm filing (算法备案)**, answerable to **the regulator, not the public**

## Ongoing tracking

- Publication of transparency-report methodology (currently only categories disclosed; no methods annex)
- Whether external independent audit is introduced under SB 53 / DSA pressure
- Attribution accuracy in misuse disclosures (validation by third-party security researchers)
- Extension of political-bias evaluation to non-English / non-US topics
- Public information on Trust & Safety team size and governance standing
