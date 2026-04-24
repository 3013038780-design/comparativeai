---
title: China — Frontier Models and GPAI
description: China's approach to large foundation models — algorithm filing, security assessment, and TC260 technical specifications, with no dedicated "GPAI" concept.
sidebar:
  order: 2
  label: China
---

## Relevant rules

| Rule | Relationship to GPAI |
| --- | --- |
| [*Generative AI Interim Measures*](/en/rules/china/generative-ai-interim-measures/) (2023) | Primary rule for large models offered as public-facing services |
| [TC260-003-2024](/en/rules/china/tc260-gen-ai-security-basic-requirements/) | De facto technical standard for filing review |
| [*Deep Synthesis Provisions*](/en/rules/china/deep-synthesis-provisions/) (2023) | Sister rule for service-level filings |
| [*Algorithmic Recommendation Provisions*](/en/rules/china/algorithm-recommendation-provisions/) (2022) | Earliest rule for algorithm filing |

## China has no "GPAI" concept

- Chinese legislation has **no dedicated category corresponding to art. 51 of the EU AI Act**.
- The regulatory anchor is the **service**, not the **model**: whether the model has 10 billion or 1 trillion parameters, any public-facing generative AI service in China follows the same filing + assessment pathway.
- The **open-source vs. closed-source** distinction is thinly articulated in the regulatory text: a 2024 CAC Q&A did state that "open-source without public-facing deployment does not trigger filing", but grey areas remain in practice.

## Three-part regulatory toolkit

### 1. Algorithm filing

- Legal basis: *Algorithmic Recommendation Provisions* art. 24, *Generative AI Interim Measures* art. 17, *Deep Synthesis Provisions* art. 19.
- Process: submit filing materials → CAC review → receive filing number → permissioned to market.
- **De facto threshold**: large-model services with "public-opinion attributes or capacity for social mobilisation".
- Register: CAC publishes filing lists quarterly (more than ten batches released by Apr 2026).

### 2. Security assessment (referenced in art. 23 of the *Generative AI Interim Measures*)

- Primary rule: *Provisions on Security Assessment of Internet Information Services with Public-Opinion Attributes or Capacity for Social Mobilisation* (2018).
- Yardstick: [TC260-003-2024](/en/rules/china/tc260-gen-ai-security-basic-requirements/).
- **Substantive requirements**: lawfulness of training corpora / normative annotation / ≥ 90% safety-pass rate on model outputs / keyword-base coverage / incident-response mechanism.

### 3. Science and technology ethics review (R&D stage)

- Legal basis: [*Science and Technology Ethics Review Measures (Trial)*](/en/rules/china/science-tech-ethics-review-measures/).
- Article 25's list includes "algorithmic models with capacity for social mobilisation or for shaping social consciousness".
- An R&D-stage obligation (as distinct from obligations at the market-launch stage).

## Practice notes

1. **"Public-facing service" is the trigger**: internal R&D or closed testing does not mandate filing.
2. **Foreign-model mirrors**: Chinese-language services built on foreign large models typically file through a domestic partner.
3. **Model layer vs. application layer**: many applications (chatbots, virtual avatars, text-to-image) share one base model — **each application must file separately**.
4. **The awkwardness of open-source models**: whether the training party that releases an open-weight model (e.g., DeepSeek) itself needs to file is disputed — in practice, the training party files when it also offers an API, and weight-only releases may not trigger filing.

## Comparison with the EU and the US

| Dimension | China | EU (AI Act) | US |
| --- | --- | --- | --- |
| Dedicated concept | None | "GPAI" + "systemic-risk GPAI" | None (EO 14110's 10²⁶ FLOP is revoked) |
| Compute threshold | None | 10²⁵ FLOP presumption | None (historically 10²⁶) |
| Obligations | Filing + security assessment + TC260 | Training documentation / incident reporting / adversarial testing | Voluntary (Frontier Model Forum, NIST AI RMF) |
| Market gate | **Strict** (no filing = no public service) | Ex-ante compliance but no "approval" | None |

Among the three jurisdictions, China has the strictest **ex-ante gate** for frontier models.
