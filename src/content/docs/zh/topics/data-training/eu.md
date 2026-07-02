---
title: 欧盟 — 数据与训练
description: 欧盟 "GDPR + AI Act 第 10 条 + 版权 TDM 例外 + 训练数据摘要" 四层框架
sidebar:
  order: 4
  label: 欧盟
---

## 相关规则

| 规则 | 与训练数据的关系 |
| --- | --- |
| [GDPR](/zh/rules/eu/gdpr/) | 个人数据合法基础、目的限制 |
| [EU AI Act](/zh/rules/eu/ai-act/) | 第 10 条数据治理 + 第 53 条训练数据摘要 |
| [GPAI Code of Practice](/zh/rules/eu/gpai-code-of-practice/) | Chapter 2 版权 + 训练数据摘要标准化 |
| DSM Copyright Directive (2019/790) | TDM 例外（第 3、4 条） |
| [DSA](/zh/rules/eu/dsa/) | VLOP 对用于训练的内容的可见性 |
| [France CNIL AI](/zh/subnational/eu/france-cnil-ai/) | GDPR × AI 训练数据合规指引（12+ 份） |

## 四层框架

### 1. GDPR：个人数据基础

- **合法基础**（第 6 条）：同意 / 合同 / 法律义务 / **合法利益**（常用）
- **特殊类别**（第 9 条）：生物识别、健康、政治观点 — 更严格
- **目的限制**（第 5 条）：收集目的能否涵盖"训练 AI 模型"？持续争议
- **透明度**（第 13-14 条）：向数据主体告知
- **删除权 / 被遗忘权**（第 17 条）：已嵌入模型权重后如何"删除"？

**DPA 行动**：
- **Garante (IT)** vs. ChatGPT（2023-03 封禁 / 罚款）
- **CNIL (FR)** AI 行动计划（多份指引）
- **DPC (IE)** vs. Meta LLaMA
- **Hamburg DPA** 关于"权重嵌入是否构成个人数据处理"的立场

### 2. AI Act 第 10 条：数据治理

高风险 AI 系统的训练 / 验证 / 测试数据：
- **相关、充分代表性、无错误、完整**
- 考虑预期用途的地理、行为、功能特征
- **偏见检测与缓解**
- **特殊类别数据**：为消除偏见可处理，但需匹配 GDPR 例外

第 10 条**与 GDPR 并行**，不替代。企业需两套文档。

### 3. DSM TDM 例外（Directive 2019/790）

**第 3 条**：科研机构为科研目的的 TDM 不可被排除（研究例外）

**第 4 条**：**商业 TDM** 可由版权人通过**机器可读方式 opt-out**排除
- "Reservation of rights" 的机器可读形式是争议焦点
- robots.txt、ai.txt、TDMRep 标准都是候选

**AI Act 第 53 条**引用 DSM 第 4 条：GPAI 提供者**必须遵守**版权人的 opt-out。

### 4. AI Act 第 53 条：训练数据摘要

所有 GPAI 提供者：
- 发布**训练数据"足够详细"的摘要**
- 模板由 **AI Office** 于 2024-07 发布
- 含：主要数据来源类别（互联网 / 许可 / 用户生成 / 合成等）、语言、大致规模
- **不要求列出每个数据集**

这是**全球首个强制训练数据披露**要求。

## 特殊问题

### 1. 公开可获取 = 可训练？

CNIL、Hamburg DPA、EDPB 2024-12 意见：
- "公开可获取" 不等于 "合法使用"
- 合法利益路径需通过三步测试（LIA）
- 特殊类别数据（第 9 条）原则上不可仅因公开而处理

### 2. 合法利益与网络抓取

EDPB 2024-12 关于 ChatGPT 等模型合法利益的意见：
- 合法利益**可以**作为基础，但需严格 LIA
- 数据主体的反对（第 21 条）有权要求删除或停止使用

### 3. 版权 opt-out 的机器可读性

当前实务：
- 部分媒体公司通过 **robots.txt** / **ai.txt** 发布 opt-out
- 大型出版商通过**许可协议**（OpenAI × Axel Springer, Financial Times, News Corp 等）
- **2025 RSL (Robots Exclusion Standard for LLMs)** 标准发展中

### 4. 训练后的"删除"

- GDPR 第 17 条的"被遗忘权"对已训练模型的技术难题
- 机器遗忘 (machine unlearning) 研究与法律期望的落差
- **Hamburg DPA** 2024 立场：模型权重不构成"个人数据"（有争议）

## 与中国 / 美国的对比

| 维度 | EU | 中国 | 美国 |
| --- | --- | --- | --- |
| 综合隐私法 | GDPR | PIPL | 无（州法拼图） |
| AI 专项数据条款 | AI Act 第 10 条 | 生成式 AI 办法第七条 | 无 |
| 训练数据摘要强制公开 | **是** | 无 | 无 |
| 版权 TDM 例外 | **是，可 opt-out** | 无明确 | Fair Use 抗辩 |
| 儿童数据 | GDPR 第 8 条 | PIPL 第三十一条 | COPPA |
| 生物特征 | GDPR 第 9 条 | PIPL 第二十八条 | Illinois BIPA 等州法 |

EU 是三辖区中对训练数据治理**最体系化**的。
