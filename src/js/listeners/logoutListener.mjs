import storage from "../storage/index.mjs";

/**
 * Attaches the logout functionality to the logout button
 * @example
 * ```js
 * setLogoutListener();
 * ```
 */
export default function logoutListener() {
  storage.remove("name");
  storage.remove("accessToken");
  if (!storage.get("accessToken")) {
    location.reload();
  }
}
