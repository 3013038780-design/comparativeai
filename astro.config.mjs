// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import remarkHeadingId from 'remark-heading-id';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: 'https://comparativeai.org',
	adapter: cloudflare(),
	markdown: {
		remarkPlugins: [remarkHeadingId],
	},
	integrations: [
		react(),
		keystatic(),
		starlight({
			title: 'Comparative AI',
			description: 'AI 治理的跨辖区比较资源 · Hard vs. Soft Law across China, US & EU',
			defaultLocale: 'root',
			locales: {
				root: { label: '中文', lang: 'zh-CN' },
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
					label: '关于',
					items: [
						{ label: '项目简介', slug: 'about' },
						{
							label: '方法论',
							collapsed: false,
							items: [
								{ label: '概览', slug: 'methodology' },
								{ label: '引用与免责', slug: 'methodology/citation-disclaimer' },
							],
						},
					],
				},
				{
					label: '议题比较',
					collapsed: false,
					items: [
						{ label: '议题总览', link: '/topics/' },
						{
							label: '风险分级',
							collapsed: true,
							items: [
								{ label: '概览', link: '/topics/risk-classification/' },
								{ label: '🇨🇳 中国', link: '/topics/risk-classification/china/' },
								{ label: '🇺🇸 美国', link: '/topics/risk-classification/us/' },
								{ label: '🇪🇺 欧盟', link: '/topics/risk-classification/eu/' },
							],
						},
						{
							label: '前沿模型与 GPAI',
							collapsed: true,
							items: [
								{ label: '概览', link: '/topics/frontier-gpai/' },
								{ label: '🇨🇳 中国', link: '/topics/frontier-gpai/china/' },
								{ label: '🇺🇸 美国', link: '/topics/frontier-gpai/us/' },
								{ label: '🇪🇺 欧盟', link: '/topics/frontier-gpai/eu/' },
							],
						},
						{
							label: '数据与训练',
							collapsed: true,
							items: [
								{ label: '概览', link: '/topics/data-training/' },
								{ label: '🇨🇳 中国', link: '/topics/data-training/china/' },
								{ label: '🇺🇸 美国', link: '/topics/data-training/us/' },
								{ label: '🇪🇺 欧盟', link: '/topics/data-training/eu/' },
							],
						},
						{
							label: '生成内容标识',
							collapsed: true,
							items: [
								{ label: '概览', link: '/topics/content-labeling-provenance/' },
								{ label: '🇨🇳 中国', link: '/topics/content-labeling-provenance/china/' },
								{ label: '🇺🇸 美国', link: '/topics/content-labeling-provenance/us/' },
								{ label: '🇪🇺 欧盟', link: '/topics/content-labeling-provenance/eu/' },
							],
						},
					],
				},
				// 顶层规则：中国按五级位阶手工分组；美/欧用 autogenerate
				{
					label: '顶层规则',
					collapsed: true,
					items: [
						{
							label: '🇨🇳 中国',
							collapsed: true,
							items: [
								{ label: '五级位阶导航', link: '/rules/china/' },
								{
									label: '① 法律（人大）',
									collapsed: true,
									items: [
										{ label: '网络安全法 CSL (2017)', link: '/rules/china/cybersecurity-law/' },
										{ label: '数据安全法 DSL (2021)', link: '/rules/china/data-security-law/' },
										{ label: '个人信息保护法 PIPL (2021)', link: '/rules/china/personal-info-protection-law/' },
									],
								},
								{
									label: '② 行政法规（国务院）',
									collapsed: true,
									items: [
										{ label: '未成年人网络保护条例 (2024)', link: '/rules/china/minors-internet-protection-regulation/' },
									],
								},
								{
									label: '③ 部门规章（部委联合）',
									collapsed: true,
									items: [
										{ label: '算法推荐规定 (2022)', link: '/rules/china/algorithm-recommendation-provisions/' },
										{ label: '深度合成规定 (2023)', link: '/rules/china/deep-synthesis-provisions/' },
										{ label: '生成式 AI 暂行办法 (2023)', link: '/rules/china/generative-ai-interim-measures/' },
										{ label: '标识办法 (2025)', link: '/rules/china/biaozhi-banfa/' },
										{ label: '拟人化互动服务办法 (2026)', link: '/rules/china/anthropomorphic-interaction-services/' },
										{ label: '数字虚拟人办法（征求意见稿）(2026)', link: '/rules/china/digital-virtual-human-services-draft/' },
										{ label: '科技伦理审查办法 (2023)', link: '/rules/china/science-tech-ethics-review-measures/' },
									],
								},
								{
									label: '④ 规范性文件',
									collapsed: true,
									items: [
										{ label: '新一代 AI 发展规划 (2017)', link: '/rules/china/new-gen-ai-development-plan/' },
										{ label: '新一代 AI 治理原则 (2019)', link: '/rules/china/new-gen-ai-governance-principles/' },
										{ label: '全球 AI 治理倡议 (2023)', link: '/rules/china/global-ai-governance-initiative/' },
										{ label: 'AI 安全治理框架 1.0/2.0 (2024/2025)', link: '/rules/china/ai-safety-governance-framework/' },
									],
								},
								{
									label: '⑤ 技术标准',
									collapsed: true,
									items: [
										{ label: 'TC260-003-2024 生成式 AI 安全要求', link: '/rules/china/tc260-gen-ai-security-basic-requirements/' },
										{ label: 'GB 45438-2025 标识国标', link: '/rules/china/gb-45438-2025-ai-content-labeling-standard/' },
									],
								},
							],
						},
						{
							label: '🇺🇸 美国（联邦）',
							collapsed: true,
							items: [
								{ label: '联邦层级说明（含联邦立法真空）', link: '/rules/us/' },
								{
									label: '① 总统行政令',
									collapsed: true,
									items: [
										{ label: 'Trump AI Action Plan + 2025-07 EOs', link: '/rules/us/trump-ai-action-plan/' },
										{ label: 'EO 14365 — 州法抢占 (2025-12)', link: '/rules/us/eo-14365-national-ai-framework/' },
										{ label: 'EO 14179 — 撤销前任 (2025-01)', link: '/rules/us/eo-14179-removing-barriers-ai/' },
										{ label: 'EO 14110 — Biden (2023, 已废)', link: '/rules/us/eo-14110-biden-ai/' },
									],
								},
								{
									label: '② 软法 / 技术框架',
									collapsed: true,
									items: [
										{ label: 'NIST AI RMF 1.0 + GenAI Profile', link: '/rules/us/nist-ai-rmf/' },
										{ label: 'OMB M-25-21 / M-25-22 (2025-04)', link: '/rules/us/omb-m-25-21-22-federal-ai-use/' },
									],
								},
							],
						},
						{
							label: '🇪🇺 欧盟',
							collapsed: true,
							items: [
								{ label: '欧盟层级说明', link: '/rules/eu/' },
								{
									label: '① 二级立法（条例 / 指令）',
									collapsed: true,
									items: [
										{ label: 'AI Act (Reg 2024/1689)', link: '/rules/eu/ai-act/' },
										{ label: 'GDPR (Reg 2016/679)', link: '/rules/eu/gdpr/' },
										{ label: 'DSA (Reg 2022/2065)', link: '/rules/eu/dsa/' },
										{ label: '产品责任指令 (2024/2853)', link: '/rules/eu/product-liability-directive/' },
									],
								},
								{
									label: '② 协调标准（hEN）',
									collapsed: true,
									items: [
										// 暂无独立页面：prEN 18286 等待 CEN-CENELEC JTC 21 发布后补
										{ label: '（待补 CEN-CENELEC JTC 21 hEN）', link: '/rules/eu/' },
									],
								},
								{
									label: '③ 软法 · 行为守则与指引',
									collapsed: true,
									items: [
										{ label: 'GPAI Code of Practice (2025-07)', link: '/rules/eu/gpai-code-of-practice/' },
									],
								},
								{
									label: '④ 立法提案（未通过）',
									collapsed: true,
									items: [
										{ label: 'Digital Omnibus Proposal (2025-11)', link: '/rules/eu/digital-omnibus-proposal/' },
									],
								},
							],
						},
					],
				},
				{
					label: '地方层级',
					collapsed: true,
					items: [
						{ label: '地方层级总览', link: '/subnational/' },
						{
							label: '🇨🇳 中国地方',
							collapsed: true,
							items: [
								{ label: '概览', link: '/subnational/china/' },
								{ label: '深圳 AI 产业促进条例 (2022)', link: '/subnational/china/shenzhen-ai-industry-promotion/' },
							],
						},
						{
							label: '🇺🇸 美国州 / 市',
							collapsed: true,
							items: [
								{ label: '概览', link: '/subnational/us/' },
								{ label: 'Colorado AI Act (2026-06)', link: '/subnational/us/colorado-ai-act/' },
								{ label: 'California SB 53 (2026-01)', link: '/subnational/us/california-sb-53-frontier-ai/' },
								{ label: 'Texas TRAIGA (2026-01)', link: '/subnational/us/texas-traiga/' },
								{ label: 'NYC Local Law 144 (2023)', link: '/subnational/us/nyc-local-law-144/' },
							],
						},
						{
							label: '🇪🇺 欧盟成员国',
							collapsed: true,
							items: [
								{ label: '概览', link: '/subnational/eu/' },
								{ label: 'Spain AESIA', link: '/subnational/eu/spain-aesia/' },
								{ label: 'France CNIL AI', link: '/subnational/eu/france-cnil-ai/' },
							],
						},
					],
				},
				{
					label: '公司实践',
					collapsed: true,
					items: [
						{ label: '公司实践总览', link: '/companies/' },
						{
							label: '🇺🇸 美国',
							collapsed: true,
							items: [
								{ label: '— 前沿实验室 —', link: '/companies/' },
								{ label: 'Anthropic', link: '/companies/anthropic/' },
								{ label: 'OpenAI', link: '/companies/openai/' },
								{ label: 'Google DeepMind', link: '/companies/google-deepmind/' },
								{ label: 'xAI', link: '/companies/xai/' },
								{ label: '— 基础设施 —', link: '/companies/' },
								{ label: 'NVIDIA', link: '/companies/nvidia/' },
							],
						},
						{
							label: '🇪🇺 欧盟',
							collapsed: true,
							items: [
								{ label: 'Mistral AI 🇫🇷', link: '/companies/mistral/' },
							],
						},
						{
							label: '🇨🇳 中国',
							collapsed: true,
							items: [
								{ label: '— 平台型巨头 —', link: '/companies/' },
								{ label: '百度 Baidu', link: '/companies/baidu/' },
								{ label: '阿里巴巴 Alibaba', link: '/companies/alibaba/' },
								{ label: '字节跳动 ByteDance', link: '/companies/bytedance/' },
								{ label: '腾讯 Tencent', link: '/companies/tencent/' },
								{ label: '— 创业公司 —', link: '/companies/' },
								{ label: '智谱 ZhipuAI', link: '/companies/zhipuai/' },
								{ label: '月之暗面 Moonshot', link: '/companies/moonshot/' },
								{ label: 'MiniMax', link: '/companies/minimax/' },
								{ label: 'DeepSeek', link: '/companies/deepseek/' },
							],
						},
					],
				},
				{
					label: '参考框架',
					items: [{ label: '索引', slug: 'reference' }],
				},
				{
					label: '自主实验',
					collapsed: true,
					autogenerate: { directory: 'experiments' },
				},
				{
					label: '更新日志',
					collapsed: true,
					autogenerate: { directory: 'updates' },
				},
			],
		}),
	],
});