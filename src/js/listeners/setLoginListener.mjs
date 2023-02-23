import login from "../api/profile/login.mjs";
import blueprints from "../blueprints/index.mjs";
import listeners from "./index.mjs";

/**
 * Attaches the login function to the login form
 * @example
 * ```js
 * setLoginListener();
 * ```
 */
export default function setLoginListener() {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    listeners.validateFormInputs(loginForm);
    loginForm.addEventListener("submit", (event) => {
      try {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const profileDetails = Object.fromEntries(formData.entries());
        login(profileDetails);
      } catch (error) {
        const container = document.getElementById("form-feedback");
        if (container) {
          container.append(
            blueprints.feedback(
              "Something went wrong when handling the login form",
              "warning"
            )
          );
        }
      }
    });
  }
}
