import listeners from "../listeners/index.mjs";

/**
 * Creates HTML for the edit profile icon button on the profile page
 * @example
 * ```js
 * display.editProfileIcon();
 * ```
 */
export default async function editProfileIcon(container) {
  if (container) {
    const icon = document.createElement("img");
    icon.setAttribute("class", "w-100");
    icon.setAttribute("alt", "Edit profile icon");
    icon.src = "../img/icons/edit.png";
    const button = document.createElement("button");
    button.setAttribute(
      "class",
      "icon btn btn-link p-0 position-absolute top-0 end-0"
    );
    button.setAttribute("type", "button");
    listeners.displayUpdateForm(button);
    button.append(icon);
    container.append(button);
  }
}
