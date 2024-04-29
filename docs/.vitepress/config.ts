import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Naga UI',
	description: 'A reusable web component design system',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Components', link: '/getting-started/index' }
		],

		sidebar: [
			{
				text: 'Introduction',
				items: [
					{ text: 'Getting started', link: '/getting-started/index' },
					{ text: 'Installation guide', link: '/getting-started/installation-guide' },
				]
			},
			{
				text: 'Components',
				items: [
					{ text: 'Button', link: '/components/button' },
				]
			},
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/syfqpie/naga-ui' }
		]
	}
})
