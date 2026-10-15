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

  it('registers the class under the tag, without a warning', () => {
    const warn = sandbox.stub(console, 'warn');
    const tag = uniqueTag();
    class First extends HTMLElement {}

    customElement(tag)(First);

    expect(customElements.get(tag)).to.equal(First);
    expect(warn.called).to.be.false;
  });

  it('waits for the initializer when given a standard decorator context', () => {
    const tag = uniqueTag();
    class First extends HTMLElement {}
    const initializers: (() => void)[] = [];
    const context = {
      addInitializer: (initializer: () => void) =>
        initializers.push(initializer),
    } as unknown as ClassDecoratorContext<new () => HTMLElement>;

    customElement(tag)(First, context);
    expect(customElements.get(tag)).to.be.undefined;

    initializers.forEach(initializer => initializer());
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
    const warn = sandbox.stub(console, 'warn');
    const secondDropdownPath = '../src/ia-dropdown.js?second-copy';
    const secondIconLabelPath = '../src/ia-icon-label.js?second-copy';

    const { IaDropdown: SecondDropdown } = await import(secondDropdownPath);
    const { IaIconLabel: SecondIconLabel } = await import(secondIconLabelPath);

    // New classes prove the browser evaluated second copies rather than reusing the first
    expect(SecondDropdown).not.to.equal(IaDropdown);
    expect(SecondIconLabel).not.to.equal(IaIconLabel);
    expect(customElements.get('ia-dropdown')).to.equal(IaDropdown);
    expect(customElements.get('ia-icon-label')).to.equal(IaIconLabel);
    expect(warn.callCount).to.equal(2);
    expect(warn.firstCall.args[0]).to.include(
      '<ia-dropdown> is already registered',
    );
    expect(warn.secondCall.args[0]).to.include(
      '<ia-icon-label> is already registered',
    );
  });
});
