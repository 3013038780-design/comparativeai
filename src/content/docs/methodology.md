---
title: 方法论 Methodology
description: 收录标准、法律位阶、公司归属、版本管理的规则说明
sidebar:
  order: 2
---

本页说明 AI Policy Atlas 的编辑规则。所有内容页都遵守这里写明的标准，发现不符请指出。

引用与免责另立独立页面：[引用与免责](/methodology/citation-disclaimer/)。

---

## 1. 收录标准 Inclusion Criteria {#inclusion}

**一条材料是否值得进本站，按以下优先级判断**：

1. **强相关于 AI 治理**。只涉及计算机犯罪、一般数据保护、网络安全的法规，除非对 AI 场景有专门条款，否则不单独立页（而是作为相邻议题在相关页提及）。
2. **公开可查**。原文必须有一个可长期访问的公开链接（官方站、EUR-Lex、Congress.gov 等）。非公开文件（行业内部邮件、未公开政策）不收。
3. **规范性产出**。立法文本、行政令、监管机构发布的指南、可引用的学术共识（非个人博客）。
4. **公司实践需有持久文档**。一次性发布会口头表态不收；PDF、官网长期挂载的政策/框架/报告才收。

**不收**：新闻报道（可作为背景引用）、Twitter 发言、政客个人观点（除非已成为法律提案的正式文本）、尚未公开的草案。

---

## 2. 法律位阶说明 Hard vs. Soft Law {#hard-vs-soft}

本站对"硬法"与"软法"的划分，是一个**编辑决定**，非法律定义。**学界在具体边界上有争议**（参见 Bremer 2020、Shapiro 2022 对 guidance documents 规范效力的讨论），本站的切法如下：

### 共同原则

- **硬法（Hard Law / Binding）**：由有权机关依法定程序制定、对特定主体设定**可强制执行**义务、违反有明确法律后果的规范。
- **软法（Soft Law）**：由权威机构发布、对行为有**引导或事实拘束力**、但无法作为法院判决直接依据、违反通常无直接法律后果的规范。

### 三个辖区的具体分类

#### 🇨🇳 中国

| 归类 | 包括 |
| --- | --- |
| **硬法** | 法律（全国人大及其常委会）、行政法规（国务院）、部门规章（网信办、工信部等部委） |
| **软法** | 规范性文件（"红头文件"，不具有行政处罚依据）、强制性国家标准（GB）— 部分强制性国标虽有强制力，但本站出于来源一致性仍归软法；推荐性国家标准（GB/T）；团体标准；行业自律公约 |

> **注**：强制性国标（如 GB 45438-2025）的法律地位在学界有争议——部分学者认为应视为部门规章的配套技术规范、即硬法。本站选择**统一归软法**并在具体条目中标注其强制性，是为避免跨辖区分类混乱。如果你援引本站做正式研究，请特别留意这一点。

#### 🇺🇸 美国

| 归类 | 包括 |
| --- | --- |
| **硬法** | 联邦法律（Act / Statute, 经国会通过）、联邦机构依授权制定的正式 regulation（CFR 中的条款）、州法律、地方条例、行政令（Executive Order, 但效力仅及行政分支且易被后任撤销，标注"硬法·行政令"） |
| **软法** | NIST 发布的技术框架（AI RMF 等）、OMB 备忘录（约束联邦机构内部）、监管机构指南与政策声明（FTC Policy Statement、EEOC Technical Assistance 等）、自愿承诺（Voluntary Commitments） |

> **关于行政令**：本站把 EO 归硬法（对联邦行政分支有强制力），但在页面显著位置标注"仅约束行政分支、可被下一任总统撤销"。

#### 🇪🇺 欧盟

| 归类 | 包括 |
| --- | --- |
| **硬法** | Regulation（如 AI Act、GDPR，直接适用）、Directive（须成员国转化，本站把原 Directive 和转化立法都视为硬法）、Commission 的 Implementing / Delegated Acts |
| **软法** | Commission Guidelines、AI Office 发布的指引、Codes of Practice（即便签署方可用作合规推定）、European AI Board 的意见、ENISA 等机构的技术文件 |

### 边界情况记录

遇到难以归类的条目，单独开一份记录：[法律位阶边界情况](/methodology/citation-disclaimer/#hard-soft-edge-cases)（待补，暂留链接）。当前已知的边界情况包括：

- 中国：强制性国标（本站归软法，见上注）
- 美国：NIST AI RMF（引用频率等同硬法但本质自愿，本站归软法）
- 欧盟：GPAI Code of Practice（带合规推定的软法）

---

## 3. 公司归属规则 Company Attribution {#company-attribution}

为让"公司实践"这一轴自洽，对下列常见归属模糊定下规则：

| 问题 | 本站处理 |
| --- | --- |
| OpenAI 与微软 | OpenAI 独立列，微软另列。微软援引 OpenAI 模型的产品政策归微软。 |
| Anthropic 与 Amazon/Google | Anthropic 独立列。Amazon/Google 的投资关系在 Anthropic 页注明，但不合并。 |
| Google DeepMind | 合并在一条，标注 "Google DeepMind"；Alphabet 集团层政策在 Google DeepMind 页做二级分节。 |
| Meta（Facebook / Instagram 等） | Meta 一条，涵盖 Facebook / Instagram / WhatsApp 产品层政策作为子章节。 |
| 字节跳动 / ByteDance 与 TikTok | 字节跳动一条（含抖音、豆包、火山引擎）；TikTok 独立列（面向海外监管的政策与国内不同）。 |
| 阿里 / Alibaba 与 Ant Group | 阿里一条（含通义千问、夸克），Ant Group 独立列。 |
| DeepSeek 与 High-Flyer | DeepSeek 一条，High-Flyer 作为资方在页首注记。 |
| 智谱 / 百度 / MiniMax / 月之暗面 | 各自一条。 |
| xAI 与 X Corp / Tesla | xAI 一条；X Corp（前 Twitter）平台政策不在此站（非 AI 产品主体）。 |

**判断原则**：独立发布 AI 政策 / 模型的实体为一条；未独立发布但在母公司政策内被规制的，归母公司子章节。

---

## 4. 公司实践收录范围 Corporate Practice Scope {#corporate-scope}

对每家已收录公司，本站尝试持续跟踪下列 5 类材料：

1. **使用政策 Usage / Acceptable Use Policy** — 用户可否用模型做什么
2. **模型卡 / 系统卡 Model Card / System Card** — 模型能力、训练数据、评估
3. **安全框架 Safety Framework** — 负责任扩展、准备度、前沿风险管理
4. **透明度报告 Transparency Report** — 定期披露（数据请求、内容审核等）
5. **红队与评估披露 Red-Team & Eval Disclosures** — 第三方评估、内部红队结果

每份材料页面统一结构：

```
- Snapshot date：本次归档的日期
- Original URL：原文地址
- Archived copy：本站归档 PDF 链接（存在 public/archives/）
- Summary：不超过 500 字的中文摘要
- Key terms：关键条款逐条列出（不改写，引用原文）
- Version history：历次主要修订时间轴
```

**不做评判性表述**。陈述事实、罗列差异，不写"某公司不充分 / 应当加强"之类的价值判断。

---

## 5. 更新频率与版本管理 Versioning & Updates {#versioning}

- **硬法页**：生效后每**季度**复查一次；有修订立即更新，旧版不删除，标 `superseded: true` 并保留原 URL。
- **软法页**：每**半年**复查。
- **公司实践页**：每**季度**复查；公司发布重大更新（如 Anthropic 升级 RSP）时应**一周内**更新，带 `snapshot_date`。
- **议题分析页**：**年度**修订（议题面貌稳定，不需要频繁改动）。

**版本表现在页面底部显示**（Starlight 的 `lastUpdated` 功能，基于 Git commit 时间）。重要修订同步记入 [更新日志 Updates](/updates/)。

**Git 历史**作为完整版本控制，任何一页都能通过 GitHub 看到全部修改记录。
