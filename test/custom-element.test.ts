/* eslint-disable max-classes-per-file */
import { expect } from '@open-wc/testing';
import sinon from 'sinon';

import { IaDropdown } from '../src/ia-dropdown';
import { IaIconLabel } from '../src/ia-icon-label';
import { customElement } from '../src/custom-element';

/** A tag no other test uses, so each test registers from scratch */
let tagCount = 0;
function uniqueTag(): string {
  tagCount += 1;
  return `custom-element-test-${tagCount}`;
}

describe('customElement', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('registers the class under the tag', () => {
    const tag = uniqueTag();
    class First extends HTMLElement {}

    customElement(tag)(First);

    expect(customElements.get(tag)).to.equal(First);
  });

  it('keeps the first class and warns when the tag is already taken', () => {
    const warn = sandbox.stub(console, 'warn');
    const tag = uniqueTag();
    class First extends HTMLElement {}
    class Second extends HTMLElement {}

    customElement(tag)(First);
    expect(() => customElement(tag)(Second)).not.to.throw();

    expect(customElements.get(tag)).to.equal(First);
    expect(warn.calledOnce).to.be.true;
    expect(warn.firstCall.args[0]).to.include(`<${tag}> is already registered`);
  });

  // A query string makes the browser evaluate a second copy of each module, the way a page
  // gets one copy from this package and another from @internetarchive/elements
  it('lets a second copy of ia-dropdown and ia-icon-label load', async () => {
    sandbox.stub(console, 'warn');
    const secondDropdown = '../src/ia-dropdown.js?second-copy';
    const secondIconLabel = '../src/ia-icon-label.js?second-copy';

    await import(secondDropdown);
    await import(secondIconLabel);

    expect(customElements.get('ia-dropdown')).to.equal(IaDropdown);
    expect(customElements.get('ia-icon-label')).to.equal(IaIconLabel);
  });
});
