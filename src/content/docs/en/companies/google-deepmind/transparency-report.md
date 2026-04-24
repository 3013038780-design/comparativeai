---
title: Transparency Report
description: Google's transparency reporting ecosystem and AI-specific disclosures; SynthID, elections throttling, and EU AI Act training data summaries
sidebar:
  order: 4
snapshotDate: 2026-04-23
---

> **Observation**: Google's transparency disclosures are **the most mature but also the most fragmented** among the three
> frontier labs. For the seventh consecutive year, **Ranking Digital Rights 2025** places Google in its transparency
> "top tier", while criticizing **"breadth but not depth"** — documentation is plentiful, yet key AI decisions (such as
> training-data source proportions and the specific numeric CCL thresholds) remain non-public.

## The four-tier architecture of Google's transparency reporting

Compared with Anthropic's single **Transparency Hub** or OpenAI's **Privacy Hub + one-off Model Spec**, Google's
transparency disclosures are **distributed across at least four official entry points**:

1. **[Google Transparency Report](https://transparencyreport.google.com/)** (since 2010) —
   legacy: government requests, copyright removals, etc.
2. **[Responsibility & Safety Hub](https://deepmind.google/about/responsibility-safety/)** (maintained by DeepMind) —
   AI-specific safety research, SynthID, FSF Reports
3. **[Responsible AI Progress Report](https://ai.google/responsibility/responsible-ai-progress-report/)** (annual, since 2019) —
   company-level annual AI governance report
4. **Product-level transparency documentation**: Gemini Model Cards, FSF Reports, AI Studio transparency panel, and
   Google Cloud Model Armor

This **multi-layered architecture** is commensurate with company scale — but it means **"Google's level of AI transparency"
cannot be assessed through any single document**.

## Layer 1: Google Transparency Report (legacy + AI extensions)

**Google launched the Transparency Report in 2010**, the first large tech company to publicly disclose **government data
requests** and **copyright takedowns**. The **Berkman Klein Center** at Harvard described it as "the starting point of
modern transparency reporting". From 2023, **AI-related DMCA requests** were added:

- **Copyright takedown requests for Gemini-generated content**
- **Requests concerning misuse of content labeling in AI Overviews / AI Search**
- **Account compliance requests during the Bard → Gemini transition**
- **Deepfake / nonconsensual synthetic imagery requests**

**Order-of-magnitude characteristics of the 2025 annual data** (specific figures per the official Google Transparency Report):

- Gemini-related DMCA requests are in the **tens of thousands**, well below YouTube's tens of millions per year
- "Deepfake / nonconsensual imagery" requests are in the **thousands** (YouTube + Gemini + Workspace combined)
- **Government data request scope** was extended to **AI Studio developer accounts** (new in 2025)

### Government requests by jurisdiction

The Google Transparency Report publishes AI-related government data requests by jurisdiction. Order-of-magnitude patterns:

- The United States remains the jurisdiction with the highest request volume (**tens of thousands per half-year**,
  combining AI and traditional products)
- The EU aggregate sits in the **thousands to tens of thousands**, led by Germany and France
- The United Kingdom sits in the **thousands**
- **Mainland China**: zero (Google does not formally operate there)
- **India**, under pressure from IT Rules and DSA-style compliance regimes, records requests in the **thousands**

Specific figures per the semiannual Google Transparency Report updates.

## Layer 2: Responsibility & Safety Hub (DeepMind)

[deepmind.google/about/responsibility-safety](https://deepmind.google/about/responsibility-safety/) is the AI-specific
transparency entry point maintained by **DeepMind, not Google Legal**:

- **FSF documents**: v1 / v2 / v3 all public
- **Model FSF Reports**: Gemini 2.5 (2025-04), Gemini 3 Pro (2025-11)
- **Gemini Model Cards** (cross-referenced to [model-card](./model-card/))
- **SynthID technical notes**
- **AGI Safety Research paper index**
- **UK / US AISI evaluation collaboration notes**

**Character**: **deep but scattered** — not an annual report but **ongoing research-style disclosure**. The academic
consensus is that this mode is **researcher-friendly** but **less accessible for regulators and general users**.

## Layer 3: Responsible AI Progress Report (annual)

Since 2019, Google has published the *AI Principles Progress Update*, renamed in 2024 to the *Responsible AI Progress
Report*. [ai.google/responsibility/responsible-ai-progress-report/](https://ai.google/responsibility/responsible-ai-progress-report/)

**Core content of the 2024 edition (the first renamed edition in the current period)**:

- **AIPR process disclosure**: annual review proposals in the low hundreds (exact figures per the official report)
- **Rejection cases**: order-of-magnitude figures for "rejected" projects (without disclosing specific project names)
- **User research**: bias evaluation, accessibility
- **AI Principles revision notes** (including a **"context" note on deleting the military prohibition**, neutrally worded)

The typical consensus critique (from RDR / Access Now / Article 19 and other evaluators) is that the Progress Report's
accountability limitation is that the overall presentation trends toward marketing narrative, while negative cases,
near-misses, and policy disputes are systematically absent.

**The 2025 edition** adds:

- **SynthID deployment data** (see below)
- **EU AI Act compliance summary**
- **GPAI Code of Practice signing details**
- **Gemini training-data opt-out statistics**

## Layer 4: product-level transparency

### Gemini Model Cards & FSF Reports

(See [model-card](./model-card/) and [safety-framework](./safety-framework/) for details.)

### The AI Studio transparency panel

Google AI Studio provides developers with a **real-time transparency panel**:

- Current call's model version and knowledge cutoff
- Safety-classifier trigger logs
- SynthID watermark status
- **Grounding citations** ("which web pages is Gemini's answer based on")

**This is among the industry's deepest productized transparency** — but visible only to paid Google Cloud developers.

### Google Cloud Model Armor

**Model Armor** (released 2024-07) is the compliance observability tool for Vertex AI enterprise customers:

- Real-time PII detection
- Jailbreak-attempt detection
- Content-policy compliance logs
- **Transparency API**: customers can export "summaries of Gemini's processing decisions for this prompt"

**In practice**: Model Armor logs **serve as evidence of compliance with the EU AI Act Art. 13 "to users" transparency
obligation**. This is a new paradigm of "transparency as API".

## SynthID and synthetic-media transparency

**SynthID** is the content-watermarking system launched by DeepMind in 2023 and progressively evolved through 2024-2026.

### Deployment scope (Q2 2026)

| Product | SynthID type | Default status |
| --- | --- | --- |
| **Imagen 3 / 4** (image) | Visual watermark + metadata | **Mandatory on** |
| **Veo 3** (video) | Frame-level watermark | Mandatory on |
| **Lyria 2** (music) | Audio watermark | Mandatory on |
| **Gemini** (text) | **Token-level statistical watermark** (extended 2024-10) | **Default on** (can be disabled via API) |
| **NotebookLM Audio** (podcasts) | Audio watermark | Mandatory on |

### Technical and policy context

- After the **2024-10 Gemini text watermark** launch, DeepMind open-sourced a (limited) **SynthID-Text detector**
- **C2PA compatibility**: SynthID metadata interoperates with the C2PA Content Credentials standard
- **EU AI Act Art. 50**: as a GPAI, Gemini must mark its outputs as AI-generated — SynthID is the primary compliance
  mechanism
- **California AB 2655 (Defending Democracy from Deepfake Deception Act)** requires platforms to detect and label
  AI-generated political content — SynthID is Google's compliance pathway

### Limitations

- **Cutting / re-encoding** partially disrupts video watermarks
- **Text watermarks** have low detection rates on short text (<200 tokens)
- **Cross-platform**: survivability of Gemini-generated text watermarks after editing in Word drops substantially
- Independent academic research (CMU, Stanford and others, 2024-2025 watermark-robustness papers) finds SynthID-Text
  detection rates fall markedly after adversarial modifications (paraphrasing, machine-translation round-tripping, etc.)

## Electoral transparency: Gemini's 2024 "refusal policy"

In 2024-03, Google announced that **Gemini would cease responding to "factual questions related to elections"**.
Google's blog post framed the decision as caution on important topics, and began imposing response limits on election-related
queries (exact wording and timing per the Google blog archive).

**Scope**: countries with 2024 elections (United States + EU + India + UK + ...)

**Controversy**:

- **Supporters** (election-integrity experts): this reduces the risk that LLMs generate disinformation
- **Critics** (journalism scholars, Kevin Roose of the NYT): **"over-censorship"** — users asking "who is the Senate
  majority leader" were refused
- **Gemini App vs. Google Search asymmetry**: Search's AI Overviews **were not subject to comparable restrictions**

**2026 update**: Gemini 3 Pro **partially restored** answers to factual election questions ("who is the current U.S.
president"), while maintaining refusals for **election predictions and candidate evaluations**.

## Training-data transparency (EU AI Act Art. 53 compliance)

### Google's compliance pathway

On 2025-08-01, Google signed the **GPAI Code of Practice** (all three chapters) and published the Gemini 3 Pro training
data summary using the CoP **Transparency Chapter template**. Contents include:

- **Major-category** data sources: public web, books, scholarly, video, synthetic data
- robots.txt compliance note (Google-Extended)
- **Non-training commitments** for internal Workspace / Gmail / YouTube data
- "Ongoing licensing efforts" for copyrighted content

### Key undisclosed information

- **Specific source proportions** (e.g. web vs. books vs. synthetic ratios)
- **Synthetic-data generation methods**
- **Language distribution in the data**
- **Any "pre-filter vs. post-filter" comparisons**

**This is a shared problem across the three frontier labs** — the RDR 2025 Scorecard rates all three as "Partial" on
the "training-data transparency" dimension.

## Academic critique

### Ranking Digital Rights (RDR)

Since 2015 RDR has annually assessed major tech companies on **human rights / expression / privacy / governance**
transparency.

In recent RDR Corporate Accountability Indexes, Google's overall score leads among assessed companies, but in AI-specific
dimensions (training-data disclosure, AI policy-enforcement metrics, AI-grievance remediation) the score sits **materially
below** its overall. The typical verdict: Google leads peers in mature-transparency dimensions but does not lead in
AI-specific transparency.

### Kirsten Martin (Notre Dame) — Transparency Theater

In *Ethical AI Starts with Data*, Martin advances the concept of **transparency theater** — well-documented but not
productive of accountability. Her assessment of Google:

- **Documentation completeness**: high
- **Operability** (can external stakeholders use transparency to hold Google accountable): medium-low
- **Regulatory comparison**: Martin's central argument is that GDPR Art. 22's transparency requirements for automated
  decision-making are **materially stronger in enforceability** than Google's voluntary disclosure

### Mike Ananny (USC) — "Seeing Without Knowing"

In *Seeing Without Knowing: Limits of the Transparency Ideal* (2018), Ananny argued — before the AI wave — that
**"transparency ≠ accountability"**. The AI era has magnified this: **SynthID's technical details are public, but
SynthID's false-positive rates and the enterprise-customer list of those with "disable API" access are not**.

### Meta vs. Google transparency comparison

Following the **2024-08 shutdown of Meta's CrowdTangle**, researchers pivoted to Google's YouTube API and Google Search
Console. But Google's API access is **more restrictive than CrowdTangle** — the denial rate for the **Google Researcher
Program** during 2024-2025 has been reported by the academic community as persistently high (no authoritative public
statistics are yet available).

## Industry practitioner perspective

### Internal transparency governance

Google's transparency-report production flow (co-led by the **Jigsaw** team and Trust & Safety):

- **Q1**: cross-departmental data collection (Legal / DeepMind / Product)
- **Q2**: internal review of the draft (**with emphasis on not disclosing data relevant to ongoing litigation**)
- **Q3**: communications polish
- **Q4**: release + synchronized updates to ai.google / transparencyreport.google.com

**Internal tensions**: **DeepMind Research** favors deeper AI disclosure; **Legal** favors conservative disclosure
constrained by litigation risk. In recent years (2024-2026), **DeepMind's influence has grown** — the FSF Reports are
a typical case, **pushing detailed safety data into public view proactively**.

### Enterprise customer transparency vs. public transparency

Google Cloud Vertex AI customers receive **substantially richer transparency** than public documentation provides:

- SLA-bound safety-classifier performance metrics
- **Model Armor logs** (complete compliance evidence)
- FSF Reports **pre-release** (enterprise customers receive them before public model release)
- Real-time telemetry from the Responsible AI Toolkit

**This creates a "compliance bifurcation"**: paying enterprise customers enjoy full transparency, while individual users
rely on public versions. **EU AI Act obligations toward ordinary users** are **partially** narrowing this gap.

### Interaction with the DSA

Google Search, as a VLOP (Very Large Online Platform), is subject to **DSA Art. 24 and 42 transparency obligations** —
systemic-risk reports, advertising archive, and recommender-algorithm disclosure. **AI Overviews were incorporated into
the DSA reporting scope** — the first time Google has, **under legal compulsion**, disclosed the systemic-risk assessment
of an AI product.

## Peer comparison

| Dimension | Google (2026) | Anthropic | OpenAI |
| --- | --- | --- | --- |
| Legacy transparency report | **Since 2010** | None | None |
| AI-specific transparency | Responsibility & Safety Hub + AI Progress Report | Transparency Hub | Privacy Hub + scattered |
| Model-level safety report | **FSF Reports (standalone)** | Risk Reports (from 2026-04) | System Cards |
| Training-data summary | EU CoP template | EU CoP template | EU CoP template (partially withheld) |
| Watermarking | **SynthID (four modalities)** | None (C2PA collaboration) | Limited (image) |
| Enterprise transparency tool | **Model Armor** | Claude Trust Center | Enterprise Dashboard |
| DSA compliance | **Search + Shopping VLOP** | Non-VLOP | Non-VLOP (but ChatGPT near threshold) |

## Key timeline

- **2010**: Google Transparency Report launched
- **2018**: AI Principles released (including Progress Report commitment)
- **2019**: first AI Principles Progress Update
- **2023-10**: SynthID launched (image)
- **2024-03**: Gemini elections throttling
- **2024-07**: Google Cloud Model Armor
- **2024-10**: SynthID extended to text
- **2025-04**: first model-level FSF Report (Gemini 2.5)
- **2025-08**: signed GPAI Code of Practice
- **2025-11**: **Gemini 3 Pro FSF Report + paired training-data summary**
- **2026-04**: FSF v3 + Responsible AI Progress Report 2026 edition

## Cross-links

- Company-level overview: [Google DeepMind index](/en/companies/google-deepmind/)
- Usage policy: [Usage Policy](./usage-policy/)
- Model Card and technical reports: [Model Card](./model-card/)
- Safety framework (FSF): [Safety Framework](./safety-framework/)
- Red-teaming and external evaluation disclosures: [Red-Team Disclosures](./red-team-disclosures/)
- EU AI Act compliance: [EU AI Act](/en/policies/eu/ai-act/)
- DSA transparency obligations: [EU DSA](/en/policies/eu/dsa/)
- Ranking Digital Rights methodology: [Academic references](/en/references/ranking-digital-rights/)
