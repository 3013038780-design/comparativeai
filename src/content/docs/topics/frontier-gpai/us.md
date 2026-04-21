---
title: 美国 — 前沿模型与 GPAI
description: 美国对前沿模型从 "EO 14110 的 10²⁶ FLOP 报告" 到 "EO 14179 撤销后的自愿承诺" 的政策反转
sidebar:
  order: 3
  label: 美国
---

## 相关 Rules

| 规则 | 与前沿模型的关系 |
| --- | --- |
| [EO 14179](/rules/us/eo-14179-removing-barriers-ai/) (2025) | **撤销**前沿模型报告义务 |
| [EO 14110](/rules/us/eo-14110-biden-ai/) (2023, 已撤销) | 曾建立 10²⁶ FLOP 报告门槛 |
| [NIST AI RMF + GenAI Profile](/rules/us/nist-ai-rmf/) (2023/2024) | 自愿性前沿模型风险框架 |

## 从强监管到自愿承诺的反转

### Biden 阶段（2023-10 至 2025-01）

**EO 14110** 是美国联邦层面首次引入"前沿双用途基础模型"概念：

- 触发门槛：**≥ 10²⁶ FLOP** 累计训练算力（生物序列专项：10²³）
- 权限：**《国防生产法》第 705 条**下的信息征集
- 义务：向商务部报告**模型能力、红队结果、安全保障措施**
- 数据中心运营者：报告 IaaS 客户训练此类模型的情况

**AI Safety Institute (AISI)** 建立，NIST 内部机构，与 Anthropic、OpenAI 等签署
**"测试与红队"自愿协议**。

### Trump 阶段（2025-01 至今）

**EO 14179** 撤销 EO 14110，**10²⁶ FLOP 报告义务不再有法律基础**。

后续动作：
- **AI Action Plan**（2025-07）：明确"去监管、加速"方向
- **AISI → CAISI**（Center for AI Standards and Innovation）：定位从"安全"转向"标准"
- 行业自愿承诺**保留**（2023 白宫承诺不因 EO 换届而作废），但缺乏强制性

## 当前（2026-04）美国前沿模型监管实际结构

### 自愿层

- **2023 White House Voluntary Commitments**（Anthropic、Google、OpenAI、Microsoft、Meta 等 8 家签署）
- **Frontier Model Forum**（行业协会，Anthropic、Google、Microsoft、OpenAI）
- **NIST AI RMF + GenAI Profile** 作为自愿技术基线
- **MLCommons AI Luminate / AILuminate** benchmark

### 半正式层

- **Responsible Scaling Policies (RSP)**（Anthropic 首创，其他公司仿效）
- **Preparedness Framework**（OpenAI）、**Frontier Safety Framework**（Google DeepMind）
- Seoul AI Summit (2024)、Paris AI Summit (2025) 的公司级承诺

### 残余联邦层

- **出口管制**：BIS 对 AI 芯片 / 模型权重的出口管制（EAR）
- **国家安全投资审查**：CFIUS 对中国相关的模型投资 / 训练资源
- **各行业监管机构**（FDA、CFPB 等）对 AI 的既有权限**不受 EO 14179 影响**

### 州法层

- 加州 SB-1047（2024 被州长否决）曾拟引入前沿模型强制安全义务
- 加州 SB-53、SB-896（2024 通过）针对 AI 灾难性风险的弱义务
- 纽约、伊利诺伊 2025-2026 多个前沿模型立法在审

## 与中国 / 欧盟的结构差异

- **中国**：前沿模型 = 大模型服务，走备案 + TC260-003，**强闸门**
- **欧盟**：GPAI 专章，10²⁵ FLOP 推定，**合规清单 + 行为守则**
- **美国**：联邦层面**基本只剩自愿承诺**；州法尝试但**无联邦 preemption**

2025 之后美国在三辖区中对前沿模型的**法律约束最弱**。

## 待完善

- [ ] Voluntary Commitments 公司级履行情况追踪
- [ ] 各公司 RSP / Preparedness Framework 条款对比
- [ ] CAISI 职能转换后的实质工作产出
- [ ] 加州、纽约、伊利诺伊州法草案对比
