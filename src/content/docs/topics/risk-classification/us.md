---
title: 美国 — 风险分级
description: 美国联邦层面的"风险管理"vs. 州法层面的"high-risk AI system"分层
sidebar:
  order: 3
  label: 美国
---

## 相关 Rules

| 规则 | 层级 | 与风险分级的关系 |
| --- | --- | --- |
| [NIST AI RMF 1.0](/rules/us/nist-ai-rmf/) (2023) | 技术规范 | 以"风险管理流程"而非分级为主 |
| [EO 14179](/rules/us/eo-14179-removing-barriers-ai/) (2025) | 行政令 | 撤销 EO 14110，改变联邦态势 |
| [Colorado AI Act](/rules/us/colorado-ai-act/) (2026 生效) | 州法 | **美国首部引入"High-Risk AI System"的州法** |
| [NYC LL 144](/rules/us/nyc-local-law-144/) (2023) | 市法 | 就业场景专项 |

## 美国风险分级的三层结构

### 联邦：流程化而非分级化

- **NIST AI RMF** 不分"风险级别"，而是**风险管理流程**（GOVERN/MAP/MEASURE/MANAGE）
- 7 个"可信度特性"（有效可靠、安全、保障、可问责、可解释、隐私、公平）没有强度绑定
- **EO 14110**（拜登）曾引入 10²⁶ FLOP 报告义务，有"前沿模型"分级雏形 → **2025-01 撤销**
- **EO 14179 + AI Action Plan**（2025-07）**明确不再做联邦统一强度分层**

### 州法：向"后果性决策"分层

[Colorado AI Act](/rules/us/colorado-ai-act/) 是首部引入分层的州法：

- **一层"High-Risk"**：用于 8 类后果性决策
- 未细分"不可接受 / 高 / 中 / 低"
- Developer / Deployer 义务对齐 EU AI Act 的部分高风险义务，但**没有禁止清单**

跟进的州（Connecticut、Texas 等）多采用类似"单一高风险层"结构。

### 行业 / 场景专项

- **金融**：SR 11-7 模型风险管理（2011, 银行业）
- **医疗**：FDA SaMD 风险分类（1-4 类）+ 2024 AI/ML 预定变更计划
- **就业**：[NYC LL 144](/rules/us/nyc-local-law-144/) + EEOC 2023 指引
- **CFPB** 对 AI 信贷决策的适用 ECOA / FCRA
- **HUD** 对 AI 选租的适用 FHA

## 关键观察

1. **联邦统一分层缺位**，且 EO 14179 后短期内不会出现
2. **州法分层取最低公约数**（单一"高风险"）：更简单，但与 EU 多层结构不兼容
3. **行业监管机构的分类更精细**，但局限于各自垂直领域
4. **NIST AI RMF 作为"通用标尺"** 在联邦、州法、行业自愿实践中广泛被引

## 与中国 / 欧盟的对比

- **与 EU**：EU 4 级 + GPAI vs. 美国"联邦无分级，州法单一层，行业各自分类"
- **与中国**：中国以备案制事实筛选，美国联邦无类似闸门；州法的 impact assessment 与中国的安全评估功能部分重叠

## 待完善

- [ ] 州法对照表（CO / CT / TX / IL / CA）
- [ ] FDA AI/ML SaMD 四类清单
- [ ] SR 11-7 更新状态（如 2025 重发）
- [ ] Frontier Model Forum / AISI 替代方案分析
