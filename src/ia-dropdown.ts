import {
  html,
  css,
  LitElement,
  TemplateResult,
  nothing,
  svg,
  SVGTemplateResult,
} from 'lit';
import { property, customElement } from 'lit/decorators.js';

export interface optionInterface {
  url?: string;
  selectedHandler?: Function;
  label: string | TemplateResult;
  id: string;
}

@customElement('ia-dropdown')
export class IaDropdown extends LitElement {
  /**
   * Determines whether the dropdown's option menu is currently visible.
   */
  @property({ type: Boolean, attribute: true }) open = false;

  /**
   * Specifies whether a caret should be displayed beside the main button content.
   * Defaults to `false`.
   */
  @property({ type: Boolean, attribute: true }) displayCaret = false;

  /**
   * Specifies whether the dropdown should automatically close when an option is selected.
   *
   * Defaults to `false`, for backwards-compatibility.
   */
  @property({ type: Boolean, attribute: true }) closeOnSelect = false;

  /**
   * Specifies whether pressing the main button (aside from the caret) should open
   * the dropdown.
   *
   * Both this and `openViaCaret` default to true, making the entire main-button-and-caret
   * row interactive. However, each of these can be disabled independently.
   */
  @property({ type: Boolean, attribute: true }) openViaButton = true;

  /**
   * Specifies whether pressing the caret element (if present) should open the dropdown.
   *
   * Both this and `openViaButton` default to true, making the entire main-button-and-caret
   * row interactive. However, each of these can be disabled independently.
   */
  @property({ type: Boolean, attribute: true }) openViaCaret = true;

  /**
   * Specifies whether the currently-selected option should be shown in the dropdown menu.
   * When `true`, all options are always listed.
   * When `false`, only unselected options are listed.
   *
   * Defaults to `false`, for backwards-compatibility.
   */
  @property({ type: Boolean, attribute: true }) includeSelectedOption = false;

  @property({ type: String, attribute: true }) selectedOption = '';

  @property({ type: Array }) options: optionInterface[] = [];

  @property({ type: String }) optionGroup: string = 'options';

  @property({ type: Function }) optionSelected = () => {};

  private handlingCaretClick = false;

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
    // Don't emit an event for reselecting the same option
    if (this.selectedOption !== option.id) {
      this.selectedOption = option.id;

      this.dispatchEvent(
        new CustomEvent('optionSelected', {
          detail: { option },
        })
      );

      option.selectedHandler?.(option);
    }

    if (this.closeOnSelect) this.open = false;
  }

  toggleOptions(): void {
    this.open = !this.open;
  }

  private mainButtonClicked(): void {
    if (this.handlingCaretClick) {
      this.handlingCaretClick = false;
      return;
    }

    if (this.openViaButton) {
      this.toggleOptions();
    }
  }

  private caretInteracted(): void {
    if (this.openViaCaret) {
      this.toggleOptions();
    }
  }

  private caretClicked(): void {
    this.handlingCaretClick = true; // Prevent the main button handler from toggling it back
    this.caretInteracted();
  }

  private caretKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Enter' || e.key === ' ') {
      this.caretInteracted();
    }
  }

  get caret(): SVGTemplateResult {
    if (!this.open) {
      return this.caretDown;
    }

    return this.caretUp;
  }

  get dropdownState(): string {
    if (this.open) {
      return 'open';
    }

    return 'closed';
  }

  get caretUp(): SVGTemplateResult {
    return svg`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`;
  }

  get caretDown(): SVGTemplateResult {
    return svg`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`;
  }

  get availableOptions(): optionInterface[] {
    // If we're showing the selected option in the dropdown then _all_ options are available.
    if (this.includeSelectedOption) return this.options;

    // Otherwise, exclude the selected option
    return this.options.filter(
      option => this.selectedOption !== (option as optionInterface).id
    );
  }

  render() {
    return html`
      <div class="ia-dropdown-group">
        <button @click=${this.mainButtonClicked} class="click-main">
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret
            ? html`<span
                class="caret"
                tabindex=${this.openViaCaret && !this.openViaButton
                  ? '0'
                  : nothing}
                @click=${this.caretClicked}
                @keydown=${this.caretKeyDown}
                >${this.caret}</span
              >`
            : nothing}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.availableOptions.map(o => this.renderOption(o))}
        </ul>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: inline;
      color: var(--dropdownTextColor, #fff);
    }

    svg.caret-up-svg,
    svg.caret-down-svg {
      fill: var(--dropdownCaretColor, #fff);
      vertical-align: middle;
    }

    button.click-main {
      background: transparent;
      color: inherit;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      flex-wrap: nowrap;
      flex-direction: row;
      padding-left: 0;
    }

    button slot {
      padding-right: 5px;
      display: inline-block;
    }

    .ia-dropdown-group {
      width: inherit;
      height: inherit;
      position: relative;
    }

    .sr-only {
      border: 0 !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important;
    }

    .caret {
      /* Maintain centered caret position but with a full-height clickable region */
      display: flex;
      align-self: stretch;
      align-items: center;
    }

    .caret svg {
      height: var(--caretHeight, 10px);
      width: var(--caretWidth, 20px);
    }

    ul {
      z-index: var(--dropdownListZIndex, 1);
    }

    ul.dropdown-main.closed {
      visibility: hidden;
      height: 1px;
      width: 1px;
    }

    ul.dropdown-main {
      position: absolute;
      list-style: none;
      margin: var(--dropdownOffsetTop, 5px) 0 0 0;
      padding: 0;
      color: var(--dropdownTextColor, #fff);
      font-size: var(--dropdownFontSize, 1rem);
      border-radius: var(
          --dropdownBorderTopLeftRadius,
          var(--dropdownBorderRadius, 4px)
        )
        var(--dropdownBorderTopRightRadius, var(--dropdownBorderRadius, 4px))
        var(--dropdownBorderBottomRightRadius, var(--dropdownBorderRadius, 4px))
        var(--dropdownBorderBottomLeftRadius, var(--dropdownBorderRadius, 4px));
      border-top: var(--dropdownBorderTopWidth, var(--dropdownBorderWidth, 1px))
        solid var(--dropdownBorderColor, #fff);
      border-right: var(
          --dropdownBorderRightWidth,
          var(--dropdownBorderWidth, 1px)
        )
        solid var(--dropdownBorderColor, #fff);
      border-bottom: var(
          --dropdownBorderBottomWidth,
          var(--dropdownBorderWidth, 1px)
        )
        solid var(--dropdownBorderColor, #fff);
      border-left: var(
          --dropdownBorderLeftWidth,
          var(--dropdownBorderWidth, 1px)
        )
        solid var(--dropdownBorderColor, #fff);
      white-space: var(--dropdownWhiteSpace, normal);
    }

    ul.dropdown-main {
      background: var(--dropdownBgColor, #333);
    }

    ul.dropdown-main li:hover:first-child {
      border-top-color: var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3));
    }

    ul.dropdown-main li:hover:last-child {
      border-bottom-color: var(--dropdownHoverBgColor, #474747);
    }

    ul.dropdown-main li:hover:not(:first-child) {
      border-top: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
    }
    ul.dropdown-main li:hover:not(:last-child) {
      border-bottom: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
    }

    ul.dropdown-main li.selected:last-child {
      border-bottom-color: var(--dropdownSelectedBgColor, #fff);
    }

    ul.dropdown-main li.selected:first-child {
      border-top-color: var(--dropdownSelectedBgColor, #fff);
    }

    ul.dropdown-main li.selected > * {
      background-color: var(--dropdownSelectedBgColor, #fff);
      color: var(--dropdownSelectedTextColor, #2c2c2c);
    }

    ul.dropdown-main li:hover {
      background-color: var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3));
      color: var(--dropdownHoverTextColor, #fff);
      list-style: none;
      cursor: pointer;
    }

    ul.dropdown-main li:hover > *,
    ul.dropdown-main li:focus-within > * {
      background-color: var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3));
      color: var(--dropdownHoverTextColor, #fff);
    }

    ul.dropdown-main li {
      background: var(--dropdownBgColor, #333);
      list-style: none;
      height: 30px;
      cursor: pointer;
      border-bottom: 0.5px solid var(--dropdownBgColor, #333);
      border-top: 0.5px solid var(--dropdownBgColor, #333);
    }

    ul.dropdown-main li button {
      background: none;
      color: inherit;
      border: none;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    ul.dropdown-main li a {
      text-decoration: none;
      display: block;
      box-sizing: border-box;
    }

    ul.dropdown-main li:first-child {
      border-top-left-radius: var(--dropdownBorderTopLeftRadius, 4px);
      border-top-right-radius: var(--dropdownBorderTopRightRadius, 4px);
    }

    ul.dropdown-main li:last-child {
      border-bottom-right-radius: var(--dropdownBorderBottomRightRadius, 4px);
      border-bottom-left-radius: var(--dropdownBorderBottomLeftRadius, 4px);
    }

    /* cover the list with the label */
    ul.dropdown-main li > * > :first-child {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      height: 100%;
      padding: var(--dropdownItemPaddingTop, 5px)
        var(--dropdownItemPaddingRight, 10px)
        var(--dropdownItemPaddingBottom, 5px)
        var(--dropdownItemPaddingLeft, 10px);
      box-sizing: border-box;
    }

    ul.dropdown-main li > * {
      width: 100%;
      height: inherit;
      color: var(--dropdownTextColor, #fff);
      background: transparent;
      padding: 0;
    }
  `;
}
