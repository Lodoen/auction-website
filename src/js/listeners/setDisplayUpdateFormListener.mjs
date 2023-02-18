import display from "../display/index.mjs";

/**
 * Attaches the display form functionality to the open form button
 * @example
 * ```js
 * setDisplayUpdateFormListener(button);
 * ```
 */
export default async function setDisplayUpdateFormListener(btn) {
  let isOpen = false;
  btn.addEventListener("click", () => {
    display.updateForm(isOpen);
    isOpen = isOpen ? false : true;
  });
}
