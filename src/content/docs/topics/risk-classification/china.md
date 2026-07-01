---
title: China — Risk Classification
description: China's de facto tiering — scenario-based rule-making, algorithm filing, and an unimplemented "classified and graded" principle.
sidebar:
  order: 2
  label: China
---

## Relevant rules

| Rule | Legal tier | Relationship to risk classification |
| --- | --- | --- |
| [*Generative AI Interim Measures*](/rules/china/generative-ai-interim-measures/) (2023) | Departmental rule | Article 3 contains the "classified and graded supervision" principle |
| [*Deep Synthesis Provisions*](/rules/china/deep-synthesis-provisions/) (2023) | Departmental rule | Sorts content by whether it "may cause public confusion" |
| [*Algorithmic Recommendation Provisions*](/rules/china/algorithm-recommendation-provisions/) (2022) | Departmental rule | Distinguishes services "with public opinion attributes or capacity for social mobilisation" from ordinary ones |
| [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/) | Technical specification | 31 risk categories; 90% safety pass rate |
| [*Science and Technology Ethics Review Measures (Trial)*](/rules/china/science-tech-ethics-review-measures/) (2023) | Departmental rule | Article 25 sets a list that triggers expert review |

## Three features of risk classification in China

### 1. There is a "classified and graded" principle, but no unified list

- Article 3 of the *Generative AI Interim Measures* states: 《生成式人工智能服务管理暂行办法》第三条 "对生成式人工智能服务实行包容审慎和分类分级监管" — i.e., "generative AI services shall be subject to inclusive, prudent, classified and graded supervision."
- Article 21 of the *Data Security Law* sets three tiers for data: **general / important / core**.
- As of Apr 2026, **no unified grading catalogue for "generative AI systems" has been issued**.

Result: classification exists in name; in practice it is produced by stacking **scenario-specific departmental rules**.

### 2. Scenario-based ≠ risk-tiered

In practice China's "tiers" are produced by peeling off scenarios and regulating each separately:

- **Deep synthesis** → one rulebook
- **Generative AI** → another
- **Algorithmic recommendation** → a third
- **"Public-opinion attributes / social-mobilisation capacity"** → heightened filing

This looks more like a **list of scenarios** than a risk-tier system. A unified cross-scenario intensity yardstick does not exist.

### 3. Filing (*bei'an*) as the de facto gatekeeper

- Models that meet certain capability or user-scale thresholds, or that carry public-opinion attributes, **must** complete algorithm filing.
- Filing review uses **TC260-003** as its yardstick, which functions as a **binary risk gate** (pass / fail).
- **Without a completed filing, a service cannot legally serve the public.**

This is the sharpest structural difference from the EU's four-tier approach: **EU tiers produce differentiated obligations; China's filing regime produces a yes-or-no answer.**

## The "list" in science and technology ethics review

Article 25 of the [*Science and Technology Ethics Review Measures*](/rules/china/science-tech-ethics-review-measures/) establishes an **ex-ante list** of research activities that must undergo expert re-review. The AI-related categories are:

- Algorithms with the capacity for social mobilisation or for shaping social consciousness.
- Automated decision-making in scenarios bearing on security or personal health.
- Human-machine integration systems with pronounced psychological or emotional influence.

This is the closest thing in China to the EU's "high-risk list", but it operates at the R&D stage, not at product launch.

## Comparison with the EU and the US

- **Versus the EU**: the EU has a single four-tier list; China does not. The EU looks at "systems", China at "service scenarios".
- **Versus the US**: China is more systematised at the regulatory-instrument level (multiple rules across sectors), but US state laws such as the [Colorado AI Act](/subnational/us/colorado-ai-act/) actually carry a clearer definition of "high-risk AI system".
