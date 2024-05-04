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

		--naga-success-bg: #22C55E;
		--naga-success-bg-hovered: rgba(22, 163, 74, 0.7); /** #16A34AB3 */
		--naga-success-bg-focused: rgba(22, 163, 74, 0.9); /** #16A34AE6 */
		--naga-success-inversed: #FFF;
		--naga-success-box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(22, 163, 74, 0.2) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

		--naga-error-bg: #EF4444;
		--naga-error-bg-hovered: rgba(220, 38, 38, 0.7); /** #DC2626B3 */
		--naga-error-bg-focused: rgba(220, 38, 38, 0.9); /** #DC2626E6 */
		--naga-error-inversed: #FFF;
		--naga-error-box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(220, 38, 38, 0.2) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
	}
`

export default style
