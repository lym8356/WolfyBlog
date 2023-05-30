import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	extensions: ['.svelte'],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()

	},
	preprocess: [vitePreprocess(), mdsvex({
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeRaw]
	})]
};

export default config;
