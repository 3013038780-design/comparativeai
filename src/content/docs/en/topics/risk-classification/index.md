---
title: Risk Classification
description: A comparative analysis of how China, the United States, and the European Union classify AI-system risk — scholarly debates and industry practice.
sidebar:
  order: 1
---

## Why this topic matters

Risk classification is the load-bearing engineering decision inside AI governance: regulatory intensity should scale with risk, but **how risk is defined, who defines it, and in what units** are the three axes on which the jurisdictions diverge most.

## Three-jurisdiction snapshot

| Jurisdiction | Classification basis | Tiers | Triggering mechanism | Representative instruments |
| --- | --- | --- | --- | --- |
| **EU** | **Use case / context** (Annex III list) + **compute** (GPAI 10²⁵ FLOP) | **Four tiers** (prohibited / high-risk / limited-risk / minimal-risk) + a separate GPAI track | Enumerated list + compute threshold | [AI Act arts. 5 / 6 / 50 / 51](/en/rules/eu/ai-act/) |
| **China** | **Service type** (deep synthesis / generative / algorithmic recommendation / anthropomorphic) + **compute / user scale** | De facto tiers (each departmental rule is freestanding) | Scenario lists + 1M-user threshold + filing | [*Generative AI Interim Measures*](/en/rules/china/generative-ai-interim-measures/) · [TC260-003](/en/rules/china/tc260-gen-ai-security-basic-requirements/) · [*AI Safety Governance Framework*](/en/rules/china/ai-safety-governance-framework/) |
| **United States** | **Federal: process-based** (NIST AI RMF, context-driven) **/ states: consequential decisions + compute** | No unified federal tiers; state-by-state variation | State statutes define their own | [NIST AI RMF](/en/rules/us/nist-ai-rmf/) + [Colorado AI Act](/en/subnational/us/colorado-ai-act/) + [California SB 53](/en/subnational/us/california-sb-53-frontier-ai/) |

## Scholarly debates

### Theoretical foundations of the EU's four-tier model

- **Veale & Zuiderveen Borgesius (2021)**, "Demystifying the Draft EU Artificial Intelligence Act" (*Computer Law Review International*): the earliest systematic reading of the draft AI Act, criticising the Annex III list as a **"political compromise rather than risk science"**.
- **Smuha, Ahmed-Rengers, Harkens et al. (2021)**, "How the EU Can Achieve Legally Trustworthy AI": an assessment grounded in fundamental-rights analysis.
- **Bradford (2020)**, *The Brussels Effect* (Oxford): treats the AI Act as a textbook case of EU regulatory exportation.
- **Engler (Brookings)**: an ongoing running commentary on gaps and patches during AI Act implementation, with especially detailed work on the GPAI provisions.
- **Mueller (CEPS)**: sustained critique of the dynamic expansion of the high-risk list and the presumption-of-conformity mechanism.

### Academic readings of China's "scenario-based, agile" approach

- **Xue Lan 薛澜 (Tsinghua School of Public Policy and Management)**: articulated the formula "inclusive, prudent, agile, and effective" (*baorong shenshen, minjie youxiao*), now the standard official and academic shorthand for China's AI governance paradigm.
- **Zhang Linghan 张凌寒 (China University of Political Science and Law)**:
  - Argues that Chinese governance is **"scenario-based ex-ante regulation"** — sorted by service form rather than by risk tier.
  - Calls for a transition from "policy-driven" to "rule-of-law-based" governance.
- **Matt Sheehan (Carnegie Endowment)**:
  - *"Tracing the Roots of China's AI Regulations"* (2024) is the most systematic English-language analysis of the evolution of China's AI rule-making.
  - Argues that China's scenario-based path **predates portions of the EU AI Act** and exerted reverse influence.
- **Paul Triolo**: policy-practitioner tracking; has repeatedly noted that China's "classified and graded" supervision principle remains largely hollow.
- **Olivia's thesis, *A Comparative Analysis of AI Governance in China, the US, and the EU* (2026)**: proposes a three-layer "**structure — institutions — choices**" framework, dividing the jurisdictions into China's "agile coordination", the US's "voluntary risk management", and the EU's "ex-ante compliance".

### Structural explanations of the US's "no unified tier" model

- **Calo (University of Washington)**, *"Artificial Intelligence Policy: A Primer and Roadmap"* (2017): an early diagnosis of US AI-governance fragmentalism.
- **Selbst & Barocas**, *"The Intuitive Appeal of Explainable Machines"* (FAccT community): structural problems in algorithmic accountability.
- **Lehr & Ohm (2017)**, *"Playing with the Data: What Legal Scholars Should Learn About Machine Learning"*.
- **Pasquale (2015)**, *The Black Box Society*: **algorithmic opacity** as a precondition to any tiered regulation.
- **Ho & Casey (Stanford RegLab)**: empirical analysis of federal AI governance.
- **Engler (Brookings)**: ongoing comparative work on EU / US AI governance.

### Cross-jurisdictional classics and recent work

- **Anu Bradford (2023)**, *Digital Empires*: a general framework for three-jurisdiction comparison.
- **Floridi et al. (2022)**, "CapAI: A Procedure for Conducting Conformity Assessment of AI Systems": implementation-oriented tooling for the AI Act.
- **Fjeld et al. (2020)**, *"Principled Artificial Intelligence"* (Berkman Klein): a cross-national map of AI principles.
- **CAIDP (Center for AI & Digital Policy)**, annual *AI and Democratic Values Index*: cross-national comparison.

## Four core controversies

### 1. Units of "risk": capability vs. use case vs. compute

- EU AI Act: primarily **use-case lists** (Annex III) with **compute** as a secondary axis (GPAI 10²⁵ FLOP).
- California SB 53: **compute-first** (10²⁶ FLOP).
- China: primarily **service type** (deep synthesis / generative / recommendation), with no quantitative compute threshold.
- **Academic critique**: the [DeepSeek shock of Jan 2025](/en/companies/deepseek/) demonstrated that a compute threshold **is not a capability threshold** — frontier-level capability is reachable with far less compute. This undermines the threshold designs in both the EU and California.

### 2. Dynamic expansion of the high-risk list

- AI Act Annex III lets the Commission expand the list by delegated acts.
- **Veale and others object** that this hands the Commission excessive legislative power, bypassing normal procedure.
- China's scenario-based rule-making is itself a sequence of ever-growing lists (2022 algorithmic recommendation → 2023 deep synthesis → 2023 generative AI → 2025 content labeling → 2026 anthropomorphic interaction), with each addition materialising as a new departmental rule.

### 3. The political boundaries of a "prohibited list"

- Article 5 of the AI Act sets out eight prohibitions (social scoring, predictive policing, etc.) and is frequently criticised as **ideologically driven** — a response to China's social credit system.
- China has no explicit "prohibited list"; the equivalent work is done by scattered "shall not" clauses in individual departmental rules.
- The US federal government has no prohibitions; California's SB-1047 (vetoed in 2024) would have introduced them.

### 4. Presumption of conformity vs. independent assessment

- EU AI Act: **conformity with harmonised standards = presumption of compliance** (art. 40) — delegating judgement to standardisation bodies.
- US: **NIST AI RMF** is treated as a compliance-presumption on-ramp in several state laws.
- China: **TC260-003 is the de facto compliance yardstick** — failure means the service cannot be filed and cannot launch.
- **Controversy**: whether conformity presumption places excessive public-policy discretion on private standardisation bodies (Almada 2025, EU commentary).

## Industry-practice lens

### How firms map onto different tiering systems

| Company | EU AI Act trigger | California SB 53 trigger | China filing trigger | Corporate response |
| --- | --- | --- | --- | --- |
| [Anthropic](/en/companies/anthropic/) | Yes — GPAI + systemic risk | Yes — 10²⁶ FLOP frontier | Not in China | **[RSP v3](https://www.anthropic.com/news/responsible-scaling-policy-v3)** ASL tiers (map onto most regulations) |
| [OpenAI](/en/companies/openai/) | Yes — GPAI + systemic risk | Yes | Not in China | **[Preparedness Framework v2](https://openai.com/index/updating-our-preparedness-framework/)** High / Critical thresholds |
| [Google DeepMind](/en/companies/google-deepmind/) | Yes — GPAI + systemic risk | Yes | Not in China | **[FSF v3](https://deepmind.google/blog/strengthening-our-frontier-safety-framework/)** Critical + Tracked CLs |
| [Mistral](/en/companies/mistral/) | Yes — GPAI + systemic risk | Borderline (Mistral Large 3 ≈ 10²⁶) | Not in China | **GPAI CoP signatory + open-source transparency** |
| [Meta](/en/companies/) | Partial | Yes | Not in China | Frontier AI Framework v2 |
| [ByteDance Doubao](/en/companies/bytedance/) | Not in market | Not in market | Yes — deep synthesis + generative | **CAC filing + TC260-003 compliance** |
| [Alibaba Qwen](/en/companies/alibaba/) | Open-weight downloads create latent EU obligations | Open-weight → latent California trigger | Yes | Open source + domestic filing |

### Three typical corporate strategies

**Strategy 1: one consolidated document across jurisdictions** (Anthropic / Google DeepMind)
- A single RSP / FSF document mapped simultaneously onto the EU GPAI CoP, California SB 53, and UK AISI evaluations.
- Upside: low cost. Downside: must satisfy the strictest standard.

**Strategy 2: tiered, per-jurisdiction documents** (OpenAI / Mistral)
- Preparedness Framework as the baseline, with jurisdiction-specific supplements.
- Upside: flexibility. Downside: duplicated paperwork and cross-jurisdictional consistency risk.

**Strategy 3: de facto compliance + minimal disclosure** (most Chinese companies)
- Meet Chinese requirements through CAC filing + TC260-003.
- **No independent safety-framework document is published.**
- Upside: low compliance cost. Downside: constrained international expansion.

### What changed in Q1 2026

- **Anthropic RSP v3 (Feb 2026)**: drops the pause commitment and separates "unilateral commitments" from "industry-wide obligations".
- **OpenAI Preparedness v2 (Apr 2025)**: simplified to two tiers, High / Critical.
- **Google DeepMind FSF v3 (Apr 2026)**: introduces **Tracked Capability Levels (TCLs)** for early-warning signal + a new **Harmful Manipulation CCL**.
- **California SB 53 in force (Jan 2026)**: the first dedicated US state law on frontier AI.
- **Trump EO 14365 (Dec 2025)**: attempts to preempt state AI laws → rejected by California and Colorado.

## Related rules and companies

### Related rules

- **EU**: [AI Act](/en/rules/eu/ai-act/) arts. 5 / 6 / 50 / 51; [GPAI Code of Practice](/en/rules/eu/gpai-code-of-practice/); [Digital Omnibus Proposal](/en/rules/eu/digital-omnibus-proposal/).
- **China**: [Generative AI Interim Measures](/en/rules/china/generative-ai-interim-measures/) art. 3; [TC260-003-2024](/en/rules/china/tc260-gen-ai-security-basic-requirements/); [AI Safety Governance Framework 1.0 / 2.0](/en/rules/china/ai-safety-governance-framework/); [Anthropomorphic Interaction Services Measures](/en/rules/china/anthropomorphic-interaction-services/).
- **United States**: [NIST AI RMF](/en/rules/us/nist-ai-rmf/); [Colorado AI Act](/en/subnational/us/colorado-ai-act/); [California SB 53](/en/subnational/us/california-sb-53-frontier-ai/); [Texas TRAIGA](/en/subnational/us/texas-traiga/); [NYC Local Law 144](/en/subnational/us/nyc-local-law-144/).

### Related companies

See the "Safety Framework" sections of the individual [company pages](/en/companies/) — the analysis is deepest for [Anthropic](/en/companies/anthropic/), [OpenAI](/en/companies/openai/), and [Google DeepMind](/en/companies/google-deepmind/).

## Jurisdiction deep-dives

- [China](./china/)
- [United States](./us/)
- [EU](./eu/)
