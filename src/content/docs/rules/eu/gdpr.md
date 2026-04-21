---
title: GDPR (Regulation 2016/679)
description: 欧盟通用数据保护条例，2018-05-25 适用；自动化决策条款和目的限制原则是 AI 训练和推理的合规底座
ruleName: Regulation (EU) 2016/679 — General Data Protection Regulation
issuer: European Parliament & Council
level: eu-regulation
binding: hard
effectiveDate: 2018-05-25
publishedDate: 2016-04-27
originalUrl: https://eur-lex.europa.eu/eli/reg/2016/679/oj
relatedTopics:
  - data-training
  - risk-classification
snapshotDate: 2026-04-21
sidebar:
  label: GDPR (2018)
  order: 2
---

## 中文摘要

《通用数据保护条例》(Regulation EU 2016/679, GDPR) 于 2016-04-27 通过，2018-05-25 适用。
虽不是 AI 专法，但在 AI 治理中承担**三项关键角色**：

1. **训练数据合法性**：个人数据作为训练语料需有合法基础（第六条）；公开可获取 ≠ 可处理
2. **自动化决策权**（第二十二条）：数据主体有权不受**完全基于自动化决策**的约束；
   对 AI 推理服务直接相关
3. **跨境**：欧盟数据跨境需通过 adequacy decision / SCC / BCR（第四十四-五十条）

GDPR 对 AI 训练数据的核心挑战：**目的限制**（purpose limitation）与 LLM 大规模网络抓取之间的张力。

## 对 AI 的直接影响

### 训练阶段

- **合法基础**（第六条）：个人数据作训练需依据同意 / 履行合同 / 合法利益等
- **目的限制**（第五条）：收集时的目的能否涵盖 "训练 AI 模型" ？数据保护机构（DPA）
  2023-2024 多起调查（CNIL 关于 ChatGPT、Garante 关于 Replika、DPC 关于 Meta LLaMA）
- **特殊类别数据**（第九条）：生物识别、健康、政治观点等需更严格基础
- **未成年人**（第八条）：默认年龄 16 岁，成员国可降至 13

### 推理 / 部署阶段

- **透明度**（第十三-十四条）：向用户告知数据处理的类别、目的、保存期限
- **访问权 / 更正权 / 删除权**（第十五-十七条）：数据主体可要求；对已嵌入模型权重的
  训练数据如何"删除"是学术圈热点
- **自动化决策**（第二十二条）：仅基于自动化的决定若对个人有法律或类似重大影响，
  数据主体有权获得人工介入、表达观点、质疑决定

### 跨境

- **Schrems II**（2020）后欧盟-美国数据框架多次重建
- 欧盟数据训练的 LLM 在境外推理 → 需评估"传输"
- **DPF**（Data Privacy Framework, 2023）是当前欧美跨境的主要机制

## 核心条款（AI 相关）

### 第五条 · 原则

六原则：合法性 / 目的限制 / 最小化 / 准确性 / 存储限制 / 完整性与保密。加上**问责性**（accountability）。

### 第六条 · 合法基础

六种基础：同意 / 合同 / 法定义务 / 切身利益 / 公共利益或官方授权 / **合法利益**（legitimate interest）。
LLM 训练常援引合法利益，需通过 LIA（Legitimate Interest Assessment）。

### 第九条 · 特殊类别

原则性禁止，除非有明确例外（明示同意、法定义务、公共卫生等）。

### 第二十二条 · 自动化决策

> 数据主体有权不受仅基于自动化处理（包括画像）对其产生法律效力或类似重大影响的决定所约束。

例外：合同必需、法律授权、明示同意。在例外情形下仍需保障"至少获得人工介入、表达观点、质疑决定"的权利。

### 第三十五条 · DPIA

"高风险处理"（含大规模画像、大规模特殊类别数据、新技术）需做**数据保护影响评估**。
AI 训练和部署几乎都触发。

### 第八十三条 · 罚则

- 一般违法：1000 万欧元或全球年营收 2%（两者取高）
- 严重违法（含第五、六、九条原则）：2000 万欧元或 **全球年营收 4%**

## 与 AI Act 的关系

**双层监管**：AI 系统处理个人数据时同时适用 AI Act 和 GDPR。

- AI Act 第二条第七款：不影响 GDPR 的适用
- AI Act 第十条（数据治理）与 GDPR 叠加而非替代
- 对监管机构：欧盟 **EDPB** 与 **AI Office** 协调
- 对企业：**双重合规文档**（DPIA + AI 风险评估）

## 典型 DPA 行动（AI 相关）

- **Garante (意大利)** vs. ChatGPT（2023-03 临时封禁；后续罚款）
- **Garante** vs. Replika（2023-02 禁令，对未成年人陪伴 AI 的合法基础）
- **CNIL (法国)** AI 行动计划 + 多轮指引
- **DPC (爱尔兰)** 对 Meta LLaMA 的训练数据调查
- **Hamburg DPA** 对 ChatGPT 训练数据的立场性解读

## 原文与翻译

| 语言 | 来源 | 链接 |
| --- | --- | --- |
| English（原文） | EUR-Lex | [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj) |
| 24 种欧盟官方语言 | EUR-Lex | 同上 |
| 中文（非官方学术译本） | _待补_ | _建议引用大陆学者译本_ |
| 条款交叉索引 | GDPR-info.eu | [gdpr-info.eu](https://gdpr-info.eu/) |

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2016-04-27 | 议会与理事会通过 |
| 2018-05-25 | 适用 |
| 2023-05 | DPF（Data Privacy Framework）建立 |
