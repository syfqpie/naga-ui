import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import mainStyle from '../../styles/main.ts'
import { Size } from '../../types/common.ts'

/**
 * NagaButton
 *
 * @property {@link Size} size - size of button - the default is `md`
 * @property {Boolean} isFull - set true if button should be full width - the default is false
 * @property {Boolean} disabled - set true if button is in disabled state - the default is false
 * @property {(e: Event) => void} onClick - button callback when clicked
 *
 * @example
 * ``` <naga-button @onClick="exampleFn()">
 * 		Submit
 * </naga-button> ```
 */
@customElement('naga-button')
export class NagaButton extends LitElement {
	/** @property {@link Size} size - size of button - the default is `md` */
	@property({ type: String })
	size: Size = 'md'
	/** {Boolean} isFull - set true if button should be full width - the default is false */
	@property({ type: Boolean })
	isFull: boolean = false
	/** @property {Boolean} disabled - set true if button is in disabled state - the default is false */
	@property({ type: Boolean })
	disabled: boolean = false
	/** @property {(e: Event) => void} onClick - button callback when clicked */
	@property({ attribute: false })
	onClick: ((e: Event) => void) | undefined = undefined

	getCls() {
		let cls = ''

		if (this.size === 'xs') {
			cls = 'naga-btn-xs'
		} else if (this.size === 'sm') {
			cls = 'naga-btn-sm'
		} else if (this.size === 'lg') {
			cls = 'naga-btn-lg'
		}

		if (this.isFull) {
			cls = `${cls} naga-btn-full`
		}

		return cls
	}

	override render() {
		return html`
			<button
				class="naga-btn ${ this.getCls() }"
				@click="${this.onClick}"
				?disabled=${this.disabled}>
				<slot></slot>
			</button>
		`
	}

	static override styles =[
		mainStyle,
		css`
			:host {
				--naga-btn-bg: var(--naga-btn-bg-custom, var(--naga-primary-bg));
				--naga-btn-bg-hovered: var(--naga-btn-bg-hovered-custom, var(--naga-primary-bg-hovered));
				--naga-btn-bg-focused: var(--naga-btn-bg-focused-custom, var(--naga-primary-bg-focused));
				--naga-btn-color: var(--naga-btn-color-custom, var(--naga-primary-color));
				--naga-btn-box-shadow: var(--naga-btn-box-shadow-custom, var(--naga-primary-box-shadow));

				--naga-txt-xs: 12px;
				--naga-txt-sm: 14px;
				--naga-txt-md: 16px;
				--naga-txt-lg: 18px;

				--naga-btn-p-xs: 4px 12px;
				--naga-btn-p-sm: 6px 14px;
				--naga-btn-p-md: 8px 20px;
				--naga-btn-p-lg: 10px 26px;

				display: block;
			}
			.naga-btn {
				background-color: var(--naga-btn-bg);
				border: none;
				border-radius: 9999px;
				color: var(--naga-btn-color);
				cursor: pointer;
				font-size: var(--naga-txt-md);
				font-weight: var(--naga-font-weight-semibold);
				padding: var(--naga-btn-p-md);
			}
			.naga-btn:not(:disabled):hover {
				background-color: var(--naga-btn-bg-hovered);
			}
			.naga-btn:not(:disabled):active {
				background-color: var(--naga-btn-bg-focused);
				box-shadow: var(--naga-btn-box-shadow);
			}
			.naga-btn:disabled {
				cursor: not-allowed;
				opacity: 0.3;
			}
			.naga-btn.naga-btn-xs {
				font-size: var(--naga-txt-xs);
				padding: var(--naga-btn-p-xs);
			}
			.naga-btn.naga-btn-sm {
				font-size: var(--naga-txt-sm);
				padding: var(--naga-btn-p-sm);
			}
			.naga-btn.naga-btn-lg {
				font-size: var(--naga-txt-lg);
				padding: var(--naga-btn-p-lg);
			}
			.naga-btn.naga-btn-full {
				width: 100%;
			}
		`
	]
}

declare global {
	interface HTMLElementTagNameMap {
	  'naga-button': NagaButton;
	}
}
