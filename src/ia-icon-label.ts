import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ia-icon-label')
export class IaIconLabel extends LitElement {
  render(): TemplateResult {
    return html`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      --hoverFilter: inherit;
      --selectedFilter: inherit;
    }

    :host(:hover) {
      background-color: var(--hoverBGColor, #fff);
      color: var(--hoverTextColor, #2c2c2c);
    }

    :host(.selected) {
      background-color: var(--hoverBGColor, #fff);
      color: var(--selectedTextColor, #2c2c2c);
    }

    :host(.invert-icon-at-hover.selected:hover) slot[name='icon'] {
      filter: unset;
    }

    :host(.invert-icon-at-hover:hover) slot[name='icon'] {
      filter: invert(1);
    }

    div.icon-label-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      height: 100%;
    }

    slot[name='icon'] {
      width: var(--iconWidth, 20px);
      margin-right: var(--iconLabelGutterWidth, 10px);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      height: 100%;
    }
  `;
}
