---
title: 数据与训练
description: 三辖区对 AI 训练数据合规、版权、个人信息、跨境的规则对比——学界争议 + 行业实践
sidebar:
  order: 3
---

## 议题定位

训练数据是 LLM 时代 AI 治理的**核心战场**——数据决定能力，决定版权风险，决定个人信息合规，
决定跨境合规。三个辖区在这一议题上的答案差异最大，**诉讼和立法双轨并行**。

## 议题的四个核心问题

1. **谁的数据可以用？**（合法基础 / 版权 / 同意）
2. **数据的质量怎么保证？**（代表性、偏见、质量要求）
3. **要不要披露？**（训练数据摘要、透明度）
4. **跨境怎么处理？**（数据出境、Brussels Effect）

## 比较速览

| 维度 | 🇨🇳 [中国](./china/) | 🇺🇸 [美国](./us/) | 🇪🇺 [欧盟](./eu/) |
| --- | --- | --- | --- |
| 综合隐私法 | [PIPL](/rules/china/personal-info-protection-law/) (2021) | **无联邦法**（州法拼图） | [GDPR](/rules/eu/gdpr/) (2018) |
| AI 专项数据条款 | [生成式 AI 办法第 7 条](/rules/china/generative-ai-interim-measures/) | 无 | [AI Act 第 10 条](/rules/eu/ai-act/) |
| **强制训练数据摘要** | 无 | 无 | **[AI Act 第 53 条](/rules/eu/ai-act/)（全球首个）** |
| 版权处理 | 无明确 TDM 例外 | **Fair Use 抗辩**（诉讼中） | **DSM TDM 例外**（可 opt-out）|
| 儿童数据 | PIPL 第 31 条 | COPPA（联邦） | GDPR 第 8 条 |
| 生物特征 | PIPL 第 28 条 | **Illinois BIPA** 等州法 | GDPR 第 9 条 |
| 跨境 | PIPL + DSL + CSL | EO 14179 后宽松 | Schrems II + DPF |

## 学界讨论

### 基础性文献

- **Solove (2006)** *"A Taxonomy of Privacy"*（隐私保护的理论基石）
- **Westin (1967)** *Privacy and Freedom*（信息隐私经典）
- **Nissenbaum (2010)** *Privacy in Context*：**语境完整性理论**——训练 LLM "重新用途化"
  数据是否违反语境？

### 训练数据 × 个人信息

- **Kaminski (Colorado) & Urban (Berkeley) (2021)** *"The Right to Contest AI"*
- **Edwards & Veale (2017)** *"Slave to the Algorithm"*
- **Helberger, Diakopoulos et al. (2023)** 对 AI Act 数据治理的系统评论
- **Leiser & Schneider (2024)** "Scraping and Fair Use in AI Training"
- **CNIL 2025 两份核心推荐**：**GDPR 对 AI 系统全生命周期适用**（France CNIL 权威立场）

### 训练数据 × 版权

- **Lemley & Casey (2021)** *"Fair Learning"*（*Texas Law Review*）——**对 LLM 训练主张 fair use**
- **Henderson, Li, Jurafsky et al. (2023)** *"Foundation Models and Fair Use"*
  （Stanford CRFM）：技术视角的 fair use 分析
- **Samuelson (Berkeley)** 对 AI 版权持续批判
- **Grimmelmann (Cornell)** 对 *NYT v. OpenAI* 等案件的持续分析
- **Matthew Sag** *"The New Legal Landscape for Text Mining and Machine Learning"*（*Journal of Copyright Society* 2019）
- **Lehman & Johnson** 对生成式 AI 输出版权归属的分析

### 数据质量与偏见

- **Bender, Gebru, McMillan-Major, Shmitchell (2021)** *"On the Dangers of Stochastic Parrots"*
  （**FAccT 最有影响的论文之一**）——LLM 训练数据的偏见、能耗、责任问题
- **Birhane, Prabhu et al.** *"Multimodal datasets: misogyny, pornography, and malignant stereotypes"*
- **Buolamwini & Gebru (2018)** *"Gender Shades"*（人脸识别偏见的奠基论文）
- **AI Now Institute** 系列报告：训练数据中的结构性偏见

### 训练数据披露与透明度

- **Gebru, Morgenstern et al. (2021)** *"Datasheets for Datasets"*（数据集文档化的标准）
- **Mitchell et al. (2019)** *"Model Cards for Model Reporting"*
- **Diakopoulos & Koliska (2017)** 对算法透明度的系统研究
- **Almada & Petit (2023)** 对 AI Act 第 53 条"足够详细摘要"含义的分析

### 跨境数据与 AI

- **Kuner (Oxford)** 数据跨境经典工作
- **Greenleaf** 亚太数据保护持续追踪（含中国 PIPL 的国际比较）
- **Matt Sheehan (Carnegie)** 对中国《数据出境安全评估办法》实施的持续分析

## 核心争议

### 1. **"公开可获取" ≠ "可用于训练"**

- **EDPB 2024-12** Opinion on ChatGPT：合法利益**可以**作为训练基础，但需严格 LIA
- **CNIL 2025 指引**：**公开不等于合法处理**，特别是对特殊类别数据（生物识别、政治观点等）
- **Hamburg DPA (2024)**：模型权重**不构成**个人数据处理（争议立场）
- **美国**：Fair Use 抗辩 + hiQ Labs v. LinkedIn 判例
- **中国 PIPL 第 13 条**：公开信息处理需"在合理范围内"；2024 年多起诉讼涉及训练抓取

### 2. **版权 opt-out 的机器可读性**

- **EU DSM 第 4 条**：允许商业 TDM 但版权人可 opt-out
- 实务手段：`robots.txt` / `ai.txt` / `TDMRep` 标准 / 2025 RSL (Robots Exclusion Standard for LLMs)
- **AI Act 第 53 条**：GPAI 提供者**必须尊重 opt-out**（即使对欧盟外训练的模型）
- 争议：机器可读的"权利保留"在法律上是否**有效**？多数民法法系国家未明确认可

### 3. **训练后"删除权"的实施**

- **GDPR 第 17 条 / PIPL 第 47 条**：数据主体有权要求删除
- **技术障碍**：**模型权重不可分离删除**；Machine Unlearning 研究远未实用
- **立场分歧**：
  - **Hamburg DPA 2024**：权重不构成个人数据 → 删除义务不触发
  - **Italy Garante**：对 OpenAI 执法要求用户数据的删除和更正权利
  - **CNIL 2025**：要求**模型设计阶段**即考虑删除可行性

### 4. **训练数据摘要的"详细程度"**

- **EU AI Act 第 53 条**：要求"足够详细"摘要，由 AI Office 2024-07 发布模板
- **Almada & Petit (2023)** 批评：模板弹性大，GPAI 提供方可做**最小披露**
- 实务：OpenAI / Anthropic / Google DeepMind 等在 2025-2026 开始公开"数据源类别"但不公开具体数据集

## 行业实践视角

### 主要 AI 公司的训练数据策略

| 公司 | 主要来源 | 开源披露 | 版权许可 | 欧盟第 53 条响应 |
| --- | --- | --- | --- | --- |
| [OpenAI](/companies/openai/) | 互联网 + **许可**（FT、Axel Springer、News Corp）| 低 | **多家付费许可** | 计划发布数据摘要 |
| [Anthropic](/companies/anthropic/) | 互联网 + 授权 | 中（含部分细节） | 较少公开许可交易 | 发布数据摘要 |
| [Google DeepMind](/companies/google-deepmind/) | Google 搜索索引 + YouTube + 许可 | 低 | 既有媒体关系 | 计划发布 |
| [Meta Llama](/companies/) | 互联网 + Meta 平台数据（争议）| **技术报告含相当细节** | 少付费许可 | 已有披露 |
| [Mistral](/companies/mistral/) | 互联网 + 合作方 | 中 | 欧盟版权合规 | 已发布（GPAI CoP 要求）|
| [阿里 Qwen](/companies/alibaba/) | 中文优先 + 合作 | **技术报告含详细** | 不明确 | 未签 CoP |
| [百度 ERNIE](/companies/baidu/) | 中文优先 + 合作 | 部分 | 不明确 | 未签 CoP |
| [DeepSeek](/companies/deepseek/) | 互联网 | **技术报告详细** | 不明确 | 未签 CoP |

### 关键诉讼（2023-2026）

- **NYT v. OpenAI & Microsoft** (2023-12 起)：最具指标意义的版权诉讼，2026 持续
- **Bartz v. Anthropic / Kadrey v. Meta / Tremblay v. OpenAI**：作家群体诉讼
- **Andersen v. Stability AI**：文生图版权
- **Getty Images v. Stability AI**（英国 + 美国）：图片版权
- **Clearview AI** 全球：BIPA（Illinois）+ 多国 DPA 执法

### 关键 DPA 执法（2023-2026）

- **Italy Garante** vs ChatGPT（2023-03 封禁；2024-12 €15M 罚款）
- **Italy Garante** vs Replika（2023-02 禁令，AI 陪伴 × 未成年人）
- **Italy Garante** vs DeepSeek（2025-01 临时封禁）
- **CNIL** vs Clearview AI（2022 €20M 罚款）
- **DPC Ireland** 对 Meta LLaMA 的调查
- **Hamburg DPA** 关于权重立场的争议（2024）

### 2026 Q1 重要变化

- **AI Act 第 53 条**的训练数据摘要义务于 **2025-08-02 生效**，首批 GPAI 提供者 2026 Q1 开始披露
- **GPAI Code of Practice Chapter 2 版权** 2025-08-01 签署，**Meta 对版权章节公开异议**
- **美国 fair use 诉讼**持续，部分法院初步裁定对 OpenAI 有利（2026-Q1 Bartz v. Anthropic 部分胜诉）

## 相关规则与公司

### 相关规则

- **🇪🇺 欧盟**：[GDPR](/rules/eu/gdpr/)、[AI Act](/rules/eu/ai-act/) 第 10 / 53 条、[GPAI Code of Practice](/rules/eu/gpai-code-of-practice/) Chapter 2、DSM 版权指令
- **🇨🇳 中国**：[PIPL](/rules/china/personal-info-protection-law/) · [DSL](/rules/china/data-security-law/) · [CSL](/rules/china/cybersecurity-law/)、[生成式 AI 办法](/rules/china/generative-ai-interim-measures/) 第 7 条、[TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/)（语料合法性 ≤5% 非法）
- **🇺🇸 美国**：[NIST AI RMF](/rules/us/nist-ai-rmf/)；州法（CCPA/CPRA、Illinois BIPA、Tennessee ELVIS Act 等）；**无联邦 AI 专项数据法**

### 相关公司

参见各公司页的"训练数据"分析：[OpenAI](/companies/openai/) / [Anthropic](/companies/anthropic/) / [Mistral](/companies/mistral/)（欧盟合规样板）/ [DeepSeek](/companies/deepseek/)（开源透明样板）/ [阿里 Qwen](/companies/alibaba/)（中文 + 开源）

## 辖区深度页

- [🇨🇳 中国](./china/)
- [🇺🇸 美国](./us/)
- [🇪🇺 欧盟](./eu/)
