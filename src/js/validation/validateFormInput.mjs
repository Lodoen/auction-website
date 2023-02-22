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
  }
}
