---
title: Anthropic
description: Anthropic 公司概况、RSP v3 深度分析、行业自律立场（2026-04-22）
sidebar:
  order: 1
  label: Anthropic
snapshotDate: 2026-04-22
---

> **🆕 2026 Q1 重大更新**：**RSP v3 发布（2026-02-24）** —— 分离"单方承诺"与"行业共同义务"，
> 放弃 pause 承诺；Risk Reports 每 3-6 个月发布；[SB 53 Frontier Compliance Framework](https://www.anthropic.com/news/compliance-framework-SB53) 作为加州合规路径。

## 公司概况

- **成立**：2021（创始人 Dario Amodei、Daniela Amodei 等 OpenAI 前成员）
- **总部**：San Francisco, California, USA
- **主要模型**：Claude 系列（Claude Opus 4.7 / Sonnet 4.6 / Haiku 4.5）
- **商业模式**：Claude.ai 消费 / API / Claude Code / 企业 / AWS Bedrock / Google Vertex 分销
- **融资轨迹**：Google $4B（2023）、Amazon $8B（2024 累计）；2026 估值超 **$60B**
- **差异化叙事**：**安全优先前沿实验室**；Constitutional AI + 机制可解释性研究主导的品牌

## 深度分析：RSP 作为行业自律模式的起源与演进

### 为什么 RSP 是"行业自律大头"的起点

2023-09 Anthropic 首次发布 **Responsible Scaling Policy (RSP)**，将 AI 安全承诺结构化为：

- **AI Safety Level (ASL)** —— 参照生物安全等级（BSL-1 到 BSL-4）的风险分级
- **Capability Thresholds** —— 触发 ASL 升级的能力阈值
- **Safeguards Required at Each Level** —— 每级对应的部署和内部安全要求
- **Pause Commitment**（v1 / v2 原版）—— 若达到阈值但安全措施未到位，**停止训练或部署**

**制度意义**：RSP 是**全球首个结构化的自愿 AI 安全框架**，为后来 OpenAI Preparedness Framework、
Google DeepMind FSF、Meta Frontier AI Framework 等提供模板。Frontier Model Forum（2023 成立）
以此为共同语言。**加州 SB 53、EU GPAI CoP 的"Safety and Security"章节都部分对标 RSP 结构**。

### 版本演进时间线

| 版本 | 日期 | 核心变化 |
| --- | --- | --- |
| v1.0 | 2023-09 | 首发。ASL-1 到 ASL-4 框架；明确 pause 承诺 |
| v2.x | 2024-10 至 2025-10 | 多次小幅更新；2025-05 对特定模型激活 ASL-3（生化武器辅助能力阈值） |
| **v3.0** | **2026-02-24** | **结构性重写**（下文详述）|

### RSP v3 深度解读：**行业自律的结构性转向**

**核心变化**：把 RSP 拆成**两类义务**：

1. **Anthropic 无论其他公司做什么都会做的缓解措施（unilateral commitments）**
2. **"能力—缓解"映射：Anthropic 认为整个行业都应采用、否则不足以管理风险的标准**（industry-wide recommendations）

**关键后果**：
- **RAND Security Level 4**（最高级的**模型权重保护**，防范国家级行为者）从单方承诺**降级为行业建议**
- **Pause 承诺被撤销**：v2 原版明文"如果达到阈值而安全措施未到位就停止"，v3 **无此条款**
- Anthropic 官方解释：某些承诺只在**行业齐步**时才有意义；单方承担只会**失去市场地位而不真正降低风险**

**争议焦点**（业界普遍批评，包括 *TIME*、GovAI、Zvi Mowshowitz 等）：
1. **"竞争压力合理化"的危险**：一旦允许"看同行做什么再决定自己做什么"，安全承诺会**下行螺旋**
2. **五角大楼压力**：Anthropic 2025 与美国国防部 OTA 签署 $200M 合同；RSP v3 降级恰好在合同生效后 6 个月
3. **"industry-wide" 的不可执行性**：没有机制确保"行业"真的采纳，实际等于**无承诺**

**Anthropic 的反驳**：
- 新增 **Risk Reports**（每 3-6 个月）+ **外部审查方"无删减"访问权**（2026-04 首批外部审查方含 GovAI、MATS、METR）
- **不降低既有缓解措施**：ASL-3 保护对 Claude Opus 4+ 仍适用
- 发布 **Frontier Safety Roadmap** 含公开可问责指标

### 与其他前沿实验室的对比

| 维度 | Anthropic RSP v3 | OpenAI Preparedness v2 (2025-04) | Google DeepMind FSF v3 (2026-04) |
| --- | --- | --- | --- |
| 结构 | **能力等级**（ASL-2/3/4）+ 对应缓解 | **威胁类别 × 阈值**（High / Critical）| **Critical Capability Levels (CCLs)** + **Tracked CLs (TCLs)** |
| 风险领域 | 生化武器、网络、自主、说服 | 生化、网络、自我改进（+ 长期自主、沙袋、自主复制等"观察"类）| 网络、自主 ML 研究、操纵、CBRN |
| Pause 承诺 | **已撤销**（v3）| 本来就没有（"必要时暂停"措辞弱）| 无明确 pause |
| 外部审查 | **明确有**（Risk Reports 含外部方） | Safety Advisory Group（内部+外部混合）| 发布模型 FSF 报告（如 Gemini 3 Pro FSF Report, 2025-11）|
| 主要批评 | 放弃 pause / 竞争妥协 | arxiv 2509.24394 "不保证任何缓解实践"| TCL 门槛模糊 |

**关键观察**：**三家框架看似不同，但 2025-2026 都经历了"松动"**。这既可能反映"实际风险没那么高"，
也可能反映"行业自律在竞争中不可持续"——需要**外部硬法**（EU AI Act、加州 SB 53、EO 14365 后续立法）
来锁定安全义务。

## 使用政策（AUP）的关键分析

Anthropic **Usage Policy**（2025-05 最新版）与其他前沿实验室相比：

- **更强的武器化限制**：明确禁止"武器或危险化学、生物、核材料的开发、设计、生产、获取"
- **更具体的儿童保护条款**：CSAM 生成禁令 + 对未成年人"显著身心损害"的泛化禁令
- **选举类场景的 nuance**：禁止"实质性政治操纵"但允许"辅助起草真实政治内容"
- **企业条款**：分 Consumer Usage Policy 和 Commercial Terms，企业合规负担分摊

**与 OpenAI Usage Policies 的对比**：OpenAI 2025-10 更新后缩短并模糊化（删除部分具体禁止类别，
转向原则性表述）；**Anthropic AUP 保持更具体、更可执行**。

## 公开政策文档快照

| 类型 | 文档名 | 链接 | 本站子页 |
| --- | --- | --- | --- |
| 使用政策 | Anthropic Usage Policy (AUP) | [anthropic.com/legal/aup](https://www.anthropic.com/legal/aup) | [usage-policy](./usage-policy/) |
| 模型卡 | Claude Model Card（各版本）| [anthropic.com/claude](https://www.anthropic.com/claude) | [model-card](./model-card/) |
| 安全框架 | **RSP v3** (2026-02-24) | [anthropic.com/news/responsible-scaling-policy-v3](https://www.anthropic.com/news/responsible-scaling-policy-v3) | [safety-framework](./safety-framework/) |
| SB 53 合规 | Frontier Compliance Framework | [anthropic.com/news/compliance-framework-SB53](https://www.anthropic.com/news/compliance-framework-SB53) | — |
| 透明度报告 | Transparency Hub | [anthropic.com/transparency](https://www.anthropic.com/transparency) | [transparency-report](./transparency-report/) |
| 红队披露 | Frontier Red Team 论文 / 博客 | [anthropic.com/research](https://www.anthropic.com/research) | [red-team-disclosures](./red-team-disclosures/) |

## 监管合规立场分析

### 面向美国

- **2023 White House Voluntary Commitments**：首批签署方
- **Frontier Model Forum**：创始成员
- **加州 SB 53**：**明确 endorse**（业界唯一），发布 [Frontier Compliance Framework](https://www.anthropic.com/news/compliance-framework-SB53) 作为合规路径
- **EO 14365 (州法抢占)**：隐性不满，但未公开反对
- **Dario Amodei 参议院证词**（2023、2024）：**公开呼吁硬性联邦 AI 监管**，罕见在大厂中

### 面向欧盟

- **GPAI Code of Practice**：**完整签署**（2025-08-01 首批，全部三章）
- **AI Act 第 51-56 条 GPAI 义务**：Claude 系列超 10²⁵ FLOP 门槛，已准备系统性风险文档

### 面向中国

- **不直接进入中国市场**
- AWS Bedrock 全球版可在中国非公开企业客户访问；豆包等国内服务不含 Claude
- 技术出口受 BIS 管制约束

### 面向英国

- **UK AISI (AI Safety Institute)** 预部署测试合作协议首批方（2024）
- 2024 Bletchley、2025 Seoul、2025 Paris AI Summit 签署所有主要声明

## 行业自律立场：**"强监管支持者"叙事的矛盾**

Anthropic 的自律姿态有**三重张力**：

1. **修辞支持硬法 vs. 实际游说**：公开呼吁监管，但 2024 在加州 SB-1047 上**公开反对**最终版本；
   2025 对 SB 53 endorse 是转向
2. **单方承诺 vs. 竞争均衡**：RSP v3 承认"只有自己做安全没用"，但这削弱了"道德领导者"叙事
3. **研究独立性 vs. 资本依赖**：Amazon $8B + Google $4B 的深度绑定是否影响治理立场？公司未公开披露

**相对其他前沿实验室，Anthropic 的自律仍是最重的**，但 2026 开始出现**"竞争压力下的退让"**迹象。

