---
title: 字节跳动 ByteDance
description: 字节跳动公司概况与公开政策文档快照（2026-06-28）
sidebar:
  order: 4
  label: 字节跳动 ByteDance
snapshotDate: 2026-06-28
---

## 公司概况

- **成立**：2012
- **总部**：北京
- **主要 AI 产品**：
  - **豆包 (Doubao)**：消费者 AI 助手
  - **豆包大模型 / Seed 系列**：基础模型
  - **扣子 (Coze)**：AI 应用 / Agent 平台
  - **Cici / 海外 Doubao**：海外用户界面（部分功能）
  - **TikTok / CapCut / Lemon8** 等应用中内嵌的 AI 能力
- **商业模式**：消费者应用（广告 + 订阅）、火山引擎（ToB 云服务）
- **定位**：中国本土**第一阵营**的大模型公司；出海意愿强但受限（特别是美国）

## 公开政策文档快照

| 类型 | 文档名 | 链接 | 本站子页 |
| --- | --- | --- | --- |
| 使用政策 | 豆包 / 扣子《用户协议》及内容规范 | [doubao.com](https://www.doubao.com/) / [coze.cn](https://www.coze.cn/) | [usage-policy](./usage-policy/) |
| 模型卡 | 豆包大模型系列技术报告 | [volcengine.com](https://www.volcengine.com/product/doubao) | [model-card](./model-card/) |
| 安全框架 | 内部风控 + TC260-003 合规（公开文档有限） | _公开文档有限_ | [safety-framework](./safety-framework/) |
| 透明度报告 | CAC 备案（多批次） | [cac.gov.cn](https://www.cac.gov.cn/) | [transparency-report](./transparency-report/) |
| 红队披露 | 公开红队披露较少；技术论文 arXiv | [arxiv.org](https://arxiv.org/) | [red-team-disclosures](./red-team-disclosures/) |

## 监管合规位置

- **中国**：
  - [《生成式 AI 办法》](/zh/rules/china/generative-ai-interim-measures/) 算法备案（豆包多产品已备案）
  - [TC260-003-2024](/zh/rules/china/tc260-gen-ai-security-basic-requirements/) 合规
  - [《深度合成规定》](/zh/rules/china/deep-synthesis-provisions/)、[《算法推荐规定》](/zh/rules/china/algorithm-recommendation-provisions/) 多项合规
- **美国**：**CFIUS / TikTok 立法持续压力**（2024 通过《Protecting Americans from
  Foreign Adversary Controlled Applications Act》强制剥离或禁用）；豆包 / Doubao 北美消费者未上线
- **欧盟**：TikTok 已是 DSA VLOP；2024 欧委会对 TikTok Lite 发起 DSA 正式程序
- **新加坡 / 印尼 / 巴西**：持续推进本地化

## 深度分析：**嵌入式自律**——中国公司的独特自律模式

### 中国 AI 公司自律的制度背景

与美国 / 欧盟公司不同，中国头部 AI 公司的"自律"并非**独立于国家监管**的企业自主选择，而是
**嵌入在国家监管框架内**执行。ByteDance 是这一模式的典型：

- **没有独立的"Responsible Scaling Policy"类文档**
- **安全框架 = CAC 备案材料 + TC260-003 合规清单**
- 公司对外披露的"治理承诺"本质是**对监管机构的合规声明**
- 公司内部的"安全委员会"更多对应**党委指导**下的跨部门合规协调

### ByteDance 的合规架构（推测，基于公开材料 + 行业惯例）

**外部合规层**：
- **CAC 算法备案**：豆包、扣子、火山方舟、多个细分产品单独备案（每季度 CAC 公示）
- **TC260-003-2024 合规**：通过备案审核的事实要求
- **《深度合成规定》**：换脸 / 变声产品的强化备案
- **专项执法响应**："清朗"系列专项行动中的快速整改

**内部治理层**：
- **党委**：算法价值观、生成式内容审核、重大技术路线选择（参见 [Olivia 毕业论文](/zh/about/) 引用的三级协同机制）
- **内容安全团队**：规模约 **数千人**（公开估计）的人工审核员
- **法务 / 合规**：对接 CAC、工信部、公安部多头监管
- **海外合规团队**：TikTok 在美国（$1.5B+ 内容审核投入）、欧盟（DSA VLOP 合规）、新加坡等独立团队

### ByteDance 的合规复杂度：**全球监管的撕裂**

ByteDance 是**唯一同时面对中美欧三大监管体系严格审视**的 AI 公司：

| 辖区 | 主要压力 |
| --- | --- |
| **中国** | CAC / 工信部 / 公安部多头合规；TC260-003；清朗专项 |
| **美国** | **PAFACA 2024 强制剥离 / 禁用**法律；CFIUS 审查；多州对 TikTok 政府设备禁令 |
| **欧盟** | TikTok **VLOP**（DSA 下最严义务）；2024 TikTok Lite 被正式程序；意大利 Garante 调查 |
| **印尼 / 巴西 / 印度** | 持续监管压力 |

**结果**：ByteDance 的合规成本在全球 AI 公司中**最高**，但**自律立场文件**几乎无法产生——
任何一份文件在一个辖区的承诺可能在另一个辖区被使用作对抗证据。

### 对 AI 生态的影响

- **中国市场的事实头部**：豆包 2026 Q1 用户数超 **4 亿**（日活），国内生成式 AI 消费者市场份额 #1
- **火山引擎**：豆包大模型 API + 文生图 / 视频 API，中国 TOP 3 企业 AI 云
- **出海受限**：Doubao 海外版 Cici 主要在东南亚 / 中东 / 日本；**不在美国、欧盟主要国家主动运营**
- **开源参与**：Seed-Thinking、Seed-Coder 等部分技术开源（远少于 DeepSeek、Qwen）

## 公司立场速览

- **官方自律立场文件稀少**：与美国 / 欧盟公司显著对比
- **合规靠实际行动**：备案、人工审核投入、快速响应监管
- **地缘政治最大阻力**：TikTok 是公司全球化的关键战场；PAFACA 压力持续
- **研究开源较克制**：相比 Qwen、DeepSeek 开源量小，保留商业核心
