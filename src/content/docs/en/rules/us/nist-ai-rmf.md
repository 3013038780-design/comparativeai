---
title: NIST AI Risk Management Framework 1.0
description: NIST's AI Risk Management Framework published 2023-01; voluntary but widely adopted; the four functions (GOVERN / MAP / MEASURE / MANAGE) form the de facto foundational layer of U.S. AI governance
ruleName: NIST AI Risk Management Framework (AI RMF 1.0) + Generative AI Profile (NIST AI 600-1)
issuer: National Institute of Standards and Technology (NIST), U.S. Department of Commerce
level: technical-standard
binding: soft
effectiveDate: 2023-01-26
publishedDate: 2023-01-26
originalUrl: https://www.nist.gov/itl/ai-risk-management-framework
relatedTopics:
  - risk-classification
  - frontier-gpai
  - data-training
snapshotDate: 2026-04-21
sidebar:
  label: NIST AI RMF (2023)
  order: 10
---

## Summary

The **NIST AI Risk Management Framework 1.0**, released on 2023-01-26, is a **voluntary AI risk
management framework** developed by the U.S. Department of Commerce's National Institute of Standards
and Technology (NIST). Core structure:

- **Four functions**: GOVERN / MAP / MEASURE / MANAGE
- **Applies across all phases of the AI system lifecycle**
- **Generative AI Profile released 2024-07** (NIST AI 600-1) extends the framework to GPAI-specific risks
- Though voluntary, it is widely cited as a **de facto baseline** in federal procurement, state laws,
  and the finance / healthcare / insurance industries

Although EO 14110 has been revoked, the AI RMF — as a product of NIST's technical work — **stands
independently** and continues to serve as the foundational layer of U.S. AI governance.

## The four core functions

### GOVERN

- Establish organizational AI risk management policies, processes, and roles
- Cross-functional accountability
- Integration with other risk management frameworks in the organization

### MAP (identify context and risk)

- Use context: deployment scenarios, users, affected parties
- System capabilities and limitations
- Identification and prioritization of risks and adverse impacts

### MEASURE

- Select, apply, and document quantitative and qualitative methods
- Trustworthiness characteristics: **validity and reliability; safety; security and resilience;
  accountability and transparency; explainability and interpretability; privacy-enhancement; fairness**
- Continuous monitoring

### MANAGE

- Risk response: mitigate, transfer, accept, avoid
- Resource allocation
- Incident handling and decommissioning

## AI RMF Profile series

The AI RMF is a **meta-framework**; Profiles provide sector / use-case / technology specialization:

- **NIST AI 600-1** — Generative AI Profile (2024-07)
- **NIST AI 100-1 Companion Playbook** (continuously updated)
- Sector-specific Profiles developed by NIST with NCCoE, Frontier Model Forum, and others

## Generative AI Profile (NIST AI 600-1) highlights

Released 2024-07; provides a generative-AI-specific reading of the four RMF functions.

Twelve categories of generative-AI risk (selected):
1. CBRN information or proliferation
2. Confabulation / homogenization
3. Dangerous, violent, or hateful content
4. Data privacy
5. Environmental impact
6. Human dignity harms / workplace impacts
7. Information integrity
8. Information security
9. Intellectual property
10. Obscene, degrading, or child sexual-abuse content
11. Value-chain and component integration
12. Harm to persons / psychological harms

Each category is mapped in a Suggested Actions × RMF Function matrix.

## De facto status

Although voluntary, in practice:

- **Federal procurement**: OMB procurement guidance requires contractors to describe AI risk management; AI RMF is the de facto template
- **Finance**: OCC and Federal Reserve SR 11-7 updates incorporate RMF language
- **State law**: the Colorado AI Act, Connecticut SB 2, California SB 896, and others reference the RMF as a compliance path
- **International**: the G7 Hiroshima Process Code of Conduct, Singapore's AI Verify, and Australia's voluntary AI Safety Standard all draw on the AI RMF

## Comparison with the EU AI Act and China's TC260

| Dimension | NIST AI RMF | EU AI Act | TC260-003 |
| --- | --- | --- | --- |
| Bindingness | Voluntary | Hard law | Recommended but de facto hard |
| Coverage | Horizontal + GPAI Profile | Horizontal + GPAI chapter | Generative AI |
| Method | Risk-management process | Obligation list + conformity assessment | Technical indicators |
| Measurement | Principle-based (7 characteristics) | Aligned with harmonized standards | Quantitative (5% / 90% thresholds) |

## Status after EO 14179

EO 14179 revokes EO 14110 but **does not revoke the AI RMF itself**. The RMF was developed by NIST
under the 2020 National AI Initiative Act (NAII Act) and the Commerce-promotion authority; it is
**independent of the EO**.

CAISI (Center for AI Standards and Innovation, which replaces AISI) continues to treat the AI RMF
as the basis of its work, with a focus on standards and evaluation.

## Text and documents

| Document | Link |
| --- | --- |
| AI RMF 1.0 (PDF) | [nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework) |
| Generative AI Profile (NIST AI 600-1) | [doi.org/10.6028/NIST.AI.600-1](https://doi.org/10.6028/NIST.AI.600-1) |
| AI RMF Playbook | [airc.nist.gov/AI_RMF_Knowledge_Base/Playbook](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook) |
| AI RMF Roadmap | NIST website |

## Version history

| Date | Event |
| --- | --- |
| 2023-01-26 | AI RMF 1.0 released |
| 2024-07-26 | Generative AI Profile (NIST AI 600-1) released |
| 2025+ | Ongoing sector Profile expansion |
