import validation from "./index.mjs";
import blueprints from "../blueprints/index.mjs";
/**
 * Runs callback function if the user is authenticated (logged in)
 * @param {*} needsToBeAuthenticated function to run if user is authenticated
 * @example
 * ```js
 * validateAuthenticated(show.specificListing);
 * ```
 */
export default async function validateAuthenticated(needsToBeAuthenticated) {
  const container = document.querySelector("main");
  if (container) {
    try {
      const isLoggedIn = await validation.loggedIn();
      if (!isLoggedIn) {
        document.title = "Not authenticated | Electroneer";
        container.innerHTML = "";
        container.append(blueprints.notAuthenticated());
      } else {
        needsToBeAuthenticated();
      }
    } catch (error) {
      container.innerHTML = "";
      container.append(
        blueprints.feedback(
          "Something went wrong when trying to authenticate your login info",
          "warning"
        )
      );
    }
  }
}
