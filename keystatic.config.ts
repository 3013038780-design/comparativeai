import { config, fields, collection, singleton } from '@keystatic/core';

/**
 * Comparative AI — Keystatic CMS 配置（v2 IA）
 *
 * 信息架构：
 *   - About：home / about / methodology / citation-disclaimer（都是 singletons）
 *   - Topics：每个议题有 index + china + us + eu 四个页面
 *              → 1 个 overview collection + 3 个 jurisdiction collection
 *   - Rules：按辖区 3 个 collection（每个 collection 里的每条记录 = 一条规则）
 *   - Subnational：按辖区 3 个 collection
 *   - Companies：5 家公司 × 5 类材料 = 5 collection（每 collection 的每条记录 = 一家公司的该类材料）
 *   - Reference：单页（singleton）
 *   - Experiments / Updates：各一个 collection
 */

const mdBody = () =>
	fields.markdoc({
		label: '正文',
		options: {
			image: { directory: 'public/images', publicPath: '/images/' },
		},
		extension: 'md',
	});

const commonFrontmatter = {
	description: fields.text({ label: '页面描述', multiline: true }),
	sidebar: fields.object({
		order: fields.number({ label: 'Sidebar 排序', defaultValue: 1 }),
		label: fields.text({ label: 'Sidebar 标签（可空）' }),
	}),
};

const fixedPage = (path: string) =>
	singleton({
		path: `src/content/docs/${path}`,
		format: { contentField: 'content' },
		schema: {
			title: fields.text({ label: '标题' }),
			description: fields.text({ label: '描述', multiline: true }),
			content: mdBody(),
		},
	});

export default config({
	storage: { kind: 'local' },
	ui: {
		brand: { name: 'Comparative AI' },
		navigation: {
			关于: ['home', 'about', 'methodology', 'methodologyCitation'],
			议题: ['topicOverviews', 'topicChina', 'topicUs', 'topicEu', 'topicsIndex'],
			顶层规则: ['rulesChina', 'rulesUs', 'rulesEu', 'rulesIndex', 'rulesChinaIndex', 'rulesUsIndex', 'rulesEuIndex'],
			地方层级: ['subnationalChina', 'subnationalUs', 'subnationalEu', 'subnationalIndex', 'subnationalChinaIndex', 'subnationalUsIndex', 'subnationalEuIndex'],
			公司实践: [
				'companyProfiles',
				'companyUsagePolicies',
				'companyModelCards',
				'companySafetyFrameworks',
				'companyTransparency',
				'companyRedTeam',
				'companiesIndex',
			],
			其他: ['referenceIndex', 'experiments', 'updates'],
		},
	},

	singletons: {
		// 关于
		home: singleton({
			label: '首页',
			path: 'src/content/docs/index',
			format: { contentField: 'content' },
			schema: {
				title: fields.text({ label: '标题' }),
				description: fields.text({ label: '描述', multiline: true }),
				content: fields.mdx({
					label: '正文',
					options: { image: { directory: 'public/images', publicPath: '/images/' } },
				}),
			},
		}),
		about: { label: '项目简介 /about', ...fixedPage('about') },
		methodology: { label: '方法论 /methodology', ...fixedPage('methodology') },
		methodologyCitation: {
			label: '引用与免责',
			...fixedPage('methodology/citation-disclaimer'),
		},

		// 各 section 的索引页
		topicsIndex: { label: '议题总览 /topics', ...fixedPage('topics/index') },
		rulesIndex: { label: '规则索引 /rules', ...fixedPage('rules/index') },
		rulesChinaIndex: { label: '规则 · 中国索引', ...fixedPage('rules/china/index') },
		rulesUsIndex: { label: '规则 · 美国索引', ...fixedPage('rules/us/index') },
		rulesEuIndex: { label: '规则 · 欧盟索引', ...fixedPage('rules/eu/index') },
		subnationalIndex: { label: '地方索引 /subnational', ...fixedPage('subnational/index') },
		subnationalChinaIndex: { label: '地方 · 中国索引', ...fixedPage('subnational/china/index') },
		subnationalUsIndex: { label: '地方 · 美国索引', ...fixedPage('subnational/us/index') },
		subnationalEuIndex: { label: '地方 · 欧盟索引', ...fixedPage('subnational/eu/index') },
		companiesIndex: { label: '公司索引 /companies', ...fixedPage('companies/index') },
		referenceIndex: { label: '参考框架 /reference', ...fixedPage('reference/index') },
	},

	collections: {
		// ========== 议题 Topics ==========
		topicOverviews: collection({
			label: '议题 · 概览页 (每议题的 index.md)',
			slugField: 'title',
			path: 'src/content/docs/topics/*/',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: 'Slug（英文短横线，如 risk-classification）' },
				}),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 1 }),
				}),
				content: mdBody(),
			},
		}),
		topicChina: collection({
			label: '议题 · 中国页',
			slugField: 'title',
			path: 'src/content/docs/topics/*/china',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '对应议题 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 2 }),
					label: fields.text({ label: 'Sidebar 标签', defaultValue: '中国' }),
				}),
				content: mdBody(),
			},
		}),
		topicUs: collection({
			label: '议题 · 美国页',
			slugField: 'title',
			path: 'src/content/docs/topics/*/us',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '对应议题 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 3 }),
					label: fields.text({ label: 'Sidebar 标签', defaultValue: '美国' }),
				}),
				content: mdBody(),
			},
		}),
		topicEu: collection({
			label: '议题 · 欧盟页',
			slugField: 'title',
			path: 'src/content/docs/topics/*/eu',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '对应议题 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 4 }),
					label: fields.text({ label: 'Sidebar 标签', defaultValue: '欧盟' }),
				}),
				content: mdBody(),
			},
		}),

		// ========== 顶层规则 Rules ==========
		rulesChina: collection({
			label: '规则 · 中国（每条规则一页）',
			slugField: 'title',
			path: 'src/content/docs/rules/china/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '文件名 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				ruleName: fields.text({ label: '规则正式名称' }),
				issuer: fields.text({ label: '发布机构' }),
				level: fields.select({
					label: '规则层级',
					options: [
						{ label: '法律（全国人大）', value: 'law' },
						{ label: '行政法规（国务院）', value: 'regulation' },
						{ label: '部门规章', value: 'departmental-rule' },
						{ label: '规范性文件', value: 'normative-doc' },
						{ label: '国家标准 GB', value: 'gb' },
						{ label: '国家标准 GB/T', value: 'gbt' },
						{ label: '团体/行业标准', value: 'industry-standard' },
					],
					defaultValue: 'departmental-rule',
				}),
				binding: fields.select({
					label: '硬法 / 软法',
					options: [
						{ label: '硬法 Binding', value: 'hard' },
						{ label: '软法 Soft', value: 'soft' },
					],
					defaultValue: 'hard',
				}),
				effectiveDate: fields.text({ label: '生效日期（YYYY-MM-DD）' }),
				originalUrl: fields.url({ label: '原文链接' }),
				relatedTopics: fields.array(fields.text({ label: 'topic slug' }), {
					label: '相关议题 slugs（用于交叉引用）',
					itemLabel: (p) => p.value,
				}),
				content: mdBody(),
			},
		}),
		rulesUs: collection({
			label: '规则 · 美国',
			slugField: 'title',
			path: 'src/content/docs/rules/us/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '文件名 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				ruleName: fields.text({ label: '规则正式名称' }),
				issuer: fields.text({ label: '发布机构' }),
				level: fields.select({
					label: '规则层级',
					options: [
						{ label: 'Federal Act / Statute', value: 'federal-act' },
						{ label: 'CFR Regulation', value: 'cfr' },
						{ label: 'Executive Order', value: 'executive-order' },
						{ label: 'NIST 文件', value: 'nist' },
						{ label: 'OMB Memo', value: 'omb' },
						{ label: 'Agency Guidance', value: 'agency-guidance' },
					],
					defaultValue: 'federal-act',
				}),
				binding: fields.select({
					label: '硬法 / 软法',
					options: [
						{ label: '硬法 Binding', value: 'hard' },
						{ label: '软法 Soft', value: 'soft' },
					],
					defaultValue: 'hard',
				}),
				effectiveDate: fields.text({ label: '生效日期 / 发布日期' }),
				originalUrl: fields.url({ label: '原文链接' }),
				relatedTopics: fields.array(fields.text({ label: 'topic slug' }), {
					label: '相关议题 slugs',
					itemLabel: (p) => p.value,
				}),
				content: mdBody(),
			},
		}),
		rulesEu: collection({
			label: '规则 · 欧盟',
			slugField: 'title',
			path: 'src/content/docs/rules/eu/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '文件名 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				ruleName: fields.text({ label: '规则正式名称' }),
				issuer: fields.text({ label: '发布机构' }),
				level: fields.select({
					label: '规则层级',
					options: [
						{ label: 'Regulation', value: 'regulation' },
						{ label: 'Directive', value: 'directive' },
						{ label: 'Implementing / Delegated Act', value: 'implementing-act' },
						{ label: 'Commission Guideline', value: 'commission-guideline' },
						{ label: 'AI Office 指引', value: 'ai-office' },
						{ label: 'Code of Practice', value: 'code-of-practice' },
					],
					defaultValue: 'regulation',
				}),
				binding: fields.select({
					label: '硬法 / 软法',
					options: [
						{ label: '硬法 Binding', value: 'hard' },
						{ label: '软法 Soft', value: 'soft' },
					],
					defaultValue: 'hard',
				}),
				effectiveDate: fields.text({ label: '生效日期' }),
				originalUrl: fields.url({ label: '原文链接（EUR-Lex 等）' }),
				relatedTopics: fields.array(fields.text({ label: 'topic slug' }), {
					label: '相关议题 slugs',
					itemLabel: (p) => p.value,
				}),
				content: mdBody(),
			},
		}),

		// ========== 地方层级 Subnational ==========
		subnationalChina: collection({
			label: '地方 · 中国（深圳/上海/北京/杭州等）',
			slugField: 'title',
			path: 'src/content/docs/subnational/china/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '文件名 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				region: fields.text({ label: '地区名称' }),
				content: mdBody(),
			},
		}),
		subnationalUs: collection({
			label: '地方 · 美国各州/市',
			slugField: 'title',
			path: 'src/content/docs/subnational/us/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '文件名 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				region: fields.text({ label: 'State / City name' }),
				content: mdBody(),
			},
		}),
		subnationalEu: collection({
			label: '地方 · 欧盟成员国',
			slugField: 'title',
			path: 'src/content/docs/subnational/eu/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '文件名 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				region: fields.text({ label: 'Member State name' }),
				content: mdBody(),
			},
		}),

		// ========== 公司实践 Corporate ==========
		// 每个公司有 6 个文件：index（概况）+ 5 类材料
		// 组织方式：每 collection 对应一类材料，slug = 公司 slug
		companyProfiles: collection({
			label: '公司 · 概况页 (每家公司一条)',
			slugField: 'title',
			path: 'src/content/docs/companies/*/',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: '公司 Slug（英文，例如 anthropic）' },
				}),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 0 }),
					label: fields.text({ label: 'Sidebar 标签' }),
				}),
				content: mdBody(),
			},
		}),
		companyUsagePolicies: collection({
			label: '公司 · Usage Policy',
			slugField: 'title',
			path: 'src/content/docs/companies/*/usage-policy',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '公司 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				snapshotDate: fields.text({ label: 'Snapshot 日期' }),
				originalUrl: fields.url({ label: '原文链接' }),
				archivedCopy: fields.text({ label: '本站归档相对路径（选填）' }),
				content: mdBody(),
			},
		}),
		companyModelCards: collection({
			label: '公司 · Model/System Card',
			slugField: 'title',
			path: 'src/content/docs/companies/*/model-card',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '公司 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				snapshotDate: fields.text({ label: 'Snapshot 日期' }),
				originalUrl: fields.url({ label: '原文链接' }),
				content: mdBody(),
			},
		}),
		companySafetyFrameworks: collection({
			label: '公司 · Safety Framework',
			slugField: 'title',
			path: 'src/content/docs/companies/*/safety-framework',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '公司 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				snapshotDate: fields.text({ label: 'Snapshot 日期' }),
				version: fields.text({ label: '版本号 (如 RSP v2.1)' }),
				originalUrl: fields.url({ label: '原文链接' }),
				content: mdBody(),
			},
		}),
		companyTransparency: collection({
			label: '公司 · Transparency Report',
			slugField: 'title',
			path: 'src/content/docs/companies/*/transparency-report',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '公司 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				snapshotDate: fields.text({ label: 'Snapshot 日期' }),
				originalUrl: fields.url({ label: '原文链接' }),
				content: mdBody(),
			},
		}),
		companyRedTeam: collection({
			label: '公司 · Red-Team & Eval',
			slugField: 'title',
			path: 'src/content/docs/companies/*/red-team-disclosures',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: '公司 Slug' } }),
				description: fields.text({ label: '页面描述' }),
				snapshotDate: fields.text({ label: 'Snapshot 日期' }),
				originalUrl: fields.url({ label: '原文链接' }),
				content: mdBody(),
			},
		}),

		// ========== 追加内容 ==========
		experiments: collection({
			label: '自主实验',
			slugField: 'title',
			path: 'src/content/docs/experiments/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Slug' } }),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 1 }),
				}),
				content: mdBody(),
			},
		}),
		updates: collection({
			label: '更新日志',
			slugField: 'title',
			path: 'src/content/docs/updates/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: 'Slug（建议以日期开头，如 2026-04-20-launch）' },
				}),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 1 }),
				}),
				content: mdBody(),
			},
		}),
	},
});
