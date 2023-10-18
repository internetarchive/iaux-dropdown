![Build Status](https://github.com/internetarchive/iaux-typescript-wc-template/actions/workflows/ci.yml/badge.svg) [![codecov](https://codecov.io/gh/internetarchive/iaux-dropdown/branch/main/graph/badge.svg?token=NdHztWohpj)](https://codecov.io/gh/internetarchive/iaux-dropdown)
# `<ia-dropdown>` web component

<img src="ia-dropdown-ex.gif" style="width: 200px"/>


## Usage
```ts
import { optionInterface } from 'src/ia-dropdown';
const options = [{
  id: 'option-1',
  url: 'https://example.com',
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

#### `<ia-dropdown>` public properties

- **`open`** controls whether the dropdown menu is currently visible
  - default: `false`
- **`displayCaret`** controls whether the dropdown caret should be present
  - default: `false`
- **`closeOnSelect`** controls whether selecting an option in the dropdown menu should close it
  - default: `false`
- **`openViaButton`** controls whether clicking on the main button (not including the caret) should open the dropdown menu
  - default: `true`
- **`openViaCaret`** controls whether clicking on the main button's caret (if present) should open the dropdown menu
  - default: `true`
- **`includeSelectedOption`** controls whether the currently-selected option is included in the dropdown menu
  - default: `false`
- **`options`** specifies the list of items available in the dropdown menu, using the structure shown above. Only `id` and `label` are required.
  - default: `[]`
  - Other menu option types can be used by setting `isCustomList` to `true` and using the `list` slot with a custom list component.
- **`selectedOption`** is a string specifying the `id` of the currently-selected option
  - default: `''`
- **`optionGroup`** is a string describing the dropdown's purpose, accessible to screen-readers only
  - default: `options`
-  **`isCustomList`** replaces default option list with slot `list` allowing a custom list component to be used with different option type and behavior
   - default: `false`
-  **`closeOnEscape`** controls whether the dropdown menu should close when the escape key is pressed
   - default: `false`
-  **`closeOnBackdropClick`** controls whether the dropdown menu should close when the backdrop is clicked
   - default: `false`

#### `<ia-dropdown>` slots
- `slot="dropdown-label"` the main button that opens the dropdown menu.
- `slot="caret-up"` replaces default up caret svg.
  - Use both `slot="caret-up"` and `class="caret-up-svg"` in the `<svg>`.
- `slot="caret-down"` replaces default down caret svg.
  - Use both `slot="caret-down"` and `class="caret-down-svg"` in the `<svg>`.
- `slot="list"` allows replacing default dropdown menu option type and behavior.

#### `<ia-dropdown>` events
Listens for:
- `closeDropdown` closes the dropdown menu
Dispatches:
- `optionSelected` when an option is selected in the dropdown menu

#### `<ia-dropdown>` CSS
CSS Vars
Primary:
- `var(--dropdownFontSize, 1rem)`
- `var(--dropdownTextColor, #fff)`
- `var(--dropdownBgColor, #333)`
- `var(--dropdownCaretColor, #fff)`
- `var(--dropdownBorderColor, #fff)`
- `var(--dropdownBorderWidth, 1px)`
  - Or override with: `--dropdownBorderTopWidth` (similarly for `Right`, `Bottom`, and `Left`)
- `var(--dropdownBorderRadius, 4px)`
  - Or override with `--dropdownBorderTopLeftRadius` (similarly for `TopRight`, `BottomRight`, and `BottomLeft`)
- `var(--dropdownOffsetTop, 5px)` (vertical distance between main button and dropdown)
- `var(--dropdownButtonPadding, 0)`
- `var(--dropdownWhiteSpace, normal)` (NB: setting to `nowrap` allows the dropdown to exceed the main button's width)

Selected:
- `var(--dropdownSelectedBgColor, #fff)`
- `var(--dropdownSelectedTextColor, #2c2c2c)`

Hover:
- `var(--dropdownHoverBgColor, #fff)`
- `var(--dropdownHoverTextColor, #2c2f2c)`
- `var(--dropdownHoverTopBottomBorderColor, #333)`

Dropdown list position:
- `var(--dropdownListPosition, absolute)` (dropdown pops up over content)
- `var(--dropdownListPosition, relative)` (dropdown accordians with content)

Dropdown list z-index:
- `var(--dropdownListZIndex, 1)`

Dropdown item padding:
- `var(--dropdownItemPaddingTop, 5px)` (similarly for `Right`, `Bottom`, and `Left`)

Main button:
- `var(--dropdownMainButtonPadding, 0px)`
- `var(--dropdownMainButtonBorder, none)`
- `var(--dropdownMainButtonBorderRadius, none)`
- `var(--dropdownMainButtonFlexDirection, row)` (Setting to `column` allows vertical layout)
- `var(--dropdownMainButtonHoverBgColor, inherit)`
- `var(--dropdownMainButtonFocusBgColor, inherit)`
- `var(--dropdownMainButtonActiveBgColor, inherit)`

Caret:
- `var(--caretWidth, 20px)`
- `var(--caretHeight, 10px)`
- `var(--caretPadding, 0)`

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

Child Classes
- `truncate`
  - applies `text-overflow: ellipsis` to text in children of unnamed slot which use this class
  - applies `-webkit-line-clamp: 2` if supported by browser

CSS Vars
- `var(--iconWidth, 20px)`
- `var(--iconHeight, 20px)`
- `var(--iconLabelGutterWidth, 10px)`
- `var(--hoverTextColor, #2c2c2c)`
- `var(--hoverBGColor, #fff)`
- `var(--selectedBgColor, #fff)`
- `var(--selectedTextColor, #2c2c2c)`
- `var(--iconLabelGutterWidth, 10px)`
- `var(--iconLabelFlexDirection, row)` (setting to `column` allows vertical layout)

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
