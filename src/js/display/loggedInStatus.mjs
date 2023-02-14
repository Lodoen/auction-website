/**
 * Updates HTML header to indicate if user is logged in or not
 * @param {*} key Fetched user data from API
 * @example
 * ```js
 * loggedInStatus(loggedInUser);
 * ```
 */
export default function loggedInStatus(loggedInUser) {
  if (!loggedInUser) {
    const userLoginWrapper = document.getElementById("user-login");
    if (userLoginWrapper) {
      userLoginWrapper.setAttribute("class", "w-100 d-flex justify-content-end align-items-center");
    }
  } else {
    const { credits, avatar } = loggedInUser;
    const userInfoWrapper = document.getElementById("user-info");
    if (userInfoWrapper) {
      const profileIconWrapper = document.getElementById("profile-icon");
      const creditsWrapper = document.getElementById("number-of-tokens");

      if (avatar && profileIconWrapper) {
        profileIconWrapper.src = avatar;
      }
      if (credits && creditsWrapper) {
        creditsWrapper.textContent = credits;
      }

      userInfoWrapper.setAttribute("class", "w-100 d-flex justify-content-end align-items-center");
    }
  }
  const userLoadingWrapper = document.getElementById("user-loading");
  if (userLoadingWrapper) {
    userLoadingWrapper.setAttribute("class", "d-none");
  }
}
