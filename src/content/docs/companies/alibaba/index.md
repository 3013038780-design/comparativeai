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
| 使用政策 | Qwen 服务协议 + 开源 License | [tongyi.aliyun.com](https://tongyi.aliyun.com/) | _待补_ |
| 技术报告 | Qwen 3 / 3.5 Technical Report | Qwen 官网 + arXiv | _待补_ |
| 开源模型 | Qwen GitHub / HuggingFace | [github.com/QwenLM](https://github.com/QwenLM) | _待补_ |
| 透明度 | CAC 算法备案（多批次） | [cac.gov.cn](https://www.cac.gov.cn/) | _待补_ |

## 监管合规位置

- **中国**：
  - [《生成式 AI 办法》](/rules/china/generative-ai-interim-measures/) 算法备案 — 通义千问首批备案服务之一
  - [TC260-003-2024](/rules/china/tc260-gen-ai-security-basic-requirements/) 合规
  - 阿里作为**头部企业**参与多份 TC260 标准起草
- **美国**：Qwen 开源模型在美国可自由下载使用；夸克等消费者产品不在美国
- **欧盟**：Qwen 开源模型在欧盟可下载；未来若触发 AI Act 第 53 条（训练数据摘要）义务需应对
- **东南亚 / 中东**：积极出海（Qwen-for-SEA 等本地化版本）

## 公司立场速览

- **开源战略的商业逻辑**：不同于 Anthropic/OpenAI 的"安全优先-闭源"，阿里认为 **开源 + 云服务商业化**更符合中国生态
- **对国家战略的配合**：参与 TC260 标准、支持国家 AI 产业政策
- **产业 AI 导向**：相比消费者 AI，更重视 **ToB（企业）+ 垂直行业**（金融、医疗、制造）应用

## 待补充

- [ ] Qwen 3.5 技术报告详细分析
- [ ] Qwen 系列算法备案历次编号
- [ ] 开源模型在海外的合规影响（特别是 EU AI Act 和美国出口管制）
- [ ] 夸克 AI 在算法推荐规定下的合规实务
- [ ] 与蚂蚁集团 AI（**AntFin LLM**）的分工

## 与 Meta / Mistral 的开源对比

| 维度 | Alibaba Qwen | Meta Llama | Mistral |
| --- | --- | --- | --- |
| 旗舰模型参数 | 397B / 170B active | ~405B | 675B / 41B active |
| License | Apache 2.0 | Llama 3 Community License（有使用限制）| Apache 2.0（部分） |
| 法域 | 中国 | 美国 | 法国（EU） |
| 商业模式 | 云服务 + 订阅 | 广告 + Meta 产品 | API + Mistral Compute |
| 开源模型数量 | 400+ | ~15 | ~20 |
