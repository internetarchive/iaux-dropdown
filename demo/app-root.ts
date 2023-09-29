/* eslint-disable import/no-duplicates */
import {
  html,
  css,
  LitElement,
  SVGTemplateResult,
  svg,
  TemplateResult,
  nothing,
} from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import '../src/ia-dropdown';
import { optionInterface } from '../src/ia-dropdown';
import '../src/ia-icon-label';
import './item-userlists';
import {
  userlistDataInterface,
  userlistTestData,
} from './item-userlists-model';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: String, attribute: true, reflect: true }) colorScheme:
    | 'light-bg'
    | 'dark-bg' = 'dark-bg';

  @property({ type: Object }) selectedOption?: optionInterface = undefined;

  @state() private displayCaret: boolean = true;

  @state() private openViaButton: boolean = true;

  @state() private openViaCaret: boolean = true;

  @state() private closeOnSelect: boolean = false;

  @state() private includeSelectedOption: boolean = false;

  // Count for main button icon state
  @state() private selectedCount: number = 0;

  // Data for userlist dropdown
  @state() private userlistData: userlistDataInterface[] = [];

  @query('#display-caret-check')
  private displayCaretCheck!: HTMLInputElement;

  @query('#open-via-button')
  private openViaButtonCheck!: HTMLInputElement;

  @query('#open-via-caret')
  private openViaCaretCheck!: HTMLInputElement;

  @query('#close-on-select')
  private closeOnSelectCheck!: HTMLInputElement;

  @query('#include-selected-option')
  private includeSelectedOptionCheck!: HTMLInputElement;

  constructor() {
    super();
    // Copy sample userlist data
    this.userlistData = [...userlistTestData];

    // Initialize selected count for main button icon state
    this.selectedCount = this.userlistData.filter(
      item => item.item_is_member
    ).length;

    // Listen for closeDropdown event from item-userlists
    const eventListener = (e: CustomEvent) => {
      this.selectedCount = e.detail.selected as number;
      // Set selected count for main button icon state
      console.log('Selected count: ', e.detail.selected);
    };
    // eslint-disable-next-line no-undef
    this.addEventListener('selectDropdown', eventListener as EventListener);
  }

  get correctIcon(): SVGTemplateResult {
    const dark = svg`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#2c2c2c"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#fff"/></g></svg>`;
    const light = svg`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#fff"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#2c2c2c"/></g></svg>`;

    return this.colorScheme === 'light-bg' ? dark : light;
  }

  changeColors() {
    if (this.colorScheme === 'light-bg') {
      this.colorScheme = 'dark-bg';
      return;
    }

    this.colorScheme = 'light-bg';
  }

  get selectedOptionId(): optionInterface['id'] | '' {
    return this.selectedOption?.id || 'inlibrary';
  }

  get iconForDropdown(): SVGTemplateResult {
    return svg`
<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 100 100" fill="#F6C604">
  <path d="m100 100c-.0788644-59.2647367-50.2714038-101.00902058-98.53801845-99.98144054l-1.46198155.0442569v16.87562024c22.8467642.7675814 42.5293949 8.6269128 58.4998247 24.6886733 15.7693479 15.8548913 23.4604084 35.3676837 24.3442587 57.6217172l.0272163.7511729zm-35.0356755 0c1.2744013-36.4110804-31.8141828-66.5076376-63.9896269-64.941512l-.9746976.0571761v16.4599701c18.3229442 1.9606235 31.4808606 9.0936501 39.502426 21.3048035 4.6504757 7.0775287 7.5752956 15.864554 8.7788978 26.3313997l.087043.7881626zm-51.8428762-.0000003c6.9413142-.0063426 12.8048731-5.8658088 12.877673-12.8772036.080713-7.5342784-5.4077681-13.1196268-12.8919165-13.1227964-7.21668788-.0015839-13.2669944 6.0654513-13.10398588 13.1338879.16300852 6.7911498 6.35891488 12.8724454 13.11822938 12.8661121z" fill-rule="evenodd"/>
  </svg>
   `;
  }

  get checkIcon(): SVGTemplateResult {
    return svg`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 17.5px; height: 17.5px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`;
  }

  get plusIcon(): SVGTemplateResult {
    return svg`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="width: 17.5px; height: 17.5px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`;
  }

  get slottedCaretUp(): SVGTemplateResult {
    return svg`<svg
    slot="caret-up"
    class="caret-up-svg"
    style="height: 10px; width: 10px;"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m5 3 5 5h-10z" fill="" fill-rule="evenodd" />
  </svg>`;
  }

  get slottedCaretDown(): SVGTemplateResult {
    return svg`<svg
    slot="caret-down"
    class="caret-down-svg"
    style="height: 10px; width: 10px;"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m5 8 5-5h-10z" fill="" fill-rule="evenodd" />
  </svg>`;
  }

  private checkboxRowTemplate(options: {
    id: string;
    label: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (e?: Event) => any;
  }): TemplateResult {
    return html`
      <div>
        <input
          type="checkbox"
          id=${options.id}
          ?checked=${options.isChecked ?? false}
          ?disabled=${options.isDisabled ?? false}
          @change=${options.onChange ?? nothing}
        />
        <label for=${options.id}>${options.label}</label>
      </div>
    `;
  }

  get mainButton(): TemplateResult {
    return html`
      <div class="action-bar-text">
        <ia-icon-label>
          <div slot="icon" class="icon-img">
            ${this.selectedCount > 0 ? this.checkIcon : this.plusIcon}
          </div>
          <div class="label">Add Item to List</div>
          <div class="label-sm">Lists</div>
        </ia-icon-label>
      </div>
    `;
  }

  get itemUserlists(): TemplateResult {
    return html`
      <item-userlists
        slot="menu-slot"
        .lists=${this.userlistData}
      ></item-userlists>
    `;
  }

  render() {
    const fooBarIsSelected = this.selectedOptionId === 'foo-bar';
    return html`
      <section><h2>Testing dropdown</h2></section>

      ${this.checkboxRowTemplate({
        id: 'display-caret-check',
        label: 'Display caret',
        isChecked: this.displayCaret,
        onChange: () => {
          this.displayCaret = this.displayCaretCheck.checked;
          if (!this.displayCaret) {
            this.openViaCaret = false;
            this.openViaCaretCheck.checked = false;
          }
        },
      })}
      ${this.checkboxRowTemplate({
        id: 'open-via-button',
        label: 'Open via button',
        isChecked: this.openViaButton,
        onChange: () => {
          this.openViaButton = this.openViaButtonCheck.checked;
        },
      })}
      ${this.checkboxRowTemplate({
        id: 'open-via-caret',
        label: 'Open via caret',
        isChecked: this.openViaCaret,
        isDisabled: !this.displayCaret,
        onChange: () => {
          this.openViaCaret = this.openViaCaretCheck.checked;
        },
      })}
      ${this.checkboxRowTemplate({
        id: 'close-on-select',
        label: 'Close dropdown upon selection',
        isChecked: this.closeOnSelect,
        onChange: () => {
          this.closeOnSelect = this.closeOnSelectCheck.checked;
        },
      })}
      ${this.checkboxRowTemplate({
        id: 'include-selected-option',
        label: 'Include selected option in dropdown',
        isChecked: this.includeSelectedOption,
        onChange: () => {
          this.includeSelectedOption = this.includeSelectedOptionCheck.checked;
        },
      })}

      <button class="change-color" @click=${() => this.changeColors()}>
        change colors
      </button>

      <ia-dropdown
        class=${this.colorScheme}
        ?displayCaret=${this.displayCaret}
        ?openViaButton=${this.openViaButton}
        ?openViaCaret=${this.openViaCaret}
        ?closeOnSelect=${this.closeOnSelect}
        ?includeSelectedOption=${this.includeSelectedOption}
        selectedOption=${this.selectedOptionId}
        .options=${[
          {
            url: 'https://archive.org/details/inlibrary',
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html`<ia-icon-label>
              <div slot="icon">${this.iconForDropdown}</div>
              Archive.org/inlibrary
            </ia-icon-label>`,
            id: 'inlibrary',
          } as optionInterface,
          {
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html` <ia-icon-label
              class="invert-icon-at-hover invert-icon-at-selected ${fooBarIsSelected
                ? 'selected'
                : ''}"
            >
              <div slot="icon">${this.iconForDropdown}</div>
              Select this option
            </ia-icon-label>`,
            id: 'foo-bar',
          } as optionInterface,
          {
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html`<p>Third option, just a label</p>`,
            id: 'bar-foo',
          } as optionInterface,
        ]}
      >
        <div slot="dropdown-label">${this.correctIcon}</div>
      </ia-dropdown>
      <hr />
      <section><h2>Testing slotted caret</h2></section>

      <div class="slotted-test">
        <ia-dropdown
          class="slotted-caret"
          ?displaycaret=${true}
          ?openViaButton=${false}
          ?openViaCaret=${true}
          ?closeOnSelect=${false}
          ?includeSelectedOption=${this.includeSelectedOption}
          selectedOption=${this.selectedOptionId}
          .options=${[
            {
              url: 'https://archive.org/details/inlibrary',
              selectedHandler: (option: optionInterface) =>
                this.onSelected(option),
              label: html`<ia-icon-label>
                <div slot="icon">${this.iconForDropdown}</div>
                Archive.org/inlibrary
              </ia-icon-label>`,
              id: 'inlibrary',
            } as optionInterface,
            {
              selectedHandler: (option: optionInterface) =>
                this.onSelected(option),
              label: html` <ia-icon-label
                class="invert-icon-at-hover invert-icon-at-selected ${fooBarIsSelected
                  ? 'selected'
                  : ''}"
              >
                <div slot="icon">${this.iconForDropdown}</div>
                Select this option
              </ia-icon-label>`,
              id: 'foo-bar',
            } as optionInterface,
            {
              selectedHandler: (option: optionInterface) =>
                this.onSelected(option),
              label: html`<p>Third option, just a label</p>`,
              id: 'bar-foo',
            } as optionInterface,
          ]}
        >
          <div class="list-title" slot="dropdown-label">My Lists</div>
          ${this.slottedCaretUp} ${this.slottedCaretDown}
        </ia-dropdown>
      </div>

      <hr />
      <section><h2>Testing userlist check dropdown</h2></section>

      <div class="list-test">
        <ia-dropdown
          class="list-dropdown"
          ?displaycaret=${false}
          ?openViaButton=${true}
          ?openViaCaret=${false}
          ?closeOnSelect=${true}
          ?includeSelectedOption=${true}
          ?isCustomList=${true}
        >
          <div class="list-title" slot="dropdown-label">${this.mainButton}</div>
          ${this.itemUserlists}
        </ia-dropdown>
      </div>
    `;
  }

  onSelected(option: optionInterface) {
    console.log('**** OPTION ', option);
    this.selectedOption = option;
  }

  static styles = css`
    :host {
      display: block;
    }

    :host([colorscheme='dark-bg']) {
      background-color: black;
      color: white;
    }

    :host([colorscheme='light-bg']) {
      background-color: pink;
      color: black;
    }

    button.change-color {
      margin: 10px 0;
    }

    ia-dropdown.light-bg {
      --dropdownCaretColor: #222;
    }

    div.list-title {
      font-weight: 600;
      color: #222;
    }

    .slotted-test,
    .list-test {
      padding: 10px 0 0 10px;
      background-color: white;
      height: auto;
      width: 200px;
    }

    div.list-test {
      height: 300px;
    }

    .list-test {
      --dropdownBgColor: #fff;
      --dropdownItemPaddingRight: 0;
      --dropdownItemPaddingLeft: 2px;
      --dropdownBorderColor: blue;
      --dropdownBorderWidth: 2px;
      --iconLabelGutterWidth: 4px;
      --iconWidth: 10px;
      --dropdownOffsetTop: 2px;
      --buttonSlotPaddingRight: 0;
      --dropdownMainButtonFlexDirection: column;
      --dropdownMainButtonPadding: 5px 5px;
      --iconLabelGutterWidth: 0;
      --iconWidth: 17.5px;
      --dropdownMainButtonBorder: 2px solid #2c2c2c;
      --dropdownMainButtonBorderRadius: 3px;
    }

    .list-title button:hover {
      /* 10% */
      background-color: /* #eaeaea */ rgba(44, 44, 44, 0.1);
    }

    .list-title button:active {
      /* 30% */
      background-color: /* #c0c0c0 */ rgba(44, 44, 44, 0.3);
    }

    ia-dropdown.slotted-caret {
      --dropdownCaretColor: #222;
      --caretPadding: 0 0 6px 5px;
      --dropdownListPosition: relative;
    }

    .action-bar-text {
      font-weight: normal;
      --iconLabelFlexDirection: column;
      --iconLabelGutterWidth: 0;
      --iconWidth: 17.5px;
      background-color: #fff;
    }

    /* inside button.click-main, classname from details.inc buttons */
    @media (min-width: 768px) {
      .action-bar-text {
        /* for long text, thin L/R padding */
        padding: 2px 1px;
      }

      .action-bar-text .label-sm {
        display: none;
      }
    }

    @media (max-width: 767px) {
      .action-bar-text {
        padding: 2px 2px;
      }

      .action-bar-text .label {
        display: none;
      }
    }

    svg {
      height: 30px;
      width: 30px;
    }
  `;
}
