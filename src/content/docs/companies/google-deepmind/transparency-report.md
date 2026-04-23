---
title: 透明度报告
description: Google 透明度报告生态与 AI 专项披露；SynthID、选举限流、EU AI Act 训练数据摘要
sidebar:
  order: 4
snapshotDate: 2026-04-23
---

> **观察**：Google 的透明度披露是**三大前沿实验室中最成熟但也最碎片化**的。
> **Ranking Digital Rights 2025** 连续第七年把 Google 列入透明度"顶层"，但批评其
> **"breadth but not depth"**——文档多，但关键 AI 决策（如训练数据来源比例、CCL 阈值
> 具体数值）仍不公开。

## Google 透明度报告生态的四重架构

与 Anthropic 单一 **Transparency Hub**、OpenAI 的**Privacy Hub + 单次 Model Spec** 相比，
Google 的透明度披露**分散在至少四个官方入口**：

1. **[Google Transparency Report](https://transparencyreport.google.com/)**（2010 起）——
   legacy，政府请求、版权删除等
2. **[Responsibility & Safety Hub](https://deepmind.google/about/responsibility-safety/)**（DeepMind 维护）——
   AI 特定安全研究、SynthID、FSF Reports
3. **[Responsible AI Progress Report](https://ai.google/responsibility/responsible-ai-progress-report/)**（2019 起，年度）——
   公司级 AI 治理年度汇报
4. **产品级透明度文档**：Gemini Model Cards、FSF Reports、AI Studio 透明度面板、
   Google Cloud Model Armor

这种**多层架构**与公司规模相称——但使得**"Google 的 AI 透明度水平"无法用单一文档判断**。

## 第一层：Google Transparency Report（Legacy + AI 扩展）

**2010 年 Google 发布 Transparency Report**，是全球首个大型科技公司发布**政府数据请求**
与**版权删除**的公开披露，被**哈佛 Berkman Klein Center** 誉为"modern transparency
reporting 的起点"。2023 起新增 **AI 相关的 DMCA 请求**：

- **Gemini 生成内容的版权删除请求**
- **AI Overviews / AI Search 的内容标注误用请求**
- **Bard → Gemini 过渡期的账号合规请求**
- **Deepfake / 非自愿合成图像请求**

**2025 年度数据的量级特征**（具体数字以 Google Transparency Report 官方披露为准）：

- Gemini 相关 DMCA 请求在**万件量级**，远小于 YouTube 年度的千万级
- "Deepfake 非自愿图像"类别在**千件量级**（YouTube + Gemini + Workspace 合计）
- **政府数据请求覆盖范围**延伸至 **AI Studio 开发者账户**（2025 新增）

### 政府请求透明度（按地域）

Google Transparency Report 按地域公开政府 AI 相关数据请求。量级规律：

- 美国仍是请求数量最高的司法辖区（**万级 / 半年**，合并 AI + 传统产品）
- 欧盟合计处于**千级至万级**，德、法为主
- 英国处于**千级**
- **中国大陆**：0 次（Google 未正式运营）
- **印度**受 IT Rules 与 DSA 式合规压力，请求数量在**千级**

具体数字以 Google Transparency Report 半年度更新为准。

## 第二层：Responsibility & Safety Hub（DeepMind）

[deepmind.google/about/responsibility-safety](https://deepmind.google/about/responsibility-safety/) 是
**DeepMind 而非 Google Legal** 维护的 AI 特定透明度入口：

- **FSF 文档**：v1 / v2 / v3 全部公开
- **Model FSF Reports**：Gemini 2.5（2025-04）、Gemini 3 Pro（2025-11）
- **Gemini Model Cards**（交叉引用至 [model-card](./model-card/)）
- **SynthID 技术说明**
- **AGI Safety Research 论文索引**
- **UK / US AISI 评估合作说明**

**特点**：**深度但零散**——不是"年度报告"模式，而是**持续更新的研究型披露**。学术界普遍
认为这种模式**对研究者友好**但**对监管和普通用户不友好**。

## 第三层：Responsible AI Progress Report（年度）

**2019 起** Google 发布 *AI Principles Progress Update*，2024 改名 *Responsible AI
Progress Report*。[ai.google/responsibility/responsible-ai-progress-report/](https://ai.google/responsibility/responsible-ai-progress-report/)

**2024 版（本轴所处时期首份改名版）核心内容**：

- **AIPR 流程公开**：年度审查案例数以数百级提案计（具体数值以官方报告为准）
- **拒绝案例**：披露"被拒"项目数量级（不披露具体项目名）
- **用户研究**：偏见评估、可访问性
- **AI Principles 修订说明**（包括**删除军事禁令的"背景"说明**，措辞中性）

**批评**（RDR / Access Now / Article 19 等评估机构）的共识：

Progress Report 在可问责性层面的典型局限是——整体呈现接近营销叙事，
而负面案例、near-miss、政策争议则系统性缺席。

**2025 版**新增：

- **SynthID 部署数据**（见下）
- **EU AI Act 合规摘要**
- **GPAI Code of Practice 签署详情**
- **Gemini 训练数据 opt-out 统计**

## 第四层：产品级透明度

### Gemini Model Cards & FSF Reports

（详见 [model-card](./model-card/) 和 [safety-framework](./safety-framework/)）

### AI Studio 透明度面板

Google AI Studio 为开发者提供**实时透明度面板**：

- 当前调用的模型版本、知识截止日期
- Safety 分类器触发日志
- SynthID 水印状态
- **Grounding 引用**（"Gemini 答案基于哪些网页"）

**这是目前业界把透明度最深度产品化的做法**——但仅对 Google Cloud 付费开发者可见。

### Google Cloud Model Armor

**Model Armor**（2024-07 发布）是 Vertex AI 企业客户的**合规可观测性工具**：

- 实时 PII 检测
- Jailbreak 尝试检测
- 内容政策合规日志
- **透明度 API**：客户可导出"Gemini 对此 prompt 的处理决策摘要"

**实践中**：Model Armor 日志**成为欧盟 AI Act 第 13 条"to users"透明度义务的合规证据**。
这是"透明度作为 API"的新范式。

## SynthID 与合成媒体透明度

**SynthID** 是 DeepMind 2023 推出、2024-2026 持续演进的**内容水印系统**。

### 部署范围（2026-Q2）

| 产品 | SynthID 类型 | 默认状态 |
| --- | --- | --- |
| **Imagen 3 / 4** (图像) | Visual watermark + metadata | **强制开启** |
| **Veo 3** (视频) | Frame-level watermark | 强制开启 |
| **Lyria 2** (音乐) | Audio watermark | 强制开启 |
| **Gemini** (文本) | **Token-level statistical watermark** (2024-10 扩展) | **默认开启**（可 API 关闭） |
| **NotebookLM Audio** (播客) | Audio watermark | 强制开启 |

### 技术与政策背景

- **2024-10 Gemini 文本水印**推出后，DeepMind 开源了 **SynthID-Text detector**（有限版）
- **C2PA 兼容**：SynthID 元数据与 C2PA Content Credentials 标准互操作
- **EU AI Act 第 50 条**：Gemini 作为 GPAI 须在输出中标注 AI 生成属性——SynthID 是主要合规机制
- **加州 AB 2655 (Defending Democracy from Deepfake Deception Act)**：要求平台检测并标注
  AI 生成政治内容——SynthID 是 Google 的合规路径

### 局限性

- **剪切 / 重新编码**会部分破坏视频水印
- **文本水印**在短文本（< 200 token）检测率低
- **跨平台**：Gemini 生成文本经 Word 编辑后水印残存率显著下降
- 独立学术研究（CMU、Stanford 等 2024-2025 水印鲁棒性论文）显示 SynthID-Text
  在对抗性修改（改写、机器翻译回译等）后检测率显著下降

## 选举透明度：2024 Gemini 的"拒答政策"

2024-03 Google 宣布 **Gemini 对"与选举相关的事实问题"停止回答**。
官方在博文中以"在重要议题上出于审慎"为由，开始对选举相关查询类型施加回答限制
（具体措辞与时点以 Google 官方博客存档为准）。

**范围**：全球有 2024 大选的国家（美国 + 欧盟 + 印度 + 英国 + ...）

**争议**：

- **支持**（选举诚信专家）：降低了 LLM 制造虚假信息风险
- **批评**（新闻学界、Kevin Roose NYT）：**"过度审查"**——用户问"谁是参议院多数党领袖"
  都被拒绝
- **Gemini App vs. Google Search 的不对称**：Search 的 AI Overviews **未受同等限制**

**2026 更新**：Gemini 3 Pro **有限恢复**回答选举事实问题（"谁是现任美国总统"），
但对**选举预测、候选人评价**仍保持拒答。

## 训练数据透明度（EU AI Act Art 53 合规）

### Google 的合规路径

2025-08-01 Google 签署 **GPAI Code of Practice**（全部三章），使用 CoP **Transparency Chapter
模板**发布 Gemini 3 Pro 训练数据摘要。内容包括：

- 数据来源**大类别**：公开网页、书籍、学术、视频、合成数据
- robots.txt 合规说明（Google-Extended）
- Workspace / Gmail / YouTube 内部数据的**非训练承诺**
- copyrighted content 处理的"ongoing licensing efforts"

### 未披露的关键信息

- **具体来源占比**（例如网页 vs. 书籍 vs. 合成的比例）
- **合成数据的生成方法**
- **包括的语言分布**
- **任何"filter 之前 vs. 之后"的对比**

**这是三家前沿实验室的共同问题**——RDR 2025 Scorecard 给三家都在"训练数据透明度"维度
打 "Partial" 分数。

## 学术批评

### Ranking Digital Rights（RDR）

RDR 自 2015 起每年评估大型科技公司的**人权 / 言论 / 隐私 / 治理**透明度。

在近年 RDR Corporate Accountability Index 中，Google 综合分数位居所有被评估公司前列，
但在 AI 特定维度（训练数据披露、AI 政策执法指标、AI 申诉救济）分数**显著低于**其整体分数，
典型评价是 Google 在成熟透明度上领先同业，但在 AI 专项透明度上并未领先。

### Kirsten Martin（Notre Dame）—— Transparency Theater

Martin 的 *Ethical AI Starts with Data* 提出**透明度剧场**（transparency theater）
概念——文件齐全但不产生可问责性。她的 Google 分析：

- **文档完整性**：高
- **可操作性**（外部利益方能否用透明度追究责任）：中低
- **对比监管**：Martin 的核心论点是 GDPR Art 22 对自动化决策的透明度要求，
  在可执行性上显著强于 Google 的自愿披露

### Mike Ananny（USC）—— "Seeing Without Knowing"

Ananny 在 *Seeing Without Knowing: Limits of the Transparency Ideal*（2018）早在 AI
浪潮前就指出**"透明度 ≠ 问责"**。AI 时代放大了这一问题——**Google 的 SynthID 技术细节
公开，但 SynthID 的"误报率"与"关闭 API"的企业客户清单不公开**。

### Meta vs. Google 的透明度对比

**Meta CrowdTangle 2024-08 关闭**后，研究者转向 Google 的 YouTube API 和 Google Search
Console。但 Google 的 API 访问**比 CrowdTangle 更受限**——**Google Researcher Program**
在 2024-2025 年期间的申请拒绝率据学术界反映处于较高水平（具体比例尚无公开权威统计）。

## 行业第一手实践视角

### 内部透明度治理

Google 内部透明度报告编制流程（**Jigsaw** 团队与 Trust & Safety 共同主导）：

- **Q1**：跨部门数据收集（Legal / DeepMind / Product）
- **Q2**：草稿内部审查（**重点在不披露已进入诉讼的数据**）
- **Q3**：Communications 润色
- **Q4**：发布 + 同步更新 ai.google / transparencyreport.google.com

**内部张力**：**DeepMind Research** 倾向更深的 AI 披露；**Legal** 倾向受诉讼风险约束的保守
披露。近年（2024-2026）可见**DeepMind 方影响力上升**——FSF Reports 就是典型案例，
**把详细安全数据"抢先"公开**。

### 企业客户透明度 vs. 公共透明度

Google Cloud Vertex AI 客户获得的透明度**比公共文档丰富得多**：

- SLA 绑定的 safety 分类器性能指标
- **Model Armor 日志**（完整合规证据）
- FSF Report **pre-release**（企业客户在模型公开前获取）
- Responsible AI Toolkit 的实时 telemetry

**这造成"合规两极"**：付费企业客户获得充分透明度，个人用户依赖公开版本。
**EU AI Act 要求对普通用户的透明度义务**，正在**部分**缩小这一差距。

### 与 DSA 的交互

Google Search 作为 VLOP（Very Large Online Platform），**DSA 第 24、42 条透明度义务**
要求系统性风险报告、广告库、推荐算法披露。**AI Overviews 被纳入 DSA 报告范围**——
这是 Google 首次**在法律强制**下披露 AI 产品的系统性风险评估。

## 与同业对比

| 维度 | Google (2026) | Anthropic | OpenAI |
| --- | --- | --- | --- |
| Legacy 透明度报告 | **自 2010** | 无 | 无 |
| AI 专项透明度 | Responsibility & Safety Hub + AI Progress Report | Transparency Hub | Privacy Hub + 零散 |
| 模型级安全报告 | **FSF Reports（独立）** | Risk Reports（2026-04 起） | System Cards |
| 训练数据摘要 | EU CoP 模板 | EU CoP 模板 | EU CoP 模板（部分保留） |
| 水印系统 | **SynthID（四模态）** | 无（合作 C2PA） | 有限（图像） |
| 企业透明度工具 | **Model Armor** | Claude Trust Center | Enterprise Dashboard |
| DSA 合规 | **Search + Shopping VLOP** | 非 VLOP | 非 VLOP（但 ChatGPT 接近阈值） |

## 关键时间线

- **2010**：Google Transparency Report 首发
- **2018**：AI Principles 发布（含 Progress Report 承诺）
- **2019**：首份 AI Principles Progress Update
- **2023-10**：SynthID 首发（图像）
- **2024-03**：Gemini 选举限流
- **2024-07**：Google Cloud Model Armor
- **2024-10**：SynthID 扩展至文本
- **2025-04**：首份模型级 FSF Report (Gemini 2.5)
- **2025-08**：签署 GPAI Code of Practice
- **2025-11**：**Gemini 3 Pro FSF Report + 同步训练数据摘要**
- **2026-04**：FSF v3 + Responsible AI Progress Report 2026 版

## 跨链接

- 公司层总览：[Google DeepMind index](/companies/google-deepmind/)
- 使用政策：[Usage Policy](./usage-policy/)
- 模型卡与技术报告：[Model Card](./model-card/)
- 安全框架（FSF）：[Safety Framework](./safety-framework/)
- 红队与外部评估披露：[Red-Team Disclosures](./red-team-disclosures/)
- EU AI Act 合规：[EU AI Act](/policies/eu/ai-act/)
- DSA 透明度义务：[EU DSA](/policies/eu/dsa/)
- Ranking Digital Rights 方法：[学术参考](/references/ranking-digital-rights/)
