import { config, fields, collection, singleton } from '@keystatic/core';

/**
 * AI Policy Atlas — Keystatic 内容后台配置
 *
 * 运行方式：`npm run dev` 之后访问 http://localhost:4321/keystatic
 *
 * Storage: local —— 所有保存都直接写到 src/content/docs/ 下的文件，
 * 然后你自己走 git commit/push。后续如果要在浏览器里从任意设备编辑，
 * 再切换 storage.kind 到 'github'（需要配 GitHub OAuth App）。
 */

const commonContent = () =>
	fields.markdoc({
		label: '正文',
		options: {
			image: {
				directory: 'public/images',
				publicPath: '/images/',
			},
		},
		extension: 'md',
	});

export default config({
	storage: { kind: 'local' },
	ui: {
		brand: { name: 'AI Policy Atlas' },
		navigation: {
			'议题 Topics': ['topicOverviews', 'topicChina', 'topicUs', 'topicEu'],
			'辖区 Jurisdictions': ['jurisdictions'],
			'追加内容': ['experiments', 'updates'],
			'固定页面': ['home', 'about', 'methodology', 'lawTranslations', 'topicsIndex', 'jurisdictionsIndex'],
		},
	},

	singletons: {
		home: singleton({
			label: '首页',
			path: 'src/content/docs/index',
			format: { contentField: 'content' },
			schema: {
				title: fields.text({ label: '标题' }),
				description: fields.text({ label: '描述', multiline: true }),
				content: fields.mdx({
					label: '正文',
					options: {
						image: { directory: 'public/images', publicPath: '/images/' },
					},
				}),
			},
		}),
		about: singleton({
			label: '项目简介 /about',
			path: 'src/content/docs/about',
			format: { contentField: 'content' },
			schema: {
				title: fields.text({ label: '标题' }),
				description: fields.text({ label: '描述', multiline: true }),
				content: commonContent(),
			},
		}),
		methodology: singleton({
			label: '方法论 /methodology',
			path: 'src/content/docs/methodology',
			format: { contentField: 'content' },
			schema: {
				title: fields.text({ label: '标题' }),
				description: fields.text({ label: '描述', multiline: true }),
				content: commonContent(),
			},
		}),
		lawTranslations: singleton({
			label: '立法翻译 /law-translations',
			path: 'src/content/docs/law-translations',
			format: { contentField: 'content' },
			schema: {
				title: fields.text({ label: '标题' }),
				description: fields.text({ label: '描述', multiline: true }),
				content: commonContent(),
			},
		}),
		topicsIndex: singleton({
			label: '议题总览页 /topics',
			path: 'src/content/docs/topics/index',
			format: { contentField: 'content' },
			schema: {
				title: fields.text({ label: '标题' }),
				description: fields.text({ label: '描述', multiline: true }),
				content: commonContent(),
			},
		}),
		jurisdictionsIndex: singleton({
			label: '辖区索引页 /jurisdictions',
			path: 'src/content/docs/jurisdictions/index',
			format: { contentField: 'content' },
			schema: {
				title: fields.text({ label: '标题' }),
				description: fields.text({ label: '描述', multiline: true }),
				content: commonContent(),
			},
		}),
	},

	collections: {
		/*
		 * 议题是本站的核心单位。四个 collection 映射到同一个 topic 文件夹下的
		 * 四个文件：index / china / us / eu。创建新议题时，按顺序在这四个
		 * collection 里用**同一个 slug**新建条目即可（slug 推荐英文短横线，
		 * 例如 content-labeling、training-data-copyright）。
		 */
		topicOverviews: collection({
			label: '议题 · 概览页（index.md）',
			slugField: 'title',
			path: 'src/content/docs/topics/*/',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: 'Slug（英文短横线，例：content-labeling）' },
				}),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 1 }),
				}),
				content: commonContent(),
			},
		}),
		topicChina: collection({
			label: '议题 · 中国页',
			slugField: 'title',
			path: 'src/content/docs/topics/*/china',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: '对应议题 Slug（与概览页保持一致）' },
				}),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 2 }),
					label: fields.text({ label: 'Sidebar 标签', defaultValue: '中国' }),
				}),
				content: commonContent(),
			},
		}),
		topicUs: collection({
			label: '议题 · 美国页',
			slugField: 'title',
			path: 'src/content/docs/topics/*/us',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: '对应议题 Slug（与概览页保持一致）' },
				}),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 3 }),
					label: fields.text({ label: 'Sidebar 标签', defaultValue: '美国' }),
				}),
				content: commonContent(),
			},
		}),
		topicEu: collection({
			label: '议题 · 欧盟页',
			slugField: 'title',
			path: 'src/content/docs/topics/*/eu',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: '对应议题 Slug（与概览页保持一致）' },
				}),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 4 }),
					label: fields.text({ label: 'Sidebar 标签', defaultValue: '欧盟' }),
				}),
				content: commonContent(),
			},
		}),

		jurisdictions: collection({
			label: '司法辖区页（china / us / eu）',
			slugField: 'title',
			path: 'src/content/docs/jurisdictions/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: '文件名（如 china / us / eu）' },
				}),
				description: fields.text({ label: '页面描述' }),
				content: commonContent(),
			},
		}),

		experiments: collection({
			label: '自主实验',
			slugField: 'title',
			path: 'src/content/docs/experiments/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: 'Slug（英文短横线）' },
				}),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 1 }),
				}),
				content: commonContent(),
			},
		}),

		updates: collection({
			label: '更新日志',
			slugField: 'title',
			path: 'src/content/docs/updates/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: 'Slug（可用日期，如 2026-04-20-launch）' },
				}),
				description: fields.text({ label: '页面描述' }),
				sidebar: fields.object({
					order: fields.number({ label: 'Sidebar 排序', defaultValue: 1 }),
				}),
				content: commonContent(),
			},
		}),
	},
});
