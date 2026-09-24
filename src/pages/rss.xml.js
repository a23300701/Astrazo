import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: 'Astrazo | Blog de Dante',
		description: 'Parece ser que me gusta esto.',
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>es-mx</language>`,
	});
}