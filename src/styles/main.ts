import { css } from 'lit'

const style = css`
	:host {
		--naga-font-weight-light: 200;
		--naga-font-weight-semilight: 300;
		--naga-font-weight-normal: 400;
		--naga-font-weight-semibold: 500;
		--naga-font-weight-bold: 600;

		--naga-primary-bg: rgba(15, 23, 42, 1); /** #0F172A */
		--naga-primary-bg-hovered: rgba(2, 6, 23, 0.8); /** #020617CC */
		--naga-primary-bg-focused: rgba(2, 6, 23, 1); /** #020617 */
		--naga-primary-bg-inversed: #FFFFFF;
		--naga-primary-box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(15, 23, 42, 0.2) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
	}
`

export default style
