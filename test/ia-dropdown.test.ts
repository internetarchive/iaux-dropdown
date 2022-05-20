import { html, fixture, expect } from '@open-wc/testing';

import type { IaDropdown, optionInterface } from '../src/ia-dropdown';
import '../src/ia-dropdown';

describe('IaDropdown', () => {
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

  describe('Options', () => {
    it('receives a list of options', async () => {
      let optionCallbackReceived = false;
      const options: optionInterface[] = [
        {
          selectedHandler: () => {
            optionCallbackReceived = true;
          },
          label: 'beep',
          id: 'callback-example',
        },
        {
          url: 'archive.org',
          label: html`<p class="foo">foo</p>`,
          id: 'link-example',
        },
      ];
      const el = await fixture<IaDropdown>(
        html`<ia-dropdown .options=${options}></ia-dropdown>`
      );

      expect(optionCallbackReceived).to.be.false;
      expect(el.options.length).to.equal(2);

      (el.shadowRoot?.querySelector('button.click-main') as any)?.click(); // TS barks but `click()` is alegit test fn
      await el.updateComplete;
      expect(el.open).to.be.true;

      const list = el.shadowRoot?.querySelector('ul');

      expect(list).to.exist;
      expect(list?.querySelectorAll('li').length).to.equal(2);

      const firstOption = list?.querySelector('li');
      const firstOptionTarget = firstOption?.querySelector('button');
      expect(firstOptionTarget).to.exist;

      (firstOptionTarget as any).click();

      await el.updateComplete;
      expect(optionCallbackReceived).to.be.true;
      expect(el.selectedOption).to.equal('callback-example');
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
  });
});
