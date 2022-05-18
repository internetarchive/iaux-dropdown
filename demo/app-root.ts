/* eslint-disable import/no-duplicates */
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/ia-dropdown';
import { optionInterface } from '../src/ia-dropdown';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <ia-dropdown
        displayCaret
        selectedOption="gooogle-whee"
        .options=${[
          {
            url: 'https://google.com',
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html`<p>wheee</p>`,
            id: 'gooogle-whee',
          } as optionInterface,
          {
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html`<p>wheasdfasdfasdfasfdfsee</p>`,
            id: 'dfasdfasdfasdfasdfasdfsadfdf-whee',
          } as optionInterface,
          {
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html`<p>bacon ipsum bacon ipsum</p>`,
            id: 'bacon ipsum bacon ipsubacon ipsum bacon ipsu-whee',
          } as optionInterface,
          {
            selectedHandler: (option: optionInterface) =>
              this.onSelected(option),
            label: html`<p>
              hipsters-are-still-idk-whehipsters-are-still-idk-whe
            </p>`,
            id: 'hipsters-are-still-idk-where-whee',
          } as optionInterface,
        ]}
      >
        <div slot="dropdown-label">Some slotted content</div>
      </ia-dropdown>
    `;
  }

  onSelected(option: optionInterface) {
    console.log('**** OPTION ', option);
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
