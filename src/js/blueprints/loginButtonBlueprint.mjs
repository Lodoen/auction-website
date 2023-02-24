/**
 * Creates HTML for the login button in the HTML header
 * @returns {HTMLElement} HTML for displaying the login button in the HTML header
 * @example
 * ```js
 * const header = loginButton();
 * ```
 */
export default function loginButtonBlueprint() {
  const loginHref = document.createElement("a");
  loginHref.setAttribute("class", "btn btn-light");
  loginHref.setAttribute("href", `/login`);
  loginHref.innerText = "Login";
  const loginButton = document.createElement("div");
  loginButton.setAttribute(
    "class",
    "d-flex justify-content-end align-items-center"
  );
  loginButton.append(loginHref);
  return loginButton;
}
