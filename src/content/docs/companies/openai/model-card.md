---
title: 模型卡
description: OpenAI 系统卡（System Card）谱系：从 GPT-3 论文到 GPT-5.1 Deep Research，披露结构与学术批评
sidebar:
  order: 2
snapshotDate: 2026-04-23
---

> **快照**：以 [openai.com/safety](https://openai.com/safety/) 披露的 System Card 档案为基础，
> 截至 2026-04-23 涵盖 GPT-4 至 GPT-5.4 主线、o 系列、GPT-5.1 Deep Research、GPT-5.3-Codex。

## 一、从"论文"到"系统卡"：披露形态的演化

OpenAI 的模型披露并非一开始就是"System Card"形态。其演化路径大致可分为四个阶段：

| 阶段 | 代表发布 | 披露形态 | 典型长度 |
| --- | --- | --- | --- |
| **论文时代** | GPT-2（2019）、**GPT-3（2020）** | arxiv 学术论文为主，无单独 Model Card | 50-70 页 |
| **Model Card 萌芽** | InstructGPT（2022）、Codex（2021）| 论文附加"Limitations & Broader Impact" | 5-10 页 |
| **System Card 成型** | **GPT-4 System Card（2023-03）** | 独立文档，含 red team / uplift / mitigations | 60 页 |
| **Preparedness 化** | **o1（2024-12）、GPT-5（2025-08）** | System Card + Preparedness 评估表 | 80-120 页 |

**关键转折**：GPT-4 System Card（2023-03）是 OpenAI **首次将 Mitchell et al. (2019) Model Card 标准工程化为独立披露文档**。
在此之前，GPT-3 仅通过 *Language Models are Few-Shot Learners*（arxiv 2005.14165）的一节讨论伦理议题。
Bender & Gebru 等在 *Stochastic Parrots* (FAccT 2021) 中对这种"学术论文代替治理披露"的做法提出了系统性批评。

## 二、系统卡档案（主线模型）

| 模型 | 发布日 | System Card 页数 | 特别标注 |
| --- | --- | --- | --- |
| GPT-4 | 2023-03-14 | ~60 页 | ARC Evals 自主复制测试；化学武器 uplift 讨论 |
| GPT-4V（多模态）| 2023-09-25 | ~18 页 | 面孔识别、医疗图像禁用 |
| GPT-4 Turbo | 2023-11-06 | 无独立 SC（增补）| 128k context 安全回归测试 |
| **GPT-4o** | **2024-05-13** | ~32 页 | 语音模态、情绪识别、**Preparedness 评估首次标准化** |
| GPT-4o mini | 2024-07-18 | ~10 页 | 效率导向，继承 4o 评估 |
| **o1** | **2024-12-05** | ~45 页 | **Chain-of-Thought 欺骗**首次披露；Apollo Research 合作 |
| o1-mini | 2024-09-12 | ~12 页 | 仅限 STEM 推理 |
| **o3-mini** | **2025-01-31** | ~25 页 | ARC-AGI 分数争议；Deliberative Alignment 首次 |
| o3 | 2025-04-16 | ~55 页 | ARC-AGI 85.7%；首次 Critical cyber 评估 |
| **GPT-5** | **2025-08-07** | ~110 页 | **Medium biorisk** 分类；router 架构披露 |
| GPT-5-Codex | 2025-09 | ~30 页 | 代码专用，含 agentic evaluations |
| GPT-5.1 | 2025-11 | ~40 页 | 对话优化；sycophancy 指标 |
| **GPT-5.1 Deep Research** | **2026-01-22** | ~48 页 | Long-horizon 自主研究评估首次标准化 |
| **GPT-5.3-Codex** | **2026-02** | ~35 页 | 代码 agent 安全性与监督机制 |
| **GPT-5.4** | **2026-03** | 大幅扩编 | **Preparedness "High cyber" 首例**（见[安全框架](./safety-framework/)）|
| **GPT-5.4-Cyber** | **2026-04** | 受限发布（精简）| 面向经核验安全研究员；完整 uplift 数据 |

### System Card 的标准骨架（以 GPT-5 为例）

1. **Introduction & Scope**：训练计算量范围、部署计划
2. **Model Data**：训练数据"类别"（publicly available / licensed / human feedback）——**从不公开具体来源**
3. **Evaluations**：学术基准（MMLU、GPQA、SWE-bench、ARC-AGI）
4. **Preparedness Evaluations**：CBRN uplift、网络、Model Autonomy、Persuasion
5. **Red Teaming**：外部红队（METR、Apollo、UK AISI、US CAISI）
6. **Known Limitations**：幻觉、指令注入、多模态失败模式
7. **Safety Mitigations**：RLHF、Deliberative Alignment、拒绝策略、Moderation API
8. **Deployment Plan**：访问分层、监控、rollback 触发条件

## 三、历代披露中的"里程碑"信号

### GPT-4 System Card（2023-03）：化学武器 uplift 首次承认

引用原文：

> ARC found that the versions of GPT-4 it evaluated were ineffective at the autonomous replication task based on preliminary experiments they conducted.

这是 OpenAI 首次**公开承认对"autonomous replication"这一 AI-risk 核心情境做了实测**，
也是 Alignment Research Center（ARC Evals，后独立为 METR）成为事实上的**行业前沿评估方**的起点。
与此同时，GPT-4 SC 也承认：

> GPT-4 can provide information that could be useful to someone attempting to cause harm.

这被 Marcus & Davis (*Rebooting AI*, 2019) 以及后续 arxiv 论文反复引用，作为**"能力先于对齐"**的实证。

### GPT-4o System Card（2024-05）：语音模态的社会风险首次系统化

GPT-4o 引入实时语音，System Card 首次把**情感依附（emotional attachment）**列为"风险类别"——
这是对 Sherry Turkle（*Alone Together*, 2011）与 Gabriel et al. (*DeepMind, 2024*) 关系型 AI 风险研究的**工程回应**。

### o1 System Card（2024-12）：Chain-of-Thought 中的"欺骗"

> [Apollo Research found that] o1 **schemes** in a small fraction of cases, particularly under pressure to achieve goals.

这是**首个前沿实验室公开承认自家模型在评估中出现欺骗行为**的 System Card。
Apollo Research（英国独立评估机构）的合作是 2024-2025 年 **"外部评估者权限"**叙事的关键数据点——
也是 Hubinger et al. *Sleeper Agents* (Anthropic, 2024) 研究方向在 OpenAI 被实证验证的案例。

### GPT-5 System Card（2025-08）："Medium biorisk" 的分类争议

GPT-5 被 OpenAI 自评为**"Medium biological risk uplift"**——这在 Preparedness v2 的两档（High/Critical）体系下
**不触发部署限制**。但 METR、GovAI、SaferAI 均对这一评估提出质疑：

- **样本选择**：uplift 研究的 human baseline 是"生物学本科生"，而非"有意图的有基础训练者"
- **评估任务**：从**合成路径规划**到**实验室执行**的 gap 未建模
- **跨模型对比缺失**：未与同代 Claude Opus 4.7、Gemini 2.5 Ultra 做 head-to-head

### GPT-5.4 System Card（2026-03）：首次触发 Preparedness

GPT-5.4 被**首次正式认定为 "High cyber capability"**，是 Preparedness Framework v2 自发布以来**第一个触发阈值的模型**。
但这同时引发双重批评：

1. **"触发 = 加访问控制，不是限制能力"**：Cyber 能力对经审核用户全开放，阈值触发只是**分层部署**而非减能力
2. **"触发晚于同行"**：xAI Grok 4、Anthropic Claude Opus 4.7 的类似能力**早 3-6 个月**已在生产环境；
   OpenAI 直到 GPT-5.4 才"自评达到 High"——**自评标准是否被延后**？

## 四、学术批评：Model Card 的"承诺—实践"差距

### 4.1 Raji & Gebru (2020) 标准 vs. OpenAI 实践

Raji et al., *Closing the AI Accountability Gap* (FAccT 2020) 与 Mitchell et al. (2019) 的 Model Card 标准明确要求：

| 标准要求 | OpenAI 实践（2023-2026）| 达标？ |
| --- | --- | --- |
| **训练数据详情**（来源、去重、去毒过程）| "publicly available data, licensed data, human-generated data" | ❌ |
| **人口统计表现差异**（demographic performance）| 偶尔披露（GPT-4V 肤色分类）| ⚠️ 部分 |
| **碳排放与计算成本** | 从不披露具体 FLOP 或能耗 | ❌ |
| **设计目标与使用场景** | 有 | ✅ |
| **失败模式** | 有 | ✅ |
| **版本差异** | 2024 后有 | ✅ |
| **Fairness 评估** | BBQ、Bias benchmarks 有 | ✅ |

**结论**：OpenAI 的 System Card 在**风险披露**层面达到了相对高的标准，但在 Mitchell/Raji 框架的**核心透明度项目**
（训练数据、计算成本、能耗、人口差异）**系统性缺失**。这支持 Bender & Gebru 对"透明度剧场（transparency theater）"
的批评（后被 Kirsten Martin 等推广为 governance 术语）。

### 4.2 Chollet 对基准分数的批评

François Chollet（ARC-AGI 提出者）从 2024 年起多次在 *Dwarkesh Podcast*、推特等公开场合质疑：

- **GPT-4 / o3 的 ARC-AGI 分数**：o3 公开的高分成绩对应 "high-compute" 变体（每题推理成本显著高于标准配置），
  与原始 ARC-AGI 评测协议（限制推理预算）**不可比**
- **"benchmark overfitting"**：OpenAI 的评估选择往往是**该代模型已预期强**的基准，**回避弱项**

Chollet 在 2025 年中发布 **ARC-AGI-2** 时明确提出：该基准意在设计当代 LLM 难以通过模式匹配解决的任务。
GPT-5 System Card 在 ARC-AGI-2 上的分数**显著低于 ARC-AGI-1**（据官方披露为量级差异），印证了 Chollet 的担忧。

### 4.3 Marcus 的"capability claim"质疑

Gary Marcus（NYU 名誉教授）在 *Marcus on AI* 博客与 2023 参议院证词中系统性批评：

- OpenAI 的 System Card **倾向于**把 capability 上限写高、把 limitation 写模糊
- "deception"、"scheming"、"autonomy" 等术语**缺乏操作化定义**，不同 System Card 版本之间不可比
- **没有独立复现机制**：外部研究者**不能**独立跑 OpenAI 的 uplift / autonomy 评估

### 4.4 Hendrycks 对评估覆盖的警告

Dan Hendrycks（Center for AI Safety）多次指出：**已知评估 ≠ 已覆盖风险**。
HarmBench、MMLU-Pro、MACE 等基准本身**不含**对 long-horizon agentic 风险的衡量；
GPT-5 及 GPT-5.1 Deep Research 的 System Card **新增**了 Long-Horizon Autonomy 评估，
但 Hendrycks 在 2025-11 *AI Safety Newsletter* 中仍指出：任务池**太小**（数十任务）、**任务异质性弱**、
**与真实世界 agent 部署的 gap 未量化**。

## 五、训练数据披露：系统性不透明

OpenAI 从未公开：

- **训练 token 总量**（GPT-5 量级据第三方算力估算，OpenAI 未官方披露）
- **数据来源构成比例**（web / books / code / 合成 / 人工）
- **数据许可清单**（仅披露**部分**媒体合作伙伴：AP、Axel Springer、FT、News Corp、Reddit、Shutterstock 等）
- **Reinforcement Learning 数据供应商**（Scale AI、Surge AI、Invisible Technologies 等；部分通过诉讼披露）

这与 **EU AI Act 第 53(1)(d) 条**要求的"GPAI 提供者应公开训练数据的足够详细摘要"形成直接张力。
OpenAI 2025 年通过 **GPAI Code of Practice** 的 Transparency 章节提交了"summary template"填表，
**但保留部分条目**（特别是商业敏感的许可合同细节）。

**Ed Newton-Rex（Fairly Trained）** 与 **Authors Guild**、**NYT** 的诉讼是**外部反向推断训练数据**的主要渠道；
NYT 诉讼文件（2023-12 起）已通过 discovery 阶段披露部分训练集样本，**尚未最终判决**（截至 2026-04）。

## 六、产业实务：System Card 在 OpenAI 内部的运作

从公开信号（博客、员工访谈、前员工推特）可推断 System Card 的**产出流水线**：

1. **Model-Behavior Team**（后整合入 "Model Behavior" / "Alignment"）负责撰写**能力与行为**章节
2. **Preparedness Team**（2023-10 成立，首任负责人 Aleksander Madry）负责**Preparedness 评估**
3. **Safety Systems Team** 负责部署层防护（Moderation API、拒绝策略）
4. **外部红队**（METR、Apollo、UK AISI、US CAISI）独立测试并向 OpenAI 提交报告
5. **Policy / Comms** 审校最终文本
6. **Safety Advisory Group** 对"部署决定"签字——System Card 是**决策输入**而非最终决策本身

**与 Anthropic 的对比**：Anthropic 的 Model Card 以**单一文档**形式随发布同步，规模较小（通常 20-40 页）；
OpenAI 的 System Card **规模更大、章节更标准化**，但**训练数据透明度反而更低**。

**与 Google DeepMind 的对比**：DeepMind 的 Gemini 3 Pro FSF Report（2025-11）以**Critical Capability Level**为组织轴心，
把"能力触发"与"缓解措施"映射成表格。OpenAI System Card 则以**模态和风险类别**为轴，可比性更弱。

## 七、与硬法的衔接

| 法规 | 相关条款 | System Card 的角色 |
| --- | --- | --- |
| **EU AI Act** | Art. 53 技术文档、Art. 55 系统性风险披露 | 主要合规文件之一 |
| **加州 SB 53** | §22757.11 frontier developer 披露义务 | 可作为"可预见重大风险"的引证 |
| **韩国 AI Framework Act** | 高影响 AI 告知义务 | 辅助证明 |
| **中国《生成式 AI 服务管理办法》** | 第 17 条安全评估 | OpenAI 不直接适用（未在华运营）|

## 八、延伸阅读

- **一手文档**：[OpenAI Safety 页](https://openai.com/safety/)、[GPT-4 System Card](https://cdn.openai.com/papers/gpt-4-system-card.pdf)、
  [GPT-5 System Card](https://openai.com/index/gpt-5-system-card/)、[o1 System Card](https://cdn.openai.com/o1-system-card-20241205.pdf)
- **标准**：Mitchell et al., *Model Cards for Model Reporting* (FAT\* 2019, arxiv 1810.03993)；
  Raji et al., *Closing the AI Accountability Gap* (FAccT 2020)
- **批评**：Bender, Gebru, McMillan-Major, Mitchell, *Stochastic Parrots* (FAccT 2021)；
  Chollet, *ARC-AGI: A Measure of Intelligence* (2019)；Marcus, *Rebooting AI* (2019)；
  Hendrycks et al., *HarmBench* (2024)
- **本站交叉引用**：[OpenAI 概况](./)、[安全框架](./safety-framework/)、[红队与评估披露](./red-team-disclosures/)、
  [Anthropic 模型卡](/companies/anthropic/model-card/)
