---
title: 阿里巴巴 Alibaba
description: 阿里通义千问（Qwen）概况与政策文档快照（2026-04-22）
sidebar:
  order: 7
  label: 阿里巴巴 Alibaba
snapshotDate: 2026-04-22
---

## 公司概况

- **成立**：1999
- **总部**：杭州
- **主要 AI 产品**：
  - **通义千问（Qwen）系列**：
    - **Qwen 3.5**（2026-02-16 春节除夕发布）：**397B 总参数 / 170B 激活**，原生多模态；
      官方称性能对标或超越 Gemini-3-Pro、GPT-5.2；API 输入价 **0.8 元 / 百万 tokens**（Gemini 3 Pro 的 1/18）
    - **Qwen 3 系列**（2025-04 发布）
    - **Qwen 2.5 / 2 / 1** 系列
  - **Wan（万相）**视频生成：Wan 2.6（2025-12 发布）
  - **通义实验室**：阿里 AI 研发中枢
  - **百炼（Model Studio）**：面向企业的大模型 API 平台
  - **夸克**：AI 浏览器 / 助手
- **商业模式**：电商 + 云（阿里云 + 通义）+ 支付（蚂蚁集团独立）+ 物流 + AI 应用

## 战略定位：**开源主导的中国 Meta**

- **Apache 2.0 全面开源**：Qwen **400+ 开源模型、20 万+ 衍生模型、10 亿+ 下载量**
- **32% 中国企业级 LLM API 市场份额** #1（2026 Q1 数据）
- **对标 Meta Llama**：开源权重 + 商业化服务组合
- **阿里云 + 通义**双引擎：AI 是阿里云的第二增长曲线

## 公开政策文档快照

| 类型 | 文档名 | 链接 | 本站子页 |
| --- | --- | --- | --- |
| 使用政策 | Qwen 服务协议 + 开源 License | [tongyi.aliyun.com](https://tongyi.aliyun.com/) | — |
| 技术报告 | Qwen 3 / 3.5 Technical Report | Qwen 官网 + arXiv | — |
| 开源模型 | Qwen GitHub / HuggingFace | [github.com/QwenLM](https://github.com/QwenLM) | — |
| 透明度 | CAC 算法备案（多批次） | [cac.gov.cn](https://www.cac.gov.cn/) | — |

## 监管合规位置

- **中国**：
  - [《生成式 AI 办法》](/rules/china/generative-ai-interim-measures/) 算法备案 — 通义千问首批备案服务之一
  - [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/) 合规
  - 阿里作为**头部企业**参与多份 TC260 标准起草
- **美国**：Qwen 开源模型在美国可自由下载使用；夸克等消费者产品不在美国
- **欧盟**：Qwen 开源模型在欧盟可下载；未来若触发 AI Act 第 53 条（训练数据摘要）义务需应对
- **东南亚 / 中东**：积极出海（Qwen-for-SEA 等本地化版本）

## 深度分析：**开源路径的中国版本**

### 阿里的开源叙事与其商业战略

阿里 Qwen 是中国最成功的开源 AI 生态：

**数据**（2026-04 公开数据）：
- **400+ 开源模型**（Qwen 1/2/2.5/3/3.5 系列 + Wan 系列 + 多模态变体）
- **200,000+ 衍生模型**（基于 Qwen 微调的）
- **10 亿+ 下载量**（HuggingFace + ModelScope 合计）
- **32% 中国企业级 LLM API 市场** #1

**商业逻辑**：
- **开源是获客工具**：开源权重 → 开发者试用 → 转向阿里云付费 API（类似 Meta Llama + AWS 策略）
- **通义 + 阿里云双引擎**：AI 是阿里云第二增长曲线
- **极低价格策略**：Qwen 3.5 API 0.8 元 / 百万输入 tokens，约 Gemini 3 Pro 1/18

### Qwen 开源的国际合规压力

**Qwen 开源在欧盟的 AI Act 合规问题**：

- Qwen 3.5 训练算力**很可能超过 10²⁵ FLOP** → 触发系统性风险 GPAI
- **AI Act 第 53 条第 2 款开源豁免**对"系统性风险 GPAI"**不适用**
- 理论上 Qwen 需履行：对抗性测试、系统性风险评估、事件报告、网络安全
- **实务**：阿里**未签署 GPAI Code of Practice**（截至 2026-04-22）
- 欧盟 AI Office 是否对 Qwen 开源下载到欧盟境内的场景执法，是**未决边界**

**Qwen 在美国的情况**：
- 开源模型在美国可自由下载
- Alibaba Cloud International 在美国运营但**不含 Qwen 主力**（美国合规风险）
- 可能受未来 BIS 出口管制针对"中国 AI 权重"的政策影响

### 自律文件的**显著缺位**

阿里作为**全球开源 AI #1 之一**，但**未发布独立的安全框架文档**：
- 无 RSP / Preparedness / FSF 对标
- 无 AI Principles 独立文件（仅嵌入阿里巴巴 ESG 报告的子章节）
- 无 Frontier Model Forum 参与
- 无公开红队披露机制

**解释**：
- **与监管互动为主**：通过 CAC 备案 + TC260 参与履行治理义务
- **开源自身是透明度**：技术报告、模型权重、训练细节公开
- **商业务实**：类似 Meta / Mistral，**避免"承诺约束未来灵活性"**

### 与 Meta / Mistral 的开源对比

| 维度 | Alibaba Qwen | Meta Llama | Mistral |
| --- | --- | --- | --- |
| 旗舰开源 | Qwen 3.5（Apache 2.0） | Llama 3/4（Llama Community License，有使用限制）| Mistral Large 3（MRL，仅研究）|
| 开源深度 | **最深**（含旗舰）| 中（商业有条件）| 中（旗舰闭源）|
| 自律文件 | **无** | Responsible Use Guide（弱）| 无正式 |
| 监管配合 | 中国：强；其他：弱 | 美国：中；欧盟：签 CoP 部分保留 | 欧盟：强签 CoP |
| 商业模式 | 阿里云订阅 | 广告 + Meta 产品 | API + Mistral Compute |

## 公司立场速览

- **开源战略的商业逻辑**：开源获客 + 云服务变现，类似 Meta + AWS 而非 Anthropic
- **无独立安全框架**：通过国内合规 + 技术报告履行治理义务
- **对国家战略的配合**：参与 TC260 标准、支持国家 AI 产业政策
- **产业 AI 导向**：ToB + 垂直行业应用（金融、医疗、制造）重于消费者 AI
- **国际合规待观察**：GPAI CoP 未签、BIS 管制潜在影响

## 与 Meta / Mistral 的开源对比

| 维度 | Alibaba Qwen | Meta Llama | Mistral |
| --- | --- | --- | --- |
| 旗舰模型参数 | 397B / 170B active | ~405B | 675B / 41B active |
| License | Apache 2.0 | Llama 3 Community License（有使用限制）| Apache 2.0（部分） |
| 法域 | 中国 | 美国 | 法国（EU） |
| 商业模式 | 云服务 + 订阅 | 广告 + Meta 产品 | API + Mistral Compute |
| 开源模型数量 | 400+ | ~15 | ~20 |
