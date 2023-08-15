import { sveltekit } from '@sveltejs/kit/vite';
import { build, defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [
		[sveltekit()],
		Icons({
			compiler: 'svelte',
		})
	],
	build:{
		commonjsOptions: {
			transformMixedEsModules: true
		}
	},
	optimizeDeps: {
		include: ['mdsvex']
	}
});
