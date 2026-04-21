---
title: California SB 53 — Transparency in Frontier Artificial Intelligence Act
description: 加州 2025-09-29 签署、2026-01-01 生效；美国首部专门针对前沿 AI 安全和透明度的州法
ruleName: California SB 53 — Transparency in Frontier Artificial Intelligence Act (TFAIA)
issuer: California State Legislature (Senator Scott Wiener, D-San Francisco); 签署：Governor Gavin Newsom
level: state-law
binding: hard
effectiveDate: 2026-01-01
publishedDate: 2025-09-29
originalUrl: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53
relatedTopics:
  - frontier-gpai
  - risk-classification
snapshotDate: 2026-04-21
sidebar:
  label: California SB 53 (2026, 前沿 AI)
  order: 5
---

## 中文摘要

**Senate Bill 53 — 加州《前沿人工智能透明度法》（Transparency in Frontier Artificial Intelligence
Act, TFAIA）**，由 State Senator **Scott Wiener (D-SF)** 起草，州长 **Newsom 于 2025-09-29 签署**，
**2026-01-01 生效**。

**意义**：**美国首部专门针对前沿 AI 模型安全和透明度的州法**。在 SB-1047（2024 被 Newsom 否决）
之后，加州以更温和但更聚焦的方式进入前沿 AI 监管领域。

## 适用范围

### "Frontier Model" 定义

**"foundation model trained on a quantity of computing power greater than 10²⁶ integer or
floating-point operations (FLOPs)"**

→ 与 Biden EO 14110（已撤销）使用同一阈值。覆盖：
- GPT-4o / o3 / o4 系列（OpenAI）
- Claude Opus / Sonnet 系列（Anthropic）
- Gemini Ultra 系列（Google DeepMind）
- Llama 3+ 系列（Meta）
- Grok 系列（xAI）

### "Large Frontier Developer"

年营收 **≥ $500M** 的前沿模型开发者承担**强化义务**。

## 核心义务

### 1. 前沿 AI 框架（Framework）披露

大型前沿开发者须**在公司网站公布一份 AI 框架**，描述：
- 如何整合**国家标准、国际标准、行业共识最佳实践**
- 具体引用：**NIST AI RMF**、ISO/IEC 42001、MLCommons 等
- 与 **白宫 Voluntary Commitments**、**EU GPAI Code of Practice**、**Frontier Model Forum** 等对齐

### 2. 模型发布透明度报告

每次**发布新模型或实质性修改**：
- **发布日期**
- 模型**modalities**（文本 / 视觉 / 音频 / 多模态）
- **预期用途**
- 任何**部署限制**
- **灾难性风险评估摘要和结果**（仅大型开发者）

### 3. 关键安全事件报告

- 向**加州紧急事务办公室（OES）**报告**潜在关键安全事件**
- 覆盖：生物武器、网络攻击、模型自主性失控、大规模操纵等

### 4. 吹哨人保护

- 披露前沿模型**重大健康 / 安全风险**的雇员和承包商获**民事和刑事保护**
- 禁止雇主对吹哨人报复

## 罚则

- **最高 $1,000,000 per violation**（年营收 ≥ $500M 的大型开发者）
- 加州总检察长**独家执法**
- **无私人诉权**（no private right of action）

## 与 SB-1047 的对比（Wiener 同一作者）

| 维度 | SB-1047 (2024, 被否决) | SB 53 (2026, 生效) |
| --- | --- | --- |
| 核心 | **强制安全义务** + "kill switch" + 报告 | **透明度 + 框架披露** |
| 范围 | "covered model"（含算力 + $100M 训练成本） | "frontier model"（仅算力） |
| 义务类型 | 实质性能力控制 | 文档 + 披露 |
| 罚则 | 高（含州 AG 追究禁令） | 最高 $1M / violation |
| 政治命运 | Newsom 2024-09 否决 | Newsom 2025-09 签署 |

**战略**：从"强制性义务"退到"透明度"，避开 Newsom 否决理由（"扼杀加州创新"），
同时保留"政府获得系统性信息"的监管价值。

## 企业应对

### Anthropic（加州总部）

发布了《SB 53 合规框架》（2025-10）：
- 公开 **Usage Policy + RSP + Model Card** 作为 Framework
- 关键安全事件向 CA OES 报告流程内部化
- 吹哨人政策更新

### OpenAI / Google DeepMind

- 合规方案**预期与 EU GPAI Code of Practice 合并**（同样覆盖透明度 + 安全）
- **跨 EU / CA 的"一套文档"合规**策略逐渐成型

### 非美公司

- Mistral、DeepSeek 若模型达到 10²⁶ FLOP 阈值 + 在加州提供服务 → 同样适用

## 与 EO 14365 的冲突

SB 53 是 EO 14365（2025-12）**首要打击目标之一**：
- EO 14365 派 AI 诉讼工作组挑战"负担过重"州法
- 加州 AG 明确表态**继续执法**
- 2026-Q1 / Q2 预期有联邦诉讼

**但**：EO 14365 不能独立抢占州法（需国会立法或最高法院判决），SB 53 短期内**继续生效**。

## 原文与归档

| 来源 | 链接 |
| --- | --- |
| 全文（加州立法网） | [leginfo.legislature.ca.gov/.../SB53](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53) |
| 州长签署公告 | [gov.ca.gov/2025/09/29/.../sb-53](https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/) |
| Future of Privacy Forum 解读 | [fpf.org/blog/californias-sb-53-the-first-frontier-ai-law-explained](https://fpf.org/blog/californias-sb-53-the-first-frontier-ai-law-explained/) |
| Brookings 解读 | [brookings.edu/articles/what-is-californias-ai-safety-law](https://www.brookings.edu/articles/what-is-californias-ai-safety-law/) |
| Anthropic 合规框架 | [anthropic.com/news/compliance-framework-SB53](https://www.anthropic.com/news/compliance-framework-SB53) |

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2024-09 | SB-1047 被 Newsom 否决 |
| 2025-02 | SB 53 由 Wiener 重新起草 |
| 2025-09-29 | Newsom 签署 |
| 2026-01-01 | 生效 |
| 2026-Q1+ | 预期联邦诉讼（EO 14365 背景下） |
