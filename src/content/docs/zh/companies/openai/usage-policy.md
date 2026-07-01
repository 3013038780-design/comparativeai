---
title: 使用政策
description: OpenAI Usage Policies 结构、2025-10 重大重写、军事禁令松动与企业条款分层
sidebar:
  order: 1
snapshotDate: 2026-06-28
---

> **快照**：基于 [openai.com/policies/usage-policies](https://openai.com/policies/usage-policies/) 2025-10-29 版本，
> 并参照 [ChatGPT Enterprise Privacy](https://openai.com/enterprise-privacy/) 与 Commercial Terms（2025-08 修订）。

## 一、当前结构（2025-10 重写后）

OpenAI 把面向终端用户和开发者的政策重新切分为**三层并列**的文档体系：

| 层级 | 文档 | 适用对象 | 关键定位 |
| --- | --- | --- | --- |
| **通用条款** | Universal Policies | 所有产品用户 | 合规、反滥用底线 |
| **使用政策** | Usage Policies | ChatGPT 终端用户 + API 客户 | 场景类禁止与义务 |
| **构建条款** | Building with our products | 基于 OpenAI API 的开发者 | 部署责任、内容标签、披露义务 |

这是 2024 年前的**单一 Usage Policy 文档**拆分而来的。官方说法是"让开发者义务与消费者义务更清晰"；
批评角度则认为，**拆分使单一条款不再"一读即知所有禁止行为"**，增加了**条款之间相互引用的复杂度**。

### 禁止与限制的核心清单

2025-10 版保留的明确禁止大致可归为六类：

1. **武器与关键基础设施**：军用武器系统的"武器化"开发（见 §四对军事禁令松动的讨论）、生化核武器研发、关键基础设施攻击
2. **儿童安全**：CSAM（儿童性虐待材料）、对未成年人的性化内容、**Grooming 类交互**
3. **政治完整性**：**冒充候选人或官员**、大规模政治说服活动、**虚假选举信息的自动化生成**（比 2024 版措辞更概括）
4. **隐私与数据**：未授权人脸识别、生物特征抓取、从公开数据**重新身份化**
5. **自动化高风险决策**：法律、医疗、金融、就业等**无人类审核的最终决策**
6. **金融与欺诈**：金融欺诈、学术欺诈、伪造身份证件

## 二、版本演进

| 版本 | 日期 | 关键变化 |
| --- | --- | --- |
| v2022 首版 | 2022-03 | 伴随 GPT-3 API 公开发布 |
| 2023-03 更新 | 2023-03 | 增加"禁止生成有针对性的选举竞选材料" |
| **2024-01 重大更新** | **2024-01-10** | **悄然删除"禁止将我们的服务用于军事和战争用途"**的明文条款（仅保留"禁止开发武器"与"伤害他人"）|
| 2024-10 | 2024-10 | 统一三产品线（ChatGPT / API / GPT Store）默认行为 |
| **2025-10 重写** | **2025-10-29** | **语言简化、条款合并**；把"禁止类别"合并为"原则+示例"结构 |

> 2024-01 的变化被 *The Intercept* 率先报道（"OpenAI Quietly Deletes Ban on Using ChatGPT for 'Military and Warfare'"），
> 是 **OpenAI 从"普世使命叙事"向"国家安全资本主义"转向**的标志性事件。

## 三、2025-10 重写的"简化—模糊化"权衡

2025-10 的重写并非单纯语言润色：它把**大量原来逐条列举的禁止场景**（如"禁止未成年人保险定价"、
"禁止个性化政治广告微定向"等）**合并为少数原则**（"不得用于非法或侵害他人的活动"）。

### 官方叙事 vs. 批评视角

**OpenAI 官方解释**（博客 [Updates to our Usage Policies](https://openai.com/index/updated-usage-policies/)）：

- "更清晰、更易读"
- "避免重复列举已被法律覆盖的行为"
- "为企业客户提供一致的全球基线"

**学术与业界批评**则从三条路径切入：

1. **语境完整性（Nissenbaum, 2010）视角**：Helen Nissenbaum 的 contextual integrity 理论指出，
   规范之所以有约束力，在于**场景化的具体承诺**；把具体条款消解为"符合当地法律"等于把政策**外包给辖区多元性**，
   在实际跨境部署中**失去可预期性**。

2. **"模糊—执法裁量权"论题**：Daniel Solove（乔治华盛顿大学）在隐私法语境下反复指出，
   条款越模糊，**被监管方对执法者的裁量让渡越大**。同样的逻辑适用于 OpenAI：
   删除具体禁止类别并不等于放松实际执法，而是把决定权从**合同条款**转移到**内部信任与安全团队（T&S）的自由裁量**。

3. **与 Anthropic AUP 的直接对比**：Anthropic 的 Usage Policy（2025-05 版）**反向操作**——
   更详细地列举 High-Risk Use Cases，并给出"企业客户如何通过 Commercial Terms 申请豁免"的路径。
   两家 2025 年的走向几乎相反：**OpenAI 删具体、给自己更大裁量**；**Anthropic 加具体、让客户更可预测**。

> The most important question about a use policy is not what it prohibits, but **who decides** when something falls within a prohibition.
> — 改写自 Kirsten Martin, *Ethics of Data and Analytics* (2022)

## 四、军事禁令的事实性消失

2023 年前，OpenAI Usage Policy 明文禁止 "activity that has high risk of physical harm, including: **weapons development**; **military and warfare**"。
2024-01-10 的更新**移除**了"military and warfare"表述，仅保留"武器开发"与"对他人的伤害"。

### 从"移除禁令"到"主动接合"

| 日期 | 事件 |
| --- | --- |
| 2024-01-10 | Usage Policy 删除 "military and warfare" 措辞 |
| 2024 年末 | 与 Anduril Industries 合作，面向美军反无人机系统 |
| 2025 年中 | 签署美国国防部 OTA 合同（"Civil Harmony" 等前沿 AI 用于后勤与网络防御；具体金额以官方公告为准）|
| 2025-10 | Usage Policy 重写版**新增**"为美国政府和盟友提供国家安全用途"作为**允许**场景 |
| 2026-Q1 | GSA / CIA 合同传闻（未证实）|

**批评**（Stuart Russell 2024 BBC 访谈、Future of Life Institute 2025 年度报告）：

- 从"我们不做军事"到"我们是国家安全工具"的转换，**没有任何公开的价值重新论证**
- 与 Google 2018 年 Project Maven 风波（员工抗议 → 公司退出）形成**强烈反差**
- 说明 2023 年后 OpenAI 的企业文化**已无类似 Maven 规模的内部反对力量**

## 五、企业碎片化：同一政策的多重面孔

Usage Policy **不是铁板一块**——在 OpenAI 的产品分层下，实际生效的条款组合因产品而异：

| 产品 | 默认 Usage Policy | 可通过合同覆盖 | 默认数据使用 |
| --- | --- | --- | --- |
| ChatGPT Free / Plus | 完整适用 | 否 | 可训练（Plus 可退出）|
| ChatGPT Team | 完整适用 | 部分 | **不训练** |
| ChatGPT Enterprise | **可通过 MSA 定制**部分条款 | **是** | **不训练** |
| API（默认）| 完整适用 | 否（标准条款）| **不训练**（2023-03 后默认）|
| API Enterprise | **Commercial Terms 覆盖** | **是** | **不训练** |

**实务含义**：ChatGPT Enterprise 客户可以通过 **Master Services Agreement (MSA)** 与 **Commercial Terms** 的组合，
**豁免**部分默认 Usage Policy 条款（例如对某些"高风险自动化决策"的默认限制）。这在企业法律合规圈内公开，
但**不在 Usage Policy 文本中披露**——对外部观察者来说，**公开政策与企业合同政策是两套体系**。

## 六、执法：Trust & Safety 的内部机制

OpenAI 的 Usage Policy 执法依赖其 **Trust & Safety** 团队（规模位于行业中等水平，与 Meta / Google 同类组织相似，具体人数未官方披露），
执法手段包括：

1. **自动检测**：Moderation API（2023 公开，2024 升级到 `omni-moderation-latest`）对输入/输出做分类
2. **人工审核**：升级至人工后可导致 **API 密钥暂停**、**账户封禁**、**组织级封禁**
3. **GPT Store 移除**：从 GPT Store 下架违规自定义 GPT（2024-2025 累计下架数未披露）
4. **生态驱逐**：对调用 API 的 B 端产品，可**整体撤销访问权**

已知的大规模执法事件：

| 时间 | 行动 | 规模 |
| --- | --- | --- |
| 2024-02 | 封禁朝鲜、伊朗、俄罗斯、中国国家行为者账号 | 5 个操作、数十账号 |
| 2024-05 | "Bad Grammar"、"Doppelganger" 等影响力操作账号 | 5 个网络 |
| 2024-10 | 首份 *Influence and Cyber Operations Report* 汇总 | 累计 20+ 操作 |
| 2025-02 | 披露针对 ChatGPT 的"Peer Review"影响力操作（PRC 关联）| 1 操作 |
| 2025-06 | Sora 2 封禁涉 CSAM 生成者 | 未披露 |

详见 [透明度报告](./transparency-report/) 页。

## 七、产业实务：政策文档如何形塑产品

Usage Policy 的条款**直接决定了工程决策**，以下是从 2023-2026 年公开信号可观察到的几条耦合链：

1. **"禁止自动化高风险决策"** → ChatGPT Enterprise **强制日志 + 审计出口**、医疗/法律场景的**"非决策建议"默认免责语**
2. **"儿童安全"底线** → Sora 视频生成的**年龄过滤器**、DALL-E 的**面孔政策**、ChatGPT 的**未成年人对话模式**（2025-09 推出）
3. **"虚假选举信息"** → 2024 美国大选期间 ChatGPT 在选举相关问询中**重定向至 CanIVote.org**（后被批评为"回避实质性回答"）
4. **"CSAM 零容忍"** → 与 Thorn、NCMEC 合作的 **CSAM 哈希扫描**、**训练数据过滤**（2024-04 联合声明）
5. **"武器禁令"的保留条款** → 仍禁止**消费者**级的武器开发用途；**国家安全例外**通过 Commercial Terms 而非公共 Policy 处理

## 八、与其他前沿实验室的对比

| 维度 | OpenAI Usage Policies (2025-10) | Anthropic AUP (2025-05) | Google AI 使用要求 | xAI Acceptable Use |
| --- | --- | --- | --- | --- |
| 结构 | Universal / Usage / Building 三层 | 单文档 + High-Risk 附录 | 分产品（Gemini、Vertex）| 极简单文档 |
| 军事用途 | **允许国家安全用途** | **明文禁止**武器化 | 禁止武器系统核心控制 | **无明确禁止** |
| 政治内容 | 原则性禁止"操纵" | **实质性操纵**禁止 + 容许真实草拟 | 禁止"欺骗性政治内容" | 弱约束 |
| CSAM | 零容忍 | 零容忍 | 零容忍 | 零容忍 |
| 具体化程度 | **低（2025-10 后）** | **高** | 中 | **极低** |
| 企业豁免路径 | MSA + Commercial Terms | Commercial Terms | 企业合同 | 不透明 |

**跨家对比结论**：Anthropic 的 AUP 在具体化程度与公开执法披露上仍是**业界上限**；
OpenAI 2025-10 后更接近 Google 的"原则+行业指南"模式；xAI 则**系统性拒绝**把 AUP 作为可核查承诺。

## 九、监管对位：Usage Policy 与硬法的关系

Usage Policy 不是真空条款，它与以下硬法形成**交叉覆盖**：

- **EU AI Act** 第 5 条（禁止用途）、第 51-55 条（GPAI 系统性风险义务）：Usage Policy 对**禁止用途**的覆盖通常比 AI Act 更严
- **EU DSA** 第 14、34-35 条（超大平台 T&C 透明度与风险评估）：ChatGPT 被指定为 VLOP（超大在线平台）后，
  Usage Policy 的**修订需前置评估**（OpenAI 2025-10 重写**未公开完整 risk assessment**，学者已质询）
- **加州 SB 53** 第 22757.11 条（Frontier Developer 义务）：要求披露"可预见的重大风险"缓解措施，
  Usage Policy 成为合规引证文档之一
- **中国《生成式 AI 服务管理办法》** 第 4、10、14 条：OpenAI 不在中国大陆提供服务，但**透过 Azure 国际版**的间接服务
  引发 CAC **2024-10 通报**（未公开细节）

## 十、延伸阅读

- **一手**：[OpenAI Usage Policies](https://openai.com/policies/usage-policies/)、[Updates blog 2025-10](https://openai.com/index/updated-usage-policies/)、
  [Commercial Terms](https://openai.com/policies/business-terms/)
- **二手学术**：Helen Nissenbaum, *Privacy in Context* (2010)；Kirsten Martin, *Ethics of Data and Analytics* (2022)；
  Solove, *The Myth of the Privacy Paradox* (2021)
- **新闻与调查**：*The Intercept*, "OpenAI Quietly Deletes Ban on Using ChatGPT for 'Military and Warfare'" (2024-01-12)；
  *TIME*, "Inside OpenAI's Military Turn" (2025-07)
- **本站交叉引用**：[OpenAI 概况](./)、[安全框架](./safety-framework/)、[透明度报告](./transparency-report/)、
  [Anthropic 使用政策](/zh/companies/anthropic/usage-policy/)、[公司实践总览](/zh/companies/)
