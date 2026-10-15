/**
 * Class decorator that registers the decorated class as a custom element, unless something has
 * already claimed the tag name.
 *
 * `@internetarchive/elements` ships its own copy of `ia-dropdown` and `ia-icon-label`, and a page
 * can load both it and this package, e.g. Offshoot through collection-browser. Lit's
 * `customElement` calls `customElements.define` unconditionally, which throws on the second copy
 * while this module is still evaluating, so everything importing it fails to load. Skipping the
 * duplicate keeps whichever copy registered first. Both are built from the same source, so either
 * one works.
 *
 * Mirrors `customElement` in `@internetarchive/elements`, which skips the same way.
 *
 * @param tagName The tag name to register the element under.
 */
export function customElement(tagName: string) {
  return (elementClass: typeof HTMLElement): void => {
    if (customElements.get(tagName)) {
      // eslint-disable-next-line no-console
      console.warn(
        `[ia-dropdown] <${tagName}> is already registered, so this definition was skipped and whatever registered first stays in use. Expected when a page also loads @internetarchive/elements, which has its own copy.`,
      );
      return;
    }
    customElements.define(tagName, elementClass);
  };
}
