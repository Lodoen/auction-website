import display from "../display/index.mjs";
import validation from "./index.mjs";
/**
 * Runs callback function if the user is authenticated (logged in)
 * @param {*} needsToBeAuthenticated function to run if user is authenticated
 * @example
 * ```js
 * validation.authenticated(show.specificListing);
 * ```
 */
export default async function authenticated(needsToBeAuthenticated) {
  const container = document.querySelector("main");
  try {
    const isLoggedIn = await validation.loggedIn();
    if (!isLoggedIn) {
      document.title = "Not authenticated | Electroneer";
      container.innerHTML = "";
      container.append(display.userIsNotAuthenticated());
    } else {
      needsToBeAuthenticated();
    }
  } catch (error) {
    container.innerHTML = "";
    container.append(
      display.feedback(
        "Something went wrong when trying to authenticate your login info",
        "warning"
      )
    );
  }
}
