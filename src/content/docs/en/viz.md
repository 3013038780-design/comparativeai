---
title: Visualizations
description: Five interactive charts — the patterns in the prose, rendered at a glance
sidebar:
  order: 6
  label: Visualizations
---

Regulatory writing is text-heavy. This section offers **five interactive visualizations**
that compress the first-hand rules, data, and temporal relationships scattered across
the site into diagrams you can read at a glance.

## The five charts

<div class="viz-index">

### [A · China's AI Regulation · Evolution Timeline](/en/viz/timeline/)

From the 2017 *Next-Generation AI Development Plan* to the 2026 anthropomorphic-interaction
and digital-virtual-human measures, a horizontal timeline colored by legal tier and tagged
by topic. Scroll sideways; click any node for a summary.

---

### [B · Three-Jurisdiction Legislative Density Heatmap](/en/viz/heatmap/)

X-axis: 2022–2026. Y-axis: four topics (risk / GPAI / data / labeling). Each cell
splits into three sub-cells for CN · US · EU. Saturation encodes rule count —
the chart shows at a glance **who moved first**.

---

### [C · US States · AI Legislation Activity](/en/viz/us-map/)

All 50 states + DC colored by approximate 2024–2025 AI-bill activity, laid out as
a tile cartogram (geographic grid). Flagship laws in California, Texas, Colorado,
and New York link to their dedicated pages.

---

### [D · EU AI Act · Four-Tier Risk Pyramid](/en/viz/risk-pyramid/)

Unacceptable / high / limited / minimal — the AI Act's core classification, shown as
an actual pyramid rather than a block of text. Click each tier for definition,
article references, examples, and application date.

---

### [E · China's AI Governance · Five-Tier Legal Hierarchy](/en/viz/china-hierarchy/)

Laws → administrative regulations → departmental rules → normative documents →
technical standards. An abstract hierarchy rendered as an expandable tree, with
every rule at each tier linked to its own page.

</div>

## Technical note

All five visualizations are implemented in **pure Astro + SVG + CSS** (no heavy JS
dependencies), with data drawn from
[`src/data/viz-data.ts`](https://github.com/3013038780-design/comparativeai/blob/main/src/data/viz-data.ts).
They share the semantic color palette used throughout the site:

- **Jurisdiction colors**: China · vermillion · US · navy · EU · ink-green
- **Tier colors**: a gradient from vermillion to ink-green across China's five tiers

All rule counts are **analytical proxies** (the major primary-source rules in this
corpus) rather than exhaustive counts. See [Methodology · Inclusion criteria](/en/methodology/#inclusion).
