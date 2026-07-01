---
title: NVIDIA
description: NVIDIA 概况 —— AI 基础设施的单寡头 + 美国出口管制的中心（2026-06-28）
sidebar:
  order: 5
  label: NVIDIA
snapshotDate: 2026-06-28
---

> **📍 本站收录说明**：NVIDIA **不是 AI 模型公司**，但**是 AI 基础设施的核心供应商**——
> 所有前沿 AI 实验室都依赖其 GPU。NVIDIA 在 AI 治理中的角色是**通过供应链管控**，
> 而非通过模型安全框架。其政策行为（出口管制响应、政府游说、自研模型的开源策略）
> 对全球 AI 治理格局有深远影响。

## 公司概况

- **成立**：1993
- **总部**：Santa Clara, California, USA
- **CEO**：**Jensen Huang（黄仁勋）**
- **市值**：2025 底超 **$4 万亿**（全球第一梯队）
- **核心业务**：
  - **Data Center GPU**（AI 训练 / 推理）：H100 / H200 / **B100 / B200 / GB200（Blackwell）**
  - **CUDA 生态**：AI 软件开发事实标准
  - **Nemotron 系列**：NVIDIA 自研开源 LLM（规模较小但是生态工具）
  - **Omniverse / Isaac**：工业仿真 / 机器人 AI
  - **DGX / Project Digits**：整机 AI 系统
- **商业模式**：硬件销售 + 云服务（DGX Cloud）+ 软件订阅 + 汽车 / 机器人 / 医疗垂直

## 战略定位：**AI 革命的"卖铲人"**

### GPU 单寡头的制度后果

NVIDIA 在**数据中心 AI GPU 市场占有超 90% 份额**（2025 数据）。
这一**近似单寡头地位**产生三重制度后果：

1. **出口管制中心**：美国对华 AI 出口管制**几乎等于对 NVIDIA 出口管制**
2. **CUDA 锁定**：AI 软件生态深度依赖 CUDA → 开源替代（AMD ROCm、Intel oneAPI）进展缓慢
3. **地缘政治压力**：任何中美 AI 政策变化**直接影响 NVIDIA 营收**

### 对前沿 AI 实验室的控制力

- **Anthropic / OpenAI / Google DeepMind / xAI / Meta / Mistral** 全部主力使用 NVIDIA GPU
- **Stargate Project**（OpenAI + Microsoft + Oracle）：百亿美元级 NVIDIA 采购承诺
- **Colossus**（xAI Memphis）：10 万+ H100 单集群
- **Meta Llama 训练**：2024-2025 单次训练使用数万 H100
- 中国公司**被管制**但**仍是 NVIDIA 重要客户**（通过降级版 H20、现在的 H200 关税版）

## 深度分析：**出口管制的演变与 NVIDIA 的两面游戏**

### 出口管制时间线

| 日期 | 事件 |
| --- | --- |
| 2022-10 | BIS 首次管制 A100 / H100 对华出口 |
| 2023 | **H800 / A800**（降级版）推出，规避管制 |
| 2023-10 | BIS 进一步收紧，**H800 / A800 也被管制** |
| 2024 | NVIDIA 推出 **H20**（进一步降级）专供中国 |
| 2024-05 | H20 也被讨论管制；NVIDIA 库存大量 H20 |
| 2025-01 | **Trump EO 14179** 后出口管制政策重评 |
| 2025-10 | **B100 / B200 / GB200（Blackwell）对华禁运** |
| **2025-12-08** | **Trump 政策反转**：**H200 允许对华出口 + 25% 关税** |
| **2026-01-12** | **众议院通过 Remote Access Security Act**（369-22）：把出口管制扩展到云服务 |
| 2026-01 | **中国政府暂停** Chinese 科技公司新 H200 订单，评估政策 |

### NVIDIA 的"两面游戏"

- **对美国政府**：Jensen Huang 与 Trump 政府关系密切（2025 多次白宫拜访），支持 AI Action Plan 中的**"出口我国 AI"**愿景
- **对中国市场**：持续推出**合规降级版**（H800 → H20 → H200 关税版），**中国 2026 订单超 200 万颗**（NVIDIA 库存仅 70 万）
- **公开立场**：Huang 多次批评出口管制"让中国加速自研"—— **既表达行业担忧，也为未来放松管制铺路**

### Remote Access Security Act（2026-01）的意义

- **首次把出口管制扩展到云服务**：Chinese 公司曾通过**离岸租用**（Lambda Labs、AWS 海外等）访问 **2,300+ Blackwell GPU**
- 2026-01-12 众议院**369-22**通过（罕见跨党派一致）
- 如果参议院通过 + 总统签署 → **云服务成为出口管制对象**，NVIDIA DGX Cloud / 其他云服务商均受影响
- **对 AI 治理的深远影响**：算力作为治理杠杆进一步强化

## NVIDIA 自身的 AI 自律立场

### 不同于 AI 模型公司

NVIDIA **没有 RSP / Preparedness / FSF 类安全框架**，因为其产品是**硬件 + 通用软件**，不是最终 AI 系统。

**但 NVIDIA 有独特的 AI 治理工具**：
- **CUDA License**：使用条款中可包含出口管制合规要求
- **NIM / AI Enterprise**：企业级 AI 部署工具，包含内容过滤、模型监控等
- **Nemotron 开源模型**：NVIDIA 自研开源 LLM（Llama 衍生 + 小规模自研），是"展示工具"而非主力产品

### 政府游说立场

- **2023 White House Voluntary Commitments**：**未签**（NVIDIA 不是 AI 模型提供方）
- **Frontier Model Forum**：**未加入**
- **GPAI Code of Practice**：**不适用**（NVIDIA 不提供 GPAI 模型的主要产品线）
- **对加州 SB 53**：未公开表态
- **对 EO 14179 / 14365**：**公开支持**（AI Action Plan 中 NVIDIA 扮演关键角色）

### Project Digits 与"消费级 AI 工作站"

2025 NVIDIA 推出 **Project Digits**（个人 AI 计算机，$3,000 价位），面向个人开发者：
- 可本地运行 200B 参数模型
- 绕过云服务出口管制
- **个人硬件层面的算力普及**可能**削弱硬法算力门槛**（EU 10²⁵ FLOP / 加州 10²⁶ FLOP）的有效性

## 公开政策文档快照

| 类型 | 文档名 | 链接 | 本站子页 |
| --- | --- | --- | --- |
| 使用政策 | NVIDIA End User License Agreement（含出口管制条款）| [nvidia.com/en-us/about-nvidia/legal-info](https://www.nvidia.com/en-us/about-nvidia/legal-info/) | — |
| 模型 / 工具 | Nemotron 系列 + NeMo 框架 | [developer.nvidia.com/nemo](https://developer.nvidia.com/nemo) | — |
| 出口管制合规 | Export Compliance 页面 | [nvidia.com/en-us/about-nvidia/export-compliance](https://www.nvidia.com/en-us/about-nvidia/export-compliance/) | — |

## 监管合规位置

- **美国**：
  - **BIS 出口管制中心**：NVIDIA 是美国 AI 出口管制**最主要的执行对象**
  - **CFIUS**：不适用（NVIDIA 是美国公司）
  - **EO 14179 / AI Action Plan**：支持 + 受益
  - **DoD 合同**：有（但不是主要业务）
- **中国**：
  - **降级版 GPU 供应**（H20 → H200 关税版）持续调整
  - 与中国云厂商（阿里云、腾讯云、字节火山）大客户关系
  - **中国 2026 采购规模 200+ 万颗**（H200 为主）
- **欧盟**：
  - 通过 AWS / Azure / GCP / Mistral Compute 等渠道间接供应
  - 未直接受 AI Act 约束（GPU 不是 AI 系统）
  - 但**CE 标记**（电子产品）等一般监管适用
- **其他出口管制地域**：俄罗斯、伊朗、朝鲜、古巴等受全面出口禁令

## 在 AI 治理中的独特角色

**NVIDIA 不是 AI 模型公司，但在 AI 治理中的权重接近于主要 AI 实验室**：

1. **算力是 AI 治理的底层杠杆**：EO 14110 的 10²⁶ FLOP 阈值、加州 SB 53、EU AI Act 系统性风险 GPAI 都基于算力——**算力的分配、定价、访问控制对 AI 治理政策的有效性起决定性作用**
2. **出口管制政策的核心对象**：BIS 对华 AI 芯片管制、Remote Access Security Act 都以 NVIDIA 为主要调整对象
3. **地缘政治博弈的关键中介**：中美 AI 竞争的物质基础
4. **生态锁定**：CUDA 的事实标准地位意味着任何 AI 治理措施需要考虑其兼容性

**结论**：不理解 NVIDIA 在 AI 供应链中的角色，就无法理解当代 AI 治理的实际运行机制。

## 公司立场速览

- **AI 基础设施单寡头**，全球 AI 产业根基
- **受益于 Trump 去监管 + 加速叙事**
- **在出口管制上游走**：支持政策（Jensen Huang 公开游说）但持续推出合规降级产品
- **不走安全框架路径**：作为硬件供应商不直接参与模型层自律
