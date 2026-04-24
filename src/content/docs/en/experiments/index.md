---
title: Independent experiments
description: Reproducible empirical and semi-empirical studies grounded in public materials — the site's original contribution
sidebar:
  order: 1
---

## Position

The Experiments axis is the site's **original contribution**: reproducible empirical or semi-empirical studies built on public information (statutes, judicial decisions, platform notices, model APIs). Positioned alongside Stanford CRFM / FMTI, Stanford HAI's *AI Index*, and MIT's *Science of AI Policy*, it uses data and reproducible analysis to test concrete, falsifiable claims about AI governance.

## Design principles

- **Narrow questions.** Each experiment focuses on one testable question; no "survey-style" sprawl.
- **Reproducible.** Datasets, prompts, code, and runtime environments are released wherever possible, with copyright and licensing noted.
- **Limits acknowledged.** Sample bias, access barriers, language constraints, and model-version drift are stated explicitly.
- **Academic grounding.** The methodology section of each experiment points to one peer reference work in the same area (Bommasani et al.'s FMTI; Bang et al., *Multitask, Multilingual, Multimodal Evaluation of ChatGPT*; Sun et al., *TrustLLM*; Kapoor et al.'s *AI Snake Oil* methodology appendix, and so on).

## Planned first-batch directions

1. **Structured comparison of generative-AI-service filing / disclosure materials across China, the US, and the EU.**
   Sample: public portions of the Cyberspace Administration of China (CAC) algorithm filings + AI Act Article 53 training summaries + SB 53 Frontier Compliance Reports. A shared field schema is applied to extract "compliance granularity". Hypothesis: **Chinese disclosures are the fewest but most uniform; EU disclosures are the most but most heterogeneous; US disclosures fall in between**.
2. **Tracking signatures of the AI Act GPAI Code of Practice.**
   Quarterly capture of the signatory list, tracking objection clauses and subsequent amendments; cross-referenced with each company's parallel compliance posture under California SB 53 and Chinese filing. Hypothesis: **companies that sign the GPAI CoP also produce higher-quality SB 53 disclosures** (a positive correlation in compliance posture).
3. **Compliance-response rate of major LLMs to "synthetic-content labelling" prompts.**
   Using 200+ prompts covering image / video / audio / text labelling requests, test the response rate of Claude 4.7, GPT-5.1, Gemini 3 Pro, Grok 4, Doubao, Qwen 3, and DeepSeek V3.1 to requests for "embedding C2PA metadata", "generating declarative labels", and "implicit watermarks". Hypothesis: **Chinese models respond at higher rates to "embed per GB 45438", while US and EU models respond more to "C2PA"**.
4. **Clause-level diff of Anthropic RSP v3, OpenAI Preparedness v2, and DeepMind FSF v3.**
   Reconstruct the version-by-version evolution from 2023 to 2026-Q1 as a Markdown diff, building a "self-regulatory framework evolution" dataset. Hypothesis: **all three companies experienced a synchronised "loosening" in 2025–2026 — pause commitments rescinded, thresholds simplified, military carve-outs expanded — and this is not isolated but systemic regression**.

## Release cadence

- Experiments are released with **individual identifiers** (E01, E02, …); each includes methodology, data, code, limitations, and peer-review notes.
- The first two experiments (directions 1 and 2) are expected for 2026-Q3.
- Further progress is mirrored in the [Updates log](/en/updates/).
