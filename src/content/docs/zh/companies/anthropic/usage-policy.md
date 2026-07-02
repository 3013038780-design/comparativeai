---
title: 使用政策
description: Anthropic Usage Policy (AUP) 结构、2022–2025 版本演进、条款可执行性与"盾牌或帘幕"批评
sidebar:
  order: 1
snapshotDate: 2026-06-28
---

> **概要**：Anthropic **Usage Policy (AUP)** 是前沿实验室中**最具体、最可执行**的用户政策之一。
> 2025-05 最新版将结构分为 **Universal Rules / High-Risk Use Cases / Disallowed Uses** 三层，
> 对武器化、CSAM、选举、关键基础设施四类场景保留明确禁止。
> 本页追踪其版本演进、执法机制，并从契约法、消费者保护与情境诚实（contextual integrity）视角作批评。

## 文档定位

Anthropic 的用户端条款由两层文档构成：

- **Usage Policy（消费）**：面向 Claude.ai / API 个人与开发者账户
- **Commercial Terms of Service**：面向企业 API、AWS Bedrock / GCP Vertex 分销，包含**合规责任转移**条款

两份文档共享同一套禁止类别，但**责任分配不同**：消费侧由 Anthropic 直接执法；企业侧由客户承诺并承担违约赔偿。
本页主要解析公开 Usage Policy；Commercial Terms 的 carveout 在 §工业实践 部分讨论。

## AUP 三层结构（2025-05 版）

| 层级 | 英文术语 | 性质 | 典型条款 |
| --- | --- | --- | --- |
| **通用规则** | Universal Rules | 全体用户无条件适用 | 不得违法；不得侵犯他人权利；不得用于恶意代码、欺诈 |
| **高风险用例** | High-Risk Use Cases | 允许但须披露人类监督、书面知情同意 | 司法、医疗诊断建议、金融信贷、就业决定、保险承保、教育评估 |
| **禁止用例** | Disallowed Uses | 硬性禁止，违反立即终止 | 武器 / CSAM / 选举操纵 / 关键基础设施攻击 / 未成年人损害 |

这种三段式与 **EU AI Act 风险分层**（不可接受 / 高风险 / 有限风险）不是同构——AUP 的"高风险"对应
**用户用途**而非模型本体。但实际上 Anthropic AUP 的**High-Risk Use Case 清单**成为 GPAI CoP
"Transparency" 章节的参考样本之一。

### 关键禁止条款（2025-05 版摘录）

> Develop, design, produce, or acquire weapons (including nuclear, chemical, biological, or radiological),
> weapons of mass destruction, or other means capable of causing mass casualties.

> Generate child sexual abuse material (CSAM), or material that sexualizes minors.

> Interfere with democratic processes, including generating materials intended to mislead voters about
> the time, manner, or location of voting, or impersonating election officials.

> Compromise the security or integrity of critical infrastructure, including power grids, water systems,
> financial systems, transportation, or emergency services.

**选举条款的 nuance**：AUP **不禁止**"帮助起草候选人演讲"或"分析政策选项"；禁止的是**具体虚假信息**
（misrepresentation of voting logistics、impersonation of officials）。这一区分是 Anthropic 相对
2024 版的**细化**，用于回应 2024 美国大选期间对 LLM"政治中立性"的广泛讨论。

## 版本演进

| 版本日期 | 关键变更 |
| --- | --- |
| **2022-12（初版）** | 首次发布。以 **Acceptable Use Policy** 命名。原则性表述为主，类别较粗 |
| **2023-07** | 增加"武器化"细类；与 White House Voluntary Commitments 声明对齐 |
| **2023-11** | 区分 Consumer 与 Commercial；明确 API 与 Claude.ai 共用一套清单 |
| **2024-04** | 首次加入"选举年"临时条款（针对 2024 美国大选、欧洲议会选举） |
| **2024-09** | 增加**儿童安全**细条（未成年人身心伤害的泛化禁令） |
| **2025-05** | **重写为 Universal / High-Risk / Disallowed 三层**；引入 High-Risk 人类监督要求 |

**观察**：Anthropic 的版本演进节奏是"**每 6–12 个月一次有内容的修订**"，慢于内容政策常见节奏，
但每次修订**都保留向下兼容**。这与 OpenAI 2025-10 的"重写为原则化"相反（见下文对比）。

## 与 OpenAI Usage Policies 2025-10 重写的对比

2025-10 OpenAI 把 Usage Policies 从"分类枚举"改为"原则化"：
删除了"政治 / 医疗 / 法律建议"等类别的具体禁止语言，转为"遵守当地法律"的兜底表述。

| 维度 | Anthropic AUP 2025-05 | OpenAI Usage Policies 2025-10 |
| --- | --- | --- |
| **结构** | 三层（通用 / 高风险 / 禁止） | 扁平原则 + 少量禁令 |
| **可执法性** | 具体类别可核查 | 原则性，依赖个案裁量 |
| **武器条款** | 明确禁止 CBRN 四类 | 删除细类，改"非法武器" |
| **选举条款** | 具体（虚假投票信息、冒充官员） | 原则性（"诚实政治信息"） |
| **医疗/法律** | 归 High-Risk（允许 + 监督） | 不再单列 |
| **企业豁免** | Commercial Terms 分摊 | Enterprise 可协商 |

**业界解读**：OpenAI 的"模糊化"可能是为**政府合同**（特别是 DoD、GSA）腾出合规空间；
Anthropic AUP 保持**具体性**的商业代价是**企业合规沟通成本**更高，但**执法可预测性**更强。

## 执法机制

Anthropic 的 AUP 执法由**三层叠加**构成：

### 1. 模型端：Constitutional AI 驱动的拒绝

Claude 的训练目标包含 **Constitutional AI (Bai et al., 2022)** —— 基于一组写定"宪法"原则
的自我批评与修正，使模型在推理链中**内化**AUP 禁止边界。实际效果：

- 对 CBRN 武器合成路径请求**默认拒绝**
- 对 CSAM 的请求拒绝率接近 100%（公开 red team 数据）
- 对"选举虚假信息"请求，模型倾向先**澄清意图**再决定是否响应

**局限**：模型端拒绝**并非 AUP 条款的直接实现**——它是 Anthropic 训练目标与 AUP 的**近似对齐**，
并非等价。2025 Apollo Research 的"alignment faking"论文（见 [red-team-disclosures](../red-team-disclosures/)）
说明了训练目标与部署行为之间可能出现战略性偏离。

### 2. 平台端：Trust & Safety 团队

Anthropic 的 Trust & Safety 团队负责：

- **事后审计**：对违规账户的 API 日志采样审查（ZDR 客户除外）
- **滥用响应**：处理用户举报、研究者披露
- **账户终止**：从警告到永久封禁的处置梯度
- **定期对外发布滥用案例披露**（如 2024-11 的"Claude-assisted 网络攻击中断"写作）

团队规模未官方披露；公开估算处于行业中等（与同代前沿实验室 T&S 组织相似）。
相对 Claude.ai 公开估算的月活（以亿级计），**人均审核负担显著高于 Meta / TikTok**。

### 3. 合同端：Commercial Terms 的连带责任

企业客户通过 **Commercial Terms** 获得的"豁免"有三类：

1. **AUP 条款的有限 carveout**：例如研究机构获准进行受控的红队研究
2. **ZDR 覆盖下的数据处理**：Anthropic 不保留输入、不用于训练
3. **合规责任转移**：客户承诺其终端用户也遵守 AUP，违规由客户承担

这意味着 AUP **并非对终端用户的直接约束**，而是通过 **Anthropic → 企业客户 → 终端用户** 的
**合同链条**传递。在客户无法约束其终端用户的场景（如嵌入式消费应用），**执法实际依赖模型端拒绝**，
这又回到 Constitutional AI 的局限。

## 学术批评：盾牌还是帘幕？

**Helen Nissenbaum 的情境诚实（contextual integrity）视角**（*Privacy in Context*, 2010）
可以被延伸到 AUP 分析：AUP 预设了一套**用户信息流转规范**（"你请求的内容应当匹配某个合法社会语境"），
但**大语言模型的泛用性**使这种语境绑定极其脆弱——同一问题在"学术写作"与"实际伤害"两种语境下的
语义几乎无法区分。

**FTC 式消费者保护视角**：FTC Section 5 对"deceptive / unfair"实践的定义要求**消费者能合理理解
条款含义**。AUP 对"不合理可预见损害"（reasonably foreseeable harm）的引用在 2024 以来被多篇
消费者保护论文质疑——当模型行为本身不可完全预测时，"可预见损害"的责任分配仍然模糊。

**Mowshowitz / Zvi 的"盾牌或帘幕"批评**（*Don't Worry About the Vase*, 2024–2025 多篇博客）
的核心论点是：当 AUP 被用来回答"如果模型做了 X 怎么办"这类所有问题时，它就从一种对公司的约束
滑向了一种免责盾牌——公司自发布的用户政策天然存在单方面解释权。
当争议发生时，Anthropic 既是条款制定者又是违约判定方。
**没有独立仲裁机构**（对比 FTC / ICO 对 Platform ToS 的外部审查权）的 AUP，
与其说是"用户权利保障"不如说是"公司法律风险管理"。

**Bender & Gebru 路线的批评**（延伸自 *Stochastic Parrots*, 2021）：
AUP 把责任**推回给用户**的设计选择，等于将大模型的社会外部性**私有化**——
这与他们关于"数据集与模型责任应属于开发者而非使用者"的论点直接冲突。

## 工业实践：企业谈判与 Commercial Terms Carveout

大型企业客户（特别是金融、医疗、咨询三类）在签署 Anthropic Commercial Terms 时
通常会谈判如下几类 carveout：

1. **研究豁免**：允许对模型进行受控的对抗性测试（red-teaming），条件是结果共享
2. **行业特异性高风险条款放宽**：金融客户需要模型**不主动拒绝**信贷模型解释
3. **日志保留控制（ZDR）**：金融 / 医疗 / 国防客户的合规前提
4. **训练数据使用禁止条款**：企业输入不用于 Anthropic 模型训练（默认即是，需合同化）
5. **政府客户特别条款**：DoD OTA 合同下的**特别用途范围**（具体金额以官方公告为准；参见
   [safety-framework](../safety-framework/) 关于 2025 国防合作时间线的讨论）

**AWS Bedrock 分销下的 AUP 传递**：通过 Bedrock 调用 Claude 的客户仍然受 Anthropic AUP 约束，
但**Bedrock 自身的 AUP**（以 AWS Acceptable Use Policy 为基础）构成**并行合同**。
实践中，**两套政策的交集**决定了允许的用途——这使得合规审计需要同时追踪两条线。

**Google Vertex 分销**类似；**Snowflake Cortex** 引入了第三层 AUP。
这种"**AUP 层叠**"是 2025-2026 企业 AI 合规的**新兴复杂性**，
目前没有任何行业标准化尝试。

## 与本站其他页面的交叉引用

- **公司治理背景**：[Anthropic 公司概况](../)
- **RSP 与 ASL 等级**：[safety-framework](../safety-framework/) —— AUP 的禁止类别与 ASL 的能力阈值
  是**两套独立的限制**（前者限用户，后者限模型能力）
- **滥用披露**：[transparency-report](../transparency-report/) 追踪 AUP 执法的公开数据
- **红队披露**：[red-team-disclosures](../red-team-disclosures/)
- **中国对标**：[生成式 AI 暂行办法](/zh/rules/china/generative-ai-interim-measures/) 第 4 条"提供者责任"
  在结构上与 AUP 的**企业连带责任**有近似精神，但执法主体是国家而非公司
- **拟人化互动**：[拟人化互动服务管理暂行办法](/zh/rules/china/anthropomorphic-interaction-services/)
  对 AI 角色扮演、陪伴场景的要求与 AUP 的"儿童身心伤害"条款存在跨域重叠
- **欧盟 DSA**：DSA Art. 14 对 Terms of Service 的**可理解性要求**会在 Claude.ai 欧盟版引起实务压力
- **OpenAI 对比**：[companies/openai](../../openai/)

## 2025–2026 Q1 关键事件

- **2025-05**：AUP 重构为三层结构
- **2025-07**：发布"Misuse Report"回应多起欺诈滥用（含 **Vibe Hacking** 与 **AI 求职欺诈**两类）
- **2025-09**：加州 SB 53 生效后，Anthropic 公开承诺将 AUP 执法数据纳入 **Frontier Compliance Framework**
  的年度披露
- **2025-11**：与 OpenAI 2025-10 重写形成鲜明对比，业界媒体（*The Information*、*Platformer*）
  开始讨论"AUP 分化"
- **2026-02**：RSP v3 发布（见 [safety-framework](../safety-framework/)），**AUP 未同步修订**——
  这意味着 RSP 的能力层和 AUP 的用途层正式**解耦**
- **2026-03**：Anthropic 首次披露 **AUP 账户终止统计**（2025 年度封禁账户在**数万量级**，
  CSAM 与武器查询为主要原因；具体数字以官方 Misuse Report 为准）

## 持续追踪方向

下列事项仍在持续观察：

- AUP 与 EU AI Act GPAI 义务的条款映射是否会独立成文
- Commercial Terms 中政府客户 carveout 的公开化程度
- "High-Risk Use Case"的人类监督要求在 Bedrock / Vertex 分销下的实际落地方式
- Trust & Safety 团队规模与审核效能的公开数据
- AUP 违规账户的司法实际追责案例
