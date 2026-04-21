---
title: Texas TRAIGA (HB 149) — Responsible AI Governance Act
description: 德州 2025-06 签署、2026-01-01 生效；全美首部综合性州 AI 法律中的"共和党版本"，聚焦禁止有害用途 + 抢占地方条例
ruleName: Texas HB 149 — Responsible Artificial Intelligence Governance Act (TRAIGA)
issuer: Texas Legislature (89th Legislature, Regular Session); 签署：Governor Greg Abbott
level: state-law
binding: hard
effectiveDate: 2026-01-01
publishedDate: 2025-06-22
originalUrl: https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB149
relatedTopics:
  - risk-classification
snapshotDate: 2026-04-21
sidebar:
  label: Texas TRAIGA (2026)
  order: 10
---

## 中文摘要

**House Bill 149 — 德州《负责任人工智能治理法案》（Responsible Artificial Intelligence
Governance Act, TRAIGA）** 由州长 **Greg Abbott 2025-06-22 签署**，**2026-01-01 生效**。

**意义**：
- 美国**第三部综合性州 AI 法律**（在 Colorado AI Act 和 California SB 53 之后）
- 但结构**与 Colorado/California 明显不同**——TRAIGA **聚焦有害用途的明确禁止**，不做行业通用的
  "high-risk AI system" 分层义务
- 呈现美国 AI 立法的**共和党版本**特征：**禁止 > 合规 > 披露**

## AI 系统定义

> "Artificial intelligence system" means any machine-based system that, for any explicit or
> implicit objective, infers from the inputs the system receives how to generate outputs,
> including content, decisions, predictions or recommendations, that can influence physical
> or virtual environments.

→ 接近 OECD / EU AI Act 定义，覆盖面广。

## 核心禁止（对所有主体）

TRAIGA 明确禁止以下 AI 系统的开发或部署：

### 1. 诱导自伤 / 犯罪

- **意图**上诱导或鼓励**自伤**或**犯罪活动**的 AI 系统
- 对应 EU AI Act 第 5 条第 1(a) 款

### 2. 儿童性剥削内容

- 生成**儿童性虐待图像（CSAI）**的 AI 系统
- 生成 **deep fake pornography** 的 AI 系统
- **模拟 / 描述性内容**同时**模仿或冒充儿童**的文本对话 AI

这一禁止**比联邦 COPPA 和加州同类法更具体**。

### 3. 政府"社会评分"

- **政府实体禁止使用** AI 系统进行"social scoring"
- 不适用于私营部门
- 对应 EU AI Act 第 5 条第 1(c) 款

## 政府实体额外义务

### 1. 强制披露 AI 交互

- 消费者（公民）与政府 AI 系统交互**前或交互时**须**明确告知**"正在与 AI 互动"
- 比 Colorado AI Act 的消费者告知更严格（TRAIGA 明确 "before or at the point"）

### 2. 禁止社会评分

见上

### 3. 生物特征识别限制

- **禁止**政府使用 AI 从**公开渠道**（网络、监控等）获得的生物特征**独立识别个人**，
  除非**本人同意**
- 精准针对 Clearview AI 类型的执法用 AI

## 执法

### 独家执法

- **德州总检察长**（Texas Attorney General）
- **60 天治愈期**（cure period）—— 在起诉前必须通知

### 无私人诉权

- 禁止公民直接起诉违反 TRAIGA 的主体

### 地方抢占

- **TRAIGA 明确抢占州内各市县的 AI 条例**
- 防止 Austin、Dallas、Houston 等城市自行立法
- 与 EO 14365 类似逻辑（只是这里是州抢占地方，不是联邦抢占州）

### 罚则

| 违法类型 | 处罚（per violation） |
| --- | --- |
| 可治愈违法（未治愈 / 违反治愈声明） | **$10,000 – $12,000** |
| 不可治愈违法 | **$80,000 – $200,000** |
| 持续违法（超过治愈期 / 无治愈声明） | **$2,000 – $40,000 / day** |

## 与 Colorado AI Act / California SB 53 的对比

| 维度 | Colorado AI Act | California SB 53 | **Texas TRAIGA** |
| --- | --- | --- | --- |
| 定位 | 反歧视 / 高风险 AI | 前沿 AI 透明度 | **禁止特定有害用途** |
| 适用 | Developer + Deployer | ≥ $500M 大型前沿开发者 | 所有主体（部分条款仅政府）|
| 合规负担 | **高**（风险管理 + 影响评估 + 告知） | 中（框架披露 + 事件报告） | **低**（只要不做禁止事项） |
| 罚则 | 按 CPA | $1M / 违法 | 最高 $200K / 违法 + 持续违法按日累计 |
| 地方抢占 | 不明 | 无 | **明确抢占市县** |
| 政党倾向 | 民主党主导 | 民主党主导 | **共和党主导** |

**TRAIGA 的共和党特征**：
- **禁止有害用途**（明确红线）而非**过程合规**（文档负担）
- 保留商业自由
- 联邦 / 州 / 地方层级秩序明确（州抢占地方）

## 与 EO 14365 的关系

TRAIGA 因其**精简的禁止清单**，**相对不易**被 EO 14365 抢占（因为它规制的是全美共识的有害用途）。
但如果司法部 AI 诉讼特别工作组挑战**政府 AI 交互披露条款**，可能触发联邦 / 州冲突。

## 原文与归档

| 来源 | 链接 |
| --- | --- |
| 全文（州议会 PDF） | [capitol.texas.gov/.../HB00149I.pdf](https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB00149I.pdf) |
| 历史（州议会） | [capitol.texas.gov/.../HB149](https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB149) |
| LegiScan 全文 | [legiscan.com/TX/text/HB149](https://legiscan.com/TX/text/HB149/id/3180120) |
| Norton Rose Fulbright 解读 | [nortonrosefulbright.com/.../traiga](https://www.nortonrosefulbright.com/en/knowledge/publications/c6c60e0c/the-texas-responsible-ai-governance-act) |
| K&L Gates 解读 | [klgates.com/.../TRAIGA-signed](https://www.klgates.com/Pared-Back-Version-of-the-Texas-Responsible-Artificial-Intelligence-Governance-Act-Signed-Into-Law-6-24-2025) |
| IAPP News | [iapp.org/news/a/governor-signs-texas-traiga](https://iapp.org/news/a/governor-signs-texas-responsible-artificial-intelligence-governance-act) |

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2025-06-22 | Abbott 签署 |
| 2026-01-01 | 生效 |
