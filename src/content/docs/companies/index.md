---
title: 公司实践
description: 按国别分组，跟踪主要 AI 公司的使用政策、模型卡、安全框架、透明度报告、红队披露
sidebar:
  order: 5
---

本轴收录已公开发布、可长期获取的**公司自发布文档**。每家公司下统一按 **5 类材料**组织。
归档原则与公司归属规则见 [方法论 §3–4](/methodology/#company-attribution)。

## 已收录（按国别）

### 🇺🇸 美国

| 公司 | 主要模型 | 专页 |
| --- | --- | --- |
| **Anthropic** | Claude 系列（Opus/Sonnet/Haiku） | [anthropic](/companies/anthropic/) |
| **OpenAI** | GPT-5.4 系列 / Sora | [openai](/companies/openai/) |
| **Google DeepMind** | Gemini 系列（UK 创始 + Alphabet） | [google-deepmind](/companies/google-deepmind/) |
| **xAI** | Grok 系列 | [xai](/companies/xai/) |

### 🇪🇺 欧盟

| 公司 | 主要模型 | 专页 |
| --- | --- | --- |
| **Mistral AI** 🇫🇷 | Mistral Large 3、Ministral 3、Le Chat | [mistral](/companies/mistral/) |

### 🇨🇳 中国

| 公司 | 主要模型 | 专页 |
| --- | --- | --- |
| **百度 Baidu** | 文心 ERNIE 5.0 / 4.5 系列 | [baidu](/companies/baidu/) |
| **阿里巴巴 Alibaba** | 通义千问 Qwen 3.5 | [alibaba](/companies/alibaba/) |
| **字节跳动 ByteDance** | 豆包 / Seed / Coze / 火山引擎 | [bytedance](/companies/bytedance/) |
| **DeepSeek** | DeepSeek V3 / R1 | [deepseek](/companies/deepseek/) |

## 每家公司的收录结构

1. **使用政策**（Usage / Acceptable Use Policy）—— 用户可否用模型做什么
2. **模型卡 / 系统卡**（Model Card / System Card）—— 模型能力、训练数据、评估
3. **安全框架**（Safety Framework）—— 负责任扩展、准备度、前沿风险管理
4. **透明度报告**（Transparency Report）—— 定期披露（数据请求、内容审核等）
5. **红队与评估披露**（Red-Team & Eval Disclosures）—— 第三方评估与红队披露

每份材料都带 `snapshot_date`、原文链接、本站归档副本（PDF 存 `public/archives/`）。
**不做评判性表述**，只罗列原文关键条款与客观差异。

## v2 规划（待补）

### 🇺🇸 美国（待补）
- Meta（FAIR、Llama 团队）
- Microsoft（以援引 OpenAI 为主）
- NVIDIA（模型开源：Nemotron 系列）
- Apple（Apple Intelligence）

### 🇪🇺 欧盟（待补）
- Aleph Alpha 🇩🇪
- Stability AI 🇬🇧（严格说是英国，但 AI 欧洲生态一员）
- Black Forest Labs 🇩🇪（FLUX 图像模型团队）

### 🇨🇳 中国（待补）
- 智谱 ZhipuAI（GLM 系列）
- 腾讯（混元）
- 月之暗面 Moonshot（Kimi）
- MiniMax（ABAB）
- 华为（盘古）

加入新公司按 [方法论 §3 公司归属规则](/methodology/#company-attribution) 判断，
优先级看公开发布的安全框架 / 模型卡的完整度。

## 跨辖区观察（2026 Q1 快照）

- **开源 vs. 闭源**：美国 Anthropic / OpenAI 偏闭源（安全优先叙事）；
  **Meta / Mistral / 阿里 Qwen / DeepSeek 偏开源**（生态优先叙事）；
  百度走**混合**（旗舰 ERNIE 5 闭源，4.5 系列开源）
- **GPAI Code of Practice 签署情况**：Anthropic / Google DeepMind / Microsoft / Mistral 完整签；
  OpenAI / Meta 部分保留；xAI 部分异议；中国公司未签
- **算力门槛**：EU 10²⁵ FLOP / 加州 SB 53 10²⁶ FLOP 阈值下，
  主要受影响模型：Claude Opus / GPT-5 系列 / Gemini Ultra / Grok 4+ / Mistral Large 2+ / ERNIE 5
- **"安全优先"vs."追求真理"叙事**：Anthropic 强安全；OpenAI 中等；**xAI 明确反"过度审查"**
- **中国公司的独特约束**：必须通过 CAC 算法备案 + TC260-003 合规
