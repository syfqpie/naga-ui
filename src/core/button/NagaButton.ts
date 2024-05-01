import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import {classMap} from 'lit/directives/class-map.js';

import mainStyle from '../../styles/main.ts'
import { Size, Sizes } from '../../types/common.ts'

/**
 * NagaButton
 *
 * @property {@link Size} size - size of button - the default is `md`
 * @property {Boolean} isPill - set true if button should be pill look - the default is true
 * @property {Boolean} isFull - set true if button should be full width - the default is false
 * @property {Boolean} disabled - set true if button is in disabled state - the default is false
 * @property {(e: Event) => void} onClick - on click event
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
	/** {Boolean} isPill - set true if button should be pill look - the default is true */
	@property({ type: Boolean })
	isPill: boolean = true
	/** {Boolean} isFull - set true if button should be full width - the default is false */
	@property({ type: Boolean })
	isFull: boolean = false
	/** @property {Boolean} disabled - set true if button is in disabled state - the default is false */
	@property({ type: Boolean })
	disabled: boolean = false

	override render() {
		const classes = {
			'naga-btn': true,
			'naga-btn-xs': this.size === Sizes.XS,
			'naga-btn-sm': this.size === Sizes.SM,
			'naga-btn-lg': this.size === Sizes.LG,
			'naga-btn-full': this.isFull,
			'naga-rounded-full': this.isPill,
		}

		return html`
			<button
				class='${classMap(classes)}'
				@click=${this.emitEvent}
				?disabled=${this.disabled}>
				<slot></slot>
			</button>
		`
	}

	private async emitEvent() {
		await this.updateComplete
		const event = new CustomEvent('onClick', {bubbles: true, composed: true})
		this.dispatchEvent(event)
	}

	static override styles =[
		mainStyle,
		css`
			:host {
				--naga-btn-bg: var(--naga-btn-bg-custom, var(--naga-primary-bg));
				--naga-btn-bg-hovered: var(--naga-btn-bg-hovered-custom, var(--naga-primary-bg-hovered));
				--naga-btn-bg-focused: var(--naga-btn-bg-focused-custom, var(--naga-primary-bg-focused));
				--naga-btn-color: var(--naga-btn-color-custom, var(--naga-primary-inversed));
				--naga-btn-box-shadow: var(--naga-btn-box-shadow-custom, var(--naga-primary-box-shadow));

				--naga-txt-xs: 12px;
				--naga-txt-sm: 14px;
				--naga-txt-md: 14px;
				--naga-txt-lg: 16px;

				--naga-btn-p-xs: 8px 12px;
				--naga-btn-p-sm: 8px 12px;
				--naga-btn-p-md: 10px 20px;
				--naga-btn-p-lg: 12px 22px;

				display: block;
			}
			.naga-btn {
				background-color: var(--naga-btn-bg);
				border: none;
				border-radius: 8px;
				color: var(--naga-btn-color);
				cursor: pointer;
				font-size: var(--naga-txt-md);
				font-weight: var(--naga-font-weight-semibold);
				line-height: 20px;
				padding: var(--naga-btn-p-md);
				transition: color 0.25s, background-color 0.25s, box-shadow 0.25s;
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
				line-height: 16px;
				font-size: var(--naga-txt-xs);
				padding: var(--naga-btn-p-xs);
			}
			.naga-btn.naga-btn-sm {
				font-size: var(--naga-txt-sm);
				padding: var(--naga-btn-p-sm);
			}
			.naga-btn.naga-btn-lg {
				line-height: 24px;
				font-size: var(--naga-txt-lg);
				padding: var(--naga-btn-p-lg);
			}
			.naga-btn.naga-btn-full {
				width: 100%;
			}
			.naga-btn.naga-rounded-full {
				border-radius: 9999px;
			}
		`
	]
}

declare global {
	interface HTMLElementTagNameMap {
	  'naga-button': NagaButton;
	}
}
