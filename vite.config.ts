import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@typings': path.resolve(__dirname, './src/types'),
		},
	},
	plugins: []
})
