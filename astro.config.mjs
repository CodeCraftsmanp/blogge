// astro.config.mjs or astro.config.js

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true,
		},
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'material-theme-palenight',
				wrap: true,
			},
			drafts: true,
		}),
		sitemap(),
		tailwind(),
	],

});
