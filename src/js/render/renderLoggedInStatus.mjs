import blueprints from "../blueprints/index.mjs";
import "./clearHTML/index.mjs";
/**
 * Renders the header to indicate if user is logged in or not
 * @param {*} loggedInUser User data to render
 * @example
 * ```js
 * renderLoggedInStatus(loggedInUser);
 * ```
 */
export default function renderLoggedInStatus(loggedInUser) {
  const container = document.getElementById("user-details");
  if (container) {
    container.clearHTML();
    container.append(
      loggedInUser
        ? blueprints.userDetails(loggedInUser)
        : blueprints.loginButton()
    );
  }
}
