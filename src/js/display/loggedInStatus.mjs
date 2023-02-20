import blueprints from "../blueprints/index.mjs";
/**
 * Updates HTML header to indicate if user is logged in or not
 * @param {*} key Fetched user data from API
 * @example
 * ```js
 * loggedInStatus(loggedInUser);
 * ```
 */
export default function loggedInStatus(loggedInUser) {
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
