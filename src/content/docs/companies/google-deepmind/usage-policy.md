---
title: Usage Policy
description: The Google DeepMind / Gemini usage policy, the 2024 removal of the AI Principles military clause, and the layered policy ecosystem
sidebar:
  order: 1
snapshotDate: 2026-06-28
---

> **February 2024 structural turn**: Google updated its [AI Principles](https://ai.google/responsibility/principles/) and **deleted the four-category negative list of "AI applications we will not pursue"** from the 2018 version — including the explicit ban on "weapons or other technologies whose principal purpose is to cause injury to people." This is the **first structural retreat by a tech giant from a public refusal of military AI since Project Maven**, and the central political event of this page.

## Overview: Google's "policy cluster" rather than a single AUP

Unlike Anthropic's single **Usage Policy** or OpenAI's **Usage Policies**, Google's constraints on use are **distributed across at least four layers** of documents:

1. **[Google AI Principles](https://ai.google/responsibility/principles/)** (2018 / 2024 revision) — a company-level statement of principles, not directly user-facing
2. **[Generative AI Prohibited Use Policy](https://policies.google.com/terms/generative-ai/use-policy)** — the consumer-facing "prohibited use" list for Gemini App / AI Studio
3. **Gemini API / Vertex AI Additional Terms of Service** — enterprise and developer layer
4. **Responsible AI Practices / Responsibility & Safety Hub** — research and engineering guidelines ([deepmind.google/about/responsibility-safety](https://deepmind.google/about/responsibility-safety/))

This **layered policy ecosystem** reflects the natural complexity of Alphabet as an organisation, but it also creates space for **"policy arbitrage"** — for example, Vertex AI enterprise customers can negotiate into modes that are unavailable on the consumer side (such as contractual carveouts for specific monitoring scenarios).

## Layer 1: AI Principles (2018 → 2024)

### The seven principles of the 2018 original

On 7 June 2018, then-CEO **Sundar Pichai** published the AI Principles following the collective employee protests over **Project Maven** (a Pentagon drone-vision AI contract):

1. Be socially beneficial
2. Avoid creating or reinforcing unfair bias
3. Be built and tested for safety
4. Be accountable to people
5. Incorporate privacy design principles
6. Uphold high standards of scientific excellence
7. Be made available for uses that accord with these principles

Even more important was the **"Applications we will not pursue"** four-category list:

- Technologies that cause or are likely to cause overall harm
- **Weapons or other technologies whose principal purpose or implementation is to cause or directly facilitate injury to people**
- Technologies that gather or use information for surveillance violating internationally accepted norms
- Technologies whose purpose contravenes widely accepted principles of international law and human rights

> **Historical positioning**: this made Google the **first tech giant to publicly refuse military AI**. Meredith Whittaker, Lilly Irani, and other former Google employees later treated the Maven protests as a canonical case in "worker governance."

### The February 2024 revision: deletion of the negative list

On 4 February 2024 Google quietly updated the AI Principles page, **deleting the entire "Applications we will not pursue" section** and replacing it with three broad principles: Bold Innovation, Responsible Development and Deployment, and Collaborative Progress. *Bloomberg*, *The Washington Post*, and *The Guardian* all read this as **laying the groundwork for Project Nimbus** (the multi-year Israeli defence AI cloud services contract awarded in 2021) **and other military collaborations**.

**Key changes after revision**:

| Dimension | 2018 version | 2024 version |
| --- | --- | --- |
| Structure | 7 positive + 4 negative | 3 positive (no negative list) |
| Weapons clause | Express prohibition | **Deleted** |
| Surveillance clause | Express prohibition (absent lawful authority) | Specific phrasing deleted |
| Accountability language | "accountable to people" | "with appropriate human oversight" |

Google's official explanation: **"Enumerated negative lists are too rigid to adapt to the rapidly evolving application contexts of AI."** Critics — including hundreds of Google employees who signed open letters and former DeepMind ethics researchers — read this as a paradigmatic case of **"principles giving way to contracts."**

## Layer 2: Generative AI Prohibited Use Policy

The consumer-layer **Prohibited Use Policy** ([policies.google.com/terms/generative-ai/use-policy](https://policies.google.com/terms/generative-ai/use-policy)) is the **AUP actually binding end users**. It has been revised multiple times since 2024; the current (Q1 2026) version's core prohibited categories:

- **Dangerous or illegal activity**: weapons / explosives manufacturing, terrorism, human trafficking, CSAM generation
- **Misleading and deceptive use**: impersonation of real individuals, ghostwriting for academic fraud, financial-fraud materials
- **Interference with elections and democratic processes**: since 2024 Gemini **actively refuses to answer election-related factual questions** ("I can't help with responses on elections and political figures right now"), widely criticised as **over-censorship**
- **Critical-infrastructure attacks**: unauthorised access or disruption of power grids, water, finance, healthcare
- **"Material harm to user wellbeing"**: mass psychological manipulation, addictive design, self-harm encouragement
- **Non-consensual content**: non-consensual realistic imagery, involuntary deepfakes
- **Bypassing Google safety systems**: jailbreaks and prompt injection used to circumvent content moderation

> **The "nesting doll" phenomenon in policy**: the Gemini App refuses election queries, while **Google Search's AI Overviews generates content referencing political figures** — two policies under one parent company. Lazar and others criticise this **"policy boundary by product rather than by capability"** as "ethics by surface area."

## Layer 3: Gemini API / Vertex AI enterprise terms

The **Vertex AI Additional Terms** ([cloud.google.com/terms/service-terms](https://cloud.google.com/terms/service-terms)) carry over Google Cloud's habitual **"enterprise-compliance partner"** posture:

- **Customer bears compliance responsibility for inputs / outputs** (Section 5 Customer Responsibility)
- **Abuse Monitoring** can be **selectively disabled** for HIPAA / FedRAMP High scenarios (analogous to OpenAI Enterprise zero-retention)
- **Enterprise carve-outs**: Vertex AI customers can apply for **contract-level waivers** of certain Prohibited Use clauses — for example, "lawful government use" carveouts for military / intelligence customers (Google's public materials do not elaborate, but *The Intercept* reported in 2024, through Project Nimbus documents, that such clauses exist)
- **SynthID** automatic watermarking is enabled by default on Gemini outputs; enterprise customers may apply for customisation or deactivation

## Layer 4: Responsibility & Safety Hub

[deepmind.google/about/responsibility-safety](https://deepmind.google/about/responsibility-safety/) is maintained by **DeepMind rather than Google Legal** and constitutes a **research-layer document**, including:

- **Responsible AI Toolkit** (developer-facing safety APIs)
- **Model Behavior Policies** (Gemini's refusal / harmful-content logic)
- **SynthID / Provenance research**
- **AGI Safety Research** (from the Shane Legg / Rohin Shah teams)

This layer has **no legal binding force** but **shapes model behaviour in practice** — maintained jointly by DeepMind's Safety Team (London) and Google's Responsible AI group (Mountain View).

## Academic critique

### Claire Lazar (ANU, Oxford) — principles fatigue

In her 2024 *AI Principles and Industry Practice* (Oxford GovAI Working Paper), Lazar argues that **Google's AI Principles gradually weakened their "use-restriction" clauses during 2018–2024**, confirming the prediction in *Mittelstadt (2019) "Principles Alone Cannot Guarantee Ethical AI"*. **The 2024 deletion of the negative list is the "climax" of this process**, not a sudden break.

### Legacy of the Timnit Gebru episode (December 2020)

Gebru's departure over *On the Dangers of Stochastic Parrots* (which Google characterised as a resignation) prompted the **structural disintegration of the Google Ethical AI team** — Margaret Mitchell was dismissed the following year, and several core members left. This is **structurally continuous** with the 2024 AI Principles revision: **when internal ethics-review capacity is weakened, checks on policy revision are also weakened**.

### Meredith Whittaker (Signal, ex-Google) — ethics washing

In *The Steep Cost of Capture* (2023), Whittaker criticises AI-ethics documents from Google / Microsoft / OpenAI as a **"corporate capture of ethics language"** — **replacing enforceable constraints with principled language**. The 2024 AI Principles revision was read by her as **"the clearest single act of self-exposure."**

### Binns & Veale (UCL) — from "principles" to "procedure"

> "The enforceability of AI use policy depends not on clause content but on the design of internal compliance procedures."
> — *Binns & Veale, "Is That Your Final Decision? Multi-Stage Profiling" (2021)*

Their critique: Google lacks Anthropic's **publicly visible Acceptable Use decision-making process** (Anthropic began publishing case explanations for some AUP decisions in 2024). Google's internal review ("AIPR" — AI Principles Review) is **opaque** and unaudited by external parties.

## Industry first-hand observations

### Organisational tension Google ↔ DeepMind

In April 2023 Google announced the merger of Google Brain and DeepMind into **Google DeepMind**, with Demis Hassabis as CEO. But usage-policy authority still **spans two organisations**:

- **Product-layer policy** (Gemini App / Vertex AI Prohibited Use) led by **Google Legal + Trust & Safety**
- **Research-layer policy** (FSF, Model Behavior Policies) led by the **DeepMind Safety / Responsibility & Safety Council**

**Practical consequence**: the conservative positions DeepMind researchers push (e.g. the new Harmful Manipulation CCL in FSF v3) and the looser stances product teams push (e.g. AI Overviews relaxing limits on generated content) have **publicly clashed**. The 2024 "Gemini historical images" incident (generation of racially displaced historical figures) is a paradigmatic case of **cross-organisational coordination failure**.

### Policy mapping onto YouTube / Workspace

**"Fragmentation" of Google usage policy**:

- **Gemini in Workspace** (Docs / Gmail sidebar): governed by the [Workspace Additional Terms](https://workspace.google.com/terms/additional_terms.html)
- **Gemini in YouTube** (Auto-dub, Shorts script assistance): governed by YouTube Community Guidelines + Creator Music restrictions
- **AI Overviews in Search**: governed by [Search Policies](https://support.google.com/websearch/answer/14900), not Gemini Prohibited Use
- **NotebookLM**: stand-alone Terms, allows user document uploads without training use

This **product-level fragmentation** makes "what is Google's AI usage policy?" a **genuinely hard question at the technical-compliance level**. The EU AI Act Article 50 requirement for transparency labelling must be implemented separately across **at least six products** within Google's ecosystem.

## Comparison with peers

| Dimension | Google (Q1 2026) | Anthropic AUP | OpenAI Usage Policies |
| --- | --- | --- | --- |
| Document unity | **Fragmented across 4+ layers** | Single AUP + commercial terms | Single Usage Policies + Enterprise |
| Weapons prohibition | **Deleted in 2024** | Express prohibition | Deleted in January 2024; **partially restored October 2024** |
| Election scenarios | **Refuse to answer (excessive)** | Permits assistance with real content | Limited in 2024 |
| Enterprise carve-outs | **Strong** (Vertex / government) | Present (Commercial Terms) | Present (Enterprise) |
| Transparency | Policy text public, **no decision explanations** | **Public AUP decision cases** | Low public disclosure |

## Key timeline

- **June 2018**: initial AI Principles released (after Maven protests)
- **December 2020**: Gebru episode; Ethical AI team destabilisation begins
- **2021**: Project Nimbus contract signed
- **April 2023**: Google DeepMind merger
- **February 2024**: **AI Principles revised; negative list deleted** (the central event on this page)
- **February 2024**: Gemini historical-images incident; employee petition against Nimbus
- **May 2024**: FSF v1 released (see [safety-framework](./safety-framework/))
- **February 2025**: FSF v2 + minor Prohibited Use revision
- **November 2025**: Gemini 3 Pro released, accompanied by the first FSF Report
- **April 2026**: **FSF v3 released**, adding the Harmful Manipulation CCL

## Cross-references

- Corporate overview and FSF panorama: [Google DeepMind index](/companies/google-deepmind/)
- Model-level capability disclosure: [Gemini Model Cards](./model-card/)
- Safety Framework (FSF) evolution: [Safety Framework](./safety-framework/)
- Comparisons: [Anthropic AUP](/companies/anthropic/usage-policy/), [OpenAI Usage Policies](/companies/openai/usage-policy/)
- Methodology: [company attribution](/methodology/#company-attribution)
