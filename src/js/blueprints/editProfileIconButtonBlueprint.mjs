import render from "../render/index.mjs";

/**
 * Creates HTML for the edit profile icon button on the profile page
 * @param {*} container Container to render the update form
 * @returns {*} HTML for displaying the edit profile icon button
 * @example
 * ```js
 * const button = editProfileIconBlueprint(container);
 * ```
 */
export default function editProfileIconBlueprint(container) {
  let isOpen = false;
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
  button.addEventListener("click", () => {
    render.updateForm(isOpen, container, icon);
    isOpen = isOpen ? false : true;
  });
  button.append(icon);
  return button;
}
