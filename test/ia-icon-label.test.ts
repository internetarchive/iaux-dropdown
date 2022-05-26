/* eslint-disable import/no-duplicates */
import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';

import { IaIconLabel } from '../src/ia-icon-label';
import '../src/ia-icon-label';

describe('IaDropdown', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('displays the provided icon in the `slot[name="icon"`', async () => {
    const fooLabel = html`<p id="bunnyhop" slot="icon">foo</p>`;
    const el = await fixture<IaIconLabel>(html`<ia-icon-label>
      ${fooLabel}
    </ia-icon-label>`);

    const iconSlot = el?.shadowRoot?.querySelector('slot[name="icon"]');
    const iconSlotEls = (iconSlot as any)?.assignedElements();
    expect(iconSlotEls.length).to.equal(1);
    expect(iconSlotEls[0].getAttribute('id')).to.equal('bunnyhop');
  });

  it('displays generic slot', async () => {
    const barLabel = html`<p id="carrotcake">bar</p>`;
    const el = await fixture<IaIconLabel>(html`<ia-icon-label>
      ${barLabel}
    </ia-icon-label>`);

    const allSlots = el?.shadowRoot?.querySelectorAll('slot') || [];
    const iconSlotEls = (allSlots[0] as any)?.assignedElements();
    const labelSlotEls = (allSlots[1] as any)?.assignedElements();

    expect(allSlots?.length).to.equal(2);
    expect(iconSlotEls?.length).to.equal(0);
    expect(labelSlotEls?.length).to.equal(1);
    expect((labelSlotEls[0] as Element).getAttribute('id')).to.equal(
      'carrotcake'
    );
  });
});
