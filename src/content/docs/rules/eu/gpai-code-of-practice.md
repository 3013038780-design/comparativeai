---
title: GPAI Code of Practice (EU AI Act)
description: EU AI Office 召集、2025-07-10 定稿、2025-08-01 欧委会与 AI Board 通过；AI Act 第 56 条授权的 GPAI 行为守则，签署 = 合规推定
ruleName: General-Purpose AI Code of Practice (GPAI CoP)
issuer: European AI Office (DG CNECT, European Commission) · 由约 1,000 参与者多轮磋商起草
level: soft-law-code
binding: soft
effectiveDate: 2025-08-02
publishedDate: 2025-07-10
originalUrl: https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
relatedTopics:
  - frontier-gpai
  - data-training
  - content-labeling-provenance
snapshotDate: 2026-04-21
sidebar:
  label: GPAI Code of Practice (2025)
  order: 5
---

## 中文摘要

**通用人工智能行为守则（General-Purpose AI Code of Practice, GPAI CoP）**由 **EU AI Office**
依 [EU AI Act](./ai-act/) 第 56 条召集，经**近 1,000 参与者**多轮磋商后于 **2025-07-10 定稿**，
**欧委会和 AI Board 于 2025-08-01 通过 Adequacy Decisions**，与 AI Act GPAI 条款的 **2025-08-02
适用日期**同步生效。

**性质**：**自愿工具**，但**签署 = 合规推定**（第 56 条第 8 款）。未签署方需自证合规，成本更高。

## 三个章节结构

### Chapter 1 · Transparency（透明度）

**适用**：**所有** GPAI 模型提供者（不论规模 / 开源 / 算力）。

内容：
- 技术文档（附件 XI 模板的落地）
- 下游文档（附件 XII 模板的落地）
- 训练数据**"足够详细摘要"**（AI Office 2024-07 发布的模板）
- 公开政策声明

### Chapter 2 · Copyright（版权）

**适用**：所有 GPAI 模型提供者。

内容：
- 遵守 **EU DSM Copyright Directive** 第 4 条（商业 TDM + 机器可读 opt-out）
- 识别和尊重**版权人 opt-out 声明**（robots.txt、ai.txt 等）
- **标准化 opt-out 识别流程**
- 与版权人的争议处理机制

### Chapter 3 · Safety and Security（安全与保障）

**仅适用**于**具有系统性风险的 GPAI 模型**提供者（**≥ 10²⁵ FLOP** 推定，目前约 **5-15 家公司**）。

内容：
- **对抗性测试 / 红队**
- **系统性风险评估和缓解**
- **严重事件报告**（第 56 条）
- **网络安全**（模型权重 + 物理基础设施）
- 部署后监测

## 签署情况（截至 2025-08-01）

**AI Office 官方签署者列表** 于 2025-08-01 公开。主要签署者（行业公开信息）：

| 公司 | 签署状态 |
| --- | --- |
| **Anthropic** | ✅ 完整签署 |
| **Google DeepMind** | ✅ 完整签署 |
| **Microsoft** | ✅ 完整签署 |
| **OpenAI** | ✅ 签署，部分章节有保留意见 |
| **Meta** | ⚠️ 签署但对**版权章节异议** |
| **xAI** | ⚠️ 签署但对**安全与保障章节异议** |
| **Mistral** | ✅ 完整签署 |
| 非欧盟公司（DeepSeek、智谱、ByteDance） | ❌ 未公开签署 |

## 合规推定的实操意义

根据 **AI Act 第 56 条第 8 款**：

- **签署 + 遵守 = 合规推定**：AI Office 和成员国监管机构在执法中**推定该提供者符合第 53-55 条义务**
- **未签署**：需自行提交文档证明符合，可能面临更高合规文档负担和更严执法审视
- **部分异议**：对有异议的章节仍需自证合规

## 与其他监管框架的交叉

### 与美国的对比

- **Biden Voluntary Commitments (2023-07)**：8 家公司签署；EO 14110 撤销后失去政策背书
- **GPAI CoP (2025)**：正式法律授权（AI Act 第 56 条），签署有实质法律效果
- **跨大西洋合规**：签署 GPAI CoP 对通过白宫 2023 Commitments 的公司是**文档复用**

### 与中国的对比

- **TC260-003-2024**：事实强制的技术规范，类似"Code of Practice"但性质是技术标准
- **人工智能安全治理框架 1.0/2.0**：跨场景风险分类，类似 GPAI CoP 的 Safety 章节但范围更广

### 与 G7 Hiroshima Process

- Hiroshima Code of Conduct (2023-10)：国际自愿框架
- GPAI CoP 吸收了 Hiroshima 原则但**更具体、更可执行**

## 时间线

| 日期 | 事件 |
| --- | --- |
| 2024-08-01 | EU AI Act 生效，第 56 条授权召集 |
| 2024-10 | 第一轮草案 |
| 2025-04 | 第二轮草案 |
| 2025-07-10 | **终版发布** |
| 2025-08-01 | 欧委会 + AI Board 通过 Adequacy Decisions；签署者列表公开 |
| 2025-08-02 | AI Act GPAI 条款（第 51-56 条）适用日期 |
| 2026-2027 | 根据实践迭代 |

## 原文与归档

| 来源 | 链接 |
| --- | --- |
| 欧委会 GPAI CoP 专页 | [digital-strategy.ec.europa.eu/.../contents-code-gpai](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai) |
| 终版全文（官方） | [code-of-practice.ai](https://code-of-practice.ai/) |
| 签署者任务组 | [digital-strategy.ec.europa.eu/.../signatory-taskforce-gpai](https://digital-strategy.ec.europa.eu/en/policies/signatory-taskforce-gpai-code-practice) |
| 邀请签署函 | [digital-strategy.ec.europa.eu/.../invites-providers-sign](https://digital-strategy.ec.europa.eu/en/library/ai-office-invites-providers-sign-gpai-code-practice) |
| Latham & Watkins 解读 | [lw.com/.../eu-ai-act-gpai-model-obligations](https://www.lw.com/en/insights/eu-ai-act-gpai-model-obligations-in-force-and-final-gpai-code-of-practice-in-place) |
| Skadden 解读 | [skadden.com/.../eus-general-purpose-ai-obligations](https://www.skadden.com/insights/publications/2025/08/eus-general-purpose-ai-obligations) |

