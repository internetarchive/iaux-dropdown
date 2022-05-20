/* eslint-disable import/no-duplicates */
import { html, css, LitElement, SVGTemplateResult, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../src/ia-dropdown';
import { optionInterface } from '../src/ia-dropdown';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: String, attribute: true, reflect: true }) colorScheme:
    | 'light-bg'
    | 'dark-bg' = 'dark-bg';

  @property({ type: Object }) selectedOption?: optionInterface = undefined;
  // @query('')

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
    return this.selectedOption?.id || '';
  }

  render() {
    return html`
      <section><h2>Testing dropdown</h2></section>
      <button @click=${() => this.changeColors()}>change colors</button>
      <ia-dropdown
        class=${this.colorScheme}
        displayCaret
        selectedOption=${this.selectedOptionId}
        .options=${[
          {
            url: 'https://archive.org/details/inlibrary',
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html`<p>In library collection on Archive.org</p>`,
            id: 'inlibrary',
          } as optionInterface,
          {
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html`<p>Select this option</p>`,
            id: 'foo-bar',
          } as optionInterface,
          {
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html`<p>Best bet</p>`,
            id: 'bar-foo',
          } as optionInterface,
        ]}
      >
        <div slot="dropdown-label">${this.correctIcon}</div>
      </ia-dropdown>
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
    }

    :host([colorscheme='light-bg']) {
      background-color: pink;
    }

    ia-dropdown.light-bg {
      --dropdownCaretColor: #222;
    }

    svg {
      height: 50px;
      width: 50px;
    }
  `;
}
