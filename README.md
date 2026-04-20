# Comparative AI

基于 Astro + Starlight 搭建的独立研究网站，按议题对中国、美国、欧盟的 AI 治理规则做比较分析。

## 本地开发

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # 产出到 ./dist
npm run preview   # 本地预览 build 产物
```

## 目录结构

```
src/
├─ content/
│  └─ docs/
│     ├─ index.mdx            # 首页
│     ├─ about.md             # 项目简介
│     ├─ methodology.md       # 方法论
│     ├─ law-translations.md  # 立法翻译与术语表
│     ├─ topics/              # 议题（核心）
│     │  ├─ index.md
│     │  └─ content-labeling/
│     │     ├─ index.md       # 概览 + 比较表
│     │     ├─ china.md
│     │     ├─ us.md
│     │     └─ eu.md
│     ├─ jurisdictions/       # 辖区索引
│     │  ├─ index.md
│     │  ├─ china.md
│     │  ├─ us.md
│     │  └─ eu.md
│     ├─ experiments/         # 自主实验
│     │  └─ index.md
│     └─ updates/             # 更新日志
│        └─ index.md
└─ styles/
   └─ custom.css              # 学术风覆盖 Starlight 默认样式
```

## 新增议题

1. 在 `src/content/docs/topics/<topic-slug>/` 下创建 `index.md` + `china.md` + `us.md` + `eu.md`；
2. 参照 `content-labeling` 的结构填写；
3. 在 `astro.config.mjs` 的 `sidebar` 中新增对应条目；
4. 在 `topics/index.md` 更新议题清单；
5. 重要变更写入 `updates/index.md`。

## License

内容部分默认 CC BY 4.0；代码部分默认 MIT。以仓库根目录 LICENSE 为准（待补）。
