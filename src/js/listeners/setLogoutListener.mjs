import storage from "../storage/index.mjs";

/**
 * Attaches the logout functionality to the logout button
 * @example
 * ```js
 * setLogoutListener();
 * ```
 */
export default function setLogoutListener() {
  const btn = document.querySelector(".btn-logout");
  const homeHref = document.querySelector("nav .nav-logo");
  if (btn) {
    btn.addEventListener("click", () => {
      storage.remove("name");
      storage.remove("accessToken");
      homeHref ? location.replace(homeHref.href) : location.reload();
    });
  }
}
