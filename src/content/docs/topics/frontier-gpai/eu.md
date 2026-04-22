---
title: 欧盟 — 前沿模型与 GPAI
description: EU AI Act 第 51-56 条 GPAI 专章 + 行为守则（Code of Practice）
sidebar:
  order: 4
  label: 欧盟
---

## 相关规则

| 规则 | 条款 | 与 GPAI 的关系 |
| --- | --- | --- |
| [EU AI Act](/rules/eu/ai-act/) | 第 51-56 条、附件 XI/XII/XIII | GPAI 专章 |
| [**GPAI Code of Practice**](/rules/eu/gpai-code-of-practice/) | AI Act 第 56 条 | **2025-07-10 定稿**，签署 = 合规推定 |
| [Digital Omnibus Proposal](/rules/eu/digital-omnibus-proposal/) | — | 2025-11 提议推迟高风险条款至 2027-12（不影响 GPAI）|

## GPAI 专章结构（第 51-56 条）

### 两档分类（第 51 条）

**所有 GPAI 模型**（不论开源 / 闭源）：
- 定义：通用性、大规模自监督训练、能执行多样下游任务的模型

**具有系统性风险的 GPAI 模型**：
- 自动推定：**累计训练算力 ≥ 10²⁵ FLOP**
- 委员会指定：基于参数量、数据集大小、用户数量、能力基准
- 运营者可申请重新评估

### 所有 GPAI 的义务（第 53 条）

1. **技术文档**（附件 XI）：训练过程、评估结果、能力描述
2. **下游文档**（附件 XII）：给下游 Provider 用
3. **版权合规**：建立政策确保遵守欧盟版权指令 TDM 例外
4. **公开训练数据摘要**：AI Office 提供模板（2024-07 发布）

### 系统性风险 GPAI 额外义务（第 55 条）

- **模型评估**：含对抗性测试、红队
- **系统性风险评估和缓解**
- **严重事件报告**（第 56 条）→ AI Office
- **网络安全**：模型 + 物理基础设施

## Code of Practice（行为守则）

详见独立 Rule 页 [GPAI Code of Practice](/rules/eu/gpai-code-of-practice/)。要点：

- **2025-07-10** 定稿（约 1,000 参与者多轮起草）
- 2025-08-01 欧委会 + AI Board 通过 **Adequacy Decisions**
- **三章结构**：Transparency、Copyright、Safety and Security
- **签署 = 合规推定**（第 56 条第 8 款）
- **已签署**（截至 2026-04）：Anthropic、Google DeepMind、Microsoft、Mistral（完整）；
  OpenAI（保留意见）；Meta（版权章异议）；xAI（安全章异议）
- **未签署**：DeepSeek、ByteDance、智谱 等中国厂商

## 开源豁免（第 53 条第 2 款）

开源 GPAI 可豁免部分义务（技术文档、下游文档）：
- 必须"free and open-source license"
- 权重、模型架构、使用方式**公开**
- 训练数据摘要仍需发布
- **系统性风险 GPAI 即使开源也不豁免**

影响：Meta LLaMA 等开源系列受益但有限；DeepSeek 开源模型若进入欧盟市场同样适用。

## 10²⁵ FLOP 推定：实务

截至 2026-04 达到此阈值的已知模型（推测）：
- GPT-4 / 4o / o1 / o3 系列（OpenAI）
- Claude 3/4 系列（Anthropic）
- Gemini 1.5/2 Ultra（Google DeepMind）
- 部分国家级研发模型（法国 Mistral Large 2, 可能达到）

"推定"是**可反驳**的：提供者可主张具体模型不具备系统性风险能力，但需提交证据给 AI Office。

## 时间线

| 日期 | 事件 |
| --- | --- |
| 2024-08-01 | AI Act 生效 |
| 2025-07-10 | Code of Practice 定稿 |
| 2025-08-01 | 欧委会 + AI Board 通过 Adequacy Decisions；签署者列表公开 |
| 2025-08-02 | **第 51-56 条 GPAI 义务适用** |
| 2026-08-02 | 其余条款适用 |
| 2027-08-02 | 特定嵌入式高风险 |

## 与中国 / 美国的对比

- **可预测性**：EU 最高（明确算力门槛 + 文档清单 + 行为守则）
- **约束力**：EU 最强（硬法 + 罚则全球年营收 3%）
- **国际影响力**：**Brussels Effect** 运作中。模型提供者为进入欧盟市场已准备的文档，
  事实上成为面向其他辖区的披露基线

## 待完善

- [ ] Code of Practice 逐章解读
- [ ] 训练数据摘要模板（AI Office 2024-07 发布）的字段表
- [ ] 各公司对 CoP 签署 / 异议的公开记录
- [ ] 系统性风险评估方法论的业界样本
