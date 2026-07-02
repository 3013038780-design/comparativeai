---
title: Citation and disclaimer
description: How to cite the site, and the disclaimers you must read
sidebar:
  order: 1
---

## How to cite

### Suggested citation (APA style)

> Anonymous author. (2026). *Entry title*. Comparative AI. Retrieved YYYY-MM-DD, from https://comparativeai.org/path

### Chinese academic format

> Comparative AI. 《Entry title》[EB/OL]. (accessed YYYY-MM-DD). https://comparativeai.org/path

### Always include

- **The access date.** Content on the site is updated on an ongoing basis; cite the specific version you read.
- **The "last updated" stamp at the foot of the page.** This is the Git commit time and functions as a version marker.
- **If you are citing a boundary case or a contested classification** (for example, our treatment of Chinese mandatory national standards as soft law), please also footnote our [Methodology §2](/methodology/#hard-vs-soft).

---

## Disclaimers

### 1. The site is not legal advice

The contents of the site are a personal academic compilation and **do not constitute legal advice, compliance consulting, or regulatory interpretation of any kind**. For any specific compliance question, please consult a licensed attorney or legal counsel in the relevant jurisdiction.

### 2. Not the position of any institution

The author's day job has **no direct connection** to the contents of this site. The site is a personal research project and **does not represent, act on behalf of, or reflect** the views of the author's employer, collaborators, or any third party.

### 3. Treatment of corporate policy

Summaries and archives of Usage Policies, Safety Frameworks, and other corporate documents:

- draw only on **documents the company has publicly released**;
- carry explicit `snapshot_date` markers and do not claim to reflect the present state;
- **avoid evaluative framing** (no "inadequate", "should be strengthened", and so on);
- if a company considers any description inaccurate, please open a GitHub Issue and we will correct it.

### 4. Treatment of legal text

- **The original text is authoritative** in every case. Translations are aids to reading, not substitutes.
- Uncorrected machine translation **is not published**.
- AI-assisted translations are explicitly marked.

### 5. Timeliness

- The legal environment evolves quickly. Effective dates, amendment status, and enforcement cases may all lag behind.
- If you spot outdated information, please flag it via an Issue; you will be credited in the next update.

---

## Complaints and correction requests

If you are:

- **An official issuing body for a legal text** and consider our translation or summary inaccurate — please file an Issue on [GitHub](https://github.com/3013038780-design/comparativeai/issues) with the original-text reference for cross-checking.
- **A company whose policy is described** and consider the description inaccurate — same channel; we will prioritise the review and respond within seven days.
- **A researcher** who has found an error or would like to contribute material — Issues and PRs are welcome.

---

## Licensing

- **Content** (all original text on the site): CC BY 4.0 — may be redistributed and cited with attribution.
- **Code** (the site's Astro templates, styling, and configuration): MIT.
- **Primary legal text quoted on the site:** copyright belongs to the respective official bodies; the site's use is within the bounds of fair use (quotation and excerpt).
- **Corporate documents quoted on the site:** copyright belongs to the respective companies; the site archives and summarises.

---

## Boundary-case register {#hard-soft-edge-cases}

The following items have a contested hard-law / soft-law classification in the scholarly or practical literature. The site's treatment is logged here, and any new boundary case encountered will be added.

| Item | Our classification | Contested point | Our reasoning |
| --- | --- | --- | --- |
| Chinese mandatory national standards (GB) | Soft law | Mandatory national standards have legal force; some scholars argue they should be classified as hard law | To keep source-of-promulgation consistent across jurisdictions ("issued by a legislature / administrative body" vs. "issued by a standards body"), we place all standards on the soft-law side and flag their mandatory character in the specific entry |
| NIST AI RMF | Soft law | Cited extensively by federal agencies and regulators, with de facto binding force | Fundamentally a voluntary framework with no consequence for non-compliance |
| EU GPAI Code of Practice | Soft law | Signing triggers a conformity presumption | Signing remains voluntary; non-signing does not constitute a breach |
| US executive orders | Hard law | Bind only the executive branch; revocable by the next president | They are genuinely binding on the executive branch; classified as hard law but with the scope of effect noted |

For any new boundary case, we will discuss on [GitHub Issues](https://github.com/3013038780-design/comparativeai/issues) before merging a decision.
