import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/': path.resolve(__dirname, './src'),
			'@/config': path.resolve(__dirname, './src/config'),
			'@/components': path.resolve(__dirname, './src/components'),
			'@/styles': path.resolve(__dirname, './src/styles'),
			'@/utils': path.resolve(__dirname, './src/utils'),
			'@/common': path.resolve(__dirname, './src/common'),
			'@/assets': path.resolve(__dirname, './src/assets'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/routes': path.resolve(__dirname, './src/routes'),
			'@/layouts': path.resolve(__dirname, './src/layouts'),
			'@/hooks': path.resolve(__dirname, './src/hooks'),
			'@/store': path.resolve(__dirname, './src/store')
		}
	}
});
