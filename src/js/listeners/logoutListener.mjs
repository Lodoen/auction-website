import storage from "../storage/index.mjs";
import blueprints from "../blueprints/index.mjs";

/**
 * Attaches the logout functionality to the logout button
 * @example
 * ```js
 * setLogoutListener();
 * ```
 */
export default function logoutListener() {
  try {
    storage.remove("name");
    storage.remove("accessToken");
    if (!storage.get("accessToken")) {
      location.reload();
    }
  } catch (error) {
    const container = document.querySelector("main");
    if (container) {
      container.innerHTML = "";
      container.append(
        blueprints.feedback(
          "We encountered an error in the logout process",
          "danger"
        )
      );
    }
  }
}
