---
title: Usage Policy
description: Cross-jurisdictional analysis of ByteDance / Doubao / Volcano Engine / TikTok / CapCut usage policies and content rules (snapshot 2026-04-23)
sidebar:
  order: 1
snapshotDate: 2026-04-23
---

> ByteDance does not maintain a single global "Usage Policy." Instead, its policies are split **by jurisdiction and by product line into multiple user agreements, content rules, and API compliance addenda**—
> that fact itself is the first key observation about the company's policy architecture.

## 1. The document matrix

ByteDance's "usage policy" takes different documentary forms across products and jurisdictions:

| Jurisdiction | Product | Public document name | Legal character |
| --- | --- | --- | --- |
| China | Doubao 豆包 (app / web) | *Doubao User Agreement*, *Doubao Content Rules*, *Personal Information Protection Policy* | Civil contract + compliance declaration |
| China | Coze 扣子 | *Coze User Agreement*, *Developer Code of Conduct* | Civil contract |
| China | Volcano Engine 火山方舟 API | *Volcano Engine Large Model Service Agreement*, *Content Safety Compliance Addendum* | B2B agreement with flow-down clauses that transfer algorithm filing (算法备案) duties |
| Overseas | TikTok | TikTok Community Guidelines + Terms of Service | Platform rules + contract |
| Overseas | CapCut / Lemon8 | CapCut Community Guidelines + Terms | Platform rules + contract |
| Overseas | Cici (overseas version of Doubao) | Cici Terms of Service (market-specific editions) | Contract |

Compared to Anthropic's single two-layer structure of **Consumer Usage Policy + Commercial Terms** (see [Anthropic / usage-policy](/en/companies/anthropic/usage-policy/)),
ByteDance layers far more densely: **the same company simultaneously acts as a consumer platform, a developer platform, a cloud service provider, and a global social-media platform**,
with each layer facing distinct regulators and markets.

## 2. Inside China: Doubao and Volcano Engine as "delegated government review"

### Doubao app and Coze content rules

The *Doubao User Agreement* and *Doubao Content Rules* are highly isomorphic with Articles 4 and 7 of the *Generative AI Interim Measures* (《生成式人工智能服务管理暂行办法》,
hereafter *Generative AI Interim Measures*). Prohibited categories include:

- Content that opposes the basic principles established by the Constitution, endangers national security, leaks state secrets, subverts state power, or undermines national unity
- Content that harms national honor and interests, promotes terrorism or extremism, or incites ethnic hatred or discrimination
- Content that undermines state religious policy, promotes cults, or feudal superstition
- Content that spreads rumors or disturbs the economic and social order
- Content that spreads obscenity, pornography, gambling, violence, murder, terror, or incites crime
- Content that insults or defames others, or infringes their lawful rights and interests
- Pornographic, violent, or inducement content involving minors (aligned with Article 51 of the *Regulations on the Network Protection of Minors*)
- Deepfake, face-swap, or voice-cloning content not labeled under the *Labeling Measures* and the *Deep Synthesis Provisions*

> Key observation: these prohibitions are **not ByteDance's own corporate value judgments**; they are **prerequisites** for passing CAC algorithm filing (算法备案).
> Filing submissions must include an "illegal content defense mechanism" description and sample keyword / semantic blacklists;
> without these the application will not be filed. This is what Zhang Linghan 张凌寒 calls the "nationalization of platform governance" (平台治理的国家化): the producer of platform rules
> is no longer the platform itself, but the regulator.

### Volcano Engine API: flow-down of compliance duties to enterprise clients

As a **B2B cloud service provider**, Volcano Engine adopts the classic "Acceptable Use Policy flow-down" structure:

1. **Duties on Volcano Engine**: the model itself has been filed under the *Generative AI Interim Measures* and carries the "technology provider" obligations.
2. **Duties on the API caller**: the enterprise client, as the "service provider," is independently responsible within its own use case for:
   - Algorithm filing for its own application (if the service has "public-opinion or social-mobilization attributes")
   - Compliance with the *Labeling Measures* for the application (explicit labeling of AI-generated content)
   - A user complaint channel for the application
   - Content moderation and log retention for the application's users (generally 6+ months)
3. **Joint duties**: in the event of an incident, Article 9 of the *Generative AI Interim Measures* imposes a **joint duty to cooperate with regulators**.

This "joint + flow-down" structure parallels OpenAI's API Usage Policies and Anthropic Commercial Terms,
but the key difference in the Chinese version is that **the flow-down rests on a filing registry that already binds upstream and downstream together**—
when a regulator queries the upstream model of a given AI application, the filing record lets them trace directly through to Volcano Engine / Doubao.

## 3. Outside China: TikTok and CapCut as EU DSA compliance mirrors

### TikTok Community Guidelines

Since establishing Community Guidelines in 2019, TikTok has revised them 2–3 times per year. Unlike the Chinese side where "prohibition lists converge toward state norms,"
TikTok's overseas rules **closely mirror the content-governance language of Meta / YouTube**:

- Hate speech / Harassment / Bullying
- Violent and Graphic Content
- Sexual Exploitation and Gender-based Violence
- Integrity and Authenticity (including dedicated chapters on **Synthetic and Manipulated Media** and **AI-Generated Content**,
  introduced explicitly from 2023-09 in response to EU DSA requirements)
- Youth Safety and Well-being

Once the EU *Digital Services Act* (DSA) applied in full to VLOPs from 2024-02-17, TikTok—as a VLOP—was required to restructure its rule disclosures under
**DSA Art. 14** (clear and accessible terms), **Art. 17** (Statement of Reasons), and **Art. 24** (transparency reporting).
In 2024-04 the European Commission opened formal proceedings under DSA Art. 66 concerning TikTok Lite (the reward-for-watch-time feature); TikTok voluntarily took TikTok Lite offline in the EU within 48 hours—
the **first VLOP to resolve a DSA case through proactive concession**.

### CapCut's AI-generated content clauses

As ByteDance's globally largest creator tool by installs (publicly estimated MAU in the hundreds of millions), CapCut's 2024–2025 versions
added clauses on **AI-generated effects / avatars / voice clones**, requiring:

- User consent to watermarking when using "AI effects" / "AI face-swap" features
- Prohibition on face-swapping political figures, minors, or non-consenting third parties
- CapCut's right to force-embed C2PA content credentials at the backend (enabled by default in the EU market from 2025-10)

This fork is worth noting: **the same company labels content under GB 45438-2025 in China, under C2PA in the EU,
and under state laws (e.g. California AB 2655 on election deepfakes) in the U.S.**—
these three parallel technical labeling regimes are one of ByteDance's most engineered global-compliance scenarios.

## 4. Cross-jurisdictional comparison: the real differences between prohibition categories

|  | Doubao / Volcano Engine (China) | TikTok (EU) | TikTok (US) | Claude AUP (reference) |
| --- | --- | --- | --- | --- |
| Political content | **Explicitly prohibited** (constitutional principles, national security, 8 categories) | Limited (only "electoral integrity" type) | Minimal (First Amendment constraints) | Limited ("material political manipulation") |
| Minors | Strong (aligned with *Minors Regulations*) | Strong (DSA Art. 28) | Strong (COPPA + KOSA developments) | Strong (CSAM + generalized physical/mental harm) |
| Weapons / CBRN | Weaker (no standalone category) | Weaker | Weaker | **Strongest** (explicit CBRN) |
| AI face-swap / voice-clone | **Explicitly prohibited if unlabeled** (mandatory GB 45438) | Labeling required under DSA + C2PA | Patchwork of state laws | Non-consensual impersonation prohibited |
| Armed conflict / terrorism | Explicitly prohibited | Explicitly prohibited | Explicitly prohibited | Explicitly prohibited |

> **Schaefer and Sheehan** observation: the Chinese AUP performs functions that Western AUPs do not—
> it effectively operates as the **enterprise-distributed edition of national content moderation standards**. By contrast, the Anthropic / OpenAI AUP is built around "frontier risk + corporate values,"
> while the Doubao AUP is built around "filing approval + targeted enforcement response."

## 5. Key updates, 2025–2026

- **2025-09-01**: the *Measures for Labeling AI-Generated Synthetic Content* and **GB 45438-2025** took effect on the same day.
  Doubao, Seed-Seedance (video), and Seed-ASR (speech) all adapted to the dual explicit + implicit labeling requirements.
- **2026-04-10**: the *Interim Measures for the Administration of Anthropomorphic Interactive AI Services* were published, taking effect on 2026-07-15.
  Doubao's "virtual friend / AI persona" functions must be re-filed, and user agreements are expected to be updated in parallel
  (the draft preview already requires "no anthropomorphic chat for minors between 22:00–06:00," "emotional-addiction detection mechanisms," etc.).
- **2026 Q1**: enforcement pressure under PAFACA (Protecting Americans from Foreign Adversary Controlled Applications Act) continues in the U.S.;
  negotiations over the sale of TikTok's U.S. assets have not concluded. Factual divergence between the U.S. and global editions of the Community Guidelines is beginning to appear.

## 6. Academic critique

### Perspectives from Chinese scholarship

- **Zhang Linghan 张凌寒 (China University of Political Science and Law)** in *Platform Rule of Law* argues that user agreements for Chinese AI platforms
  are undergoing a shift "from contract to public-law obligation": user agreements are no longer purely B2C contracts but carry administrative-law content-review duties.
  The Doubao user agreement is a paradigm case.
- **Dai Xin 戴昕 (Peking University)**: critiques filing for causing convergence of user agreements—
  the prohibition lists of large models look nearly identical across firms, which meaningfully shrinks the user's choice set.
- **Xue Lan 薛澜 (Tsinghua University 清华大学)**: frames this coupling of platform rules with state rules as an inevitable product of **agile collaborative governance** (敏捷治理)—
  department rules iterate rapidly and corporate rules follow suit, at the price of **insufficient stability and predictability**.

### International perspectives

- **Matt Sheehan (Carnegie)**: "Algorithm regulation as content regulation"—
  Chinese algorithm governance is in substance an extension of content governance, and the Doubao AUP is the clearest illustration.
- **Kendra Schaefer (Trivium China)**: the "disclosability" of Chinese corporate AUPs is low—
  many concrete moderation boundaries are not stated in the AUP but live in **filing materials plus internal moderation manuals**.
- **Rebecca Arcesati (MERICS)**: TikTok's EU compliance practice has reflexively shaped the governance architecture at headquarters—
  the DSA Statement of Reasons mechanism requires structured rationales for every takedown / demotion decision,
  and that capability will ultimately be reused by the China-facing Doubao version.
- **Jeffrey Ding (GWU)**: ByteDance's dual-track AUP structure is a textbook case of "differential transparency"—
  different regulators receive different visibility rather than a single maximum-transparency front.

## 7. Operational insight: how ByteDance's "three-layer compliance" executes its AUP

Based on public interviews, employee disclosures, and industry conventions, ByteDance's internal architecture for AUP execution is:

1. **Party Committee (党委) + corporate legal (the top compliance layer)**: sets the overall red lines for the AUP—
   especially **principle-level clauses** concerning political, military, and major public-opinion categories. Major revisions
   (e.g. the big rewrite before the first filing batch in 2023-08) are reviewed by the Party Committee.
2. **Algorithm filing team (product compliance layer)**: prepares CAC filing materials per product, with "user agreement + content rules" as standard annexes.
   **The filing cycle before a new product launch is typically 4–8 weeks.**
3. **Trust & Safety (operating layer)**: thousands of content reviewers apply the AUP to individual cases.
   Domestic teams are primarily based in Tianjin, Chengdu, and Jinan; overseas teams in Dublin, Los Angeles, and Singapore.

> Compared to OpenAI / Anthropic's "small policy staff + model-side enforcement," ByteDance runs an **institution-dense and labor-dense** model.
> This also explains why ByteDance has not experienced overseas AUP controversies at the level of "delete-forever prompts" or "system-prompt leaks"—
> multiple layers of human filters already preprocess the front end.

## 8. Related index

- Top-level rules: [*Generative AI Interim Measures*](/en/rules/china/generative-ai-interim-measures/)
  · [*Deep Synthesis Provisions*](/en/rules/china/deep-synthesis-provisions/)
  · [*Algorithm Recommendation Provisions*](/en/rules/china/algorithm-recommendation-provisions/)
  · [*Labeling Measures* + GB 45438-2025](/en/rules/china/biaozhi-banfa/)
  · [*Anthropomorphic Interactive Services Measures*](/en/rules/china/anthropomorphic-interaction-services/)
- Peer comparison: [Anthropic / usage-policy](/en/companies/anthropic/usage-policy/)
  · [OpenAI / usage-policy](/en/companies/openai/usage-policy/)
- EU layer: DSA VLOP clause system (Art. 14 / 17 / 24 / 34)
