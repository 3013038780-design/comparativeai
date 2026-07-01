---
title: 美国 — 数据与训练
description: 美国对训练数据的 "无联邦隐私法 + 州法拼图 + fair use 争议" 现状
sidebar:
  order: 3
  label: 美国
---

## 相关规则

| 规则 | 与训练数据的关系 |
| --- | --- |
| CCPA/CPRA (California) | 州隐私法，AI 训练数据的个人信息义务 |
| COPPA (联邦) | 13 岁以下儿童数据 |
| Section 230 | 用户生成内容平台的责任边界 |
| [NIST AI RMF + GenAI Profile](/zh/rules/us/nist-ai-rmf/) | 数据治理自愿实践 |

## 三层碎片化格局

### 联邦层的空白

美国至今**无联邦综合隐私法**。对训练数据的联邦层触点：

- **COPPA**：13 岁以下儿童数据单独保护
- **HIPAA**：医疗数据（对医疗 AI 训练数据直接相关）
- **GLBA**：金融信息
- **FERPA**：教育记录
- **FCRA / ECOA**：信贷决策用数据

**行业特定** + **未成年人特定**，但**通用训练数据**无联邦框架。

### 州法拼图

- **California (CCPA/CPRA)**：2020 起，**自动化决策权利**（2025 加州 ADMT 规则生效）
- **Virginia、Colorado、Utah、Connecticut、Texas、Oregon** 等州：GDPR-style 隐私法
- **Illinois BIPA**：生物特征法，对人脸训练数据有极强约束
- **Washington My Health My Data**：健康数据扩展
- **Tennessee ELVIS Act**：声音克隆数据

到 2026-04 已有 **20+ 州**通过综合隐私法，细节各异。

### 版权 / Fair Use

训练数据的版权问题是 2023-2026 美国最激烈的 AI 法律辩论：

- **2023 NYT v. OpenAI / Microsoft**：版权训练诉讼，2026 持续进行
- **Bartz v. Anthropic / Kadrey v. Meta / Tremblay v. OpenAI**：多起诉讼
- **Andersen v. Stability AI**：文生图版权
- **Thaler v. Perlmutter**：AI 生成作品的版权归属

**Fair Use** 是美国特色抗辩，其"变革性使用"（transformative use）标准对 LLM 训练的适用尚在形成。

## 特殊问题

### 1. "公开可获取"的合法性

- 美国法对"公开可获取"数据的抓取宽容度**高于** EU 和中国
- hiQ Labs v. LinkedIn（2019/2022）对 Computer Fraud and Abuse Act 的解读
- 但 TOS（服务条款）违反仍可被起诉

### 2. 儿童数据

- COPPA：13 岁以下单独同意
- 加州、纽约等州：扩展至 18 岁以下
- 训练数据**含未成年人面孔 / 声音**的风险：BIPA / COPPA 叠加

### 3. 生物识别（尤其 Illinois BIPA）

- Illinois BIPA 对人脸训练数据的诉讼量激增
- Clearview AI 案例是典型
- **BIPA 允许私人诉权**，每次违法最高 $5,000

### 4. 合成数据 & 去标识化

- 无专门合成数据规则
- 去标识化：HIPAA 有明确标准（Safe Harbor / Expert Determination）；其他领域模糊

## 与中国 / 欧盟的对比

- **联邦层面**：中国和 EU 都有完整数据保护法；美国**没有**
- **可预测性**：美国**最低**（州法各异 + fair use 诉讼未定）
- **执法**：美国主要靠**私人诉讼**（BIPA、版权、TCPA 等）；中国靠 CAC 执法；EU 靠 DPA
- **训练数据摘要**：EU 强制；美国无；中国无（备案材料非公开）
