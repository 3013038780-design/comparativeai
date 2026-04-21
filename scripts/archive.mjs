#!/usr/bin/env node
/**
 * Archive a source document into public/archives/<jurisdiction>/<slug>-<date>.<ext>
 *
 * Usage:
 *   npm run archive -- --url <url> --slug <slug> --jurisdiction <cn|us|eu> [--date YYYY-MM-DD]
 *
 * Examples:
 *   npm run archive -- --url "https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm" \
 *                      --slug biaozhi-banfa --jurisdiction china --date 2025-03-07
 *
 *   npm run archive -- --url "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32024R1689" \
 *                      --slug eu-ai-act --jurisdiction eu --date 2024-06-13
 *
 * Behavior:
 *   - Follows redirects, sniffs Content-Type
 *   - Saves as .pdf for PDFs, .html for HTML, .bin for anything else
 *   - Creates parent directories automatically
 *   - Refuses to overwrite an existing file (change --date or delete the file if you really mean to)
 */

import { mkdir, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values: args } = parseArgs({
	options: {
		url: { type: 'string' },
		slug: { type: 'string' },
		jurisdiction: { type: 'string' },
		date: { type: 'string' },
		force: { type: 'boolean', default: false },
	},
});

if (!args.url || !args.slug || !args.jurisdiction) {
	console.error('Missing required args. Usage:');
	console.error(
		'  npm run archive -- --url <url> --slug <slug> --jurisdiction <cn|us|eu> [--date YYYY-MM-DD] [--force]'
	);
	process.exit(1);
}

const date = args.date || new Date().toISOString().slice(0, 10);
const juris = args.jurisdiction.toLowerCase();
if (!['china', 'us', 'eu', 'cn'].includes(juris)) {
	console.error(`Unknown jurisdiction: ${juris}. Use china / us / eu.`);
	process.exit(1);
}
const jurisDir = juris === 'cn' ? 'china' : juris;

console.log(`→ Fetching ${args.url}`);

let res;
try {
	res = await fetch(args.url, {
		redirect: 'follow',
		headers: {
			// 某些 gov 站点对无 UA 请求返回 403
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 ComparativeAIArchiver/1.0',
		},
	});
} catch (err) {
	console.error(`✘ Fetch failed: ${err.message}`);
	process.exit(1);
}

if (!res.ok) {
	console.error(`✘ HTTP ${res.status} ${res.statusText}`);
	process.exit(1);
}

const contentType = res.headers.get('content-type') || '';
let ext = 'bin';
if (contentType.includes('pdf')) ext = 'pdf';
else if (contentType.includes('html') || contentType.includes('xml')) ext = 'html';
else if (contentType.includes('plain')) ext = 'txt';

const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const outDir = `${repoRoot}public/archives/${jurisDir}`;
const outFile = `${outDir}/${args.slug}-${date}.${ext}`;

await mkdir(outDir, { recursive: true });

// 防呆：不覆盖已有文件（除非 --force）
try {
	await access(outFile, constants.F_OK);
	if (!args.force) {
		console.error(`✘ File already exists: ${outFile}`);
		console.error(`  改 --date 或加 --force 强制覆盖。`);
		process.exit(1);
	}
} catch {
	/* 文件不存在，继续 */
}

const buf = Buffer.from(await res.arrayBuffer());
await writeFile(outFile, buf);

console.log(`✓ Archived: ${outFile}`);
console.log(`  Size: ${(buf.length / 1024).toFixed(1)} KB · Content-Type: ${contentType}`);

if (ext === 'html') {
	console.log(
		'\nℹ️  这是 HTML 档案。想要 PDF 版本：在浏览器打开归档文件、Cmd+P → 另存为 PDF、手工替换。'
	);
	console.log('   （以后要自动 HTML→PDF 再跑 `npm install playwright-core`，我再改脚本。）');
}
