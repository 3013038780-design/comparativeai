---
title: 自主实验
description: 基于公开资料可复现的实证与半实证研究——本站的原创贡献所在
sidebar:
  order: 1
---

## 定位

Experiments 是本站的**原创贡献**所在：基于公开信息（法规、判决书、平台公告、模型 API）做可复核的
实证或半实证研究。定位上与 Stanford CRFM / FMTI、Stanford HAI *AI Index*、MIT *Science of AI Policy*
同构——用数据与可复现的分析，检验"AI 治理"语境下的具体可证伪命题。

## 设计原则

- **小切口**：每个实验聚焦一个可检验的具体问题，避免"综述式"泛论
- **可复现**：数据集、提示词、代码与运行环境尽可能公开；注明版权与许可
- **承认局限**：样本偏差、访问门槛、语言限制、模型版本漂移都显式列出
- **学界接轨**：每个实验的方法论章节对标同领域的一篇学术参照（如 Bommasani et al. FMTI、
  Bang et al. *Multitask, Multilingual, Multimodal Evaluation of ChatGPT*、
  Sun et al. *TrustLLM*、Kapoor et al. *AI Snake Oil* 方法论附录等）

## 规划中的第一批实验方向

1. **中美欧生成式 AI 服务备案 / 披露材料的结构化对比**
   以 CAC 算法备案清单（公开部分）+ AI Act Art 53 训练摘要 + SB 53 Frontier Compliance Report
   三组文档为样本，用统一字段表提取"合规颗粒度"。假设：**中国披露最少但最一致，EU 披露最多但异质，
   US 介于两者之间**。
2. **AI Act GPAI Code of Practice 签署情况追踪**
   按季度抓取签署方名单，追踪异议条款与后续修改；对照该公司在加州 SB 53 / 中国备案上的
   并行合规姿态。假设：**签 GPAI CoP 的公司在加州 SB 53 披露质量也更高**（正相关合规姿态）。
3. **主流大模型对"合成内容标识"相关提示的合规响应率测试**
   使用 200+ 条提示（涉及图像 / 视频 / 音频 / 文本标识请求），测试 Claude 4.7、GPT-5.1、Gemini 3 Pro、
   Grok 4、豆包、Qwen 3、DeepSeek V3.1 等对"嵌入 C2PA 元数据"、"生成声明式标注"、"隐式水印"的
   响应率。假设：**中国模型对"嵌入 GB 45438"响应率更高，美欧模型对"C2PA"更响应**。
4. **Anthropic RSP v3 / OpenAI Preparedness v2 / DeepMind FSF v3 的条款级 diff**
   以 markdown diff 形式复现三份框架在 2023 → 2026 Q1 间的逐版本变化，建立"自律框架演化"数据集。
   假设：**三家在 2025-2026 同步经历"松动"——pause 撤销、阈值简化、军事 carveout 扩大——
   这不是孤立事件而是系统性回归**。

## 发布节奏

- 实验按**独立编号**发布（E01、E02 …），每篇含方法论、数据、代码、局限与同行评议意见。
- 预计 2026-Q3 发布首批两个实验（方向 1 与方向 2）。
- 后续实验进度会在 [更新日志](/zh/updates/) 同步。
