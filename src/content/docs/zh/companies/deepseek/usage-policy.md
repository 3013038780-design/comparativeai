---
title: 使用政策
description: DeepSeek 使用政策归档：服务侧 AUP、API 条款、MIT License 开源权重与中国合规基线的互动（2026-06-28）
sidebar:
  order: 1
snapshotDate: 2026-06-28
---

> **一句话定位**：DeepSeek 的"使用政策"是**中国 AI 行业最简短、最"不像自律文件"**的一份。它在
> 形式上存在（chat.deepseek.com 页脚的《用户协议》/《隐私政策》+ API 条款 + 权重随附的 MIT License），
> 但在**内容密度**上远低于 OpenAI / Anthropic / Meta —— 这并非疏漏，而是**中国"服务侧合规靠备案、
> 不靠企业自主 AUP"**治理逻辑的自然结果。

## 一、文档结构与层级

DeepSeek 的使用约束分布在**三个相互独立的层面**，任何一层单独阅读都不完整：

| 层面 | 文件 | 约束对象 | 性质 | 长度估算 |
| --- | --- | --- | --- | --- |
| **服务侧** | chat.deepseek.com 用户协议 / 隐私政策 | C 端用户 | 合同条款 + 合规声明 | 约 3,500–4,500 汉字 |
| **API 侧** | api-docs.deepseek.com 开发者条款 | B 端 / 开发者 | SaaS 合同 + 内容规范 | 约 2,000–3,000 汉字 |
| **权重侧** | `LICENSE` (HuggingFace / GitHub 仓库根) | 下载 / 微调 / 再分发者 | **MIT License 全文**（约 170 词） | 极短 |

这种**"三层解耦"**是 DeepSeek 使用政策最重要的结构特征：服务侧对应 CAC 备案义务，API 侧对应
B 端商用边界，权重侧完全敞开。三者加起来的总文字量**仍不及 Anthropic Usage Policy 单一文档**，
这是观察中国前沿实验室自律姿态的关键切面。

## 二、服务侧用户协议：合规驱动的"最小可行 AUP"

### 核心禁止事项（chat.deepseek.com）

服务侧用户协议的禁用清单基本**重述《生成式 AI 暂行办法》第 4 条 + TC260-003 的 A.1 内容安全基线**：

- 危害国家安全、颠覆国家政权、破坏国家统一
- 煽动民族仇恨、破坏宗教政策
- 传播暴力、色情、赌博、恐怖主义信息
- 侵犯他人知识产权、商业秘密、个人隐私
- 生成虚假信息干扰社会秩序

**与 Anthropic AUP 的结构性对比**：

- Anthropic AUP 把**武器化（CBRN）**、**儿童保护（CSAM + 显著身心损害）**、**选举干预**、
  **关键基础设施攻击** 作为独立分类逐项禁止
- DeepSeek 用户协议把这些并入"不得违法"的**概括性条款**，不做类别化拆解
- Anthropic AUP 区分 **Consumer Usage Policy** 与 **Commercial Terms**，分摊企业合规责任；
  DeepSeek 服务侧用户协议**未做此区分**，B 端用户默认跳转 API 条款

### 合规文本的"监管回声"

朱悦（中国社会科学院法学所，2024）在《生成式 AI 服务的合规文本研究》中观察到：
**中国前沿实验室的 AUP 文本超过 70% 可以逐句追溯到《暂行办法》或 TC260-003 条目**。这在 DeepSeek
身上表现得尤为极端 —— 其服务条款几乎不包含"公司自主的价值判断"，而是**把监管要求平移为合同义务**。

张凌寒（中国政法大学数据法治研究院）将这一模式概括为**"合规文本的代偿性"**：当行业治理以监管
为主导、以企业自律为次要时，企业 AUP 的功能从"价值宣示"退化为"合规声明"。

### 话题拒答模式

chat.deepseek.com 在**政治敏感、历史评价、涉港澳台、领导人相关**话题上采用标准的**拒答 + 转移**
模式（"让我们换个话题聊聊"）。这一行为并非 AUP 明文规定，而是由**训练侧 RLHF + 服务侧关键词
过滤 + 内容安全 API**三层机制共同实现。第三方测试（2025-Q1 多个 GitHub 仓库的系统性探测）表明：

- **拒答率在部署环境间存在显著差异**：chat.deepseek.com 官方服务 > API 直调 > 开源权重本地部署
- 同一 R1 权重在 HuggingFace 本地部署时，敏感话题拒答率**接近零**
- 这印证了"**拒答是服务层实现、不是模型层实现**"的基本判断

## 三、API 使用政策

### 合同边界

DeepSeek API 条款相对服务侧协议更贴近**技术 SaaS 合同**：

- 按 token 计费（V3 / R1 价格在中国前沿模型中**极低**，是其商业策略核心）
- Rate limit、SLA、退款机制
- 数据使用条款：**默认不将用户 API 输入用于训练**（2025-03 更新后明确）
- 企业商用**不另签 MSA**（除大额合同）

### "禁用行业"清单的缺席

Anthropic 在 Commercial Terms 中**明确禁用**某些行业（武器、监控基础设施），Meta Llama 的
Acceptable Use Policy（Llama 3 引入、Llama 4 延续）附加了**"军事、战争、核工业、间谍活动"**
等专门禁令。**DeepSeek API 条款无此类行业黑名单**，统一以"不得违法"概括。

这是观察中国前沿实验室与美国同行**自律深度差**最直观的文本证据。

## 四、MIT License：中国开源的"极限立场"

### 无附加条款

DeepSeek-V2 / V2.5 / V3 / R1 / V3.1 / VL / Coder / Math 等权重在 HuggingFace 和 GitHub 上
**统一采用 MIT License**。MIT 的关键特征：

- **无"no military use"**
- **无"no surveillance"**
- **无"acceptable use policy" 附加**（不同于 Llama / Falcon / Stable Diffusion 的修订版许可）
- **无使用量阈值触发的再授权义务**（不同于 Llama 3 的 7 亿 MAU 条款）
- **无 notification / attribution 要求之外的限制**

> Irene Solaiman（Hugging Face, 2023 "Gradient of Release"）把模型发布分为六个梯度
> （从 fully closed 到 fully open）；DeepSeek-V3/R1 位于**最开放一端**，且是**全球前五大能力模型
> 中唯一采用无附加条款 MIT 的**。

### 与 Meta Llama 的对比

| 维度 | DeepSeek (MIT) | Meta Llama 3 / 4 (Custom) |
| --- | --- | --- |
| 核心许可 | MIT | 定制许可 + AUP |
| 商业使用 | 无限制 | **月活用户 > 7 亿需单独授权** |
| 禁用场景 | 无 | AUP 列 13 类（含武器、执法滥用、CSAM 等）|
| 再分发 | 允许（保留版权声明即可） | 允许但**衍生模型命名须含 "Llama"** |
| 欧盟适用 | 由下游合规 | Llama 3 曾**短暂排除欧盟**（后恢复）|

**Kapoor & Narayanan**（*AI Snake Oil*, Princeton, 2024）指出：Meta 的 "Acceptable Use" 在
**开源语境下几乎不可执行**（谁能监督全球下载者？），所以附加条款更多是**法律保险**而非实际约束。
DeepSeek 的 MIT 立场把这一点推到极致 —— **既然不可执行就不假装能执行**。

## 五、海外托管者的 AUP 归属问题

2025-Q1 以后，DeepSeek 权重被 **Together AI、Lepton AI、Fireworks AI、Perplexity、Groq、
Cerebras、AWS Bedrock（2025-03 上架 R1 Distill 变体）** 等托管商纷纷提供：

- **权重由 MIT 授权流出** → 再分发合法
- **服务由托管商自己的 AUP 覆盖**：Together 有自己的 AUP，Lepton 有自己的，各不相同
- **用户通过托管商访问 DeepSeek 模型时，DeepSeek 的服务侧 AUP 不适用**
- **中国 CAC 备案**只覆盖 DeepSeek 自己在中国境内运营的服务端点，对海外托管**不产生域外效力**

这种**"权重开源 → 一份 MIT + N 份托管商 AUP + 0 份 DeepSeek 境内 AUP"**的结构，构成了
**全球开源 AI 治理的最复杂版图之一**，也是后续监管讨论（EU AI Act 第 53 条开源豁免边界、
美国 BIS 的 "Advanced Open-Weight AI Model" 规则草案）的核心争议场景。

## 六、2025-01 R1 发布后的"服务中断 / 注册限制"插曲

2025-01-27 前后，chat.deepseek.com 一度**暂停新用户注册**，官方声明称"注册量异常增长，需加强
安全防护"。学界对此事件有两种主流解读：

1. **基础设施解释**（Paul Triolo, DGA-Albright Stonebridge）：纯粹是流量超预期造成的工程响应
2. **监管沟通解释**（Matt Sheehan, CEIP "ChinAI"；Jeffrey Ding, GWU）：这可能是**首批爆款式海外
   舆情回流**触发 CAC 与 DeepSeek 之间的非公开协调窗口 —— 在中国 AI 治理中，**服务端的可控性**
   是监管首要诉求，注册限制是降低海外新流量暴露的快速手段

两种解读并不互斥。无论主因为何，这一事件**展示了服务侧合规杠杆的即时生效能力**，与权重侧的
**完全不可撤销**形成鲜明对比 —— 这正是理解 DeepSeek 合规结构的核心张力。

## 七、学术与产业观察

### 学术批评视角

- **Irene Solaiman（HuggingFace）**：DeepSeek 是 "gradient of release" 光谱上**最接近 fully open
  的边界案例**，为测试"开源即透明度替代"的假设提供了材料
- **Kapoor & Narayanan（Princeton）**：2025-03 博客文章论证 DeepSeek 权重公开后 6 个月内，
  **没有出现灾难性滥用证据**，支持"开源风险被夸大"派
- **Rishi Bommasani et al.（Stanford CRFM）**：2025 年更新版 Foundation Model Transparency Index
  中，DeepSeek 在 **"methods" 和 "data" 维度排名明显提升**，但**"usage policy" 和 "downstream
  impact" 维度得分低**，反映出技术透明与治理透明的不对称
- **张凌寒**：在《开源人工智能模型的监管悖论》（2025）中指出，中国现行治理框架以**服务备案**为
  主轴，权重开源本身**不直接触发备案义务**；但 2026 若将"提供训练 / 微调素材"纳入规制，DeepSeek
  将是主要影响对象
- **戴昕（北京大学法学院）**：从数据安全法视角提出，**MIT License 的"无限制性"与《数据安全法》
  第 21 条"重要数据"管控存在张力**，未来可能通过《网络数据安全管理条例》配套规则收紧

### 产业第一手实践

- **金融客户的 API 集成谨慎性**：部分中国商业银行和头部券商 2025 上半年对 DeepSeek API 持观望态度，
  核心顾虑并非模型能力，而是**合同条款单薄**（无企业级 SLA、无数据驻留承诺的详细书面化）
- **教育客户的选择性使用**：K12 教育产品（作业帮、猿辅导等）倾向于**通过备案更完整的中间层**
  （阿里云百炼、百度千帆）接入 DeepSeek 而非直连
- **海外开发者的 AUP 困惑**：2025-Q2 多家北美 SaaS 公司通过 Together / Fireworks 调用 R1 时，
  法务对"适用哪一份 AUP"提出明确疑问，催生了**托管商层的"开源模型 AUP 说明页"**新文档类型

## 八、与"监管合规位置"的衔接

DeepSeek 使用政策的**最终约束力**并不来自文本本身，而来自三层外部机制：

1. **CAC 算法备案**（2023-10 首批过审，V3 / R1 分别于 2024-12、2025-01 补充备案）—— 服务
   侧下架权在监管
2. **TC260-003-2024 基线**—— 推荐性标准但事实强制
3. **下游托管商 AUP + 各国属地监管**（2025 年初意大利 Garante 临时封禁、韩国 / 台湾 / 澳大利亚
   政府设备禁用、2025 年上半年美国 DoD / Commerce 相关禁用；具体日期以官方公告为准）——
   权重层开放、服务层被属地切断

> **结论**：DeepSeek 的使用政策是一份**"主动留白 + 被动兜底"**的文档 —— 它放弃了通过企业自律
> 来塑造行业治理的姿态，把约束力全部托付给**服务侧备案 + 权重侧 MIT + 托管层各自合规**的组合。
> 这既是中国治理路径的自然结果，也是对全球"前沿实验室必须发布 AUP"叙事的结构性挑战。

## 参考与延伸阅读

- chat.deepseek.com（用户协议 / 隐私政策页面）
- HuggingFace: `deepseek-ai/DeepSeek-V3` / `DeepSeek-R1` 仓库 LICENSE 文件
- Solaiman, I. (2023). *The Gradient of Generative AI Release: Methods and Considerations.* FAccT
- Kapoor, S. & Narayanan, A. (2024). *AI Snake Oil.* Princeton University Press
- Bommasani, R. et al. (2024/2025). *The Foundation Model Transparency Index.* Stanford CRFM
- 张凌寒 (2025)《开源人工智能模型的监管悖论》，《中国法学》
- 朱悦 (2024)《生成式 AI 服务的合规文本研究》，《法学研究》
- Matt Sheehan, *ChinAI Newsletter* 2025-02 特刊
- 本站 [rules/china/generative-ai-interim-measures](/zh/rules/china/generative-ai-interim-measures/)
  · [tc260-gen-ai-security-basic-requirements](/zh/rules/china/tc260-gen-ai-security-basic-requirements/)
