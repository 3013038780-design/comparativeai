---
title: 安全框架
description: DeepMind Frontier Safety Framework (FSF) v1→v3 演进；CCL 方法论与 2026-04 的 Harmful Manipulation CCL
sidebar:
  order: 3
snapshotDate: 2026-06-30
---

> **🆕 2026-04-17 FSF v3.0**：新增 **Tracked Capability Levels (TCLs)** 预警层；
> 新增 **Harmful Manipulation CCL**（规制能系统性改变人类信念的 AI）。
> 对比 Anthropic RSP v3 的 "**弱化**" 与 OpenAI Preparedness v2 的 "**简化**"，
> DeepMind FSF 是 2026 唯一**扩展**的前沿安全框架。

> **🆕 2026-06-18 AI Control Roadmap**：DeepMind 新增用于保护 Google 内部先进智能体的系统级框架。
> 它把智能体视为潜在“内部威胁”，在模型对齐之上叠加监测、阻断与响应，并让控制强度随能力里程碑升级。
> 该路线图补充而非取代模型级 FSF。[官方公告](https://deepmind.google/blog/securing-the-future-of-ai-agents/)。

## 概述：FSF 的制度位置

**Frontier Safety Framework (FSF)** 是 DeepMind 对标 Anthropic RSP（2023-09）、
OpenAI Preparedness Framework（2023-12）的**第三个前沿安全框架**。2024-05 首发时
DeepMind 明确定位：

> **"a set of protocols aimed at addressing severe risks that may arise from powerful
> capabilities of future foundation models"**
> — *Frontier Safety Framework, v1.0 Preamble*

与 Anthropic RSP 并列位于 **Frontier Model Forum** 四家创始成员（Anthropic、Google、
Microsoft、OpenAI）的**行业自律"双核"**：RSP 以**能力等级（ASL）**为中心，FSF 以
**关键能力级别（Critical Capability Level, CCL）**为中心。

## 版本演进

| 版本 | 日期 | 核心变化 | 官方发布 |
| --- | --- | --- | --- |
| v1.0 | 2024-05-17 | 首发；建立 CCL 概念；**4 个能力领域** | [deepmind.google blog](https://deepmind.google/discover/blog/introducing-the-frontier-safety-framework/) |
| v2.0 | 2025-02 | 强化模型级 FSF Report 要求；细化 CBRN CCL | [FSF v2](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/updating-the-frontier-safety-framework/frontier-safety-framework_2.pdf) |
| **v3.0** | **2026-04-17** | **新增 TCLs；新增 Harmful Manipulation CCL** | [FSF v3](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/strengthening-our-frontier-safety-framework/frontier-safety-framework_3.pdf) |

## CCL 方法论（v1 起的核心创新）

**Critical Capability Levels (CCLs)** 是 DeepMind 对"能力 → 风险"映射的独特抽象。
**与 Anthropic ASL 的区别**：

- ASL 是**单一维度的能力等级**（ASL-2 / ASL-3 / ASL-4），像 BSL 等级
- **CCL 是按风险类别分别定义的能力阈值**——"网络攻击 CCL"、"自主 ML 研究 CCL" 等是独立轴

**v3 CCL 清单**（按 2026-04 版）：

| 风险域 | CCL 名称 | 触发条件（概述） |
| --- | --- | --- |
| 网络 | **Cyber Autonomy CCL** | 模型可自主规模化发动复杂网络攻击，相当于中等国家级威胁 |
| 自主 | **Autonomous ML R&D CCL** | 模型可自主推进 AI 研发，相当于 DeepMind 研究员水平的端到端贡献 |
| CBRN | **Bio CCL / Chem CCL** | 模型可大幅降低生化武器研发门槛（对 GCSE-level 用户） |
| 操纵（v3 新增） | **Harmful Manipulation CCL** | 模型可系统性改变信念/行为，产生"严重规模"社会伤害 |

**流程**：

1. **Early Warning Evaluations**：每个重要模型训练后、部署前做 CCL 评估
2. 若 **< CCL** → 正常部署（仅常规缓解）
3. 若 **≥ CCL** → **延迟部署 / 强化缓解**，发布 **FSF Report** 公开论证
4. **持续监控**：部署后重大能力提升 → 触发重新评估

## TCLs（2026-04 新增）

**Tracked Capability Levels** 是 v3 的核心创新——**在 CCL 触发前的预警层**。

**理由（FSF v3 论证概括）**：CCL 设置的阈值很高，一旦触发就意味着"重大"风险。
但能力演进往往渐进，若等到触发 CCL 再反应，缓解措施的准备时间可能不足——
TCL 因此作为预警层引入。

**TCL 的作用**：

- 对每个 CCL 设定**"接近阈值"的 TCL**（典型为 CCL 的 50-80%）
- 达到 TCL 触发**内部预警 + 外部披露 + 追加评估**
- **不触发部署限制**，但**倒逼缓解能力提前就位**

**行业意义**：DeepMind 现在是**唯一设立"预警层"的前沿实验室**：

| 实验室 | 能力门槛 |
| --- | --- |
| OpenAI Preparedness v2 | High / Critical（2 档，2025-04 简化） |
| Anthropic RSP v3 | ASL-2/3/4/5（4 档，含 "deploy standards"） |
| **Google DeepMind FSF v3** | **TCL → CCL → "exceed CCL"（3 档）** |

## Harmful Manipulation CCL（2026-04 新增）

**最具争议的 v3 新增**。覆盖"能在规模上系统性改变人类信念或行为"的能力。

### 定义（概括）

FSF v3 将 Harmful Manipulation CCL 大致界定为：模型能以显著高于人类基线的说服 / 操纵效率，
系统性改变信念或行为，并在规模化部署下造成严重社会伤害。具体措辞以 FSF v3 正式文本为准。

### 评估方法

- **控制实验**：让模型与人类在说服任务中竞争（例如气候议题、疫苗信念）
- **长对话持久性**：模型引发的信念变化是否在 24 小时 / 7 天后仍存在
- **个性化适应性**：模型能否根据目标特征调整策略
- **可扩展性**：缓解措施（如水印、内容标签）能否抵消操纵效果

### 争议

**支持**：

- **Yoshua Bengio** 在近年 AI 安全报告与公开演讲中，持续将规模化操纵列为 AGI 风险主要类别之一
  （继自主、武器化之后），**FSF 采纳与该学术立场一致**
- **Stuart Russell**（Berkeley CHAI）在多次公开发言中强调，规模化说服 / 操纵
  对民主制度构成存在性风险

**批评**：

- **Zvi Mowshowitz**（*Don't Worry About the Vase*）FSF v3 发布后的系列博文指出逻辑不一致：
  v3 **将 Harmful Manipulation 列为 CCL，但同时把 Deceptive Alignment / Scheming 降级为 TCL**
- **Deb Raji**（Mozilla Fellow）等批评定义模糊——"人类 baseline" 如何界定，
  与广告、公共卫生传播等合法说服如何区分
- **产业派**（*a16z* 等）则担心此 CCL 阻碍 Gemini 在营销、教育、说服性 AI 应用的部署

### DeepMind 的内部争论

**Shane Legg**（DeepMind Chief AGI Scientist）在 2025 年多次公开发言中提及：
Harmful Manipulation CCL 的草案在 DeepMind 内部经历了较长时间的争论。反对方（产品 / 商业化）
认为该 CCL 可能**阻碍合法的说服性应用**；支持方（Safety Research）认为**如果操纵能力
扩展到民主议题就来不及**。最终的 v3 版本是**妥协——定义严格限定于"严重规模"而非一般说服**。

## Gemini 模型级 FSF Reports

**模型级 FSF Report** 是 v2 起的核心工具——对每个重要模型公开披露其 CCL 评估。

### 已发布的 FSF Reports

| 模型 | 发布日期 | 覆盖 CCL | 结果 |
| --- | --- | --- | --- |
| Gemini 2.5 Pro | 2025-04 | Cyber / Auto ML / CBRN（v2 时期） | 均未达 CCL；Cyber 接近 TCL（当时未发布） |
| **Gemini 3 Pro** | **2025-11** | Cyber / Auto ML / CBRN（v2 框架） | 均未达 CCL；Auto ML **达到 TCL 草案阈值**——触发"增强监控" |

### Gemini 3 Pro FSF Report（2025-11）——业界首个

这是**业界首个**把模型级安全评估作为**独立公开报告**发布的实例（Anthropic 的 Risk Reports
2026-04 起才对齐这一格式）。

**报告结构**：

1. **Model overview**（与 Model Card 交叉引用）
2. **Evaluated CCLs**（当时仅 v2 的三类）
3. **Early Warning Evaluation 方法**（部分公开，详细方法在 appendix）
4. **Results**：每项 CCL 的量化分数 + 人工判断
5. **External Evaluations**：**UK AISI / US AISI 参与部分评估**
6. **Mitigation plan**：发布前和发布后的缓解措施
7. **Residual uncertainty**：主动披露未覆盖的风险维度

**意义**：为后续 v3 框架的全维模型评估提供模板。

## 三大缓解支柱

FSF v1 起规定每个 CCL 对应**三类缓解**：

1. **Security Mitigations**：模型权重保护（对应 RAND Security Levels SL-1 到 SL-5）
2. **Deployment Mitigations**：部署时的访问控制、监控、能力限制
3. **Internal Governance**：Responsible AI Council 流程 + 跨职能审查

**v3 的新增**：要求**所有 TCL 达到的模型同步升级 Security Mitigations**（即**不等 CCL 就
提前投入权重保护**），响应了 GovAI Anderljung 等人的批评。

## 学术批评

### Anderljung et al.（GovAI）—— 框架 vs. 政策

**Markus Anderljung**（GovAI，论文发表时在 OpenAI Policy）2023 *Frontier AI Regulation*
论文是前沿安全框架的**理论基础**之一。他对 FSF 的典型评价是：
这是一个结构良好的框架，但"Framework"而非"Policy"的措辞本身即暗示了较弱的约束力。

FSF v3 **仍然称作 Framework**（相对 Anthropic 的 "Policy"），**保留柔性**。这在
Anderljung 看来是**利弊参半**——灵活性有利迭代，但降低承诺可问责性。

### Bengio 的"责任缺口" (Responsibility Gap)

**Yoshua Bengio** 在 2025 *International AI Safety Report* 中多次引用 FSF 作为**正面案例**，
但也指出**三大实验室的共同盲点**：

- **"pause commitment" 模糊**：所有三家都未明确"若缓解失败应停止"的具体机制
- **外部验证有限**：UK / US AISI 参与了评估，但**方法学与结论仍由实验室主导**
- **FSF 与 AI Principles 之间的联动**：如 2024 删除军事禁令**未触发 FSF 更新**，说明两层治理
  **未打通**

### Zvi Mowshowitz 的"稍好但仍不够"(Better But Not Enough)

Zvi 在多篇博文中持续表达的立场：DeepMind 的框架在三家中相对严谨，但仍缺乏可执行的 pause 承诺。
对 FSF v3 的典型论点是：TCL 是一项实质改进、Harmful Manipulation CCL 方向正确，但只要没有公开的 pause 承诺，
FSF 仍是"框架"而非"约束"。

### Meredith Whittaker（Signal）—— 治理 vs. 产品

Whittaker 的核心论点是：把 Safety Team 放在商业化产品公司内部，研究者写的框架与产品团队的实操之间存在结构性冲突。
她举例：2024 Gemini 图像生成的历史失真事件**没有触发任何 CCL**，
因为**操纵性"历史生成"不在 CCL 定义之内**——反映框架对现实危害的覆盖面仍有限。

### DeepMind 内部声音：Rohin Shah / Geoffrey Irving / Pushmeet Kohli

- **Rohin Shah**（DeepMind Alignment Team Lead）：在 FSF v3 发布相关讨论中公开承认
  CCL 阈值的标定仍是动态学习过程
- **Geoffrey Irving**（原 DeepMind，现 UK AISI）：推动 FSF 与 AISI 评估协议对齐的关键人物
- **Pushmeet Kohli**（DeepMind Safety & Alignment Lead）：在 2025 多场学术活动发言中强调
  FSF 必须与学术评估界共演进，而非封闭内部标准

## 行业第一手实践视角

### 与 Google AI Principles 的关系

**FSF 位于 AI Principles 之下**但**独立发布**：

```
Google AI Principles (2024 修订版)
    └── DeepMind FSF
            ├── CCL 定义
            ├── Early Warning Evaluations
            ├── 模型级 FSF Reports
            └── Mitigation Requirements
    └── Google Responsible AI Practices
    └── Generative AI Prohibited Use Policy
```

**关键：FSF 覆盖的是模型训练与部署前的能力风险**，而 AI Principles 与 Prohibited Use
覆盖**用途与场景**。两者并不完全重合——这是"AI Principles 2024 修订删除军事禁令未触发
FSF 更新"的技术原因。

### Responsible AI Council 流程

Google / DeepMind 内部通过**Responsible AI Council**协调 FSF 落地：

- 成员：DeepMind Safety + Google Responsible AI + Legal + Product + External advisors
- **所有达到 CCL 或 TCL 的模型**须经 Council review
- **Council 决议**记录为 FSF Report 附录（**摘要公开**）

### 与 Frontier Model Forum 的协调

FSF 与 Anthropic RSP、OpenAI Preparedness **在 Frontier Model Forum 下有"术语对齐"工作组**：

- **"capability elicitation"** 标准化
- **"dangerous capability benchmarks"** 共享（如 Cybench、WMDP 变体）
- **2025 联合发布了"Scheming Evaluations"论文**（DeepMind + Anthropic + Apollo Research）

### UK AISI / US AISI 预部署评估

**FSF 流程中的外部评估环节**：

- Gemini 1.5 Pro（2024-05）UK AISI 参与（首批之一）
- Gemini 2.5 Pro（2025-03）US AISI + UK AISI 联合评估
- **Gemini 3 Pro（2025-11）US AISI 因 EO 14179 后政策收缩下降参与；UK AISI 主导**

## 与同业对比（2026 Q2 快照）

| 维度 | **FSF v3 (2026-04)** | Anthropic RSP v3 (2026-02) | OpenAI Preparedness v2 (2025-04) |
| --- | --- | --- | --- |
| 核心单位 | **CCL (按风险域)** + **TCL (预警)** | ASL (单维度) | High / Critical (两档) |
| 覆盖风险 | Cyber / Auto ML / CBRN / **Manipulation** | Bio / Cyber / Auto / Persuasion | Bio / Cyber / Auto / Self-improve |
| 模型级报告 | **FSF Reports（2 份已发）** | Risk Reports（2026-04 起） | System Cards (嵌入式) |
| 预警层 | **TCL (v3 新增)** | "Yellow Lines"（非正式） | 无 |
| Pause 承诺 | 模糊（"may delay deployment"） | **v3 撤销** | 弱 |
| External eval | UK/US AISI + 独立审查 | GovAI + MATS + METR | 内部 Safety Advisory Group |
| 主要批评 | "Framework not policy" / 无 pause | 撤销 pause | arXiv 批"不保证任何缓解" |

## 关键时间线

- **2023-09**：Anthropic RSP v1（FSF 的制度参照）
- **2023-12**：OpenAI Preparedness Framework v1
- **2024-05**：**FSF v1 发布**
- **2025-02**：FSF v2 发布
- **2025-04**：**Gemini 2.5 FSF Report（首份模型级 FSF Report）**
- **2025-10**：DeepMind + Anthropic + Apollo *Scheming Evaluations* 论文
- **2025-11**：**Gemini 3 Pro FSF Report（业界首个与 Model Card 同步发布的安全报告）**
- **2026-04-17**：**FSF v3 发布**（TCL + Harmful Manipulation CCL）

## 跨链接

- 公司层 FSF 深度分析：[Google DeepMind index](/zh/companies/google-deepmind/)
- Gemini 模型卡：[Model Card](./model-card/)
- 外部红队与 AISI 评估：[Red-Team Disclosures](./red-team-disclosures/)
- 对比：[Anthropic RSP](/zh/companies/anthropic/safety-framework/)、[OpenAI Preparedness](/zh/companies/openai/safety-framework/)
- Frontier Model Forum 行业协调：[行业自治](https://www.frontiermodelforum.org/)
- EU GPAI Code of Practice：[GPAI CoP](/zh/rules/eu/gpai-code-of-practice/)
