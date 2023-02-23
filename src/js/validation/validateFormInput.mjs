import blueprints from "../blueprints/index.mjs";

/**
 * Gives feedback to the user if an input field is invalid
 * @param {boolean} isValid If the input is valid or not
 * @example
 * ```js
 * validateFormInput(isValid);
 * ```
 */
export default function validateFormInput(isValid = false) {
  const input = event.currentTarget;
  if (input) {
    try {
      if (isValid) {
        input.classList.remove("border-danger");
      } else {
        input.classList.add("border-danger");
      }

      const parent = input.parentElement;
      const errorMessage = parent.querySelector(".form-input-feedback");
      if (errorMessage) {
        errorMessage.innerText = isValid ? "" : input.title;
      }
    } catch (error) {
      const container = document.querySelector("main");
      if (container) {
        container.innerHTML = "";
        container.append(
          blueprints.feedback(
            "We encountered an error with an input field",
            "warning"
          )
        );
      }
    }
  }
}
