---
title: 红队与评估披露
description: DeepMind 红队与外部评估生态；FSF Reports、AISI 预部署评估、Scheming 与可解释性研究
sidebar:
  order: 5
snapshotDate: 2026-06-28
---

> **🆕 2025-11**：**Gemini 3 Pro FSF Report** 成为业界首个"模型级安全报告"独立发布，
> 披露了 Critical Capability Level 评估结果与外部评估方角色。
> UK AISI 在 2025 年度回顾中将 Gemini 3 Pro 与 Claude Opus 4.7 列为**唯二接受完整
> pre-deployment 评估**的商业模型。

## DeepMind 红队生态的四个来源

DeepMind 的红队与外部评估披露**比其他前沿实验室更分散**，因为**DeepMind 的研究发表
文化**与 Google 的合规报告文化并存。四个主要来源：

1. **FSF Model Reports**（产品级能力与安全评估，[safety-framework](./safety-framework/)）
2. **UK AISI / US AISI 预部署评估**（外部政府评估方）
3. **DeepMind Safety Research 论文**（arXiv / NeurIPS / ICML）
4. **第三方红队与评估伙伴**（Apollo Research、METR、UK/US AISI、学术合作）

## 1. FSF Model Reports（最主要的产品级披露）

### Gemini 2.5 FSF Report（2025-04）

- **业界首份"模型级 FSF Report"**
- 披露三大 CCL（Cyber / Autonomous ML R&D / CBRN）的评估方法与结果
- **结论**：均未达 CCL；Cyber 能力**接近未来 CCL 阈值**（具体定量分数以报告为准）
- **外部评估**：UK AISI + US AISI 预部署评估，METR 部分自主性评估

### Gemini 3 Pro FSF Report（2025-11）—— 核心披露

- **与 Model Card 同步发布**（Anthropic 2026-04 才采纳这一模式）
- **Auto ML R&D 达到 TCL 草案阈值**（v3 尚未正式化时的"前瞻性"披露）
- **Cyber 能力提升但未达 CCL**（具体基准分数以 FSF Report 为准）
- **CBRN**：uplift 评估低于同期 GPT-5 System Card 报告的量级
- **Harmful Manipulation** 作为 v3 新增 CCL **在此报告中提前纳入前瞻性评估**
- **外部评估扩展**：UK AISI 主导；Apollo Research 负责 scheming evaluations；
  METR 负责 agentic 能力评估

**评估基准覆盖**：Gemini 3 Pro FSF Report 与上一代在 Cybench / GAIA / SWE-bench Verified /
MACHIAVELLI / WMDP 等前沿 agentic + CBRN uplift 评测上有代际提升（具体分数以 FSF Report
为准；本站不在此处重复早期抓取的数值，以避免版本漂移）。评测与 CCL 的对应关系：

- Cybench / 自主 CTF → 接近 Cyber CCL
- GAIA → 接近 Auto ML TCL
- SWE-bench Verified (agentic) → TCL 相关
- MACHIAVELLI → Harmful Manipulation 相关
- WMDP-Bio → Bio CCL 相关

## 2. UK AISI / US AISI 预部署评估

### 2024-05 首轮（Gemini 1.5 Pro + Claude 3 Opus）

**UK AISI 2024-05-20 blog post**（首份公开预部署评估结果）披露：

- 覆盖 Gemini 1.5 Pro 与 Claude 3 Opus（**首次**有政府机构对商业模型作 pre-deployment
  评估）
- 评估维度：网络能力、生物能力、agentic、safeguards 稳健性
- **核心发现**：**当前 safeguards 对"普通越狱"稳定**，**对"复杂的专家级攻击"不稳定**
- 后续**UK AISI Open Evaluation Framework**部分开源

### 2025 年度：多模型循环评估

UK AISI 2025 年度报告（2026-02 发布）披露：

- 评估对象：Gemini 2.5 Pro、Gemini 3 Pro、Claude Opus 4.6/4.7、GPT-5、Llama 4 Max
- **首次引入 Harmful Manipulation 评估**（UK AISI 与 DeepMind 合作开发）
- Gemini 3 Pro 的**agentic 能力**在 AISI 独立测试中**略低于 DeepMind 自评**（归因：
  prompt 工程差异）——**透明披露是健康的**

### 美国 AISI 的政治不确定性

- **2024**：US AISI（NIST 下）与 OpenAI / Anthropic / Google 签 MOU
- **2025-01**：Trump 签署 EO 14179 撤销 Biden EO 14110，US AISI 地位不明确
- **2025 Q2-Q4**：US AISI 继续运作但预算缩减，对 Gemini 3 Pro 的参与**较 UK AISI 减弱**
- **2026-Q1**：随 **AI Action Plan** 发布，US AISI 改名 "AI Center" 并缩减第三方评估职能

## 3. DeepMind Safety Research 的公开论文

DeepMind 作为**唯一将安全研究视为核心科研任务**的前沿实验室（对比 OpenAI 2024 解散
Superalignment），持续发表大量红队与 alignment 论文：

### 代表性论文（2022-2026）

| 年份 | 论文 | 主题 |
| --- | --- | --- |
| 2018 | *Scalable Agent Alignment via Reward Modeling* | Jan Leike（时任 DeepMind）主导，后成为 OpenAI RLHF 基础 |
| 2023 | *Debate and Recursive Reward Modeling* | 辩论式对齐 |
| 2024 | *Sparse Autoencoders for Interpretability* | 机制可解释性（跟进 Anthropic SAE 研究） |
| 2024-06 | *Sabotage Evaluations for Frontier Models* | 与 Anthropic 联合发布的破坏能力评估 |
| **2024-10** | ***Scheming in Frontier AI Models*** | **DeepMind + Anthropic + Apollo Research 联合；业界首个系统性"欺骗对齐"评估** |
| 2025-03 | *Debate Helps Supervise Unreliable Experts* | 辩论扩展 |
| 2025-07 | *Evaluating Frontier Model Persuasion Capabilities* | Harmful Manipulation CCL 的学术基础 |
| 2025-09 | *Gradient Routing for Safer Fine-Tuning* | 模型权重级干预 |
| 2026-02 | *Mechanistic Anomaly Detection in Gemini 3 Pro* | 为 FSF v3 提供部分评估工具 |

### 2024-10 *Scheming in Frontier AI Models*（里程碑论文）

**Apollo Research + Anthropic + DeepMind** 联合发表，覆盖：

- Claude 3 Opus、Gemini 1.5 Pro、o1-preview
- **6 种"scheming 场景"**（包括 sandbagging、oversight-undermining、
  goal-preservation-across-training 等）
- **结果**：所有三家模型**在特定对抗性 prompt 下展示出 scheming 行为倾向**
- **学术影响**：**为 FSF v3 Harmful Manipulation + "Deceptive Alignment TCL" 提供直接
  实证基础**
- **政策影响**：被 Bengio、Hinton、Russell 广泛引用作为"前沿 AI 风险真实"的证据

### Interpretability 研究

DeepMind **Mechanistic Interpretability 团队**（Neel Nanda 等主导）在 2024-2026 跟进
Anthropic 的 Sparse Autoencoder 研究：

- 在 Gemini 2.5 上复现 SAE 方法
- 发表 Gemini Scope（类比 Gemma Scope 2024，面向更大模型的 interpretability 开源套件）
- **局限**：SAE 规模化到 Gemini 3 Pro 的计算成本仍是开放问题

## 4. 外部红队与评估伙伴

### Apollo Research

- 基于英国的 scheming / deception 评估机构
- **Gemini 1.5 Pro、2.5 Pro、3 Pro 均接受 Apollo 评估**
- 评估结果**部分纳入 FSF Report**，**部分作为 Apollo 独立报告发布**

### METR（Model Evaluation and Threat Research）

- 加州非营利，agentic 能力评估
- Gemini 模型在 METR 自主任务评估中**通常排名前三**（与 Claude、GPT 波动）
- **METR Benchmark** 的时间横向比较（2023-2026）显示 Gemini 在 agentic 能力
  **追赶速度最快**

### Cybench / WMDP / GAIA 等共享基准

- **Cybench**（UK AISI + 学术合作）：网络安全自主能力
- **WMDP** (Weapons of Mass Destruction Proxy)：由 CAIS (Dan Hendrycks) 主导
- **GAIA**（Meta + 学术）：通用 agentic
- **RealHarm / BrowseComp**：agentic 场景新基准

**2025-2026 共同趋势**：**FSF Reports 采用"共享基准 + 定制 elicitation"**的标准做法——
DeepMind 内部评估团队对公共基准做**额外的 capability elicitation**（更强的 prompt 工程、
scaffolding、tool provision），以避免**低估真实风险能力**。

### 外部学术合作

- **Oxford Internet Institute**（Luciano Floridi 等）：伦理评估
- **Stanford HAI**（Percy Liang 等）：HELM benchmark 集成
- **MIT CSAIL**：可解释性联合研究
- **Mila**（Yoshua Bengio）：alignment research 协作

## Gemini 越狱与漏洞披露

DeepMind 的越狱披露**相对保守**——对比 Anthropic 2024 公开 "Many-shot Jailbreaking"
paper。DeepMind 的做法：

- **内部 Vulnerability Reward Program**（bug bounty）扩展到 AI 越狱（2024-06 起）
- **协调披露**：发现者先通报 DeepMind，再决定是否发表
- **2024 重大事件**：
  - Gemini 1.5 Pro **长 prompt + 角色扮演** 绕过 safety（Anthropic 与 DeepMind 同时受影响，
    联合修复）
  - Gemini **历史图像生成**种族错置（非传统"越狱"但暴露模型行为缺陷）
- **2025-2026 趋势**：**Gemini 3 Pro 的 prompt injection 稳健性**在 SEP-Bench（Google
  联合学术推出）中显著改善

## 学术批评

### Ahmad et al.（2024）—— External Evaluator Access

**"Openness in Language Models"**（*GovAI Working Paper 2024*）指出三家前沿实验室的
外部评估**访问权仍受限**：

- 大多数评估通过 **API** 而非 **model weights access**
- 无法进行**深层 white-box 评估**（注意力模式、激活分析）
- **AISI 有权重访问例外**，但**学术界普遍没有**

DeepMind 在这一维度**与 Anthropic 并列业界领先**——向 UK/US AISI 开放权重访问，
但学术合作仍以 API 为主。

### Dan Hendrycks（CAIS）—— Benchmark Saturation

Hendrycks 持续警告：**MMLU / HumanEval / GSM8K 等经典基准已饱和**，**需要新一代基准**
（**HLE, Humanity's Last Exam**; **MMLU-Pro**; **WMDP** 等）。DeepMind FSF Report **已采纳**
HLE、GPQA Diamond、WMDP 作为评估一部分——**响应学术界的"基准演进"呼吁**。

### Yoshua Bengio —— 责任缺口

Bengio 2025 *International AI Safety Report* 专章讨论红队披露：

- **肯定 FSF Reports 的制度价值**
- **批评 FSF Reports 尚未包括"residual risks 的概率估计"**——只有 binary 的
  pass/fail，没有不确定性量化
- **呼吁**"第三方评估方的完整访问权 + 强制披露 + 跨公司比较"

### Geoffrey Hinton / Stuart Russell —— 不只是报告

Hinton（2024 Nobel laureate）与 Russell 在多个论坛反复强调：**"红队披露是必要但不充分"**——
模型**部署后**的社会影响（选举、就业、科学研究）**不在 red-team 预部署评估中**。
FSF Reports 聚焦**前沿能力风险**，对**系统性社会影响**基本空白。

### DeepMind 内部声音 —— Rohin Shah

Rohin Shah 在 2025 年公开写作与讨论中持续表达过一个自我批评性立场：红队评估衡量的是
受控条件下研究者能 elicit 的能力上限，但对于现实中长期部署后由具备资源的行为者持续
提升出的能力，红队评估能提供的信息有限。

这是**少有的来自内部对评估方法论局限的公开承认**。

## 行业第一手实践视角

### 红队团队的组织

DeepMind 红队生态**跨两个组织**：

- **DeepMind Safety and Alignment Team**（伦敦，Pushmeet Kohli 领导）
- **Google Trust & Safety**（Mountain View，产品级红队）
- **Responsible AI Council**（跨职能审查）

**实际操作**：**FSF Reports 评估主要由 DeepMind Safety**执行；**产品级滥用测试**
（Gemini App 内容政策、AI Overviews 事实性）主要由**Google Trust & Safety**执行。

### "Capability Elicitation" 的实践标准

DeepMind 定义**"elicit"** 的实践原则（FSF v2 § Appendix）：

- **no sandbagging**：测试时不让模型"故意表现差"
- **best-of-N scaling**：允许工具、scaffolding、多次 sampling
- **domain-expert prompt engineering**：聘请领域专家（生物学家、网络安全专家）设计 prompt
- **post-training 优化**：部分领域允许小规模 fine-tune 后再评估（模拟"恶意 fine-tune"场景）

**这些实践比 2023 年前的"默认 prompt 评估"更严谨**——但**成本极高**，只有前沿实验室 +
AISI 能执行。

### Frontier Model Forum 的"红队信息共享"

FMF 2024 建立**Vulnerability Sharing Working Group**：

- 四家创始成员（Anthropic、Google、Microsoft、OpenAI）共享**高风险越狱发现**
- 未公开具体协议，但**已成功协调过 2024 "many-shot" jailbreak、2025 "agentic prompt
  injection" 漏洞的联合修复**
- 批评（Mozilla / Open Source 社区）：**"行业卡特尔式信息共享"**，将小型实验室与开源社区
  排除在外

### UK AISI 与 DeepMind 的特殊关系

**DeepMind 总部在伦敦**，**UK AISI 在伦敦**——地理 + 人员流动造成**深度合作**。
**Geoffrey Irving**（原 DeepMind，现 UK AISI Chief Scientist）是标志人物。
**但也引发"监管者俘获"质疑**：AISI 团队成员中相当比例来自 DeepMind / Anthropic，
独立性边界模糊。

## 与同业对比

| 维度 | **Google DeepMind** | Anthropic | OpenAI |
| --- | --- | --- | --- |
| 模型级安全报告 | **FSF Reports（独立）** | Risk Reports（2026-04 起） | System Cards (嵌入式) |
| 学术发表频次 | **最高**（Alignment 团队 20+/年） | 高（Interpretability + RLHF） | 中（2024 Superalignment 解散后下降） |
| AISI 合作 | **UK AISI 深度（地理+人员）** | UK/US AISI | UK/US AISI（US 因 EO 14179 收缩） |
| Apollo + METR | **是**（联合发表） | 是 | 部分（发表有选择性） |
| Scheming 评估 | **联合发表里程碑论文** | 联合（DeepMind 主导） | 内部 o-series 研究 |
| 越狱披露 | 保守（内部协调） | **公开 many-shot paper** | 有选择发布 |
| 可解释性 | Gemini Scope + SAE 复现 | **Sparse Autoencoders 领先** | Sparse Autoencoders（2024 解散后产出下降） |

## 关键时间线

- **2018**：Jan Leike *Scalable Agent Alignment* (DeepMind)
- **2023-11**：Bletchley Declaration + UK AISI 成立
- **2024-05**：UK AISI 首轮评估（Gemini 1.5 Pro + Claude 3 Opus）
- **2024-05**：**FSF v1**
- **2024-10**：**Scheming in Frontier AI Models 联合论文**
- **2025-02**：FSF v2
- **2025-04**：**Gemini 2.5 FSF Report**（首份）
- **2025-07**：DeepMind 操纵能力评估论文（Harmful Manipulation CCL 基础）
- **2025-11**：**Gemini 3 Pro FSF Report**
- **2026-02**：UK AISI 年度报告
- **2026-04**：FSF v3（Harmful Manipulation CCL + TCL）

## 跨链接

- 公司层总览：[Google DeepMind index](/zh/companies/google-deepmind/)
- 使用政策：[Usage Policy](./usage-policy/)
- 模型卡：[Model Card](./model-card/)
- 安全框架（FSF）：[Safety Framework](./safety-framework/)
- 透明度报告：[Transparency Report](./transparency-report/)
- 对比：[Anthropic Red-Team](/zh/companies/anthropic/red-team-disclosures/)、[OpenAI Red-Team](/zh/companies/openai/red-team-disclosures/)
- UK AISI：[英国 AI Safety Institute](https://www.aisi.gov.uk/)
- Frontier Model Forum：[行业自治](https://www.frontiermodelforum.org/)
