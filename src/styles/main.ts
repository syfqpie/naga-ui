import { css } from 'lit'

const style = css`
	:host {
		--naga-font-weight-light: 200;
		--naga-font-weight-semilight: 300;
		--naga-font-weight-normal: 400;
		--naga-font-weight-semibold: 500;
		--naga-font-weight-bold: 600;

		--naga-primary-bg: rgba(15, 23, 42, 1); /** #0F172A */
		--naga-primary-bg-hovered: rgba(2, 6, 23, 0.9); /** #020617CC */
		--naga-primary-bg-focused: rgba(2, 6, 23, 1); /** #020617 */
		--naga-primary-inversed: #FFFFFF;
		--naga-primary-box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(15, 23, 42, 0.2) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
	}

	@media (prefers-color-scheme: dark) {
		:host {
			--naga-primary-bg: #E2E8F0;
			--naga-primary-bg-hovered: rgba(203, 213, 225, 0.9); /** #CBD5E1E6 */
			--naga-primary-bg-focused: rgba(203, 213, 225, 1); /** #CBD5E1 */
			--naga-primary-inversed: rgba(15, 23, 42, 1);
			--naga-primary-box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(241, 245, 249, 0.4) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
		}
	}
`

export default style
