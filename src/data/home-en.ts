// Comparative AI — English homepage data (mirrors src/data/home.ts).
// All cross-site links use /en/ prefixed absolute paths.

import type { Topic, Update, TimelineItem, Stats } from './home';

/** Top stats strip */
export const stats: Stats = {
	jurisdictions: 3,
	issues: 4,
	rules: '30+',
	companies: '13',
	lastUpdate: '2026-04-22',
};

/** §I Issue matrix: 4 v1 topics × 3 jurisdictions */
export const topics: Topic[] = [
	{
		name: 'Risk Classification',
		desc: 'Frameworks that bind regulatory duties to tiered risk levels',
		cn: {
			headline: 'Graded & classified management; dual-track algorithm filing',
			status: 'live',
			statusLabel: 'In force',
			meta: 'Deep Synthesis Provisions · GenAI Interim Measures',
			href: '/en/topics/risk-classification/china/',
		},
		us: {
			headline: 'NIST AI RMF + GenAI Profile',
			status: 'void',
			statusLabel: 'Voluntary',
			meta: 'Soft-law framework · non-binding',
			href: '/en/topics/risk-classification/us/',
		},
		eu: {
			headline: 'Four-tier risk pyramid',
			status: 'live',
			statusLabel: 'Phased application',
			meta: 'AI Act Art. 5–50',
			href: '/en/topics/risk-classification/eu/',
		},
	},
	{
		name: 'Content Labeling & Provenance',
		desc: 'Watermark and synthesis-disclosure obligations',
		cn: {
			headline: 'AI Labeling Measures + GB 45438 national standard',
			status: 'live',
			statusLabel: 'Sep 2025 in force',
			meta: 'Explicit + implicit dual mandate',
			href: '/en/topics/content-labeling-provenance/china/',
		},
		us: {
			headline: 'No unified federal requirement',
			status: 'void',
			statusLabel: 'State-level patchwork',
			meta: 'CA AB 2655 · TX SB 751 et al.',
			href: '/en/topics/content-labeling-provenance/us/',
		},
		eu: {
			headline: 'AI Act Art. 50 disclosure duty',
			status: 'live',
			statusLabel: 'Aug 2026 applicable',
			meta: 'User-facing + machine-readable',
			href: '/en/topics/content-labeling-provenance/eu/',
		},
	},
	{
		name: 'Data & Training',
		desc: 'Training-data legality, copyright, and cross-border flows',
		cn: {
			headline: 'PIPL · DSL · Interim Measures layered',
			status: 'live',
			statusLabel: 'Data-export review',
			meta: 'Training-corpus legality requirements',
			href: '/en/topics/data-training/china/',
		},
		us: {
			headline: 'Case-law driven (Fair Use)',
			status: 'draft',
			statusLabel: 'Litigation pending',
			meta: 'NYT v. OpenAI et al.',
			href: '/en/topics/data-training/us/',
		},
		eu: {
			headline: 'GPAI Code + copyright disclosure',
			status: 'live',
			statusLabel: 'From Aug 2025',
			meta: 'Respects TDM opt-out',
			href: '/en/topics/data-training/eu/',
		},
	},
	{
		name: 'Frontier Models / GPAI',
		desc: 'Dedicated obligations for general-purpose AI',
		cn: {
			headline: 'AI Safety Governance Framework 2.0',
			status: 'live',
			statusLabel: 'Released 2025',
			meta: 'TC260 standards series',
			href: '/en/topics/frontier-gpai/china/',
		},
		us: {
			headline: 'California SB 53 · federal preemption dispute',
			status: 'draft',
			statusLabel: 'EO 14365 contested',
			meta: 'State–federal standoff',
			href: '/en/topics/frontier-gpai/us/',
		},
		eu: {
			headline: 'GPAI chapter + Code of Practice',
			status: 'live',
			statusLabel: 'Aug 2025 in force',
			meta: 'Systemic-risk model chapter',
			href: '/en/topics/frontier-gpai/eu/',
		},
	},
];

/** §III Recent dispatches (reverse chronological) */
export const updates: Update[] = [
	{
		date: '2026-04-18',
		title: 'New page — Digital Virtual Human Services Measures (Draft) with article-level annotations',
		jurisdiction: 'CN',
		href: '/en/rules/china/digital-virtual-human-services-draft/',
	},
	{
		date: '2026-04-10',
		title: 'Texas TRAIGA & Colorado AI Act — implementing-rules comparison update',
		jurisdiction: 'US',
		href: '/en/subnational/us/',
	},
	{
		date: '2026-03-28',
		title: 'Digital Omnibus Proposal — potential impact on the AI Act',
		jurisdiction: 'EU',
		href: '/en/rules/eu/digital-omnibus-proposal/',
	},
	{
		date: '2026-03-15',
		title: 'Anthropic RSP v3 & OpenAI Preparedness Framework — snapshot update',
		jurisdiction: 'US',
		href: '/en/companies/',
	},
	{
		date: '2026-02-22',
		title: 'New page — Anthropomorphic Interaction Services Measures; alignment with the Labeling Measures',
		jurisdiction: 'CN',
		href: '/en/rules/china/anthropomorphic-interaction-services/',
	},
];

/** §III Sidebar timeline: the five-year arc of China's GenAI regulation */
export const timeline: TimelineItem[] = [
	{
		date: '2022 · 03',
		title: 'Algorithm Recommendation Provisions',
		note: 'Origin of China\'s algorithm governance',
	},
	{
		date: '2023 · 01',
		title: 'Deep Synthesis Provisions',
	},
	{
		date: '2023 · 08',
		title: 'Generative AI Interim Measures',
		note: 'World\'s first dedicated GenAI rule',
	},
	{
		date: '2025 · 09',
		title: 'AI Content Labeling Measures',
	},
	{
		date: '2026 · 04',
		title: 'Anthropomorphic Interaction Services Measures',
	},
	{
		date: '2026 · 04',
		title: 'Digital Virtual Human Services Measures (Draft)',
	},
];
