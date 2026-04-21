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

## 条文对照翻译 Full Bilingual Text

> ⏳ **待作者补充**。完整条文翻译需以官方公布的中文终稿为底本，
> 本段留给你粘贴原文后由 AI 辅助起草英文译文并由你校对。
>
> 建议排版：每条条文中英左右对照，统一术语（provider / 提供者、
> explicit label / 显式标识、implicit label / 隐式标识 等）。
> 术语对照表已在 [方法论](/methodology/) 中初步建立，翻译时请引用。

### 第一条（占位）

**中文原文**：
（待补）

**English Translation**：
*(pending)*

### 第二条（占位）

**中文原文**：
（待补）

**English Translation**：
*(pending)*

_...等_

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
- 答记者问：（待补链接）
- GB 45438-2025 国家标准原文：（待补链接，通常在 TC260 网站）

### 相关研究
_（待补。建议列入：人大、清华、北大的几篇法学评论；CAIDP 等智库报告）_

---

**引用本页**（生成于 2026-04-21）：

> Comparative AI. 《人工智能生成合成内容标识办法》解读. 访问于 YYYY-MM-DD.
> https://comparativeai.org/rules/china/biaozhi-banfa/
