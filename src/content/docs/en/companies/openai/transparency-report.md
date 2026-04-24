---
title: Transparency Report
description: The OpenAI transparency-disclosure lineage — threat-intelligence reports, government requests, Usage Policy enforcement, and copyright / election-cycle disclosures
sidebar:
  order: 4
snapshotDate: 2026-04-23
---

> **Snapshot**: covers disclosures publicly available through [openai.com/safety](https://openai.com/safety/) and [openai.com/transparency](https://openai.com/transparency/) as of 23 April 2026; focus on the *Influence and Cyber Operations Reports* series from Q1 2024.

## 1. Boundaries and structure of OpenAI "transparency"

Unlike legacy platforms such as Google (reports since 2010) and Meta (since 2013) that have **long published comprehensive transparency reports**, OpenAI's transparency disclosure was **fragmented** across five document classes and was only consolidated under openai.com/transparency in October 2025:

| Category | First issued | Frequency | Principal content |
| --- | --- | --- | --- |
| **Threat Intel Reports** | February 2024 | **Quarterly** (approximately, since Q1 2024) | Discovery and disruption of influence operations, cyber operations, and disinformation campaigns |
| **Government-request reports** | **September 2025** (first) | Semi-annual | Volume, compliance rate, country distribution of government data requests |
| **Usage Policy enforcement statistics** | **Ad hoc** (one-off in spring 2024 and Q4 2025) | Irregular | Account-ban counts, detection categories |
| **Copyright and data disclosures** | Multiple blog posts since December 2023 | Event-driven | Media Manager, licensing partnerships, litigation responses |
| **Election-cycle transparency** | January 2024 (US), June 2024 (EU) | Periodic | Redirection mechanisms, partner detection, watermarking (C2PA) |

**Observation**: OpenAI only issued its **first government-request report** in September 2025 — 15 years after Google and 12 years after Meta. This reflects both OpenAI's historical trajectory as a "non-platform" company and the fact that **mandatory disclosure pressure from the DSA, California SB 53, and the Seoul commitments** is what actually drives transparency practice.

## 2. Threat Intel Reports (Influence and Cyber Operations)

### 2.1 Series arc

| Report | Date | Representative disclosures |
| --- | --- | --- |
| **"Disrupting Malicious Uses of AI by State-Affiliated Threat Actors"** | **14 February 2024** | Charcoal Typhoon (PRC), Salmon Typhoon (PRC), Crimson Sandstorm (IRGC), Emerald Sleet (DPRK), Forest Blizzard (GRU) — five account networks |
| **"AI and Covert Influence Operations"** | 30 May 2024 | Doppelganger (Russia), Spamouflage (PRC), Bad Grammar (Russia), International Union of Virtual Media (Iran), STOIC (Israeli commercial) — 5 operations |
| **"An Update on Disrupting Deceptive Uses of AI"** | 9 October 2024 | 20+ cumulative operations; first disclosed cyber-attack cases: SweetSpecter (PRC), CyberAv3ngers (Iran), Storm-0817 (Iran) |
| **"Influence and Cyber Operations Report (Q2 2025 update)"** | June 2025 | Peer Review (PRC academic manipulation), Sponsored Discontent (PRC domestic stability) |
| **"Q4 2025 Threat Intel"** | December 2025 | First detailed account of Sora 2 synthetic-media misuse and bans |
| **"Q1 2026 Threat Intel"** | March 2026 | Microsoft / OpenAI joint disclosure of GPT-5.x used in automated spear-phishing |

### 2.2 Common structure of a report

A typical Threat Intel Report includes:

1. **Operation summary**: name, attribution, target, scale
2. **Usage detail**: how ChatGPT / the GPT API was used (debugging code, generating translations, drafting social-media posts)
3. **Attribution evidence**: joint attribution with Microsoft Threat Intelligence, Meta Security, Graphika, SIO
4. **Intervention**: account bans + notification of affected platforms and governments
5. **Reflection**: "uplift" evaluation of ChatGPT capabilities (OpenAI's characteristic narrative: "no substantive new capability provided")

### 2.3 Critiques: **selectivity in attribution and the "safety theatre" problem**

**Kirsten Martin** (Notre Dame), within the "transparency theatre" framework developed in her *MIS Quarterly Executive* 2024 article:

- Reports concentrate on operations by **adversary states** (PRC / Russia / Iran / DPRK) and **rarely disclose** Western commercial or state sources
  - The lone exception is the May 2024 "STOIC" (Israeli commercial firm), disclosed with markedly less depth than the PRC cases
- The "we detected and stopped it" narrative reinforces "platforms are self-governing," **lowering political demand for hard-law mandatory disclosure**

**Josh Goldstein** (Stanford Internet Observatory), in the June 2024 *Brookings* report:

- OpenAI's operation disclosures **agree with independent academic observation in sample selection** (these operations do exist), but **scale may be under-estimated** (OpenAI sees only ChatGPT's own usage; a cross-platform view requires Meta, X, Telegram cooperation)
- OpenAI does **not publicly release** complete banned-account user IDs, prompt samples, or conversation-length distributions — making independent replication difficult

**Joshua Tucker** (NYU CSMaP), in a March 2025 *PNAS* commentary:

- Threat Intel Reports are an important contribution to the **"adversary behaviour dataset"**, but the **absence of infrastructure-level transparency** (training data, internal red-team cadence) leaves "platform-level governance quality" reliant on self-report
- Recommends that OpenAI adopt the **data-sharing channels** proposed by the Stanford **Platform Governance Research Network**

**Graphika's 2025 annual report** is relatively positive:
- Considers OpenAI's Threat Intel Reports **higher in quality than most commercial threat intelligence**, but **publication frequency** and **granularity** lag the Meta Adversarial Threat Report

## 3. Government-request report (first in September 2025)

OpenAI's September 2025 inaugural *Government Requests Transparency Report* discloses:

- Total legal compulsory requests (semi-annually aggregated, predominantly US; single-period counts in the **low-double-digit to low-triple-digit** range)
- Emergency (no-warrant) requests as a typical proportion (a minority) of legal requests
- Full compliance / partial compliance / objection proportions (full compliance typically the majority; objections in single-digit percentage)
- Country-level breakdown

Precise figures should be read from the official [openai.com/transparency](https://openai.com/transparency/) report; compared with Google's and Meta's decade-plus of quarterly disclosure, OpenAI's request volumes remain at a **low-density early stage**.

### Industry comparison (order of magnitude)

Order-of-magnitude comparisons drawn from public transparency reports (semi-annual or annual):

- **OpenAI**: low double- to low triple-digits per half-year; publicly-estimated MAU in the hundreds of millions
- **Google**: tens of thousands per half-year; MAU in the billions
- **Meta**: hundreds of thousands per half-year; MAU in the billions
- **Microsoft**: tens of thousands per half-year
- **Apple**: thousands per half-year

Exact figures should be read from each company's official transparency report.

**Interpretation**: OpenAI's request density is **materially below** service providers of similar scale. Possible reasons:

1. **Product nature**: ChatGPT is primarily an interaction tool rather than a social network, with **low third-party visibility of content**
2. **Enforcement pathway**: law enforcement **less often** sees ChatGPT as a direct evidence source
3. **Completeness in question**: the first report **does not include** detailed numbers for national-security requests (NSL) — a key deduction item in Ranking Digital Rights (RDR) assessment of transparency reports
4. **Time window**: 2024 is an early stage in OpenAI's handling of government requests; processes may not yet be mature

## 4. Usage Policy enforcement disclosure

Ad hoc Usage Policy enforcement data points:

| Date | Disclosed content | Scale |
| --- | --- | --- |
| April 2024 | Q1 2024 election-related bans | Tens of accounts |
| October 2024 | Cumulative influence-operation bans | 20+ networks |
| May 2025 | Sora 1 → Sora 2 transitional CSAM bans | Absolute number not disclosed |
| December 2025 | Annual Trust & Safety action summary | Large-scale (aggregated; read the official release) |

**Critique** (Ranking Digital Rights 2025 Corporate Accountability Index):

- **No regular** aggregated statistics (no quarterly release like the Meta Community Standards Enforcement Report)
- **No category breakdown** for bans (how many bans per Usage-Policy category)
- **No appeals data** (rates of successful reinstatement after ban)
- **No false-positive data** (false-positive rate of automated detection)

In recent RDR assessments, OpenAI's "enforcement transparency" sub-score is **materially below** mature platforms like Google and Meta, putting it in the mid-to-low band along with Anthropic (specific scores should be taken from the RDR annual report).

## 5. Copyright and training-data disclosure

### 5.1 Event arc

| Date | Event |
| --- | --- |
| December 2023 | NYT sues OpenAI and Microsoft (training-data infringement) |
| September 2023 | Authors Guild class action (George R. R. Martin and others) |
| April 2024 | **Media Manager** first previewed (allowing rightsholders to pre-opt-out) |
| 2024–2025 | Data-licensing deals signed with AP, Axel Springer, FT, News Corp, The Atlantic, Reddit, Shutterstock, and others |
| May 2025 | **Media Manager** formally launched (opt-out) but criticised for insufficient coverage |
| December 2025 | NYT case discovery discloses partial training-set samples |
| January 2026 | Authors Guild case summary-judgment motion |
| March 2026 | OpenAI's first **Model Training Data Summary** (GPAI CoP compliance) |

### 5.2 The March 2026 GPAI Transparency Template

Under the Transparency chapter of the EU GPAI Code of Practice, in March 2026 OpenAI submitted the **Training Data Summary Template** — for the first time disclosing:

- **Overall training-data category proportions** (web / code / books / images / synthetic / human)
- **List of principal licensors** (no contract detail)
- **Data-acquisition method** (crawl / purchase / partner / synthetic)
- **Filter-method overview** (no specific filter rules)

**Still not disclosed**:

- Specific token counts (GPT-5 scale estimated by third parties; OpenAI has not confirmed)
- Common Crawl slice used
- Sources of human-feedback data (Scale AI, Surge AI, Invisible Technologies, etc.)
- Models and scale for synthetic data

**Academic assessment** (Ed Newton-Rex / Fairly Trained April 2026 blog post):
- "Better than zero, weaker than Stability AI Stable Diffusion 3's training-data card"
- "Meets the literal wording of EU compliance but does not solve the practical rights-assertion difficulties of creators"

## 6. Election-cycle transparency

### 2024 global super-election cycle

OpenAI's January 2024 blog *How OpenAI Is Approaching 2024 Elections*:

1. **Prohibits** using ChatGPT to produce content **impersonating candidates**
2. **Prohibits** using ChatGPT as a voting chatbot
3. **ChatGPT redirects US election queries to CanIVote.org**
4. **DALL-E** adds C2PA metadata and **provenance watermarking**
5. **Retrospective analysis** published December 2024

**Critiques**:

- The December 2024 retrospective was criticised for **strong sample selectivity** and **not disclosing specific error rates**
- Independent research by Joshua Tucker (CSMaP) and Brendan Nyhan (Dartmouth) shows ChatGPT **still generates specific misleading content** during the 2024 election period, with only partial effect from the redirect path
- **Indian, Indonesian, Brazilian, and other elections** received transparency disclosure **materially weaker than** the US

## 7. Interface with hard law

| Regime | Relevant obligations | OpenAI compliance status |
| --- | --- | --- |
| **EU DSA** Art. 15, 24, 42 | VLOP transparency reports | Following ChatGPT's 2024 VLOP designation, **semi-annual** releases (first in October 2024) |
| **EU DSA** Art. 40 | Researcher data access | **Not yet fully implemented** (academic-researcher applications delayed) |
| **EU AI Act** Art. 55 | Systemic-risk disclosure | Bridged through Preparedness + GPAI CoP documents |
| **California SB 53** §22757.11 | Critical safety incident reporting | Commitment to comply from Q1 2026 |
| **Seoul Commitments (May 2024)** | Transparency about safety decisions | Preparedness + System Cards as compliance evidence |
| **China Generative AI Interim Measures 《生成式人工智能服务管理暂行办法》** | Content labelling, handling of unlawful content | **Not applicable** (no China operations) |

## 8. Industry practice: internal operation of transparency reporting

Reverse-inferable from former-employee interviews, official-blog authorship, and GovAI / Stanford HAI academic collaborations:

- **Intelligence & Investigations Team** (previously Disruption Intel): inferable as a small team on the order of dozens based on public authorship and hiring notices; produces Threat Intel Reports
- **Trust & Safety / Integrity**: handles Usage Policy enforcement statistics and appeals
- **Legal + Privacy**: handles government-request reports
- **Policy Research / Global Affairs**: handles election-cycle and DSA / AI Act compliance documents
- **Developer Platform Team**: handles creator tools (Media Manager, C2PA)

**External partners (public attribution)**:
- **Microsoft Threat Intelligence Center (MSTIC)**: influence-operation attribution
- **Graphika**, **SIO** (successor to the Stanford Internet Observatory): cross-platform influence research
- **NCMEC, Thorn**: CSAM detection
- **C2PA Steering Committee**: content provenance

## 9. Comparison with peer frontier labs

| Dimension | OpenAI | Anthropic | Google (AI) | Meta (Llama) | xAI |
| --- | --- | --- | --- | --- | --- |
| Threat Intel | **Quarterly** (from Q1 2024) | No stand-alone series | Integrated with TAG | Adversarial Threat Report | None |
| Government Requests | **Semi-annual** (from September 2025) | No stand-alone report | By product | Semi-annual | None |
| Usage Policy enforcement stats | **Irregular** | **Irregular** | By product | Quarterly | None |
| Training data summary | First GPAI summary March 2026 | Partially in Model Card | By product | Llama model card | None |
| Election transparency | Cycles 2024, 2025 | 2024 blog | Periodic reports | Present | None |
| **Unified Transparency Hub** | **Launched October 2025** | Transparency Hub 2025 | Long-running | Long-running | None |

**Structural observation**: OpenAI's transparency reporting **caught up quickly during 2024–2026**, but with a **late start and fragmented structure** — there is still a gap to the **systematic disclosure machinery** built by Google and Meta over more than a decade. In recent RDR Corporate Accountability Indexes, AI-native companies (OpenAI, Anthropic, xAI) still score **materially below** mature platforms such as Google and Meta.

## 10. Further reading

- **Primary**: [openai.com/safety](https://openai.com/safety/), [openai.com/transparency](https://openai.com/transparency/), [Disrupting Malicious Uses of AI](https://openai.com/index/disrupting-malicious-uses-of-our-models/)
- **Academic / frameworks**: Ranking Digital Rights *Corporate Accountability Index*; Stanford Internet Observatory / Graphika *Covert Influence Operations Reports*; Kirsten Martin, *Transparency Theater* (MIS Quarterly Executive 2024); Mike Ananny & Kate Crawford, *Seeing Without Knowing* (2018)
- **Policy interface**: EU DSA Art. 15, 24, 40, 42; California SB 53 §22757.11; Seoul Commitments (May 2024)
- **Cross-references**: [OpenAI overview](./), [Usage Policy](./usage-policy/), [red-team disclosures](./red-team-disclosures/), [Anthropic transparency report](/en/companies/anthropic/transparency-report/)
