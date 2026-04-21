---
title: 人工智能生成合成内容标识办法
description: 中国四部门联合发布的合成内容标识规则，2025-09-01 生效；配套 GB 45438-2025 强制性国家标准
ruleName: 人工智能生成合成内容标识办法
issuer: 国家互联网信息办公室 / 工业和信息化部 / 公安部 / 国家广播电视总局（四部门联合发布）
level: departmental-rule
binding: hard
effectiveDate: 2025-09-01
publishedDate: 2025-03-07
originalUrl: https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm
relatedTopics:
  - content-labeling-provenance
snapshotDate: 2026-04-21
sidebar:
  label: 标识办法 (2025)
  order: 1
---

> ⚠️ **Draft · 待作者校对**。本页由 AI 辅助起草，条文号、翻译措辞、争议解读均需与官方原文和权威研究核对后再视为权威。AI 辅助段落已标注。

## English Abstract

The *Measures for the Identification of Artificial Intelligence Generated and Synthesized Content*
(人工智能生成合成内容标识办法), jointly issued by the Cyberspace Administration of China (CAC)
and three other ministries on 2025-03-07 and effective 2025-09-01, imposes a **dual-track
labeling regime** on AI-generated content: **explicit labels** (human-readable watermarks or
text prompts) and **implicit labels** (machine-readable metadata embedded in the file).
Obligated parties include (i) generative AI service providers, (ii) platforms that host and
distribute such content, and (iii) end-users uploading synthesized content. The Measures are
operationalized by the mandatory national standard **GB 45438-2025**, which defines the
technical fields for implicit labels. Enforcement follows the penalty framework of the
Cybersecurity Law, the Data Security Law, and the Personal Information Protection Law.

## 总览

《标识办法》是中国对 AI 生成合成内容标识义务的**首个系统性部门规章**，
解决了此前《深度合成管理规定》和《生成式 AI 服务管理暂行办法》中"应当进行标识"
的原则性要求如何**落地**的问题。

三个层面的突破：

1. **从"应当标识"到"双轨标识"**：首次把**显式标识**（人眼可见）与**隐式标识**（机器可读）
   同时写入义务。前者服务于公众知情，后者服务于跨平台、跨流转环节的自动识别。
2. **从服务提供者单点义务到链路全覆盖**：义务主体从过去的"服务提供者"扩展到
   **服务提供者 + 传播平台 + 上传用户**三方。传播平台有**核验义务**，缺失标识应主动补加。
3. **技术标准前置绑定**：与 GB 45438-2025 同步生效，明确了隐式标识的字段规范
   （含服务提供者名称、内容编号、生成日期），让不同服务商的标识可互操作。

## 适用范围 Scope

- **地域**：境内提供服务及面向境内用户的境外服务（实际执法强度待观察）
- **活动**：文本、图像、音频、视频四类合成内容
- **主体**：
  - 生成式 AI 服务提供者（含大模型部署者）
  - 承载、分发用户生成内容的网络平台
  - 向平台上传合成内容的用户

## 核心义务

> _以下条款号为本站推测，请核对原文最终版；措辞以官方为准。_

### 对服务提供者

- **显式标识**：在生成内容的**显著位置**添加"AI 生成"或同等提示（文字、角标、或水印）
- **隐式标识**：在文件元数据或内容本体中写入：服务提供者名称、内容编号、生成日期等字段，
  符合 GB 45438-2025 规范
- **不得对抗**：不得故意使标识可被轻易删除、破坏

### 对传播平台

- **核验**：接收上传内容时核查是否携带合规隐式标识
- **补加**：标识缺失时主动添加"平台声明此内容可能为合成"类提示
- **不得恶意处理**：不得删除、篡改、隐匿他人合规标识

### 对上传用户

- 主动声明内容为 AI 合成
- 不得恶意去除平台或服务商打的标识

## 执法与处罚

依据：
- 《网络安全法》第六十八条（信息服务违法处罚）
- 《数据安全法》
- 《个人信息保护法》

处罚梯度（按上述既有法律）：警告 → 责令改正 → 罚款 → 责令停业 → 吊销许可。
严重情形涉及治安管理处罚或刑事责任。

主管机构：网信办牵头；工信部（算力与基础设施）、公安部（刑事）、广电总局（视听）
在各自职责内协同执法。

## 与其他规则的关系

- **《互联网信息服务深度合成管理规定》(2023)**：上位原则性规章，本《办法》细化其第十七条
  "应当进行显著标识"的落地要求
- **《生成式人工智能服务管理暂行办法》(2023)**：服务端备案与安全评估义务的姊妹规章；
  本《办法》聚焦"结果层"的标识，《暂行办法》聚焦"服务层"的合规
- **GB 45438-2025**：强制性国标，定义隐式标识字段。本站方法论将其归**软法**
  （[见原因](/methodology/#hard-vs-soft)），但标注其强制性
- **《个人信息保护法》**：合成内容涉及人脸、声音等敏感信息时，与 PIPL 第二十八条交叉适用

## 争议与解读

> _以下为本站整理的初步争议焦点，欢迎通过 Issue 指正。_

1. **境外服务适用性**：办法对"向境内用户提供服务"的境外公司如何执法？
   与 TikTok 国内版规则的对齐问题尚不清楚
2. **隐式标识的稳健性**：GB 45438 定义的隐式标识在经历截图、压缩、二次编辑后
   是否仍可识别？技术可行性学界有质疑
3. **艺术创作与讽刺豁免**：与欧盟 AI Act 第 50 条不同，本《办法》未明确豁免
   艺术和讽刺作品。实务中如何界定？
4. **平台核验责任边界**：要求平台核验每一条上传内容的隐式标识，技术成本极高，
   中小平台合规可行性有待观察

## 原文与翻译 Full Text & Translations

本站**不自产全文翻译**。中文原文以官方为准，英文译本选用学术圈公认的权威二手翻译。
如需引用条文，请回到下列一手/权威来源。

| 语言 | 来源 | 链接 |
| --- | --- | --- |
| 中文（原文） | 国家网信办 | [cac.gov.cn](https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm) |
| 中文（归档） | 本站 | _(待归档：`public/archives/china/biaozhi-banfa-2025-03-07.pdf`)_ |
| English | **China Law Translate**（Jeremy Daum, Paul Tsai China Center, Yale） | [chinalawtranslate.com/en/ai-labeling](https://www.chinalawtranslate.com/en/ai-labeling/) |
| English（结构化版） | Regulations.AI | [regulations.ai/.../MIASCXX-2025](https://regulations.ai/regulations/RAI-CN-NA-MIASCXX-2025) |
| 配套国标 | 国家标准全文公开系统 | [GB 45438-2025](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=F32EA2A561F1886CD8D606513512D547&refer=outter) |

### 在本页内浏览官方原文

<details>
<summary>点开内嵌阅读（本站归档 PDF）</summary>

<iframe
  src="/archives/china/biaozhi-banfa-2025-03-07.pdf"
  width="100%"
  height="700px"
  style="border: 1px solid var(--sl-color-hairline); border-radius: 4px; margin-top: 0.5em;"
  title="《人工智能生成合成内容标识办法》官方原文"
>
  您的浏览器不支持 PDF 内嵌预览，请直接
  <a href="/archives/china/biaozhi-banfa-2025-03-07.pdf">下载 PDF</a>。
</iframe>

_PDF 尚未归档，链接 404。待作者下载官方原文 PDF 到对应路径后此处自动可用。_

</details>

## 版本历史 Version History

| 日期 | 事件 |
| --- | --- |
| 2024-09 | 征求意见稿发布 |
| 2025-03-07 | 正式发布 |
| 2025-09-01 | 生效 |
| 2026-04-21 | 本站首次归档 |

本站归档快照：`public/archives/china/biaozhi-banfa-2025-03-07.pdf`（待补）

## 引用来源 References

### 一手来源
- 国家网信办发布原文：https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm
- GB 45438-2025《网络安全技术 人工智能生成合成内容标识方法》（强制性国标）：
  https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=F32EA2A561F1886CD8D606513512D547&refer=outter
- 答记者问：（待补链接）

### 权威英文译本
- **China Law Translate**（Jeremy Daum, Paul Tsai China Center, Yale Law School）：
  https://www.chinalawtranslate.com/en/ai-labeling/
- **Regulations.AI**（结构化版）：
  https://regulations.ai/regulations/RAI-CN-NA-MIASCXX-2025

### 主要国际解读
- Covington & Burling "Inside Privacy"：
  https://www.insideprivacy.com/international/china/china-releases-new-labeling-requirements-for-ai-generated-content/
- DGC Briefings：
  https://dgcbriefings.substack.com/p/china-finalised-measures-for-labelling
- Technology's Legal Edge (Perkins Coie)：
  https://www.technologyslegaledge.com/2025/03/china-released-new-measures-for-labelling-ai-generated-and-synthetic-content/

### 相关研究
_（待补。建议列入：人大、清华、北大的几篇法学评论；CAIDP 等智库报告；
Paul Triolo、Matt Sheehan 等国际评论者的观察）_

---

**引用本页**（生成于 2026-04-21）：

> Comparative AI. 《人工智能生成合成内容标识办法》解读. 访问于 YYYY-MM-DD.
> https://comparativeai.org/rules/china/biaozhi-banfa/
