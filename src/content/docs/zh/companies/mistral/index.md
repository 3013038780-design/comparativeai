---
title: Mistral AI
description: Mistral AI 公司概况与公开政策文档快照（2026-06-28）
sidebar:
  order: 6
  label: Mistral AI
snapshotDate: 2026-06-28
---

## 公司概况

- **成立**：2023（由 DeepMind、Meta 前研究员 Arthur Mensch、Timothée Lacroix、Guillaume Lample 创立）
- **总部**：**巴黎**（欧盟境内唯一进入全球 AI 第一梯队的公司）
- **主要模型**：
  - **Mistral Large 3**（2025-12 发布）：MoE，**41B active / 675B total**，**事实上的欧盟最强模型**
  - **Ministral 3** 系列（3B / 7B / 14B 小模型）
  - **Mistral Small 4**（Apache 2.0 开源）
  - **Le Chat**（2025-02 上线 iOS/Android，对标 ChatGPT/Claude）
- **估值**：**€12B**（2025-09 拿到 €2B 融资）+ **$830M**（2026-03 新一轮用于巴黎 + 瑞典数据中心）
- **收入**：2026 年底**预计超 $10 亿**（Davos 2026-01 披露）

## 战略定位：**欧洲主权 AI**（Sovereign AI）

- **地缘政治叙事**：欧洲对美国（OpenAI/Anthropic）和中国（DeepSeek/Qwen）的**第三极**
- **Mistral Compute**：2026 年推出的欧洲专属算力平台，**Macron 称为"历史性"**
- **开源优先**：多数旗舰模型开源（Apache 2.0），对标 Meta Llama 但训练数据更欧盟合规
- **法国国家支持**：2025 法国 AI 峰会以 Mistral 为产业重心；欧委会多位官员公开背书

## 公开政策文档快照

| 类型 | 文档名 | 链接 | 本站子页 |
| --- | --- | --- | --- |
| 使用政策 | Mistral AI Usage Policy | [mistral.ai/terms](https://mistral.ai/terms/) | — |
| 模型卡 | 各模型 Model Card | [docs.mistral.ai/getting-started/models](https://docs.mistral.ai/getting-started/models/) | — |
| 技术报告 | Mistral Large 3 / Ministral 3 Technical Report | Mistral 博客 + arXiv | — |
| 透明度 | 公开博客 + GitHub（开源模型权重和训练说明） | [mistral.ai/news](https://mistral.ai/news/) | — |

## 监管合规位置

- **欧盟（本土）**：
  - **[GPAI Code of Practice](/zh/rules/eu/gpai-code-of-practice/) 完整签署方**（2025-08-01 首批）
  - **Mistral Large 2 已超 10²⁵ FLOP 阈值**，触发 AI Act **系统性风险 GPAI** 义务
  - 与 **[CNIL](/zh/subnational/eu/france-cnil-ai/)**（法国数据保护局）合作密切，法国 AI Act MSA 指定后预期 Mistral 作为本国龙头受益
- **美国**：通过 AWS Bedrock、Azure、Google Vertex 分销
- **中国**：不在中国大陆提供服务；Le Chat 等消费者产品可访问但无合规本地化
- **印度 / 中东**：2025-2026 与 UAE G42、印度 Reliance 等建立合作

## 深度分析：开源作为**替代性行业自律**

### 为什么 Mistral 不像美国三大那样发布安全框架

**Mistral 没有 RSP / Preparedness / FSF 对标的安全框架**。其官方逻辑：

1. **透明即安全**：开源权重 + 训练文档让**研究社区和监管方可以独立验证**，不需要公司单方承诺
2. **不垄断能力**：闭源公司的"安全承诺"本质是"**相信我们有能力管住能力**"；开源公司无此权力不平衡
3. **欧盟法规已覆盖**：AI Act 第 53 条要求 GPAI 披露技术文档、训练数据摘要、版权合规 →
   **法律强制的透明度**替代了**自愿的安全框架**

**批评**：
- 开源模型**"放出去就收不回"**——一旦达到 CCL 级能力（生化 / 网络 / 自主改进）开源将是不可逆风险
- Mistral 的开源**不是完全开源**：最新旗舰（如 Mistral Large 3）**部分条款保留**（非纯 Apache 2.0）
- EU AI Act 第 53 条的**开源豁免**（商业 GPAI 不适用；系统性风险 GPAI 也不豁免）——Mistral Large 2 已越过 10²⁵ FLOP，理论上不在豁免内

### Mistral 的开源 / 闭源分层

| 模型 | License | 权重公开 |
| --- | --- | --- |
| Mistral 7B / 8x7B / 8x22B | Apache 2.0 | ✅ 完全开源 |
| Ministral 3 (3B / 7B / 14B) | Apache 2.0 | ✅ 完全开源 |
| Mistral Small 4 | Apache 2.0 | ✅ 完全开源 |
| **Mistral Large 2 / 3（旗舰）** | **Mistral Research License (MRL)** | ⚠️ **仅研究用途**，商业需付费许可 |
| Ministral 3B（商业）| Mistral Commercial License | ❌ 闭源 |

**观察**：Mistral 的"开源叙事"在旗舰模型上**打了折扣**。类似 Meta Llama 的策略——
**开源中档、闭源旗舰**，商业 + 开源生态兼得。

### GPAI Code of Practice 签署细节

Mistral 是 **CoP 完整签署方**（2025-08-01 首批），三章（Transparency / Copyright / Safety and
Security）全签。但：
- 在 **Safety and Security 章节**起草期间曾与法国政府协调**推动轻量化**（2025 Q1-Q2 谈判）
- 对 **版权章节的 opt-out 机制**拥有**实施层面的谨慎**（训练数据合法性是开源模型的法律风险重心）

### Digital Omnibus Proposal（2025-11）立场

欧委会提议推迟 AI Act 高风险条款 16 个月至 2027-12 → Mistral **隐性支持**（未公开表态，但
产业协会 DigitalEurope 的 Mistral 代表积极参与游说）。

## 公司立场速览

- **开源偏好**：Anthropic 和 OpenAI 偏向闭源安全；Mistral 主张"**开源 + 欧盟合规**"更可持续
- **对 EU AI Act**：**公开支持**但在 2024 夏季 GPAI 条款谈判中与法国政府一起推动**更轻 GPAI 义务**
- **对 Digital Omnibus Proposal**：**隐性支持**
- **反美**：公开批评美国科技巨头对欧洲 AI 生态的压制
- **主权 AI 叙事**：与 Macron 政府、欧委会 Breton → Virkkunen 接续的"数字主权"政策高度绑定

## 与其他公司的对比

| 维度 | Mistral | Anthropic | OpenAI | 百度 | DeepSeek |
| --- | --- | --- | --- | --- | --- |
| 开源策略 | **主力开源**（Apache 2.0） | 闭源 | 闭源 | 混合（4.5 开源，5.0 闭源） | **主力开源** |
| 所在法域 | 法国（EU 本土） | US | US | 中国 | 中国 |
| 监管立场 | 支持 + 主张轻义务 | 支持 + 承诺强安全 | 支持 + 选择性 | 备案合规 | 备案合规 |
| 资本来源 | 欧盟 + 中东 | US（Amazon/Google） | US（Microsoft） | A 股 + 政府 | 量化私募 |
