---
title: 互联网信息服务深度合成管理规定
description: 中国首部针对深度合成服务的专项规章，2023-01-10 生效，奠定后续标识/备案规则的基础
ruleName: 互联网信息服务深度合成管理规定
issuer: 国家互联网信息办公室 / 工业和信息化部 / 公安部（三部门联合发布）
level: departmental-rule
binding: hard
effectiveDate: 2023-01-10
publishedDate: 2022-12-11
originalUrl: https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm
relatedTopics:
  - content-labeling-provenance
  - risk-classification
snapshotDate: 2026-04-21
sidebar:
  label: 深度合成规定 (2023)
  order: 2
---

> **📑 法律位阶**：第 3 级 · 部门规章 | **发布**：网信办、工信部、公安部（**三部门联合发布**） | **生效**：2023-01-10 | **属性**：硬法

> **⚠️ 位阶提醒**：本规则是**部门规章**，由三部委联合发布。**不是**国务院行政法规。
> 罚则援引《网络安全法》等上位法律。详见 [中国规则索引](/rules/china/#法律位阶速览)。

## English Abstract

The *Provisions on the Administration of Deep Synthesis Internet Information Services*
(互联网信息服务深度合成管理规定), jointly issued by the Cyberspace Administration of
China (CAC), the Ministry of Industry and Information Technology (MIIT), and the
Ministry of Public Security (MPS) on 2022-12-11 and effective 2023-01-10, is China's
**first dedicated regulation on deep synthesis technologies** — covering face/voice
manipulation, generative text, and virtual scenes. The Provisions establish a
**tiered obligation regime** for **service providers** and **technical supporters**,
introduce **algorithm filing requirements** for services with "public opinion attributes
or social mobilization capacity," and mandate **conspicuous labeling** of synthetic
content that may confuse the public. These Provisions are the upstream rule from which
the 2025 *Labeling Measures* directly derive their labeling obligations (see
[biaozhi-banfa](/rules/china/biaozhi-banfa/)).

## 总览

《深度合成规定》（2023）是中国监管 **generative AI 之前的前置规则**，从 2019 年国新办联合发文
打击"网络音视频信息服务"深度伪造的序幕开始，历经 2022 年 1 月征求意见稿，于 2022-12 定稿，
2023-01-10 生效。

本规定的**历史意义**有三层：

1. **首次把"深度合成"作为独立监管对象**，不再分散在《网络信息内容生态治理规定》等泛法里
2. **首次要求对合成内容做"显著标识"**（第十七条）—— 但没说怎么标；此空白由 2025 年《标识办法》填补
3. **把"算法备案"作为合规的前置门槛**，为后来《生成式 AI 办法》《标识办法》都作为抓手继承

## 适用范围 Scope

- **主体**：
  - **服务提供者** (service providers)：直接提供深度合成功能的平台/应用
  - **技术支持者** (technical supporters)：为服务提供者提供深度合成技术的第三方
- **活动**：
  - 人脸/声纹等生物识别信息的编辑、合成
  - 文本、图像、音频、视频、虚拟场景的生成与拼接
  - 沉浸式拟真场景的生成
- **地域**：境内提供服务

## 核心义务

> _以下为本站整理，条款号以官方原文为准。_

### 对服务提供者

- **实名认证**：对深度合成服务使用者进行真实身份信息认证
- **显著标识**：**可能导致公众混淆或者误认的**，应当在生成内容的合理位置、区域进行**显著标识**
  （第十七条——这条是 2025《标识办法》的上位条款）
- **算法备案**：具有舆论属性或社会动员能力的服务，须按《算法推荐规定》办理备案
  （见 [algorithm-recommendation-provisions](/rules/china/algorithm-recommendation-provisions/)）
- **生物识别信息处理**：对人脸、人声等生物识别信息进行**编辑**（例如换脸、拟声）的，
  应当**提示用户**并获得**被编辑人的单独同意**
- **数据与模型安全**：训练数据的合规性、模型的安全评估、日志记录保存

### 对技术支持者

- 同样承担数据和模型安全义务
- 协助服务提供者履行显著标识义务

### 对使用者

- 不得利用深度合成服务从事法律禁止的活动

## 执法与处罚

- **主管机构**：网信办牵头，工信部（算力、通信）、公安部（治安与刑事）在各自职责内协同
- **处罚依据**：《网络安全法》《数据安全法》《个人信息保护法》《治安管理处罚法》的既有阶梯
- **违反情节严重**：涉及刑事责任

## 与其他规则的关系

- **《互联网信息服务算法推荐管理规定》(2022)**：**备案义务**通过本规定第十九条引用，
  是同一套"算法备案"基础设施
- **《生成式人工智能服务管理暂行办法》(2023)**：把生成式 AI 服务从"深度合成技术的一个子集"
  提升为**独立监管客体**，义务部分与本规定重叠但更细
- **《人工智能生成合成内容标识办法》(2025)**：本规定第十七条"应当显著标识"的**技术落地**——
  见 [biaozhi-banfa](/rules/china/biaozhi-banfa/)
- **《个人信息保护法》(2021)**：人脸 / 声纹等敏感信息处理交叉适用；本规定是 PIPL 第二十八条
  在深度合成场景下的专项实施细则

## 争议与解读

1. **"可能导致公众混淆或者误认"的判定主观性**：第十七条对**何时**需要标识的判断门槛
   是"可能混淆/误认"，实务中如何认定？完全写实的换脸算不算？讽刺类作品呢？
   后续《标识办法》用"双轨标识"的做法实质上是**把判断门槛降到零**（一律标识），
   与本规定原义存在张力。
2. **算法备案的实际门槛**：到 2024 年底，备案算法已超千个，流程看似走过场，但
   删除/变更备案的阻力极高——成为**事实上的准入许可**。
3. **跨境适用性**：境外深度合成服务境内可访问的部分，监管手段有限。
4. **技术支持者义务的现实性**：要求上游模型提供商对下游服务提供者的合规负责，
   实际执行中责任边界不清。

## 原文与翻译 Full Text & Translations

| 语言 | 来源 | 链接 |
| --- | --- | --- |
| 中文（原文） | 国家网信办 | [cac.gov.cn](https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm) |
| 中文（归档） | 本站 | [deep-synthesis-provisions-2022-12-11.html](/archives/china/deep-synthesis-provisions-2022-12-11.html) |
| English | **China Law Translate**（Jeremy Daum, Yale Paul Tsai China Center） | [chinalawtranslate.com/en/deep-synthesis](https://www.chinalawtranslate.com/en/deep-synthesis/) |
| English（征求意见稿，含分析） | Stanford DigiChina | [digichina.stanford.edu/work/...-jan-2022](https://digichina.stanford.edu/work/translation-internet-information-service-deep-synthesis-management-provisions-draft-for-comment-jan-2022/) |
| English（实务解读） | Allen & Gledhill | [allenandgledhill.com/.../22947](https://www.allenandgledhill.com/sg/publication/articles/22947/seeks-to-regulate-deep-synthesis-services-and-technology) |

## 版本历史

| 日期 | 事件 |
| --- | --- |
| 2022-01-28 | 征求意见稿发布 |
| 2022-12-11 | 正式发布 |
| 2023-01-10 | 生效 |
| 2026-04-21 | 本站首次归档 |

## 引用来源

### 一手
- 官方原文：https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm
- 三部门联合发布通告：https://www.cac.gov.cn/2022-12/11/c_1672221949318230.htm
- 答记者问：https://www.cac.gov.cn/2022-12/11/c_1672221949570926.htm

### 主要解读
- Library of Congress Global Legal Monitor：
  https://www.loc.gov/item/global-legal-monitor/2023-04-25/china-provisions-on-deep-synthesis-technology-enter-into-effect/
- 官方专家解读合集：
  https://www.cac.gov.cn/2022-12/12/c_1672221950992156.htm
- CAIDP 声明：
  https://s899a9742c3d83292.jimcontent.com/download/version/1648057926/module/8376704663/name/CAIDP-Statement-PRC-SIIO-DeepSynthesis-2802022.pdf

---

**引用本页**（生成于 2026-04-21）：
> Comparative AI. 《互联网信息服务深度合成管理规定》解读. 访问于 YYYY-MM-DD.
> https://comparativeai.org/rules/china/deep-synthesis-provisions/
