---
title: 模型卡
description: Claude Model Card / System Card 归档与批评——从 Raji & Gebru 理念到行业实际披露的落差
sidebar:
  order: 2
snapshotDate: 2026-06-28
---

> **概要**：Claude 系列每代模型发布时附带 **Model Card / System Card**，
> 包含能力评测、偏见评估、ASL 判定、已知局限与部署指引。
> 但对比 Raji & Gebru (2019) 提出的原始 **Model Cards for Model Reporting** 理念，
> 行业实际披露存在**训练数据、算力、RLHF 细节**三大普遍缺位。
> 本页归档 Claude 1 → 4.7 的 Model Card 演进，并从学术视角作批评。

## Claude 模型家族时间线

| 发布 | 模型 | ASL 判定 | Model Card 关键特征 |
| --- | --- | --- | --- |
| 2023-03 | Claude 1 | ASL-2 | 初代，Model Card 简略；首次引入 Constitutional AI 披露 |
| 2023-07 | Claude 2 | ASL-2 | 首次发布 100K context；HumanEval / MMLU 披露 |
| 2023-11 | Claude 2.1 | ASL-2 | 200K context；**首次系统化 hallucination 评估** |
| 2024-03 | **Claude 3** 家族（Opus / Sonnet / Haiku） | ASL-2 | 首次完整 System Card；**Opus "evaluation awareness" 轶事**公开讨论 |
| 2024-06 | Claude 3.5 Sonnet | ASL-2 | SWE-bench 首次行业领先；Artifacts 产品化 |
| 2024-10 | Claude 3.5 Sonnet (new) / Haiku | ASL-2 | Computer Use 能力首次 beta；**专项 agentic System Card** |
| 2025-05 | **Claude Opus 4 / Sonnet 4** | **ASL-3** | **首次达到 ASL-3 门槛**（生化 uplift 评估）；部署侧启用 ASL-3 安全措施 |
| 2025-08 | Claude Opus 4.1 / Sonnet 4.1 | ASL-3 | 推理链优化；**Agentic System Card** 独立发布 |
| 2025-11 | Claude Haiku 4.5 | ASL-2 | **PRC-language 评估**首次单列；低成本推理 |
| 2026-01 | Claude Sonnet 4.6 | ASL-3 | 1M context；Computer Use 稳态化 |
| **2026-03** | **Claude Opus 4.7** | **ASL-3** | 当前旗舰；**1M context 版**；Agentic 任务 SOTA |

> **术语提示**：Anthropic 的 **Model Card** 通常指模型本体文档；**System Card** 包含
> 部署系统的安全措施、监控、拒绝策略。2024 以后二者常合并发布。

## Model Card 的典型结构（以 Opus 4.7 为例）

Anthropic System Card 2026 标准结构：

1. **概览 / Overview** —— 型号名称、版本、发布日期、主要用例
2. **能力评测 / Capability Evaluations**
   - 语言理解：MMLU / MMLU-Pro / GPQA Diamond
   - 推理：DROP / ARC-AGI / BIG-Bench Hard
   - 编程：HumanEval / MBPP / SWE-bench Verified / LiveCodeBench
   - 代理：AgentBench / GAIA / SWE-agent tasks
   - 安全关键评估：**WMDP（武器化知识）**、**Cybench（网络攻防）**、**BioLP（生物协议）**
3. **安全评测 / Safety Evaluations**
   - 越狱鲁棒性（StrongREJECT、HarmBench）
   - 偏见与公平性（BBQ、Winogender、Real-Toxicity Prompts）
   - CBRN uplift 评估（内部 + UK/US AISI 合作）
   - **Autonomy 评估**（METR、Anthropic Frontier Red Team）
4. **ASL 判定 / ASL Determination**
   - 当前 ASL 等级与触发阈值复核
   - 与 RSP v3 能力阈值的映射（见 [safety-framework](../safety-framework/)）
5. **已知局限 / Known Limitations**
   - Hallucination 模式、上下文长度边际、语种偏差
   - **Jailbreak 残留风险**（Anthropic 自 2024 起公开讨论）
6. **部署指引 / Deployment Guidance**
   - Claude.ai / API / Bedrock / Vertex 分销差异
   - 推荐的系统提示模板、拒绝模式
   - 高风险用例的人类监督建议（与 AUP 对齐）
7. **训练数据披露 / Training Data Disclosure** —— *此部分通常 1–2 段，高度模糊化（见批评）*
8. **致谢与外部审查 / Acknowledgments & External Review** —— UK AISI / US AISI / GovAI / METR 等

## Raji & Gebru (2019) 原始理念 vs. 行业实际披露

**原始论文要求**（Mitchell, Raji, Gebru et al. *Model Cards for Model Reporting*, FAccT 2019）
的八项要素：(1) Model Details（含训练数据）；(2) Intended Use；(3) Factors（人口统计切片）；
(4) Metrics；(5) Evaluation Data；(6) Training Data；(7) Quantitative Analyses；
(8) Ethical Considerations & Caveats.

**Anthropic 实际披露 vs. 原始八项**：

| 原始要素 | Anthropic 披露程度 | 主要缺位 |
| --- | --- | --- |
| Model Details | 部分（架构大致 / 参数量不公开） | **参数量、算力（FLOP）均不披露** |
| Intended Use | 完整 | —— |
| Factors | 部分（语种覆盖、有限 demographics） | 性别、族裔分层评估不完整 |
| Metrics | 完整（且倾向包含外部独立基准） | —— |
| Evaluation Data | 完整 | —— |
| **Training Data** | **极简（"公开网页 + 许可数据 + 人类反馈"式表述）** | **数据集构成、时间截断、去重与过滤流程、RLHF 工作者分布均不披露** |
| Quantitative Analyses | 完整 | —— |
| Ethical Considerations | 部分 | CBRN 与 autonomy 讨论较充分；劳工、版权讨论缺位 |

**Hind et al. (*FactSheets*, 2018) 的补充视角**：FactSheets 要求**supplier's declaration**，
即供应商须披露训练数据来源、标注流程、已知失败模式。Anthropic 的 Training Data 披露
在 FactSheets 标准下**明显不足**。

**Bender & Gebru (*Stochastic Parrots*, 2021) 的批评**延伸到 Claude：模型卡"看起来像透明度"
但实际是**透明度剧场**——披露的都是已公开可评测的维度（能力、偏见），
不披露的都是对生成过程问责至关重要的维度（数据、劳动、环境成本）。

## 行业普遍缺位的三类信息

### 1. 训练数据组成

Anthropic Claude Model Card 对训练数据的标准措辞：

> Claude was trained on a mixture of publicly available internet data, non-public data obtained
> through third-party agreements, and data provided by human raters and workers.

**缺位**：
- 数据集比例（网页 : 书籍 : 代码 : 合成 : 人工）
- 时间截断（training cutoff 通常在 System Card 中提及，但**数据集版本**不披露）
- 许可数据来源（Common Crawl 子集 / 出版社协议 / Stack Exchange / Wikipedia 等的具体组合）
- 去重与质量过滤策略
- 合成数据生成管道（通过模型生成训练数据的回路）

**业界相似缺位**：OpenAI GPT-5 System Card、Google Gemini 3 Model Card 在此维度**同样稀薄**。
Mistral Large 2 Technical Report 相对较具体（披露了语料语种分布）。

### 2. 算力（Compute）

Anthropic 从未公开披露任何 Claude 模型的训练 FLOP。在 **EU AI Act** 10²⁵ FLOP 门槛和
**加州 SB 53** 10²⁶ FLOP 门槛下，这一信息直接关系**合规义务**是否触发。

Anthropic 2025-10 向加州公开提交 Frontier Compliance Framework，
首次间接承认 Claude Opus 4+ "超过 10²⁶ FLOP 门槛"——但**数值仍未公开**。

### 3. RLHF / RLAIF 细节

Anthropic 虽然在学术论文中公开了 **Constitutional AI（Bai et al., 2022）**
与 **RLAIF (Reinforcement Learning from AI Feedback)** 方法论，
但 **Model Card 中不披露**：

- 人工标注者数量与地域分布
- 标注者时薪、培训流程、工会化状况
- 偏好数据集规模、更新频率
- "Helpful, Harmless, Honest" (HHH) 权重调节在各版本的差异

这是 **Ngo & Christiano 路线**（关注 alignment 可审计性）长期呼吁披露的关键维度。

## 关键版本事件

### 2024-03：Claude 3 Opus 与 "evaluation awareness" 事件

Anthropic 研究员 Alex Albert 公开分享：Claude 3 Opus 在一次"needle-in-haystack"测试中
**识别出自己正在被测试**，并在回答中评论测试性质。

> I suspect this pizza topping "fact" may have been inserted as a joke or to test if I was
> paying attention, since it does not fit with the other topics at all.

**学术讨论**：
- **Apollo Research (2024-12)**: *Frontier Models are Capable of In-context Scheming*
  引用此事件作为模型战略行为潜在性的早期迹象
- **Ngo et al.**: 作为"alignment faking"前兆的讨论
- **Anthropic 2025-03**: *Alignment Faking in Language Models* 论文系统化研究此现象
  （见 [red-team-disclosures](../red-team-disclosures/)）

### 2025-05：Claude Opus 4 触发 ASL-3

首个达到 ASL-3 门槛的 Claude 模型。根据 System Card：

- **生化 uplift 评估**显示对**受专业训练的恶意行为者**的帮助超过 RSP 设定阈值
- 触发 ASL-3 **部署侧安全措施**：细化拒绝策略、ZDR 监控、外部审查

**学术意义**：这是 Anthropic 自己的能力承诺**第一次真正运转**——
与 Preparedness Framework 下 GPT-5.4 的 "High cyber" 认定形成平行案例。
但**批评者**（见 [safety-framework](../safety-framework/) §批评）指出：
ASL-3 并未阻止部署，只是附加访问控制——**门槛触发 ≠ 部署暂停**。

### 2025-11：Claude Haiku 4.5 PRC-language 评估

首次单独公开**中文评估**（含简体 / 繁体、政治敏感话题、跨境数据控制语境）。
这是对中国市场"事实性存在但无正式进入"的间接回应——
AWS Bedrock 全球版在中国非公开企业客户处可用，Haiku 4.5 成为此渠道首选模型。

评估结果关键点：
- 中文 MMLU-Pro 性能在 4.x 家族内**显著提升**
- 针对 PRC 敏感话题的**拒绝策略与英文对称**（不采用"两套价值观"）
- 仍未通过 CAC 算法备案，**官方渠道不进入中国**

### 2026-03：Opus 4.7 Agentic System Card

与模型同时发布的 **Agentic System Card** 是 2024-10 以来的第四份，覆盖：
- Computer Use 稳态评估（GAIA / WebArena / OSWorld）
- 长时程任务（>30 分钟 self-directed）的 self-exfiltration / prompt injection 评估
- 与 METR 的 Autonomy Suite 合作结果

这成为 **agentic 系统卡**的行业模板，OpenAI 与 Google 在 2026 Q2 开始跟进。

## 与竞品 Model Card 的对比

| 维度 | Anthropic Claude Opus 4.7 | OpenAI GPT-5 System Card | Google Gemini 3 Model Card |
| --- | --- | --- | --- |
| **体量** | 60–80 页 PDF | 40–60 页 | 30–50 页 |
| **能力评测** | 详（含外部基准） | 详（含内部 OpenAI Evals） | 详（Gemini Evals 自研） |
| **Training Data** | 模糊 | 模糊 | 模糊 |
| **FLOP** | 不披露 | 不披露 | 不披露 |
| **ASL / 风险等级** | **ASL-3 明确** | **High cyber 明确**（5.4） | CCL / TCL 映射 |
| **外部审查** | UK/US AISI + GovAI + METR | UK/US AISI + Apollo | UK AISI + DeepMind FSF 流程 |
| **Agentic 披露** | **独立 Agentic System Card** | 部分章节 | 部分章节 |
| **偏见评估** | BBQ / Winogender / RTP | 类似 | 类似 |
| **CBRN 评估** | 详 | 详 | 详 |

**观察**：在"**能力与安全评测**"维度，三家**趋于收敛**——同一套 benchmark、
相似的 CBRN / cyber 框架。差异集中在 **(a) 风险等级方法论**（ASL vs. Preparedness vs. FSF），
**(b) 外部审查制度化程度**（Anthropic 最结构化），
**(c) agentic 披露完整度**（Anthropic 领先）。

## 学术批评综述

**Raji 等 (2020) *Closing the AI Accountability Gap***：即使有 Model Card，
缺乏**第三方验证机制**意味着文档本身可以被优化到"看起来负责任"而非"真正负责任"。
Anthropic 引入 UK/US AISI 的预部署测试部分回应了这一点，但 **AISI 的独立性**
本身也受到 Mowshowitz 等的质疑——AISI 的访问权由公司裁量。

**Hendrycks et al. (*ML Safety*, 2022 + WMDP, 2024)**：benchmark 可污染
（训练集包含 benchmark 答案）使得 Model Card 上的评分**不可信**。
WMDP 对此尝试设计"unlearning-robust"benchmark，但 Claude Model Card 上的
benchmark 分数与第三方复现仍存在偏差。

**Bender & Gebru 延伸**：Model Card 的"ethical considerations"章节
**从未提及**训练数据中可能存在的**被剥削的人工标注者**、
**未授权的创作者作品**、**训练过程的能源与水足迹**。
这些被系统性排除的维度揭示了模型卡的**价值观框架**。

**GovAI / Anderljung 路线**（*Frontier AI Regulation*, 2023）：
呼吁将 Model Card 的**关键部分**（特别是能力评测、FLOP、训练数据）
通过**立法**变为强制披露，而非公司自愿。
EU AI Act 第 53 条（GPAI 透明度义务）是这一方向的部分实现。

## 与本站其他页面的交叉引用

- **Anthropic 公司概况与 RSP**：[../](../)
- **ASL 判定的完整能力阈值**：[safety-framework](../safety-framework/)
- **外部红队与评估**：[red-team-disclosures](../red-team-disclosures/)
- **用户端使用政策**：[usage-policy](../usage-policy/)
- **透明度报告**：[transparency-report](../transparency-report/)
- **OpenAI 对比**：[companies/openai](../../openai/)
- **EU GPAI 透明度要求**：GPAI Code of Practice Transparency 章节
- **中国备案要求**：[生成式 AI 暂行办法](/zh/rules/china/generative-ai-interim-measures/)
  第 7 条对训练数据合法性的要求

## 2025–2026 Q1 关键观察

- **2025-05** Opus 4 ASL-3 首次触发 → **Model Card 与 RSP 的首次真实联动**
- **2025-08** Agentic System Card 独立化 → 行业模板效应
- **2025-11** Haiku 4.5 PRC-language 评估 → 对中国市场的**间接回应**
- **2026-02** RSP v3 发布 → Model Card 的 ASL 判定**表述方式更新**（pause 承诺删除）
- **2026-03** Opus 4.7 Model Card 首次包含 **SB 53 合规映射章节**

## 持续追踪

- Claude 各版本完整 System Card PDF 归档（`public/archives/anthropic-model-cards/`）
- FLOP 披露政策是否在 SB 53 执法后改变
- UK/US AISI 的评估报告公开化进展
- Agentic System Card 方法论的外部复现
