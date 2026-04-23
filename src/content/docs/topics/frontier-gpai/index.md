---
title: 前沿模型与通用目的 AI (GPAI)
description: 三辖区对基础模型 / 前沿模型 / 通用目的 AI 的专门义务对比——学界争议 + 行业框架
sidebar:
  order: 2
---

## 议题定位

"前沿模型 / GPAI" 是 2023 后 AI 治理的**核心争议领域**：当单一模型能力覆盖几乎所有下游应用时，
传统的"按场景立规"失效，**直接对模型层设义务**成为必要。但"前沿"如何界定、
谁来评估、能否自律足够——三辖区答案差异最大。

## 概念辨析

- **Foundation Model**（Stanford CRFM 2021 提出）：大规模自监督训练、可适配多种下游任务的通用模型
- **Frontier Model**（2023 Anthropic / OpenAI / Google DeepMind + Frontier Model Forum 确立）：
  能力最接近 AGI / 前沿的 foundation 模型，通常高算力 + 大参数
- **GPAI (General-Purpose AI Model)**：**EU AI Act 的法定术语**（第 3(63) 条），覆盖范围略广于 frontier
- **Systemic Risk GPAI**：EU AI Act 的进一步细分，10²⁵ FLOP 推定阈值

## 三辖区专门义务速览

| 维度 | 🇨🇳 [中国](./china/) | 🇺🇸 [美国](./us/) | 🇪🇺 [欧盟](./eu/) |
| --- | --- | --- | --- |
| 专门概念 | 无（靠"生成式 AI 服务"统摄） | 无联邦（EO 14110 的 10²⁶ FLOP 已撤销）；加州 SB 53 有"frontier model"定义 | **GPAI + 系统性风险 GPAI** 双档 |
| 算力门槛 | 无 | 加州 SB 53：**10²⁶ FLOP** | **≥ 10²⁵ FLOP** 推定 |
| 事前闸门 | **算法备案**（面向公众必须） | 无联邦；加州 SB 53 要求**透明度报告 + 关键安全事件报告** | 合规推定 + CE 标记 |
| 技术标准 | [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/) | NIST AI RMF（自愿） | CEN-CENELEC 协调标准（制定中） |
| 行为守则 | 无 | 2023 白宫 Voluntary Commitments | **[GPAI Code of Practice](/rules/eu/gpai-code-of-practice/)**（2025-07-10 定稿） |
| 罚则 | CSL 第 68 条 / 刑责 | 加州 SB 53：**$1M / violation** | **全球年营收 3%**（GPAI） |

## 学界讨论

### 前沿 AI 风险的理论基础

- **Bostrom (2014)** *Superintelligence*（Oxford）——超级智能风险的**奠基性文本**
- **Amodei, Olah, Steinhardt et al. (2016)** *"Concrete Problems in AI Safety"*：
  对齐 / 鲁棒性 / 可扩展监督等技术问题的最早系统化
- **Russell (2019)** *Human Compatible*：价值对齐 framework
- **Hendrycks et al. (2023)** *"An Overview of Catastrophic AI Risks"*
- **Bengio, Hinton, Stuart Russell et al. (2023)** *"Managing AI Risks in an Era of Rapid Progress"*
  （*Science* 呼吁书）
- **Anderljung, Barnhart et al. (2023)** *"Frontier AI Regulation: Managing Emerging Risks to Public Safety"*
  ——**前沿 AI 监管的框架性论文**，Anthropic / OpenAI / DeepMind / GovAI 多人合著

### 学界"谁有资格评估前沿能力"的争议

- **乐观 / 自由派**：Yann LeCun (Meta)、Andrew Ng、François Chollet——**前沿风险被夸大**；
  监管会扼杀创新
- **谨慎 / 安全派**：Yoshua Bengio、Geoffrey Hinton、Stuart Russell、Dan Hendrycks——
  **前沿风险严重**，需要政府介入
- **治理设计派**：Markus Anderljung (GovAI)、Jess Whittlestone (CLTR)、Toby Shevlane (DeepMind)
  ——具体监管工具研究

### 对 EU GPAI 条款的学术评论

- **Engler (Brookings)** 系列文章：追踪 GPAI 条款实施
- **Helberger & Diakopoulos (2023)** 对 AI Act GPAI 章节起草过程的批评
- **Hacker, Engel, Mauer (2023)** *"Regulating ChatGPT and Other Large Generative AI Models"*
  （*FAccT 2023*）——GPAI 条款的**思想源头之一**
- **Almada (2025)** 对 AI Act 合规推定机制的批评："标准化机构承担过多立法权"

### 中国 GPAI 治理的学术视角

- **薛澜 / 张凌寒**：中国没有"GPAI"概念，**场景化 + 备案制 是同样功能的替代**
- **Matt Sheehan** *"Tracing the Roots of China's AI Regulations"* (Carnegie, 2024)：
  **TC260-003 实际上是 EU GPAI CoP 的对应物**，但以技术标准而非行为守则形式
- **Olivia 毕业论文**：中国"包容审慎"不设算力门槛的深层原因——**产业结构 + 赶超位次**

### 美国 GPAI "无专门治理"的争议

- **Casey Newton / Platformer**：联邦真空是**放弃公共利益**
- **AEI / American Action Forum**：**联邦去监管**是创新必需
- **Bradford**：美国的"私有权力"逻辑让行业自律先行
- **Haugen, McLaughlin, Zuckerman et al.**：前沿模型应被视为**公共基础设施**，需公共评估

## 四个核心争议

### 1. **10²⁵ / 10²⁶ FLOP 阈值的合理性**

- **科学基础弱**：阈值是"计算好管理的数量级"而非"能力突变点"
- **DeepSeek 冲击**（2025-01）：用低一个量级算力达到前沿能力 → 阈值设计被质疑
- **算力可绕过**：分布式训练、蒸馏、后训练都可能让低算力模型达到高能力

### 2. **开源 vs. 闭源的监管差异**

- **EU AI Act 第 53 条第 2 款**：开源 GPAI 豁免部分文档义务，但**系统性风险 GPAI 不豁免**
- **实务**：[Mistral](/companies/mistral/) 旗舰用 MRL 许可（非完全开源），规避全面开源义务
- **[DeepSeek](/companies/deepseek/) 极限开源** → **模型权重发布即不可撤销**，任何监管"暂停"失效
- **学术争议**：Meta / Mistral 主张开源更透明；Anthropic / OpenAI 主张闭源更可控

### 3. **行业自律 vs. 硬法约束**

- 2025-2026 前沿实验室自律**整体松动**（见 [公司实践](/companies/)）：
  - Anthropic RSP v3 移除 pause
  - OpenAI Preparedness v2 简化
  - Google DeepMind 2024 删军事禁止
  - xAI 拒绝自律范式
- **学界结论**：无硬法约束时，**行业自律底线由最不自律的玩家定义**
  → 这是支持 EU AI Act、加州 SB 53 的核心论据

### 4. **能力评估的方法学**

- 各公司红队评估**不可比较**（独立方法论 + 内部基准）
- **MLCommons AILuminate / AI Luminate**：试图建立行业基准
- **UK AISI / US AISI (改组为 CAISI)**：政府主导的前沿模型预部署测试
- **学术批评 (arxiv 2509.24394)**：OpenAI Preparedness Framework "不保证任何实际缓解"

## 行业实践视角

### 主要前沿实验室的安全框架对比

| 公司 | 框架 | 核心方法 | 2025-2026 变化 |
| --- | --- | --- | --- |
| [Anthropic](/companies/anthropic/) | **RSP v3** (2026-02) | ASL 等级（类似 BSL） | **撤销 pause 承诺**；分"单方 vs 行业共同" |
| [OpenAI](/companies/openai/) | **Preparedness v2** (2025-04) | 威胁类别 × High/Critical | **简化阈值**（删除 Low/Medium）|
| [Google DeepMind](/companies/google-deepmind/) | **FSF v3** (2026-04) | Critical Capability Levels (CCL) | **扩展**：新增 TCL + 操纵 CCL |
| [Mistral](/companies/mistral/) | **无独立框架** | 开源 + GPAI CoP 签署 | — |
| [xAI](/companies/xai/) | **弱 / 无对标文档** | — | 公开**拒绝**自律范式 |
| [Meta](/companies/) | Frontier AI Framework | 类似方法论 | 持续演进 |

### 达到算力阈值的主要模型（2026-04）

**> 10²⁵ FLOP（EU GPAI 系统性风险门槛）**：
- Claude Opus 4.x（Anthropic）
- GPT-5 / 5.3 / 5.4 系列（OpenAI）
- Gemini 3 Pro / Ultra（Google DeepMind）
- Grok 4+（xAI）
- Llama 4 系列（Meta）
- Mistral Large 2/3（Mistral）
- **可能**：Qwen 3.5（阿里）、ERNIE 5.0（百度）

**> 10²⁶ FLOP（加州 SB 53 前沿门槛）**：
- Claude Opus 4.x、GPT-5 系列、Gemini Ultra、Grok 4+、Llama 4 Max

### 跨辖区合规的三种典型策略

1. **"一套文档打三处"**：Anthropic / Google DeepMind 把 RSP / FSF 映射到 EU GPAI CoP + 加州 SB 53
2. **"辖区分层文档"**：OpenAI / Meta 为不同辖区准备独立合规文件
3. **"放弃欧美市场"**：[DeepSeek](/companies/deepseek/) / 大多数中国公司专注国内

### 2026 Q1 结构性事件

- **Trump EO 14365（2025-12）**：试图抢占加州 SB 53 和科州 AI Act
- **Digital Omnibus Proposal（2025-11）**：提议推迟 EU AI Act 高风险条款 16 个月至 2027-12
- **Anthropic RSP v3（2026-02-24）**：引发"前沿自律松动"讨论（*TIME* 批评）
- **Google DeepMind FSF v3（2026-04-17）**：逆流而动，扩展框架

## 相关规则

### EU
- [EU AI Act](/rules/eu/ai-act/) 第 51-56 条、附件 XI/XII/XIII
- [GPAI Code of Practice](/rules/eu/gpai-code-of-practice/) (2025-07)
- [Digital Omnibus Proposal](/rules/eu/digital-omnibus-proposal/) (2025-11)

### 中国
- [生成式 AI 暂行办法](/rules/china/generative-ai-interim-measures/)
- [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/)
- [AI 安全治理框架 1.0/2.0](/rules/china/ai-safety-governance-framework/)
- [拟人化互动服务办法](/rules/china/anthropomorphic-interaction-services/)

### 美国
- [NIST AI RMF + GenAI Profile](/rules/us/nist-ai-rmf/)
- [EO 14179](/rules/us/eo-14179-removing-barriers-ai/) / [EO 14365](/rules/us/eo-14365-national-ai-framework/)
- [California SB 53](/subnational/us/california-sb-53-frontier-ai/)

## 辖区深度页

- [🇨🇳 中国](./china/)
- [🇺🇸 美国](./us/)
- [🇪🇺 欧盟](./eu/)
