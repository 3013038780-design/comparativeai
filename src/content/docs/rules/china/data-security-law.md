---
title: 数据安全法 (DSL)
description: 中国数据安全基础法，2021-09-01 生效；"重要数据"分类分级制度与 AI 训练数据治理直接相关
ruleName: 中华人民共和国数据安全法
issuer: 全国人民代表大会常务委员会
level: national-law
binding: hard
effectiveDate: 2021-09-01
publishedDate: 2021-06-10
originalUrl: http://www.npc.gov.cn/npc/c2/c30834/202106/t20210610_311888.html
relatedTopics:
  - data-training
snapshotDate: 2026-04-21
sidebar:
  label: DSL 数据安全法 (2021)
  order: 11
---

## English Abstract

The **Data Security Law of the People's Republic of China (DSL)**, effective 2021-09-01, governs
data processing activities conducted within the PRC (and extraterritorially where national
security is implicated). It introduces (i) a tiered classification of data into *general*,
*important*, and *core* (national-security) categories, (ii) sector-specific duties for
"important data" handlers including risk assessments and export controls, and (iii) a blocking
statute (Article 36) prohibiting organizations from transferring data stored in the PRC to
foreign judicial or law-enforcement bodies without CAC approval. DSL is one of the three pillars
of China's data regime (with CSL and PIPL) and frames AI training-data compliance.

## 总览

DSL 对 AI 治理最关键的三点：

1. **分类分级制度**（第二十一条）：数据分为一般 / 重要 / 核心三级，各级义务不同。
   到 2026 年"重要数据"目录仍在各行业分头推进，具体清单是治理上的主要不确定性。
2. **重要数据义务**（第二十七、三十条）：开展处理活动应进行**风险评估**，并定期报告。
3. **数据跨境**（第三十一条）：重要数据出境走 CAC **安全评估**（与 PIPL 跨境条款并行）。

## 对 AI 的直接影响

- **训练数据清洗**：数据集若包含"重要数据"需单独评估
- **数据交易**：第三十三条规定数据交易中介需审核身份与来源，对合成数据市场有约束
- **境外判决 / 调查合作**：第三十六条"阻断条款"，境外主体在华的 AI 数据请求需过 CAC

## 核心条款

### 第二十一条 · 分类分级

> 国家建立数据分类分级保护制度，根据数据在经济社会发展中的重要程度，以及一旦遭到
> 篡改、破坏、泄露或者非法获取、非法利用，对国家安全、公共利益或者个人、组织合法权益
> 造成的危害程度，对数据实行分类分级保护。

### 第二十七、三十条 · 重要数据风险评估

重要数据处理者应当：
- 明确数据安全负责人和管理机构
- **定期开展风险评估**并向主管部门报送
- 评估内容含：数据类型、数量、处理目的、面临的风险、应对措施

### 第三十一条 · 出境

关键信息基础设施运营者在中华人民共和国境内运营中收集和产生的**重要数据**的出境安全管理，
适用《网络安全法》；**其他数据处理者**在中华人民共和国境内运营中收集和产生的重要数据的
出境安全管理办法，由国家网信部门会同国务院有关部门制定。

→ 对应《数据出境安全评估办法》(CAC 2022)。

### 第三十六条 · 阻断条款

> 非经中华人民共和国主管机关批准，境内的组织、个人不得向外国司法或者执法机构提供
> 存储于中华人民共和国境内的数据。

**影响**：跨国公司在 Discovery、境外监管调查中提供中国境内数据需 CAC 批准。

## 执法

主管：国家数据安全工作协调机制；行业分管由对应主管部门。

处罚梯度（第四十五-五十二条）：
- 一般违法：警告、责令改正、罚款（至五百万元）
- 严重违法：责令停业 / 吊销许可 + 对直接责任人罚款
- 违反**核心数据**管理制度：罚款最高至一千万元，情节严重追究刑事责任

## 与其他规则的关系

- **CSL**：前置法，DSL 是 CSL 对"数据"维度的专门扩展
- **PIPL**：并列（个人信息 vs. 数据）
- **《数据出境安全评估办法》**：第三十一条的实施细则
- **各行业重要数据目录**：分类分级的落地（至 2026 多数行业仍未定稿）

## 原文与翻译

| 语言 | 来源 | 链接 |
| --- | --- | --- |
| 中文（原文） | 全国人大 | [npc.gov.cn](http://www.npc.gov.cn/npc/c2/c30834/202106/t20210610_311888.html) |
| English | **China Law Translate** | [chinalawtranslate.com/en/data-security-law](https://www.chinalawtranslate.com/en/data-security-law/) |

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2021-06-10 | 全国人大常委会通过 |
| 2021-09-01 | 生效 |
