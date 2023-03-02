import blueprints from "./index.mjs";
import "../../render/clearHTML/index.mjs";

/**
 * Creates HTML for the modal on the listing page
 * @returns {HTMLElement} HTML for displaying the modal on the listing page
 * @example
 * ```js
 * const modal = modalBlueprint(src);
 * ```
 */
export default function modalBlueprint(src) {
  try {
    const product = document.createElement("img");
    product.setAttribute("class", "mw-100 mh-100");
    product.setAttribute("alt", "Product showcase");
    product.src = src;
    const productShowcase = document.createElement("div");
    productShowcase.setAttribute(
      "class",
      "h-100 d-flex align-items-center justify-content-center"
    );
    productShowcase.append(product);
    const productShowcaseWrapper = document.createElement("div");
    productShowcaseWrapper.setAttribute(
      "class",
      "w-75 h-75 d-flex align-items-center justify-content-center"
    );
    productShowcaseWrapper.append(productShowcase);

    const closeIcon = document.createElement("img");
    closeIcon.setAttribute("class", "mw-100 mh-100");
    closeIcon.setAttribute("alt", "Close modal");
    closeIcon.src = `/img/icons/close.png`;
    const closeIconButton = document.createElement("a");
    closeIconButton.setAttribute("class", "btn btn-link icon-modal p-0");
    closeIconButton.append(closeIcon);
    const closeIconButtonWrapper = document.createElement("div");
    closeIconButtonWrapper.setAttribute(
      "class",
      "position-fixed top-0 end-0 p-5"
    );
    closeIconButtonWrapper.append(closeIconButton);

    const modal = document.createElement("div");
    modal.setAttribute(
      "class",
      "position-fixed top-0 start-0 w-100 h-100 product-showcase-modal d-flex align-items-center justify-content-center"
    );
    modal.append(productShowcaseWrapper, closeIconButtonWrapper);
    closeIconButton.addEventListener("click", () => modal.remove());

    return modal;
  } catch (error) {
    const container = document.querySelector("main");
    if (container) {
      container.clearHTML();
      container.append(
        blueprints.feedback("Something went wrong when handling the modal")
      );
    }
    return "";
  }
}
