import "../clearHTML/index.mjs";
/**
 * Renders the create CTA on the home page
 * @param {boolean} isLoggedIn if the user is logged in
 * @example
 * ```js
 * renderCreateCTA(isLoggedIn);
 * ```
 */
export default function renderCreateCTA(isLoggedIn) {
  const container = document.getElementById("create-cta");
  if (container) {
    container.clearHTML();
    const cta = document.createElement("a");
    cta.setAttribute(
      "class",
      "btn btn-light border border-dark hover-black px-3 py-2 rounded-pill"
    );
    cta.setAttribute("href", isLoggedIn ? "/create" : "/register");
    cta.innerText = isLoggedIn ? "Create new listing" : "Create new account";
    container.append(cta);
  }
}
