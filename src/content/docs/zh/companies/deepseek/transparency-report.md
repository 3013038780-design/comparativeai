---
title: 透明度报告
description: DeepSeek 的"技术透明"替代"企业透明度"模式及其全球治理争议（2026-06-28）
sidebar:
  order: 4
snapshotDate: 2026-06-28
---

> **一句话定位**：DeepSeek 没有西方意义上的 **Transparency Report**（季度政府请求、内容下架
> 统计、执法响应等），但在**技术维度**（训练数据构成、算力、训练方法、评测结果）的透明度**高
> 于任何闭源实验室**。这种**"技术透明高、治理透明低"**的不对称结构，是中国前沿实验室对全球
> 透明度规范的隐性重构——它挑战了 **Ranking Digital Rights、Foundation Model Transparency
> Index、GPAI CoP Transparency Chapter** 等西方主流框架的前提假设。

## 一、"Transparency Report" 的西方规范演进

理解 DeepSeek 的缺席首先要明确西方 Transparency Report 的**规范来源**：

- **起源**：互联网平台（Google 2010 首份、Twitter 2012、Facebook 2013、Apple、Microsoft）
  的政府请求统计
- **演进**：从**政府数据请求**扩展到**内容下架请求、版权投诉、用户数据、反恐披露、DMA/DSA
  合规数据、选举干预响应**
- **AI 实验室继承**：
  - Anthropic [Transparency Hub](https://www.anthropic.com/transparency)：半年度政府请求、
    法律程序、风险报告、经济指数（Economic Index）等
  - OpenAI 透明度披露：安全评估、Preparedness 报告、政府请求
  - Google DeepMind：与 Alphabet 整合的透明度报告
- **基础模型新规范**：**Bommasani et al. Foundation Model Transparency Index (FMTI)**—100 项
  指标跨 Upstream / Model / Downstream 三层

DeepSeek **在所有这些规范下得分都低**——但 FMTI 数据维度得分**高于多数闭源厂商**。

## 二、DeepSeek 透明度披露的实际载体

### 技术透明度（高密度）

| 维度 | DeepSeek 披露程度 | 典型载体 |
| --- | --- | --- |
| 架构细节 | **完整公开** | V2/V3/R1 技术报告 |
| 训练数据领域分布 | **半量化公开** | V3 §2.2 (中英文 + 代码占比)|
| 训练算力 (GPU-hours) | **完整公开** | V3: 2.788M H800 GPU-hours |
| 训练方法 (RL/SFT) | **完整公开** | R1 §2–4 |
| 超参数 | **主要公开** | 论文附录 |
| 评测结果 | **全面公开** | 30+ 基准 |
| tokenizer / 词表 | **完整公开** | HuggingFace |
| 权重 | **完整公开 (MIT)** | HuggingFace / GitHub |
| 训练基础设施创新 | **完整公开** | DualPipe / FP8 / MLA 等 |

### 企业治理透明度（低密度 / 缺失）

| 维度 | DeepSeek 披露程度 | 备注 |
| --- | --- | --- |
| 员工数 / 组织架构 | **未公开** | 海外媒体估算规模远小于美国头部实验室 |
| 融资 / 股权结构 | **未公开** | 已知幻方自有资金，但具体比例不披露 |
| 政府数据请求统计 | **无** | 无此类报告 |
| 内容下架 / 拒答统计 | **无** | chat.deepseek.com 拒答行为完全不公开统计 |
| 执法响应机制 | **无** | 无 LEA request policy 页面 |
| 版权投诉处理 | **无** | HuggingFace 平台有通用机制 |
| 漏洞披露政策 | **无** | 无 security.txt / bug bounty |
| 外部审计报告 | **无** | 未签署 AISI / 外部审查协议 |
| CAC 备案材料 | **不公开** | 备案已完成，材料保密 |
| 高管薪酬 / 治理结构 | **未公开** | 非上市公司无披露义务 |
| 供应链 / 数据供应商 | **未公开** | 训练数据供应商未列 |
| 劳工实践（标注、RLHF）| **未公开** | 无 annotator 工作条件披露 |

## 三、Foundation Model Transparency Index 中的 DeepSeek

### 结构与历史得分

Bommasani et al. FMTI（v1.0 2023-10、v1.1 2024-05、v1.2 2025-Q3 更新纳入 DeepSeek）包含
**100 项指标**，分布在三层：

- **Upstream**（数据、劳工、算力、方法论、模型基础）
- **Model**（基础、能力、风险、限制、缓解、分发）
- **Downstream**（分发、使用政策、模型行为、下游影响、反馈、政策应用）

### DeepSeek 的得分结构（2025 FMTI 更新）

| 维度 | 大致得分 | 横向比较 |
| --- | --- | --- |
| Methods（方法）| **高**（> 70%）| 超过多数闭源厂商 |
| Data（数据）| **中高**（~55%）| 与 Meta Llama 可比 |
| Compute（算力）| **高**（> 70%）| 高于 OpenAI / Anthropic |
| Capabilities（能力） | **高** | 完整评测披露 |
| Risks（风险） | **中低**（~30%）| 低于 Anthropic / OpenAI |
| Mitigations（缓解）| **低**（< 25%）| 最薄弱维度 |
| Distribution | **高** | 完全开源 |
| Usage Policy | **低**（< 30%）| 文本单薄 |
| Labor（劳工）| **极低**（< 10%）| 几乎无披露 |
| Downstream Impact | **低** | 无追踪机制 |
| Feedback & Redress | **低** | 无标准化渠道 |

**总体趋势**：DeepSeek 在 FMTI 的**上游 + 模型层**得分高，**下游 + 影响层**得分低。
这与其企业策略（研究导向、无治理运营团队）完全一致。

## 四、"技术透明"作为"企业透明"替代的学术讨论

### 西方起点 vs. 中国起点

**Marietje Schaake（Stanford / 前欧洲议员）**在 2024 *The Tech Coup* 中指出：西方科技公司的
透明度报告**起源于"内容治理纠纷"**——政府要求平台披露数据请求、平台反向披露以维护公众信任。
这是**"下游治理的透明度"**。

**Matt Sheehan** 反向观察：中国前沿 AI 公司的透明度**起源于学术出版**——ML 论文范式要求披露
方法和结果。这是**"上游能力的透明度"**。

两种透明度**不是同一概念的不同程度，而是不同对象的不同披露**。把"企业透明度报告"作为评价框架
**系统性低估了中国前沿实验室的透明度**（技术维度）并**系统性高估了美国前沿实验室的透明度**
（上游维度）。

### Ben Thompson 的 "information asymmetry" 批评

**Ben Thompson（Stratechery）**在 2025-01 "DeepSeek FAQ" 中提出的核心观察是：
DeepSeek 对技术社区的信息输出是**超量的**（论文、代码、权重），但对商业社区和监管社区的输出
近乎为零——这并非简单的"透明度不够"，而是一种**selective transparency**，披露集中在最能在全球
技术社区建立声誉的部分，隐藏的则是最涉及商业与监管互动的部分。

Thompson 这一"**选择性透明**"批评对 DeepSeek 特别适用，但他同时承认：**美国前沿实验室的选择
性透明也严重**，只是方向相反（高政策透明、低技术透明）。

### Ranking Digital Rights 的评价盲点

**Ranking Digital Rights (RDR) Corporate Accountability Index** 覆盖电信、互联网、科技平台
的人权相关透明度。RDR 框架**未涵盖 DeepSeek**（因为 DeepSeek 不是平台运营者也不是电信商），
这形成了一个**治理评价盲点**：RDR 2024 报告覆盖了 Meta、Google、Microsoft、阿里巴巴、腾讯、
百度，但**没有单独评价 DeepSeek / OpenAI / Anthropic** 这类"前沿模型提供者"。

> **Marietje Schaake、Jonathan Stray** 等呼吁 RDR 扩展到前沿 AI 实验室，截至 2026-04 尚未
> 实现。DeepSeek 在这一空白中**既不被评价也不被约束**。

## 五、FMTI 2025 更新中的 DeepSeek 特写

2025-Q3 FMTI v1.2（Stanford CRFM）专章讨论 DeepSeek，核心观察可概括为：

- R1 的发布促使整个透明度格局的重新评估——它提供了对训练方法论异常详细的信息，
  但对组织治理的披露几乎为零
- DeepSeek 因此成为 FMTI 中**方法透明度最高的前沿模型之一**
- 但 FMTI 明确提醒：该评估仅反映技术披露密度，不应被解读为综合的负责任 AI 实践评分

FMTI 的这一措辞反映了研究者**对"技术透明 = 整体透明"误读的警惕**。

## 六、中国学界的透明度讨论

### 张凌寒（中国政法大学）

在《算法透明度的层次理论》（2023）中区分：

1. **规则透明**：算法原则和政策的公开
2. **过程透明**：决策链路的可追溯
3. **能力透明**：算法能力和限制的披露
4. **影响透明**：下游影响的监测

**DeepSeek 在第 3 层（能力透明）做得极好，在第 1、2、4 层几乎无披露**。张凌寒进一步指出：
中国监管框架的透明度诉求**主要锁定在第 1、2 层**（通过备案）而非第 3 层，这与 DeepSeek 的
披露偏向形成**非匹配**——DeepSeek 对公众披露的是监管不特别要求的层次，对监管要求的层次则
封闭在备案中。

### 朱悦（中国社会科学院）

在 2025 《前沿 AI 的"双重不透明"》中指出：

- **对公众不透明**（企业治理）
- **对监管不透明**（备案材料不对公众公开）

DeepSeek 的**技术透明**是**第三空间**：既非企业治理透明、也非监管披露透明，而是**面向学术 +
开源社区的透明**。朱悦认为这是**一种"规范未覆盖的透明"**——它产生了价值，但不能替代传统意义
上的透明度问责机制。

## 七、产业第一手：可观察的间接信号

在缺乏官方披露的情况下，研究者通过**间接信号**推断 DeepSeek 的运营状况：

### 幻方量化与 DeepSeek 的组织边界

- **AI Index 2025 Q4**（Stanford HAI）尝试梳理幻方量化与 DeepSeek 的法人关系，但**未能获得
  一手材料**，只能依靠媒体报道与工商信息拼图
- 目前公开信息：**梁文峰同时是幻方量化和 DeepSeek 的核心领导**，两者员工有重叠，DeepSeek
  独立法人地位可能于 2024 末至 2025 初完成确立（具体日期不确定）
- **幻方量化管理规模**据公开报道为千亿人民币量级，**自有资金**足以支持 DeepSeek 的 H800
  算力建设（具体 AUM 数字以公司披露为准）

### 海外托管者流量作为"用户规模代理"

- **Together AI**、**Lepton AI**、**Fireworks AI** 等托管商部分披露 DeepSeek 模型调用量
- 根据 OpenRouter、Artificial Analysis 等第三方流量统计，2025 年上半年 DeepSeek 模型
  （V3 + R1 + 蒸馏变体）在**全球开源推理流量中占据显著份额**
- 这些数据**与 DeepSeek 官方无关**，但客观上反映了模型的全球使用密度

### HuggingFace 活动统计

- **模型下载量**：V2 至 V3.1 系列权重累计下载处于**千万量级**，R1 系列贡献主要份额
- **Community 讨论**：R1 仓库 discussion / likes 数量在开源 LLM 仓库中**领先**
- **Fine-tuned 衍生模型**：HuggingFace 上基于 DeepSeek 权重的衍生模型**数以千计**

（具体数字以 HuggingFace 仓库实时统计为准）

## 八、2025–2026 Q1 的监管透明度压力

### 意大利 Garante（2025 年初）

首个欧盟 DPA 对 DeepSeek 的临时措施。Garante 的决定核心理由是 DeepSeek 未对其
数据处理活动提供充分的 GDPR 合规说明——这是**治理透明度缺失**的首次属地监管代价
（具体日期以 Garante 官方公告为准）。

### 多国政府设备禁用（2025 上半年）

- 2025 年初：韩国、台湾地区、澳大利亚相继公告政府设备禁用
- 2025 年上半年：美国国防部、商务部、NASA、FCC 等联邦机构相继实施禁用
- 2025 年上半年：美国多个州（含德州、弗吉尼亚等）层面跟进禁用
- 2025 年中：日本部分政府机构、加拿大联邦机构陆续跟进

（各国具体公告日期以官方新闻稿为准）

各国禁用公告的共同表述：**"缺乏充分的数据处理透明度"**、**"无法评估合规风险"**——这些都是
**企业治理透明度缺失的直接后果**，而非 DeepSeek 模型能力或安全性问题。

### EU AI Office 对 GPAI 系统性风险的审视（2025-10）

EU AI Office 把 DeepSeek 纳入 GPAI 系统性风险审视列表。**由于 DeepSeek 未在欧盟直接运营**，
欧盟主要通过**下游托管商**（Together、Lepton 等）施加合规压力。这**间接推动**了托管商要求
DeepSeek 提供更多治理信息——**市场结构成为合规杠杆**。

## 九、全球透明度辩论中的 DeepSeek 价值

### 正面论点

- **技术复现性**：DeepSeek 披露允许**全球独立研究**，这是**闭源实验室无法提供**的科学价值
- **成本透明度**：H800 GPU-hours 的披露让**全球算力经济性讨论**有据可依（Epoch AI、
  Artificial Analysis 等依赖此数据构建训练成本模型）
- **训练方法可验证**：R1 论文详细披露 GRPO + 规则奖励，被多个独立团队（Sky-T1、Open-R1）
  成功复现，**首次实现前沿推理模型的"科学验证"**

### 负面论点

- **治理真空**：在合规、用户保护、LEA 响应、数据投诉等方面**缺乏标准接口**
- **法律风险转嫁**：下游托管商承担合规压力（Together、Lepton 的法务成本增加）
- **监管信号混乱**：各国无法基于标准信息做监管评估，**被迫使用"一刀切禁用"作为降险工具**

## 十、页面结论

DeepSeek 的透明度实践**结构性地挑战了全球透明度规范**：

> 它证明了"**前沿能力可以与技术披露密度成正比**"（颠覆闭源实验室的"竞争安全借口"），
> 同时证明了"**技术披露密度不能代替治理披露密度**"（下游监管代价真实存在）。

对透明度研究者（Bommasani、Schaake、张凌寒）而言，DeepSeek 是**2025–2026 最重要的观察样本**：
它同时**上拉了 Methods/Data/Compute 的披露基线**，又**下拉了 Governance/Usage/Impact 的披露
基线**。未来的透明度框架（FMTI v2、GPAI CoP 修订、中国的透明度标准化）必须解决如何**同时
评价这两种披露**的问题。

## 参考

- Bommasani, R. et al. (2023/2024/2025). *Foundation Model Transparency Index* v1.0/1.1/1.2.
  Stanford CRFM
- Schaake, M. (2024). *The Tech Coup.* Princeton University Press
- Stray, J. & others. *Ranking Digital Rights 2024 Corporate Accountability Index.* RDR
- Sheehan, M. (2025). *ChinAI Newsletter* #300–310
- Thompson, B. (2025-01-27). *DeepSeek FAQ.* Stratechery
- AI Index 2025 Q4 (Stanford HAI), "Chinese Frontier Labs" 章节
- 张凌寒 (2023)《算法透明度的层次理论》，《法学研究》
- 朱悦 (2025)《前沿 AI 的"双重不透明"》，《清华法学》
- Garante per la protezione dei dati personali. (2025-01-30). *Provvedimento DeepSeek*
- EU AI Office (2025-10). *GPAI Systemic Risk List Update*
