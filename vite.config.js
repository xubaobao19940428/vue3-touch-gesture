import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
	plugins: [
		vue(),
	],
	build: {
		lib: {
			entry: 'packages/index.js',
			name: 'vue3Touch',
			fileName: (format) => `vue3-touch.${format}.js`,
		},
		outDir: 'lib', // 输出目录
		rollupOptions: {
			// 确保外部化依赖项
			external: ['vue'], // 这里列出你的库依赖的外部库
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
})
