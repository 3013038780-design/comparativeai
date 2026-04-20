// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// 部署上线后改成实际的公开地址，例如 'https://ai-policy-atlas.pages.dev'
	site: 'https://example.org',
	integrations: [
		starlight({
			title: 'AI Policy Atlas',
			description: '中国、美国、欧盟 AI 治理比较分析的学术资源',
			defaultLocale: 'root',
			locales: {
				root: { label: '中文', lang: 'zh-CN' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/3013038780-design/comparativeai' },
			],
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			pagination: false,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			sidebar: [
				{
					label: '关于',
					items: [
						{ label: '项目简介', slug: 'about' },
						{ label: '方法论', slug: 'methodology' },
						{ label: '立法翻译', slug: 'law-translations' },
					],
				},
				{
					label: '议题比较 Topics',
					collapsed: false,
					items: [
						{ label: '议题总览', slug: 'topics' },
						{
							label: 'Content Labeling 内容标识',
							collapsed: true,
							items: [
								{ label: '概览', slug: 'topics/content-labeling' },
								{ label: '中国', slug: 'topics/content-labeling/china' },
								{ label: '美国', slug: 'topics/content-labeling/us' },
								{ label: '欧盟', slug: 'topics/content-labeling/eu' },
							],
						},
					],
				},
				{
					label: '司法辖区 Jurisdictions',
					items: [
						{ label: '索引', slug: 'jurisdictions' },
						{ label: '中国 China', slug: 'jurisdictions/china' },
						{ label: '美国 United States', slug: 'jurisdictions/us' },
						{ label: '欧盟 European Union', slug: 'jurisdictions/eu' },
					],
				},
				{
					label: '自主实验 Experiments',
					autogenerate: { directory: 'experiments' },
				},
				{
					label: '更新日志 Updates',
					autogenerate: { directory: 'updates' },
				},
			],
		}),
	],
});
