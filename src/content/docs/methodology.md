---
title: Methodology
description: Inclusion criteria, legal hierarchy, company attribution, and version management
sidebar:
  order: 2
---

This page sets out the editorial rules of Comparative AI. Every content page on the site follows the standards described here; if you spot an inconsistency, please flag it.

Citation and disclaimers are handled on a separate page: [Citation and disclaimer](/methodology/citation-disclaimer/).

---

## 1. Inclusion criteria {#inclusion}

**Whether a document merits inclusion is judged in the following priority order:**

1. **Strongly related to AI governance.** AI-specific rules take priority (e.g. the *Interim Measures for the Management of Generative AI Services* (《生成式人工智能服务管理暂行办法》), the GPAI chapter of the EU AI Act, California SB 53). General laws (computer crime, general data protection, cybersecurity) do not as a rule receive a standalone page, **but may do so if one of the following conditions is met**:
   - **They perform an "upstream law" role for AI governance** — for example, Article 24 of China's *Personal Information Protection Law* (PIPL, 《个人信息保护法》) on automated decision-making and Article 28 on sensitive personal information (including biometrics) are the fallback basis for every Chinese AI ministerial regulation that touches personal data; Article 68 of the *Cybersecurity Law* (CSL, 《网络安全法》) is the *de facto* source for penalty provisions in AI ministerial rules.
   - **They are explicitly invoked by AI-specific rules** — for example, the mandatory layering of the GDPR on top of Article 10 of the AI Act on data governance.
   - **They establish a foundational "classification and grading" concept** — for example, Article 21 of the *Data Security Law* (DSL, 《数据安全法》) on data classification serves as the baseline for AI training compliance around "important data".
2. **Publicly accessible.** Every primary text must have a stable public link (official government site, EUR-Lex, Congress.gov, etc.). Non-public material (internal industry emails, undisclosed policies) is excluded.
3. **Normative output.** Legislative text, executive orders, regulator guidance, citable academic consensus (not individual blog posts).
4. **Corporate practice needs durable documentation.** One-off statements at launch events are not included; PDFs and policy / framework / report documents durably hosted on official websites are.

**Excluded:** news reports (may be cited as background), Twitter posts, individual politicians' opinions (unless already incorporated into the formal text of a legislative proposal), and drafts that have not yet been publicly released.

**Representative items explicitly not given a standalone page** (cross-referenced from related AI-rule pages):
- China: *Regulations on the Security Protection of Critical Information Infrastructure*, *Administrative Regulations on Network Data Security*, the "three-piece set" on cross-border data transfer, the *Anti-Telecom and Online Fraud Law*, the *Science and Technology Progress Law*, the *Provisions on the Governance of the Online Information Content Ecosystem*, and so on.
- United States: **Section 230**; sector-specific privacy statutes (COPPA, HIPAA, GLBA, FERPA, etc.).
- EU: **Cyber Resilience Act, NIS2, Data Governance Act**, and other general data / cybersecurity instruments.

---

## 2. Legal hierarchy {#hard-vs-soft}

The division between "hard law" and "soft law" used here is an **editorial decision**, not a legal definition. **The boundary is contested in the scholarly literature** (see Bremer 2020 and Shapiro 2022 on the normative force of guidance documents). Our approach is set out below.

### Common principles

- **Hard law (binding):** norms enacted by an authorised body through statutory procedure, imposing **enforceable** obligations on specified subjects, with defined legal consequences for breach.
- **Soft law (non-binding):** norms promulgated by an authoritative body, exerting **guidance or de facto binding force**, but not usable as direct grounds for a judicial decision, with no direct legal consequence in the ordinary case.

### 🇨🇳 China — five tiers of legal hierarchy

The great majority of Chinese AI governance rules sit at the **third tier, as ministerial regulations** (部门规章; including the various "interim measures" 暂行办法 and "management provisions" 管理规定). They are **not** statutes of the National People's Congress, and **not** administrative regulations of the State Council. The word "interim" (暂行) is not an indicator of rank — it is a drafting convention the legislature uses to preserve room for future policy adjustment.

| Tier | Issuing body | Hard / soft | Actual role in AI governance | Representative rules |
| --- | --- | --- | --- | --- |
| 1. Statute (法律) | National People's Congress and its Standing Committee | Hard | **Upstream law**; penalty provisions in ministerial rules often invoke tier-1 statutes | CSL (2017), DSL, PIPL (2021) |
| 2. Administrative regulation (行政法规) | State Council | Hard | Elaborates on upstream law; used when coordination across multiple ministries is required | *Regulations on the Protection of Minors Online* (2024) |
| 3. Ministerial regulation (部门规章) | Ministries individually or **jointly** | Hard | **Main theatre of AI governance**: agile response, scenario-specific rulemaking | Algorithmic Recommendation Provisions, Deep Synthesis Provisions, Interim Measures on Generative AI, Labelling Measures, Measures on Humanised Interaction |
| 4. Normative document (规范性文件) | Ministries / special committees | Soft | **Policy orientation**; does not impose direct obligations on firms but shapes compliance practice | *New Generation AI Governance Principles*, *AI Safety Governance Framework* 1.0/2.0, *New Generation AI Development Plan* |
| 5. Technical standard (技术标准) | Standards committees / State Administration for Market Regulation (SAMR, 市监总局) | Soft (some "de facto hard") | **Filing threshold**: if you cannot pass the standard, you cannot offer the service to the public | TC260-003-2024; GB 45438-2025 (mandatory national standard) |
| **+ Subnational** | Local people's congresses / governments | Hard (within jurisdiction) | **Pilot-and-test**: experimental institutions are frequently absorbed at the national level | Shenzhen *Regulations on the Promotion of the AI Industry* (2022, the first) — Shanghai and Beijing have followed |

**Observation.** Chinese AI governance rules are issued at high density (most cycles run 3–12 months), but the cost is a **relatively low legal tier**, which makes it difficult for firms to assess the stability of rules and the discretionary edges of enforcement. The **Central Cyberspace Affairs Commission** (中央网信委, a Party Central deliberative and coordinating body) acts as an adjudication forum for cross-ministerial conflicts. The pattern of **subnational experimentation → national absorption**, with Shenzhen as the leading example, is a hallmark of Chinese agile governance (see Xue Lan 薛澜, Zhang Linghan 张凌寒).

### 🇺🇸 United States — four categories of normative source

There is **no comprehensive federal AI statute**. The vacuum is filled by three compensating tracks: presidential executive orders, state legislation, and soft law / technical frameworks.

| Source | Issuing body | Hard / soft | Actual role in AI governance | Representative rules |
| --- | --- | --- | --- | --- |
| Federal legislation | Congress | Hard | **Vacuum**: no comprehensive or specialised federal statute regulating AI systems themselves; AI compliance relies entirely on "analogical application" by agencies and courts of general laws such as FTC Act §5, Title VII, the ADA, and the FCRA | — (see "actual role" column) |
| Executive order | President | Hard (half-life ≤ one term) | **First-tier compensation**: fills the legislative vacuum, but flips with party alternation; binding only on the executive branch | EO 14110 (Biden 2023, revoked) → EO 14179 (Trump 2025-01 reversal) → EO 14365 (2025-12, attempted pre-emption of state law) |
| State legislation | State legislatures | Hard (within state) | **Second-tier compensation**: fills the federal vacuum; fragmented into four parallel logics; the constitutional challenge to EO 14365 originates on this track | Colorado SB 24-205 (comprehensive high-risk statute, effective 2026-06), California SB 53 (frontier model transparency), Texas TRAIGA, Illinois HB 3773, NYC Local Law 144 |
| Soft law and technical frameworks | NIST, agencies, the White House | Soft (with de facto hardening via common law) | **Third-tier compensation**: enters tort and regulatory enforcement through "reasonable care" standards; multiple state safe-harbor provisions elevate it to a compliance presumption | NIST AI RMF 1.0, AI 600-1 GenAI Profile, OMB M-25-21 / M-25-22, 2023 White House voluntary commitments, ISO/IEC 42001 |

**Observation.** The hard-law / soft-law boundary in the United States is **extremely unstable**: executive orders can be revoked by the next president, while soft law hardens *de facto* through common-law "reasonable care" standards and state-law compliance presumptions. **EO 14365's pre-emption attempt** is the most consequential structural conflict in US AI governance for 2025–2026.

### 🇪🇺 European Union — a two-track system of regulation plus harmonised standards

The EU is the **most systematised** of the three jurisdictions: hard law sets "essential requirements", soft law (harmonised standards) translates those requirements into verifiable technical specifications, and once cited in the OJEU they trigger a **presumption of conformity**.

There are **only two core tiers**: legislation sets essential requirements; standards translate those into testable technical specifications. This has been the standard paradigm since the EU's **New Legislative Framework of 1985**, and the AI Act adopts it wholesale (Article 40: conformity with harmonised standards = presumption of compliance).

| Type | Hard / soft | Role | Representative rules |
| --- | --- | --- | --- |
| **Secondary legislation** (Regulation / Directive) | Hard (regulations directly applicable; directives require Member-State transposition) | Sets "essential requirements" while leaving "how to comply" open | AI Act (Reg 2024/1689), GDPR, DSA, DMA, Data Act, Product Liability Directive, DSM Copyright Directive, NIS2 |
| **Harmonised standards (hEN)** | Soft (conformity presumption after OJEU citation; effectively hardens) | Translates essential requirements into testable technical specifications | Ten work areas under CEN-CENELEC JTC 21; prEN 18286 is the first AI Act hEN to reach the Enquiry stage |

**Additional soft-law instruments** (implementation mechanisms within the two tiers, not separate layers):

- **Codes of Practice** (such as the [GPAI Code of Practice](/rules/eu/gpai-code-of-practice/)): authorised by Article 56 of the AI Act; signing yields a compliance presumption. They function as a **transitional compliance path while the relevant hENs are not yet in place**.
- **Commission guidelines / AI Office guidelines:** fill textual ambiguities and signal enforcement expectations (prohibited-use guidelines, GPAI guidelines, etc.).
- **Member-State DPA / MSA enforcement:** the operational machinery that lands hard law in practice ([France CNIL](/subnational/eu/france-cnil-ai/), [Spain AESIA](/subnational/eu/spain-aesia/), Italy's Garante, Ireland's DPC, and so on).

**Observation.** The **predictability** of EU AI governance comes from the clean division of labour between the two tiers: legislation sets the objectives, standards set the methods. The **Brussels Effect** likewise propagates mainly through this combination. The **Digital Omnibus Proposal** (2025-11), which suggests a 16-month postponement of the high-risk provisions, is the single largest regulatory uncertainty for 2026.

### 🔶 Boundary-case register

Items that resist easy classification are logged separately: [Legal-hierarchy boundary cases](/methodology/citation-disclaimer/#hard-soft-edge-cases). Currently recorded:

- **Chinese mandatory national standards** (GB 45438-2025): classified as soft law here, but their mandatory character is flagged in the text.
- **US NIST AI RMF:** cited as frequently as hard law but voluntary in nature; classified as soft law, with *de facto* hardening through multiple states' compliance presumptions.
- **EU GPAI Code of Practice:** soft law carrying a conformity presumption.
- **US executive orders:** classified as hard law (binding on the executive branch), with a note that they apply only to the executive branch and may be revoked by the next president.
- **The "interim" naming convention in Chinese ministerial regulations:** does not affect legal tier; merely reflects the drafter's reservation of policy-adjustment space.

---

## 3. Company attribution rules {#company-attribution}

To keep the "corporate practice" axis internally consistent, we codify the common attribution ambiguities as follows.

| Question | Our treatment | Current status |
| --- | --- | --- |
| OpenAI and Microsoft | OpenAI listed separately; Microsoft listed separately in principle (product policies that invoke OpenAI models are attributed to Microsoft) | Only OpenAI has a page to date; Microsoft will be added as needed |
| Anthropic and Amazon / Google | Anthropic listed separately. Amazon's and Google's investment relationships are noted on the Anthropic page, not merged | Page published |
| Google DeepMind | Merged into one entry, with Alphabet group-level policies as a second-level section | Page published |
| Meta (Facebook / Instagram, etc.) | Meta as one entry, with product-level policies as sub-sections | To be added as needed |
| ByteDance and TikTok | ByteDance as one entry (including Douyin, Doubao, Volcano Engine, TikTok). TikTok is treated **as a ByteDance sub-section for now**; if it publishes an independent AI policy aimed at overseas regulators in the future, it will receive its own page | Page published (includes TikTok) |
| Alibaba and Ant Group | Alibaba as one entry (including Tongyi Qianwen, Quark); Ant Group is independent in principle, but **no standalone page while it has not published independent AI models or policies** | Alibaba page published; Ant Group not yet |
| DeepSeek and High-Flyer | DeepSeek as one entry; High-Flyer noted at the top of the page as the investor | Page published |
| Zhipu, Baidu, MiniMax, Moonshot, Tencent | Each as a separate entry | Pages published |
| xAI and X Corp / Tesla | xAI as one entry; X Corp (formerly Twitter) platform policies are out of scope (not an AI-product entity) | xAI page published |
| **NVIDIA** (infrastructure layer) | Listed separately: not an AI-model company but a key upstream / downstream player, categorised on its own | Page published |

**Guiding principle.** An entity that independently publishes its own AI policy or model gets its own entry; an entity that does not and is regulated under its parent's policy is treated as a sub-section of the parent. **TikTok and Ant Group are currently attributed to their parents**; they will receive standalone pages if and when they publish independent AI policies.

---

## 4. Scope of corporate-practice coverage {#corporate-scope}

For each company covered, the site **tracks on an ongoing basis** the following five document types:

1. **Usage / Acceptable Use Policy** — what users may and may not do with the model.
2. **Model Card / System Card** — capabilities, training data, evaluation.
3. **Safety Framework** — responsible scaling, preparedness, frontier risk management.
4. **Transparency Report** — periodic disclosures (data requests, content moderation, etc.).
5. **Red-team and evaluation disclosures** — third-party evaluations and internal red-team results.

### Current implementation stage

The site is built **incrementally**:
- **Stage 1 (complete):** an *index.md* comprehensive analysis page for each company — company overview, in-depth reading of the safety framework, analysis of self-regulatory posture, regulatory-compliance position, comparison with peers.
- **Stage 2 (partially complete):** five standalone **subpages** per company, each archiving specific documents (with snapshot date, original URL, excerpts of key provisions, version history, and scholarly critique).

Of the 13 companies currently covered:
- **Five** frontier labs (Anthropic, OpenAI, Google DeepMind, ByteDance, DeepSeek) have substantive analysis across all five subpages (Usage Policy, Model Card, Safety Framework, Transparency Report, Red-team and Evaluation Disclosures), about 1,000–1,300 lines each.
- **Eight** (Mistral, Baidu, Alibaba, xAI, Zhipu, Tencent, Moonshot, MiniMax, NVIDIA) are currently presented through their comprehensive index pages; whether to expand them into subpages depends on the company's activity level.

### Shared fields across the five document types (once subpages are filled)

```
- snapshot date: date of this archive
- original URL: source address
- archived copy: link to the PDF archived on this site (stored in public/archives/)
- summary: a summary of up to 500 characters
- key terms: key provisions listed item by item (quoted, not paraphrased)
- version history: a timeline of major revisions
```

### Exception: infrastructure-layer companies

Companies such as **NVIDIA**, **which do not provide AI models but are essential upstream or downstream players**:
- do not fit the full five-document structure (they do not publish a Safety Framework, Model Card, etc. in the usual sense);
- are covered instead through **fields appropriate to their role**: export-control compliance, End User License Agreements, government lobbying positions, infrastructure-focused documents such as Project Digits, and so on.

### Editorial principle

**No evaluative framing.** State facts, enumerate differences, avoid value judgements such as "Company X is inadequate" or "should be strengthened".

---

## 5. Primary text and translation policy {#translations}

### No in-house full translations

Full translation of legal text is high-risk work: terminological choice, tense, and scope demarcation can each mislead any subsequent citer. The site does **not translate full statutory text in-house**. Instead:

1. **Chinese originals** track the official publication, with PDF copies archived under `public/archives/`.
2. **English translations** are linked to authoritative secondary sources recognised in the scholarly community:
   - **China Law Translate** (Jeremy Daum, Paul Tsai China Center, Yale Law School) — the gold standard for translations of Chinese legal text.
   - **Stanford DigiChina** — selective coverage, high quality.
   - **Regulations.AI** — structured index.
   - **EUR-Lex** official multilingual versions (English, French, German, and so on) — the statutory translations of EU law.
   - **Congress.gov** and state legislative sites — US statutes are themselves in English.
3. Rule pages list every primary source and authoritative translation in a dedicated "Original text and translations" table.

### Exception: auxiliary translations of key provisions

For **analytical purposes**, the site permits itself to carefully translate a small number of **key provisions** (usually no more than five) within topic pages or the "core obligations" / "contested readings" sections of Rule pages, to support the argument. Such auxiliary translations must:

- Carry an explicit note: "Translation by this site; for reference only. The official or authoritative translation prevails."
- Indicate the corresponding article number and source paragraph (to aid verification).
- Follow the site's terminology table (see [Citation and disclaimer](/methodology/citation-disclaimer/)).

### AI-assisted translation disclosure

Any passage drafted with an LLM and then retained after human review **must be explicitly marked on the page**. Uncorrected AI output **is not published**.

---

## 6. Update cadence and version management {#versioning}

**AI governance moves far faster than conventional areas of law.** A single new ministerial regulation can reshape compliance practice within weeks (the 2026-04-10 *Measures on Humanised Interactive Services* required industry response within 30 days of issuance); a US state law's effective date can be advanced or pushed back during a legislative session. The site therefore adopts a **uniform two-week review cadence**:

- **Hard-law pages:** **reviewed every two weeks.** Any amendment is reflected immediately; superseded versions are not deleted — they are marked `superseded: true` with their original URLs preserved.
- **Soft-law pages:** **reviewed every two weeks** (same as hard law).
- **Corporate-practice pages:** **reviewed every two weeks**; major company updates (such as an Anthropic RSP upgrade or a new OpenAI Model Spec) are reflected **within a week**, with a `snapshot_date`.
- **Topic analysis pages:** **reviewed every two weeks.** The topic analysis itself is relatively stable, but the Rules and corporate documents cited evolve continually; the review ensures cross-references remain synchronised.
- **Methodology and inclusion pages:** **reviewed every two weeks** to keep the methodology aligned with new content.

**Version display at the bottom of each page** uses Starlight's `lastUpdated` feature, which is based on Git commit time. Significant revisions are also recorded in the [Updates log](/updates/).

**Git history** serves as the complete version control: every page's full revision history is visible on GitHub.
