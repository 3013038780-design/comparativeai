---
title: 模型卡
description: DeepSeek 模型技术报告归档：V2/V3/R1/V3.1 与 VL/Coder/Math 系列的"以论文代模型卡"实践（2026-06-28）
sidebar:
  order: 2
snapshotDate: 2026-06-28
---

> **一句话定位**：DeepSeek 没有西方意义上的"Model Card"，但其**技术报告（Technical Report）
> 事实上是中国前沿实验室披露深度最高的模型说明文档**——在某些维度（训练数据构成、算力配置、
> RL 训练细节、消融实验）甚至**超过 OpenAI GPT-5 System Card 或 Anthropic Claude Model Card**。
> 这是"以论文代模型卡"的极端案例，也是 DeepSeek **极限开源立场的外化**。

## 一、DeepSeek 模型谱系与技术报告清单

| 模型 | 发布日期 | 技术报告 / arXiv | 许可 | 架构要点 |
| --- | --- | --- | --- | --- |
| DeepSeek-V2 | 2024-05 | arXiv 2405.04434 | MIT | 236B 总参 / 21B 激活；MLA 注意力 + DeepSeekMoE |
| DeepSeek-V2.5 | 2024-09 | 技术博客 | MIT | V2 基础上融合 Chat / Coder 能力 |
| DeepSeek-Coder V2 | 2024-06 | arXiv 2406.11931 | MIT | 代码专项；HumanEval / MBPP 前沿成绩 |
| DeepSeek-VL / VL2 | 2024-03 / 2024-12 | arXiv 2403.05525 / 2412.10302 | MIT | 多模态视觉-语言 |
| DeepSeek-Math | 2024-02 | arXiv 2402.03300 | MIT | GRPO 算法首次提出 |
| **DeepSeek-V3** | **2024-12-26** | **arXiv 2412.19437** | MIT | **671B 总参 / 37B 激活**；FP8 训练；MoE 路由改进 |
| **DeepSeek-R1 / R1-Zero** | **2025-01-20** | **arXiv 2501.12948** | MIT | **纯 RL 推理模型**；规则奖励；蒸馏到小模型 |
| DeepSeek-V3.1 | 2025-08 | 技术博客 + HuggingFace README | MIT | V3 基础上长上下文、工具使用、RL 对齐增强 |
| DeepSeek-R2 | _2026 传言_ | — | — | 尚未官方确认 |

以上论文均**可公开访问**，附带权重、配置文件、部分评测脚本、tokenizer。
这在全球前沿实验室中是**最完整的开源交付包**。

## 二、V3 技术报告（2024-12-26）的披露深度

DeepSeek-V3 报告（arXiv 2412.19437）是 2024 年前沿模型中**训练侧披露最详细的文档**，包含：

- **架构**：671B 总参数 / 37B 激活的 MoE，61 层 Transformer，Multi-head Latent Attention (MLA)，
  DeepSeekMoE 路由，**auxiliary-loss-free 负载均衡**（V3 创新）
- **训练数据**：14.8T tokens，**英文 + 中文主导**（比例未精确披露但论文章节 2.2 给出领域分布），
  含代码 17%、数学 / 推理语料、多语言低比例
- **算力**：报告公开 H800 GPU-hours 的精确统计（预训练 + SFT + 上下文扩展），并以作者假设的
  单 GPU-hour 成本推算出**广为引用的"数百万美元级"训练成本**——具体数值以 V3 技术报告原文为准，
  该推算值后来成为媒体"**$5.58M 训练成本**"引述的来源
- **并行策略**：16-way 流水线、64-way 专家并行、ZeRO-1 数据并行；**首次大规模 FP8 混合精度训练**
- **训练不稳定性的工程应对**：loss spike 处理、通信-计算重叠的 DualPipe 调度
- **评测**：MMLU、MMLU-Pro、C-Eval、CMMLU、CLUEWSC、GSM8K、MATH、HumanEval、MBPP、LiveCodeBench、
  Codeforces、AIME、GPQA、MMMU、SWE-bench、Aider 等 30+ 基准

> **横向对比**：OpenAI GPT-4 技术报告（2023-03）**刻意回避**架构与数据细节（"for competitive
> and safety reasons"）；GPT-5 System Card（2025-08）延续这一做法。Anthropic Claude 4 Model
> Card 披露训练数据"来自公开互联网 + 授权第三方数据 + 用户 opt-in"的**定性陈述**，不给具体构成。
> **DeepSeek-V3 的披露深度约等于学术 ML 论文的完整预印本**——这正是其"事实模型卡"的含义。

## 三、R1 技术报告（2025-01-20）与"DeepSeek moment"

### 报告核心贡献

DeepSeek-R1 技术报告（arXiv 2501.12948）是**2025 年 Q1 最重要的 AI 论文**，披露了：

1. **R1-Zero**：从 V3-Base **直接跑 RL**（GRPO 算法 + 规则奖励），**不经过任何 SFT**，即涌现
   long CoT、self-verification、reflection 能力。规则奖励包括：
   - 格式奖励（输出包含 `<think>...</think>` 块）
   - 答案准确性奖励（数学题有确定答案，代码题过 unit test）
2. **R1 正式版**：在 R1-Zero 基础上加入**冷启动 SFT + 两轮 RL + 拒绝采样 SFT**，解决 R1-Zero 的
   可读性与语言混用问题
3. **蒸馏到小模型**：R1 的推理轨迹蒸馏到 Qwen / Llama 系列 1.5B / 7B / 14B / 32B / 70B，形成
   **DeepSeek-R1-Distill-*** 系列 —— 全部开源

### "DeepSeek moment" 的学术与市场震动

- **2025-01-27 美股 AI 板块单日重挫**：NVDA 单日跌幅接近两位数上限（市值蒸发数千亿美元量级），
  整体 AI 相关标的市值单日波动接近**万亿美元量级**
- **Ben Thompson（Stratechery）**：2025-01-27 "DeepSeek FAQ" 将此定性为**"information asymmetry
  moment"**——市场此前相信"前沿能力需要 $100M+ 与大量闭源 know-how"，R1 同时挑战了两个假设
- **Jeffrey Ding（GWU）**：在 *ChinAI* 分析中指出，真正的冲击不是"能力追平"而是**"开源 + 可复现
  + 低成本"三位一体**
- **Helen Toner（CSET → GovAI 关联）**：在 Lawfare 撰文讨论 R1 对"训练 FLOP 门槛作为监管抓手"
  的冲击：如果优化算法可以把有效 FLOP 降低一个数量级，**10²⁵ / 10²⁶ FLOP 阈值的合理性**受到挑战

### R1 报告中的"safety considerations" 短章节

R1 技术报告的 §5 "Safety" 是 DeepSeek **首次在论文中专设安全章节**，内容约 1–2 页：

- 中英文内容安全基准评测（SafetyBench、CVALUES）
- 讨论 R1-Zero 的**语言混用**（中英夹杂）、**重复输出**、**格式不稳**问题
- 提到使用 safety-oriented 拒绝采样数据
- **未涉及** CBRN、网络武器、自主复制等前沿能力评估（与 Anthropic / OpenAI 前沿安全评估报告的
  主题不同）

这印证了 DeepSeek **把"安全" = "内容合规"**的国内惯例性理解，与西方前沿实验室把"安全" = "前沿
灾难性风险"的定义**不对称**。

## 四、"Model Card" 规范史下的 DeepSeek

### Raji & Gebru 2020 的基准定义

**Raji, I. D., & Gebru, T.（2020）"Model Cards for Model Reporting"**（FAT*）提出 model card
应包含 9 个维度：

1. Model Details（架构、版本、日期、类型、训练资源、引用）
2. Intended Use（主要用途、主要用户、超范围使用）
3. Factors（相关子群体、instrumentation）
4. Metrics（性能、阈值、决策边界）
5. Evaluation Data（数据集、动机、预处理）
6. Training Data（同上）
7. Quantitative Analyses（分组、交叉）
8. Ethical Considerations
9. Caveats and Recommendations

**DeepSeek 技术报告对 1/4/5/6/7 的覆盖远深于** Anthropic / OpenAI 的官方 Model Card；但对
**2/3/8/9**（意图使用、子群体公平性、伦理考量、使用建议）**几乎不覆盖**。这种**"ML 研究维度重、
治理维度轻"**的分布，是理解中国前沿实验室模型披露文化的关键切面。

### 与 Qwen 系列的中国内部对比

- **阿里 Qwen**（tongyi.aliyun.com / Hugging Face）：发布**兼有论文 + 独立 Model Card** 的双轨
  文档，Model Card 格式更接近 Hugging Face 标准模板（含 intended use、risks & limitations、
  training data overview）
- **DeepSeek**：**只发论文不发 Model Card**，Hugging Face 仓库 README **基本只是论文摘要 + 快速
  上手**
- **百度 ERNIE**：闭源主力 + 少量开源（4.5 系列），Model Card 形式主要用于企业 API 客户文档

DeepSeek 是中国前沿厂商中**最接近纯"ML 论文"范式**、最不做"治理侧文档化"的。

## 五、评测披露与基准污染争议

### V3 / R1 的评测边界

V3 / R1 论文公开的主要基准结果：

| 基准 | V3 | R1 | 参考（o1 / Claude 4 Sonnet）|
| --- | --- | --- | --- |
| MMLU | 88.5 | 90.8 | 可比或略低 |
| MMLU-Pro | 75.9 | 84.0 | 可比 |
| GPQA Diamond | 59.1 | **71.5** | o1 略高 |
| MATH-500 | 90.2 | **97.3** | o1 可比 |
| AIME 2024 | 39.2 | **79.8** | o1 可比 |
| Codeforces | — | **2029 Elo** | o1 可比 |
| SWE-bench Verified | 42.0 | 49.2 | Claude 4 Sonnet 高 |
| Aider | 79.7 | 53.3 | — |

### Chollet ARC-AGI-2 结果

**François Chollet（ARC Prize 基金会）**在 2025-Q1 的公开讨论中给出 R1 在 ARC-AGI 系列公开集上
的成绩量级（显著低于同期 OpenAI o3-preview 的前沿成绩；具体百分比以 ARC Prize 官方榜单为准）。
但 Chollet 同时指出：**R1 是当时唯一 "open weights + 可复现 + 训练方法公开" 的能拿非零分的模型**，
在"可审计 AI 进步"维度意义重大。

### Hendrycks 与基准污染关切

**Dan Hendrycks（Center for AI Safety）**多次提及，R1 / V3 在数学基准上的**异常高分**（尤其
MATH-500、AIME 2024）引发社区对**训练集污染（contamination）**的质疑。DeepSeek 团队的回应：

- 论文 §2 "Data Construction" 讨论了去污染流程（n-gram overlap 过滤）
- 但**未公开完整污染审计报告**，无法独立核验
- 2025-Q1 独立研究（包括 Scale AI 的 PRIVATE-HUMANITY-LASTEXAM 测试）显示 R1 成绩**在未见题
  目上显著下降**，但仍高于多数开源模型

## 六、产业第一手：开源生态的即时复现与"微型 R1"现象

### HuggingFace 分发与下载量

- V3 与 R1 在发布后短期内在 HuggingFace 形成**数十万至百万量级**的累计下载
- R1-Distill-Qwen-32B 在 2025-Q1 成为**最受欢迎的开源推理蒸馏模型之一**
- Ollama、LM Studio、vLLM、SGLang 首周均添加原生支持

（具体下载数字以 HuggingFace 仓库实时统计为准）

### "微型 R1" 复现浪潮（2025-Q1–Q2）

R1 论文的**方法透明度**使得多个团队快速复现：

- **UC Berkeley Sky-T1**（2025-01，以数百美元级极低成本完成复现，具体金额以项目官方报告为准）
- **HuggingFace Open-R1**（2025-01 启动的完全开源复现项目）
- **Alibaba Qwen 2.5-Math 推理变体**
- **Kimi k1.5 报告**（Moonshot，2025-01 几乎同时发布）
- 社区"1 美元训 R1-Zero-tiny"教学 notebook 成为 2025-Q1 教学热点

### 学术引用量

截至 2026 年上半年，DeepSeek-V3 与 R1 论文在 Google Scholar 上的引用数均达到**千级以上量级**
（R1 因推理 / RL 训练方法论的独创性，引用增速明显高于 V3；具体引用数以 Google Scholar 实时数据为准）。

R1 论文在**大语言模型推理 / RL 训练**子领域**事实上成为 2025 年被引最多的单篇论文之一**，与
同期的 OpenAI o1 system card（闭源、无方法细节）形成鲜明对比。

## 七、学术批评与规范讨论

- **Bender & Gebru et al.（"Stochastic Parrots" 2021）的数据披露诉求**：DeepSeek 论文对训练
  数据的分类披露**满足其主要诉求**（来源类型、语言分布、领域占比、去污染流程），但**不公开具体
  数据集清单**（无法核验 common-crawl 子集版本）
- **Irene Solaiman 等 "Release Decisions"**：DeepSeek 是把"全量发布"推到极致的案例，但其**无
  对应的 staged release 评估**（因为一次性全放）使得"不同开放度对风险的边际影响"这一经验问题
  在 DeepSeek 这里**无法分阶段观察**
- **Peter Henderson（Princeton）**：在 2025 发表的 Open-Weights 治理论文中，把 DeepSeek-R1
  作为**"提前 6 个月到 18 个月引发 open-weights 治理辩论成熟化"** 的关键触发事件
- **Rishi Bommasani et al. 2025 FMTI**：DeepSeek 在 **Methods / Data / Compute** 三个维度
  得分 > 50%，远高于闭源厂商；但在 **Usage / Policy / Impact / Labor** 维度得分 < 30%，体现
  技术维度高透明、治理维度低透明的**"非对称透明度"**

### 中国学界视角

- **张凌寒**：DeepSeek 技术报告在学理上**重置了"备案材料不公开 vs. 模型能力完全公开"的悖论** ——
  "模型本身就是最好的说明书"是否构成对监管透明度诉求的替代回答，尚待规范讨论
- **朱悦**：技术报告作为合规语境下的"额外披露"，客观上**降低了监管成本**（评审 DeepSeek 比评审
  闭源厂商容易），但也**抬高了未来备案"非公开材料"的解释张力**

## 八、页面结论

DeepSeek 的模型卡实践是中国 AI 产业**"技术高透明 + 治理低披露"**的典型。从学术研究和可复现性
角度，V3 / R1 技术报告是全球前沿模型中**最容易核验、最便于下游构建**的；从企业治理和
下游合规角度，DeepSeek **缺少西方行业约定的 Model Card、Policy Card、System Card 对应物**。

> 这是 DeepSeek 作为"中国版 Mistral"的深层特征：Mistral 选择"开源 + 欧盟制度层合规"双轨；
> DeepSeek 选择"开源 + 中国备案最低限"单轨。前者用制度补透明，后者用论文补制度。

## 参考

- Raji, I. D. & Gebru, T. (2020). *Model Cards for Model Reporting.* FAT*
- DeepSeek-AI (2024). *DeepSeek-V3 Technical Report.* arXiv:2412.19437
- DeepSeek-AI (2025). *DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL.* arXiv:2501.12948
- DeepSeek-AI (2024). *DeepSeek-V2 Technical Report.* arXiv:2405.04434
- Bommasani, R. et al. (2025). *Foundation Model Transparency Index v1.1.* Stanford CRFM
- Thompson, B. (2025-01-27). *DeepSeek FAQ.* Stratechery
- Ding, J. (2025). *ChinAI Newsletter* #300 & #301
- Toner, H. (2025-02). *What the DeepSeek Moment Reveals.* Lawfare
- 张凌寒 (2025)《开源人工智能模型的监管悖论》，《中国法学》
