import listeners from "../listeners/index.mjs";
import { basePath } from "../constants/index.mjs";

/**
 * Creates HTML for the user details in the HTML header
 * @param {*} details User details from API call
 * @returns {*} HTML for displaying the user details in the HTML header
 * @example
 * ```js
 * const header = userDetails(details);
 * ```
 */
export default function userDetails({ credits, avatar }) {
  const numberOfCredits = document.createElement("p");
  numberOfCredits.setAttribute("class", "m-0 text-light me-1");
  numberOfCredits.innerText = credits;

  const creditsIcon = document.createElement("img");
  creditsIcon.setAttribute("class", "w-100");
  creditsIcon.setAttribute("alt", "Number of credits");
  creditsIcon.src = `${basePath}/img/icons/tokens.png`;
  const creditsIconWrapper = document.createElement("div");
  creditsIconWrapper.setAttribute(
    "class",
    "d-flex align-items-center nav-credits-icon"
  );
  creditsIconWrapper.append(creditsIcon);

  const creditsWrapper = document.createElement("div");
  creditsWrapper.setAttribute("class", "d-flex align-items-center me-2");
  creditsWrapper.append(numberOfCredits, creditsIconWrapper);

  const profileIcon = document.createElement("img");
  profileIcon.setAttribute("class", "rounded-circle nav-profile-icon");
  profileIcon.setAttribute("alt", "Profile icon");
  profileIcon.src = avatar ? avatar : `${basePath}/img/icons/profile.png`;

  const profileIconWrapper = document.createElement("a");
  profileIconWrapper.setAttribute(
    "class",
    "d-block link-light text-decoration-none dropdown-toggle me-3"
  );
  profileIconWrapper.setAttribute("href", "#");
  profileIconWrapper.setAttribute("data-bs-toggle", "dropdown");
  profileIconWrapper.setAttribute("aria-expanded", "false");
  profileIconWrapper.append(profileIcon);

  const homeHref = document.createElement("a");
  homeHref.setAttribute(
    "class",
    `dropdown-item ${
      !location.pathname.includes("create") &&
      !location.pathname.includes("profile") &&
      !location.pathname.includes("listing")
        ? "text-decoration-underline"
        : ""
    }`
  );
  homeHref.setAttribute("href", `${basePath}/`);
  homeHref.innerText = "Home";
  const homeHrefWrapper = document.createElement("li");
  homeHrefWrapper.append(homeHref);

  const createHref = document.createElement("a");
  createHref.setAttribute(
    "class",
    `dropdown-item ${
      location.pathname.includes("create") ? "text-decoration-underline" : ""
    }`
  );
  createHref.setAttribute("href", `${basePath}/create`);
  createHref.innerText = "Create auction";
  const createHrefWrapper = document.createElement("li");
  createHrefWrapper.append(createHref);

  const profileHref = document.createElement("a");
  profileHref.setAttribute(
    "class",
    `dropdown-item ${
      location.pathname.includes("profile") ? "text-decoration-underline" : ""
    }`
  );
  profileHref.setAttribute("href", `${basePath}/profile`);
  profileHref.innerText = "Profile";
  const profileHrefWrapper = document.createElement("li");
  profileHrefWrapper.append(profileHref);

  const hr = document.createElement("hr");
  hr.setAttribute("class", "dropdown-divider");
  const hrWrapper = document.createElement("li");
  hrWrapper.append(hr);

  const logoutButton = document.createElement("button");
  logoutButton.setAttribute("class", "btn-logout dropdown-item");
  logoutButton.innerText = "Log out";
  logoutButton.addEventListener("click", listeners.logout);
  const logoutButtonWrapper = document.createElement("li");
  logoutButtonWrapper.append(logoutButton);

  const ul = document.createElement("ul");
  ul.setAttribute("class", "dropdown-menu text-small shadow");
  ul.append(
    homeHrefWrapper,
    createHrefWrapper,
    profileHrefWrapper,
    hrWrapper,
    logoutButtonWrapper
  );

  const navigationWrapper = document.createElement("div");
  navigationWrapper.setAttribute("class", "ms-1");
  navigationWrapper.append(profileIconWrapper, ul);

  const userDetails = document.createElement("div");
  userDetails.setAttribute(
    "class",
    "d-flex justify-content-end align-items-center"
  );
  userDetails.append(creditsWrapper, navigationWrapper);
  return userDetails;
}
