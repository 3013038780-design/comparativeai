---
title: DeepSeek
description: DeepSeek 公司概况与公开政策文档快照（2026-04-21）
sidebar:
  order: 5
  label: DeepSeek
snapshotDate: 2026-04-21
---

## 公司概况

- **成立**：2023（由量化私募幻方量化孵化）
- **总部**：杭州
- **主要模型**：
  - **DeepSeek-V3**（通用）、**DeepSeek-R1**（推理）、V3/R1 衍生
  - MoE 架构 + 强化学习路径是 DeepSeek 的显著技术特征
  - **开源** 权重（MIT License）+ 开放 API
- **商业模式**：API（极低价格）+ 开源生态驱动
- **定位**：**全球最具影响力的中国开源大模型提供方**之一

## 公开政策文档快照

| 类型 | 文档名 | 链接 | 本站子页 |
| --- | --- | --- | --- |
| 使用政策 | DeepSeek 服务协议 / 隐私政策 | [chat.deepseek.com](https://chat.deepseek.com/) (页面底部) | [usage-policy](./usage-policy/) |
| 模型卡 | DeepSeek-V3 / R1 技术报告 | GitHub + arXiv | [model-card](./model-card/) |
| 安全框架 | 公开安全框架文档有限；TC260-003 合规基线 | _公开文档有限_ | [safety-framework](./safety-framework/) |
| 透明度报告 | CAC 备案（已备案 / 公示） | [cac.gov.cn](https://www.cac.gov.cn/) | [transparency-report](./transparency-report/) |
| 红队披露 | 论文与 system card 局部 | [github.com/deepseek-ai](https://github.com/deepseek-ai) | [red-team-disclosures](./red-team-disclosures/) |

## 监管合规位置

- **中国**：
  - 面向公众的 API / 聊天服务走 CAC 算法备案
  - 开源权重本身是否需备案：**监管实务模糊**（服务 / 权重双路径）
  - 受 TC260-003 基线约束
- **美国**：
  - 2025 初 "DeepSeek moment" 引发技术冲击与政策反弹
  - BIS 出口管制更新；CFIUS 审视
  - 部分州和联邦机构的**禁用清单**
- **欧盟**：
  - 开源模型如在欧盟市场提供下游服务 → GPAI 义务同样适用
  - 意大利 Garante 2025-01 对 DeepSeek 的临时封禁与调查
- **韩国 / 台湾地区**：对政府设备使用限制

## 深度分析：**极限开源 + 最低自律** 的组合

### DeepSeek 模式的独特性

DeepSeek 是全球 AI 公司中**最接近"无独立自律叙事"**的存在：

- **无 RSP / Preparedness / FSF 对标文档**
- **无明确的安全原则声明**（类似 Google AI Principles）
- **Usage Policy 极简**（几百字，基本只声明不得违法使用）
- **安全评估披露**：仅通过技术报告的局部章节
- **所有治理承诺 = CAC 备案材料**（不对公众公开）

**与 Mistral 的开源对比**：
- Mistral **开源 + 欧盟合规** + GPAI CoP 签署
- DeepSeek **开源 + 中国合规** + 无国际行业自律承诺
- 两者都用开源作为透明度替代，但 Mistral 额外配套欧盟制度层，DeepSeek 无

### "DeepSeek moment"（2025-01）的全球影响

2025-01 DeepSeek R1 发布引发震动：
- **性能对标 OpenAI o1** 但训练成本估计**低一个量级**
- **开源** → 任何人可下载、微调、部署
- 引发**美国股市震动**（AI 股大跌）、白宫关注
- Trump 政府加速 **EO 14179 + AI Action Plan** 中的去监管 + 算力竞争叙事

**对全球 AI 治理的三重压力**：
1. **算力门槛的可疑性**：如果 $5M 能训出 o1 级模型，EU 10²⁵ FLOP 和加州 SB 53 10²⁶ FLOP 阈值如何界定？
2. **开源不可撤销**：DeepSeek 权重一旦发布，**任何"暂停"或"撤回"都无意义**
3. **行业自律无法约束开源公司**：所有自律框架假设公司控制模型访问；开源打破这个假设

### 国际监管回应

- **2025-01 意大利 Garante**：**首个欧盟 DPA 对 DeepSeek 临时封禁**（GDPR 合规不足）
- **2025-02 韩国、台湾、澳大利亚**：政府设备禁用
- **2025-03 美国联邦机构**：国防部、商务部、FCC 等禁用 DeepSeek
- **2025-04 德州、维吉尼亚等州**：州政府设备禁用
- **2025-10 欧盟 AI Office**：DeepSeek 被纳入 GPAI 系统性风险审视（境外运营，但模型权重流入欧盟）

### CAC 备案的独特实务挑战

DeepSeek 的合规架构：
- **chat.deepseek.com 面向公众服务** → CAC 算法备案
- **API 服务** → 同样备案
- **开源权重（HuggingFace / GitHub）** → **监管实务模糊**：
  - CAC 未明确"发布权重"是否构成"提供服务"
  - 2025-Q2 CAC 内部讨论是否要求**开源模型备案**
  - 至 2026-04，仍无明确规则

这是中国 AI 监管的**未决边界**，DeepSeek 是最重要的测试案例。

### 与中国其他公司的对比

| 维度 | DeepSeek | 阿里 Qwen | 百度 ERNIE | 字节 豆包 |
| --- | --- | --- | --- | --- |
| 开源策略 | **极限开源**（MIT）| 主力开源（Apache 2.0）| 混合（4.5 开 / 5.0 闭）| 部分开源 |
| 自律文件 | **最少** | 少 | 中等（官方博客） | 少 |
| 政府关系 | 独立（量化私募）| 国家队（阿里云国家平台）| 国家队（Apollo）| 商业化 + 地缘 |
| 国际影响 | **最大**（"DeepSeek moment"）| 大（Qwen 全球下载）| 中 | 中等 |
| 监管压力 | **最高**（多国禁用）| 中 | 中 | 高（TikTok + 豆包）|

## 公司立场速览

- **技术极客 + 低价开源**的运营策略
- **公开 AI 治理立场文件极少**，相信**"模型本身就是最好的声明"**
- 开源对**全球 AI 治理的实务压力**：**权重发布不可撤销**
- **量化资本背景**使 DeepSeek 的政治独立性高于阿里 / 百度（国家队）或字节（商业化+地缘）

