import blueprints from "../blueprints/index.mjs";
/**
 * Renders the header to indicate if user is logged in or not
 * @param {*} key Fetched user data from API
 * @example
 * ```js
 * renderLoggedInStatus(loggedInUser);
 * ```
 */
export default function renderLoggedInStatus(loggedInUser) {
  const container = document.getElementById("user-details");
  if (container) {
    container.innerHTML = "";
    container.append(
      loggedInUser
        ? blueprints.userDetails(loggedInUser)
        : blueprints.loginButton()
    );
  }
}
