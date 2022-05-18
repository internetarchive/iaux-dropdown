import { html, css, LitElement, TemplateResult, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';

export interface optionInterface {
  url?: string;
  selectedHandler: Function;
  label: string | TemplateResult;
  id: string;
}

@customElement('ia-dropdown')
export class IaDropdown extends LitElement {
  @property({ type: Boolean, attribute: true }) displayCaret = false;

  @property({ type: String, attribute: true }) selectedOption = '';

  @property({ type: String }) dropdownState = 'closed';

  @property({ type: Array }) options = [];

  @property({ type: String }) optionGroup: string = 'options';

  @property({ type: Function }) optionSelected = () => {};

  renderOption(availableOption: optionInterface): TemplateResult {
    const { label, url = undefined, id } = availableOption;
    let component;
    const selected = this.selectedOption === id ? 'selected' : '';

    if (url) {
      component = html`<a
        href=${url}
        @click=${() => this.optionClicked(availableOption)}
        >${label}</a
      >`;
    } else {
      component = html`<button
        @click=${() => this.optionClicked(availableOption)}
      >
        ${label}
      </button>`;
    }

    return html`<li class=${selected}>${component}</li>`;
  }

  optionClicked(option: optionInterface): void {
    this.dispatchEvent(
      new CustomEvent('optionSelected', {
        detail: { option },
      })
    );
  }

  toggleOptions() {
    if (this.dropdownState === 'closed') {
      this.dropdownState = 'open';
      return;
    }

    this.dropdownState = 'closed';
  }

  get caret(): TemplateResult {
    if (this.dropdownState === 'closed') {
      return html`<span>C</span>`;
    }

    return html`<span>O</span>`;
  }

  render() {
    return html`
      <div class="ia-dropdown-group">
        <button @click=${this.toggleOptions}>
          <span class="sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret ? this.caret : nothing}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.options.map(o => this.renderOption(o))}
        </ul>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--your-webcomponent-text-color, #000);
      font-family: sanserif;
    }

    ul.dropdown-main.closed {
      visibility: hidden;
      height: 1px;
      width: 1px;
    }

    .sr-only {
      border: 0 !important;
      clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important; /* 2 */
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important;
    }

    .ia-dropdown-group {
      border: 1px solid red;
    }

    ul.dropdown-main {
      list-style: none;
      margin: 0px;
      border: 1px solid green;
      padding: 0;
      color: var(--dropdownTextColor, #fff);
      border-radius: 4px;
      border: 1px solid var(--dropdownBorderColor, #fff);
    }

    ul.dropdown-main li:hover:not(.selected) {
      background-color: var(--dropdownHoverBgColor, #fff);
      color: var(--dropdownHoverTextColor, #2c2f2c);
      border-top-color: var(--dropdownHoverTopBottomBorderColor, #333);
      border-bottom-color: var(--dropdownHoverTopBottomBorderColor, #333);
      list-style: none;
      height: 30px;
      cursor: pointer;
    }

    ul.dropdown-main li {
      background: var(--dropdownBgColor, #333);
      list-style: none;
      height: 30px;
      cursor: pointer;
      border-top: 0.5px solid transparent;
      border-bottom: 0.5px solid transparent;
    }

    ul.dropdown-main li button {
      background: none;
      color: inherit;
      border: none;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      padding: 0;
    }

    ul.dropdown-main li a {
      text-decoration: none;
      display: block;
    }

    ul.dropdown-main li:first-child {
      border-top: 0;
    }

    ul.dropdown-main li:last-child {
      border-bottom: 0;
    }

    ul.dropdown-main li.selected > * {
      background-color: var(--dropdownSelectedBgColor, #fff);
      color: var(--dropdownSelectedTextColor, #2c2c2c);
    }

    ul.dropdown-main li > * > * {
      margin: 0;
      padding: 0 12px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      height: 100%;
    }

    ul.dropdown-main li > * {
      display: flex;
      width: 100%;
      height: inherit;
      color: var(--dropdownTextColor, #fff);
      background: transparent;
      margin: 0;
    }
  `;
}
