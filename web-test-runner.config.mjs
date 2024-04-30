import { vitePlugin } from '@remcovaes/web-test-runner-vite-plugin';
import { removeViteLogging } from '@remcovaes/web-test-runner-vite-plugin';

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
	/** Test files to run */
	files: 'src/test/**/*.test.ts',

	/** Resolve bare module imports */
	nodeResolve: {
		exportConditions: ['browser', 'development'],
	},
	plugins: [
		vitePlugin(),
	],

	/** Filter out lit dev mode logs */
	filterBrowserLogs: removeViteLogging,
});
