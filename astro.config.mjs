// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	site: 'https://comparativeai.org',
	adapter: node({ mode: 'standalone' }),
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
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			pagination: false,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			sidebar: [
				{
					label: '关于 About',
					items: [
						{ label: '项目简介 Introduction', slug: 'about' },
						{
							label: '方法论 Methodology',
							collapsed: false,
							items: [
								{ label: '概览', slug: 'methodology' },
								{ label: '引用与免责', slug: 'methodology/citation-disclaimer' },
							],
						},
					],
				},
				// Topics / Rules / Subnational / Companies 都用 autogenerate：
				// 每个子目录自动生成嵌套组，添加新页面（如新议题的中国/美国/欧盟页，
				// 或新规则、新地方页、新公司材料）后 sidebar 会自动反映，无需改本文件。
				{
					label: '议题比较 Topics',
					collapsed: false,
					autogenerate: { directory: 'topics', collapsed: false },
				},
				{
					label: '顶层规则 Rules',
					collapsed: true,
					autogenerate: { directory: 'rules', collapsed: true },
				},
				{
					label: '地方层级 Subnational',
					collapsed: true,
					autogenerate: { directory: 'subnational', collapsed: true },
				},
				{
					label: '公司实践 Corporate',
					collapsed: true,
					autogenerate: { directory: 'companies', collapsed: true },
				},
				{
					label: '参考框架 Reference',
					items: [{ label: '索引', slug: 'reference' }],
				},
				{
					label: '自主实验 Experiments',
					collapsed: true,
					autogenerate: { directory: 'experiments' },
				},
				{
					label: '更新日志 Updates',
					collapsed: true,
					autogenerate: { directory: 'updates' },
				},
			],
		}),
	],
});
