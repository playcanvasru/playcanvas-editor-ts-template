import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/main.ts',
	output: {
		file: 'build/main.bundle.js',
		format: 'iife',
		name: 'pcapp',
		sourcemap: true,
		globals: {
			playcanvas: 'pc',
		},
	},
	external: ['playcanvas'],
	plugins: [
		nodeResolve(),
		commonjs(),
		typescript({
			tsconfig: './tsconfig.rollup.json',
		}),
	],
};
