---
title: United States — Frontier Models and GPAI
description: The US's policy reversal on frontier-model oversight — from the EO 14110 10²⁶ FLOP reporting regime to a voluntary-commitment landscape after EO 14179.
sidebar:
  order: 3
  label: United States
---

## Relevant rules

| Rule | Relationship to frontier models |
| --- | --- |
| [EO 14179](/en/rules/us/eo-14179-removing-barriers-ai/) (Jan 2025) | **Revokes** the frontier-model reporting obligation |
| [EO 14110](/en/rules/us/eo-14110-biden-ai/) (2023, revoked) | Previously established the 10²⁶ FLOP reporting threshold |
| [Trump AI Action Plan](/en/rules/us/trump-ai-action-plan/) (Jul 2025) | A 25-page strategy + three accompanying EOs (data centres, etc.) |
| [EO 14365](/en/rules/us/eo-14365-national-ai-framework/) (Dec 2025) | Preemption of state-level frontier-AI legislation |
| [OMB M-25-21/22](/en/rules/us/omb-m-25-21-22-federal-ai-use/) (Apr 2025) | Federal AI use and procurement |
| [NIST AI RMF + GenAI Profile](/en/rules/us/nist-ai-rmf/) (2023 / 2024) | Voluntary frontier-model risk framework |
| [**California SB 53**](/en/subnational/us/california-sb-53-frontier-ai/) (in force Jan 2026) | **First US state frontier-AI law**, 10²⁶ FLOP threshold |
| [Texas TRAIGA](/en/subnational/us/texas-traiga/) (in force Jan 2026) | Prohibits harmful uses (not frontier-focused) |

## From heavy oversight to voluntary commitments

### Biden phase (Oct 2023 to Jan 2025)

**EO 14110** introduced the concept of a "frontier dual-use foundation model" into federal US policy for the first time:

- Triggering threshold: **≥ 10²⁶ FLOP** cumulative training compute (biological-sequence-specific: 10²³).
- Authority: information-gathering under **§ 705 of the Defense Production Act**.
- Obligations: report to the Department of Commerce on **model capabilities, red-teaming results, and safeguard measures**.
- Data-centre operators: report on IaaS customers training such models.

The **AI Safety Institute (AISI)** was established within NIST and signed voluntary **"testing and red-teaming" agreements** with Anthropic, OpenAI, and others.

### Trump phase (Jan 2025 onward)

**EO 14179** revokes EO 14110; **the 10²⁶ FLOP reporting obligation lost its legal basis**.

Follow-on actions:
- **AI Action Plan** (Jul 2025): explicit "deregulate and accelerate" direction.
- **AISI → CAISI** (Center for AI Standards and Innovation): rebranded from "safety" to "standards".
- Industry voluntary commitments **remain** (the 2023 White House Commitments did not expire with the change of administration) — but without statutory enforceability.

## The actual structure of US frontier-model oversight (Apr 2026)

### Voluntary layer

- **2023 White House Voluntary Commitments** (signed by Anthropic, Google, OpenAI, Microsoft, Meta and four others).
- **Frontier Model Forum** (industry association: Anthropic, Google, Microsoft, OpenAI).
- **NIST AI RMF + GenAI Profile** as a voluntary technical baseline.
- **MLCommons AI Luminate / AILuminate** benchmarks.

### Semi-formal layer

- **Responsible Scaling Policies (RSPs)** (Anthropic pioneered; others followed).
- **Preparedness Framework** (OpenAI); **Frontier Safety Framework** (Google DeepMind).
- Company commitments from the Seoul AI Summit (2024) and the Paris AI Summit (2025).

### Residual federal layer

- **Export controls**: BIS controls on AI chips / model weights under the EAR.
- **National-security investment review**: CFIUS on China-linked investments in model training or compute.
- **Sectoral regulators** (FDA, CFPB, etc.) retain their existing authority over AI, **unaffected** by EO 14179.

### State-law layer (key change in Apr 2026)

**Three comprehensive state AI laws take effect in 2025–2026**, with SB 53 being **the first US law anywhere dedicated to frontier AI**:

- [**California SB 53**](/en/subnational/us/california-sb-53-frontier-ai/) (Jan 1, 2026) — Transparency in Frontier AI Act, **10²⁶ FLOP threshold** (same threshold as Biden's EO 14110).
  - Large frontier developers (revenue ≥ $500M) must publish an AI framework, issue transparency reports, and report critical safety incidents.
  - Penalty: $1M / violation.
- [**Texas TRAIGA**](/en/subnational/us/texas-traiga/) (Jan 1, 2026) — focused on prohibited uses; does not directly regulate frontier models.
- [**Colorado AI Act**](/en/subnational/us/colorado-ai-act/) (Jun 30, 2026) — high-risk AI anti-discrimination.

**The Dec 2025 EO 14365 threat**: the Trump administration has explicitly identified state AI laws as targets, with SB 53 high on the list. Federal litigation is expected in Q1–Q2 2026. But an executive order **cannot unilaterally preempt** state law, and state AGs have signaled they will continue to enforce.

## Structural differences vs. China and the EU

- **China**: frontier models = large-model services, filed through CAC with TC260-003 as the yardstick — **a hard gate**.
- **EU**: dedicated GPAI chapter, 10²⁵ FLOP presumption, **compliance checklist + code of conduct** ([GPAI CoP](/en/rules/eu/gpai-code-of-practice/) finalised Jul 2025).
- **US**: **the federal layer is reduced to voluntary commitments plus deregulation**; **state laws introduce dedicated frontier-AI legislation for the first time (SB 53)**; federal-vs-state conflict is the main narrative for 2026.

**Compute threshold comparison**: EU 10²⁵ FLOP < US California 10²⁶ FLOP. California's threshold is **ten times stricter**, which makes SB 53's coverage narrower than the EU GPAI "systemic-risk" provision.
