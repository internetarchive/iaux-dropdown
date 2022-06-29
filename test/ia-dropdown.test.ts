/* eslint-disable dot-notation */
import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';

import type { IaDropdown, optionInterface } from '../src/ia-dropdown';
import '../src/ia-dropdown';

describe('IaDropdown', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('is closed at default', async () => {
    const el = await fixture<IaDropdown>(html`<ia-dropdown></ia-dropdown>`);
    expect(el.open).to.be.false;
  });

  it('can display caret as option', async () => {
    const el = await fixture<IaDropdown>(html`<ia-dropdown></ia-dropdown>`);
    expect(el.displayCaret).to.be.false;

    el.displayCaret = true;
    await el.updateComplete;

    expect(el.displayCaret).to.be.true;

    const caret = el.shadowRoot?.querySelector('span.caret');
    expect(caret).to.exist;
  });

  describe('Toggling', () => {
    it('has `toggleOptions` function to toggle open dropdown options', async () => {
      const el = await fixture<IaDropdown>(
        html`<ia-dropdown displayCaret></ia-dropdown>`
      );

      expect(el.open).to.be.false;
      el.toggleOptions();
      await el.updateComplete;

      expect(el.open).to.be.true;
    });
    it('caret, when displayed, changes to point up when dropdown is opened', async () => {
      const el = await fixture<IaDropdown>(
        html`<ia-dropdown displayCaret></ia-dropdown>`
      );

      expect(el.displayCaret).to.be.true;
      const caret = el.shadowRoot?.querySelector('span.caret');
      expect(caret?.querySelector('.caret-down-svg')).to.exist;
      expect(caret?.querySelector('.caret-up-svg')).to.not.exist;

      const trigger = el.shadowRoot?.querySelector('button.click-main');
      expect(trigger).to.exist;

      (trigger as any)?.click(); // TS barks but `click()` is alegit test fn

      await el.updateComplete;

      expect(caret?.querySelector('.caret-down-svg')).to.not.exist;
      expect(caret?.querySelector('.caret-up-svg')).to.exist;
      expect(el.open).to.be.true;
    });
  });

  describe('Options', () => {
    it('receives a list of options', async () => {
      const options: optionInterface[] = [
        {
          url: 'archive.org',
          label: html`<p class="foo">foo</p>`,
          id: 'link-example',
        },
      ];
      const el = await fixture<IaDropdown>(
        html`<ia-dropdown .options=${options}></ia-dropdown>`
      );

      expect(el.options.length).to.equal(1);
      const list = el.shadowRoot?.querySelector('ul');

      expect(list).to.exist;
      expect(list?.querySelectorAll('li').length).to.equal(1);
    });
    it('On Option Selected: fires custom event `optionSelected` & option callback `selectedHandler` if available', async () => {
      let optionCallbackReceived = false;
      const el = await fixture<IaDropdown>(
        html`<ia-dropdown
          .options=${[
            {
              selectedHandler: () => {
                optionCallbackReceived = true;
              },
              label: 'beep',
              id: 'callback-example',
            },
          ] as optionInterface[]}
        ></ia-dropdown>`
      );

      let thisOptionSelected;

      const eventListener = (e: CustomEvent) => {
        thisOptionSelected = e.detail.option as optionInterface;
      };
      // eslint-disable-next-line no-undef
      el.addEventListener('optionSelected', eventListener as EventListener);

      expect(thisOptionSelected).to.be.undefined;
      expect(optionCallbackReceived).to.be.false;

      (el.shadowRoot?.querySelector('button.click-main') as any)?.click(); // TS barks but `click()` is alegit test fn
      await el.updateComplete;
      expect(el.open).to.be.true;

      const list = el.shadowRoot?.querySelector('ul');
      const firstOption = list?.querySelector('li');
      const firstOptionTarget = firstOption?.querySelector('button');
      expect(firstOptionTarget).to.exist;

      (firstOptionTarget as any).click();

      await el.updateComplete;
      expect(optionCallbackReceived).to.be.true;
      expect(el.selectedOption).to.equal('callback-example');
      expect(thisOptionSelected).to.exist;
      expect(thisOptionSelected && thisOptionSelected['selectedHandler']).to
        .exist;
      expect(thisOptionSelected && thisOptionSelected['id']).to.equal(
        'callback-example'
      );
      expect(thisOptionSelected && thisOptionSelected['label']).to.equal(
        'beep'
      );
    });
    it('can set `optionGroup` namespace', async () => {
      const el = await fixture<IaDropdown>(
        html`<ia-dropdown .optionGroup=${'foobarz'}></ia-dropdown>`
      );

      expect(el.optionGroup).to.equal('foobarz');

      const srOnlyCTA = el.shadowRoot?.querySelector(
        'button.click-main span.cta.sr-only'
      );
      expect(srOnlyCTA?.innerHTML).to.contain('foobarz');
    });
    it('Only show available options in dropdown', async () => {
      const el = await fixture<IaDropdown>(
        html`<ia-dropdown
          .options=${[
            {
              selectedHandler: () => {},
              label: 'beep',
              id: 'selected-example',
            },
            {
              selectedHandler: () => {},
              label: 'bloop',
              id: 'not-selected-example',
            },
          ] as optionInterface[]}
          .selectedOption=${'selected-example'}
        ></ia-dropdown>`
      );

      expect(el.availableOptions.length).to.equal(1);

      el.selectedOption = '';
      await el.updateComplete;
      expect(el.availableOptions.length).to.equal(2);
    });
  });
});
