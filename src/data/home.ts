// Comparative AI 首页数据
// 修改本文件即可更新首页三大区块（议题矩阵 / 更新列表 / 时间线 / 顶部统计）。
// 所有跨站链接应使用 Starlight 的绝对路径（如 /topics/...）。

export type Status = 'live' | 'draft' | 'void';

export interface MatrixCell {
	/** 标题行（一句话状态描述）*/
	headline: string;
	/** 状态灯类型：live=已生效 / draft=草案/诉讼中 / void=真空/自愿 */
	status: Status;
	/** 状态文字，例如 "已生效"、"2025-09 生效"、"自愿采纳" */
	statusLabel: string;
	/** 元信息（右下小字），例如援引的具体规则 */
	meta: string;
	/** 点击跳转到本站哪个页面 */
	href: string;
}

export interface Topic {
	name: string;
	desc: string;
	cn: MatrixCell;
	us: MatrixCell;
	eu: MatrixCell;
}

export interface Update {
	/** YYYY-MM-DD */
	date: string;
	title: string;
	jurisdiction: 'CN' | 'US' | 'EU';
	href: string;
}

export interface TimelineItem {
	/** 任意字符串格式，例如 "2022 · 03" */
	date: string;
	title: string;
	note?: string;
}

export interface Stats {
	jurisdictions: number;
	issues: number;
	rules: string;
	companies: string;
	lastUpdate: string;
}

/** 顶部统计带 */
export const stats: Stats = {
	jurisdictions: 3,
	issues: 4,
	rules: '30+',
	companies: '13',
	lastUpdate: '2026-04-22',
};

/** §I 议题矩阵：四个 v1 议题 × 三辖区 */
export const topics: Topic[] = [
	{
		name: '风险分级',
		desc: '按风险等级划分监管义务的框架',
		cn: {
			headline: '分级分类管理，算法备案双轨',
			status: 'live',
			statusLabel: '已生效',
			meta: '深度合成规定 · 生成式 AI 暂行办法',
			href: '/topics/risk-classification/china/',
		},
		us: {
			headline: 'NIST AI RMF + GenAI Profile',
			status: 'void',
			statusLabel: '自愿采纳',
			meta: '软法框架 · 非强制约束',
			href: '/topics/risk-classification/us/',
		},
		eu: {
			headline: '四级风险金字塔',
			status: 'live',
			statusLabel: '分阶段生效',
			meta: 'AI Act Art. 5–50',
			href: '/topics/risk-classification/eu/',
		},
	},
	{
		name: '生成内容标识',
		desc: '水印与合成标注的披露义务',
		cn: {
			headline: '《标识办法》与 GB 45438 国标',
			status: 'live',
			statusLabel: '2025-09 生效',
			meta: '显式 + 隐式双重强制',
			href: '/topics/content-labeling-provenance/china/',
		},
		us: {
			headline: '无联邦统一要求',
			status: 'void',
			statusLabel: '州法分散',
			meta: 'CA AB 2655 · TX SB 751 等',
			href: '/topics/content-labeling-provenance/us/',
		},
		eu: {
			headline: 'AI Act Art. 50 披露义务',
			status: 'live',
			statusLabel: '2026-08 适用',
			meta: '用户知情 + 机读标识',
			href: '/topics/content-labeling-provenance/eu/',
		},
	},
	{
		name: '数据与训练',
		desc: '训练数据合法性、版权与跨境',
		cn: {
			headline: 'PIPL · DSL · 暂行办法三法叠加',
			status: 'live',
			statusLabel: '数据出境评估',
			meta: '训练语料合法性要求',
			href: '/topics/data-training/china/',
		},
		us: {
			headline: '判例法主导（Fair Use）',
			status: 'draft',
			statusLabel: '诉讼待决',
			meta: 'NYT v. OpenAI 等',
			href: '/topics/data-training/us/',
		},
		eu: {
			headline: 'GPAI Code + 版权披露',
			status: 'live',
			statusLabel: '2025-08 起',
			meta: '尊重 TDM Opt-out',
			href: '/topics/data-training/eu/',
		},
	},
	{
		name: '前沿模型 / GPAI',
		desc: '通用目的 AI 的专门义务',
		cn: {
			headline: 'AI 安全治理框架 2.0',
			status: 'live',
			statusLabel: '2025 发布',
			meta: 'TC260 系列标准配套',
			href: '/topics/frontier-gpai/china/',
		},
		us: {
			headline: 'California SB 53 · 联邦抢占之争',
			status: 'draft',
			statusLabel: 'EO 14365 争议中',
			meta: '州—联邦博弈',
			href: '/topics/frontier-gpai/us/',
		},
		eu: {
			headline: 'GPAI 章 + Code of Practice',
			status: 'live',
			statusLabel: '2025-08 生效',
			meta: '系统性风险模型专章',
			href: '/topics/frontier-gpai/eu/',
		},
	},
];

/** §III 最近更新（倒序） */
export const updates: Update[] = [
	{
		date: '2026-04-18',
		title: '新增《数字虚拟人办法（征求意见稿）》页面与逐条批注',
		jurisdiction: 'CN',
		href: '/rules/china/digital-virtual-human-services-draft/',
	},
	{
		date: '2026-04-10',
		title: 'Texas TRAIGA 与 Colorado AI Act 实施细则对照更新',
		jurisdiction: 'US',
		href: '/subnational/us/',
	},
	{
		date: '2026-03-28',
		title: 'Digital Omnibus Proposal 对 AI Act 的潜在影响分析',
		jurisdiction: 'EU',
		href: '/rules/eu/digital-omnibus-proposal/',
	},
	{
		date: '2026-03-15',
		title: 'Anthropic RSP v3、OpenAI Preparedness Framework 快照更新',
		jurisdiction: 'US',
		href: '/companies/',
	},
	{
		date: '2026-02-22',
		title: '新增《拟人化互动服务办法》页面及其与《标识办法》的衔接分析',
		jurisdiction: 'CN',
		href: '/rules/china/anthropomorphic-interaction-services/',
	},
];

/** §III 侧栏时间线：中国生成式 AI 监管的五年轨迹 */
export const timeline: TimelineItem[] = [
	{
		date: '2022 · 03',
		title: '算法推荐管理规定',
		note: '中国算法治理的起点',
	},
	{
		date: '2023 · 01',
		title: '深度合成管理规定',
	},
	{
		date: '2023 · 08',
		title: '生成式 AI 服务暂行办法',
		note: '全球首部专门规章',
	},
	{
		date: '2025 · 09',
		title: '生成合成内容标识办法',
	},
	{
		date: '2026 · 04',
		title: '拟人化互动服务办法',
	},
	{
		date: '2026 · 04',
		title: '数字虚拟人办法（征求意见稿）',
	},
];
