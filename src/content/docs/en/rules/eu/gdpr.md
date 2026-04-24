---
title: GDPR (Regulation 2016/679)
description: The EU General Data Protection Regulation, applicable from 2018-05-25; its automated decision-making provisions and purpose-limitation principle are the compliance bedrock for AI training and inference
ruleName: Regulation (EU) 2016/679 — General Data Protection Regulation
issuer: European Parliament & Council
level: eu-regulation
binding: hard
effectiveDate: 2018-05-25
publishedDate: 2016-04-27
originalUrl: https://eur-lex.europa.eu/eli/reg/2016/679/oj
relatedTopics:
  - data-training
  - risk-classification
snapshotDate: 2026-04-21
sidebar:
  label: GDPR (2018)
  order: 2
---

## Summary

The **General Data Protection Regulation** (Regulation (EU) 2016/679, GDPR) was adopted on 2016-04-27 and
became applicable on 2018-05-25. Although not an AI-specific law, in AI governance it plays **three critical roles**:

1. **Lawfulness of training data**: personal data used as training material must have a legal basis
   (Article 6); publicly accessible ≠ processable
2. **Right regarding automated decision-making** (Article 22): data subjects have the right not to be
   subject to decisions based **solely on automated processing** — directly relevant to AI inference services
3. **Cross-border transfers**: EU-originating data requires an adequacy decision / SCCs / BCRs (Articles 44-50)

GDPR's central tension with AI training: the friction between **purpose limitation** and large-scale
web scraping for LLMs.

## Direct impact on AI

### Training phase

- **Legal basis** (Article 6): use of personal data for training requires consent / contract performance / legitimate interest, etc.
- **Purpose limitation** (Article 5): does the original purpose of collection cover "training an AI model"?
  DPAs launched multiple investigations in 2023-2024 (CNIL on ChatGPT, Garante on Replika, DPC on Meta LLaMA)
- **Special categories of data** (Article 9): biometrics, health, political views, etc. require stricter bases
- **Minors** (Article 8): default age of consent 16, member states may lower to 13

### Inference / deployment phase

- **Transparency** (Articles 13-14): inform users of processing categories, purposes, retention periods
- **Access / rectification / erasure rights** (Articles 15-17): data subjects can invoke these;
  how to "erase" training data already embedded in model weights is an active academic question
- **Automated decision-making** (Article 22): for decisions based solely on automation with legal or
  similarly significant effects on the individual, data subjects have the right to human intervention,
  to express their view, and to contest the decision

### Cross-border

- After **Schrems II** (2020), the EU-US data framework has been rebuilt multiple times
- LLMs trained on EU data performing inference abroad → transfer analysis required
- **DPF** (Data Privacy Framework, 2023) is the current primary EU-US cross-border mechanism

## Core provisions (AI-relevant)

### Article 5 · Principles

Six principles: lawfulness / purpose limitation / minimization / accuracy / storage limitation /
integrity and confidentiality. Plus **accountability**.

### Article 6 · Lawful basis

Six bases: consent / contract / legal obligation / vital interests / public interest or official authority /
**legitimate interests**. LLM training often invokes legitimate interests, which requires an LIA
(Legitimate Interest Assessment).

### Article 9 · Special categories

Presumptively prohibited absent a specific exception (explicit consent, legal obligation, public health, etc.).

### Article 22 · Automated decision-making

> A data subject shall have the right not to be subject to a decision based solely on automated
> processing, including profiling, which produces legal effects concerning them or similarly
> significantly affects them.

Exceptions: necessary for a contract, authorized by law, explicit consent. Even under exceptions,
safeguards must preserve "at least the right to obtain human intervention, to express one's point of
view, and to contest the decision."

### Article 35 · DPIA

"High-risk processing" (including large-scale profiling, large-scale special-category data, new
technologies) requires a **Data Protection Impact Assessment**. AI training and deployment almost
always trigger this.

### Article 83 · Penalties

- General infringements: EUR 10M or 2% of global annual turnover (whichever is higher)
- Serious infringements (including Articles 5, 6, 9 principles): EUR 20M or **4% of global annual turnover**

## Relationship with the AI Act

**Dual-layer supervision**: when AI systems process personal data, both the AI Act and GDPR apply.

- AI Act Article 2(7): without prejudice to the application of GDPR
- AI Act Article 10 (data governance) is additive to, not a substitute for, GDPR
- Regulators: the **EDPB** and the **AI Office** coordinate
- Companies: **dual compliance documentation** (DPIA + AI risk assessment)

## Representative DPA actions (AI-related)

- **Garante (Italy)** vs. ChatGPT (2023-03 temporary ban; subsequent fine)
- **Garante** vs. Replika (2023-02 ban, on the legal basis for minor-facing companion AI)
- **CNIL (France)** AI action plan plus multiple rounds of guidance
- **DPC (Ireland)** investigation of Meta LLaMA training data
- **Hamburg DPA** position paper on ChatGPT training data

## Text and translations

| Language | Source | Link |
| --- | --- | --- |
| English (original) | EUR-Lex | [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj) |
| 24 official EU languages | EUR-Lex | same as above |
| Chinese (unofficial academic translation) | — | _Cite mainland academic translations_ |
| Article cross-reference | GDPR-info.eu | [gdpr-info.eu](https://gdpr-info.eu/) |

## Version history

| Date | Event |
| --- | --- |
| 2016-04-27 | Adopted by Parliament and Council |
| 2018-05-25 | Became applicable |
| 2023-05 | DPF (Data Privacy Framework) established |
