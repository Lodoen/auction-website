import login from "../api/profile/login.mjs";

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
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const profileDetails = Object.fromEntries(formData.entries());
      login(profileDetails);
    });
  }
}
