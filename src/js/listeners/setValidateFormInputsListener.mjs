import validation from "../validation/index.mjs";

/**
 * Attaches validation to a form input
 * @param {*} form Form containing the inputs
 * @example
 * ```js
 * setValidateFormInputListener(input);
 * ```
 */
export default function setValidateFormInputsListener(form) {
  if (form) {
    const inputs = form.querySelectorAll("[required");
    if (inputs) {
      inputs.forEach((input) => {
        input.addEventListener("blur", () => {
          if (input.checkValidity()) {
            validation.formInput(true);
          }
        });
        input.addEventListener("invalid", () => validation.formInput());
      });
    }
  }
}
