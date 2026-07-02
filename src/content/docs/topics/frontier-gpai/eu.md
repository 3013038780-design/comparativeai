---
title: EU — Frontier Models and GPAI
description: The EU AI Act's dedicated GPAI chapter (arts. 51–56) and its Code of Practice.
sidebar:
  order: 4
  label: EU
---

## Relevant rules

| Rule | Provisions | Relationship to GPAI |
| --- | --- | --- |
| [EU AI Act](/rules/eu/ai-act/) | Arts. 51–56; Annexes XI / XII / XIII | Dedicated GPAI chapter |
| [**GPAI Code of Practice**](/rules/eu/gpai-code-of-practice/) | AI Act art. 56 | **Finalised Jul 10, 2025**; signature = presumption of conformity |
| [Digital Omnibus Proposal](/rules/eu/digital-omnibus-proposal/) | — | Nov 2025 proposal to postpone high-risk provisions to Dec 2027 (does not affect GPAI) |

## Structure of the GPAI chapter (arts. 51–56)

### Two-tier classification (art. 51)

**All GPAI models** (open-source or closed-source):
- Defined as: general-purpose, large-scale self-supervised trained, capable of performing diverse downstream tasks.

**GPAI models with systemic risk**:
- Automatic presumption: **cumulative training compute ≥ 10²⁵ FLOP**.
- Commission designation: based on parameter count, dataset size, user count, and capability benchmarks.
- Operators may apply for re-assessment.

### Obligations for all GPAI (art. 53)

1. **Technical documentation** (Annex XI): training process, evaluation results, capability description.
2. **Downstream documentation** (Annex XII): for downstream providers.
3. **Copyright policy**: establish a policy to comply with the EU Copyright Directive's TDM exception.
4. **Public summary of training data**: template issued by AI Office (published Jul 2024).

### Additional obligations for systemic-risk GPAI (art. 55)

- **Model evaluation**: including adversarial testing and red-teaming.
- **Systemic-risk assessment and mitigation**.
- **Serious-incident reporting** (art. 56) → AI Office.
- **Cybersecurity**: model plus physical infrastructure.

## Code of Practice

See the dedicated rule page [GPAI Code of Practice](/rules/eu/gpai-code-of-practice/). Key points:

- **Finalised Jul 10, 2025** (roughly 1,000 participants across multiple drafting rounds).
- Aug 1, 2025: Commission + AI Board issue **Adequacy Decisions**.
- **Three-chapter structure**: Transparency, Copyright, Safety and Security.
- **Signature = presumption of conformity** (art. 56(8)).
- **Signed (as of Apr 2026)**: Anthropic, Google DeepMind, Microsoft, Mistral (full); OpenAI (with reservations); Meta (dissent on the copyright chapter); xAI (dissent on the safety chapter).
- **Not signed**: DeepSeek, ByteDance, Zhipu, and other Chinese firms.

## Open-source exemption (art. 53(2))

Open-source GPAI is exempt from some obligations (technical documentation, downstream documentation), subject to:
- A "free and open-source licence".
- Weights, architecture, and usage methods are **public**.
- A training-data summary must still be published.
- **Systemic-risk GPAI is not exempt even if open-sourced**.

Effect: Meta LLaMA-like open series benefit, but only partially. Open-source models like DeepSeek's are subject to the same rules if they enter the EU market.

## 10²⁵ FLOP presumption in practice

Models presumed above the threshold as of Apr 2026 (estimated):
- GPT-4 / 4o / o1 / o3 series (OpenAI)
- Claude 3 / 4 series (Anthropic)
- Gemini 1.5 / 2 Ultra (Google DeepMind)
- Some national-scale research models (French Mistral Large 2 may qualify).

The presumption is **rebuttable**: a provider may argue that a specific model does not rise to systemic risk, but must submit evidence to the AI Office.

## Timeline

| Date | Event |
| --- | --- |
| Aug 1, 2024 | AI Act in force |
| Jul 10, 2025 | Code of Practice finalised |
| Aug 1, 2025 | Commission + AI Board issue Adequacy Decisions; signatory list published |
| Aug 2, 2025 | **GPAI obligations (arts. 51–56) applicable** |
| Aug 2, 2026 | Remaining provisions applicable |
| Aug 2, 2027 | Specific embedded high-risk cases |

## Comparison with China and the US

- **Predictability**: the EU leads (explicit compute threshold + documentation checklist + code of conduct).
- **Binding force**: the EU is strongest (hard law + penalties of 3% of global annual turnover).
- **International reach**: the **Brussels Effect** is in motion. Documentation prepared by model providers for the EU market effectively becomes the disclosure baseline in other jurisdictions.
