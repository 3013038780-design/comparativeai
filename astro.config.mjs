// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.org',
	adapter: node({ mode: 'standalone' }),
	integrations: [
		react(),
		keystatic(),
		starlight({
			title: 'AI Policy Atlas',
			description: '中国、美国、欧盟 AI 治理比较分析的学术资源',
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
							collapsed: true,
							items: [
								{ label: '概览', slug: 'methodology' },
								{ label: '引用与免责', slug: 'methodology/citation-disclaimer' },
							],
						},
					],
				},
				{
					label: '议题比较 Topics',
					collapsed: false,
					items: [
						{ label: '议题总览', slug: 'topics' },
						{
							label: '风险分级 Risk Classification',
							collapsed: true,
							items: [
								{ label: '概览', slug: 'topics/risk-classification' },
								{ label: '中国', slug: 'topics/risk-classification/china' },
								{ label: '美国', slug: 'topics/risk-classification/us' },
								{ label: '欧盟', slug: 'topics/risk-classification/eu' },
							],
						},
						{
							label: '前沿模型与 GPAI',
							collapsed: true,
							items: [
								{ label: '概览', slug: 'topics/frontier-gpai' },
								{ label: '中国', slug: 'topics/frontier-gpai/china' },
								{ label: '美国', slug: 'topics/frontier-gpai/us' },
								{ label: '欧盟', slug: 'topics/frontier-gpai/eu' },
							],
						},
						{
							label: '数据与训练 Data & Training',
							collapsed: true,
							items: [
								{ label: '概览', slug: 'topics/data-training' },
								{ label: '中国', slug: 'topics/data-training/china' },
								{ label: '美国', slug: 'topics/data-training/us' },
								{ label: '欧盟', slug: 'topics/data-training/eu' },
							],
						},
						{
							label: '内容标识与溯源',
							collapsed: true,
							items: [
								{ label: '概览', slug: 'topics/content-labeling-provenance' },
								{ label: '中国', slug: 'topics/content-labeling-provenance/china' },
								{ label: '美国', slug: 'topics/content-labeling-provenance/us' },
								{ label: '欧盟', slug: 'topics/content-labeling-provenance/eu' },
							],
						},
					],
				},
				{
					label: '顶层规则 Rules',
					collapsed: true,
					items: [
						{ label: '索引', slug: 'rules' },
						{ label: '🇨🇳 中国', slug: 'rules/china' },
						{ label: '🇺🇸 美国', slug: 'rules/us' },
						{ label: '🇪🇺 欧盟', slug: 'rules/eu' },
					],
				},
				{
					label: '地方层级 Subnational',
					collapsed: true,
					items: [
						{ label: '索引', slug: 'subnational' },
						{ label: '🇨🇳 中国地方', slug: 'subnational/china' },
						{ label: '🇺🇸 美国各州/市', slug: 'subnational/us' },
						{ label: '🇪🇺 成员国', slug: 'subnational/eu' },
					],
				},
				{
					label: '公司实践 Corporate',
					collapsed: true,
					items: [
						{ label: '公司索引', slug: 'companies' },
						{
							label: 'Anthropic',
							collapsed: true,
							autogenerate: { directory: 'companies/anthropic' },
						},
						{
							label: 'OpenAI',
							collapsed: true,
							autogenerate: { directory: 'companies/openai' },
						},
						{
							label: 'Google DeepMind',
							collapsed: true,
							autogenerate: { directory: 'companies/google-deepmind' },
						},
						{
							label: 'ByteDance 字节',
							collapsed: true,
							autogenerate: { directory: 'companies/bytedance' },
						},
						{
							label: 'DeepSeek',
							collapsed: true,
							autogenerate: { directory: 'companies/deepseek' },
						},
					],
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
