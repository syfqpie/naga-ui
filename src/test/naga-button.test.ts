import { html } from 'lit'
import { fixture, expect } from '@open-wc/testing'

import { NagaButton } from '../core/button/NagaButton.js'
import '../core/button/NagaButton.js'

describe('NagaButton', () => {
	it('has a slot text', async () => {
		const el = await fixture<NagaButton>(html`<naga-button>Test label</naga-button>`)
		expect(el.textContent).to.equal('Test label')
	})

	it('has a size set to default which is `md`', async () => {
		const el = await fixture<NagaButton>(html`<naga-button>label</naga-button>`)
		expect(el.size).to.equal('md')
	})

	it('has a size set to `xs`', async () => {
		const el = await fixture<NagaButton>(html`<naga-button size="xs">label</naga-button>`)
		expect(el.getAttribute('size')).to.equal('xs')
		expect(el.size).to.equal('xs')
	})

	it('has a size set to `sm`', async () => {
		const el = await fixture<NagaButton>(html`<naga-button size="sm">label</naga-button>`)
		expect(el.getAttribute('size')).to.equal('sm')
		expect(el.size).to.equal('sm')
	})

	it('has a size set to `md`', async () => {
		const el = await fixture<NagaButton>(html`<naga-button size="md">label</naga-button>`)
		expect(el.getAttribute('size')).to.equal('md')
		expect(el.size).to.equal('md')
	})

	it('has a size set to `lg`', async () => {
		const el = await fixture<NagaButton>(html`<naga-button size="lg">label</naga-button>`)
		expect(el.getAttribute('size')).to.equal('lg')
		expect(el.size).to.equal('lg')
	})

	it('has full width set to true', async () => {
		const el = await fixture<NagaButton>(html`<naga-button isFull>label</naga-button>`)
		expect(el.isFull).to.be.true
		expect(el.shadowRoot?.children[0]).to.has.class('naga-btn-full')
	})

	it('has full width set to false', async () => {
		const el = await fixture<NagaButton>(html`<naga-button>label</naga-button>`)
		expect(el.isFull).to.be.false
		expect(el.shadowRoot?.children[0]).to.not.has.class('naga-btn-full')
	})
})
