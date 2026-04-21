---
title: 网络安全法 (CSL)
description: 中国网络安全基础法，2017-06-01 生效；关键信息基础设施 (CII) 和网络运营者义务是所有 AI 服务的合规起点
ruleName: 中华人民共和国网络安全法
issuer: 全国人民代表大会常务委员会
level: national-law
binding: hard
effectiveDate: 2017-06-01
publishedDate: 2016-11-07
originalUrl: http://www.npc.gov.cn/npc/c2/c30834/201611/t20161107_207389.html
relatedTopics:
  - risk-classification
  - data-training
snapshotDate: 2026-04-21
sidebar:
  label: CSL 网络安全法 (2017)
  order: 12
---

## English Abstract

The **Cybersecurity Law (CSL)**, effective 2017-06-01, is the foundational statute for China's
cyber and data governance. It introduces (i) real-name registration, (ii) MLPS 2.0
(Multi-Level Protection Scheme) tiering for network operators, (iii) stringent duties for
**Critical Information Infrastructure (CII) operators**, including data localization and
security review for procurement of network products, and (iv) the penalty framework that most
subsequent AI-specific rules (Deep Synthesis, Generative AI Interim Measures, Labeling
Measures) cite as their enforcement basis.

## 总览

CSL 在 AI 治理中的角色：**不是 AI 专法，但几乎所有 AI 专项规章的"罚则"都回到 CSL 第六十八条**。

关键制度：

1. **MLPS 2.0 等级保护**：所有网络运营者按 1-5 级分级，义务递增
2. **CII 运营者**：能源、金融、交通、公共通信、政务等领域的关键信息基础设施，
   面向 CII 提供 AI 服务需过**网络安全审查**
3. **数据本地化**：CII 运营者在境内收集的个人信息和重要数据**原则上境内存储**
4. **网络信息内容治理**：第四十七条要求网络运营者对违法信息履行处置和报告义务

## 对 AI 的直接影响

- **服务备案**：CSL 建立的运营者备案体系 → 生成式 AI 办法第十七条的算法备案也依此路径
- **网络安全审查**：大模型服务若接入金融、能源等 CII 场景 → 触发 2023 修订的《网络安全审查办法》
- **违法内容处置**：第四十七条的"发现 → 处置 → 报告"链条是深度合成 / 生成式 AI 违法内容义务的通用范式
- **罚则联动**：第六十四-六十八条是中国 AI 部门规章默认援引的处罚依据

## 核心条款（择要）

### 第二十一条 · MLPS 等级保护

> 国家实行网络安全等级保护制度。网络运营者应当按照网络安全等级保护制度的要求，
> 履行下列安全保护义务...

→ GB/T 22239-2019《信息安全技术 网络安全等级保护基本要求》是落地标准。

### 第三十一、三十七条 · CII 与本地化

> 在中华人民共和国境内运营中收集和产生的**个人信息和重要数据**应当在境内存储。
> 因业务需要，确需向境外提供的，应当按照国家网信部门会同国务院有关部门制定的办法进行安全评估。

### 第四十七条 · 违法信息处置

> 网络运营者应当加强对其用户发布的信息的管理，发现法律、行政法规禁止发布或者传输的信息的，
> 应当立即停止传输该信息，采取消除等处置措施，防止信息扩散，保存有关记录，并向有关主管部门报告。

### 第六十八条 · 信息服务处罚

AI 部门规章援引的核心罚则：

- 警告、没收违法所得
- **罚款十万元以上一百万元以下**
- 直接负责的主管人员和其他直接责任人员一万元以上十万元以下罚款
- 严重情形：责令停业整顿、关闭网站、吊销许可证

## 执法

主管：国家网信部门牵头；公安、工信、市场监管、行业主管部门在职责内协同。

CII 认定：由行业主管部门会同网信、公安部门组织识别，认定结果通知运营者。
**目录不公开**（认定是"告知式"）。

## 与其他规则的关系

- **DSL**：数据维度的专门法，2021 生效后承接 CSL 的数据部分
- **PIPL**：个人信息维度的专门法
- **《网络安全审查办法》(2023 修订)**：第三十五条的实施细则
- **《关键信息基础设施安全保护条例》(2021)**：CII 条款的实施细则
- **所有 AI 部门规章**：默认援引 CSL 罚则

## 原文与翻译

| 语言 | 来源 | 链接 |
| --- | --- | --- |
| 中文（原文） | 全国人大 | [npc.gov.cn](http://www.npc.gov.cn/npc/c2/c30834/201611/t20161107_207389.html) |
| English | **China Law Translate** | [chinalawtranslate.com/en/cybersecurity-law](https://www.chinalawtranslate.com/en/cybersecurity-law/) |
| English（官方英文版） | Stanford DigiChina | [digichina.stanford.edu](https://digichina.stanford.edu/) |

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2016-11-07 | 全国人大常委会通过 |
| 2017-06-01 | 生效 |
