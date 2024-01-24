import { html, css, LitElement, TemplateResult, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import caretUp from './assets/icons/caret-up';
import caretDown from './assets/icons/caret-down';

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
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Determines whether the main button and/or caret is disabled.
   */
  @property({ type: Boolean, reflect: true }) isDisabled = false;

  /**
   * Specifies whether a caret should be displayed beside the main button content.
   * Defaults to `false`.
   */
  @property({ type: Boolean }) displayCaret = false;

  /**
   * Specifies whether the dropdown should automatically close when an option is selected.
   *
   * Defaults to `false`, for backwards-compatibility.
   */
  @property({ type: Boolean }) closeOnSelect = false;

  /**
   * Specifies whether pressing the main button (aside from the caret) should open
   * the dropdown.
   *
   * Both this and `openViaCaret` default to true, making the entire main-button-and-caret
   * row interactive. However, either or both can be used or hidden independently.
   */
  @property({ type: Boolean }) openViaButton = true;

  /**
   * Specifies whether pressing the caret element (if present) should open the dropdown.
   *
   * Both this and `openViaButton` default to true, making the entire main-button-and-caret
   * row interactive. However, either or both can be used or hidden independently.
   */
  @property({ type: Boolean }) openViaCaret = true;

  /**
   * Specifies whether the currently-selected option should be shown in the dropdown menu.
   * When `true`, all options are always listed.
   * When `false`, only unselected options are listed.
   *
   * Defaults to `false`, for backwards-compatibility.
   */
  @property({ type: Boolean }) includeSelectedOption = false;

  @property({ type: String }) selectedOption = '';

  @property({ attribute: false }) options: optionInterface[] = [];

  /**
   * Option group label for screen readers.
   */
  @property({ type: String }) optionGroup: string = 'options';

  @property({ attribute: false }) optionSelected = () => {};

  /**
   * Specifies whether the dropdown option list passed in as <slot>.
   */
  @property({ type: Boolean, reflect: true }) isCustomList = false;

  /**
   * Indicates whether mainbutton @click event overridden by ancestor
   * @click or custom event
   *
   * If true, prevents dropdown from opening, closing on main button click.
   *
   * Custom click handling needs to handle:
   * - enabling/disabling click events
   * - this.open property
   * - this.isDisabled property
   *
   * Allows loading options from an API on click before opening dropdown.
   */
  @property({ type: Boolean, reflect: true }) hasCustomClickHandler = false;

  /**
   * Specifies whether the dropdown should automatically close when the Esc key is pressed.
   * Defaults to `false`, for backwards-compatibility.
   */
  @property({ type: Boolean, reflect: true }) closeOnEscape = false;

  /**
   * Specifies whether the dropdown should close on clicks outside the dropdown menu.
   * Defaults to `false`, for backwards-compatibility.
   */
  @property({ type: Boolean, reflect: true }) closeOnBackdropClick = false;

  // Lifecycle methods

  async firstUpdated(): Promise<void> {
    // Wait for the next tick to ensure that the dropdown is in the DOM
    await new Promise(resolve => setTimeout(resolve, 0));

    this.addEventListener('closeDropdown', this.closeOptions);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback?.();
    this.removeKeyboardListener();
  }

  // Events

  // Add optional event listener to close dropdown when Esc key pressed
  private setupKeyboardListener(): void {
    if (this.closeOnEscape) {
      document.addEventListener('keydown', this.boundKeyboardListener);
    }
  }

  // Remove the Esc key listener for Esc key pressed
  private removeKeyboardListener(): void {
    if (this.closeOnEscape) {
      document.removeEventListener('keydown', this.boundKeyboardListener);
    }
  }

  // Event handlers

  // Handle Esc key pressed
  private boundKeyboardListener = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
      case 'Esc':
        this.closeOptions();
        break;
      default:
        break;
    }
  };

  get dropdownState(): string {
    if (this.open) {
      this.setupKeyboardListener();
      return 'open';
    }
    this.removeKeyboardListener();
    return 'closed';
  }

  private closeOptions = () => {
    this.open = false;
  };

  toggleOptions(): void {
    this.open = !this.open;
  }

  private mainButtonClicked(): void {
    // If this click was already handled on the caret, we should ignore it so
    // that we don't toggle the options twice.
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
    // Prevent the main button handler from running too
    this.handlingCaretClick = true;
    this.caretInteracted();
  }

  private caretKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Spacebar scrolls the page by default
      this.caretInteracted();
    }
  }

  /**
   * In cases where both the main button and its caret are interactive, we don't
   * want a click on the caret to trigger effects on both. However, stopping
   * propagation of the caret clicks entirely would also prevent consumers of this
   * component from receiving them, which is undesirable.
   *
   * As a workaround, this flag is set when we handle a click on the caret, causing
   * the main button handler to ignore that click (and accordingly clear this flag).
   * In essence, it causes event propagation to locally skip the main button,
   * while still allowing the event to bubble out of the component.
   */
  private handlingCaretClick = false;

  // Options

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

    if (this.closeOnSelect) {
      this.closeOptions();
    }
  }

  get availableOptions(): optionInterface[] {
    // If we're showing the selected option in the dropdown then _all_ options are available.
    if (this.includeSelectedOption) return this.options;

    // Otherwise, exclude the selected option
    return this.options.filter(
      option => this.selectedOption !== (option as optionInterface).id
    );
  }

  // Templates

  /**
   * Renders up and down carets
   *
   * @event click caretClicked()
   * @event keydown caretKeyDown()
   *
   * @slot caret-up - Allow replacement of default up caret.
   * @slot caret-down - Allow replacement of default down caret.
   */
  get caretTemplate(): TemplateResult {
    if (!this.displayCaret) return html``;

    const tabindex = this.openViaCaret && !this.openViaButton ? '0' : undefined;
    const role = this.openViaCaret ? 'button' : undefined;

    return html`
      <span
        class="caret"
        tabindex=${ifDefined(tabindex)}
        role=${ifDefined(role)}
        @click=${this.isDisabled ? nothing : this.caretClicked}
        @keydown=${this.isDisabled ? nothing : this.caretKeyDown}
      >
        <span ?hidden=${!this.open} class="caret-up">
          <slot name="caret-up">${caretUp}</slot>
        </span>
        <span ?hidden=${this.open} class="caret-down">
          <slot name="caret-down">${caretDown}</slot>
        </span>
      </span>
    `;
  }

  /**
   * Renders the dropdown menu, either as a list of options or as a custom list
   *
   * NOTE: tried to skip initial rendering of dropdown options with:
   *   if (!this.open) return html``;
   * This would also remove dropdown options from DOM on close.
   * But because options may have window events, this could create a memory leak.
   *
   * @slot list - Allow replacement of default {@interface optionInterface} dropdown list.
   */
  get dropdownTemplate(): TemplateResult {
    if (this.isCustomList) {
      return html`<slot name="list"></slot>`;
    }
    return html`${this.availableOptions.map(o => this.renderOption(o))}`;
  }

  /**
   * Optional template rendering transparent backdrop to capture clicks outside the
   * dropdown menu when open.
   *
   * @event click closeOptions()
   * @event keyup closeOptions()
   */
  private get backdropTemplate(): TemplateResult {
    if (!this.closeOnBackdropClick) return html``;
    if (!this.open) return html``;
    return html`
      <div
        id="dropdown-backdrop"
        @keyup=${this.closeOptions}
        @click=${this.closeOptions}
      ></div>
    `;
  }

  render() {
    return html`
      <div class="ia-dropdown-group">
        <button
          class="click-main"
          @click=${this.hasCustomClickHandler || this.isDisabled
            ? nothing
            : this.mainButtonClicked}
          ?disabled=${this.isDisabled}
        >
          <span class="sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.caretTemplate}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.dropdownTemplate}
        </ul>

        ${this.backdropTemplate}
      </div>
    `;
  }

  static get styles() {
    const dropdownBorderWidth = css`var(--dropdownBorderWidth, 1px)`;
    const dropdownBorderRadius = css`var(--dropdownBorderRadius, 4px)`;
    const dropdownBorderColor = css`var(--dropdownBorderColor, #fff)`;
    const dropdownBgColor = css`var(--dropdownBgColor, #333)`;
    const dropdownTextColor = css`var(--dropdownTextColor, #fff)`;
    const dropdownHoverBgColor = css`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`;
    const dropdownSelectedBgColor = css`var(--dropdownSelectedBgColor, #fff)`;

    return css`
      :host {
        display: inline;
        color: ${dropdownTextColor};
      }

      svg.caret-up-svg,
      svg.caret-down-svg,
      ::slotted(svg.caret-up-svg),
      ::slotted(svg.caret-down-svg) {
        fill: var(--dropdownCaretColor, #fff);
        vertical-align: middle;
      }

      button.click-main {
        background: transparent;
        color: inherit;
        padding: var(--dropdownMainButtonPadding, 0px);
        border: var(--dropdownMainButtonBorder, none);
        border-radius: var(--dropdownMainButtonBorderRadius, none);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        flex-direction: var(--dropdownMainButtonFlexDirection, row);
        z-index: var(--dropdownListZIndex, 2);
      }

      button.click-main:disabled {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.5;
        /* Disable text selection on disabled button */
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
      }

      button.click-main:hover {
        background-color: var(--dropdownMainButtonHoverBgColor, inherit);
      }

      button.click-main:focus,
      button.click-main:focus-visible {
        background-color: var(--dropdownMainButtonFocusBgColor, inherit);
      }

      button.click-main:active {
        background-color: var(--dropdownMainButtonActiveBgColor, inherit);
      }

      button slot[name='dropdown-label'] {
        /* Set var to 0px for column layout */
        padding-right: var(--buttonSlotPaddingRight, 5px);
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
        padding: var(--caretPadding, 0px);
      }

      .caret svg {
        height: var(--caretHeight, 10px);
        width: var(--caretWidth, 20px);
      }

      #dropdown-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: transparent;
        z-index: 1;
      }

      ul {
        z-index: var(--dropdownListZIndex, 2);
      }

      ul.dropdown-main.closed {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }

      ul.dropdown-main {
        position: var(--dropdownListPosition, absolute);
        list-style: none;
        margin: var(--dropdownOffsetTop, 5px) 0 0 0;
        padding: 0;
        color: ${dropdownTextColor};
        background: ${dropdownBgColor};

        font-size: var(--dropdownFontSize, inherit);

        border-top: var(--dropdownBorderTopWidth, ${dropdownBorderWidth});
        border-right: var(--dropdownBorderRightWidth, ${dropdownBorderWidth});
        border-bottom: var(--dropdownBorderBottomWidth, ${dropdownBorderWidth});
        border-left: var(--dropdownBorderLeftWidth, ${dropdownBorderWidth});
        /* Must be after border-width settings for specificity */
        border-style: solid;
        border-color: ${dropdownBorderColor};

        border-radius: var(
            --dropdownBorderTopLeftRadius,
            ${dropdownBorderRadius}
          )
          var(--dropdownBorderTopRightRadius, ${dropdownBorderRadius})
          var(--dropdownBorderBottomRightRadius, ${dropdownBorderRadius})
          var(--dropdownBorderBottomLeftRadius, ${dropdownBorderRadius});

        white-space: var(--dropdownWhiteSpace, normal);

        /* Prevent top/bottom inner li from overlapping inner border */
        overflow: hidden;
      }

      ul.dropdown-main li:hover {
        background-color: ${dropdownHoverBgColor};
        color: var(--dropdownHoverTextColor, #fff);
        list-style: none;
        cursor: pointer;
      }

      ul.dropdown-main li:hover:first-child {
        border-top-color: ${dropdownHoverBgColor};
      }

      ul.dropdown-main li:hover:last-child {
        border-bottom-color: ${dropdownHoverBgColor};
      }

      ul.dropdown-main li:hover:not(:first-child) {
        border-top: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
      }
      ul.dropdown-main li:hover:not(:last-child) {
        border-bottom: 0.5px solid
          var(--dropdownHoverTopBottomBorderColor, #333);
      }

      ul.dropdown-main li.selected:last-child {
        border-bottom-color: ${dropdownSelectedBgColor};
      }

      ul.dropdown-main li.selected:first-child {
        border-top-color: ${dropdownSelectedBgColor};
      }

      ul.dropdown-main li:hover > *,
      ul.dropdown-main li:focus-within > * {
        background-color: ${dropdownHoverBgColor};
        color: var(--dropdownHoverTextColor, #fff);
      }

      ul.dropdown-main li.selected > * {
        background-color: ${dropdownSelectedBgColor};
        color: var(--dropdownSelectedTextColor, #2c2c2c);
      }

      ul.dropdown-main li {
        background: ${dropdownBgColor};
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 0.5px solid ${dropdownBgColor};
        border-top: 0.5px solid ${dropdownBgColor};
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
        color: ${dropdownTextColor};
        background: transparent;
        padding: 0;
      }
    `;
  }
}
