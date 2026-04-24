---
title: Safety Framework
description: ByteDance's "embedded" AI safety framework — the national regulatory tier absorbing corporate self-governance (snapshot 2026-04-23)
sidebar:
  order: 3
snapshotDate: 2026-04-23
---

> ByteDance **does not** publish a standalone "frontier AI safety framework" document comparable to Anthropic RSP v3, OpenAI Preparedness v2, or DeepMind FSF v3.
> This is a shared feature of China's leading AI companies. The core claim of this page:
> **it is not that ByteDance is "absent" on safety frameworks; rather, the corporate tier is absorbed by the national tier—state regulation pulls risk management up to the industry / national level,
> making corporate-tier "self-governance documents" institutionally redundant.**

## 1. ByteDance's AI-safety institutional architecture (as of 2026-04)

### Four parallel compliance / safety workstreams

| Layer | Content | Matching rules |
| --- | --- | --- |
| **Algorithm-filing layer** | CAC filing and change-filing for Doubao, Coze, Volcano Engine, etc. | [*Generative AI Interim Measures*](/en/rules/china/generative-ai-interim-measures/) Art. 17 · [*Algorithm Recommendation Provisions*](/en/rules/china/algorithm-recommendation-provisions/) |
| **National-standard compliance layer** | Full-line compliance with TC260-003 (basic requirements) + GB 45438-2025 (labeling) | [TC260-003-2024](/en/rules/china/tc260-gen-ai-security-basic-requirements/) · [GB 45438-2025](/en/rules/china/gb-45438-2025-ai-content-labeling-standard/) |
| **Governance-framework alignment layer** | *AI Safety Governance Framework* 1.0 / 2.0 guiding corporate-level execution | [Safety Governance Framework 1.0 / 2.0](/en/rules/china/ai-safety-governance-framework/) |
| **Overseas compliance layer** | TikTok DSA Art. 34 systemic risk assessment; CapCut C2PA; jurisdiction-specific localized Trust & Safety | EU DSA; California AB 2013 / 2655; Singapore IMDA Model AI Governance Framework, etc. |

### Party Committee + Compliance + Trust & Safety

Based on public information after ByteDance formally established its Party Committee (党委) in 2024, together with industry interviews, corporate-level safety governance is structured roughly as:

1. **Party Committee (top direction)**:
   sets major technology-route choices (e.g. open-source vs. closed-source), value-alignment orientation, and red lines on sensitive topics—
   consistent with the **"Party Committee → algorithm → product three-tier coordination"** observation proposed in Olivia's thesis *The Embedding of Algorithmic Values by Party Committees in Chinese AI Firms*.
2. **Cybersecurity compliance / legal**:
   multi-agency liaison with CAC / MIIT / MPS; preparing filing materials; responding to targeted enforcement; cross-border compliance.
3. **AI Ethics Committee (established 2024)**:
   a cross-departmental deliberative body typically including AI Lab research leads, the general counsel, the head of Trust & Safety, and internal independent audit.
   Major product launches clear it (for example, the 2025 Q4 launch of Doubao's "virtual friend" feature went through it).
4. **Trust & Safety**:
   a content-moderation and safety organization of thousands, split between China and overseas; domestic teams are primarily in Tianjin / Chengdu / Jinan;
   overseas teams in Dublin / Los Angeles / Singapore / London.

## 2. No RSP: structural comparison with frontier labs

| Dimension | Anthropic RSP v3 (2026-02) | OpenAI Preparedness v2 | DeepMind FSF v3 | ByteDance |
| --- | --- | --- | --- | --- |
| Form of the framework | Corporate self-governance document | Corporate self-governance document | Corporate self-governance document | **No standalone document** |
| Risk tiering | ASL-2/3/4 | High / Critical | CCL / TCL | **No corporate tiering** (compensated by national GB 39724 and TC260-003) |
| Capability thresholds | Public | Public | Public | **No public thresholds** |
| External review | Third-party reviewers (GovAI / MATS / METR) | Safety Advisory Group | FSF Report | **CAC + CAICT + MCNSA algorithm-evaluation lab** (quasi-regulatory third parties) |
| Pause commitment | Withdrawn in v3 | Weak wording | None | Not applicable (regulators can mandate takedown) |
| Frontier voluntary commitments | Signed U.S. 2023 voluntary commitments + UK AISI MoU + GPAI CoP | Signed | Signed | **None signed** |

**Key observation**: the Western three-step sequence of "corporate self-governance → external review → regulatory pressure" is compressed in China into the **two-step sequence "regulator leads, enterprise executes."**
The absence of a corporate self-governance document at the frontier-model layer does not mean safety work is absent; it means **the institutional tier is different**.

## 3. ByteDance's participation in national standards and frameworks

### Drafting and revising TC260-003

ByteDance is one of the member units of the generative AI safety working group under TC260 (全国信息安全标准化技术委员会).
The two core contents of TC260-003-2024 *Basic Safety Requirements for Generative AI Services* are:

- **A 31-item risk list** (organized into 5 major classes: violation of core socialist values, discriminatory content, commercial-law violations,
  infringement of others' lawful rights and interests, and defects in accuracy / reliability)
- **34 specific requirements across 7 classes** (training-data safety, corpus labeling, model safety, service transparency, emergency response, etc.)

Practice cases contributed by ByteDance in the TC260 working group (publicly visible in the published meeting summary excerpts) include:
Doubao's large-model content-safety evaluation methodology, red-line keyword recognition in anthropomorphic scenarios, and contextual risk management in multi-turn dialogue.

**First revision of TC260-003** is underway in 2025–2026; draft additions focus on
safety requirements for multimodal (vision, speech, video), Agent / tool-calling scenarios, and anthropomorphic interaction.
ByteDance co-leads several chapters with Alibaba, Baidu, Tencent, Huawei, and China Telecom.

### *AI Safety Governance Framework 2.0* (2025)

In 2025 the CAC and TC260 jointly released version 2.0, which adds a **chapter on systemic-risk governance for frontier models** (comparable to the GPAI chapter of the EU AI Act),
but **does not require enterprises to publish an RSP**. ByteDance's implementation approach is:
to disassemble the 2.0 requirements into filing materials plus internal processes, without producing a standalone external document.

## 4. The 2026 *Anthropomorphic Interactive Services Measures*: ByteDance's largest new compliance pressure

The *Interim Measures for the Administration of Anthropomorphic Interactive AI Services* (published 2026-04-10, effective 2026-07-15) imposes **dedicated requirements**
on ByteDance's Doubao "virtual friend / AI persona / AI partner" products:

- **Prohibition during nighttime hours for minors** (22:00 – 06:00)
- **Refusal on sensitive topics** (suicide / self-harm / extreme emotional counseling must route to a human or hotline)
- **Emotional-addiction detection and intervention mechanisms**
- **Prominent "AI identity" notice** (each conversation must begin with explicit "I am an AI"; persistent impersonation of a human is prohibited)
- **Periodic re-filing of anthropomorphic avatars** (appearance / persona changes trigger change-filing)

> ByteDance's response: Doubao's "Character" feature is expected to undergo a major overhaul in 2026 Q2, with some AI personas either removed or restricted.
> The estimated end-to-end adjustment cycle across product, filing, and Trust & Safety is 3–6 months.

## 5. Overseas: TikTok DSA Art. 34 Systemic Risk Assessment

As a VLOP, TikTok must publish an annual **Systemic Risk Assessment (SRA)** under DSA Art. 34 / 35.
Published versions include:

- **2024 SRA** (published 2024-11) — covering four risk classes:
  illegal-content dissemination, fundamental-rights harms, democratic process and public discourse, and minors / public health.
  Co-issued with Kroll as independent auditor.
- **2025 SRA** (published 2025-11) — added a dedicated AI-generated-content chapter and included a dedicated post-mortem of pro-Russia account activity around the 2024 European Parliament election
  (tied to the European Commission's DSA formal proceedings).

This is the **only structured risk assessment in the ByteDance product family that is published to an international public audience**—the equivalent algorithm-filing materials in China are not public,
but the DSA legal duty compels TikTok to publish. **This inversion ("overseas transparency > domestic transparency")** is a persistent tension in ByteDance's compliance architecture.

## 6. Academic critique

### Chinese scholarship

- **Zhang Linghan**: the "tier absorption" of national AI safety governance is both an efficiency advantage and a risk—
  internal corporate risk-management capabilities may atrophy exogenously, since "compliance floor becomes highest duty."
- **Dai Xin**: in China's "structural dual compliance,"
  ByteDance satisfies both CAC filing and global regulators at the same time, which builds unique compliance muscle but also produces **fragmentation of internal policy logic**.
- **Xue Lan**: agile collaborative governance must guard against **"too agile"**—
  if rules iterate too quickly, firms cannot plan long-term safety investments.
- **Zhu Yue**: the absence of standalone corporate-level safety-framework documents weakens third-party academic oversight and independent evaluation.

### International scholarship

- **Matt Sheehan (Carnegie)**: in ChinAI-related writing and public commentary, his consistent argument is that Chinese frontier AI companies lack RSP-like documents
  not because of capability but because of institutions—the state lifts risk-management to the industry / national tier, so corporate-level self-governance documents become institutionally redundant.
  This is the core lens for understanding the U.S.–China divergence on self-governance documents.
- **Jeffrey Ding (GWU)**:
  the ChinAI Newsletter repeatedly argues: **absence of an RSP does not mean absence of safety investment**—
  ByteDance's content-safety team is larger than the combined red-team plus policy departments of most frontier labs.
- **Rebecca Arcesati (MERICS)**:
  Chinese corporate AI Safety has a characteristic profile of **"operational capability first, theorization lagging"**—
  it can defend against 31 risks item by item, but lacks a conceptual framework for "frontier risk."
- **Helen Toner (CSET)**:
  the risk types absorbed by Chinese regulation (content, values, minors) and the risks that Western RSPs focus on
  (CBRN, autonomous replication, cyber-offensive capability) are **ontologically different**—
  which makes U.S.–China communication on frontier AI risk very hard.
- **Markus Anderljung (GovAI)**:
  even with a strong national tier, **corporate-level frontier-risk self-governance** is still needed as a complement;
  the Chinese model is effective on "visible present risks" but under-covers "future catastrophic risks that have not yet materialized."
- **Paul Triolo (DGA)**:
  ByteDance's "embedded compliance" (嵌入式合规) is a pathway of the Chinese model that other emerging markets (Southeast Asia, the Middle East) are willing to adopt,
  and forms a counterweight to the American model in global competition.

## 7. Comparison with other leading Chinese firms

| Company | Flagship model | Standalone safety framework? | Filing cadence | Open-source strategy |
| --- | --- | --- | --- | --- |
| **ByteDance** | Doubao / Seed | **No** | First batch 2023-08; multiple products, multiple change-filings | **Restrained open source** (small Seed models) |
| **Alibaba** | Qwen | **No** (safety only at developer-documentation level) | First batch 2023-08; full series, multiple filings | **Aggressive open source** (0.5B–72B Apache-2.0) |
| **Baidu** | ERNIE | **No** (has an "ERNIE AI governance white paper," not an RSP-shaped document) | First batch 2023-08 | Partial open source |
| **Tencent** | Hunyuan | **No** (has a *Tencent AI Governance White Paper*) | First batch 2023-08 | Partial open source |
| **DeepSeek** | V3 / R1 | **No** | Multi-batch filings | **Most aggressive open source** (MIT) |

**Common conclusion**: none of the Chinese frontier labs has produced a corporate-level safety-framework document comparable to an RSP.
This is an **institutional feature** (national-tier absorption + non-signing of GPAI CoP + TC260-003 de facto coverage),
not an idiosyncratic firm-level choice.

## 8. Why doesn't ByteDance sign the GPAI Code of Practice?

ByteDance has not signed the EU GPAI CoP (open to first-batch signatories from 2025-08-01). Other Chinese firms that have also not signed include Alibaba, Baidu, Tencent, DeepSeek,
Zhipu, and Moonshot—**no top Chinese frontier-model company has signed**.

Structural reasons:

1. **Models not entering the EU market** do not generate a signing incentive
   (Doubao / Qwen / ERNIE / Hunyuan / DeepSeek consumer markets are not centered in the EU).
2. **TikTok is already a VLOP**, so ByteDance's EU compliance pressure is concentrated on DSA rather than the AI Act GPAI chapter.
3. **Signing means accepting systemic-risk duties under the EU AI Act**—
   for firms that have not committed to large-scale EU entry, it raises compliance cost.
4. **Geopolitical signaling**: signing an EU framework can be read as "taking sides," and most top Chinese firms prefer to stay compliance-neutral.

## 9. 2026 Q1 developments

- **2026-01**: ByteDance's AI Ethics Committee was reorganized, expanding working groups on anthropomorphic interaction, Agent safety,
  and multimodal deepfakes.
- **2026-02**: TC260-003 revision work began; ByteDance is involved in multimodal and Agent chapters.
- **2026-03**: TikTok's EU team negotiated implementation of the DSA Art. 40 researcher-data-access agreement with the European Commission.
- **2026-04**: publication of the Anthropomorphic Measures triggered an enterprise-wide compliance review of Doubao's "Character" feature.

## 10. Related index

- Top-level rules: [*AI Safety Governance Framework* 1.0 / 2.0](/en/rules/china/ai-safety-governance-framework/)
  · [TC260-003-2024](/en/rules/china/tc260-gen-ai-security-basic-requirements/)
  · [*Anthropomorphic Interactive Services Measures*](/en/rules/china/anthropomorphic-interaction-services/)
- Peer comparison: [Anthropic / safety-framework (RSP v3)](/en/companies/anthropic/safety-framework/)
  · [OpenAI / safety-framework (Preparedness)](/en/companies/openai/safety-framework/)
  · [DeepMind / safety-framework (FSF)](/en/companies/deepmind/safety-framework/)
- Adjacent company pages: [usage-policy](./usage-policy/) · [red-team-disclosures](./red-team-disclosures/)
