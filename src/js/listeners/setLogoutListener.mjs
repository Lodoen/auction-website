import storage from "../storage/index.mjs";

/**
 * Attaches the logout function to the logout button
 * @example
 * ```js
 * setLogoutListener();
 * ```
 */
export default function setLogoutListener() {
  const btn = document.querySelector(".btn-logout");
  if (btn) {
    btn.addEventListener("click", () => {
      storage.remove("name");
      storage.remove("accessToken");
      location.reload();
    });
  }
}
