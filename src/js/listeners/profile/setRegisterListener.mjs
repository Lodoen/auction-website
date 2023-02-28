import register from "../../api/profile/register.mjs";
import listeners from "../index.mjs";
import blueprints from "../../blueprints/index.mjs";

/**
 * Attaches the register function to the register form
 * @example
 * ```js
 * setRegisterListener();
 * ```
 */
export default function setRegisterListener() {
  const registerForm = document.getElementById("register-form");

  if (registerForm) {
    listeners.validateFormInputs(registerForm);

    registerForm.addEventListener("submit", async (event) => {
      try {
        event.preventDefault();
        const formData = new FormData(registerForm);
        const profileDetails = Object.fromEntries(formData.entries());
        register(profileDetails);
      } catch (error) {
        const container = document.getElementById("form-feedback");
        if (container) {
          container.append(
            blueprints.feedback(
              "Something went wrong when handling the register form",
              "warning"
            )
          );
        }
      }
    });
  }
}
