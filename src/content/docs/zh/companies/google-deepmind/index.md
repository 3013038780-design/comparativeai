---
title: Google DeepMind
description: Google DeepMind 公司概况、FSF v3 深度分析、AI 原则演变（2026-06-28）
sidebar:
  order: 3
  label: Google DeepMind
snapshotDate: 2026-06-28
---

> **🆕 2026-04-17 更新**：**FSF v3.0** 新增 **Tracked Capability Levels (TCLs)**——
> 在 CCL 触发前提前预警；新增 **"Harmful Manipulation" CCL**（规制能系统性改变信念的 AI）。
> Gemini 3 Pro 于 **2025-11** 发布配套 FSF Report（业界首个模型级 FSF 报告）。

## 公司概况

- **成立**：2010（DeepMind, London）→ 2014 被 Google 收购 → 2023 与 Google Brain 合并为 **Google DeepMind**
- **总部**：London, UK（DeepMind 起源）+ Mountain View（Google）
- **主要模型**：
  - **Gemini 3 系列**（2025-11：3 Pro；后续 Ultra / Flash）
  - Imagen、Veo、Lyria（多模态生成）
  - **AlphaFold**（生物）、AlphaGeometry、AlphaProof（数学）
  - **Project Astra**（多模态代理）
- **商业模式**：Google Cloud Vertex AI、Gemini App、深度整合 Google 产品矩阵（Search / Workspace / Android）
- **独特性**：**是三大前沿实验室中唯一有完整上市母公司**（Alphabet 的财务纪律）+ **最深的跨领域研究**（AlphaFold 等科学 AI）

## 深度分析：FSF 的三阶段演进与 CCL 方法论

### 框架演进

| 版本 | 日期 | 核心变化 |
| --- | --- | --- |
| v1.0 | 2024-05-17 | 首发 Frontier Safety Framework。建立 CCL（Critical Capability Levels）概念 |
| v2.0 | 2025-02 | 增加 CBRN 细化；强化模型级 FSF Report 要求 |
| **v3.0** | **2026-04-17** | **新增 TCLs 预警层；新增 "Harmful Manipulation" CCL** |

### CCL（Critical Capability Level）方法论

**FSF 核心创新**：不用简单的"能力等级"，而用**跨领域的 CCL 清单**：

- **Cyber capabilities CCL**：能规模化发动网络攻击、利用漏洞
- **Autonomous ML research CCL**：能自主推进 AI 研发（与 OpenAI "Self-improvement"对标）
- **Harmful manipulation CCL（2026-04 新增）**：能系统性、大幅改变信念和行为，产生"严重规模"伤害
- **CBRN CCLs**：生化武器能力

**流程**：
1. **Early Warning Evaluations**：每个重要模型在训练完成后做 CCL 评估
2. 若未达 CCL → 正常部署
3. 若达到 CCL → **延迟部署或强化缓解措施**，**发布 FSF Report** 公开论证
4. 重大能力提升 → 重新评估

### TCLs（2026-04 新增）

**Tracked Capability Levels**：在 CCL 之前的预警层。

意义：
- **"看到风险苗头就追踪"**，不等到触发 CCL 才反应
- 补充 CCL 体系"要么触发要么不触发"的二元性
- **对比 OpenAI v2**（仅 High / Critical 两档）：DeepMind 现在有 **TCL → CCL → (exceed CCL)** 三档

### Gemini 3 Pro FSF Report（2025-11）

这是**业界首个模型级 FSF 公开报告**：
- 披露哪些 CCL 被评估
- 披露评估结果（未达 CCL）
- 披露使用的评估方法
- **为其他实验室发布同类报告提供模板**

### 与 Anthropic RSP / OpenAI Preparedness 对比

| 维度 | Google DM FSF v3 | Anthropic RSP v3 | OpenAI Preparedness v2 |
| --- | --- | --- | --- |
| 核心概念 | **CCL + TCL**（跨领域） | **ASL 等级** | 风险类别 × 阈值 |
| 预警层 | **TCL（2026-04 新增）** | 无明确 | "research categories"（弱） |
| 操纵能力 | **新增专门 CCL** | 说服作为 ASL 考虑因素 | 观察清单中 |
| 模型级报告 | **Gemini 3 Pro FSF Report（业界首个）** | 个别 Model Card + Risk Reports | System Cards |
| pause 承诺 | 无明确（措辞模糊）| v3 移除 | 弱 |
| 被批评点 | TCL 门槛模糊 | 放弃 pause | arxiv 批评"不保证"|

**关键观察**：**DeepMind 在 2026 逆流而动**——在 Anthropic 弱化、OpenAI 简化的同时 DeepMind
**扩展**了 FSF（加 TCL + 操纵 CCL）。一个解释：Alphabet 母公司的**品牌声誉约束**更强；
另一解释：DeepMind 科研文化与商业化团队的内部张力让安全承诺更难松动。

## AI Principles 的演变：2024 军事使用条款撤销

### 2018 原版 Google AI Principles

**7 项积极原则**（对社会有益 / 避免创造或加剧不公平偏见 / 安全可控 / 问责 / 隐私 / 科学卓越 / 合规使用）
+ **4 类"我们不会追求的 AI 应用"**：
1. 会造成或可能造成整体伤害的技术
2. **武器或其他主要用途为造成人员伤害的技术**
3. 违反国际公认准则的监控技术
4. 违反国际法和人权的应用

这**使 Google 成为第一个公开拒绝军事 AI 用途的科技巨头**。

### 2024 修订：**删除军事排除条款**

2024-02 Google 更新 AI Principles，**删除了四类"我们不会追求"清单**。新版仅有原则性表述，
无明确禁止类别。

**争议**：
- Google 内部员工公开信反对（2024-02，数百名员工联署）
- *Bloomberg* 等媒体解读为"为 Project Nimbus（以色列国防合作）+ 其他军事合同铺路"
- Google 官方解释为"清单化的负面列表过于僵化；新版更灵活"

**行业影响**：**其他前沿实验室跟进**。Anthropic 2025 接受 $200M DoD 合同；
OpenAI 与 Palantir 建立合作伙伴关系；**军事 AI 已不再是前沿实验室的禁区**。

## Project Nimbus 与云服务的分担

- **Project Nimbus（2021-2024）**：Google + Amazon 向以色列政府提供 **$1.2B 云服务合同**
- 2024 内部员工罢工后仍继续
- 对 Google 的 AI 原则修订构成**压力因素**

## 公开政策文档快照

| 类型 | 文档名 | 链接 | 本站子页 |
| --- | --- | --- | --- |
| 使用政策 | Generative AI Prohibited Use Policy | [policies.google.com/terms/generative-ai/use-policy](https://policies.google.com/terms/generative-ai/use-policy) | [usage-policy](./usage-policy/) |
| 模型卡 | Gemini 3 Pro / 2.5 等 Model Cards | [deepmind.google/technologies/gemini](https://deepmind.google/technologies/gemini/) | [model-card](./model-card/) |
| 安全框架 | **FSF v3.0 (2026-04-17)** | [storage.googleapis.com/.../frontier-safety-framework_3.pdf](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/strengthening-our-frontier-safety-framework/frontier-safety-framework_3.pdf) | [safety-framework](./safety-framework/) |
| 模型级 FSF Report | Gemini 3 Pro FSF Report (2025-11) | [storage.googleapis.com/.../gemini_3_pro_fsf_report.pdf](https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf) | — |
| 透明度报告 | Responsibility & Safety Hub | [deepmind.google/zh/about/responsibility-safety](https://deepmind.google/zh/about/responsibility-safety/) | [transparency-report](./transparency-report/) |
| AI 原则 | **Google AI Principles（2024 修订版）** | [ai.google/responsibility/principles](https://ai.google/responsibility/principles/) | [red-team-disclosures](./red-team-disclosures/) |

## 监管合规立场

### 美国

- **2023 White House Voluntary Commitments**：首批签署
- **Frontier Model Forum**：创始成员
- **加州 SB 53**：立场模糊
- **EO 14179 / 14365**：未明确表态

### 欧盟

- **GPAI Code of Practice**：**完整签署**（2025-08-01 首批）
- Gemini 3 Pro 超 10²⁵ FLOP 阈值，触发 AI Act 系统性风险义务
- **CNIL（法国）**：对 Gemini 的 GDPR 合规审视

### 中国

- **不在中国大陆提供 Gemini 消费者服务**
- Google Cloud 部分企业服务通过合作方
- Search / YouTube 被封，移动业务受限

### 英国

- **总部所在地**
- 与 **UK AI Safety Institute** 深度合作（预部署测试）
- 2024 Bletchley / 2025 Seoul / 2025 Paris AI Summit 签署所有主要声明

### 印度 / 日本 / 巴西 / 沙特

- 2025-2026 与主权基金 / 政府建立深度基础设施合作（Gemini 本地化部署）

## 行业自律立场：**"理性安全派"的立场**

Google DeepMind 在三大前沿实验室中**相对平衡**：

- **不像 Anthropic 那样**以安全为品牌核心
- **不像 OpenAI 那样**明显转向商业化加速
- **FSF 2026 扩展**是反例：在行业松动时反而收紧

**结构性支撑**：
1. **Alphabet 母公司财务稳定**：不需要靠 AI 盈利急于扩张
2. **DeepMind 科研文化**：核心团队（Demis Hassabis 等）**不完全以商业收入为导向**
3. **品牌声誉**：Google 搜索历史让反歧视 / 信任成为品牌核心资产

但也有**裂痕**：
- 2024 AI 原则修订是商业压力的明证
- Project Nimbus 争议
- 2024 Gemini 图像生成"历史扭曲"事件（种族错置）曾引发内部整改
