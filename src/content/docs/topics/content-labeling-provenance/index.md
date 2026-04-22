---
title: 生成内容标识
description: 三辖区对 AI 生成 / 合成内容标识义务的规则比较——学界讨论 + 技术标准 + 行业实践
sidebar:
  order: 1
---

## 议题定位

生成内容标识是 AI 治理中**技术、法律、政治三重交叉**的议题：深度伪造的民主风险、
选举诚信、名誉权、消费者欺骗、**AI 生成与人类创作的区分本身**——都汇聚于此。

本议题关注：**由 AI 系统生成或实质修改的内容，应如何向用户或下游系统表明其合成属性**。

两种技术路径：
- **显式标识**（explicit labels / visible watermarks）：人眼可见的水印、角标、文字提示（"AI 生成"）
- **隐式标识 / 出处**（implicit labels / provenance）：文件元数据、不可见水印、加密签名（C2PA）

## 三辖区比较速览

| 维度 | 🇨🇳 [中国](./china/) | 🇺🇸 [美国](./us/) | 🇪🇺 [欧盟](./eu/) |
| --- | --- | --- | --- |
| 规则层级 | **部门规章 + 强制性国标**（双轨）| 州法 + 行业承诺为主；联邦无统一 | 法律（AI Act）+ 协调标准（制定中） |
| 核心义务主体 | 服务提供者、传播平台、**上传用户**（三方）| 按州法各异；雇主（就业）+ 平台（选举） | Provider + Deployer |
| 显式 vs. 隐式 | **两者均要求**（双轨）| 以显式为主 | 两者均要求，**隐式须"机器可读且稳健"** |
| 生效时间 | **2025-09-01**（[标识办法](/rules/china/biaozhi-banfa/) + [GB 45438](/rules/china/gb-45438-2025-ai-content-labeling-standard/)）| 州法时间线不一；联邦 NO FAKES / COPIED 等在审 | **2026-08-02**（AI Act 第 50 条）|
| 技术标准 | [GB 45438-2025 强制性国标](/rules/china/gb-45438-2025-ai-content-labeling-standard/) | **C2PA** (行业标准) | CEN-CENELEC JTC 21（协调标准制定中）|
| 执法 | 网信办牵头多部委 | FTC + 各州 AG | 成员国 MSA + AI Office |

> 表格是索引，**具体义务请进入各辖区页面**，不要把此表作为合规结论。

## 学界讨论

### 深度伪造 / 合成媒体的开创性研究

- **Chesney & Citron (2019)** *"Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security"*
  （*California Law Review*）—— **深度伪造法律研究的奠基论文**
- **Paris & Donovan (2019)** *"Deepfakes and Cheap Fakes"*（Data & Society）——
  扩展视野到**低技术门槛的"廉价伪造"**（照片错配、剪辑、配音等）
- **Farid (UC Berkeley)** *"Creating, Using, and Combating Synthetic Media"* 
  + Farid 实验室持续的深度伪造检测研究——**法医 AI** 方向权威
- **Ajder, Patrini, Cavalli, Cullen (2019)** *"The State of Deepfakes"* (Deeptrace)：
  深度伪造检测的定量基线

### 标识技术与出处（Provenance）

- **C2PA (Coalition for Content Provenance and Authenticity)**：Adobe / Microsoft / Intel / BBC 等
  主导的**内容出处开放标准**
- **Leibowicz, McGregor, Ovadya (2021)** *"The Deepfake Detection Dilemma"*（Partnership on AI）
- **Partnership on AI Synthetic Media Framework** (2023)：行业自愿框架，对齐创作者、分发者、
  用户三方义务
- **Kirchenbauer, Geiping et al. (2023)** *"A Watermark for Large Language Models"*
  （Maryland）—— **文本水印技术**
- **Fernandez, Couairon et al. (Meta, 2023)** *"Stable Signature"*：图像生成模型的水印植入

### 政治 / 选举语境

- **Ferrara (USC, 2024)** 对 2024 美国大选中生成式 AI 使用的实证研究
- **Rini (2020)** *"Deepfakes and the Epistemic Backstop"*：**认识论信任**问题
- **Coeckelbergh** *"The Political Philosophy of AI"* 对 AI 内容的民主影响分析
- **Woolley & Howard** *"Computational Propaganda"* 系列研究

### 国际法与跨境适用

- **Bradford** *Digital Empires*（第 9 章对深度伪造治理的比较）
- **Livingston, Risse, Valeriani** 对 AI 生成内容的人权影响

### 中国学术视角

- **张凌寒、张吉豫等**：对深度合成、生成式 AI 标识的法学分析
- **官方专家解读合集**（CAC 2025-03）：对标识办法的系统化解读
- **Matt Sheehan (Carnegie)** 对中国标识办法的英语分析

## 核心争议

### 1. **稳健性**（Robustness）：标识能抵抗多大程度的对抗？

- **技术现实**：当前水印可被**截图、压缩、二次编辑**破坏
- **研究共识**（Farid 实验室 / Maryland / CMU）：**完全稳健的水印不存在**，只是**成本 / 能力竞赛**
- **对监管的含义**：要求标识可能**创造虚假安全感**——"有标识"不等于"真实"
- **反向问题**：如果标识可被破坏 → 不法分子可以**伪造"原生内容"**，比无标识时代更危险

### 2. **显式 vs. 隐式标识的权衡**

- **显式**：用户可见，但**艺术 / 创作自由**受限（[EU AI Act 第 50 条](/rules/eu/ai-act/) 艺术 / 讽刺豁免）
- **隐式**：不影响用户体验，但**需下游工具识别**，普通用户看不到
- **中国双轨**：同时要求两者；**欧盟**允许部分场景仅隐式；**美国州法**以显式为主

### 3. **例外：艺术、讽刺、新闻**

- **EU AI Act 第 50 条第 4 款**：艺术 / 虚构 / 讽刺作品可有"不破坏艺术体验"的弱化披露
- **中国《标识办法》**：**未明确艺术 / 讽刺豁免** → 实务边界不清
- **美国**：各州法差异大，加州 AB-2655（deepfake 选举）、德州 SB 751、明州 HF 1370 等

### 4. **跨境执法的困境**

- **中国标识办法**：境外服务面向境内用户执法手段有限
- **EU AI Act 第 50 条**：域外效力（第 2 条）但实际执行依赖成员国 MSA
- **美国**：联邦无统一，州法**不能**约束境外

### 5. **合成数据 × 标识**

- AI 训练使用 AI 生成的合成数据时是否也需标识？
- EU AI Act 第 53 条训练数据摘要要求披露**合成数据占比**，但未强制链路标识
- **学界尚未形成共识**

## 技术标准战线

### C2PA 的地位

- **C2PA** 是**Adobe 主导的事实国际标准**，2022 发布 1.0
- **签署 / 集成**：OpenAI (DALL-E / Sora 部分)、Google (Imagen)、Microsoft、BBC、Nikon（相机内置）、
  Leica、Arm、Sony、Truepic 等
- **技术**：基于 JUMBF 容器 + X.509 加密签名；记录来源、修改历史、工具链
- **批评**：需要全流程工具支持；普通用户看不到

### 中国 GB 45438-2025 与 C2PA 的互操作

- **GB 45438-2025**：中国强制性国标（2025-09-01 生效，与标识办法同日）
- **字段定义**：服务提供者名称、内容编号、生成日期、模型信息、内容类型
- **与 C2PA 的兼容**：**技术字段可映射**，但**法律地位和签名机制不同**
- **实务挑战**：国内 AI 服务输出在海外 C2PA 生态中是否可识别？**跨标准转换机制未建立**

### EU CEN-CENELEC JTC 21

- 欧盟协调标准制定委员会下 AI 专题委员会
- **prEN 18286** (2026 Q1 进入 Enquiry 阶段) 是首部 AI Act 相关的协调标准
- 2026-08-02 AI Act 第 50 条适用前未必能全部到位 → Code of Practice 作为过渡

## 行业实践视角

### 主要 AI 服务的标识现状（2026-04）

| 公司 / 产品 | 显式标识 | 隐式标识 | 集成标准 |
| --- | --- | --- | --- |
| **OpenAI DALL-E / Sora** | 角标（部分） | **C2PA**（全面） | C2PA 1.3 |
| **Google Imagen / Gemini 图像** | 角标 | **SynthID**（Google 自有）+ C2PA | SynthID + C2PA |
| **Microsoft Designer / Bing Image** | 角标 | C2PA | C2PA |
| **Anthropic Claude** | 文本提示（输出含"AI"声明） | 无系统性隐式标识 | — |
| **Meta AI / Llama** | 部分角标 | **有限 C2PA**（Instagram / Facebook）| C2PA 部分 |
| **[字节豆包](/companies/bytedance/) / 国内服务** | 符合中国标识办法 | **GB 45438-2025** | 国标 |
| **[百度文心](/companies/baidu/) / [阿里 Qwen](/companies/alibaba/) / [DeepSeek](/companies/deepseek/)** | 中国标识办法合规 | GB 45438-2025 | 国标 |
| **[Midjourney](/companies/)** (待补) | 不明显 | **有限** | 社区争议 |
| **[xAI Grok](/companies/xai/) 图像** | **弱 / 无** | **无** | — |

### 主要社交平台的标识补充

**2025-09-01 中国标识办法生效当日**：
- **微信、微博、抖音、快手、哔哩哔哩、小红书** 六大平台同步上线**显式 AI 角标 + 隐式元数据标识**
- 创作者主动标注 + 平台自动检测补充
- 这是**论文 §4.1.3 "纵向三级协同"的实证**（中央出法、平台快速落地）

**2024-2026 Meta / YouTube / TikTok**：
- 主动添加 **"由 AI 创建或大量修改"** 标签
- 基于 C2PA 自动检测 + 用户自主声明
- 内容审核政策融合

### 行业自愿承诺

- **2023 White House Voluntary Commitments**：OpenAI、Google、Meta、Anthropic 等承诺投资水印 /
  出处技术
- **2024 Seoul AI Declaration**：扩展到 Synthetic Media（生成式媒体）监管合作
- **PAI (Partnership on AI) Synthetic Media Framework** (2023)：行业自愿框架

## 三辖区实施的 2026 Q1 状态

- **🇨🇳 中国**：**已落地**（2025-09-01 生效）。双轨标识 + 国标。实务运行 7 月余，平台配合度高
- **🇺🇸 美国**：联邦无；州法分散。**TAKE IT DOWN Act (2025)** 处理非合意亲密图像是联邦层面少数的AI 相关立法
- **🇪🇺 欧盟**：**2026-08-02 适用**（AI Act 第 50 条）；**GPAI Code of Practice** 作为过渡合规路径

## 相关规则与公司

### 相关规则

- **🇨🇳 中国**：[标识办法](/rules/china/biaozhi-banfa/) + [GB 45438-2025](/rules/china/gb-45438-2025-ai-content-labeling-standard/)、[深度合成规定](/rules/china/deep-synthesis-provisions/)、[生成式 AI 办法](/rules/china/generative-ai-interim-measures/)
- **🇪🇺 欧盟**：[AI Act](/rules/eu/ai-act/) 第 50 条（2026-08-02 生效）、[GPAI Code of Practice](/rules/eu/gpai-code-of-practice/)
- **🇺🇸 美国**：[NIST AI RMF](/rules/us/nist-ai-rmf/)（无联邦专项）；州法（加州 AB-2655、德州 SB 751 等）

### 相关公司

- **技术样板**：[OpenAI](/companies/openai/) / [Google DeepMind](/companies/google-deepmind/)（SynthID + C2PA）
- **中国合规样板**：[字节](/companies/bytedance/) / [百度](/companies/baidu/) / [阿里](/companies/alibaba/)（国标合规）
- **最弱**：[xAI](/companies/xai/)（几乎无系统性标识投入）

## 辖区深度页

- [🇨🇳 中国](./china/)
- [🇺🇸 美国](./us/)
- [🇪🇺 欧盟](./eu/)
