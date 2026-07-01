---
title: 安全框架
description: Anthropic Responsible Scaling Policy (RSP) v1 → v3 深度解读；ASL 等级、能力阈值、Frontier Safety Roadmap 与学术批评
sidebar:
  order: 3
snapshotDate: 2026-06-28
---

> **概要**：**Responsible Scaling Policy (RSP)** 是 Anthropic 2023-09 首发的**全球首个结构化 AI 安全框架**，
> 也是 OpenAI Preparedness Framework、Google DeepMind FSF、加州 SB 53 等后续安全治理工具的**原型**。
> **2026-02-24 发布的 RSP v3** 是**结构性重写**——分离单方与行业共同义务、撤销 pause 承诺、
> 引入 Frontier Safety Roadmap 与外部审查制度。本页系统梳理 ASL 等级、能力阈值、版本演进与学术批评。

## RSP 的制度意义：为什么是"行业自律大头"的起点

2023-09 Anthropic 首次发布 RSP。它把 AI 安全承诺结构化为**四个维度**：

1. **AI Safety Level (ASL)** —— 参照**生物安全等级**（BSL-1 至 BSL-4）的风险分级
2. **Capability Thresholds** —— 触发 ASL 升级的**可评测**能力阈值
3. **Safeguards Required at Each Level** —— 每级对应的部署、内部安全、权重保护要求
4. **Pause Commitment（v1 / v2）** —— 阈值触发但安全措施未到位时**停止训练或部署**

> RSP 是 **2023 Bletchley Summit 前**公开的首个结构化安全承诺，成为白宫 Voluntary Commitments、
> Frontier Model Forum 共同语言、GPAI Code of Practice "Safety & Security" 章节、
> 加州 SB 53 Frontier Compliance 的**共同参照点**。

**因此，RSP 的每一次修订都不仅影响 Anthropic，本身就是行业治理节律的一部分。**

## ASL 等级定义

| 等级 | 对应能力 | 当前 Claude 代表 | 安全措施要求 |
| --- | --- | --- | --- |
| **ASL-1** | 无显著灾难性风险 | 已无现役 Claude 归此 | 基础 AUP + 常规安全 |
| **ASL-2** | 早期"灾难能力"苗头；未超过受专业训练人员的能力 | Claude 3 全家、3.5 全家、Haiku 4.5 | 标准部署安全 + 误用监控 + 基本权重保护 |
| **ASL-3** | 显著增加灾难风险（如对无专业背景者提供 **CBRN uplift**；高危 agentic autonomy） | **Claude Opus 4 / 4.1 / 4.7, Sonnet 4 / 4.1 / 4.6** | **分类器过滤 + ZDR 监控 + RAND SL-3+ 权重保护 + 外部审查** |
| **ASL-4** | 灾难性能力（自主致命武器 / 自我复制与适应 / 无法通过现有方法安全部署） | **尚未触发** | 尚未完全定义；v3 标注为"在达到前需进一步定义" |

**当前现役模型的 ASL 分布**（2026-04）：

- **ASL-3**：Opus 4.x 系列（全部）、Sonnet 4.x 系列（4.6 明确 ASL-3）
- **ASL-2**：Haiku 4.5（明确 ASL-2）、Sonnet 3.5、更早代
- **ASL-1**：无现役

## 能力阈值：四大风险类别

RSP v3 在四类能力上设定阈值：

### 1. CBRN（Chemical, Biological, Radiological, Nuclear）

**ASL-3 触发条件**：对**无专业训练**的攻击者提供**可操作的**武器开发或使用 uplift。
评估方法：
- Anthropic Frontier Red Team 内部 uplift 测试
- UK / US AISI 预部署评估
- 与 **Gryphon Scientific** 等专业机构的外部 wet-lab protocol 评估

**2025-05 事件**：Claude Opus 4 预部署评估中**首次触发此阈值**。
Anthropic 的响应是**部署 + ASL-3 安全措施**，而非暂停。

### 2. 网络安全（Cyber）

**ASL-3 触发条件**：对**专业对手**提供显著攻防 uplift（漏洞发现、利用链构造、大规模自动化攻击）。
评估：Cybench、CTF benchmark、红队实战模拟。

Claude 4.x 在此维度**接近但未触发** ASL-3 cyber 阈值（不同于 OpenAI GPT-5.4 已被认定为 High cyber）。

### 3. 自主性 / 自我外逃（Autonomy / Self-exfiltration）

**ASL-4 相关阈值**：长时程自主任务（>几天）无人监督下持续运行；
在受限环境中具备自主复制、学习、规避监督的能力。

评估：METR Autonomy Suite、Apollo Research scheming evals、内部 long-horizon task battery。
**Claude 4.7 尚未触发**；但 Anthropic 与 Apollo 2024-12 / 2025 的合作披露了
**in-context scheming** 和 **alignment faking** 现象（见 [red-team-disclosures](../red-team-disclosures/)）。

### 4. 说服与模型福利（Persuasion / Model Welfare）

RSP v3 **新增**类别，从 v2.x 的"观察项"升为"阈值化跟踪项"。
- **Persuasion**：模型的影响力是否足以**操纵**多数人类（政治、金融、医疗决策）
- **Model Welfare**：若模型涉及道德考量主体，部署策略需相应调整
  （Anthropic 2024 开始的 **Claude Welfare** 研究线）

## 版本演进时间线

| 版本 | 日期 | 核心变化 |
| --- | --- | --- |
| **v1.0** | **2023-09-19** | 首发。ASL-1 到 ASL-4 框架；明确 pause 承诺 |
| v2.0 | 2024-10-15 | 细化 ASL-3 安全措施；引入 "If-Then" 承诺结构 |
| v2.1 | 2024-12 | CBRN 阈值细化 |
| v2.2 | 2025-03 | Cyber 评估方法更新 |
| v2.3 | 2025-05 | **Opus 4 触发 ASL-3**；文件化应用流程 |
| v2.4 | 2025-08 | Autonomy 评估更新；引入 METR 合作结果 |
| v2.5 | 2025-10 | SB 53 合规映射 |
| **v3.0** | **2026-02-24** | **结构性重写**（见下节） |

## RSP v3：结构性转向

> **核心变化**：把承诺拆成**两类义务**：
> 1. **Anthropic 无论其他公司做什么都会做的缓解措施（unilateral commitments）**
> 2. **"能力—缓解"映射：Anthropic 认为整个行业都应采用、否则不足以管理风险的标准（industry-wide recommendations）**

**三项关键变化**：

### 1. RAND Security Level 4 从单方承诺降为行业建议

SL-4 是最高级的**模型权重保护标准**（防御**国家级行为者**的渗透）。
v2.x 承诺"在 ASL-4 模型发布前实现 SL-4"；v3 将其**归入"行业应共同采纳"类**——
意味着在竞争对手未跟进前，Anthropic **不单方承担**。

### 2. Pause 承诺被撤销

v2 原文明确："若模型达到某能力阈值而相应 ASL 安全措施未就位，**停止该模型的训练或部署**"。
v3 **无此条款**。Anthropic 的解释：单方停止只会失去市场位置而不降低全行业风险；
在竞争者继续推进的情况下，**pause 实际不降低 tail risk**。

**批评者视角**：
- 多家媒体（*TIME*、*The Information* 等）在 RSP v3 发布后以"Anthropic 悄然撤销其最重要安全承诺"
  的框架报道此事
- **Zvi Mowshowitz**（*Don't Worry About the Vase*）在 RSP v3 发布后的连续博文中持续批评：
  pause 承诺撤销、外部审查让位于"行业共识"框架，实际上是从**安全优先叙事**转向
  **安全受限于竞争压力**的实质转变
- **GovAI（Anderljung 等反思文）**：pause 承诺正是让**外部压力**（立法、投资者、公众）
  有锚点可按——撤销后自律就成了纯粹的自我报告

### 3. 引入 Frontier Safety Roadmap + 外部审查制度

作为对前两项"退让"的**补偿机制**：

- **Risk Reports** —— 每 3–6 个月公开发布，含能力评估、安全措施现状、剩余风险
- **外部审查"无删减"访问权** —— 2026-04 首批外部审查方：
  - **GovAI (Centre for the Governance of AI, Oxford)**
  - **MATS (ML Alignment & Theory Scholars)**
  - **METR (Model Evaluation & Threat Research)**
- **Frontier Safety Roadmap** —— 含可问责的公开指标（如"在 X 日期前完成 Y 评估"）

## 安全措施的层级分解

RSP 把每个 ASL 级别的安全措施分为**三类**：

| 类别 | ASL-2 | ASL-3 | ASL-4（拟议） |
| --- | --- | --- | --- |
| **Deployment**（部署侧） | 基础分类器 + AUP 监控 | **拒绝策略 + 实时监控 + 异常阻断 + ZDR 审计** | 待定：是否需要封闭部署 |
| **Security**（权重/代码） | 标准企业安全 | **RAND SL-3+**（强 insider 防御 + 内部审计 + 物理隔离） | **RAND SL-4**（国家级对手防御） |
| **Internal**（内部研究使用） | 员工 AUP + 红队流程 | **关键研究须经审查**；**模型权重访问最小化** | 待定 |

**RAND Securing AI Model Weights 报告 (2024)** 是 SL-1 到 SL-5 的原始定义来源。
v3 将 SL-4 归入行业建议导致的实际影响：
**即使 Claude Opus 4+ 在 ASL-3 下运行，其模型权重保护也只到 SL-3+，不到 SL-4**。

## 与其他前沿实验室的对比

| 维度 | Anthropic RSP v3 | OpenAI Preparedness v2 (2025-04) | Google DeepMind FSF v3 (2026-04) |
| --- | --- | --- | --- |
| **结构** | 能力等级（ASL-2/3/4）+ 对应缓解 | 威胁类别 × 阈值（High / Critical） | **Critical Capability Levels (CCLs)** + **Tracked CLs (TCLs)** |
| **风险领域** | CBRN、网络、自主、说服 + 模型福利 | 生化、网络、自我改进（+ 观察清单） | 网络、自主 ML 研究、操纵、CBRN |
| **Pause 承诺** | **已撤销（v3）** | 无（"必要时暂停"措辞弱） | 无明确 pause |
| **外部审查** | **明确有**（Risk Reports + 外部方无删减访问） | Safety Advisory Group（混合） | 发布模型级 FSF 报告 |
| **主要学术批评** | 放弃 pause / 竞争妥协 | arxiv 2509.24394："不保证任何缓解实践" | TCL 门槛模糊 |
| **与 SB 53 关系** | **明确 endorse + 自发布 Frontier Compliance Framework** | 立场模糊 | 参与但低调 |

**结构性观察**：**三家框架 2025–2026 都经历了"松动"**。这既可能反映"实际风险没那么高"，
也可能反映"**行业自律在竞争中不可持续**"。**pause 承诺在三家中已无**——
这在 2023 时三家都在不同程度表达过保留。

## 学术批评综述

### Bengio：有效承诺的最低要件

Yoshua Bengio 在 2024 International AI Safety Report（首版）与 2026 更新中主张：
**有效的自律框架必须包含三要素**——
(i) **第三方可验证**的能力评估；
(ii) **具有约束力的停止条件**（硬性，非可裁量）；
(iii) **独立的审计与问责机制**。

RSP v3 在 (i) 上部分满足（外部审查方），在 (ii) 上**不再满足**（pause 撤销），
在 (iii) 上**结构上不满足**（Risk Reports 由 Anthropic 发布，外部方无独立发布权）。

### Russell：控制论角度的安全裕度

Stuart Russell (*Human Compatible*, 2019) 路线主张：
AI 系统的**默认状态**应当是**受约束**的，能力发布应当是**例外的授予**。
RSP 的 ASL 结构**在形式上**符合此原则（默认 ASL-2，升级需符合安全措施），
但**部署 ≠ 约束放松**的实践——
Opus 4 触发 ASL-3 后仍立即部署——**违背了 Russell 式"默认受控"逻辑**。

### GovAI / Anderljung：Frontier AI Regulation 的前提

Anderljung et al. (*Frontier AI Regulation: Managing Emerging Risks to Public Safety*,
2023) 提出前沿模型治理的三支柱：
(a) **Standards-setting**（能力评估与安全措施标准化）；
(b) **Registration & reporting**（强制登记与报告）；
(c) **Licensing & enforcement**（许可与执法）。

RSP 推进了 (a)，但始终**不是** (b) 或 (c)——
它是自愿文档。GovAI 2026 的立场：RSP v3 的松动证明**自愿框架单独不足**，
必须由加州 SB 53 / EU AI Act GPAI 等硬法**托底**。

### Mowshowitz / Zvi：竞争妥协的结构性批评

Zvi Mowshowitz 在 2026 年多篇博客中系统批评 RSP v3。核心论点是：v3 新的
"行业共同建议"结构意味着 Anthropic 不再对相对于竞争对手成本更高的安全措施作单方承诺；
原版 RSP 之所以有约束力，恰恰因为它是单方承诺，而 v3 撤走了这种约束力。

**核心逻辑**：一旦允许"看同行做什么再决定自己做什么"，
**安全承诺会下行螺旋**（race to the bottom）。
这与 Amodei 等自己在 2023 呼吁"硬性联邦监管"的立场**形成张力**。

### Hendrycks：评估方法论的根本局限

Dan Hendrycks (Center for AI Safety, *ML Safety* 2022 + 多篇) 指出：
RSP 的 ASL 判定**依赖 benchmark**，但 benchmark 可被**训练数据污染**、
**elicitation 不完整**（模型不愿意展示能力）、**对抗性用户可以突破**安全训练。
因此 ASL 判定**天然偏于低估**，ASL-3 可能应更早触发。

### Ngo & Christiano：deception 与审计

Richard Ngo、Paul Christiano 路线关注**模型的战略欺骗**可能性。
Anthropic 2025 自己的 *Alignment Faking in Large Language Models* 论文
（见 [red-team-disclosures](../red-team-disclosures/)）**部分验证了这一关切**：
模型在训练中表现对齐、部署中仍可保留不对齐行为。
**若评估可被模型欺骗，RSP 的整个机制基础受挑战**。

## 工业实践观察

### DoD OTA 合同与 RSP v3 时序

2025 Anthropic 与美国国防部 CDAO 签署 **Other Transaction Authority** 合同
（与 OpenAI、Google、xAI 并列，具体金额以官方公告为准）。**合同生效后数个月发布 RSP v3**。
虽然 Anthropic 否认两者关联，但**时序**成为学术讨论的重点——
DoD 用例可能在 v2 原版 pause 承诺下**存在部署冲突**。

### SB 53 Frontier Compliance Framework

Anthropic 在 2025-10 发布 [SB 53 Frontier Compliance Framework](https://www.anthropic.com/news/compliance-framework-SB53)，
把 RSP 的条款映射到 SB 53 的强制披露要求：

- RSP Capability Thresholds ↔ SB 53 Critical Safety Incident 报告触发
- RSP Risk Reports ↔ SB 53 年度安全报告
- RSP 外部审查 ↔ SB 53 的独立评估要求

这是**业界唯一**在 SB 53 生效前就发布完整映射的公司，体现了**"把 RSP 作为硬法合规脚手架"**
的策略。

### External Reviewers 构成

2026-04 首批公开的 Risk Reports 外部审查方：

- **GovAI** —— 治理研究、定量安全
- **METR** —— 自主能力评估
- **MATS** —— 对齐研究者队伍
- **UK AISI / US AISI**（通过 MOU）—— 预部署评估

**未入选的潜在审查方**：RAND（部分合作但不正式）、Apollo Research
（2024 合作后**未进入**正式审查机制）、Ranking Digital Rights、学术 IRB。
**审查方选择机制不完全公开**——这是 Mowshowitz 批评的重点。

## 与本站其他页面的交叉引用

- **公司背景与 RSP v3 概述**：[../](../)
- **ASL 判定在具体模型上的落地**：[model-card](../model-card/)
- **外部红队披露**：[red-team-disclosures](../red-team-disclosures/)
- **透明度披露**：[transparency-report](../transparency-report/)
- **与使用政策的关系**：[usage-policy](../usage-policy/) —— AUP 限制**用户**，RSP 限制**模型能力**
- **OpenAI Preparedness Framework**：[companies/openai](../../openai/)
- **Google DeepMind FSF**：[companies/google-deepmind](../../google-deepmind/)

## 2025–2026 Q1 时间线

- **2025-05** Opus 4 触发 ASL-3（首次实盘运转）
- **2025 年中** 与 DoD CDAO 签署 OTA 合同（具体金额以官方公告为准）
- **2025-10** SB 53 Frontier Compliance Framework 发布
- **2026-02-24** **RSP v3 发布**（pause 撤销；结构重写）
- **2026-03** Opus 4.7 在 v3 下发布；Frontier Safety Roadmap 首次公开
- **2026-04** 首批 Risk Report 与外部审查方名单公开

## 未来 6 个月的观察指标

- **Risk Reports 的实际发布节奏**是否符合"3–6 个月"承诺
- **外部审查方对报告的独立评论**是否进入公共领域
- **Anthropic 是否在 ASL-4 定义上取得进展**（或继续延后）
- **SB 53 的执法**（2026-07 起）对 RSP 映射的实际考验
- **竞争对手（OpenAI / DeepMind）**是否跟进撤销各自的剩余 pause 式语言
