---
title: 美国 — 前沿模型与 GPAI
description: 美国对前沿模型从 "EO 14110 的 10²⁶ FLOP 报告" 到 "EO 14179 撤销后的自愿承诺" 的政策反转
sidebar:
  order: 3
  label: 美国
---

## 相关规则

| 规则 | 与前沿模型的关系 |
| --- | --- |
| [EO 14409](/zh/rules/us/eo-14409-frontier-ai-cybersecurity/) (2026-06) | **自愿**机密网络能力评测 + 最长 30 天联邦预发布访问 |
| [EO 14179](/zh/rules/us/eo-14179-removing-barriers-ai/) (2025-01) | **撤销**前沿模型报告义务 |
| [EO 14110](/zh/rules/us/eo-14110-biden-ai/) (2023, 已撤销) | 曾建立 10²⁶ FLOP 报告门槛 |
| [Trump AI Action Plan](/zh/rules/us/trump-ai-action-plan/) (2025-07) | 25 页战略 + 3 道 EOs（数据中心等） |
| [EO 14365](/zh/rules/us/eo-14365-national-ai-framework/) (2025-12) | 抢占州级前沿 AI 立法 |
| [OMB M-25-21/22](/zh/rules/us/omb-m-25-21-22-federal-ai-use/) (2025-04) | 联邦 AI 使用与采购 |
| [NIST AI RMF + GenAI Profile](/zh/rules/us/nist-ai-rmf/) (2023/2024) | 自愿性前沿模型风险框架 |
| [**California SB 53**](/zh/subnational/us/california-sb-53-frontier-ai/) (2026-01 生效) | **美国首部前沿 AI 州法**，10²⁶ FLOP 阈值 |
| [Texas TRAIGA](/zh/subnational/us/texas-traiga/) (2026-01 生效) | 禁止有害用途（不聚焦前沿） |

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

## 当前（截至 2026-06-28）美国前沿模型监管实际结构

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

- **EO 14409**：机密网络能力评测与自愿联邦预发布接口；明确不产生模型许可或事前审批
- **出口管制**：BIS 对 AI 芯片 / 模型权重的出口管制（EAR）
- **国家安全投资审查**：CFIUS 对中国相关的模型投资 / 训练资源
- **各行业监管机构**（FDA、CFPB 等）对 AI 的既有权限**不受 EO 14179 影响**

### 州法层（2026-04 重要变化）

**2025-2026 三部综合性州 AI 法生效**，其中 SB 53 是**全美首部专门针对前沿 AI 的法律**：

- [**California SB 53**](/zh/subnational/us/california-sb-53-frontier-ai/) (2026-01-01) —
  Transparency in Frontier AI Act，**10²⁶ FLOP 阈值**（与 Biden EO 14110 同阈值）
  - 大型前沿开发者（营收 ≥ $500M）须公布 AI 框架、发布透明度报告、报告关键安全事件
  - 罚款 $1M/violation
- [**Texas TRAIGA**](/zh/subnational/us/texas-traiga/) (2026-01-01) — 聚焦禁止有害用途，不直接规制前沿
- [**Colorado AI Act**](/zh/subnational/us/colorado-ai-act/) (2026-06-30) — 高风险 AI 反歧视

**2025-12 EO 14365 威胁**：Trump 政府明确目标挑战州级 AI 法，SB 53 是首要对象之一。
法律界预期 2026-Q1/Q2 有联邦诉讼。但行政令**不能独立抢占州法**，各州 AG 均表态继续执法。

## 与中国 / 欧盟的结构差异

- **中国**：前沿模型 = 大模型服务，走备案 + TC260-003，**强闸门**
- **欧盟**：GPAI 专章，10²⁵ FLOP 推定，**合规清单 + 行为守则**（[GPAI CoP](/zh/rules/eu/gpai-code-of-practice/) 2025-07 定稿）
- **美国**：联邦层由去监管与 EO 14409 的狭义自愿国家安全接口共同构成；**州法层首次设前沿 AI 专法（SB 53）**；
  联邦 / 州冲突是 2026 主线

**算力阈值对比**：EU 10²⁵ FLOP < US 加州 10²⁶ FLOP。加州阈值**严格 10 倍**，
导致 SB 53 比 EU GPAI "系统性风险"条款覆盖更窄。
