import { babel } from '@rollup/plugin-babel';

const config = {
	input: 'dist/src/index.js',
	output: {
		dir: 'output',
		format: 'es'
	},
	plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;
