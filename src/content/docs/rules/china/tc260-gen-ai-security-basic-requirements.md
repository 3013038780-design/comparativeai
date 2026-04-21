---
title: 生成式人工智能服务安全基本要求 (TC260)
description: TC260-003-2024 技术规范，生成式 AI 备案和安全评估的事实标准；涵盖训练数据、模型安全、措施安全
ruleName: 生成式人工智能服务安全基本要求 (TC260-003-2024)
issuer: 全国网络安全标准化技术委员会 (TC260)
level: technical-standard
binding: soft
effectiveDate: 2024-02-29
publishedDate: 2024-02-29
originalUrl: https://www.tc260.org.cn/
relatedTopics:
  - frontier-gpai
  - data-training
  - risk-classification
snapshotDate: 2026-04-21
sidebar:
  label: TC260 生成式 AI 安全基本要求 (2024)
  order: 30
---

## English Abstract

**TC260-003-2024 "Basic Security Requirements for Generative AI Services"**, published by
China's National Information Security Standardization Technical Committee (TC260) on
2024-02-29, is a **de facto mandatory** technical specification for generative AI service
providers seeking algorithmic filing (算法备案) and security assessment (安全评估) under the
2023 Generative AI Interim Measures. It specifies thresholds for (i) training-data corpus
legality (< 5% illegal content), (ii) source diversity, (iii) annotator training and test
banks, (iv) 31 categories of risk, (v) model-level security testing with a ≥90% pass rate on
a 2000-item safety evaluation set. Although technically a voluntary standard, CAC uses it as
the benchmark for filing approval.

## 总览

TC260-003-2024 是中国生成式 AI **事实合规基线**：

- 《生成式 AI 办法》要求"安全评估"和"算法备案"，但**办法本身没有技术标准**
- TC260-003 填补了这一空白，成为 CAC 审核备案时的打分依据
- 法律上是"推荐性"（soft），但通不过就拿不到备案 → **事实硬法**

这就是本站方法论[硬法/软法划分](/methodology/#hard-vs-soft)中最典型的"软法有硬约束"案例。

## 核心技术要求（摘要）

### 语料（训练数据）安全

- **来源合法性**：每个语料来源需记录，含版权 / 授权 / 用户同意链路
- **语料库抽样**：从任意语料来源随机抽样 4000 条，**含非法不良信息的比例不得超过 5%**，
  否则整个来源"不可用"
- **来源多样性**：中文语料来源不少于特定数量；类型（网页 / 图书 / 论文）需覆盖

### 标注安全

- **标注人员**：需培训、考核
- **标注规则**：含功能性标注和安全性标注
- **抽检**：标注结果的准确性需抽检

### 模型安全

- **31 类安全风险**：政治、暴力恐怖、民族歧视、色情、低俗、未成年人保护、隐私、知识产权等
- **评估集**：构建 ≥ 2000 条的人工测试集覆盖上述 31 类
- **通过率要求**：生成内容的安全性通过率 **≥ 90%**；拒答率控制在合理区间（不宜过高亦不宜过低）
- **关键词库**：需建立和维护敏感词 / 关键词黑名单

### 措施安全

- 用户注册、实名制
- 违法内容发现与处置机制
- 投诉举报响应
- 安全事件应急预案

## 事实地位

CAC 审核算法备案时以 TC260-003 为标尺。**未通过的服务不能上线面向公众**。
对大模型公司而言，TC260-003 的门槛事实上决定：

- 哪些训练数据源可用（含中英文分别要求）
- 模型红队测试的覆盖范围和严格度
- 哪些 prompt 需要拒答

## 演进

TC260 系列仍在扩展：

- TC260-003-2024（本页）：总体要求
- TC260-004：训练数据相关专项（筹备中）
- TC260-005+：行业 / 场景相关专项（筹备中）

版本更新历史和下一版草案需关注 [tc260.org.cn](https://www.tc260.org.cn/) 的公告。

## 与其他规则的关系

- **生成式 AI 办法**（2023）：上位部门规章，TC260-003 是其技术细则
- **算法推荐规定 / 深度合成规定**：备案均使用同一体系，但 TC260-003 主要聚焦生成式
- **GB 45438-2025 标识国标**：并行国标，聚焦"标识"技术，本 TC260 聚焦"内容安全"
- **PIPL / DSL**：TC260-003 的"语料合法性"以这两部法律为底

## 原文与翻译

| 语言 | 来源 | 链接 |
| --- | --- | --- |
| 中文（原文） | TC260 | https://www.tc260.org.cn/ |
| English | Stanford DigiChina 译本 | https://digichina.stanford.edu/ |
| English 分析 | Matt Sheehan (Carnegie) "China's AI Regulations and How They Get Made" | https://carnegieendowment.org/ |

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2023-10 | 征求意见稿 |
| 2024-02-29 | 正式发布 |
