import listeners from "../listeners/index.mjs";

/**
 * Displays or hides the update form on the profile page
 * @example
 * ```js
 * display.updateForm();
 * ```
 */
export default function updateForm(isOpen) {
  const updateWrapper = document.getElementById("update-profile");
  const updateButtonIcon = document.querySelector(
    "section#profile-image button img"
  );
  if ((updateWrapper, updateButtonIcon)) {
    updateButtonIcon.src = isOpen
      ? "../img/icons/edit.png"
      : "../img/icons/close.png";
    if (isOpen) {
      updateWrapper.innerHTML = "";
    } else {
      const header = document.createElement("h2");
      header.setAttribute("class", "");
      header.innerText = "Update avatar";

      const label = document.createElement("label");
      label.setAttribute("class", "form-label mb-0");
      label.setAttribute("for", "avatar");
      label.innerText = "New avatar * :";

      const input = document.createElement("input");
      input.setAttribute("type", "url");
      input.setAttribute("class", "form-control");
      input.setAttribute("id", "avatar");
      input.setAttribute("name", "avatar");
      input.setAttribute("placeholder", "Updated avatar url");
      input.setAttribute("aria-describedby", "avatarHelp");

      const helpMessage = document.createElement("div");
      helpMessage.setAttribute("id", "avatarHelp");
      helpMessage.setAttribute("class", "form-text");
      helpMessage.innerText = "* Must be a fully formed URL";

      const inputWrapper = document.createElement("div");
      inputWrapper.append(label, input, helpMessage);

      const button = document.createElement("button");
      button.setAttribute(
        "class",
        'btn btn-secondary w-100 rounded-pill hover-secondary"'
      );
      button.setAttribute("type", "submit");
      button.innerText = "Update";

      const form = document.createElement("form");
      form.setAttribute("class", "maxw-450 mx-auto my-4");
      form.append(inputWrapper, button);

      form.addEventListener("submit", (event) => listeners.updateAvatar(event));

      const formFeedback = document.createElement("div");
      formFeedback.setAttribute("class", "maxw-450 mx-auto");
      formFeedback.setAttribute("id", "form-feedback");

      updateWrapper.append(header, form, formFeedback);
    }
  }
}
