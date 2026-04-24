---
title: NVIDIA
description: NVIDIA profile — the AI-infrastructure near-monopolist and focal point of U.S. export controls (2026-04-22)
sidebar:
  order: 5
  label: NVIDIA
snapshotDate: 2026-04-22
---

> **Note on inclusion**: NVIDIA **is not an AI model company**, but it is the **core supplier for AI
> infrastructure** — every frontier AI lab depends on its GPUs. NVIDIA's role in AI governance runs
> through **supply-chain controls**, not through a model-level safety framework. Its policy behaviour
> (response to export controls, government lobbying, open-source strategy for its in-house models) has
> far-reaching consequences for global AI governance.

## Company profile

- **Founded**: 1993
- **Headquarters**: Santa Clara, California, USA
- **CEO**: **Jensen Huang 黄仁勋**
- **Market capitalisation**: over **$4 trillion** at end-2025 (top global tier)
- **Core business**:
  - **Data Center GPUs** (AI training / inference): H100 / H200 / **B100 / B200 / GB200 (Blackwell)**
  - **CUDA ecosystem**: the de facto standard for AI software development
  - **Nemotron series**: NVIDIA's in-house open-source LLMs (smaller scale, ecosystem-focused)
  - **Omniverse / Isaac**: industrial simulation and robotics AI
  - **DGX / Project Digits**: integrated AI systems
- **Business model**: hardware sales + cloud services (DGX Cloud) + software subscriptions + verticals (automotive, robotics, healthcare)

## Strategic positioning: **"selling shovels" in the AI revolution**

### Institutional consequences of GPU near-monopoly

NVIDIA holds **over 90% share of the data-centre AI GPU market** (2025 data). This **near-monopoly
position** produces three institutional consequences:

1. **Export-control focal point**: U.S. export controls on China are **almost synonymous with controls on NVIDIA exports**
2. **CUDA lock-in**: the AI software ecosystem depends deeply on CUDA; open-source alternatives (AMD ROCm, Intel oneAPI) have progressed slowly
3. **Geopolitical pressure**: any U.S.–China AI policy shift **directly affects NVIDIA revenues**

### Leverage over frontier AI labs

- **Anthropic / OpenAI / Google DeepMind / xAI / Meta / Mistral** all run primarily on NVIDIA GPUs
- **The Stargate Project** (OpenAI + Microsoft + Oracle): multi-hundred-billion-dollar NVIDIA purchase commitments
- **Colossus** (xAI, Memphis): 100k+ H100s in a single cluster
- **Meta Llama training**: 2024–2025 single training runs used tens of thousands of H100s
- Chinese companies are **export-restricted** but **remain important NVIDIA customers** (via the downgraded H20, now the tariffed H200 variant)

## Deep dive: **the evolution of export controls and NVIDIA's two-sided game**

### Export-control timeline

| Date | Event |
| --- | --- |
| 2022-10 | BIS first restricts A100 / H100 exports to China |
| 2023 | **H800 / A800** (downgraded variants) launched to work around the controls |
| 2023-10 | BIS tightens further; **H800 / A800 also controlled** |
| 2024 | NVIDIA launches **H20** (further downgraded), China-specific |
| 2024-05 | H20 controls under discussion; NVIDIA holds large H20 inventory |
| 2025-01 | **Trump EO 14179** triggers a reassessment of export-control policy |
| 2025-10 | **B100 / B200 / GB200 (Blackwell)** placed under China export ban |
| **2025-12-08** | **Trump policy reversal**: **H200 exports to China permitted, with 25% tariff** |
| **2026-01-12** | **House passes the Remote Access Security Act** (369–22), extending export controls to cloud services |
| 2026-01 | **China pauses** new H200 orders from Chinese tech companies pending policy review |

### NVIDIA's "two-sided game"

- **Toward the U.S. government**: Jensen Huang is close to the Trump administration (multiple White House visits in 2025) and supports the AI Action Plan's **"export American AI"** vision
- **Toward the Chinese market**: continues launching **compliant downgraded variants** (H800 → H20 → tariffed H200), with **Chinese 2026 orders exceeding 2 million units** against NVIDIA inventory of 700k
- **Public stance**: Huang has repeatedly argued that export controls "are accelerating China's indigenisation" — **simultaneously voicing industry concern and preparing the ground for later loosening**

### Significance of the Remote Access Security Act (2026-01)

- **First extension of export controls to cloud services**: Chinese companies had been accessing **2,300+ Blackwell GPUs** by **renting offshore** (Lambda Labs, AWS international, etc.)
- House passed **369–22** on 2026-01-12 (rare bipartisan unanimity)
- If the Senate passes and the president signs → **cloud services become subject to export controls**, implicating NVIDIA DGX Cloud and other cloud providers
- **Deep consequences for AI governance**: compute as a governance lever is further strengthened

## NVIDIA's own AI self-regulation posture

### Differs from AI model companies

NVIDIA **has no RSP / Preparedness / FSF-equivalent safety framework** because its products are **hardware + general-purpose software**, not end-use AI systems.

**But NVIDIA has distinctive AI-governance tooling:**
- **CUDA License**: terms can include export-control compliance requirements
- **NIM / AI Enterprise**: enterprise AI deployment tools including content filtering and model monitoring
- **Nemotron open-source models**: NVIDIA's in-house open-source LLMs (Llama derivatives + small-scale in-house) — a "showcase tool" rather than a primary product

### Government-lobbying posture

- **2023 White House Voluntary Commitments**: **not signed** (NVIDIA is not an AI model provider)
- **Frontier Model Forum**: **not a member**
- **GPAI Code of Practice**: **not applicable** (NVIDIA does not provide GPAI-model-class primary products)
- **California SB 53**: no public position
- **EO 14179 / 14365**: **publicly supportive** (NVIDIA is a key player in the AI Action Plan)

### Project Digits and the "consumer-grade AI workstation"

In 2025 NVIDIA launched **Project Digits** (a personal AI computer at a $3,000 price point) aimed at individual developers:
- Can run 200B-parameter models locally
- Bypasses cloud-service export controls
- **Proliferation of compute at the consumer hardware layer** may **undermine the efficacy of binding compute thresholds** (EU 10^25 FLOP / California 10^26 FLOP)

## Policy document snapshot

| Type | Document | Link | Subpage |
| --- | --- | --- | --- |
| Usage policy | NVIDIA End User License Agreement (incl. export-control clauses) | [nvidia.com/en-us/about-nvidia/legal-info](https://www.nvidia.com/en-us/about-nvidia/legal-info/) | — |
| Model / tools | Nemotron series + NeMo framework | [developer.nvidia.com/nemo](https://developer.nvidia.com/nemo) | — |
| Export-control compliance | Export Compliance page | [nvidia.com/en-us/about-nvidia/export-compliance](https://www.nvidia.com/en-us/about-nvidia/export-compliance/) | — |

## Regulatory-compliance posture

- **United States**:
  - **BIS export-control focal point**: NVIDIA is **the principal object of U.S. AI export enforcement**
  - **CFIUS**: not applicable (NVIDIA is a U.S. company)
  - **EO 14179 / AI Action Plan**: supportive and a beneficiary
  - **DoD contracts**: yes, though not the main business line
- **China**:
  - **Downgraded-GPU supply** (H20 → tariffed H200) continuously adjusted
  - Anchor-customer relationships with Chinese cloud providers (Alibaba Cloud, Tencent Cloud, ByteDance Volcano Engine)
  - **Chinese 2026 procurement exceeds 2 million units** (H200 leading)
- **European Union**:
  - Delivered indirectly via AWS / Azure / GCP / Mistral Compute and other channels
  - Not directly subject to the AI Act (GPUs are not AI systems)
  - General regulation still applies (e.g. **CE marking** for electronic products)
- **Other export-restricted regions**: full embargoes in Russia, Iran, North Korea, Cuba, etc.

## Distinctive role in AI governance

**NVIDIA is not an AI model company, but its weight in AI governance is comparable to major AI labs:**

1. **Compute is the underlying lever of AI governance**: EO 14110's 10^26 FLOP threshold, California SB 53, and the EU AI Act systemic-risk GPAI provisions are all compute-indexed — **compute allocation, pricing, and access controls determine how effective AI-governance policy can be**
2. **Primary object of export-control policy**: BIS AI-chip controls targeting China and the Remote Access Security Act treat NVIDIA as the principal regulated entity
3. **Key intermediary in geopolitical dynamics**: the material foundation of U.S.–China AI competition
4. **Ecosystem lock-in**: CUDA's de facto standard status means any AI-governance measure must reckon with CUDA compatibility

**Conclusion**: without understanding NVIDIA's role in the AI supply chain, one cannot understand how
contemporary AI governance actually operates.

## Company posture, in brief

- **Single-vendor dominance in AI infrastructure**; the foundation of the global AI industry
- **A beneficiary of Trump deregulation and the acceleration narrative**
- **Navigates both sides of export controls**: publicly supportive of policy (Huang's lobbying) while continuously launching compliant downgraded products
- **Does not take the safety-framework path**: as a hardware supplier, not a direct participant in model-layer self-regulation
