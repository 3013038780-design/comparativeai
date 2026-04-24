---
title: Red Team and Evaluation Disclosures
description: ByteDance red-team and safety-evaluation disclosures — a three-layer architecture of filing materials + TC260 semi-public benchmarks + overseas DSA independent audit (snapshot 2026-04-23)
sidebar:
  order: 5
snapshotDate: 2026-04-23
---

> ByteDance **has not** publicly released anything comparable to Anthropic's Frontier Red Team papers, OpenAI's Preparedness evaluation reports, or the DeepMind FSF Report
> in the sense of a "red-team disclosure."
> This is a shared feature of China's frontier labs. But absence of disclosure does not mean absence of work—
> actual red-team activity exists in three forms: **filing materials (non-public) + TC260 benchmarks (semi-public) + DSA independent audit (publicly available overseas)**.

## 1. The three-layer structure of red-team disclosure

| Layer | Audience | Form | Public visibility |
| --- | --- | --- | --- |
| **Filing layer** | CAC / CAC local offices | Algorithm Security Self-Assessment Report + Model Safety Test Report | **Non-public** |
| **National-standard layer** | TC260 + CAICT / Shanghai AI Lab 上海人工智能实验室 / CAC algorithm-evaluation lab | TC260-003 31-risk-category test records; CAIC (China AI Compliance Alliance) evaluations | **Semi-public** (benchmarks public, aggregate results public, firm-level results non-public) |
| **Overseas layer** | EU DSA independent audit + Singapore IMDA coordination | Kroll annual SRA; participation in IMDA AI Verify / Project Moonshot | **Public** |

## 2. Filing layer: the Algorithm Security Self-Assessment Report

### Structure and contents

Under Article 17 of the *Generative AI Interim Measures*, the CAC's *List of Filing Materials for Generative AI Services*, and Appendix B of TC260-003-2024,
the typical structure of the Algorithm Security Self-Assessment Report is:

1. **Algorithm basics** (architecture, parameters, context window, training-data scale)
2. **Training-data safety** (legality of sources, proportion of sensitive data filtered, personal-information processing)
3. **Corpus labeling** (labeling rules, annotator training, sampling-based annotator audits)
4. **Generated-content safety testing**:
   - 5 classes of 31 risks (violations of core socialist values, discriminatory content, commercial-law violations,
     infringement of lawful rights and interests, and defects in accuracy / reliability)
   - ≥ 1000 test prompts per class (TC260-003 Appendix B minimums)
   - Generated-content compliance rate and refusal rate must meet the thresholds in TC260-003 §5.2 (specific values per the standard text)
5. **Adversarial model-safety testing**: prompt injection, jailbreak, multi-turn dialogue attacks,
   role-play inducement, encoding-based bypass, etc.
6. **Bias evaluation** (consistency across gender, region, ethnicity, age, etc.)
7. **Minor-protection section** (required for products like Doubao that have a youth mode)
8. **Emergency-response and remediation plan**

### Where "red teaming" sits within the filing

TC260-003 explicitly positions adversarial testing as a prerequisite to filing. Common test methods:

- **Keyword-morph attacks** (homophones, character splitting, simplified / traditional conversion, emoji substitution)
- **Multi-turn context inducement** ("hypothetical / role-play / story-continuation" attack chains)
- **Encoding-based bypass** (Base64, hex, classical Chinese, English, minority languages)
- **Sensitive inducement in minor-related scenarios**

These methods are structurally similar to Western red-team techniques, but:

- **Test results are non-public**, visible only to CAC filing authorities
- **The benchmark pool is semi-public** (circulates among TC260 working-group member units; not available through public channels)
- Results are reported as single numbers (compliance rate / refusal rate) rather than the qualitative failure-case analysis typical of Western red teams

## 3. National-standard layer: TC260-003 as industry-wide red-team benchmark

### As a "semi-public industry red team"

TC260-003-2024 can in essence be understood as **a shared red-team benchmark for the Chinese AI industry**:

- The 31 risk categories are jointly defined by the CAC and the TC260 working group (ByteDance, Alibaba, Baidu, Tencent, Huawei, and others)
- ≥ 1000 prompts per category circulate among working-group members but are not released externally
- Third-party testing bodies (CAICT / Shanghai AI Lab / CAC algorithm-evaluation lab / CAIC) evaluate against this benchmark
- Evaluation results are **not published at firm level**, but **the industry-wide compliance water level is held by the regulator**

> Reading TC260-003 as an "industry red team" is key to understanding Chinese AI safety evaluation—
> ByteDance does not publish "its own" red-team findings because **red-team work itself is, institutionally, a collective and regulator-administered activity, not a single-firm activity**.

### Third-party testing bodies

- **China Academy of Information and Communications Technology (CAICT / 中国信息通信研究院)**: a public institution under MIIT that actually performs "quasi-regulatory" large-model safety evaluation and compliance certification
- **Shanghai AI Lab 上海人工智能实验室 (also known as SAIL)**: the evaluation center for the Yangtze River Delta region
- **CAC algorithm-evaluation lab**: directly attached to the CAC and serving filing
- **CAIC (China AI Compliance Alliance)**: formed by leading firms and institutions

Doubao and the Seed series have largely been tested by these bodies, but **specific reports are not public**.
**Kendra Schaefer** comments that CAICT in substance performs the quasi-regulatory role of "FDA for AI"—
but unlike FDA drug-review reports, the disclosure depth of its evaluation results is far lower than that of international peers.

## 4. Overseas layer: TikTok's DSA independent audit

### Kroll's annual Systemic Risk Audit

Under EU DSA Art. 37, a VLOP must undergo an annual independent audit. In 2024, TikTok selected:

- **Kroll** (lead auditor)
- **A&O Shearman** (legal compliance adviser)

The audit covers red-team-adjacent work:

- Systemic risks of algorithmic recommendation during the 2024 European Parliament election (with a detailed Romania-election post-mortem in the 2025 SRA)
- Detection and mitigation of AI-generated synthetic media
- Recommendation bias on minors' mental health content
- Spread and suppression of hate speech / misinformation

The **2025 SRA** (published 2025-11) contains an independent-auditor opinion running to over a hundred pages, with an overall conclusion on the order of "compliant, with room for improvement,"
and multiple specific improvement recommendations. It is **the only red-team / safety-evaluation disclosure in the ByteDance product family that reaches the granularity of Western top labs**
(precise page count and recommendation count per the official release).

### Singapore IMDA / Project Moonshot

TikTok / ByteDance participate in Singapore IMDA's **AI Verify** and **Project Moonshot**
(an open-source LLM safety-evaluation toolkit). Project Moonshot provides a standardized red-team tool chain (multilingual jailbreak / bias / cultural-sensitivity tests).
ByteDance's participation is publicly verifiable, but specific test results are not published.

### Non-signatory of UK AISI / US AISI pre-deployment testing

Unlike Anthropic, OpenAI, DeepMind, and Meta (all of whom signed UK AISI / US AISI pre-deployment testing MoUs),
**ByteDance has not signed**. It does maintain non-public communication with Singapore IMDA and with the European Commission.

## 5. Academic critique

### International scholarship

- **Markus Anderljung (GovAI)**:
  the Chinese model is an archetypal **"closed AI evaluation regime"**—
  evaluation mechanisms are mature but disclosure mechanisms are missing;
  calls for a "global AI safety evaluation trust protocol" to enable cross-jurisdictional mutual recognition of red-team results.
- **Dan Hendrycks (Center for AI Safety)**:
  the TC260-003 risk list **under-covers frontier catastrophic risks** (bio-weapon uplift, autonomous replication, cyber-offensive capability);
  its risk ontology diverges significantly from that of RSP / Preparedness / FSF.
- **Matt Sheehan (Carnegie)**:
  "Why Chinese frontier AI won't publish red-team findings the Western way"—
  the core argument: publishing red-team findings creates "improper disclosure of national-security information" risk +
  no corresponding compliance incentive + public transparency is not prioritized in the regulatory framework.
- **Jeffrey Ding (GWU)**:
  TC260-003 as a "collective red-team benchmark" is **more systematic but shallower** than Western red teams—
  broad in coverage, light in depth, with particularly slow coverage of emerging Agent risks.
- **Kendra Schaefer (Trivium China)**:
  the **"quasi-regulatory identity"** of CAICT and Shanghai AI Lab is central to understanding China's AI evaluation governance—
  they are neither firm nor government, but perform a role analogous to a NIST AI Safety Institute.
- **Helen Toner (CSET)**:
  Chinese regulators have not established external cooperation mechanisms at the "frontier model pre-deployment testing" layer—
  leaving U.S.–China dialogue on "dangerous capabilities" very thin.

### Chinese scholarship

- **Zhang Linghan**:
  the boundary between corporate-level algorithm audit and governmental compliance checks is unclear—
  filing review vs. enforcement inspection vs. technical evaluation overlap legally,
  which is a source of confusion in practice.
- **Zhu Yue**:
  calls for **semi-publicizing** TC260-003 benchmarks—at least test methodology, benchmark samples, and aggregated statistics should be opened to academia
  to support academic oversight.
- **Dai Xin**:
  insufficient red-team disclosure by Chinese AI firms is a result of "double normative externality"—
  public disclosure has costs without benefits for firms (no compliance incentive + disclosure risk),
  and regulators or industry associations must build disclosure incentives.
- **Wu Hong**:
  recommends that a revision of the *Generative AI Interim Measures* add a **"corporate-level red-team disclosure duty,"**
  with reference to EU AI Act Art. 55 reporting obligations for systemic-risk GPAI models.

## 6. ByteDance's internal red-team architecture (industry inference + public interviews)

Based on public interviews, recruiting postings, and employee disclosures:

1. **AI Lab (research-layer red team)**:
   - Adversarial research on the Doubao base model
   - Participation in safety chapters of Seed-series papers
   - Informal academic collaboration with Tsinghua AISI and Shanghai AI Lab
2. **Security Center / cybersecurity division (product-layer red team)**:
   - Pre-launch compliance testing for Doubao, Coze, etc.
   - In-house execution of TC260-003 benchmarks
   - Liaison with CAICT and Shanghai AI Lab
3. **Trust & Safety (operating-layer red team)**:
   - Continuous content-risk monitoring of TikTok / Doubao in live operation
   - Red / blue exercises against adversarial users and malicious accounts
   - Annual operational-data submissions to EU DSA auditors
4. **Dedicated anthropomorphic-interaction red team (newly established 2026 Q2)**:
   - Responds to the *Anthropomorphic Interactive Services Measures*
   - Dedicated testing of minors' mental-health scenarios
   - Tests on emotional-addiction detection, refusal boundaries, and human-intervention trigger conditions

## 7. New red-team pressure from the 2026 *Anthropomorphic Interactive Services Measures*

The Anthropomorphic Measures, effective 2026-07-15, introduce **red-team requirements that come closest to "frontier risk" within the Chinese model**:

- **Dedicated mental-health testing for minors**:
  for AI-partner / virtual-friend / emotional-companion products, requires systematic evaluation of addiction risk, suicide-inducement, and detachment-from-reality tendencies
- **"Long-session degradation" testing**:
  evaluation of persona drift and sensitive-topic leakage over conversations lasting hours or days within a "relationship" context
- **Reliability testing for guardian-mode / minor-mode switching**

This, in effect, brings part of the "frontier catastrophic" risk class (psychological and social) into the red-team framework.
ByteDance's response: a new dedicated red-team working group, with company-wide compliance review of the product line expected to launch in 2026 Q2.

## 8. Comparison with other labs' red-team disclosure

| Company | Flagship red-team disclosure | Pre-deployment AISI cooperation | Independent audit |
| --- | --- | --- | --- |
| **Anthropic** | Frontier Red Team papers + RSP v3 Risk Reports | UK / US AISI signed | GovAI / METR and other external parties |
| **OpenAI** | Preparedness Framework evaluation reports | UK / US AISI signed | Safety Advisory Group |
| **DeepMind** | FSF Reports (e.g. Gemini 3 Pro FSF Report, 2025-11) | UK / US AISI signed | Internal + external |
| **Meta** | Frontier AI Framework evaluations | UK AISI signed | Internal |
| **ByteDance** | **No public red-team report** | **None signed** | **TikTok only (DSA Kroll)** |
| **Alibaba / Baidu / Tencent / DeepSeek** | **No public red-team report** | **None signed** | **None** |

**Conclusion**: ByteDance is **not notably behind** on red-team disclosure—
among Chinese leading firms it is actually ahead of Alibaba, Baidu, Tencent, and DeepSeek, because TikTok's DSA independent audit gives it the only public red-team-adjacent workstream;
but relative to top Western labs, the gap is substantial.

## 9. 2025–2026 Q1 key developments

- **2025-05**: TC260-003 revision begins; ByteDance participates in multimodal / Agent chapters.
- **2025-09**: GB 45438-2025 takes effect; Doubao's full-line labeling is implemented, together with adversarial de-watermarking tests.
- **2025-11**: TikTok publishes its 2025 SRA (audited by Kroll).
- **2025-12**: Singapore IMDA Project Moonshot v2 is released; ByteDance is among the technology contributors.
- **2026-01**: ByteDance's AI Ethics Committee is reorganized to include the anthropomorphic-interaction dedicated working group.
- **2026-02**: Doubao-1.5-Thinking reasoning model is evaluated by CAICT (results non-public).
- **2026-04-10**: the *Anthropomorphic Interactive Services Measures* are published; internal preparation begins for minor mental-health red-team work.

## 10. Practical recommendations (for researchers and policy analysts)

- In studying Chinese leading AI firms' red-team capabilities, treat **TC260-003 + CAICT evaluations** as de facto disclosure,
  rather than expecting firms to publish red-team papers on their own.
- When comparing U.S. and Chinese red-team disclosure, distinguish **disclosure mechanism vs. capability**—the former gap is significant, the latter gap is widely overestimated.
- ByteDance's relatively "leading" disclosure is via **TikTok's DSA audit**—
  the **only cross-border comparable sample** for studying Chinese leading AI firms.
- Tracking enforcement of the *Anthropomorphic Interactive Services Measures* is a key window for observing **whether China will fold frontier risk into corporate-level disclosure duties**.

## 11. Related index

- Top-level rules: [TC260-003-2024](/en/rules/china/tc260-gen-ai-security-basic-requirements/)
  · [*Generative AI Interim Measures*](/en/rules/china/generative-ai-interim-measures/) Art. 17
  · [*Anthropomorphic Interactive Services Measures*](/en/rules/china/anthropomorphic-interaction-services/)
- Peer comparison: [Anthropic / red-team-disclosures](/en/companies/anthropic/red-team-disclosures/)
  · [OpenAI / red-team-disclosures](/en/companies/openai/red-team-disclosures/)
  · [DeepMind / red-team-disclosures](/en/companies/deepmind/red-team-disclosures/)
- Adjacent company pages: [usage-policy](./usage-policy/) · [model-card](./model-card/) · [safety-framework](./safety-framework/) · [transparency-report](./transparency-report/)
