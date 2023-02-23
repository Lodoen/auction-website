import auth from "../api/auth/index.mjs";
import storage from "../storage/index.mjs";
import render from "../render/index.mjs";

/**
 * Validates if user is logged in or not
 * @returns {Boolean} TRUE if user is logged in, FALSE if not
 * @example
 * ```js
 * const isLoggedIn = loggedIn();
 * ```
 */
export default async function validateLoggedIn() {
  const username = storage.get("name");
  const loggedInUser = username
    ? await auth.fetch(`/profiles/${username}`)
    : undefined;
  render.loggedInStatus(loggedInUser);
  return loggedInUser ? true : false;
}
