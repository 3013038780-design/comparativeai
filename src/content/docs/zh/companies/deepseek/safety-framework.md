---
title: 安全框架
description: DeepSeek "极简 + 嵌入式" 安全立场：无 RSP / Preparedness / FSF 对标的开源路径（2026-06-28）
sidebar:
  order: 3
snapshotDate: 2026-06-30
---

> **一句话定位**：DeepSeek 是全球能力位列前五的前沿实验室中**唯一没有公开结构化安全框架的公司**。
> 它没有 Anthropic RSP、OpenAI Preparedness Framework、Google DeepMind Frontier Safety Framework
> 或 Meta Frontier AI Framework 的对应物，没有签署 Frontier Model Forum、Seoul / Bletchley /
> Paris 声明、白宫 Voluntary Commitments、**也没有签署 GPAI CoP**。其"安全"几乎完全等同于**
> 中国服务侧合规（CAC 算法备案 + TC260-003）**，加上**R1 / V3.1 技术报告中的短章节**。

## 一、DeepSeek 安全框架的"缺席目录"

下表列出**全球主流前沿 AI 安全自律框架与承诺**，以及 DeepSeek 的签署 / 对标状态：

| 框架 / 承诺 | 发起 / 主导 | Anthropic | OpenAI | Google DM | Meta | **DeepSeek** |
| --- | --- | --- | --- | --- | --- | --- |
| White House Voluntary Commitments (2023) | 美国 | ✅ | ✅ | ✅ | ✅ | ❌ |
| Frontier Model Forum | 2023-07 创始四家 | ✅ 创始 | ✅ 创始 | ✅ 创始 | 加入 | ❌ |
| Bletchley Declaration (2023) | UK | ✅ | ✅ | ✅ | ✅ | ❌ |
| Seoul AI Safety Commitments (2024) | KR+UK | ✅ | ✅ | ✅ | ✅ | ❌ |
| UK / US AISI 预部署测试 MoU | UK/US AISI | ✅ | ✅ | ✅ | 部分 | ❌ |
| GPAI Code of Practice (2025) | 欧盟 | ✅ 全部三章 | ✅ | ✅ | 部分 | ❌ |
| 自家 RSP / Preparedness / FSF | 自主 | RSP v3 | Preparedness v2 | FSF v3 | FAIF | **无** |

DeepSeek 的这种"全线缺席"**并非偶然遗漏**，而是由以下结构性因素决定：

1. **幻方量化的资本独立性**：无国际投资方压力要求签署全球治理框架（对比 Anthropic 的 Google /
   Amazon 投资，OpenAI 的 Microsoft 投资）
2. **不进入欧美主要市场作为官方运营方**：服务侧 chat.deepseek.com 不在欧美直接运营（被托管商
   转售不代表 DeepSeek 签订 AUP），降低属地合规义务
3. **中国治理逻辑的内生替代**：CAC 备案 + TC260-003 + 等保 + 算法安全自评估报告，已构成**服务侧
   完整合规闭环**；企业自律文件在此制度下**边际价值低**
4. **实验室规模约束**：DeepSeek 团队规模远小于美国头部前沿实验室（海外媒体拼图估算显示量级差距
   明显；官方未确认具体人数），且**无独立 Trust & Safety 部门**；相比之下 Anthropic、OpenAI 等
   均有专职安全 / 政策团队，治理文档化能力差距显著

## 二、DeepSeek 安全信息披露的实际载体

虽然缺少结构化框架，DeepSeek **并非完全无安全披露**，但散布在三个载体：

### 载体 1：技术报告的 Safety 章节

- **V3 技术报告 §5**：包含 SafetyBench、CVALUES、TruthfulQA 等中英文安全基准结果
- **R1 技术报告 §5**：简短讨论 R1-Zero 的 language mixing、格式不稳、reward hacking 初步观察
- **V3.1 技术博客 + HuggingFace README**（2025-08）：**首次加入系统性 bias / fairness evaluation**
  跨中文 / 英文基准，讨论性别 / 地域 / 职业偏见

### 载体 2：CAC 算法备案材料

- **不公开**
- 首批 2023-10 过审；V3 / R1 / V3.1 陆续补充
- 包括"算法安全自评估报告"，格式参照 TC260-003 与 CAC 2023 指南
- 学界（张凌寒、朱悦）持续呼吁**至少摘要公开**，截至 2026-04 未实现

### 载体 3：GitHub issues / HuggingFace 讨论区

- 部分安全问题通过开源社区反馈处理
- 官方工程师在 GitHub 上回复 issue 的行为**事实上成为非正式的安全披露渠道**
- 但**无 issue 响应 SLA、无官方漏洞披露政策**（无 security.txt、无 bug bounty）

## 三、开源权重的"不可撤销性"与安全框架的前提假设崩塌

### 主流安全框架的共同前提

Anthropic RSP、OpenAI Preparedness、DeepMind FSF、Meta FAIF **全部依赖一个关键假设**：
**"公司可以选择不部署、推迟部署、或在达到风险阈值时撤回模型"**。

- Anthropic RSP v2 原版：达到阈值未达到 safeguards 则 **pause 训练或部署**
- OpenAI Preparedness：High / Critical 阈值触发 **内部审查 + 可能延迟发布**
- DeepMind FSF：Critical Capability Level 触发 **deployment gating**
- Meta FAIF：Critical 级别可"**停止开发** this particular model"

**DeepSeek 的开源策略从结构上作废这一前提**：权重一旦放到 HuggingFace，**全球已下载副本无法
回收**，"pause"、"recall"、"deployment gating" 在概念上失效。

### 学术辩论：这是 bug 还是 feature？

**开源带来不可控风险**（Bengio / Hinton / Russell 阵营）：

- **Yoshua Bengio**（2024-11 AI Safety Lectures）：开源前沿模型权重类比于"开源生物武器配方"，
  认为在能力跨越某阈值后应受法律限制
- **Geoffrey Hinton**：多次公开表达担忧，虽未专门针对 DeepSeek
- **Stuart Russell**：在 *Human Compatible* 延伸讨论中把开源视为"**对齐研究的额外负担**"

**开源实际未见灾难性滥用**（Kapoor & Narayanan / Bommasani 阵营）：

- **Kapoor & Narayanan**（Princeton, *AI Snake Oil*; 2025-03 博客）：R1 / V3 开源 12 个月以来，
  **没有可信的大规模滥用案例**；所谓"bioweapon uplift"担忧被实证研究（Peters et al. 2024）
  证明**边际效果小**
- **Rishi Bommasani（Stanford CRFM）**：开源权重使**独立安全研究**成为可能（第三方可以审计 /
  红队），这是闭源模型无法提供的治理价值
- **Elizabeth Seger et al.**（GovAI 2023 "Open-Sourcing Highly Capable Foundation Models"）：
  系统性讨论开源 / 半开源的风险-收益权衡，呼吁**按能力分级的发布协议**而非一刀切

**DeepSeek 的立场是隐含站在后一阵营**（以行动而非声明表达）。

### 责任归属争议

**Gary Marcus**（NYU / *Rebooting AI*）：开源权重使**下游滥用的法律与道德责任归属**极度模糊 ——
下游使用 R1 微调的有害模型，责任在 DeepSeek、托管商、还是微调者？Marcus 认为开源不是"解决
责任"的方法，而是"转移责任"的方法。

**张凌寒**（2024 《前沿大模型的责任法理》）：中国《生成式 AI 暂行办法》第 22 条 "提供者" 的
定义**未明确覆盖权重提供者**。DeepSeek 在此问题上**享有事实上的法律模糊保护** —— 只要不直接
向公众提供服务，权重放出的"提供行为"是否构成《暂行办法》下的服务提供，至 2026-04 **无案例
判例**。

## 四、中国治理框架的"嵌入式"替代

即便没有独立企业自律文件，DeepSeek 仍嵌在**中国 AI 治理的完整合规链**内：

### 硬法层面

- 《网络安全法》（CSL）合规
- 《数据安全法》（DSL）合规：重要数据识别、风险评估、境内存储
- 《个人信息保护法》（PIPL）合规：合法性基础、最小必要、跨境传输

### 部门规章层面

- 《互联网信息服务算法推荐管理规定》（2022-03 施行）—— 算法备案起点
- 《互联网信息服务深度合成管理规定》（2023-01 施行）—— 合成内容标识前身
- 《生成式人工智能服务管理暂行办法》（2023-08 施行）—— 第 7 条训练数据合法性、第 4 条内容安全
  总则、第 17 条安全评估与备案
- 《人工智能生成合成内容标识办法》（2025-09 施行）—— 显式 + 隐式双标识

### 技术标准层面

- **TC260-003-2024**《生成式人工智能服务安全基本要求》—— 27 项安全要求，事实强制
- 《人工智能安全治理框架》1.0 / 2.0（网信办 / TC260）—— 原则性指引

### 中国学界的批评

- **朱悦（2025）**《开源权重与国家数据安全法的紧张》：论证了**训练数据境外来源 + 权重全球分发**
  与《数据安全法》"重要数据出境"条款的潜在冲突，**DeepSeek 是最紧张的样本**
- **戴昕（北京大学）**：在《数字法治评论》（2024）指出，MIT License 的 "as is" 免责条款**与
  中国法下的产品责任法理不兼容**，开源权重的民事责任承担存在重大不确定性
- **张凌寒**：反复强调"企业自律不是监管的替代"，但同时指出中国模式下**企业自律几乎被备案完全
  替代**，导致企业文档化能力退化，形成**全球对话的不对称**

## 五、国际 China-AI 分析师视角

- **Matt Sheehan（CEIP）**：在 "China's AI Regulations and How They Get Made" 系列中指出，
  DeepSeek 的"极简自律"是 **中国监管密集所促成的企业行为**，而非企业自身选择。DeepSeek 节省的
  治理文档成本直接转化为技术研发投入，这是其**成本优势来源之一**
- **Kendra Schaefer（Trivium China）**：观察到 DeepSeek 2025-Q2 以来**开始出现"治理文档化"的
  早期迹象**（V3.1 博客增加公平性评估、HuggingFace README 增加 "known limitations" 段落），
  但**仍远未结构化**
- **Rebecca Arcesati（MERICS）**：DeepSeek 的"不签国际承诺"与阿里 Qwen / 百度 ERNIE 的保守态度
  一致，反映**中国前沿实验室集体回避国际治理论坛**的结构性选择；这与中国政府"全球 AI 治理倡议"
  (2023-10) 层面的**国家级多边主张**形成**企业层—国家层的治理错位**
- **Paul Triolo（DGA-Albright Stonebridge）**：DeepSeek 代表中国前沿 AI 产业的**"工程师文化
  主导"**，与美国前沿实验室的**"工程师 + 政策人员"混合文化**不同，后者有完整 policy 团队，
  前者几乎无

## 六、与阿里 Qwen / 百度 ERNIE / 字节豆包的安全姿态对比

| 维度 | DeepSeek | 阿里 Qwen | 百度 ERNIE | 字节豆包 |
| --- | --- | --- | --- | --- |
| 独立安全框架文件 | **无** | 博客 + 白皮书（非 RSP 式）| 《文心责任 AI 白皮书》| 有限 |
| Trust & Safety 独立团队 | **无** | 有（阿里云安全）| 有（百度安全）| 有（字节安全与风控）|
| CAC 备案状态 | 已备案 | 已备案 | 已备案 | 已备案 |
| 国际框架签署 | **零** | 零 | 零 | 零 |
| 与 AISI / Frontier Red Team 合作 | **无** | 无 | 无 | 无 |
| 参与 TC260 标准制定 | 低 | **高** | **高** | 中 |
| 公开安全研究论文 | 集中于技术报告 | 专项论文 + 博客 | 责任 AI 专栏 | 少 |

**结论**：DeepSeek 是中国前沿实验室中**安全文档密度最低**的一家，但其**技术报告的训练披露深度
最高**——这两个"最"共同构成 DeepSeek 的治理身份。

## 七、量化资本 + AI 研究双轨的结构性影响

幻方量化（High-Flyer Quant）**自有资金支持 DeepSeek**，区别于：

- **Kimi / Moonshot**：外部融资（阿里、腾讯、红杉等）
- **智谱 Zhipu**：外部融资 + 清华系
- **MiniMax**：外部融资（腾讯、阿里、高瓴等）

这一差异的**治理后果**：

- **无投资方合规 KPI 压力**：不像 Anthropic 需向 Google / Amazon 披露治理进展
- **无 IPO 准备压力**：不面临"尽调披露安全政策"的交易所要求
- **研究优先级纯粹**：梁文峰在少数公开访谈（2024-07《暗涌》、2025-02 FT）中反复强调"**我们只做
  通用人工智能研究**"，对治理文档化主动排序在后

**代价**：外部可观察的治理信号极少，**DeepSeek 对外部审计友好度低**（这与其技术报告对外部研究
友好度高形成强烈反差）。

## 八、2025–2026 Q1 观察到的安全文档化迹象

- **2025-03**：API 文档更新明确"不使用用户输入训练"条款（此前模糊）
- **2025-05**：HuggingFace README 首次加入 "intended use" 和 "out of scope use" 段落
  （内容仍简短）
- **2025-08 V3.1**：技术博客专设 "alignment & safety evaluation" 章节，包含 bias 测试
- **2025-11**：首次有 DeepSeek 工程师参加 NeurIPS 2025 的 AI Safety Workshop（以个人名义发表，
  非官方政策演讲）

这些**缓慢但单调的增量**显示：DeepSeek 的"安全文档化"正在**被全球生态推动**（HuggingFace 模板
规范、学术期刊的 Broader Impact 要求、属地监管对下游托管商施压），而非由公司主动发起。

## 九、页面结论

DeepSeek 安全框架的"缺席"不是**治理真空**，而是**治理路径选择**：

> 它选择了**"备案即合规、论文即文档、开源即透明"**的极简路径，放弃了"企业自律品牌"建设，
> 用研发投入的相对优势换取治理文档化的相对落后。这种选择在**中国语境内部**自洽（监管承担主
> 要约束），在**全球治理语境**中制造**张力与观察盲点**。

DeepSeek 是理解"**开源 + 最低自律**"模式能否持续的**关键观测点**：如果 12–24 个月内未发生
显著的大规模滥用事件，它将成为"开源权重不必配套结构化自律"立场的**最重要实证样本**；
反之，任何一次可归因的严重事件都可能**重塑全球开源 AI 治理的边界**。

## 参考

- DeepSeek-V3 Technical Report (arXiv 2412.19437) §5
- DeepSeek-R1 Technical Report (arXiv 2501.12948) §5
- Seger, E. et al. (2023). *Open-Sourcing Highly Capable Foundation Models.* GovAI
- Kapoor, S. & Narayanan, A. (2024/2025). *AI Snake Oil* & follow-up blog
- Bommasani, R. et al. (2025). *FMTI v1.1.* Stanford CRFM
- Bengio, Y. (2024). *Can We Trust Open-Weight Frontier AI?* AI Safety Lectures
- Marcus, G. (2024). *Open-Sourcing AI Shifts Liability, Doesn't Solve It.* Marcus on AI blog
- Sheehan, M. (2023-2025). *China's AI Regulations and How They Get Made.* CEIP
- Arcesati, R. (2025). *MERICS China Monitor* 特刊
- 张凌寒 (2024)《前沿大模型的责任法理》
- 朱悦 (2025)《开源权重与国家数据安全法的紧张》
- 戴昕 (2024)《开源 AI 的民事责任边界》
- 本站 [rules/china/generative-ai-interim-measures](/zh/rules/china/generative-ai-interim-measures/)
  · [rules/china/tc260-gen-ai-security-basic-requirements](/zh/rules/china/tc260-gen-ai-security-basic-requirements/)
  · [rules/china/ai-safety-governance-framework](/zh/rules/china/ai-safety-governance-framework/)
