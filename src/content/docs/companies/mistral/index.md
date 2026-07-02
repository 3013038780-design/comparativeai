---
title: Mistral AI
description: Mistral AI company profile and policy-document snapshot (2026-06-28)
sidebar:
  order: 6
  label: Mistral AI
snapshotDate: 2026-06-28
---

## Company profile

- **Founded**: 2023 (by former DeepMind and Meta researchers Arthur Mensch, Timothée Lacroix, and Guillaume Lample)
- **Headquarters**: **Paris** (the only EU company in the global frontier-AI first tier)
- **Main models**:
  - **Mistral Large 3** (released 2025-12): Mixture-of-Experts, **41B active / 675B total**, **the de facto strongest EU-originated model**
  - **Ministral 3** family (3B / 7B / 14B small models)
  - **Mistral Small 4** (Apache 2.0, open source)
  - **Le Chat** (launched February 2025 on iOS / Android, competing with ChatGPT / Claude)
- **Valuation**: **€12B** (after a €2B round in September 2025) plus **$830M** in March 2026 for Paris and Swedish data centres
- **Revenue**: **projected over $1 billion** by end-2026 (disclosed at Davos, January 2026)

## Strategic positioning: **sovereign European AI**

- **Geopolitical narrative**: Europe's **third pole** against the U.S. (OpenAI / Anthropic) and China (DeepSeek / Qwen 通义千问)
- **Mistral Compute**: a Europe-dedicated compute platform launched in 2026, characterised by **Macron as "historic"**
- **Open-source first**: most flagship models are open-source (Apache 2.0), benchmarked against Meta Llama but with training data more aligned to EU norms
- **French state backing**: Mistral was at the centre of the French AI Summit in 2025; multiple European Commission officials have publicly endorsed the company

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | Mistral AI Usage Policy | [mistral.ai/terms](https://mistral.ai/terms/) | — |
| Model cards | Per-model Model Cards | [docs.mistral.ai/getting-started/models](https://docs.mistral.ai/getting-started/models/) | — |
| Technical reports | Mistral Large 3 / Ministral 3 Technical Reports | Mistral blog + arXiv | — |
| Transparency | Public blog + GitHub (open model weights and training documentation) | [mistral.ai/news](https://mistral.ai/news/) | — |

## Regulatory-compliance posture

- **European Union (home jurisdiction)**:
  - **Full signatory of the [GPAI Code of Practice](/rules/eu/gpai-code-of-practice/)** (first wave, 2025-08-01)
  - **Mistral Large 2 already exceeded the 10^25 FLOP threshold**, triggering AI Act **systemic-risk GPAI** obligations
  - Close collaboration with **[CNIL](/subnational/eu/france-cnil-ai/)** (France's data-protection authority); Mistral is expected to benefit once France designates its national AI Act MSA
- **United States**: distributed via AWS Bedrock, Azure, and Google Vertex
- **China**: no services in mainland China; Le Chat and other consumer products are accessible but without compliance localisation
- **India / Middle East**: 2025–2026 partnerships with UAE G42, Reliance (India), and others

## Deep dive: open source as an **alternative form of industry self-regulation**

### Why Mistral does not publish a safety framework like the U.S. big three

**Mistral has no RSP / Preparedness / FSF equivalent.** The company's stated rationale:

1. **Transparency is safety**: open weights plus training documentation let **the research community and regulators verify independently**, removing the need for unilateral corporate commitments
2. **No capability monopoly**: closed-source safety commitments are in essence "trust us to control our capabilities"; open-source companies lack that power asymmetry
3. **EU law already covers this**: AI Act Article 53 requires GPAI technical documentation, training-data summary, and copyright compliance → **legally mandated transparency** substitutes for **voluntary safety frameworks**

**Counter-critique:**
- Open models are **"irreversible once released"** — once capabilities reach CCL level (bio / cyber / self-improvement), open release is an irreversible risk
- Mistral's open source is **not fully open**: recent flagships such as Mistral Large 3 **reserve certain rights** (not pure Apache 2.0)
- The **open-source exemption in AI Act Article 53** does not apply to commercial GPAI and does not exempt systemic-risk GPAI — Mistral Large 2 has exceeded 10^25 FLOP and in theory is not within the exemption

### Mistral's open / closed layering

| Model | License | Weights open |
| --- | --- | --- |
| Mistral 7B / 8x7B / 8x22B | Apache 2.0 | Fully open |
| Ministral 3 (3B / 7B / 14B) | Apache 2.0 | Fully open |
| Mistral Small 4 | Apache 2.0 | Fully open |
| **Mistral Large 2 / 3 (flagship)** | **Mistral Research License (MRL)** | **Research-use only**; commercial requires paid licence |
| Ministral 3B (commercial) | Mistral Commercial License | Closed |

**Observation**: Mistral's "open source narrative" is **qualified at the flagship**. The pattern parallels
Meta Llama — **open mid-tier, closed flagship**, combining commercial capture with open-source ecosystem.

### GPAI Code of Practice signature details

Mistral is a **full signatory of the CoP** (first wave, 2025-08-01), having signed all three chapters
(Transparency / Copyright / Safety and Security). However:
- During drafting of the **Safety and Security chapter** Mistral worked with the French government to **push for lighter provisions** (Q1–Q2 2025 negotiation)
- Mistral has expressed **implementation-level caution** on the **copyright chapter's opt-out mechanism** (training-data lawfulness is a principal legal risk for open-source models)

### Stance on the Digital Omnibus Proposal (2025-11)

The Commission proposed delaying AI Act high-risk provisions by 16 months to December 2027 → Mistral is
**implicitly supportive** (no public position, but Mistral representatives at industry association
DigitalEurope were active in lobbying).

## Company posture, in brief

- **Open-source preference**: where Anthropic and OpenAI favour closed-source safety, Mistral argues **"open source + EU compliance"** is more sustainable
- **On the EU AI Act**: **publicly supportive** but during the summer 2024 GPAI negotiations worked with the French government to push for **lighter GPAI obligations**
- **On the Digital Omnibus Proposal**: **implicitly supportive**
- **Anti-U.S.-tech stance**: publicly critical of U.S. tech giants' constraints on Europe's AI ecosystem
- **Sovereign-AI narrative**: tightly aligned with the Macron government and the Commission's "digital sovereignty" agenda (Breton → Virkkunen continuity)

## Comparison with other companies

| Dimension | Mistral | Anthropic | OpenAI | Baidu | DeepSeek |
| --- | --- | --- | --- | --- | --- |
| Open-source strategy | **Primarily open** (Apache 2.0) | Closed | Closed | Mixed (4.5 open, 5.0 closed) | **Primarily open** |
| Home jurisdiction | France (EU) | US | US | China | China |
| Regulatory stance | Supports + argues for lighter obligations | Supports + commits to strong safety | Supports + selective | Filing compliance | Filing compliance |
| Capital sources | EU + Middle East | US (Amazon / Google) | US (Microsoft) | A-share + government | Quantitative hedge fund |
