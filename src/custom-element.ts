/** Allows custom element classes with private or non-default constructors */
type CustomElementClass = Omit<typeof HTMLElement, 'new'>;

/**
 * Class decorator that registers the decorated class as a custom element, unless something has
 * already claimed the tag name.
 *
 * `@internetarchive/elements` 1.3 ships its own copies of `ia-dropdown` and `ia-icon-label`, and a
 * page can load both it and this package, e.g. through collection-browser. Lit's `customElement`
 * calls `customElements.define` unconditionally, which throws on the second copy while this module
 * is still evaluating, so everything importing it fails to load. Skipping the duplicate keeps
 * whichever copy registered first, and every `<ia-dropdown>` on the page uses that copy's class.
 *
 * The copies in this package (2.3.0) and in elements 1.3 render and behave the same, but they're
 * separate code and can drift: a fix in one doesn't reach a page where the other registered first.
 * When this copy loses, its exported classes aren't the registered ones, so `new IaDropdown()`
 * throws and `instanceof IaDropdown` is false.
 *
 * Mirrors `customElement` in `@internetarchive/elements`.
 *
 * @param tagName The tag name to register the element under.
 */
export function customElement(tagName: string) {
  return (
    classOrTarget: CustomElementClass,
    // eslint-disable-next-line no-undef
    context?: ClassDecoratorContext<new () => HTMLElement>,
  ): void => {
    const define = (): void => {
      if (customElements.get(tagName)) {
        // eslint-disable-next-line no-console
        console.warn(
          `[ia-dropdown] <${tagName}> is already registered, so this definition was skipped and whatever registered first stays in use. Harmless when the other copy is from @internetarchive/elements or the same version of this package. Otherwise look for a second version of this package, or an unrelated element using the same name.`,
        );
        return;
      }
      customElements.define(tagName, classOrTarget as typeof HTMLElement);
    };

    // Standard decorators defer registration to an initializer; the legacy decorators this
    // package compiles with hand over the class directly
    if (context) context.addInitializer(define);
    else define();
  };
}
