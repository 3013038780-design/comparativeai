---
title: OpenAI
description: OpenAI 公司概况、Preparedness Framework v2 深度分析、治理结构变迁（2026-06-28）
sidebar:
  order: 2
  label: OpenAI
snapshotDate: 2026-06-30
---

> **🆕 2026 Q1 重大更新**：**GPT-5.4（2026-03）** 认定为"High cyber capability"；
> **GPT-5.4-Cyber（2026-04-14）** 面向经核验安全专家；GPT-5.1 于 2026-03-11 下线。

## 公司概况

- **成立**：2015（非营利）→ 2019（Capped-Profit 混合结构）→ 2024-2025 公司重组（**向 for-profit 倾斜**）
- **总部**：San Francisco, California, USA
- **主要模型**：**GPT-5.4 系列（2026-03 最新）** / GPT-5.3 / Sora / DALL-E；o1 / o3 推理系列已并入 GPT-5 主线
- **商业模式**：ChatGPT（消费 / Plus / Team / Enterprise）、API、Azure 深度整合、Stargate 基础设施
- **估值**：2025 年底二级市场报道约 **$500B**
- **用户规模**：ChatGPT 周活超 **8 亿**（2026 Q1 披露）
- **定位**：**"AGI 商业化加速者"**（2024 后对比 2015 创办时的使命有明显漂移）

## 深度分析：Preparedness Framework v2 与行业自律的"稀释"

### 框架演进

| 版本 | 日期 | 关键特点 |
| --- | --- | --- |
| v1.0 | 2023-12 | 4 档门槛（Low/Medium/High/Critical）× 4 风险类别 |
| **v2.0** | **2025-04-15** | **简化为 2 档**（High/Critical）× 3 主要风险类别 + 观察清单 |

### v2 核心结构

**三大主要风险类别**（"tracked categories"）：
1. **生化能力**（Biological & Chemical）：降低武器开发 / 使用门槛
2. **网络安全能力**（Cybersecurity）：大规模网络攻击与漏洞利用
3. **AI 自我改进**（AI Self-improvement）：对人类控制 AI 带来新挑战

**观察清单**（"research categories"，未触发正式门槛）：
- 长期自主（Long-range Autonomy）
- 沙袋（Sandbagging，故意表现不佳）
- 自主复制与适应（Autonomous Replication and Adaptation）
- 削弱安全措施（Undermining Safeguards）
- 核与放射（Nuclear and Radiological）

**门槛阈值**：
- **High**：显著增加现有严重伤害风险路径
- **Critical**：开启**前所未有**的严重伤害风险路径

### v2 相对 v1 的"稀释"

从 v1 到 v2，门槛数从 4 档减至 2 档（删除 "Low" 和 "Medium"）。OpenAI 官方解释是"聚焦真正重要的风险"；
批评者（arxiv 2509.24394）的分析则尖锐：

> The 2025 OpenAI Preparedness Framework does not guarantee any AI risk mitigation practices.

**arxiv 论文核心批评**（2025-09 发布，经同行引用）：
1. **"Safeguard sufficiency" 的判定权完全在 OpenAI 内部**，无外部约束
2. **Safety Advisory Group** 可以根据"综合考虑"批准任何缓解措施
3. 框架的"能力—缓解"映射**允许公司在发生冲突时重新解释**
4. **无任何"必须做什么"的硬性义务**；所有义务都是"考虑"、"评估"、"必要时采取"

### GPT-5.4 的"High cyber capability"判定与响应

GPT-5.4 是 Preparedness Framework 下**首个正式认定为 High cyber capability 的模型**。
响应措施：
- **扩展网络安全栈**：部署时监控系统、可信访问控制
- **异步阻断**：对高风险请求在 ZDR（Zero Data Retention）面异步阻断
- **GPT-5.4-Cyber**：对经**人工审核的**安全研究员开放逆向 / 漏洞 / 恶意软件分析能力
- **撤销 ChatGPT 访问**：非审核用户在 ChatGPT 下不能直接用 Cyber 能力

这是**Preparedness Framework 首次真正"运转"**——但**批评**：所谓的"触发"并没有真正限制模型能力，
只是加了访问控制层。Cyber 能力本身**全部开放给审核用户**。

### 与 Anthropic RSP / Google DeepMind FSF 对比

| 维度 | OpenAI Preparedness v2 | Anthropic RSP v3 | Google DeepMind FSF v3 |
| --- | --- | --- | --- |
| 方法论 | 风险类别 × 阈值 | 能力等级 (ASL) | Critical Capability Level (CCL) |
| 门槛粒度 | 2 档（High/Critical） | 连续 ASL 升级 | CCL + TCL（Tracked） |
| 暂停承诺 | **弱**（措辞为"必要时"） | **v3 移除** | 无明确 |
| 外部审查 | Safety Advisory Group（部分外部方） | Risk Reports 外部审查 | 发布模型级 FSF 报告 |
| 学术批评 | **arxiv 2509.24394：无保证**| 放弃 pause 引批评 | TCL 门槛模糊 |

**共性**：2025-2026 三家都在**"为竞争让路"**方向上调整安全承诺。

## Model Spec：行为层自律的新形式

**Model Spec**（2024-05 首发，持续更新）是 OpenAI 独有的文档，规定**模型应如何表现**（而非模型本身有什么能力）：

- **Chain of Command**：OpenAI → Developers → Users 三级优先
- **Default behaviors**：模型应拒绝 / 不讨论 / 主动提示的默认行为
- **ICloud / 特权请求**：OpenAI 保留的覆盖权

**意义**：这是**行为规范的自律**，不同于 RSP / Preparedness 的**能力门槛自律**。
Model Spec 也成为 **GPAI Code of Practice "Transparency" 章节**的合规文档之一。

## 使用政策的分析

OpenAI **Usage Policies** 2025-10 重大更新**缩短和模糊化**：
- 删除具体违法类别（政治、医疗等）的细分禁止
- 转向**原则性表述**（"不得用于非法活动"）
- 删除部分 2024 版明确的"禁止生成"语言

**对比 Anthropic AUP**：Anthropic 维持更具体的可执行条款；OpenAI 的 2025 变化**增加执法难度**，
业界批评可能是为**面向政府合同放宽实务限制**铺路。

## 监管合规立场

### 美国

- **2023 White House Voluntary Commitments**：首批签署
- **Frontier Model Forum**：创始成员
- **加州 SB-1047**（2024）：**公开反对**（Sam Altman 公开致函 Newsom 要求否决）
- **加州 SB 53**（2025）：**立场模糊**，未公开 endorse（区别于 Anthropic）
- **EO 14179（Trump 去监管）**：**公开支持**
- **AI 行动计划 + EO 14365（州法抢占）**：**隐性支持**；多次游说反对州级强制义务
- **联邦合同**：$200M DoD 合同（2024）+ 多项 GSA 合同

### 欧盟

- **GPAI Code of Practice**：**签署但有保留**（特别对 Safety 章节）
- **Axel Springer / Financial Times / News Corp** 等欧洲媒体签署训练数据许可协议
- **Axel Springer 搜索整合** 是 GDPR 训练合规的样板项目

### 中国

- **不在中国大陆提供服务**
- 通过 Azure 国际版 / 海外合作（如新加坡、日本）
- **Sam Altman 2024 访华**后关闭 API 对中国的访问（2024-06）

### 意大利

- **2023-03 Garante 临时封禁**：全球首次对生成式 AI 的监管封禁
- **2024-12 Garante 罚款 €15M**：GDPR 违反
- 持续是欧盟 DPA 执法重心

## 公司治理的结构性问题

### 2023-11 董事会危机

Sam Altman 被解雇（2023-11）再复职（11-22）：
- 事件暴露 **for-profit vs. nonprofit** 治理的张力
- Safety-oriented 董事会成员（Helen Toner、Tasha McCauley）最终离开
- 重塑董事会偏向商业化主导

### 2024 Safety & Security Committee（SSC）

取代原**Superalignment Team**（2024 解散，核心成员离职：Ilya Sutskever、Jan Leike 转投 Anthropic）：
- SSC 由 Altman 担任主席
- **自己评估自己的模型**，缺乏独立性

### 2024-2025 公司重组

从 Capped-Profit 向**更传统 for-profit** 转型（需加州 AG 批准，进行中）：
- 非营利使命**原则上保留**但实际影响力下降
- 2025-12 重组进度被加州 AG 审视

## 公开政策文档快照

| 类型 | 文档名 | 链接 | 本站子页 |
| --- | --- | --- | --- |
| 使用政策 | Usage Policies（2025-10 最新）| [openai.com/policies/usage-policies](https://openai.com/policies/usage-policies/) | [usage-policy](./usage-policy/) |
| 模型规范 | **Model Spec** | [model-spec.openai.com](https://model-spec.openai.com/) | [model-card](./model-card/) |
| 安全框架 | **Preparedness Framework v2** (2025-04-15) | [cdn.openai.com/.../preparedness-framework-v2.pdf](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf) | [safety-framework](./safety-framework/) |
| 系统卡 | GPT-5.x / GPT-5.3-Codex System Cards | [openai.com/safety](https://openai.com/safety/) | [red-team-disclosures](./red-team-disclosures/) |
| 透明度 | Safety & Transparency Hub | [openai.com/safety](https://openai.com/safety/) | [transparency-report](./transparency-report/) |

## 行业自律立场：**"从安全第一到加速第一"的转向**

OpenAI 的自律姿态 2023-2026 有显著漂移：

| 时期 | 自律姿态 |
| --- | --- |
| 2015-2019 | "安全 AGI"使命 → 非营利 |
| 2020-2022 | "Capped Profit" → 安全研究 + 商业化 |
| 2023-2024 | **Preparedness Framework v1** + Voluntary Commitments |
| **2025-2026** | **Preparedness v2 简化**、加速商业化、**反对强制安全立法**、拥抱政府合同 |

**关键转折**：2024-05 Superalignment 团队解散，核心成员出走（Ilya Sutskever、Jan Leike）
是安全优先叙事**实质终结**的标志。
