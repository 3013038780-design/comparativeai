---
title: 安全框架
description: OpenAI Preparedness Framework v1 → v2 全景、学术批评（arxiv 2509.24394）、Safety Advisory Group 结构
sidebar:
  order: 3
snapshotDate: 2026-06-28
---

> **快照**：基于 [Preparedness Framework v2.0 (2025-04-15)](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf)、
> 2025-2026 博客更新与 [Safety & Security Committee](https://openai.com/index/establishing-a-safety-and-security-committee/) 披露；
> 结合 **GPT-5.4 首次触发 High cyber（2026-03）** 的实际运转数据。

## 一、Preparedness Framework 是什么

Preparedness Framework 是 OpenAI **自 2023-12 起**发布的**内部风险管理文档**，旨在：

- 定义**前沿能力阈值**（何种能力被视为"前沿风险"）
- 映射**缓解措施**（一旦触发，需采取哪些部署或安全行动）
- 建立**决策程序**（谁来判定、谁来签字）

它**不是 Usage Policy**（用户行为约束）、**不是 Model Spec**（模型行为规范），而是**公司自身训练与部署决策的自律档**——
与 Anthropic **RSP** 同为"能力门槛型自律"的两大代表。

## 二、版本演进

| 版本 | 日期 | 核心结构 | 主要变化 |
| --- | --- | --- | --- |
| **v1.0** | **2023-12-18** | 4 档（Low / Medium / High / Critical）× 4 类别 | 首发；响应 2023-07 白宫 Voluntary Commitments |
| v1.1 更新 | 2024-05、2024-09 等多次增补 | 同上 | GPT-4o、o1 发布时对评估程序的细化 |
| **v2.0** | **2025-04-15** | **2 档（High / Critical）× 3 tracked + 5 watched** | **结构性重写**（详见 §三）|
| v2.1 增补 | 2025-10 | 同 v2.0 | 新增 Sora 2 评估程序 |
| **v2.2 增补** | **2026-03** | 同 v2.0 | **首次触发**：GPT-5.4 "High cyber" 判定 |

## 三、v2 架构详解

### 三类 "Tracked Categories"（正式追踪）

1. **Biological & Chemical（生化能力）**
   - High 阈值：对**有相关学科基础**的行为者，模型提供"meaningful uplift"实施大规模生物/化学伤害的能力
   - Critical 阈值：对**无相关基础**的行为者，模型能独立指导实施
2. **Cybersecurity（网络安全能力）**
   - High 阈值：对**有基础**的网络操作者显著提升攻击成功率
   - Critical 阈值：能**独立**发现并利用关键基础设施漏洞
3. **AI Self-improvement（AI 自我改进）**
   - High 阈值：能**独立执行**当代 AI 研究工作流的实质性部分
   - Critical 阈值：能**显著加速**前沿 AI 研究，威胁人类对 AI 发展的控制

### 五类 "Watched Categories"（观察，未正式触发）

- Long-Range Autonomy（长期自主）
- Sandbagging（故意表现不佳）
- Autonomous Replication & Adaptation（自主复制）
- Undermining Safeguards（削弱安全措施）
- Nuclear & Radiological（核与放射）—— **在 v1 中是 tracked，v2 降为 watched**

### 阈值判定与响应

| 阈值 | 官方描述 | 响应 |
| --- | --- | --- |
| **High** | 显著增加现有严重伤害风险路径 | 部署限制 + Safety Advisory Group 审批 |
| **Critical** | 开启前所未有的严重伤害风险路径 | 暂停部署直至独立安全证明 |

## 四、v1 → v2 的"稀释"：关键删减

| 项目 | v1 | v2 |
| --- | --- | --- |
| 阈值档数 | 4（Low / Medium / High / Critical）| **2（High / Critical）** |
| 风险类别数 | 4（+ Persuasion）| 3 tracked + 5 watched |
| Persuasion 类别 | **Tracked**（Medium 触发可定向操纵）| **降级**（并入 Model Spec 行为侧）|
| Nuclear & Radiological | Tracked | **降为 Watched** |
| Pause 承诺 | "如触发 Critical 需暂停部署" | **保留但弱化**（"综合考虑后"）|
| 外部审查条件 | 明确提及 | 松散（"Safety Advisory Group 可纳入外部顾问"）|

**官方叙事**（[openai.com/safety/preparedness](https://openai.com/safety/)）：

- "聚焦真正高风险的类别"
- "降低 Low/Medium 的合规负担以不拖慢普通迭代"
- "Persuasion 已被 Model Spec 和用户层政策更好覆盖"

## 五、学术批评：arxiv 2509.24394 与"不保证任何实践"

2025-09 **arxiv 2509.24394** 《Does OpenAI's Preparedness Framework Make Binding Safety Commitments?》
（作者含 GovAI 与 SaferAI 研究员）的核心结论：

> The 2025 OpenAI Preparedness Framework does not guarantee any AI risk mitigation practices.

### 论文的四层论证

1. **"Safeguard sufficiency" 的判定权完全内部**
   - 框架中反复出现的"**sufficient safeguards**"表述**从未被外部化为可核查标准**
   - Safety Advisory Group 的成员名单未完整公开
2. **"综合考虑"条款允许事后重新解释**
   - 文本中的 "weighing considerations including capability, deployment scope, ..." 让任何缓解决策都可被合法化
3. **"能力—缓解"映射不是硬绑定**
   - 达到 High 不自动触发特定措施；文本使用 "may include" 而非 "shall"
4. **全文无"shall not deploy" 类硬禁止**
   - 与 Anthropic RSP v2 原版的 pause commitment 形成对照；v2 **连这个都没有**

### 其他学术与政策批评

- **Zvi Mowshowitz**（*Don't Worry About the Vase*）系列文章：逐版本拆解 v1 vs. v2 用词变化；
  典型论点是 v2 更接近营销文档而非实际风险框架
- **Stuart Russell**（UC Berkeley）在 2025 年多次公开访谈中把 Preparedness v2 与 RSP v3 并列为
  行业自律的系统性退却
- **FLI**（Future of Life Institute）*AI Safety Index* 在 v2 发布后对 OpenAI Preparedness 的评分有显著下调
- **Markus Anderljung**（GovAI Director）2025 年多次评论指出：
  缺乏硬约束文本的自愿承诺在竞争压力下难以维持

## 六、v2 首次运转：GPT-5.4 "High cyber" 案例（2026-03）

2026-03 GPT-5.4 发布时，OpenAI 官方 blog 《Deploying GPT-5.4 under Preparedness Framework v2》宣布：

> Following Preparedness evaluations, **GPT-5.4 has been assessed at High capability in the Cybersecurity category**.

响应措施：

1. **部署分层**
   - ChatGPT 面：**阻断**逆向工程、漏洞利用请求
   - API：**Trusted Access Program**（TAP），面向经人工核验的安全研究员开放
   - **GPT-5.4-Cyber**（2026-04-14）：独立 endpoint，完整 cyber 能力
2. **异步监控**
   - ZDR（Zero Data Retention）客户：异步阻断 + 事后审计
3. **Trusted Access 核验机制**
   - 身份验证 + 雇主证明 + 用途声明 + NDA
   - 核验通过者规模数量级尚未官方披露（仅有非正式报道估算）

### 批评：阈值触发 ≠ 限制能力

- **Apollo Research** 2026-04 博客：TAP 的核验强度**低于** Anthropic Claude Opus 4.7 "safeguarded deployment" 的对应机制
- **SaferAI**：High 触发后的缓解**主要是访问控制层**，模型本身的 uplift 未被削减
- **UK CAISI**（原 AISI）：在 pre-deployment 测试中已提出**更严格的部署建议**，但 OpenAI 选择了较弱版本

## 七、治理结构：Safety Advisory Group 与 Safety & Security Committee

### Safety Advisory Group（SAG）

- **组成**：内部安全团队负责人 + 少量外部顾问（具体名单**非完整公开**）
- **职能**：对 Preparedness 评估结论与部署决策**出具建议**
- **权限边界**：**非否决权**——最终决策仍在 CEO 与 Safety & Security Committee

### Safety & Security Committee（SSC，2024-05 设立）

| 项目 | 细节 |
| --- | --- |
| 设立背景 | **Superalignment 团队解散**（2024-05）、Jan Leike / Sutskever 离职后成立 |
| 首任主席 | **Sam Altman**（CEO 兼任）|
| 2024-09 主席轮换 | **Zico Kolter**（CMU）接任主席；Altman 转为"成员" |
| 成员 | Kolter、Bret Taylor（董事长）、Adam D'Angelo、Nicole Seligman |
| 权限 | 审查安全事项、向董事会报告 |
| 争议 | 成员**同时**是董事会成员 → 独立性存疑 |

**结构性批评**（Helen Toner 2024 TED talk、Tim O'Reilly、Gary Marcus）：

- SSC "自评自"问题：与其说是独立监督，不如说是**公司内部的安全汇报机制**
- 2023-11 董事会事件后，**有外部独立判断能力的成员（Toner、McCauley）已离开**
- 相比之下，**Anthropic Long-Term Benefit Trust** 至少在正式权限上有"罢免董事"的路径；OpenAI 2024-2025 重组**削弱**了非营利主体对商业主体的制衡

## 八、与其他前沿实验室的对比

| 维度 | OpenAI Preparedness v2 | Anthropic RSP v3 | Google DeepMind FSF v3 | xAI |
| --- | --- | --- | --- | --- |
| 发布日 | 2025-04-15 | 2026-02-24 | 2026-04 | 无 |
| 架构 | 风险类别 × 2 档阈值 | ASL 能力等级 | CCL + TCL | 无 |
| Pause 承诺 | **弱**（"必要时"）| **已撤销** | 无明确 | — |
| 外部审查 | SAG（含外部）| Risk Reports 外部审查 | FSF 报告发布 | — |
| 首次触发案例 | **GPT-5.4 High cyber（2026-03）** | Claude Opus 4 ASL-3 生化（2025-05）| Gemini 3 Pro TCL 操纵（2025-11）| — |
| 学术批评核心 | arxiv 2509.24394 | 放弃 pause | TCL 门槛模糊 | 无框架 |

### 共同模式：2025-2026 的"松动"

三家都经历了不同方向的**承诺退却**：

- **Anthropic**：撤销 pause，转向"行业共同义务"
- **OpenAI**：合并阈值，降低 Nuclear/Persuasion 优先级
- **DeepMind**：2024 删除 Gemini "military prohibition"，2025 扩大 CCL 但 pause 承诺缺失

**结构性启示**：自律框架在**无硬法托底**时，**竞争压力会让最弱承诺成为共同底线**（race-to-the-bottom 动力学）——
这是 Mowshowitz、Anderljung、Toner 等一致的观察，也是加州 SB 53、EU AI Act 第 55 条、**欲求立法的存在理由**。

## 九、与硬法的衔接

| 法规 | 衔接条款 | Preparedness 的角色 |
| --- | --- | --- |
| **EU AI Act** | Art. 55 systemic risk mitigation | 作为"state-of-the-art"缓解实践的合规引证 |
| **EU GPAI Code of Practice** | Safety & Security 章节 | OpenAI **部分保留**（未全部接受 Chapter 义务）|
| **加州 SB 53** | §22757.11 frontier developer protocol | Preparedness 可作为"written protocol" |
| **White House Voluntary Commitments (2023-07)** | 能力评估承诺 | Preparedness 是合规证明 |
| **Seoul Commitments (2024-05)** | Frontier AI safety commitments | 16 家公司共同框架，Preparedness 作为 OpenAI 的对应文件 |

## 十、产业实务：Preparedness 如何影响部署决策

以下是从公开信息归纳的**实际决策链条**：

1. **模型预训练完成** → 内部 eval + 基础能力基准
2. **Preparedness Team 评估** → 对 3 tracked + 5 watched 类别打分
3. **外部红队（METR / Apollo / UK CAISI / US CAISI）独立评估** → 提交报告
4. **SAG 审议** → 写建议书
5. **SSC 审批 + CEO 签字** → 决定部署范围
6. **发布 System Card + Preparedness 表格** → 对外披露结论
7. **持续监控** → 部署后再评估（如 GPT-5.4 → 增补 v2.2）

**观察到的 gating 案例**：

- **o1 发布（2024-12）**：Apollo 披露的"scheming"结论导致部署方式调整（禁用某些 tool use、增加 CoT 监控）
- **Sora 2（2025-09）**：Safety Systems 在影响力操作、儿童安全方面的评估导致数周级发布推迟
- **GPT-5.4（2026-03）**：因 High cyber 触发，部署从默认 ChatGPT 全量**延后数周**转 TAP 模式

这些说明 Preparedness **确实影响了日程**，但**未影响最终是否发布**——与 Anthropic 对 Opus 4 **延后 ASL-3 激活**、
DeepMind **Gemini 3 对 CBRN 类 rollout 分阶段**的对比中，OpenAI 的 Preparedness 在"停止"上依然是最弱的。

## 十一、延伸阅读

- **一手**：[Preparedness Framework v2 PDF](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf)、
  [SSC 公告](https://openai.com/index/establishing-a-safety-and-security-committee/)、
  [Preparedness blog index](https://openai.com/safety/)
- **学术**：**arxiv 2509.24394**；Anderljung et al., *Frontier AI Regulation* (2023, arxiv 2307.03718)；
  Hendrycks et al., *An Overview of Catastrophic AI Risks* (2023, arxiv 2306.12001)
- **批评**：Zvi Mowshowitz, *OpenAI Delenda Est* 系列；Helen Toner, TED 2024；
  FLI AI Safety Index 2025；*TIME*, "Inside OpenAI's Safety Shake-up" (2024-06)
- **本站交叉**：[OpenAI 概况](./)、[红队与评估披露](./red-team-disclosures/)、[Anthropic 安全框架](/zh/companies/anthropic/safety-framework/)、
  [方法论](/zh/methodology/)
