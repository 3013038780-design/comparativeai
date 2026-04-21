---
title: 个人信息保护法 (PIPL)
description: 中国的个人信息保护基础法，2021-11-01 生效；自动化决策与敏感个人信息条款构成 AI 治理的合规底座
ruleName: 中华人民共和国个人信息保护法
issuer: 全国人民代表大会常务委员会
level: national-law
binding: hard
effectiveDate: 2021-11-01
publishedDate: 2021-08-20
originalUrl: http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html
relatedTopics:
  - data-training
  - risk-classification
snapshotDate: 2026-04-21
sidebar:
  label: PIPL 个人信息保护法 (2021)
  order: 10
---

> **📑 法律位阶**：第 1 级 · 法律 | **制定机关**：全国人民代表大会**常务委员会** | **生效**：2021-11-01 | **属性**：硬法

> **⚠️ 位阶提醒**：本规则是**全国人大常委会制定的法律**（第 1 级），位阶最高。
> 下位的各 AI 部门规章（生成式 AI 办法、深度合成规定等）在处理个人信息时须回到本法。
> 详见 [中国规则索引](/rules/china/#法律位阶速览)。

## English Abstract

The **Personal Information Protection Law of the People's Republic of China (PIPL)** is China's
umbrella data-protection statute, effective 2021-11-01. It establishes (i) consent as the default
lawful basis, (ii) a "separate consent" regime for sensitive personal information including
biometrics and minors' data, (iii) algorithm-transparency and opt-out rights for automated
decision-making (Article 24), and (iv) extraterritorial reach over services targeting PRC
residents. PIPL sits on top of the Cybersecurity Law (CSL) and Data Security Law (DSL), and
serves as the operative floor for all subsequent AI-specific rules (Deep Synthesis, Generative
AI Interim Measures, Labeling Measures).

## 总览

PIPL 在 AI 治理中的作用**不是 AI 专法**，但几乎所有 AI 合规问题最终都绕不开它：

- **训练数据**：抓取 / 授权 / 用户生成内容的个人信息处理 → PIPL
- **人脸 / 声纹**：敏感个人信息 → PIPL 第二十八-三十二条的单独同意、影响评估
- **算法推荐 / 生成内容**：自动化决策 → PIPL 第二十四条
- **跨境**：出境安全评估、标准合同 → PIPL 第三十八-四十三条
- **儿童**：不满十四周岁未成年人按敏感信息处理 → 第三十一条

## 与 AI 治理最相关的条款

### 第二十四条 · 自动化决策

> 个人信息处理者利用个人信息进行自动化决策，应当保证决策的透明度和结果公平、公正，
> 不得对个人在交易价格等交易条件上实行不合理的差别待遇。
>
> 通过自动化决策方式向个人进行信息推送、商业营销，应当同时提供不针对其个人特征的选项，
> 或者向个人提供便捷的拒绝方式。
>
> 通过自动化决策方式作出对个人权益有重大影响的决定，个人有权要求个人信息处理者予以说明，
> 并有权拒绝个人信息处理者仅通过自动化决策的方式作出决定。

**意义**：这是中国版 GDPR 第二十二条。**算法推荐规定**第十七条对"用户关闭推荐"的要求，
实质是本条的落地。

### 第二十八条 · 敏感个人信息

定义为"一旦泄露或非法使用，容易导致自然人的人格尊严受到侵害或者人身、财产安全受到危害的
个人信息"，明确列举**生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹**等，
以及不满十四周岁未成年人的个人信息。

处理前需：**单独同意** + **特定目的和充分必要性** + **个人信息保护影响评估**。

### 第三十一条 · 未成年人

不满十四周岁未成年人的个人信息按敏感信息处理，要求取得其父母或监护人同意。
AI 生成合成内容、未成年人模式、面向未成年人的服务均直接援引此条。

### 第三十八-四十三条 · 跨境

PIPL 规定三条合法跨境路径：
1. 通过**国家网信部门组织的安全评估**（大规模、关键基础设施运营者）
2. **个人信息保护认证**
3. **标准合同**（SCCs）

AI 模型训练若使用境外算力 / 数据源，需评估是否触发跨境规则。

## 执法

主管：国家网信办牵头，公安、市场监管在各自职责内协同。

处罚梯度（第六十六条）：
- 一般违法：警告、责令改正、没收违法所得、罚款（至一百万元）
- 情节严重：罚款**最高一亿元或上一年度营业额的百分之五**，责令停业，吊销营业执照
- 直接责任人：一万到一百万元罚款，从业禁令

**典型案例**：2022 滴滴案（80.26 亿元，依 CSL+DSL+PIPL 综合处罚）是 PIPL 生效后最大单笔罚单。

## 与其他规则的关系

- **CSL / DSL**：并列上位法。执法常三法叠加。
- **深度合成规定 / 生成式 AI 办法**：面人脸声纹合成 → 强制回到 PIPL 第二十八条
- **算法推荐规定**：自动化决策条款是 PIPL 第二十四条的细化
- **儿童个人信息网络保护规定**（2019）+ **未成年人网络保护条例**（2024）：
  与 PIPL 第三十一条交叉
- **数据出境安全评估办法**（CAC 2022）：PIPL 第四十条的实施细则

## 原文与翻译

| 语言 | 来源 | 链接 |
| --- | --- | --- |
| 中文（原文） | 全国人大 | [npc.gov.cn](http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html) |
| English | **China Law Translate** | [chinalawtranslate.com/en/personal-information-protection-law](https://www.chinalawtranslate.com/en/personal-information-protection-law/) |
| English（官方英文版） | NPC Observer | [npcobserver.com/.../personal-information-protection-law](https://npcobserver.com/legislation/personal-information-protection-law/) |

## 引用来源

- 全国人大常委会发布原文：http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html
- 国家网信办 PIPL 专栏：https://www.cac.gov.cn/
- Stanford DigiChina 深度解读系列：https://digichina.stanford.edu/
- Covington & Burling Inside Privacy China 专栏
- CAIDP PIPL Report

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2020-10 | 一审稿 |
| 2021-08-20 | 三审通过 |
| 2021-11-01 | 生效 |
