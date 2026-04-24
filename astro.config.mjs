// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import remarkHeadingId from 'remark-heading-id';

// i18n helper: returns a sidebar item fragment with label + translations
const t = (zh, en) => ({ label: zh, translations: { en } });

// https://astro.build/config
// Production deploys to Cloudflare Workers via @astrojs/cloudflare adapter.
// Most pages are pre-rendered; any dynamic routes run on CF Workers edge.
// Keystatic admin UI was removed from production to avoid bundling its
// server runtime; re-enable locally as needed.
export default defineConfig({
	site: 'https://comparativeai.org',
	output: 'static',
	adapter: cloudflare(),
	markdown: {
		remarkPlugins: [remarkHeadingId],
	},
	integrations: [
		react(),
		starlight({
			title: {
				'zh-CN': 'Comparative AI',
				en: 'Comparative AI',
			},
			description: 'AI 治理的跨辖区比较资源 · Hard vs. Soft Law across China, US & EU',
			defaultLocale: 'root',
			locales: {
				root: { label: '中文', lang: 'zh-CN' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/3013038780-design/comparativeai',
				},
			],
			components: {
				Header: './src/components/SiteHeader.astro',
				ThemeSelect: './src/components/Empty.astro',
				SocialIcons: './src/components/Empty.astro',
			},
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			pagination: false,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			sidebar: [
				{
					...t('关于', 'About'),
					items: [
						{ ...t('项目简介', 'Overview'), slug: 'about' },
						{
							...t('方法论', 'Methodology'),
							collapsed: false,
							items: [
								{ ...t('概览', 'Overview'), slug: 'methodology' },
								{ ...t('引用与免责', 'Citation & Disclaimer'), slug: 'methodology/citation-disclaimer' },
							],
						},
					],
				},
				{
					...t('议题比较', 'Topic Comparison'),
					collapsed: false,
					items: [
						{ ...t('议题总览', 'Topics Overview'), slug: 'topics' },
						{
							...t('风险分级', 'Risk Classification'),
							collapsed: true,
							items: [
								{ ...t('概览', 'Overview'), slug: 'topics/risk-classification' },
								{ ...t('🇨🇳 中国', '🇨🇳 China'), slug: 'topics/risk-classification/china' },
								{ ...t('🇺🇸 美国', '🇺🇸 United States'), slug: 'topics/risk-classification/us' },
								{ ...t('🇪🇺 欧盟', '🇪🇺 European Union'), slug: 'topics/risk-classification/eu' },
							],
						},
						{
							...t('前沿模型与 GPAI', 'Frontier Models & GPAI'),
							collapsed: true,
							items: [
								{ ...t('概览', 'Overview'), slug: 'topics/frontier-gpai' },
								{ ...t('🇨🇳 中国', '🇨🇳 China'), slug: 'topics/frontier-gpai/china' },
								{ ...t('🇺🇸 美国', '🇺🇸 United States'), slug: 'topics/frontier-gpai/us' },
								{ ...t('🇪🇺 欧盟', '🇪🇺 European Union'), slug: 'topics/frontier-gpai/eu' },
							],
						},
						{
							...t('数据与训练', 'Data & Training'),
							collapsed: true,
							items: [
								{ ...t('概览', 'Overview'), slug: 'topics/data-training' },
								{ ...t('🇨🇳 中国', '🇨🇳 China'), slug: 'topics/data-training/china' },
								{ ...t('🇺🇸 美国', '🇺🇸 United States'), slug: 'topics/data-training/us' },
								{ ...t('🇪🇺 欧盟', '🇪🇺 European Union'), slug: 'topics/data-training/eu' },
							],
						},
						{
							...t('生成内容标识', 'Content Labeling & Provenance'),
							collapsed: true,
							items: [
								{ ...t('概览', 'Overview'), slug: 'topics/content-labeling-provenance' },
								{ ...t('🇨🇳 中国', '🇨🇳 China'), slug: 'topics/content-labeling-provenance/china' },
								{ ...t('🇺🇸 美国', '🇺🇸 United States'), slug: 'topics/content-labeling-provenance/us' },
								{ ...t('🇪🇺 欧盟', '🇪🇺 European Union'), slug: 'topics/content-labeling-provenance/eu' },
							],
						},
					],
				},
				// 顶层规则：中国按五级位阶手工分组；美/欧用 autogenerate
				{
					...t('顶层规则', 'Top-Level Rules'),
					collapsed: true,
					items: [
						{
							...t('🇨🇳 中国', '🇨🇳 China'),
							collapsed: true,
							items: [
								{ ...t('五级位阶导航', 'Five-Tier Hierarchy'), slug: 'rules/china' },
								{
									...t('① 法律（人大）', '① Laws (NPC)'),
									collapsed: true,
									items: [
										{ ...t('网络安全法 CSL (2017)', 'Cybersecurity Law CSL (2017)'), slug: 'rules/china/cybersecurity-law' },
										{ ...t('数据安全法 DSL (2021)', 'Data Security Law DSL (2021)'), slug: 'rules/china/data-security-law' },
										{ ...t('个人信息保护法 PIPL (2021)', 'Personal Information Protection Law PIPL (2021)'), slug: 'rules/china/personal-info-protection-law' },
									],
								},
								{
									...t('② 行政法规（国务院）', '② Administrative Regulations (State Council)'),
									collapsed: true,
									items: [
										{ ...t('未成年人网络保护条例 (2024)', 'Regulation on Minors Online Protection (2024)'), slug: 'rules/china/minors-internet-protection-regulation' },
									],
								},
								{
									...t('③ 部门规章（部委联合）', '③ Departmental Rules (Joint Ministry)'),
									collapsed: true,
									items: [
										{ ...t('算法推荐规定 (2022)', 'Algorithm Recommendation Provisions (2022)'), slug: 'rules/china/algorithm-recommendation-provisions' },
										{ ...t('深度合成规定 (2023)', 'Deep Synthesis Provisions (2023)'), slug: 'rules/china/deep-synthesis-provisions' },
										{ ...t('生成式 AI 暂行办法 (2023)', 'Generative AI Interim Measures (2023)'), slug: 'rules/china/generative-ai-interim-measures' },
										{ ...t('标识办法 (2025)', 'AI Labeling Measures (2025)'), slug: 'rules/china/biaozhi-banfa' },
										{ ...t('拟人化互动服务办法 (2026)', 'Anthropomorphic Interaction Services Measures (2026)'), slug: 'rules/china/anthropomorphic-interaction-services' },
										{ ...t('数字虚拟人办法（征求意见稿）(2026)', 'Digital Virtual Human Services Measures — Draft (2026)'), slug: 'rules/china/digital-virtual-human-services-draft' },
										{ ...t('科技伦理审查办法 (2023)', 'Sci-Tech Ethics Review Measures (2023)'), slug: 'rules/china/science-tech-ethics-review-measures' },
									],
								},
								{
									...t('④ 规范性文件', '④ Normative Documents'),
									collapsed: true,
									items: [
										{ ...t('新一代 AI 发展规划 (2017)', 'Next-Gen AI Development Plan (2017)'), slug: 'rules/china/new-gen-ai-development-plan' },
										{ ...t('新一代 AI 治理原则 (2019)', 'Next-Gen AI Governance Principles (2019)'), slug: 'rules/china/new-gen-ai-governance-principles' },
										{ ...t('全球 AI 治理倡议 (2023)', 'Global AI Governance Initiative (2023)'), slug: 'rules/china/global-ai-governance-initiative' },
										{ ...t('AI 安全治理框架 1.0/2.0 (2024/2025)', 'AI Safety Governance Framework 1.0/2.0 (2024/2025)'), slug: 'rules/china/ai-safety-governance-framework' },
									],
								},
								{
									...t('⑤ 技术标准', '⑤ Technical Standards'),
									collapsed: true,
									items: [
										{ ...t('TC260-003-2024 生成式 AI 安全要求', 'TC260-003-2024 GenAI Safety Requirements'), slug: 'rules/china/tc260-gen-ai-security-basic-requirements' },
										{ ...t('GB 45438-2025 标识国标', 'GB 45438-2025 AI Content Labeling Standard'), slug: 'rules/china/gb-45438-2025-ai-content-labeling-standard' },
									],
								},
							],
						},
						{
							...t('🇺🇸 美国（联邦）', '🇺🇸 United States (Federal)'),
							collapsed: true,
							items: [
								{ ...t('联邦层级说明（含联邦立法真空）', 'Federal Overview (incl. Legislative Vacuum)'), slug: 'rules/us' },
								{
									...t('① 总统行政令', '① Presidential Executive Orders'),
									collapsed: true,
									items: [
										{ ...t('Trump AI Action Plan + 2025-07 EOs', 'Trump AI Action Plan + July 2025 EOs'), slug: 'rules/us/trump-ai-action-plan' },
										{ ...t('EO 14365 — 州法抢占 (2025-12)', 'EO 14365 — State Law Preemption (Dec 2025)'), slug: 'rules/us/eo-14365-national-ai-framework' },
										{ ...t('EO 14179 — 撤销前任 (2025-01)', 'EO 14179 — Revoking Prior EOs (Jan 2025)'), slug: 'rules/us/eo-14179-removing-barriers-ai' },
										{ ...t('EO 14110 — Biden (2023, 已废)', 'EO 14110 — Biden (2023, revoked)'), slug: 'rules/us/eo-14110-biden-ai' },
									],
								},
								{
									...t('② 软法 / 技术框架', '② Soft Law / Technical Frameworks'),
									collapsed: true,
									items: [
										{ ...t('NIST AI RMF 1.0 + GenAI Profile', 'NIST AI RMF 1.0 + GenAI Profile'), slug: 'rules/us/nist-ai-rmf' },
										{ ...t('OMB M-25-21 / M-25-22 (2025-04)', 'OMB M-25-21 / M-25-22 (Apr 2025)'), slug: 'rules/us/omb-m-25-21-22-federal-ai-use' },
									],
								},
							],
						},
						{
							...t('🇪🇺 欧盟', '🇪🇺 European Union'),
							collapsed: true,
							items: [
								{ ...t('欧盟层级说明', 'EU Overview'), slug: 'rules/eu' },
								{
									...t('① 二级立法（条例 / 指令）', '① Secondary Legislation (Regulations / Directives)'),
									collapsed: true,
									items: [
										{ ...t('AI Act (Reg 2024/1689)', 'AI Act (Reg 2024/1689)'), slug: 'rules/eu/ai-act' },
										{ ...t('GDPR (Reg 2016/679)', 'GDPR (Reg 2016/679)'), slug: 'rules/eu/gdpr' },
										{ ...t('DSA (Reg 2022/2065)', 'DSA (Reg 2022/2065)'), slug: 'rules/eu/dsa' },
										{ ...t('产品责任指令 (2024/2853)', 'Product Liability Directive (2024/2853)'), slug: 'rules/eu/product-liability-directive' },
									],
								},
								{
									...t('③ 软法 · 行为守则与指引', '③ Soft Law · Codes & Guidelines'),
									collapsed: true,
									items: [
										{ ...t('GPAI Code of Practice (2025-07)', 'GPAI Code of Practice (Jul 2025)'), slug: 'rules/eu/gpai-code-of-practice' },
									],
								},
								{
									...t('④ 立法提案（未通过）', '④ Legislative Proposals (Pending)'),
									collapsed: true,
									items: [
										{ ...t('Digital Omnibus Proposal (2025-11)', 'Digital Omnibus Proposal (Nov 2025)'), slug: 'rules/eu/digital-omnibus-proposal' },
									],
								},
							],
						},
					],
				},
				{
					...t('地方层级', 'Subnational Level'),
					collapsed: true,
					items: [
						{ ...t('地方层级总览', 'Subnational Overview'), slug: 'subnational' },
						{
							...t('🇨🇳 中国地方', '🇨🇳 China Subnational'),
							collapsed: true,
							items: [
								{ ...t('概览', 'Overview'), slug: 'subnational/china' },
								{ ...t('深圳 AI 产业促进条例 (2022)', 'Shenzhen AI Industry Promotion Regulation (2022)'), slug: 'subnational/china/shenzhen-ai-industry-promotion' },
							],
						},
						{
							...t('🇺🇸 美国州 / 市', '🇺🇸 US States / Cities'),
							collapsed: true,
							items: [
								{ ...t('概览', 'Overview'), slug: 'subnational/us' },
								{ ...t('Colorado AI Act (2026-06)', 'Colorado AI Act (Jun 2026)'), slug: 'subnational/us/colorado-ai-act' },
								{ ...t('California SB 53 (2026-01)', 'California SB 53 (Jan 2026)'), slug: 'subnational/us/california-sb-53-frontier-ai' },
								{ ...t('Texas TRAIGA (2026-01)', 'Texas TRAIGA (Jan 2026)'), slug: 'subnational/us/texas-traiga' },
								{ ...t('NYC Local Law 144 (2023)', 'NYC Local Law 144 (2023)'), slug: 'subnational/us/nyc-local-law-144' },
							],
						},
						{
							...t('🇪🇺 欧盟成员国', '🇪🇺 EU Member States'),
							collapsed: true,
							items: [
								{ ...t('概览', 'Overview'), slug: 'subnational/eu' },
								{ ...t('Spain AESIA', 'Spain AESIA'), slug: 'subnational/eu/spain-aesia' },
								{ ...t('France CNIL AI', 'France CNIL AI'), slug: 'subnational/eu/france-cnil-ai' },
							],
						},
					],
				},
				{
					...t('公司实践', 'Corporate Practice'),
					collapsed: true,
					items: [
						{ ...t('公司实践总览', 'Corporate Practice Overview'), slug: 'companies' },
						{
							...t('🇺🇸 美国', '🇺🇸 United States'),
							collapsed: true,
							items: [
								{ ...t('— 前沿实验室 —', '— Frontier Labs —'), slug: 'companies' },
								{ label: 'Anthropic', slug: 'companies/anthropic' },
								{ label: 'OpenAI', slug: 'companies/openai' },
								{ label: 'Google DeepMind', slug: 'companies/google-deepmind' },
								{ label: 'xAI', slug: 'companies/xai' },
								{ ...t('— 基础设施 —', '— Infrastructure —'), slug: 'companies' },
								{ label: 'NVIDIA', slug: 'companies/nvidia' },
							],
						},
						{
							...t('🇪🇺 欧盟', '🇪🇺 European Union'),
							collapsed: true,
							items: [
								{ ...t('Mistral AI 🇫🇷', 'Mistral AI 🇫🇷'), slug: 'companies/mistral' },
							],
						},
						{
							...t('🇨🇳 中国', '🇨🇳 China'),
							collapsed: true,
							items: [
								{ ...t('— 平台型巨头 —', '— Platform Giants —'), slug: 'companies' },
								{ ...t('百度 Baidu', 'Baidu 百度'), slug: 'companies/baidu' },
								{ ...t('阿里巴巴 Alibaba', 'Alibaba 阿里巴巴'), slug: 'companies/alibaba' },
								{ ...t('字节跳动 ByteDance', 'ByteDance 字节跳动'), slug: 'companies/bytedance' },
								{ ...t('腾讯 Tencent', 'Tencent 腾讯'), slug: 'companies/tencent' },
								{ ...t('— 创业公司 —', '— Startups —'), slug: 'companies' },
								{ ...t('智谱 ZhipuAI', 'ZhipuAI 智谱'), slug: 'companies/zhipuai' },
								{ ...t('月之暗面 Moonshot', 'Moonshot 月之暗面'), slug: 'companies/moonshot' },
								{ label: 'MiniMax', slug: 'companies/minimax' },
								{ label: 'DeepSeek', slug: 'companies/deepseek' },
							],
						},
					],
				},
				{
					...t('可视化', 'Visualizations'),
					items: [{ ...t('五张图索引', 'All five charts'), slug: 'viz' }],
				},
				{
					...t('参考框架', 'Reference Frameworks'),
					items: [{ ...t('索引', 'Index'), slug: 'reference' }],
				},
				{
					...t('自主实验', 'Experiments'),
					collapsed: true,
					autogenerate: { directory: 'experiments' },
				},
				{
					...t('更新日志', 'Updates'),
					collapsed: true,
					autogenerate: { directory: 'updates' },
				},
			],
		}),
	],
});
