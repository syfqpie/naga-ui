import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { Size } from '../../types/common'

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
	static override styles = css`
		:host {
			--def-naga-btn-color: #FFFFFF;
			--def-naga-btn-color-hovered: #FFFFFF;
			--def-naga-btn-bg-color: #1F2937;
			--def-naga-btn-bg-color-hovered: #374151;
			--def-naga-btn-border-color: #4B5563;
			--def-naga-btn-bg-color-active: var(--def-naga-btn-border-color);

			--def-naga-txt-xs: 12px;
			--def-naga-txt-sm: 14px;
			--def-naga-txt-md: 16px;
			--def-naga-txt-lg: 18px;

			--def-naga-btn-p-xs: 4px 12px;
			--def-naga-btn-p-sm: 6px 14px;
			--def-naga-btn-p-md: 8px 20px;
			--def-naga-btn-p-lg: 10px 26px;

			display: block;

			.naga-btn {
				font-size: var(--def-naga-txt-md);
				padding: var(--def-naga-btn-p-md);
				color: var(--naga-btn-color, var(--def-naga-btn-color));
				background-color: var(--naga-btn-bg-color, var(--def-naga-btn-bg-color));
				border: 1px solid var(--naga-btn-border-color, var(--def-naga-btn-border-color));
				border-radius: 9999px;
				cursor: pointer;

				&:not(:disabled):hover {
					color: var(--naga-btn-color-hovered, var(--def-naga-btn-color-hovered));
					background-color: var(--naga-btn-bg-color-hovered, var(--def-naga-btn-bg-color-hovered));
				}

				&:not(:disabled):active {
					color: var(--naga-btn-color-hovered, var(--def-naga-btn-color-hovered));
					background-color: var(--naga-btn-bg-color-active, var(--def-naga-btn-bg-color-active));
				}

				&:disabled {
					color: #030712;
					background-color: #6b7280;
					cursor: not-allowed;
					opacity: 0.5;
				}

				&.naga-btn-xs {
					font-size: var(--def-naga-txt-xs);
					padding: var(--def-naga-btn-p-xs);
				}

				&.naga-btn-sm {
					font-size: var(--def-naga-txt-sm);
					padding: var(--def-naga-btn-p-sm);
				}

				&.naga-btn-lg {
					font-size: var(--def-naga-txt-lg);
					padding: var(--def-naga-btn-p-lg);
				}

				&.naga-btn-full {
					width: 100%;
				}
			}
		}
  	`;

	@property({ type: String }) size: Size = 'md'
	@property({ type: Boolean }) isFull: boolean = false
	@property({ type: Boolean }) disabled: boolean = false
	@property({ attribute: false }) onClick?: ((e: Event) => void | undefined)

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
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'naga-button': NagaButton;
	}
}
