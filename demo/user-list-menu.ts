import {
  html,
  css,
  svg,
  LitElement,
  TemplateResult,
  SVGTemplateResult,
} from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../src/ia-icon-label';
import { userListInterface, userListTestData } from './user-lists';

interface optionInterface {
  selectedHandler?: Function;
  label: string | TemplateResult;
  id: string;
  isSelected?: boolean;
}

@customElement('user-list-menu')
export class UserListMenu extends LitElement {
  /**
   * Determines whether the menu is currently visible.
   */
  @property({ type: Boolean, attribute: true }) open = true;

  /**
   * The identifier of the item that is currently selected.
   */
  @property({ type: String }) identifier = 'foo';

  get dropdownState(): string {
    if (this.open) {
      return 'open';
    }
    return 'closed';
  }

  get checkIcon(): SVGTemplateResult {
    return svg`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="height: 10px; width: 10px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`;
  }

  get addIcon(): SVGTemplateResult {
    return svg`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="height: 10px; width: 10px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`;
  }

  renderOption(option: optionInterface): TemplateResult {
    const { label, isSelected, id } = option;
    const selected = isSelected ? 'selected' : '';
    // @click=${() => this.optionClicked(option)}
    const component = html`<button
      id="${id}"
      @click=${() => this.optionClicked(option)}
    >
      ${label}
    </button> `;

    return html`<li class=${selected}>${component}</li>`;
  }

  optionClicked(option: optionInterface): void {
    this.dispatchEvent(
      new CustomEvent('optionSelected', {
        detail: { option },
      })
    );
    option.selectedHandler?.(option);
    this.open = false;
  }

  private checkedIcon(list: userListInterface): TemplateResult {
    if (list.items?.includes(this.identifier)) {
      return html`${this.checkIcon}`;
    }
    return html``;
  }

  get userListOptions(): optionInterface[] {
    const options: optionInterface[] = [];

    userListTestData.forEach(list => {
      const listOption = {
        label: html`<ia-icon-label>
          <div slot="icon">${this.checkedIcon(list)}</div>
          ${list.name}
        </ia-icon-label>`,
        id: list.id,
        selectedHandler: (option: optionInterface) => this.onSelected(option),
      } as optionInterface;
      options.push(listOption);
    });

    const createNewListOption: optionInterface = {
      label: html`<ia-icon-label>
        <div slot="icon">${this.addIcon}</div>
        Create new list
      </ia-icon-label>`,
      id: 'create-new-list',
    };
    options.push(createNewListOption);

    return options;
  }

  onSelected(option: optionInterface): void {
    console.log('onSelected', option);
  }

  render() {
    return html` ${this.userListOptions.map(o => this.renderOption(o))} `;
  }

  static get styles() {
    return css`
      :host {
        display: inline;
        background-color: #fff;
      }

      li:hover {
        list-style: none;
        cursor: pointer;
        opacity: 90%;
      }

      li {
        background: #fff;
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 0.5px solid #999;
        color: #333;
        width: 110px;
        text-overflow: ellipsis;
      }

      li button {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        padding: 0px 4px;
      }

      /* cover the list with the label */
      li > * > :first-child {
        margin: 0;
        display: inline-block;
        /*         align-items: center;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap; */
        height: 30px;
        padding: var(--dropdownItemPaddingTop, 5px)
          var(--dropdownItemPaddingRight, 10px)
          var(--dropdownItemPaddingBottom, 5px)
          var(--dropdownItemPaddingLeft, 10px);
        box-sizing: border-box;
        text-align: left;
      }

      ::slotted(*) {
        --iconWidth: 2px;
        --iconLabelGutterWidth: 2px;
      }

      ::slotted(text) {
        text-overflow: ellipsis;
      }
    `;
  }
}
