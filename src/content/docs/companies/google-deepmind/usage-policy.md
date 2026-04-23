---
title: 使用政策
description: Google DeepMind / Gemini 使用政策、2024 AI Principles 军事条款撤销与分层政策生态
sidebar:
  order: 1
snapshotDate: 2026-04-23
---

> **🆕 2024-02 结构性转向**：Google 更新 [AI Principles](https://ai.google/responsibility/principles/)，
> **删除了 2018 版"我们不会追求的 AI 应用"四类负面清单**——包括明确禁止"武器或其他主要用途为
> 造成人员伤害的技术"。这是**科技巨头在 Project Maven 后首次结构性回撤对军事 AI 的公开拒绝**，
> 也是本页核心政治事件。

## 概述：Google 的"政策群"而非"单一 AUP"

与 Anthropic 的单一 **Usage Policy** 或 OpenAI 的 **Usage Policies** 不同，Google 对使用行为的约束
**分散在至少四层文件**中：

1. **[Google AI Principles](https://ai.google/responsibility/principles/)**（2018 / 2024 修订）——
   公司级原则声明，不直接面向终端用户
2. **[Generative AI Prohibited Use Policy](https://policies.google.com/terms/generative-ai/use-policy)**
   （面向消费者 Gemini App / AI Studio 的"禁止用途"清单）
3. **Gemini API / Vertex AI Additional Terms of Service**（企业与开发者层）
4. **Responsible AI Practices / Responsibility & Safety Hub**（研究与工程指引，[deepmind.google/about/responsibility-safety](https://deepmind.google/about/responsibility-safety/)）

这种**分层政策生态**既是 Alphabet 组织复杂性的自然产物，也带来**"政策套利"空间**——
例如 Vertex AI 的企业客户可通过协商条款获得消费者层无法使用的模式（例如特定监控场景下
的合同豁免）。

## 第一层：AI Principles（2018 → 2024）

### 2018 原版的七项原则

2018-06-07，时任 CEO **Sundar Pichai** 在 Google 员工因 **Project Maven**（Pentagon 的
无人机视觉 AI 合同）集体抗议后发布 AI Principles：

1. Be socially beneficial
2. Avoid creating or reinforcing unfair bias
3. Be built and tested for safety
4. Be accountable to people
5. Incorporate privacy design principles
6. Uphold high standards of scientific excellence
7. Be made available for uses that accord with these principles

更重要的是 **"Applications we will not pursue"** 四类：

- Technologies that cause or are likely to cause overall harm
- **Weapons or other technologies whose principal purpose or implementation is to cause or
  directly facilitate injury to people**
- Technologies that gather or use information for surveillance violating internationally
  accepted norms
- Technologies whose purpose contravenes widely accepted principles of international law and
  human rights

> **历史定位**：这使 Google 成为**第一个公开拒绝军事 AI 用途的科技巨头**。Meredith Whittaker、
> Lilly Irani 等前 Google 员工后来将 Maven 抗议作为"工人治理"的经典案例。

### 2024-02 修订：删除负面清单

2024-02-04，Google 悄然更新 AI Principles 页面，**删除了"Applications we will not pursue"整节**，
改为三类宽泛原则：Bold Innovation、Responsible Development and Deployment、Collaborative
Progress。**Bloomberg、The Washington Post、The Guardian 均将此解读为**"为 Project Nimbus
（以色列国防 AI 云服务，2021 年中标的多年期大额合同）+ 其他军事合作铺路"。

**修订后的关键变化**：

| 维度 | 2018 版 | 2024 版 |
| --- | --- | --- |
| 结构 | 7 正 + 4 负 | 3 正（无负面清单） |
| 武器条款 | 明确禁止 | **删除** |
| 监控条款 | 明确禁止（除非合规） | 删除具体表述 |
| 可问责语言 | "accountable to people" | "with appropriate human oversight" |

Google 官方的解释：**"列举式负面清单过于僵化，无法适应 AI 迅速演变的应用语境"**。
批评者（包括数百名联署公开信的 Google 员工、前 DeepMind 伦理研究员）则认为这是
**"原则让位于合同"**的典型案例。

## 第二层：Generative AI Prohibited Use Policy

面向消费者层的 **Prohibited Use Policy**（见 [policies.google.com/terms/generative-ai/use-policy](https://policies.google.com/terms/generative-ai/use-policy)）
是**实际对终端用户生效的 AUP**。2024 以来经历多次修订，当前版（2026 Q1）核心禁止类别：

- **危险或非法活动**：武器/爆炸物制造、恐怖主义、人口贩运、CSAM 生成
- **误导与欺诈**：仿冒真实个体、学术作弊代工、金融诈骗材料
- **选举与民主进程干预**：2024 起 Gemini **主动拒绝回答选举相关事实问题**（"I can't help
  with responses on elections and political figures right now"），被普遍批评为**过度审查**
- **关键基础设施攻击**：电网、水务、金融、医疗的未授权访问或破坏
- **"实质性损害用户福祉"**：大规模心理操纵、成瘾式设计、自残鼓励
- **非合意性内容**：未经同意的真人图像生成、非自愿深度伪造
- **规避 Google 安全系统**：越狱、提示注入用于绕过内容审查

> **政策"套娃"现象**：Gemini App 拒绝选举问题，但 **Google Search 的 AI Overviews 会生成
> 含政治人物内容**——同一母公司两套政策。这种**"按产品而非按能力"的政策边界**被 Lazar 等人
> 批为"ethics by surface area"。

## 第三层：Gemini API / Vertex AI 企业条款

**Vertex AI Additional Terms**（见 [cloud.google.com/terms/service-terms](https://cloud.google.com/terms/service-terms)）
延续 Google Cloud 一贯的**"企业合规伙伴"**叙事：

- **客户对输入/输出的合规责任自负**（Section 5 Customer Responsibility）
- **Abuse Monitoring** 可被 HIPAA / FedRAMP High 场景下**选择性关闭**（与 OpenAI Enterprise
  的 zero-retention 类似）
- **Enterprise carve-outs**：Vertex AI 客户可申请对某些 Prohibited Use 条款的**合同级豁免**，
  例如军事/情报客户的"合法政府用途"豁免（Google 官方公开材料未展开，但 *The Intercept* 2024
  通过 Project Nimbus 文件披露了相关条款存在）
- **SynthID** 自动水印对 Gemini 输出默认启用，但企业客户可申请定制或关闭

## 第四层：Responsibility & Safety Hub

[deepmind.google/about/responsibility-safety](https://deepmind.google/about/responsibility-safety/)
是 DeepMind 而非 Google 法律部门维护的**研究层文档**，包含：

- **Responsible AI Toolkit**（面向开发者的安全 API）
- **Model Behavior Policies**（Gemini 的拒答 / 有害内容处理逻辑）
- **SynthID / Provenance 研究**
- **AGI Safety Research**（Shane Legg、Rohin Shah 团队发布）

这层**不具法律约束力**但是**事实上影响模型行为**——由 DeepMind Safety Team（伦敦）+
Google Responsible AI（Mountain View）共同维护。

## 学术批评

### Claire Lazar（ANU, Oxford）—— 原则疲劳（Principles Fatigue）

Lazar 在 2024 *AI Principles and Industry Practice*（Oxford GovAI Working Paper）中指出：
**Google 的 AI Principles 在 2018-2024 期间的 "用途限制型" 条款逐步弱化**，与 *Mittelstadt
(2019) "Principles Alone Cannot Guarantee Ethical AI"* 预言一致。**2024 年的负面清单删除
是这一过程的"高潮"**，而非突变。

### Timnit Gebru 事件（2020-12）的遗产

Gebru 因 *On the Dangers of Stochastic Parrots* 论文被 Google 解雇（Google 定性为"辞职"），
引发 Google Ethical AI 团队的**结构性瓦解**——Margaret Mitchell 次年被解雇，多名核心成员离职。
这与 2024 AI Principles 修订之间存在**结构连续性**：**当内部伦理审查力量被削弱，政策修订的
制衡就减弱**。

### Meredith Whittaker（Signal, 前 Google）—— 伦理洗涤（Ethics Washing）

Whittaker 在 2023 *The Steep Cost of Capture* 中批评 Google / Microsoft / OpenAI 的 AI
伦理文件是**"corporate capture of ethics language"**——**用原则性语言替代可执行约束**。
2024 AI Principles 修订被她评论为**"最清晰的一次自揭"**。

### Binns & Veale（UCL）—— 从"原则"到"程序"

**"AI 使用政策的执行力不取决于条款内容，取决于内部合规流程的设计"**
—— *Binns & Veale, "Is That Your Final Decision? Multi-Stage Profiling" 2021*

他们的批评：Google 缺乏 Anthropic 那种**公开可见的 Acceptable Use 决策流程**（Anthropic 2024
起发布部分 AUP 决策的公开说明）。Google 的内部审查（"AIPR"——AI Principles Review）**流程不透明**、
无外部审计。

## 行业第一手实践视角

### Google ↔ DeepMind 的组织张力

2023-04 Google 宣布 Google Brain + DeepMind 合并为 **Google DeepMind**，Demis Hassabis 任 CEO。
但使用政策制定权仍**跨两个组织**：

- **产品层政策**（Gemini App / Vertex AI 的 Prohibited Use）由 **Google Legal + Trust & Safety**
  主导
- **研究层政策**（FSF、Model Behavior Policies）由 **DeepMind Safety / Responsibility & Safety
  Council** 主导

**实际后果**：DeepMind 研究者推动的保守立场（如 FSF v3 新增 Harmful Manipulation CCL）
与产品团队推动的宽松立场（如 AI Overviews 放宽对生成内容的限制）**公开发生过摩擦**。
2024 Gemini "历史图像"事件（生成种族错置的历史人物）是典型的**跨组织协调失败**案例。

### 与 YouTube / Workspace 的政策映射

**Google 使用政策的"碎片化"**：

- **Gemini in Workspace**（Docs / Gmail 侧边栏）：受 [Workspace Additional Terms](https://workspace.google.com/terms/additional_terms.html) 约束
- **Gemini in YouTube**（Auto-dub、Shorts 脚本辅助）：受 YouTube Community Guidelines + Creator
  Music 限制
- **AI Overviews in Search**：[Search Policies](https://support.google.com/websearch/answer/14900)
  而非 Gemini Prohibited Use
- **NotebookLM**：独立 Terms，允许上传用户文档但不用于训练

这种**产品级碎片化**让"Google 的 AI 使用政策是什么"**在技术合规层面成为实际难题**。
欧盟 AI Act 第 50 条对"透明度标识"的要求在 Google 生态内**需要为至少 6 个产品分别实施**。

## 与同业对比

| 维度 | Google (2026 Q1) | Anthropic AUP | OpenAI Usage Policies |
| --- | --- | --- | --- |
| 文档统一性 | **分散 4+ 层** | 单一 AUP + 商业条款 | 单一 Usage Policies + Enterprise |
| 武器禁令 | **2024 删除** | 明确禁止 | 2024-01 删除后 **2024-10 部分恢复** |
| 选举场景 | **拒答（过度）** | 允许辅助真实内容 | 2024 限流 |
| 企业 carve-outs | **强**（Vertex / 政府） | 有（Commercial Terms） | 有（Enterprise） |
| 透明度 | 政策文本公开 + **无决策说明** | **公开 AUP 决策案例** | 公开较少 |

## 关键时间线

- **2018-06**：初代 AI Principles 发布（Maven 抗议后）
- **2020-12**：Gebru 事件；Ethical AI 团队动荡开始
- **2021**：Project Nimbus 合同签署
- **2023-04**：Google DeepMind 合并
- **2024-02**：**AI Principles 修订，删除负面清单**（本页核心事件）
- **2024-02**：Gemini 历史图像事件；员工联署抗议 Nimbus
- **2024-05**：FSF v1 发布（见 [safety-framework](./safety-framework/)）
- **2025-02**：FSF v2 + Prohibited Use Policy 小修
- **2025-11**：Gemini 3 Pro 发布，附首份 FSF Report
- **2026-04**：**FSF v3 发布**，新增 Harmful Manipulation CCL

## 跨链接

- 公司层总览与 FSF 全景：[Google DeepMind index](/companies/google-deepmind/)
- 模型级能力披露：[Gemini Model Cards](./model-card/)
- 安全框架（FSF）演进：[Safety Framework](./safety-framework/)
- 对比：[Anthropic AUP](/companies/anthropic/usage-policy/)、[OpenAI Usage Policies](/companies/openai/usage-policy/)
- 方法论：[公司归属规则](/methodology/#company-attribution)
