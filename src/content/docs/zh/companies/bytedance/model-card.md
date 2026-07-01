---
title: 模型卡
description: 豆包大模型 / Seed 系列技术披露归档 — 中国备案材料 vs. 西方 Model Card 的"不对称透明"（2026-06-28 快照）
sidebar:
  order: 2
snapshotDate: 2026-06-28
---

> 字节跳动**没有**一份对标 Anthropic / OpenAI / Google DeepMind 英文社区意义上的 "Model Card"。
> 豆包大模型的"说明书"功能由两套平行材料承担：
> **(1) 火山方舟技术博客 + 偶发 arXiv 论文**（产业透明）；
> **(2) CAC 算法备案中的《算法安全自评估报告》+《训练数据来源说明》**（监管透明，非公开）。
> 二者合起来也无法覆盖西方 Model Card 的"风险 / 偏见 / 评估 / 限制"标准章节——
> 这就是本页的核心观察：**不对称透明**。

## 一、豆包大模型谱系（2024–2026 Q1）

### 基础模型线

| 模型 | 发布 | 类型 | 公开信息层级 |
| --- | --- | --- | --- |
| **豆包大模型 1.0（Pro / Lite / Character）** | 2024-05，火山引擎 Force 大会首发 | 通用 LLM，多规格 | 火山引擎博客 + 产品页；无独立论文 |
| **Doubao-1.5-Pro** | 2025-01 | 通用 LLM，MoE 架构 | 火山引擎技术博客（稀疏激活细节披露有限）|
| **Doubao-1.5-Pro-256k** | 2025-02 | 长上下文版本 | 火山引擎博客 |
| **Doubao-1.5-Vision-Pro** | 2025-03 | 多模态（图像理解）| 火山引擎博客 + arXiv 技术报告（Seed-VL 系列）|
| **Doubao-1.5-Thinking** | 2025-Q3 | 推理专用（对标 o1 / R1）| 博客级披露，部分基准成绩 |

### Seed 开源线（克制型开源）

| 模型 | 发布 | 许可证 |
| --- | --- | --- |
| Seed-ASR | 2024 | 研究许可 |
| Seed-TTS | 2024 | 研究许可 |
| Seed-Coder（小参数） | 2025 | Apache-2.0（部分规格）|
| Seed-Thinking（小参数预览） | 2025 | Apache-2.0（部分规格）|
| **Seed-Seedance 1.0（视频生成）** | 2025-06 | 闭源商用，对标可灵 / Vidu / Sora |

**与 DeepSeek / Qwen 的对比**：DeepSeek V3 / R1 全线权重开源（MIT），Qwen 从 0.5B 到 72B 全尺寸开源（Apache-2.0）。
字节明显更克制——仅小参数 Seed 系列开源，主力豆包 Pro / Pro-256k / Vision-Pro 全部闭源。
这一选择与字节"商业化为先"的公司基因一致，也与 TikTok 全球数据资产的地缘敏感性相关。

## 二、CAC 算法备案：豆包系产品的"监管版 Model Card"

### 备案清单中的字节系产品（多批次累积）

依据 CAC 定期公示的"已备案生成式 AI 服务目录"，截至 2026-04-22 字节系已备案主要产品：

- **豆包 (App + Web)**：2023-08-31 首批（第一批备案），服务主体"北京春田知韵科技有限公司"
- **扣子 Coze**：2024 批次
- **火山方舟（面向 B 端）**：作为 MaaS 平台，单独备案并按模型分别登记
- **豆包国际化版本 Cici**：国内未备案（仅出海）
- **多款行业应用**（教育、客服、电商版 AI 助手等）：分别备案

### 备案材料的"监管可见、公众不可见"结构

依据《生成式人工智能服务管理暂行办法》第 17 条与 CAC《生成式人工智能服务备案相关材料清单》，
备案需提交但**不对外公开**的材料包括：

1. **《算法安全自评估报告》**（通常为上百页长度量级）—— 核心内容：
   - 算法基本原理与技术路线描述
   - 训练语料数据来源、规模、清洗流程
   - 安全对抗测试结果（TC260-003 规定的 31 项安全风险类别抽样，每类≥ 1000 条测试题）
   - 人工标注与 RLHF 价值观对齐流程
   - 违法违规内容防御机制
   - 未成年人保护专项
2. **《训练数据来源说明》**
3. **《语料标注规则》**
4. **《应急处置预案》**
5. **《用户投诉处理机制说明》**

> CAC 仅公开备案清单（产品名 + 备案号 + 主体公司 + 备案时间），**不公开上述材料正文**。
> 学术上也无法通过合法渠道获得。这是与 OpenAI 发 GPT-4 Technical Report、
> Anthropic 发 Claude Opus Model Card 的**结构性差异**——
> 不是"有还是没有"，而是**"披露给谁"**。

## 三、学术批评：中国模式的 Model Card 问题

### 中国学者视角

- **张凌寒**《算法备案制度研究》（2024）：备案清单公开化解决了**存在性可见**，
  但材料不公开导致**内容不可见**。这种"部分公开"在行政法上开创了新形态，
  但对公众、研究者、用户赋权有限
- **戴昕**（北京大学）：提出 "regulatory intimacy vs. public transparency"——
  监管机构可以深入穿透企业技术细节，但公众透明度反而低于完全市场化的美国模式
- **朱悦**（同济大学）：算法备案的公开维度不够，导致**第三方学术评估几乎不可能**。
  研究者只能对终端产品做黑盒评测，无法核验训练数据合规性声明
- **吴洪**（清华）：相较美国模型卡的 "Intended Use / Out-of-Scope Use" 框架，
  中国的备案材料更重"国家安全 + 内容合规"而非"使用者赋权"——两套 Model Card 的**设计哲学不同**

### 国际学者视角

- **Marietje Schaake**（Stanford Cyber Policy）："Asymmetric transparency" 是
  理解中国头部 AI 公司披露策略的关键——面向国内监管深度透明，面向国际社会高度隐形
- **Jeffrey Ding**（ChinAI / GWU）：火山方舟的技术博客偶发披露**比想象中更丰富**——
  特别是 Doubao-1.5-Pro MoE 架构、Seed-Thinking 推理时 scaling 细节——
  但格式非标准、分散、不承担问责功能
- **François Chollet**（ARC Prize / 前 Google）：质疑 Doubao 系列在
  MMLU / GSM8K / MATH 等英文基准上异常高分——"训练数据对齐"
  （training-on-benchmark）嫌疑在中国头部模型中普遍存在，需要第三方 held-out 评测
- **Gary Marcus**：中国前沿模型在**英文 OOD 任务**上下降明显——说明基准分数的"中文可转移性"有限
- **Helen Toner**（Georgetown CSET）：中国头部实验室没有 Model Card 不是能力问题而是制度激励问题——
  在 CAC 备案的激励下，详细披露反而增加法律暴露
- **Paul Triolo**（DGA）：豆包的闭源 + 商业化路线与 DeepSeek 的开源路线代表中国 AI 产业的**两种生存策略**，
  字节的路线更贴近全球头部商业实验室

## 四、实务洞察：字节如何发布技术报告

### 火山方舟技术博客（主战场）

字节的"Model Card 功能等价物"主要是火山引擎公众号 + 火山方舟开发者博客发布的技术博文。
通常覆盖：

- 新模型发布时的能力简介（MMLU / C-Eval / GSM8K / MATH / HumanEval / MMBench 等基准成绩）
- 架构与训练基础设施简述（参数量 / 上下文窗口 / MoE 结构 / 训练 token 数等）
- 应用案例（汽车语音、教育、电商）
- 定价与 API 调用示例

**缺失**：

- 偏见 / 毒性评估的系统性披露
- 训练数据版权合规细节
- 误用风险与 out-of-scope 使用警告
- 红队结果（只有合规评测的简要成绩）
- 预部署评估的独立第三方验证

### arXiv 技术报告（偶发）

Seed 系列会发表 arXiv 论文，近一两年代表性工作：

- Seed-TTS（语音合成）、Seed-ASR（语音识别）
- Seed-Coder（代码）
- Seed-VL（视觉语言）
- Seed-Thinking（推理模型预览）

这些论文披露质量接近学术标准，但**旗舰模型 Doubao-1.5-Pro / Pro-256k 没有对应的 arXiv 报告**。

## 五、基准对比表（基于火山引擎博客 + 独立评测汇总）

> ⚠ 本表为公开博客与第三方评测汇总的近似值，**非官方 Model Card**。
> 字节未对国际学术界的重测请求做集中响应。

| 基准 | Doubao-1.5-Pro | Claude Opus 4.7 | GPT-4.5 | Gemini 3 Pro | DeepSeek V3 |
| --- | --- | --- | --- | --- | --- |
| MMLU | ≈ 87 | 88+ | 88+ | 89+ | 87+ |
| C-Eval（中文） | 88+ | 82 | 83 | 85 | 88+ |
| GSM8K | 95+ | 95+ | 95+ | 95+ | 95+ |
| HumanEval | 89 | 92+ | 90+ | 92+ | 89 |
| MMBench（多模态） | 84（Vision-Pro）| 86 | 86 | 88 | — |

**观察**：豆包在中文基准（C-Eval、CMMLU、GaoKao-Bench）强势；英文基准与头部闭源模型接近但略低；
在 **held-out 或新发布基准（如 FrontierMath、HLE）上**评测参与度**远低于西方实验室**——
这是研究社区反复提出的透明度痛点。

## 六、2025–2026 Q1 重要动态

- **2025-05**：Doubao-1.5-Vision-Pro 火山方舟上线，作为多模态商用主力；
  配套发布 Seed-VL 技术报告
- **2025-06**：Seed-Seedance 1.0（视频生成）发布，对标可灵 / Vidu / Sora
- **2025-09**：配合《标识办法》生效，豆包输出开始默认添加符合 GB 45438-2025 的隐式水印
- **2025-Q4**：字节参与 TC260-003 修订工作组，提交大模型内容安全评测实践案例
- **2026-02**：豆包大模型 2.0 预发，据火山引擎公告目标为"推理 + 多模态统一 SOTA"，
  但截至 2026-04-23 未见独立技术报告
- **2026-04**：《拟人化互动服务办法》发布，豆包"虚拟朋友 / AI 人设"类功能将触发
  **模型变更备案**——在中国制度下这是继"新模型发布"之后最重要的 Model Card 时刻

## 七、实务建议（给研究者 / 从业者）

- 研究豆包能力，优先查**火山引擎公众号 + 火山方舟开发者博客**，其次是 arXiv Seed 系列论文
- 关注**CAC 备案清单更新**，可推断字节系产品线的迭代节奏（虽不披露内容）
- 第三方评测建议用**held-out 中文基准**（避开 C-Eval 等已在训练集内嫌疑的基准），
  如 FinEval、SuperCLUE-Math 私测集
- 对标西方 Model Card 的标准章节（Intended Use / Risks / Evaluation / Limitations），
  可发现字节披露在"Intended Use"与"Evaluation"上相对完整，在 "Risks" 与 "Limitations" 上显著缺失

## 八、相关索引

- 顶层规则：[《生成式 AI 暂行办法》](/zh/rules/china/generative-ai-interim-measures/) 第 17 条（备案）
  · [TC260-003-2024](/zh/rules/china/tc260-gen-ai-security-basic-requirements/)
- 同类对比：[Anthropic / model-card](/zh/companies/anthropic/model-card/)
  · [OpenAI / model-card](/zh/companies/openai/model-card/)
  · [DeepMind / model-card](/zh/companies/google-deepmind/model-card/)
- 公司侧相邻页：[safety-framework](./safety-framework/) · [red-team-disclosures](./red-team-disclosures/)
