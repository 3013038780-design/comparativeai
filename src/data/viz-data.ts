// Shared data for the /viz/ visualizations.
// Each dataset is language-neutral where possible; bilingual strings are
// provided as {zh, en} objects so a single source of truth powers both locales.

export type Bi = { zh: string; en: string };

// =============================================================
// A. Timeline — Chinese regulation evolution 2017 → 2026
// =============================================================

export interface TimelineNode {
	id: string;
	date: string;          // YYYY-MM-DD (effective date or milestone)
	tier: 1 | 2 | 3 | 4 | 5; // 中国五级位阶
	title: Bi;
	kind: Bi;              // 法律 / 行政法规 / 部门规章 / ...
	summary: Bi;           // 一句话摘要（< 60 字）
	topics: Array<'risk' | 'gpai' | 'data' | 'labeling' | 'minors' | 'ethics' | 'strategy'>;
	href: string;          // canonical English link; /zh prefix added for the Chinese locale
}

export const cnTimeline: TimelineNode[] = [
	{
		id: 'new-gen-ai-dev-plan',
		date: '2017-07-20',
		tier: 4,
		title: { zh: '新一代 AI 发展规划', en: 'Next-Generation AI Development Plan' },
		kind: { zh: '规范性文件·国务院', en: 'Normative doc · State Council' },
		summary: { zh: '国发〔2017〕35 号，中国 AI 战略顶层设计起点。', en: 'The origin of China\'s national AI strategy.' },
		topics: ['strategy'],
		href: '/rules/china/new-gen-ai-development-plan/',
	},
	{
		id: 'csl',
		date: '2017-06-01',
		tier: 1,
		title: { zh: '网络安全法 CSL', en: 'Cybersecurity Law (CSL)' },
		kind: { zh: '法律·全国人大常委会', en: 'Law · NPC-SC' },
		summary: { zh: '中国首部网络安全基本法，为后续 AI 规则奠基。', en: 'China\'s foundational cybersecurity statute; underlies later AI rules.' },
		topics: ['data'],
		href: '/rules/china/cybersecurity-law/',
	},
	{
		id: 'new-gen-ai-governance-principles',
		date: '2019-06-17',
		tier: 4,
		title: { zh: '新一代 AI 治理原则', en: 'Next-Generation AI Governance Principles' },
		kind: { zh: '规范性文件·专委会', en: 'Normative doc · AI Committee' },
		summary: { zh: '首次官方提出"敏捷治理"作为范式。', en: 'First official articulation of "agile governance" as a paradigm.' },
		topics: ['ethics', 'strategy'],
		href: '/rules/china/new-gen-ai-governance-principles/',
	},
	{
		id: 'dsl',
		date: '2021-09-01',
		tier: 1,
		title: { zh: '数据安全法 DSL', en: 'Data Security Law (DSL)' },
		kind: { zh: '法律·全国人大常委会', en: 'Law · NPC-SC' },
		summary: { zh: '确立数据分类分级 + 跨境评估框架。', en: 'Establishes data classification + cross-border review framework.' },
		topics: ['data'],
		href: '/rules/china/data-security-law/',
	},
	{
		id: 'pipl',
		date: '2021-11-01',
		tier: 1,
		title: { zh: '个人信息保护法 PIPL', en: 'Personal Information Protection Law (PIPL)' },
		kind: { zh: '法律·全国人大常委会', en: 'Law · NPC-SC' },
		summary: { zh: '中国版 GDPR，含自动化决策与去标识化条款。', en: 'China\'s GDPR-equivalent; includes automated-decision and de-identification clauses.' },
		topics: ['data'],
		href: '/rules/china/personal-info-protection-law/',
	},
	{
		id: 'algo-recommendation',
		date: '2022-03-01',
		tier: 3,
		title: { zh: '算法推荐管理规定', en: 'Algorithm Recommendation Provisions' },
		kind: { zh: '部门规章·网信办等四部门联合', en: 'Dept rule · CAC + 3 ministries' },
		summary: { zh: '中国算法治理的起点；引入"算法备案"制度。', en: 'The starting point of China\'s algorithm governance; introduces algorithm filing.' },
		topics: ['risk', 'labeling'],
		href: '/rules/china/algorithm-recommendation-provisions/',
	},
	{
		id: 'deep-synthesis',
		date: '2023-01-10',
		tier: 3,
		title: { zh: '深度合成管理规定', en: 'Deep Synthesis Provisions' },
		kind: { zh: '部门规章·网信办等三部门联合', en: 'Dept rule · CAC + 2 ministries' },
		summary: { zh: '全球最早专门规制 deepfake 的行政规章之一。', en: 'Among the world\'s earliest dedicated deepfake regulations.' },
		topics: ['labeling'],
		href: '/rules/china/deep-synthesis-provisions/',
	},
	{
		id: 'gen-ai-interim',
		date: '2023-08-15',
		tier: 3,
		title: { zh: '生成式 AI 暂行办法', en: 'Generative AI Interim Measures' },
		kind: { zh: '部门规章·网信办等七部门联合', en: 'Dept rule · CAC + 6 ministries' },
		summary: { zh: '全球首部针对生成式 AI 服务的专门规章。', en: 'World\'s first regulation dedicated to generative AI services.' },
		topics: ['gpai', 'risk', 'data'],
		href: '/rules/china/generative-ai-interim-measures/',
	},
	{
		id: 'sci-tech-ethics',
		date: '2023-12-01',
		tier: 3,
		title: { zh: '科技伦理审查办法', en: 'Sci-Tech Ethics Review Measures' },
		kind: { zh: '部门规章·科技部牵头十部门联合', en: 'Dept rule · MOST + 9 ministries' },
		summary: { zh: '建立"科技伦理审查 + 复核"双轨；含 AI 清单。', en: 'Establishes dual-track ethics review; includes AI catalog.' },
		topics: ['ethics'],
		href: '/rules/china/science-tech-ethics-review-measures/',
	},
	{
		id: 'minors-protection',
		date: '2024-01-01',
		tier: 2,
		title: { zh: '未成年人网络保护条例', en: 'Regulation on Minors Online Protection' },
		kind: { zh: '行政法规·国务院', en: 'Admin regulation · State Council' },
		summary: { zh: '国务院层级确立未成年人网络模式的法律授权。', en: 'State-Council-level legal basis for the "minors mode" design.' },
		topics: ['minors'],
		href: '/rules/china/minors-internet-protection-regulation/',
	},
	{
		id: 'safety-governance-1',
		date: '2024-09-09',
		tier: 4,
		title: { zh: 'AI 安全治理框架 1.0', en: 'AI Safety Governance Framework 1.0' },
		kind: { zh: '规范性文件·网信办 / TC260', en: 'Normative doc · CAC / TC260' },
		summary: { zh: '从场景化走向体系化治理的标志。', en: 'Mark of the shift from scenario-based to systemic AI governance.' },
		topics: ['risk', 'ethics'],
		href: '/rules/china/ai-safety-governance-framework/',
	},
	{
		id: 'tc260-003',
		date: '2024-03-01',
		tier: 5,
		title: { zh: 'TC260-003-2024 生成式 AI 安全要求', en: 'TC260-003-2024 GenAI Safety Requirements' },
		kind: { zh: '技术标准·TC260', en: 'Technical standard · TC260' },
		summary: { zh: '推荐性但事实强制；备案的技术底本。', en: 'Recommended in name, de-facto mandatory; the technical template for filing.' },
		topics: ['gpai', 'risk', 'data'],
		href: '/rules/china/tc260-gen-ai-security-basic-requirements/',
	},
	{
		id: 'labeling-measures',
		date: '2025-09-01',
		tier: 3,
		title: { zh: '生成合成内容标识办法', en: 'AI Content Labeling Measures' },
		kind: { zh: '部门规章·网信办等四部门联合', en: 'Dept rule · CAC + 3 ministries' },
		summary: { zh: '全球最早落地的强制显式 + 隐式双轨标识制度。', en: 'World\'s earliest mandatory dual-track (explicit + implicit) content-labeling regime.' },
		topics: ['labeling'],
		href: '/rules/china/biaozhi-banfa/',
	},
	{
		id: 'gb-45438',
		date: '2025-09-01',
		tier: 5,
		title: { zh: 'GB 45438-2025 标识国标', en: 'GB 45438-2025 Labeling National Standard' },
		kind: { zh: '技术标准·国家标准（强制）', en: 'Technical standard · national (mandatory)' },
		summary: { zh: '强制性国标，与标识办法同日施行。', en: 'Mandatory national standard; effective the same day as the Labeling Measures.' },
		topics: ['labeling'],
		href: '/rules/china/gb-45438-2025-ai-content-labeling-standard/',
	},
	{
		id: 'safety-governance-2',
		date: '2025-09-15',
		tier: 4,
		title: { zh: 'AI 安全治理框架 2.0', en: 'AI Safety Governance Framework 2.0' },
		kind: { zh: '规范性文件·网信办 / TC260', en: 'Normative doc · CAC / TC260' },
		summary: { zh: '1.0 的扩展版，新增 GPAI + 前沿模型专章。', en: 'Extended 1.0; adds dedicated GPAI + frontier-model chapters.' },
		topics: ['gpai', 'risk'],
		href: '/rules/china/ai-safety-governance-framework/',
	},
	{
		id: 'anthropomorphic',
		date: '2026-07-15',
		tier: 3,
		title: { zh: '拟人化互动服务办法', en: 'Anthropomorphic Interaction Services Measures' },
		kind: { zh: '部门规章·网信办等五部门联合', en: 'Dept rule · CAC + 4 ministries' },
		summary: { zh: '全球首部针对 AI 陪伴 / 虚拟伴侣类服务的专门规章。', en: 'World\'s first regulation dedicated to AI companion / virtual-partner services.' },
		topics: ['risk', 'minors', 'ethics'],
		href: '/rules/china/anthropomorphic-interaction-services/',
	},
	{
		id: 'digital-virtual-human',
		date: '2026-04-03',
		tier: 3,
		title: { zh: '数字虚拟人办法（征求意见稿）', en: 'Digital Virtual Human Services Measures (Draft)' },
		kind: { zh: '部门规章·征求意见稿', en: 'Dept rule · Draft for comment' },
		summary: { zh: '与拟人化办法姐妹规则，覆盖虚拟主播 / 数字员工。', en: 'Sister rule to Anthropomorphic Measures; covers virtual anchors / digital employees.' },
		topics: ['labeling', 'ethics'],
		href: '/rules/china/digital-virtual-human-services-draft/',
	},
];

// =============================================================
// B. Heatmap — legislative density per (year × topic × jurisdiction)
// =============================================================

export type Jurisdiction = 'cn' | 'us' | 'eu';
export type TopicKey = 'risk' | 'gpai' | 'data' | 'labeling';

export const topicLabels: Record<TopicKey, Bi> = {
	risk: { zh: '风险分级', en: 'Risk classification' },
	gpai: { zh: '前沿 / GPAI', en: 'Frontier / GPAI' },
	data: { zh: '数据与训练', en: 'Data & training' },
	labeling: { zh: '内容标识', en: 'Content labeling' },
};

export const jurisdictionLabels: Record<Jurisdiction, Bi> = {
	cn: { zh: '中国', en: 'China' },
	us: { zh: '美国', en: 'United States' },
	eu: { zh: '欧盟', en: 'European Union' },
};

// Rule count per (year, topic, jurisdiction). Years span 2022-2026.
// Counts are an analytical proxy (major primary-source rules touching that topic
// that were enacted / took effect in that year in this corpus) — not exhaustive.
export const heatmap: Record<number, Record<TopicKey, Record<Jurisdiction, number>>> = {
	2022: {
		risk: { cn: 1, us: 0, eu: 0 },     // CN Algorithm Recommendation Provisions
		gpai: { cn: 0, us: 0, eu: 0 },
		data: { cn: 0, us: 0, eu: 0 },
		labeling: { cn: 1, us: 0, eu: 0 }, // CN Algo Rec has labeling hooks
	},
	2023: {
		risk: { cn: 1, us: 1, eu: 0 },     // CN GenAI Interim; US NIST AI RMF 1.0 (Jan)
		gpai: { cn: 1, us: 1, eu: 0 },     // CN GenAI Interim; US Voluntary Commitments / Biden EO
		data: { cn: 1, us: 1, eu: 0 },
		labeling: { cn: 2, us: 0, eu: 0 }, // CN Deep Synthesis + GenAI Interim
	},
	2024: {
		risk: { cn: 1, us: 2, eu: 1 },     // CN Ethics Review / Safety Framework 1.0; US states begin; EU AI Act adopted
		gpai: { cn: 1, us: 1, eu: 1 },     // CN Safety Framework 1.0; US NIST GenAI Profile; EU AI Act
		data: { cn: 0, us: 2, eu: 1 },     // US state privacy; EU AI Act
		labeling: { cn: 0, us: 1, eu: 1 }, // US CA AB 2655 (selected); EU AI Act Art 50
	},
	2025: {
		risk: { cn: 2, us: 2, eu: 1 },     // CN Labeling + Safety Framework 2.0; US Trump EO reset; EU AI Act phase
		gpai: { cn: 2, us: 2, eu: 2 },     // CN Safety 2.0 + TC260-003; US OMB memos, Frontier Forum; EU GPAI obligations + CoP
		data: { cn: 1, us: 1, eu: 1 },     // CN Safety 2.0 data chapter; US state ADMT; EU GPAI CoP copyright chapter
		labeling: { cn: 2, us: 1, eu: 1 }, // CN Labeling Measures + GB 45438; US selected state laws; EU CoP labeling
	},
	2026: {
		risk: { cn: 2, us: 3, eu: 2 },     // CN Anthropomorphic + Virtual Human Draft; US CO + TX + CA state; EU AI Act high-risk phase
		gpai: { cn: 1, us: 1, eu: 1 },     // CN Anthropomorphic; US CA SB 53; EU AI Act GPAI full applicable
		data: { cn: 1, us: 1, eu: 1 },
		labeling: { cn: 2, us: 1, eu: 1 }, // CN continues; US state adjustments; EU AI Act Art 50 applicable
	},
};

// =============================================================
// C. US state AI legislation map
// =============================================================

// 2025 AI legislation activity per US state. Source: NCSL / IAPP state tracker
// synthesis. Values are approximate buckets: 0=none, 1=low, 2=medium, 3=high, 4=very high.
// Used for choropleth coloring. State postal codes.
export interface StateActivity {
	code: string;      // USPS code
	name: string;
	enactedBills: number;    // approx number of AI-related bills enacted in 2024-2025
	totalBills: number;      // approx number of AI-related bills introduced
	bucket: 0 | 1 | 2 | 3 | 4;
	flagshipLaw?: Bi;  // the law we flag for this state, if any
	href?: string;     // site link for the law
}

export const usStates: StateActivity[] = [
	{ code: 'CA', name: 'California', enactedBills: 16, totalBills: 50, bucket: 4,
		flagshipLaw: { zh: 'SB 53 (2026-01)', en: 'SB 53 (Jan 2026)' },
		href: '/subnational/us/california-sb-53-frontier-ai/' },
	{ code: 'CO', name: 'Colorado', enactedBills: 3, totalBills: 12, bucket: 3,
		flagshipLaw: { zh: 'Colorado AI Act (2026-06)', en: 'Colorado AI Act (Jun 2026)' },
		href: '/subnational/us/colorado-ai-act/' },
	{ code: 'TX', name: 'Texas', enactedBills: 5, totalBills: 30, bucket: 4,
		flagshipLaw: { zh: 'TRAIGA HB 149 (2026-01)', en: 'TRAIGA HB 149 (Jan 2026)' },
		href: '/subnational/us/texas-traiga/' },
	{ code: 'NY', name: 'New York', enactedBills: 4, totalBills: 25, bucket: 3,
		flagshipLaw: { zh: 'NYC Local Law 144', en: 'NYC Local Law 144' },
		href: '/subnational/us/nyc-local-law-144/' },
	{ code: 'IL', name: 'Illinois', enactedBills: 3, totalBills: 18, bucket: 3 },
	{ code: 'CT', name: 'Connecticut', enactedBills: 1, totalBills: 6, bucket: 2 },
	{ code: 'VA', name: 'Virginia', enactedBills: 2, totalBills: 10, bucket: 2 },
	{ code: 'WA', name: 'Washington', enactedBills: 2, totalBills: 12, bucket: 2 },
	{ code: 'TN', name: 'Tennessee', enactedBills: 2, totalBills: 8, bucket: 2 },
	{ code: 'MN', name: 'Minnesota', enactedBills: 2, totalBills: 8, bucket: 2 },
	{ code: 'FL', name: 'Florida', enactedBills: 3, totalBills: 18, bucket: 3 },
	{ code: 'MA', name: 'Massachusetts', enactedBills: 2, totalBills: 15, bucket: 2 },
	{ code: 'NJ', name: 'New Jersey', enactedBills: 2, totalBills: 10, bucket: 2 },
	{ code: 'MI', name: 'Michigan', enactedBills: 2, totalBills: 8, bucket: 2 },
	{ code: 'OH', name: 'Ohio', enactedBills: 1, totalBills: 6, bucket: 1 },
	{ code: 'GA', name: 'Georgia', enactedBills: 1, totalBills: 5, bucket: 1 },
	{ code: 'NC', name: 'North Carolina', enactedBills: 1, totalBills: 6, bucket: 1 },
	{ code: 'PA', name: 'Pennsylvania', enactedBills: 1, totalBills: 8, bucket: 1 },
	{ code: 'MD', name: 'Maryland', enactedBills: 2, totalBills: 8, bucket: 2 },
	{ code: 'OR', name: 'Oregon', enactedBills: 1, totalBills: 6, bucket: 1 },
	{ code: 'UT', name: 'Utah', enactedBills: 2, totalBills: 8, bucket: 2 },
	{ code: 'NV', name: 'Nevada', enactedBills: 1, totalBills: 4, bucket: 1 },
	{ code: 'AZ', name: 'Arizona', enactedBills: 1, totalBills: 5, bucket: 1 },
	{ code: 'IN', name: 'Indiana', enactedBills: 1, totalBills: 4, bucket: 1 },
	{ code: 'WI', name: 'Wisconsin', enactedBills: 1, totalBills: 4, bucket: 1 },
	{ code: 'MO', name: 'Missouri', enactedBills: 1, totalBills: 4, bucket: 1 },
	{ code: 'LA', name: 'Louisiana', enactedBills: 1, totalBills: 3, bucket: 1 },
	{ code: 'OK', name: 'Oklahoma', enactedBills: 1, totalBills: 3, bucket: 1 },
	{ code: 'AR', name: 'Arkansas', enactedBills: 1, totalBills: 2, bucket: 1 },
	{ code: 'AL', name: 'Alabama', enactedBills: 0, totalBills: 2, bucket: 1 },
	{ code: 'MS', name: 'Mississippi', enactedBills: 0, totalBills: 2, bucket: 1 },
	{ code: 'SC', name: 'South Carolina', enactedBills: 0, totalBills: 3, bucket: 1 },
	{ code: 'KY', name: 'Kentucky', enactedBills: 0, totalBills: 2, bucket: 1 },
	{ code: 'WV', name: 'West Virginia', enactedBills: 0, totalBills: 1, bucket: 0 },
	{ code: 'IA', name: 'Iowa', enactedBills: 0, totalBills: 3, bucket: 1 },
	{ code: 'KS', name: 'Kansas', enactedBills: 0, totalBills: 2, bucket: 1 },
	{ code: 'NE', name: 'Nebraska', enactedBills: 0, totalBills: 2, bucket: 1 },
	{ code: 'ND', name: 'North Dakota', enactedBills: 0, totalBills: 1, bucket: 0 },
	{ code: 'SD', name: 'South Dakota', enactedBills: 0, totalBills: 1, bucket: 0 },
	{ code: 'MT', name: 'Montana', enactedBills: 0, totalBills: 1, bucket: 0 },
	{ code: 'WY', name: 'Wyoming', enactedBills: 0, totalBills: 1, bucket: 0 },
	{ code: 'ID', name: 'Idaho', enactedBills: 0, totalBills: 1, bucket: 0 },
	{ code: 'NM', name: 'New Mexico', enactedBills: 0, totalBills: 3, bucket: 1 },
	{ code: 'CO', name: 'Colorado', enactedBills: 3, totalBills: 12, bucket: 3 },
	{ code: 'ME', name: 'Maine', enactedBills: 1, totalBills: 4, bucket: 1 },
	{ code: 'NH', name: 'New Hampshire', enactedBills: 0, totalBills: 2, bucket: 1 },
	{ code: 'VT', name: 'Vermont', enactedBills: 1, totalBills: 3, bucket: 1 },
	{ code: 'RI', name: 'Rhode Island', enactedBills: 0, totalBills: 2, bucket: 1 },
	{ code: 'DE', name: 'Delaware', enactedBills: 0, totalBills: 2, bucket: 1 },
	{ code: 'HI', name: 'Hawaii', enactedBills: 0, totalBills: 2, bucket: 1 },
	{ code: 'AK', name: 'Alaska', enactedBills: 0, totalBills: 0, bucket: 0 },
	{ code: 'DC', name: 'District of Columbia', enactedBills: 1, totalBills: 3, bucket: 1 },
];

// =============================================================
// D. EU risk pyramid — 4 tiers
// =============================================================

export interface PyramidTier {
	id: string;
	level: 1 | 2 | 3 | 4;  // 1 = top (most restrictive)
	label: Bi;
	definition: Bi;
	articles: string;
	examples: Bi;
	appliedSince: string;
}

export const euPyramid: PyramidTier[] = [
	{
		id: 'unacceptable',
		level: 1,
		label: { zh: '禁止类 · Unacceptable Risk', en: 'Unacceptable Risk' },
		definition: { zh: '被直接禁止的 AI 用途，违反欧盟价值观或基本权利。', en: 'AI uses outright prohibited as contrary to EU values or fundamental rights.' },
		articles: 'AI Act Art. 5',
		examples: { zh: '社会评分、剥削脆弱性、情绪识别（工作场所 / 教育）、实时公共空间远程生物识别（原则禁止）', en: 'Social scoring; exploiting vulnerabilities; emotion recognition (workplace/education); real-time remote biometric ID in public spaces (principally prohibited)' },
		appliedSince: '2025-02-02',
	},
	{
		id: 'high',
		level: 2,
		label: { zh: '高风险 · High-Risk', en: 'High-Risk' },
		definition: { zh: '附件 III 列举的 8 大类场景；须通过合格评定、数据治理、人类监督等义务。', en: 'The eight categories listed in Annex III; must meet conformity assessment, data governance, human oversight duties.' },
		articles: 'AI Act Art. 6, 16-43 + Annex III',
		examples: { zh: '生物识别 · 关键基础设施 · 教育评分 · 就业筛选 · 基本服务（信贷 / 保险）· 执法 · 移民 · 司法', en: 'Biometric ID · critical infrastructure · education scoring · employment · essential services · law enforcement · migration · judiciary' },
		appliedSince: '2026-08-02',
	},
	{
		id: 'limited',
		level: 3,
		label: { zh: '有限风险 · Limited Risk', en: 'Limited Risk' },
		definition: { zh: '主要是透明度义务：用户需知道是在与 AI 互动 / 观看合成内容。', en: 'Primarily transparency duties: users must know they are interacting with AI or viewing synthetic content.' },
		articles: 'AI Act Art. 50',
		examples: { zh: '聊天机器人 · 情感 / 生物识别类 · Deepfake · AI 生成文本（公共议题信息）', en: 'Chatbots · emotion/biometric categorization · deepfakes · AI-generated text (public-interest content)' },
		appliedSince: '2026-08-02',
	},
	{
		id: 'minimal',
		level: 4,
		label: { zh: '最低风险 · Minimal Risk', en: 'Minimal Risk' },
		definition: { zh: '绝大多数 AI 用途，无特定法律义务；鼓励自愿遵守行为准则。', en: 'The vast majority of AI uses; no specific legal obligations; voluntary codes of conduct encouraged.' },
		articles: 'AI Act Art. 95 (voluntary codes)',
		examples: { zh: '垃圾邮件过滤 · 游戏 AI · 库存优化 · 推荐系统（多数场景）', en: 'Spam filters · game AI · inventory optimization · recommendation systems (most cases)' },
		appliedSince: '—',
	},
];

// =============================================================
// E. China 5-tier hierarchy — legal rank pyramid
// =============================================================

export interface HierarchyTier {
	level: 1 | 2 | 3 | 4 | 5;
	label: Bi;
	issuer: Bi;
	form: Bi;          // typical document form
	rules: Array<{ title: Bi; href: string; year: string }>;
}

export const cnHierarchy: HierarchyTier[] = [
	{
		level: 1,
		label: { zh: '法律', en: 'Laws' },
		issuer: { zh: '全国人大 / 常委会', en: 'NPC / Standing Committee' },
		form: { zh: '《…法》', en: '《…Law》' },
		rules: [
			{ title: { zh: '网络安全法 CSL', en: 'Cybersecurity Law' }, href: '/rules/china/cybersecurity-law/', year: '2017' },
			{ title: { zh: '数据安全法 DSL', en: 'Data Security Law' }, href: '/rules/china/data-security-law/', year: '2021' },
			{ title: { zh: '个人信息保护法 PIPL', en: 'Personal Info Protection Law' }, href: '/rules/china/personal-info-protection-law/', year: '2021' },
		],
	},
	{
		level: 2,
		label: { zh: '行政法规', en: 'Administrative Regulations' },
		issuer: { zh: '国务院', en: 'State Council' },
		form: { zh: '《…条例》', en: '《…Regulation》' },
		rules: [
			{ title: { zh: '未成年人网络保护条例', en: 'Regulation on Minors Online Protection' }, href: '/rules/china/minors-internet-protection-regulation/', year: '2024' },
		],
	},
	{
		level: 3,
		label: { zh: '部门规章', en: 'Departmental Rules' },
		issuer: { zh: '国务院各部委 / 多部委联合', en: 'Ministries / Joint Ministries' },
		form: { zh: '《…办法》《…规定》', en: '《…Measures》《…Provisions》' },
		rules: [
			{ title: { zh: '算法推荐规定', en: 'Algorithm Recommendation Provisions' }, href: '/rules/china/algorithm-recommendation-provisions/', year: '2022' },
			{ title: { zh: '深度合成规定', en: 'Deep Synthesis Provisions' }, href: '/rules/china/deep-synthesis-provisions/', year: '2023' },
			{ title: { zh: '生成式 AI 暂行办法', en: 'Generative AI Interim Measures' }, href: '/rules/china/generative-ai-interim-measures/', year: '2023' },
			{ title: { zh: '标识办法', en: 'AI Content Labeling Measures' }, href: '/rules/china/biaozhi-banfa/', year: '2025' },
			{ title: { zh: '拟人化互动服务办法', en: 'Anthropomorphic Interaction Services Measures' }, href: '/rules/china/anthropomorphic-interaction-services/', year: '2026' },
			{ title: { zh: '数字虚拟人办法（征求意见稿）', en: 'Digital Virtual Human Services Measures (Draft)' }, href: '/rules/china/digital-virtual-human-services-draft/', year: '2026' },
			{ title: { zh: '科技伦理审查办法', en: 'Sci-Tech Ethics Review Measures' }, href: '/rules/china/science-tech-ethics-review-measures/', year: '2023' },
		],
	},
	{
		level: 4,
		label: { zh: '规范性文件', en: 'Normative Documents' },
		issuer: { zh: '部委 / 专委会', en: 'Ministries / Committees' },
		form: { zh: '《…规划》《…原则》《…框架》', en: '《…Plan》《…Principles》《…Framework》' },
		rules: [
			{ title: { zh: '新一代 AI 发展规划', en: 'Next-Gen AI Development Plan' }, href: '/rules/china/new-gen-ai-development-plan/', year: '2017' },
			{ title: { zh: '新一代 AI 治理原则', en: 'Next-Gen AI Governance Principles' }, href: '/rules/china/new-gen-ai-governance-principles/', year: '2019' },
			{ title: { zh: '全球 AI 治理倡议', en: 'Global AI Governance Initiative' }, href: '/rules/china/global-ai-governance-initiative/', year: '2023' },
			{ title: { zh: 'AI 安全治理框架 1.0 / 2.0', en: 'AI Safety Governance Framework 1.0 / 2.0' }, href: '/rules/china/ai-safety-governance-framework/', year: '2024/2025' },
		],
	},
	{
		level: 5,
		label: { zh: '技术标准', en: 'Technical Standards' },
		issuer: { zh: 'TC260 · 市监总局', en: 'TC260 · SAMR' },
		form: { zh: 'GB / GB/T / TC260-XXX', en: 'GB / GB/T / TC260-XXX' },
		rules: [
			{ title: { zh: 'TC260-003-2024 生成式 AI 安全要求', en: 'TC260-003-2024 GenAI Safety Requirements' }, href: '/rules/china/tc260-gen-ai-security-basic-requirements/', year: '2024' },
			{ title: { zh: 'GB 45438-2025 标识国标', en: 'GB 45438-2025 Labeling Standard' }, href: '/rules/china/gb-45438-2025-ai-content-labeling-standard/', year: '2025' },
		],
	},
];
