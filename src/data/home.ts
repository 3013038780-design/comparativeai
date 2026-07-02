// Comparative AI 首页数据
// 修改本文件即可更新首页三大区块（议题矩阵 / 更新列表 / 时间线 / 顶部统计）。
// 所有跨站链接应使用 Starlight 的绝对路径（如 /zh/topics/...）。

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
	lastUpdate: '2026-06-28',
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
			href: '/zh/topics/risk-classification/china/',
		},
		us: {
			headline: 'NIST AI RMF + GenAI Profile',
			status: 'void',
			statusLabel: '自愿采纳',
			meta: '软法框架 · 非强制约束',
			href: '/zh/topics/risk-classification/us/',
		},
		eu: {
			headline: '四级风险金字塔',
			status: 'live',
			statusLabel: '分阶段生效',
			meta: 'AI Act Art. 5–50',
			href: '/zh/topics/risk-classification/eu/',
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
			href: '/zh/topics/content-labeling-provenance/china/',
		},
		us: {
			headline: '无联邦统一要求',
			status: 'void',
			statusLabel: '州法分散',
			meta: 'CA AB 2655 · TX SB 751 等',
			href: '/zh/topics/content-labeling-provenance/us/',
		},
		eu: {
			headline: 'AI Act Art. 50 披露义务',
			status: 'live',
			statusLabel: '2026-08 适用',
			meta: '用户知情 + 机读标识',
			href: '/zh/topics/content-labeling-provenance/eu/',
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
			href: '/zh/topics/data-training/china/',
		},
		us: {
			headline: '判例法主导（Fair Use）',
			status: 'draft',
			statusLabel: '诉讼待决',
			meta: 'NYT v. OpenAI 等',
			href: '/zh/topics/data-training/us/',
		},
		eu: {
			headline: 'GPAI Code + 版权披露',
			status: 'live',
			statusLabel: '2025-08 起',
			meta: '尊重 TDM Opt-out',
			href: '/zh/topics/data-training/eu/',
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
			href: '/zh/topics/frontier-gpai/china/',
		},
		us: {
			headline: 'EO 14409 · California SB 53',
			status: 'draft',
			statusLabel: '联邦自愿机制',
			meta: '网络能力评测 + 预发布访问',
			href: '/zh/topics/frontier-gpai/us/',
		},
		eu: {
			headline: 'GPAI 章 + Code of Practice',
			status: 'live',
			statusLabel: '2025-08 生效',
			meta: '系统性风险模型专章',
			href: '/zh/topics/frontier-gpai/eu/',
		},
	},
];

/** §III 最近更新（倒序） */
export const updates: Update[] = [
	{
		date: '2026-06-28',
		title: '完成全站一手来源核验；英文版本改为默认入口',
		jurisdiction: 'US',
		href: '/zh/updates/',
	},
	{
		date: '2026-06-18',
		title: 'Google DeepMind AI Control Roadmap 纳入公司安全快照',
		jurisdiction: 'US',
		href: '/zh/companies/google-deepmind/safety-framework/',
	},
	{
		date: '2026-06-10',
		title: '欧盟发布最终版 AI 生成内容透明度行为守则',
		jurisdiction: 'EU',
		href: '/zh/rules/eu/synthetic-content-code/',
	},
	{
		date: '2026-06-02',
		title: 'EO 14409 建立自愿前沿模型网络安全接口',
		jurisdiction: 'US',
		href: '/zh/rules/us/eo-14409-frontier-ai-cybersecurity/',
	},
	{
		date: '2026-05-19',
		title: 'TC260-005《人工智能应用伦理安全指引 1.0》发布',
		jurisdiction: 'CN',
		href: '/zh/rules/china/tc260-005-ai-ethics-safety-guidelines/',
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
