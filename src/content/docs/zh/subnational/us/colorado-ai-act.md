---
title: Colorado AI Act (SB24-205)
description: 美国第一部综合性 AI 反歧视州法，2024-05-17 签署；原定 2026-02-01 生效，2025 修正后**推迟至 2026-06-30**；与 EU AI Act 结构最接近的州级立法
ruleName: Colorado Artificial Intelligence Act (SB24-205, 2025 修正版)
issuer: Colorado General Assembly
level: state-law
binding: hard
effectiveDate: 2026-06-30
publishedDate: 2024-05-17
originalUrl: https://leg.colorado.gov/bills/sb24-205
relatedTopics:
  - risk-classification
snapshotDate: 2026-06-28
sidebar:
  label: Colorado AI Act (2026-06-30)
  order: 1
---

> **🆕 生效日期更新 (2025 修正)**：原定 2026-02-01 生效，经 2025 立法会议修正**推迟至
> 2026-06-30**。同时部分条款做了调整以回应产业界关切。

## 中文摘要

**科罗拉多州 AI 法案 (SB24-205)** 由州长 Jared Polis 于 2024-05-17 签署；经 2025 修正后
**2026-06-30 生效**。是美国**第一部综合性 AI 反歧视州法**。结构最接近 EU AI Act 的高风险系统框架：

1. **High-Risk AI System** 定义：在"后果性决策"（consequential decision）中起**实质性作用**
2. **双主体义务**：Developer（开发者 / 供应商）+ Deployer（部署者 / 使用方）
3. **算法歧视防范**：合理注意义务、影响评估、透明度告知
4. **消费者权利**：被告知、申诉、更正、退出自动化决策

## 核心概念

### 后果性决策 (Consequential Decision)

对消费者在以下方面的获得 / 成本 / 条款起实质性作用：

- 教育入学 / 机会
- 就业 / 就业机会
- 金融或借贷服务
- 基本政府服务
- 医疗保健服务
- 住房
- 保险
- 法律服务

### Developer 义务（§ 6-1-1702）

向 Deployer 提供：
- 系统预期用途、已知局限
- 训练 / 评估数据类型概述
- 已识别的风险、缓解措施
- 已执行的**影响评估**（对算法歧视的预期影响）
- 合规记录

### Deployer 义务（§ 6-1-1703）

- 建立**风险管理政策和程序**（明确参考 NIST AI RMF / 等效国际标准）
- 执行**年度影响评估**
- **消费者告知**：AI 用于后果性决策、决策基础的个人数据类别、影响评估结果摘要
- **申诉通道**：消费者可更正数据 / 申诉决定，**有权人工审核**（在技术可行时）
- 违反算法歧视 → 向州总检察长报告

### 合规推定（§ 6-1-1706）

遵循：
- **NIST AI RMF 及生成式 AI Profile**
- **ISO/IEC 42001**
- 其他"国家或国际公认"的框架

→ 构成合理注意的推定。

## 执法

- 州总检察长（Attorney General）独家执法
- 违法类型视为《Colorado Consumer Protection Act》违反
- 无私人诉权（no private right of action）
- 40 / 60 / 90 天治愈期（视条款）

## 与 EU AI Act 的相似与差异

| 维度 | Colorado AI Act | EU AI Act |
| --- | --- | --- |
| 风险层级 | 单一 "高风险" 层 | 4 层 + GPAI |
| 高风险定义 | "后果性决策"列举式 | 附件 III 列举 + 附件 I 嵌入 |
| 开发者 / 部署者义务 | 二元 | 多角色（provider/deployer/importer/distributor/authorized rep） |
| 合格评定 | 无第三方认证强制 | 部分高风险需第三方 |
| GPAI | 未覆盖 | 第 51-56 条专章 |
| 罚则 | 最多按 CPA | 7% / 3% 全球年营收 |
| 执法 | 州 AG | 成员国 MSA + AI Office |

## 对行业的实务影响

- **大模型供应商**：作为 Developer，向 Colorado 的 Deployer 需提供"AI Act-like"文档
- **美国企业**：若在 CO 运营 + 面向 CO 居民，需按本法履行义务
- **跨州外溢**：Connecticut、Texas、Illinois、Virginia 后续立法多参考 CO 框架
- **联邦可能 preemption**：EO 14179 后的联邦立法是否优先州法是开放问题；目前无联邦 preemption

## 原文与归档

| 来源 | 链接 |
| --- | --- |
| Colorado General Assembly | [leg.colorado.gov/bills/sb24-205](https://leg.colorado.gov/bills/sb24-205) |
| Codified（C.R.S. §§ 6-1-1701 至 6-1-1707） | Colorado Revised Statutes |
| 学术解读 | IAPP、White & Case、Brookings 持续追踪 |

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2024-05-08 | 议会通过 |
| 2024-05-17 | 州长签署 |
| 2025 立法会议 | 多轮修订尝试 |
| 2026-02-01 | 生效（视 2025/2026 修订） |
