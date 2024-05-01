import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import {classMap} from 'lit/directives/class-map.js';

import '../src/core/button/NagaButton.ts';

@customElement('naga-sandbox')
export class NagaSandbox extends LitElement {
	override render() {
		const classes = {
			'naga-sandbox': true,
		}

		const testButton = (e: Event) => {
			console.log('#### Clicked ==>', e)
		}

		return html`
			<div
				class='${classMap(classes)}'>
				<div class='naga-main'>
					<naga-button size='sm' .isPill=${false} @onClick=${testButton}>
						Click me
					</naga-button>

					<naga-button size='xs'>
						Test
					</naga-button>

					<naga-button size='sm'>
						Test
					</naga-button>

					<naga-button>
						Test
					</naga-button>

					<naga-button size='lg'>
						Test
					</naga-button>

					<naga-button size='lg' isFull>
						Test
					</naga-button>

					<naga-button size='lg' disabled isFull>
						Test
					</naga-button>

					<naga-button size='lg' disabled isFull .isPill='${false}'>
						Test
					</naga-button>
				</div>
			</div>
		`
	}

	static override styles = css`
		:host {
			display: block;
		}

		.naga-sandbox {
			/* background-color: rgb(27, 27, 31); */
			background-color: white;
			height: 100vh;
			width: 100vw;
			font-size: 16px;
		}

		.naga-main {
			padding: 10em;
			display: flex;
			flex-direction: column;
			gap: 0.5em;
		}
	`
}

declare global {
	interface HTMLElementTagNameMap {
	  'naga-sandbox': NagaSandbox;
	}
}
