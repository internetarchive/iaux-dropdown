![Build Status](https://github.com/internetarchive/iaux-typescript-wc-template/actions/workflows/ci.yml/badge.svg) [![codecov](https://codecov.io/gh/internetarchive/iaux-dropdown/branch/main/graph/badge.svg?token=NdHztWohpj)](https://codecov.io/gh/internetarchive/iaux-dropdown)
# `<ia-dropdown>` web component

<img src="ia-dropdown-ex.gif" style="width: 200px"/>


## Usage
```ts
import { optionInterface } from 'src/ia-dropdown';
const options = [{
  id: 'option-1',
  selectedHandler: (option: optionInterface) => alert(option.id),
  label: html`
    <ia-icon-label>
      <i slot="icon" class="invert-icon-at-hover">?</i>
      <span>Ask Question</span>
    </ia-icon-label>
  `
}]

<ia-dropdown
  options=${options}
  displayCaret
  @optionSelected=${({ detail }) => console.log('changed', detail.option )}
>
  <p id="custom trigger" slot="dropdown-label">Click me to toggle options</p>
</ia-dropdown>
```



#### `<ia-dropdown>` CSS
CSS Vars
Primary:
- `var(--dropdownTextColor, #fff)`
- `var(--dropdownBgColor, #333)`
- `var(--dropdownCaretColor, #fff)`
- `var(--dropdownBorderColor, #fff)`

Selected:
- `var(--dropdownSelectedBgColor, #fff)`
- `var(--dropdownSelectedTextColor, #2c2c2c)`

Hover:
- `var(--dropdownHoverBgColor, #fff)`
- `var(--dropdownHoverTextColor, #2c2f2c)`
- `var(--dropdownHoverTopBottomBorderColor, #333)`

Dropdown list z-index:
- `var(--dropdownListZIndex, 1)`

#### `<ia-icon-label>` CSS

Top Level Classes
- `.invert-icon-at-hover`
  - applies `filter: invert(1)` to icon in `slot[name='icon']` on label hover
- `.invert-icon-at-selected`
- applies `filter: invert(1)` to icon in `slot[name='icon']` when the element has `.selected` class.  `<ia-icon-label class="selected invert-icon-at-selected">`

ex.
```html
<ia-icon-label class="selected invert-icon-at-hover invert-icon-at-selected">
  <i slot="icon" class="my-icon"></i> <!-- <i/> gets `filter: invert(1)` -->
  <span>my label</span>
</ia-icon-label>
```

CSS Vars
- `var(--iconWidth, 20px)`
- `var(--iconHeight, 20px)`
- `var(--iconLabelGutterWidth, 10px)`
- `var(--hoverTextColor, #2c2c2c)`
- `var(--hoverBGColor, #fff)`
- `var(--selectedBgColor, #fff)`
- `var(--selectedTextColor, #2c2c2c)`
- `var(--iconLabelGutterWidth, 10px)`


## Local Demo with `web-dev-server`
```bash
yarn start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
yarn run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
yarn run test:watch
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
yarn run lint
```

You can lint with ESLint and Prettier individually as well
```bash
yarn run lint:eslint
```
```bash
yarn run lint:prettier
```

To automatically fix many linting errors, run
```bash
yarn run format
```

You can format using ESLint and Prettier individually as well
```bash
yarn run format:eslint
```
```bash
yarn run format:prettier
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
