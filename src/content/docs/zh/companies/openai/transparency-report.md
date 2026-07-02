---
title: 透明度报告
description: OpenAI 透明度披露谱系——威胁情报报告、政府请求、Usage Policy 执法、版权与选举周期披露
sidebar:
  order: 4
snapshotDate: 2026-06-28
---

> **快照**：覆盖 [openai.com/safety](https://openai.com/safety/) 与 [openai.com/transparency](https://openai.com/transparency/)
> 截至 2026-04-23 的可公开取得披露；重点在 2024-Q1 起的 *Influence and Cyber Operations Reports* 系列。

## 一、OpenAI"透明度"的边界与结构

与 Google（2010 起）、Meta（2013 起）等老牌平台**长期发布综合 Transparency Report** 不同，
OpenAI 的透明度披露**碎片化**在五类文档中，直到 2025-10 才在 openai.com/transparency 下汇总：

| 类别 | 首次发布 | 频率 | 主要内容 |
| --- | --- | --- | --- |
| **Threat Intel Reports** | 2024-02 | **季度**（Q1-2024 起，约每季）| 影响力操作、网络行动、虚假信息操作的发现与中断 |
| **政府请求报告** | **2025-09**（首份） | 半年度 | 政府数据请求数量、合规比例、分国家 |
| **Usage Policy 执法统计** | **偶发**（2024 春、2025-Q4 单次）| 不固定 | 封禁账号数、检测类别 |
| **版权与数据披露** | 2023-12 起多份博客 | 事件驱动 | Media Manager、许可合作、诉讼响应 |
| **选举周期透明度** | 2024-01 美国大选博客、2024-06 欧盟 | 周期性 | 重定向机制、合作检测、水印（C2PA）|

**观察**：OpenAI 直到 2025-09 才发布**首份政府请求报告**——晚于 Google 15 年、晚于 Meta 12 年。
这既反映 OpenAI 作为"非平台"公司的历史路径差异，也反映**来自 DSA / 加州 SB 53 / Seoul commitments 的强制披露压力**
才是推动透明度实践的真正动力。

## 二、Threat Intel Reports（Influence and Cyber Operations）

### 2.1 系列脉络

| 报告 | 日期 | 代表披露 |
| --- | --- | --- |
| **"Disrupting Malicious Uses of AI by State-Affiliated Threat Actors"** | **2024-02-14** | Charcoal Typhoon (PRC)、Salmon Typhoon (PRC)、Crimson Sandstorm (IRGC)、Emerald Sleet (DPRK)、Forest Blizzard (GRU) 五个账号网络 |
| **"AI and Covert Influence Operations"** | 2024-05-30 | Doppelganger (俄)、Spamouflage (PRC)、Bad Grammar (俄)、International Union of Virtual Media (伊朗)、STOIC (以色列商业)5 个操作 |
| **"An Update on Disrupting Deceptive Uses of AI"** | 2024-10-09 | 累计 20+ 操作；SweetSpecter (PRC)、CyberAv3ngers (伊朗)、Storm-0817 (伊朗) 首次网络攻击案例 |
| **"Influence and Cyber Operations Report (2025-Q2 update)"** | 2025-06 | Peer Review (PRC 学术操纵)、Sponsored Discontent (PRC 内部维稳)等 |
| **"Q4-2025 Threat Intel"** | 2025-12 | 首次详述 Sora 2 合成媒体滥用与封禁 |
| **"Q1-2026 Threat Intel"** | 2026-03 | GPT-5.x 被用于自动化鱼叉式钓鱼的微软 / OpenAI 联合披露 |

### 2.2 披露内容的共同结构

典型的一份 Threat Intel Report 包含：

1. **操作摘要**：名称、归因、目标、规模
2. **用途细节**：如何使用 ChatGPT / GPT API（调试代码、生成翻译、撰写社交帖文）
3. **归因证据**：与 Microsoft Threat Intelligence、Meta Security、Graphika、SIO 的联合归因
4. **干预措施**：账号封禁 + 向受影响平台与政府通报
5. **反思**：对 ChatGPT 能力的"uplift"评估（OpenAI 的典型叙事是"未带来实质新能力"）

### 2.3 批评：**归因的选择性与"安全剧场"问题**

**Kirsten Martin** (Notre Dame) 在 *MIS Quarterly Executive* 2024 的 "Transparency Theater" 概念框架下：

- **报告集中披露对手国家的操作**（PRC / 俄 / 伊朗 / DPRK），**极少披露西方商业或国家源**
  - 唯一例外是 2024-05 "STOIC"（以色列商业公司），但披露力度明显弱于 PRC 案例
- **"我们发现并阻止了"叙事**强化"平台有自我管理能力"，**降低对硬法强制披露的政治需求**

**Josh Goldstein**（Stanford Internet Observatory）2024-06 *Brookings* 报告：

- OpenAI 的操作披露**在样本选择上与学术研究者的独立观察一致**（真实存在这些操作），
  但**规模可能被**低估（OpenAI 只能看到 ChatGPT 自身的使用，跨平台全貌需要 Meta、X、Telegram 等配合）
- OpenAI **不公开**封禁账号的**完整用户 ID、提示样本、对话长度分布**，独立复现困难

**Joshua Tucker**（NYU CSMaP）2025-03 *PNAS* 评论：

- 威胁情报报告是**"对手行为数据集"**的重要贡献，但**缺乏基础设施层面的透明度**（如训练数据、
  内部红队频率等），使评估"平台整体治理水平"仍然依赖公司自报
- 建议 OpenAI 采用 Stanford **Platform Governance Research Network** 建议的**数据共享通道**

**Graphika** 2025 年度报告则相对正面：
- 认为 OpenAI 的 Threat Intel Reports **质量高于多数商业威胁情报**，
  但**发布频率**和**细粒度**低于 Meta Adversarial Threat Report。

## 三、政府请求报告（2025-09 首份）

OpenAI 2025-09 首份 *Government Requests Transparency Report* 披露维度包括：

- 法律强制请求总数（按半年汇总，以美国为主，单次统计在**两位数至低三位数**量级）
- 紧急请求（无 warrant）数量与法律强制请求的典型比例（少数比例）
- 完全合规 / 部分合规 / 异议比例（完全合规通常为多数，异议为个位数百分比）
- 按国家的明细分布

具体数值以 [openai.com/transparency](https://openai.com/transparency/) 官方报告为准；
与 Google、Meta 十多年积累的季度披露相比，OpenAI 的请求总量仍处于**低密度早期阶段**。

### 与同行业对比（请求密度量级）

根据各公司公开 Transparency Report（半年度或年度）可整理出数量级对比：

- **OpenAI**：两位数至低三位数 / 半年，MAU 公开估算约数亿量级
- **Google**：数万级 / 半年，MAU 数十亿
- **Meta**：数十万级 / 半年，MAU 数十亿
- **Microsoft**：万级 / 半年
- **Apple**：千级 / 半年

具体数字以各家官方透明度报告为准。

**解读**：OpenAI 报告的请求密度**远低于**同规模服务提供者。可能原因：

1. **产品性质差异**：ChatGPT 主要是交互工具而非社交网络，**内容的第三方可见性低**
2. **执法路径差异**：执法者**较少**把 ChatGPT 视为直接证据源
3. **披露完整度存疑**：首份报告**不含国家安全请求**（NSL）的详细数字——这是 Ranking Digital Rights (RDR)
   评估透明度报告时的**关键扣分项**
4. **时间窗**：2024 是 OpenAI 政府请求受理的早期阶段，案件流程可能尚未成熟

## 四、Usage Policy 执法披露

Usage Policy 执法**不定期**披露的数据点：

| 时间 | 披露内容 | 规模 |
| --- | --- | --- |
| 2024-04 | 2024 Q1 选举相关封禁 | 数十账号量级 |
| 2024-10 | 累计影响力操作封禁 | 20+ 网络 |
| 2025-05 | Sora 1 → Sora 2 过渡期 CSAM 封禁 | 未披露绝对数 |
| 2025-12 | 全年 Trust & Safety 行动摘要 | 大规模（聚合数字，以官方发布为准）|

**批评**（Ranking Digital Rights 2025 Corporate Accountability Index）：

- **无定期**的聚合统计（不像 Meta Community Standards Enforcement Report 那样季度化）
- **无分类别**的封禁数据（每类 Usage Policy 违反各自多少）
- **无申诉数据**（被封禁后成功申诉恢复的比例）
- **无误报数据**（自动检测的 false-positive rate）

在 RDR 近年评估中，OpenAI 在"执法透明度"子项的得分**显著低于** Google、Meta 等成熟平台，
与 Anthropic 同处中低分段（具体分数以 RDR 年度报告为准）。

## 五、版权与训练数据披露

### 5.1 事件脉络

| 日期 | 事件 |
| --- | --- |
| 2023-12 | NYT 诉 OpenAI 和 Microsoft（训练数据侵权）|
| 2023-09 | Authors Guild 集体诉讼（George R.R. Martin 等）|
| 2024-04 | **Media Manager** 首次预告（让版权方预先声明退出）|
| 2024-2025 | 与 AP、Axel Springer、FT、News Corp、The Atlantic、Reddit、Shutterstock 等签署**数据许可** |
| 2025-05 | **Media Manager** 正式上线（opt-out）但被批评覆盖不全 |
| 2025-12 | NYT 案 discovery 阶段披露部分训练集样本 |
| 2026-01 | Authors Guild 案 summary judgment 动议 |
| 2026-03 | OpenAI 首份 **Model Training Data Summary**（GPAI CoP 合规）|

### 5.2 2026-03 GPAI Transparency Template

在 EU GPAI Code of Practice 的 Transparency 章节合规要求下，OpenAI 2026-03 提交 **Training Data Summary Template**，
首次披露：

- **训练数据总体类别比例**（web / code / 书籍 / 图像 / 合成 / 人工）
- **主要许可方列表**（不含合同细节）
- **数据获取方式**（crawl / 购买 / 伙伴 / 合成）
- **过滤方法概述**（不含具体过滤规则）

**仍然未披露**：

- 具体 token 数（GPT-5 量级据第三方估算，OpenAI 未确认）
- Common Crawl 使用切片
- 人工反馈数据的来源（Scale AI、Surge AI、Invisible Technologies 等供应商）
- 合成数据的模型与规模

**学术评估**（Ed Newton-Rex / Fairly Trained 2026-04 blog post）：
- "比零强，比 Stability AI Stable Diffusion 3 training data card 弱"
- "符合 EU 合规文本的字面要求，但不解决创作者的实际维权难题"

## 六、选举周期透明度

### 2024 全球超级选举周

OpenAI 2024-01 博客 *How OpenAI Is Approaching 2024 Elections*：

1. **不允许**用 ChatGPT 制作**冒充候选人**的内容
2. **不允许**用 ChatGPT 作为投票 Chatbot
3. **ChatGPT 在美国选举问询中重定向至 CanIVote.org**
4. **DALL-E 加 C2PA 元数据** + **起源追踪水印**
5. **回溯分析**发布于 2024-12

**批评**：

- 2024-12 回溯报告被批评**样本选择性强**、**未披露具体错误率**
- Joshua Tucker (CSMaP) 与 Brendan Nyhan (Dartmouth) 独立研究表明：ChatGPT 在 2024 选举期**仍会生成具体误导信息**，
  仅在重定向路径上有部分效果
- **印度、印尼、巴西等选举**的透明度披露**显著薄弱于**美国

## 七、与硬法的衔接

| 法规 | 相关义务 | OpenAI 合规现状 |
| --- | --- | --- |
| **EU DSA** Art. 15, 24, 42 | Transparency reports（VLOP）| ChatGPT 2024 被指定为 VLOP 后，按**半年度**发布（首份 2024-10）|
| **EU DSA** Art. 40 | 研究者数据访问 | **尚无完整实现**（学术研究者申诉被拖延）|
| **EU AI Act** Art. 55 | 系统性风险披露 | 通过 Preparedness + GPAI CoP 文件衔接 |
| **加州 SB 53** §22757.11 | Critical safety incident 报告 | 2026-Q1 起承诺合规 |
| **Seoul Commitments (2024-05)** | Transparency about safety decisions | Preparedness + System Cards 作为合规证据 |
| **中国《生成式 AI 办法》** | 内容标识、不良信息处置 | **不适用**（未在华运营）|

## 八、产业实务：透明度报告内部的运作

从前员工公开访谈、官方博客署名、GovAI / Stanford HAI 学术合作可反推：

- **Intelligence & Investigations Team**（前 Disruption Intel）：据公开署名与招聘信息反推为数十人级小团队，
  负责 Threat Intel Reports
- **Trust & Safety / Integrity**：负责 Usage Policy 执法统计与申诉
- **Legal + Privacy**：负责政府请求报告
- **Policy Research / Global Affairs**：负责选举周期、DSA/AI Act 合规文档
- **Developer Platform Team**：负责 Media Manager、C2PA 等创作者工具

**外部合作伙伴**（公开署名）：
- **Microsoft Threat Intelligence Center (MSTIC)**：影响力操作归因
- **Graphika**、**SIO**（Stanford Internet Observatory 继承者）：跨平台影响力研究
- **NCMEC、Thorn**：CSAM 检测
- **C2PA Steering Committee**：内容溯源

## 九、与其他前沿实验室的对比

| 维度 | OpenAI | Anthropic | Google (AI) | Meta (Llama) | xAI |
| --- | --- | --- | --- | --- | --- |
| Threat Intel | **季度**（2024-Q1 起）| 无单独系列 | 与 TAG 整合 | Adversarial Threat Report | 无 |
| Government Requests | **半年度**（2025-09 起）| 无单独报告 | 按产品 | 半年度 | 无 |
| Usage Policy enforcement stats | **不定期** | **不定期** | 按产品 | 季度 | 无 |
| Training data summary | 2026-03 GPAI 首份 | 模型卡内部分披露 | 按产品 | Llama model card | 无 |
| 选举透明度 | 2024、2025 周期 | 有 2024 博客 | 有周期性报告 | 有 | 无 |
| **综合 Transparency Hub** | **2025-10 上线** | 2025 Transparency Hub | 长期运营 | 长期运营 | 无 |

**结构性观察**：OpenAI 的透明度报告**在 2024-2026 快速追赶**，但**起点晚、结构碎片化**，
离 Google / Meta 十多年建立的**系统化披露机器**仍有差距。在 RDR 近年 Corporate Accountability Index 中，
AI 原生公司（OpenAI、Anthropic、xAI）综合分数仍**显著低于** Google、Meta 等成熟平台。

## 十、延伸阅读

- **一手**：[openai.com/safety](https://openai.com/safety/)、[openai.com/transparency](https://openai.com/transparency/)、
  [Disrupting Malicious Uses of AI](https://openai.com/index/disrupting-malicious-uses-of-our-models/)
- **学术 / 框架**：Ranking Digital Rights *Corporate Accountability Index*；
  Stanford Internet Observatory / Graphika *Covert Influence Operations Reports*；
  Kirsten Martin, *Transparency Theater* (MIS Quarterly Executive 2024)；
  Mike Ananny & Kate Crawford, *Seeing Without Knowing* (2018)
- **政策对位**：EU DSA Art. 15, 24, 40, 42；加州 SB 53 §22757.11；Seoul Commitments (2024-05)
- **本站交叉**：[OpenAI 概况](./)、[使用政策](./usage-policy/)、[红队与评估披露](./red-team-disclosures/)、
  [Anthropic 透明度报告](/zh/companies/anthropic/transparency-report/)
