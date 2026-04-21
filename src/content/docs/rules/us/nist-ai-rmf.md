---
title: NIST AI Risk Management Framework 1.0
description: NIST 2023-01 发布的 AI 风险管理框架，自愿性但广泛采用；4 大功能（GOVERN/MAP/MEASURE/MANAGE）是美国 AI 治理的事实基础层
ruleName: NIST AI Risk Management Framework (AI RMF 1.0) + Generative AI Profile (NIST AI 600-1)
issuer: National Institute of Standards and Technology (NIST), U.S. Department of Commerce
level: technical-standard
binding: soft
effectiveDate: 2023-01-26
publishedDate: 2023-01-26
originalUrl: https://www.nist.gov/itl/ai-risk-management-framework
relatedTopics:
  - risk-classification
  - frontier-gpai
  - data-training
snapshotDate: 2026-04-21
sidebar:
  label: NIST AI RMF (2023)
  order: 10
---

## 中文摘要

**NIST AI Risk Management Framework 1.0** 于 2023-01-26 发布，是美国商务部国家标准与技术研究院
（NIST）开发的**自愿性 AI 风险管理框架**。核心结构：

- **4 大功能**：GOVERN（治理）/ MAP（识别）/ MEASURE（测量）/ MANAGE（管理）
- **跨所有 AI 系统生命周期阶段**
- **2024-07 发布生成式 AI Profile**（NIST AI 600-1）扩展至 GPAI 特定风险
- 虽自愿但被美国联邦采购、各州法律、金融 / 医疗 / 保险行业广泛引用为**事实基线**

尽管 EO 14110 被撤销，AI RMF 作为 NIST 技术工作的产出**独立存在**，继续是美国 AI 治理的基础层。

## 4 大核心功能

### GOVERN（治理）

- 建立组织 AI 风险管理政策、流程、角色
- 跨功能问责
- 与组织其他风险管理框架的整合

### MAP（识别情境和风险）

- 使用情境：部署场景、用户、受影响方
- 目标系统的能力 / 局限
- 风险和负面影响的识别和优先级

### MEASURE（测量）

- 选择、应用、记录定量 / 定性方法
- 可信度特征：**有效性与可靠性、安全、保障与韧性、可问责与透明、可解释与可诠释、
  隐私增强、公平**
- 持续监测

### MANAGE（管理）

- 风险应对：缓解、转移、接受、规避
- 资源分配
- 事件和退役处置

## AI RMF Profile 系列

AI RMF 是**元框架**，需要 Profile 做行业 / 用例 / 技术特化：

- **NIST AI 600-1** — Generative AI Profile（2024-07）
- **NIST AI 100-1 Companion Playbook**（持续更新）
- 行业特化 Profile 由 NIST 与 NCCoE、Frontier Model Forum 等协作

## Generative AI Profile (NIST AI 600-1) 要点

2024-07 发布，对 AI RMF 4 大功能做生成式 AI 专门解读：

12 类生成式 AI 风险（节选）：
1. CBRN 信息或扩散
2. 混淆 / 同质化（confabulation）
3. 危险、暴力或憎恶内容
4. 数据隐私
5. 环境影响
6. 对人的尊严损害 / 工作场所影响
7. 信息完整性
8. 信息安全
9. 知识产权
10. 淫秽、贬低或虐待儿童性内容
11. 价值链与组件集成
12. 对人员 / 心理的损害

每类给出：Suggested Actions × RMF 功能 矩阵。

## 事实地位

虽自愿，但：

- **联邦采购**：OMB 采购指引要求承包商说明 AI 风险管理；AI RMF 是事实模板
- **金融**：OCC、Fed SR 11-7 更新中融入 RMF 语言
- **州法**：Colorado AI Act、Connecticut SB 2、California SB 896 等都引用 RMF 作为合规路径
- **国际**：G7 Hiroshima Process Code of Conduct、新加坡 AI Verify、澳大利亚自愿 AI 安全标准均参考 AI RMF

## 与 EU AI Act / 中国 TC260 的对比

| 维度 | NIST AI RMF | EU AI Act | TC260-003 |
| --- | --- | --- | --- |
| 约束性 | 自愿 | 硬法 | 推荐但事实硬 |
| 覆盖 | 横向 + GPAI Profile | 横向 + GPAI 专章 | 生成式 AI |
| 方法 | 风险管理流程 | 义务清单 + 合格评定 | 技术指标 |
| 测量 | 原则性（7 个特性） | 结合和谐标准 | 定量（5% / 90% 门槛） |

## EO 14179 后的地位

EO 14179 撤销 EO 14110，但**不撤销 AI RMF 本身**。RMF 是 NIST 依《国家 AI 倡议法》（2020 NAII Act）
和《商务促进法》授权开发，**独立于 EO**。

CAISI（Center for AI Standards and Innovation，取代 AISI）仍以 AI RMF 为其工作基础，
侧重标准和评估。

## 原文与文档

| 文档 | 链接 |
| --- | --- |
| AI RMF 1.0（PDF） | [nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework) |
| Generative AI Profile (NIST AI 600-1) | [doi.org/10.6028/NIST.AI.600-1](https://doi.org/10.6028/NIST.AI.600-1) |
| AI RMF Playbook | [airc.nist.gov/AI_RMF_Knowledge_Base/Playbook](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook) |
| AI RMF Roadmap | NIST 网站 |

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2023-01-26 | AI RMF 1.0 发布 |
| 2024-07-26 | Generative AI Profile (NIST AI 600-1) 发布 |
| 2025+ | 持续行业 Profile 扩展 |
