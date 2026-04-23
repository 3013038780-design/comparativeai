---
title: 透明度报告
description: Anthropic Transparency Hub 披露内容、版本演进、与 RDR / DSA 基线对比，以及"透明度剧场"批评
sidebar:
  order: 4
snapshotDate: 2026-04-23
---

> **概要**：Anthropic **Transparency Hub**（anthropic.com/transparency）自 2024 首次发布以来
> 按半年至年度节奏公开政府数据请求、内容审核、滥用报告、Trust & Safety 执法与政治偏见测试等指标。
> 相对 Meta / Google 数十年积累的透明度报告体系，Anthropic 的体系**年轻但专业**。
> 本页系统梳理披露内容、比较基线，并援引 Kirsten Martin、Mike Ananny 等学者对
> "**透明度剧场**"的批评。

## Transparency Hub 的披露矩阵

| 类别 | 披露内容 | 首发 | 最新周期 |
| --- | --- | --- | --- |
| **政府数据请求** | 来自执法机关的用户数据请求数量、国别、响应率 | 2024 H1 | 2025 H2（2026-02 发布） |
| **国家安全请求** | NSL / FISA（法律允许范围内汇总） | 2024 H2 | 2025 H2 |
| **内容审核** | AUP 违规账户警告 / 暂停 / 终止统计 | 2025 H1 | 2025 年度（2026-03） |
| **滥用报告** | 具名披露的 Claude 被滥用案例（事后复盘） | 2024-11 首次 | 周期性（每 3–6 月） |
| **Trust & Safety 执法** | 误用类别分布、响应时间 | 2025 H1 | 2025 年度 |
| **政治偏见评估** | Claude 在政治光谱上的行为测试结果 | 2025 Q3 | 2025 年度 |
| **儿童安全** | CSAM 拒绝率、NCMEC 报告统计 | 2025 H2 | 2025 年度 |

**结构参照**：Anthropic 透明度报告的类别选择**部分对标**
Meta Community Standards Enforcement Report、
Google Transparency Report、
Ranking Digital Rights Corporate Accountability Index 的维度。

## 版本演进

| 时间 | 关键事件 |
| --- | --- |
| 2023–2024 Q1 | 无系统透明度报告；零散博客披露 |
| **2024-05** | 首个"政府请求透明度"半年报（覆盖 2024 H1） |
| **2024-11** | 首份具名滥用复盘："Disrupting Malicious Uses of Our Models" |
| **2025-02** | 政府请求 2024 H2 报告；首次披露国别分布 |
| **2025-08** | Transparency Hub 正式上线，统一入口页；首次公开 Trust & Safety 执法统计 |
| **2025-Q3** | 政治偏见评估首发（响应 2025 "political neutrality" 行政压力） |
| **2026-02** | 2025 H2 数据；**首次加入"AI-assisted 大规模滥用"专章** |
| **2026-03** | 2025 年度报告；AUP 账户终止在**数万量级**披露（具体数字以官方报告为准）|

## 具名滥用披露：一个独特实践

Anthropic 自 2024-11 起的"Disrupting Malicious Uses"系列是前沿实验室中**独特的实践**——
**具名披露已检测并阻断的滥用案例**（去标识化）。2024-11 至 2026-04 期间主要类别：

1. **国家关联网络行动**（APT 风格）：具体披露了**与朝鲜、伊朗、俄罗斯相关**的账户试图用 Claude
   进行恶意代码辅助、侦察信息分析等
2. **大规模求职欺诈**：2025-01 披露利用 Claude 大规模生成伪造简历、AI 冒充候选人通过远程面试
3. **Vibe Hacking**：2025-07 披露的利用自然语言诱导模型越狱参与社工攻击的模式
4. **政治活动操作**：2025-11 披露的大规模自动化政治内容生成集群（具体不披露政治倾向）
5. **CSAM 相关拒绝数据**：2026-02 首次披露年度拒绝次数与 NCMEC 报告数量

**对比 OpenAI 的"Disrupting deceptive uses of AI"系列**（2024-05 起）：两家的披露节奏与内容
**高度相似**，是这一实践的行业双头。Meta、Google 在 LLM 滥用上**未对标披露**。

## 政治偏见评估：一个外部压力的产物

2025 Trump 行政令与美国司法部对"ideological bias"的关注**直接**推动了前沿实验室的
"政治中立性"披露。Anthropic 2025 Q3 首发的政治偏见评估包含：

- **议题清单**：堕胎、枪支、移民、气候、加密货币等 ~30 项
- **测试方法**：多样化提问框架，测量模型在"左/右"、"liberal/conservative"维度的回答倾向
- **基线对比**：Claude vs. GPT-5 vs. Gemini 3 vs. Grok 4（自己公开可复现的评测）
- **结果**：Claude **略偏左**但在 4.x 后显著向中心移动；相对 Grok 4 最接近中点

**学术批评**：Brookings Institution (*AI and political polarization*, 2024) 指出，
"中立性"本身是**政治建构**——以什么为中点本身是政治选择。Anthropic 的评估采用了
**美国国内政治光谱**作为参考系，对非美国议题的适用性有限。

## 相对 Meta / Google 透明度报告体系的基线差距

Meta / Google 的透明度报告从 **2011–2013 年**（Google 2010、Twitter 2012、Meta 2013）开始，
已有**十年以上**方法论积累。Anthropic 从 2024 起步，**基线差距**体现在：

| 维度 | Google (2011–) | Meta (2013–) | Anthropic (2024–) |
| --- | --- | --- | --- |
| **发布历史** | 14+ 年 | 12+ 年 | 2 年 |
| **国别分解** | 完整 | 完整 | 部分（2025 起） |
| **法律依据分类** | 完整 | 完整 | 部分 |
| **用户影响指标** | 账户数 + 内容数 | 账户数 + 内容数 | 账户数（内容数未披露） |
| **独立审计** | 部分（PwC、DTTL 等） | **有**（EY、独立审计） | **无** |
| **历史数据可下载** | 是 | 是 | **部分**（仅最新） |

**Ranking Digital Rights 2024 Corporate Accountability Index** 方法论：
对"治理 / 自由表达 / 隐私"三大维度共 300+ 指标评分。
Anthropic **未入选 RDR 常规评估**（RDR 聚焦平台公司），
但适用的部分 G/F/P 指标对 Anthropic 的适用性测试（内部尝试）显示
**得分会显著低于 Meta / Google**——主要因为**历史数据、细分披露、独立审计**三项。

## 学术批评：透明度剧场

### Kirsten Martin（Notre Dame）

Martin 的 **"privacy as contextual integrity" 延伸到透明度研究**指出：
透明度报告的**披露类别选择**本身反映权力结构——
披露的类别是"对公司有利的透明度"（如政府请求数量表明公司"保护用户"），
不披露的类别（如内部管理层决策、训练数据、算法变更）是"对公司不利的不透明"。

**Anthropic 的具体表现**：
- 披露：政府请求、AUP 执法、CSAM 拒绝
- 不披露：训练数据组成、FLOP、RLHF 劳工、内部政策变更

### Mike Ananny（USC）

Ananny (*Networked Press Freedom*, 2018; *Seeing Without Knowing*, 2018 with Crawford) 的
核心主张：**透明度本身不等于问责**。
**没有独立验证机制的透明度报告**相当于"公司自己告诉你它做了什么"——
读者**无法独立核实**报告的真实性与完整性。

**Anthropic 的应对**：2026 新增的 RSP v3 外部审查方（GovAI / METR / MATS，
见 [safety-framework](../safety-framework/)）部分回应了这一点，
但**透明度报告本身的审计仍是内部的**。

### Evelyn Douek（Stanford / Columbia）

Douek (*Content Moderation at Scale*, *The Siren Call of Content Moderation Formalism*)
聚焦**内容审核的 due process**：
- 披露规则是什么（AUP）—— 有
- 披露违规类别统计 —— 有
- **披露个案处理流程**（是否有申诉机制、典型案例裁量）—— 无
- **披露政策变更决策** —— 无

这是 Anthropic（及全行业）透明度报告的**结构性盲区**。
Douek 称之为"**执法黑盒的量化表皮**"——
你知道多少账户被封，但不知道**每一个是怎么被判断的**。

### Alex Stamos（SIO → Krebs Stamos Group）

Stamos 在 Stanford Internet Observatory 期间多次呼吁 **Trust & Safety 作为学科**
的专业化 —— Anthropic 2024–2025 的 T&S 团队建设**在行业中算积极响应**。
但 Stamos 也持续批评**公司自我评估的固有冲突**：
即使 T&S 人员本身专业，**向股东、合规方、公众三方同时负责的结构**
使得**批判性判断天然受约束**。

## DSA Art. 24 / 42 的基线对比

**EU Digital Services Act** 对 Very Large Online Platforms (VLOPs) 规定了
**结构化的透明度义务**：

| DSA 要求 | Anthropic 当前实践 | 缺口 |
| --- | --- | --- |
| **Art. 15**（定期透明度报告） | 有（半年至年度） | 无 DSA 强制格式 |
| **Art. 24**（广告透明度） | N/A（Claude 非平台） | —— |
| **Art. 34-35**（系统性风险评估） | RSP 部分覆盖 | **独立性不足** |
| **Art. 37**（独立审计） | **无** | **DSA 要求每年独立审计** |
| **Art. 40**（研究者数据访问） | 有（有限合作） | 未达 DSA 研究者访问标准 |
| **Art. 42**（VLOP 透明度数据库） | 部分（博客式） | 未纳入 DSA 数据库 |

**Anthropic 的 Claude.ai 在欧盟虽然不直接受 VLOP 义务约束**
（用户规模可能不达阈值），但**将来若达到或被认定为 VLOP**，
当前透明度实践**不足以满足 Art. 37 / 42**。

## Trust & Safety 作为一门学科的行业兴起

透明度报告之外，**Trust & Safety 生态**在 2023–2026 经历了专业化：

- **Stanford Internet Observatory**（2019–，2024-06 宣布重组、部分功能转至
  Krebs Stamos Group 等）—— Alex Stamos、Renée DiResta 引领
- **Trust & Safety Professional Association**（2020–）—— 认证、培训
- **T&S 政策期刊**：Stanford *Journal of Online Trust & Safety* 2021 创刊
- **关键学者**：Evelyn Douek、Daphne Keller、Kate Klonick、Tarleton Gillespie、Sarah T. Roberts

**Anthropic T&S 团队**在 2023–2026 从初期几人扩展至行业中等规模（具体人数未官方披露），
招聘路径多来自 Meta Integrity、Twitter、Stanford SIO。
这使得**团队专业性**在前沿实验室中相对领先；
但**治理独立性**（T&S 向谁汇报、是否能覆盖产品决策）仍不对外公开。

## 与本站其他页面的交叉引用

- **Anthropic 公司概况**：[../](../)
- **AUP 执法细节**：[usage-policy](../usage-policy/)
- **红队与 alignment 披露**：[red-team-disclosures](../red-team-disclosures/)
- **RSP 外部审查机制**：[safety-framework](../safety-framework/)
- **Model Card 披露**：[model-card](../model-card/)
- **OpenAI 透明度实践**：[companies/openai](../../openai/)
- **EU DSA 要求**：DSA Art. 15 / 24 / 37 / 40 / 42
- **加州 SB 53 披露义务**：Critical Safety Incident 报告要求
- **中国算法备案**：[生成式 AI 暂行办法](/rules/china/generative-ai-interim-measures/) ——
  CAC 备案的"算法透明度"要求与 Anthropic 式公开披露是**不同制度传统**

## 2025–2026 Q1 观察

- **2025-08** Transparency Hub 正式上线，整合此前的分散披露
- **2025-Q3** 政治偏见评估首发（响应美国行政压力）
- **2025-11** "Vibe Hacking" 等大规模滥用披露形成持续叙事
- **2026-02** 2025 H2 数据首次包含 AI 辅助国家级网络行动的归因披露
- **2026-03** 年度报告披露 AUP 账户终止在**数万量级**（具体数字以官方报告为准）

## 行业对比快照（2026-04）

| 公司 | 首发年份 | 发布节奏 | 政府请求 | 滥用披露 | 独立审计 |
| --- | --- | --- | --- | --- | --- |
| **Google** | 2010 | 半年 | 详细 | 有（YouTube / Search） | 部分 |
| **Meta** | 2013 | 季度 + 年度 | 详细 | 有（CSER / integrity） | EY |
| **Apple** | 2013 | 半年 | 详细 | 有限 | 未详 |
| **OpenAI** | 2023 | 不定期 | 部分 | 有（2024 起） | 无 |
| **Anthropic** | **2024** | **半年至年度** | **部分** | 有（具名） | 无 |
| **Google DeepMind** | 经由 Google 报告 | 同 Google | 同 Google | 部分 | 部分 |
| **xAI** | 无 | —— | —— | —— | —— |
| **Mistral** | 无 | —— | —— | —— | —— |
| **中国公司**（阿里 / 百度 / 字节 / DeepSeek） | 无 | —— | —— | —— | —— |

**两个明显事实**：
1. **前沿实验室的透明度实践整体 2 年以内起步**，相对老平台公司**结构性年轻**
2. **中国前沿公司无对外透明度报告**——透明度通过 **CAC 算法备案**的非公开披露实现，
   向**监管机构而非公众**负责

## 持续追踪

- Anthropic 透明度报告方法论的公开化（当前仅类别披露，缺方法论附录）
- 外部独立审计是否在 SB 53 / DSA 压力下引入
- 滥用披露的归因准确性（第三方安全研究者的验证）
- 政治偏见评估是否扩展到非英文 / 非美国议题
- Trust & Safety 团队规模与治理地位的公开信息
