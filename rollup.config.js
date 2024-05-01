import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import summary from 'rollup-plugin-summary';

const config = [
	{
		input:'src/index.ts',
		output: {
			file: './build/bundle.js',
			format: 'esm',
			sourcemap: true,
		},
		onwarn(warning) {
			if (warning.code !== 'THIS_IS_UNDEFINED') {
				console.error(`(!) ${warning.message}`);
			}
		},
		plugins: [
			typescript(),
			replace({
				'Reflect.decorate': 'undefined',
				'preventAssignment': true,
			}),
			resolve(),
			summary(),
		],
	},
	{
		input: 'build/dist/index.d.ts',
		output: {
			file: './build/bundle.d.ts',
			format: 'es',
		},
		plugins: [
			dts(),
			resolve(),
		]
	}
]

export default config
