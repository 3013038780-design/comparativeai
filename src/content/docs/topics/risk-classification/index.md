---
title: 风险分级
description: 中国、美国、欧盟对 AI 系统的风险分类方法比较——学界讨论 + 行业实践
sidebar:
  order: 1
---

## 议题定位

"风险分级"是 AI 治理最核心的工程设计问题：**监管强度应随风险上升而增加，但"风险"如何界定、谁来界定、用什么单位**——是三个辖区差异最大的维度。

## 三辖区分层方法速览

| 辖区 | 分层依据 | 层数 | 触发机制 | 代表工具 |
| --- | --- | --- | --- | --- |
| **🇪🇺 欧盟** | **用途 / 场景**（附件 III 清单）+ **算力**（GPAI 10²⁵ FLOP） | **4 层**（禁止 / 高风险 / 有限风险 / 最低风险）+ GPAI 独立通道 | 清单列举 + 算力阈值 | [AI Act 第 5 / 6 / 50 / 51 条](/rules/eu/ai-act/) |
| **🇨🇳 中国** | **服务类型**（深度合成 / 生成式 / 算法推荐 / 拟人化）+ **算力 / 用户规模** | 事实分层（各部门规章独立）| 场景清单 + 100 万用户门槛 + 备案 | [《生成式 AI 办法》](/rules/china/generative-ai-interim-measures/) · [TC260-003](/rules/china/tc260-gen-ai-security-basic-requirements/) · [人工智能安全治理框架](/rules/china/ai-safety-governance-framework/) |
| **🇺🇸 美国** | **联邦：流程化**（NIST AI RMF 按 context）**/ 州：后果性决策 + 算力** | 联邦无统一；州各异 | 州法独立定义 | [NIST AI RMF](/rules/us/nist-ai-rmf/) + [Colorado AI Act](/subnational/us/colorado-ai-act/) + [California SB 53](/subnational/us/california-sb-53-frontier-ai/) |

## 学界讨论

### EU 四级分层的理论基础

- **Veale & Zuiderveen Borgesius (2021)** "Demystifying the Draft EU Artificial Intelligence Act"
  （*Computer Law Review International*）：最早系统分析 AI Act 草案，**批评附件 III 清单是
  "政治妥协而非风险科学"**
- **Smuha, Ahmed-Rengers, Harkens et al. (2021)** "How the EU Can Achieve Legally Trustworthy AI"
  ：从基本权利视角对 AI Act 的系统性评估
- **Bradford (2020)** *The Brussels Effect*（Oxford）：AI Act 作为"欧盟监管输出"的理论样本
- **Engler (Brookings)**：持续追踪 AI Act 实施过程中的漏洞与修补（对 GPAI 条款尤其细致）
- **Mueller (CEPS)**：对 AI Act 高风险清单的动态扩展和合规推定机制的持续评论

### 中国 "场景化 + 敏捷治理" 的学术解读

- **薛澜（清华公管学院）**：提出"**包容审慎、敏捷有效**"，是中国 AI 治理范式的官方 / 学术
  通用表述
- **张凌寒（华东政法大学）**：
  - 提出中国治理是"**场景化事前监管**"——不按风险等级分，按服务形态分
  - 呼吁从"政策驱动"向"法治化治理"过渡
- **Matt Sheehan (Carnegie Endowment)**：
  - *"Tracing the Roots of China's AI Regulations"* (2024) 是英语学界最系统的中国 AI 规则演进分析
  - 指出中国的场景化路径**早于 EU AI Act 的部分条款**，存在反向影响
- **Paul Triolo**：政策实务追踪，对中国"分类分级监管"原则的空壳状态持续指出
- **Olivia 毕业论文《中美欧 AI 治理模式比较》** (2026)：构建"**结构—制度—选择**"三层框架，
  对中国"敏捷协同"、美国"自愿风控"、欧盟"合规前置"的划分

### 美国"无统一分层"的结构性解释

- **Calo (University of Washington)** *"Artificial Intelligence Policy: A Primer and Roadmap"*
  (2017) ：美国 AI 治理分散主义的早期分析
- **Selbst & Barocas** *"The Intuitive Appeal of Explainable Machines"*（FAccT 社群）：
  算法问责的结构性问题
- **Lehr & Ohm (2017)** *"Playing with the Data: What Legal Scholars Should Learn About Machine Learning"*
- **Pasquale (2015)** *The Black Box Society*：**算法不透明**作为分层监管的前置问题
- **Ho & Casey (Stanford RegLab)**：联邦 AI 治理的实证分析
- **Engler (Brookings)**：对比 EU / 美国 AI 治理的持续工作

### 跨辖区比较的经典与新作

- **Anu Bradford (2023)** *Digital Empires*（三辖区比较的通用框架）
- **Floridi et al. (2022)** "CapAI: A Procedure for Conducting Conformity Assessment of AI Systems"
  ：实施导向的 AI Act 工具开发
- **Fjeld et al. (2020)** *"Principled Artificial Intelligence"* (Berkman Klein)：跨国 AI 原则图谱
- **CAIDP (Center for AI & Digital Policy)** 年度 *AI and Democratic Values Index*：跨国比较

## 四个核心争议

### 1. **"风险" 的计量单位**：能力 vs. 用途 vs. 算力

- EU AI Act：**用途清单**为主（附件 III）+ **算力**为辅（GPAI 10²⁵ FLOP）
- California SB 53：**算力**为主（10²⁶ FLOP）
- 中国：**服务类型**为主（深度合成 / 生成式 / 算法推荐），算力未量化
- **学界批评**：[DeepSeek 2025-01 冲击](/companies/deepseek/) 证明算力门槛**不等于能力门槛**——
  可以用少得多的算力达到前沿能力。这削弱了 EU 和加州基于算力的阈值设计

### 2. **高风险清单的动态扩展**

- EU AI Act 附件 III 允许欧委会通过授权法案扩展清单
- **Veale 等批评**：这给了欧委会过大的立法权力，绕开了正常立法程序
- 中国的"场景化"立规本质上就是**不断新增清单**（2022 算法推荐 → 2023 深度合成 → 2023 生成式 →
  2025 标识 → 2026 拟人化），每次新增即一部新规章

### 3. **"禁止清单" 的政治边界**

- EU AI Act 第 5 条 8 项禁止（社会评分、预测性执法等）常被批评为**意识形态驱动**
  （针对中国社会信用系统的回应）
- 中国无明确"禁止清单"，通过各部门规章的"不得"条款分散处理
- 美国联邦无禁止；加州 SB-1047（2024 被否决）曾拟引入

### 4. **合规推定 vs. 独立评估**

- EU AI Act：**符合协调标准 = 合规推定**（第 40 条）—— 把判断权交给标准化机构
- 美国：**NIST AI RMF** 在州法中作为"合规推定"入口
- 中国：**TC260-003 是事实合规标尺**，通不过备案不能上线
- **争议**：合规推定是否让私营标准化机构承担过多公共政策裁量（Almada 2025 欧盟评论）

## 行业实践视角

### 公司如何"对应"不同分层体系

| 公司 | EU AI Act 触发 | 加州 SB 53 触发 | 中国备案触发 | 对应策略 |
| --- | --- | --- | --- | --- |
| [Anthropic](/companies/anthropic/) | ✅ GPAI + 系统性风险 | ✅ 10²⁶ FLOP 前沿 | 未入中国 | **[RSP v3](https://www.anthropic.com/news/responsible-scaling-policy-v3)** ASL 等级（映射多数法规）|
| [OpenAI](/companies/openai/) | ✅ GPAI + 系统性风险 | ✅ | 未入中国 | **[Preparedness Framework v2](https://openai.com/index/updating-our-preparedness-framework/)** 高 / 关键阈值 |
| [Google DeepMind](/companies/google-deepmind/) | ✅ GPAI + 系统性风险 | ✅ | 未入中国 | **[FSF v3](https://deepmind.google/blog/strengthening-our-frontier-safety-framework/)** Critical + Tracked CLs |
| [Mistral](/companies/mistral/) | ✅ GPAI + 系统性风险 | ⚠️（Mistral Large 3 约 10²⁶）| 未入中国 | **GPAI CoP 签署 + 开源透明** |
| [Meta](/companies/) | ✅ 部分 | ✅ | 未入中国 | Frontier AI Framework v2 |
| [字节豆包](/companies/bytedance/) | 未入 | 未入 | ✅ 深度合成 + 生成式 | **CAC 备案 + TC260-003 合规** |
| [阿里 Qwen](/companies/alibaba/) | 开源模型下载 → 欧盟潜在义务 | 开源下载 → 加州潜在 | ✅ | 开源 + 国内备案 |

### 三种典型公司策略

**策略 1：跨辖区一致化文档**（Anthropic / Google DeepMind）
- 一套 RSP / FSF 文档同时映射 EU GPAI CoP、加州 SB 53、英国 AISI 测试
- 优点：成本低；缺点：需要满足最严标准

**策略 2：辖区分层应对**（OpenAI / Mistral）
- Preparedness Framework 为基准，各辖区补充本地合规文档
- 优点：灵活；缺点：文档冗余 + 跨辖区一致性风险

**策略 3：事实合规 + 最少披露**（大多数中国公司）
- 通过 CAC 备案 + TC260-003 满足中国要求
- **不发布独立安全框架文档**
- 优点：合规成本低；缺点：国际扩张受限

### 2026 Q1 新变化

- **Anthropic RSP v3（2026-02）**：放弃 pause 承诺，分离"单方承诺"vs."行业共同义务"
- **OpenAI Preparedness v2（2025-04）**：简化为 High / Critical 两档
- **Google DeepMind FSF v3（2026-04）**：**新增 Tracked Capability Levels (TCLs)** 提前预警 +
  **新增 Harmful Manipulation CCL**
- **California SB 53 生效（2026-01-01）**：美国首部专门针对前沿 AI 的州法
- **Trump EO 14365（2025-12）**：试图抢占州 AI 法律 → 加州 / 科州拒绝

## 相关规则与公司

### 相关规则

- **🇪🇺 欧盟**：[AI Act](/rules/eu/ai-act/) 第 5 / 6 / 50 / 51 条、[GPAI Code of Practice](/rules/eu/gpai-code-of-practice/)、[Digital Omnibus Proposal](/rules/eu/digital-omnibus-proposal/)
- **🇨🇳 中国**：[生成式 AI 办法](/rules/china/generative-ai-interim-measures/) 第 3 条、[TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/)、[AI 安全治理框架 1.0/2.0](/rules/china/ai-safety-governance-framework/)、[拟人化互动服务办法](/rules/china/anthropomorphic-interaction-services/)
- **🇺🇸 美国**：[NIST AI RMF](/rules/us/nist-ai-rmf/)、[Colorado AI Act](/subnational/us/colorado-ai-act/)、[California SB 53](/subnational/us/california-sb-53-frontier-ai/)、[Texas TRAIGA](/subnational/us/texas-traiga/)、[NYC LL 144](/subnational/us/nyc-local-law-144/)

### 相关公司

参见 [公司实践](/companies/) 各家公司页的"安全框架"部分（[Anthropic](/companies/anthropic/) / [OpenAI](/companies/openai/) / [Google DeepMind](/companies/google-deepmind/) 分析最深）。

## 辖区深度页

- [🇨🇳 中国](./china/)
- [🇺🇸 美国](./us/)
- [🇪🇺 欧盟](./eu/)
