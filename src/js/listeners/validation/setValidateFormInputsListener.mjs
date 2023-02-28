import blueprints from "../../blueprints/index.mjs";
import validation from "../../validation/index.mjs";
import "../../render/clearHTML/index.mjs";

/**
 * Attaches validation to a form input
 * @param {HTMLElement} form Form containing the inputs
 * @example
 * ```js
 * setValidateFormInputListener(input);
 * ```
 */
export default function setValidateFormInputsListener(form) {
  if (form) {
    try {
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
    } catch (error) {
      const container = document.querySelector("main");
      if (container) {
        container.clearHTML();

        container.append(
          blueprints.feedback(
            "We encountered a problem with an input field",
            "warning"
          )
        );
      }
    }
  }
}
