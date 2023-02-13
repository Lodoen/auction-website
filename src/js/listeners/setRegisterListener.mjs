import register from "../api/profile/register.mjs";

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
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(registerForm);
      const profileDetails = Object.fromEntries(formData.entries());
      register(profileDetails);
    });
  }
}
