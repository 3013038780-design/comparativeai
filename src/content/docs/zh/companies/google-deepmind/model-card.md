---
title: 模型卡
description: Gemini 技术报告与模型卡归档；从 Gemini 1.0 到 Gemini 3 Pro 的演进与能力披露
sidebar:
  order: 2
snapshotDate: 2026-06-30
---

> **🆕 2025-11 里程碑**：**Gemini 3 Pro Model Card** 首次与 [FSF Report](./safety-framework/)
> **同步发布**——这是业界首个"技术报告 + 独立安全报告"双件套模型卡模式。
> Anthropic Claude Opus 4.7 Card（2025-12）随后采纳了类似结构。

## Google 的模型卡起源

Google 是**模型卡范式的学术发源地之一**。Raji、Gebru 等人 2019 年 FAT* 论文
*"Model Cards for Model Reporting"*（[arxiv:1810.03993](https://arxiv.org/abs/1810.03993)）
提出了模型卡标准，同时期 Google 内部的 PAIR 团队与 Ethical AI 团队将其产品化。
但**这一早期学术贡献与 Google 自家模型卡的质量表现之间存在张力**——
见本页学术批评章节。

## Gemini 系列技术报告演进

| 版本 | 发布日期 | 技术报告 / 模型卡 | 关键能力/节点 |
| --- | --- | --- | --- |
| Gemini 1.0 (Ultra/Pro/Nano) | 2023-12-06 | [Gemini: A Family of Highly Capable Multimodal Models](https://arxiv.org/abs/2312.11805) | 首个"原生多模态"训练；MMLU 达 90.0（Ultra） |
| Gemini 1.5 Pro | 2024-02-15 | [Gemini 1.5 Technical Report](https://arxiv.org/abs/2403.05530) | **百万 token 上下文**（可扩展到 10M）；MoE 架构 |
| Gemini 1.5 Flash | 2024-05 | 1.5 Report 更新版 | 低延迟蒸馏 |
| Gemini 2.0 Flash | 2024-12 | [deepmind.google/technologies/gemini/flash/](https://deepmind.google/technologies/gemini/flash/) | 首个"Agentic-first"设计（Project Astra / Mariner） |
| Gemini 2.5 Pro | 2025-03 | [Gemini 2.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_2_5_report.pdf) | **Deep Think** 推理模式；MMMU 84.0 |
| Gemini 2.5 Flash | 2025-04 | 同上 | "Thinking budget"开关 |
| Gemini 2.5 FSF Report | 2025-04 | [首份附带安全文档](https://storage.googleapis.com/deepmind-media/gemini/gemini_2_5_fsf_report.pdf) | 见 [safety-framework](./safety-framework/) |
| **Gemini 3 Pro** | **2025-11** | [Gemini 3 Pro Model Card](https://deepmind.google/technologies/gemini/) + **独立 FSF Report** | **Agentic 核心**；GPQA Diamond / SWE-bench Verified 对齐同期前沿（具体分数以官方 Model Card 为准）|
| Gemini 3.5 系列 | 2026-Q2（预期） | — | — |

## 2025-11 Gemini 3 Pro Model Card 的结构

Gemini 3 Pro Model Card 是**目前业界最完整的模型卡之一**，分七节：

1. **Model Summary**：架构（稀疏 MoE 变体）、训练算力（披露为"大于 Gemini 2.5 Pro"，**未披露具体
   FLOP**——延续 Google 不披露精确算力的惯例）、训练截止日期
2. **Capability Evaluations**：
   - **MMLU / MMLU-Pro**（知识）
   - **GPQA Diamond**（研究级科学 QA）
   - **AIME 2024 / 2025**（数学）
   - **MATH-500**（基础数学）
   - **LiveCodeBench**（编程，**持续更新**）
   - **SWE-bench Verified**（真实代码修改任务）
   - **MMMU / MathVista**（多模态）
   - **Video-MME**（视频理解）
   - **HumanEval / MBPP**（经典编程）
3. **Long Context**：Needle-in-Haystack（文本/视频/代码三模态）达 **1M-2M token 几近完美召回**
4. **Tool Use & Agents**：**TAU-bench、GAIA、Browsecomp** 等 agentic 评估
5. **Multilinguality**：140+ 语言的 MMLU-Pro / MGSM 跨语言表现
6. **Known Limitations**：幻觉倾向、时间理解不足、特定领域偏见（性别/种族/宗教）
7. **Responsible Deployment**：SynthID 水印、内容审核、拒答政策、FSF Report 交叉引用

### 与 Gemini 1.0 模型卡的对比

**2023-12 Gemini 1.0 模型卡**仅 8 页，主要聚焦 MMLU / GSM8K / HumanEval 等静态基准。
**Gemini 3 Pro Model Card 约 60 页**，新增：

- **Agentic 行为评估**（工具调用、多轮规划、长时任务）
- **诚实与欺骗评估**（MACHIAVELLI / TruthfulQA / DeepMind 自研 Sycophancy benchmark）
- **Sandbagging 检测**（模型是否故意弱化表现）
- **Dangerous Capability 子集**（具体数值见 FSF Report）
- **文化偏见的量化**（BBQ / CrowS-Pairs + DeepMind 自研 GlobalBias）

## 核心能力叙事

### 1M-10M Context（Gemini 1.5 的差异化起点）

**Gemini 1.5 Pro 的 1M-10M 上下文窗口**是 DeepMind 在 MoE + Ring-Attention 类算法上的工程胜利。
技术报告披露：**2M token 的 code repository haystack recall 超 99%**、10M token 的
video haystack 在 1fps 采样下实现**"30 秒片段定位"**。

**学术批评**：Chroma 团队 2024 "Context Rot" 研究显示 Gemini 1.5 在**> 200K token 后推理质量
显著下降**（尽管 retrieval 依然准确）。DeepMind 在 Gemini 2.5 / 3 Pro 报告中**部分回应**——
新增"Effective Context" 指标而非仅 "Haystack Recall"。

### Deep Think（Gemini 2.5 的推理范式）

2025-03 Gemini 2.5 Pro 引入 **Deep Think** 模式——长 CoT + 多路径搜索 + 自我校验。
在 AIME 2024 等数学基准上与同代 o1 系列、Claude 3.7 Sonnet 处于同一梯队（具体分数以技术报告为准）。
**Rohin Shah**（DeepMind Alignment）在 2025 年公开研究讨论中指出，Deep Think 训练**加入了 scheming
evals 作为反例数据**，降低模型在长 CoT 中"自我合理化欺骗"倾向。

### Agentic（Gemini 3 Pro 的定位）

**Gemini 3 Pro 明确定位为"Agent-first model"**：

- **Project Mariner**（浏览器代理）与 Gemini 3 Pro 共进化
- **Project Astra**（多模态实时助手）
- **Google AI Studio 的 Function Calling / Code Execution 原生集成**
- **SWE-bench Verified** 与 Claude Opus 4.x、GPT-5 处于同一前沿区间（具体分数以各家官方 Model Card 为准）

## 学术批评与方法论争议

### Raji & Gebru 的模型卡标准落地观察

Raji 在 2024 *FAccT Retrospective* 中评估了 8 家主要实验室的模型卡实施：
**"Google 是最早采纳者，但近年质量参差"**——她指出 2023-2024 期间 Google 曾发布**极简短
的 PaLM 2 模型卡**（< 5 页，与当时 OpenAI GPT-4 System Card 形成反差）。
**2025 Gemini 2.5 起质量显著改善**，但**训练数据披露仍不足**。

### 基准污染问题

2025-Q3 **Anthropic Alignment Team** 发表评论指出 **LiveCodeBench 与 SWE-bench Verified
在前沿模型训练集中存在污染风险**（*"Evaluation Integrity in Frontier Models"*）。
DeepMind 在 Gemini 3 Pro Card 中回应：**使用 SWE-bench Verified 的"contamination-free split"**
+ **LiveCodeBench Pro**（时间切片严格晚于训练截止）。

### François Chollet (ARC-AGI) 的反基准立场

Chollet 2024-2025 推出 **ARC-AGI-2 / ARC-AGI-3**。Gemini 2.5 Deep Think 在这两项基准上
相较人类表现仍有量级差距（具体分数以 ARC Prize Foundation 官方榜单为准）。Chollet 的核心论点是
MMLU / GPQA 类知识基准已饱和，真正的抽象泛化能力仍远未解决。Google DeepMind 在 Gemini 3 Pro Card
中**首次主动引用 ARC-AGI-2** 作为局限性指标——是态度转变。

### Gary Marcus 的持续批评

Marcus 长期批评 LLM 模型卡 **"用基准数分数替代真实理解"**。他在 2026 年 Gemini 3 发布后的 *Marcus on AI* 系列博文中持续指出：
即便 Gemini 3 Pro 在 GPQA 等知识基准上取得高分，在法律 / 医学引文这类需要真实检索的场景中
**仍会产生显著比例的虚构引用**（独立第三方评估与 Claude Opus 4.x 的对比显示同量级问题）。
这反映了**"基准即一切"模型卡范式的深层局限**。

### Shane Legg（DeepMind 联合创始人 / Chief AGI Scientist）的评估哲学

Shane Legg 在多场合公开表达过一个核心立场：模型卡不应被当成营销材料，
**评估应主动覆盖模型最容易失败的任务**而非只挑模型强项的基准。
这是**内部认识到基准军备竞赛问题**的公开表达。**Rohin Shah** 团队后续在 Gemini 3 Pro Card
加入"capability misalignment"专节——**模型能做什么 vs. 应该做什么**的主动披露。

## 训练数据披露与合规

### EU AI Act Art 53(1)(d) 训练摘要义务

Gemini 3 Pro 作为"systemic risk GPAI"（算力 >> 10²⁵ FLOP）须公开**training data summary**。
Google 在 2025-08 GPAI CoP 签署后，按 CoP Transparency Chapter 模板发布：

- 公开网络抓取（subject to robots.txt + [Web & App Controls](https://myactivity.google.com/))
- YouTube 公开视频（**含创作者抗议**，Mr. Beast 等公开反对）
- Google Books / Scholar 的合规子集
- 合成数据（包括 Gemini 2.5 自监督生成）
- 第三方授权语料

**不披露的**：具体来源比例、合成数据与真实数据比例、具体的 copyrighted 判别逻辑。

### 数据 opt-out 机制

- **Web 抓取**：通过 `Google-Extended` user-agent 在 robots.txt 禁用（2023-09 上线）
- **Google 用户数据**：[Web & App Activity Controls](https://myaccount.google.com/data-and-privacy)
  关闭
- **YouTube 创作者**：2024-07 新增 third-party training opt-out（**仅对非 Google 模型生效**——
  Google 自家 Gemini 训练仍使用）
- **Workspace 用户内容**：**默认不用于训练**（企业隐私承诺）

**批评**：EFF、*Mozilla Internet Health Report 2025* 指出 `Google-Extended` opt-out
**不回溯**——已抓取数据不会删除。

## 行业第一手实践视角

### AIPR（AI Principles Review）流程

**AIPR** 是 Google 内部跨产品的 AI 审查流程：

- 研究团队提交 AIPR 提案
- 由 Google Responsible AI + DeepMind Safety + Legal + PM 跨职能评估
- **决策记录内部**，模型卡仅披露通过 AIPR 的结论性判断
- 2024-2025 期间 AIPR **规模化扩张**，但**流程透明度仍低**（Timnit Gebru 事件的遗留影响之一）

### Vertex AI Model Garden 的治理层

企业客户通过 **Vertex AI Model Garden** 访问 Gemini 时：

- 自动获取 **Model Card Summary**（简化版）
- 可下载完整 **Model Card PDF** + **FSF Report**
- **Responsible AI Toolkit** 提供 safety classifier、grounding、citation check

这是**目前业界把模型卡最深度企业化**的做法——模型卡不仅是文档，**是 SDK 接口的一部分**。

### Gemini App / AI Studio / Vertex 的文档分层

| 部署层 | 可见文档 | 更新频率 |
| --- | --- | --- |
| Gemini consumer app | 简化版"About Gemini" | 随产品更新 |
| Google AI Studio | Model Card 摘要 + FSF Report 链接 | 随模型版本 |
| Vertex AI (enterprise) | **完整 Model Card PDF + Responsible AI Toolkit** | 随模型版本 |
| Academic / external eval | 完整 Technical Report on arXiv | 发布时 |

## 与同业模型卡对比

| 维度 | Gemini 3 Pro (2025-11) | Claude Opus 4.7 (2025-12) | GPT-5 (2025-08) |
| --- | --- | --- | --- |
| 技术报告长度 | ~60 页 | ~50 页 | ~40 页 |
| 训练算力披露 | **不披露具体 FLOP** | 不披露 | 不披露 |
| 训练数据摘要 | EU CoP 模板 | EU CoP 模板 | EU CoP 模板（部分保留） |
| 安全报告分离 | **是（FSF Report）** | 是（Risk Reports） | 嵌入 System Card |
| Agentic 评估深度 | **最深** | 深 | 深 |
| 基准污染披露 | **有** | 有 | 部分 |
| 偏见评估 | BBQ + GlobalBias | BBQ + Anthropic Constitution eval | BBQ + System Card |

## 关键时间线

- **2019**：Raji & Gebru *Model Cards* 论文（Google 员工署名）
- **2023-12**：Gemini 1.0 Technical Report
- **2024-02**：Gemini 1.5，百万 token 上下文
- **2024-12**：Gemini 2.0 Flash，Agentic 首发
- **2025-03**：Gemini 2.5 Pro + Deep Think
- **2025-04**：**Gemini 2.5 FSF Report**（首个附带安全报告的模型卡）
- **2025-11**：**Gemini 3 Pro Model Card + FSF Report**
- **2026-Q2**：预期 Gemini 3.5 系列

## 跨链接

- 公司层总览：[Google DeepMind index](/zh/companies/google-deepmind/)
- 使用政策与 AI Principles：[Usage Policy](./usage-policy/)
- FSF 框架与 Report：[Safety Framework](./safety-framework/)
- 红队与外部评估：[Red-Team Disclosures](./red-team-disclosures/)
- 对比：[Claude Model Cards](/zh/companies/anthropic/model-card/)
- EU AI Act 第 53 条训练摘要义务：[EU AI Act](/zh/rules/eu/ai-act/)
