import blueprints from "../blueprints/index.mjs";
import listeners from "../listeners/index.mjs";
import "./clearHTML/index.mjs";

/**
 * Renders (or hides) the update form on the profile page
 * @param {boolean} isOpen If the update form is closed or not
 * @param {*} container Container to render the update form
 * @param {*} updateButtonIcon Open / close update form button icon
 * @example
 * ```js
 * renderUpdateForm(isOpen, container, buttonIcon);
 * ```
 */
export default function renderUpdateForm(isOpen, container, updateButtonIcon) {
  if ((container, updateButtonIcon)) {
    try {
      updateButtonIcon.src = isOpen
        ? "../img/icons/edit.png"
        : "../img/icons/close.png";
      if (isOpen) {
        container.clearHTML();
      } else {
        const header = document.createElement("h2");
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
        input.setAttribute("title", "Must be a fully formed URL");
        input.setAttribute("required", "true");

        const inputFeedback = document.createElement("p");
        inputFeedback.setAttribute(
          "class",
          "form-input-feedback m-0 text-danger fst-italic"
        );

        const helpMessage = document.createElement("div");
        helpMessage.setAttribute("id", "avatarHelp");
        helpMessage.setAttribute("class", "form-text");
        helpMessage.innerText = "* Must be a fully formed URL";

        const inputWrapper = document.createElement("div");
        inputWrapper.append(label, input, inputFeedback, helpMessage);

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

        listeners.validateFormInputs(form);
        form.addEventListener("submit", (event) =>
          listeners.updateAvatar(event)
        );

        const formFeedback = document.createElement("div");
        formFeedback.setAttribute("class", "maxw-450 mx-auto");
        formFeedback.setAttribute("id", "form-feedback");

        container.append(header, form, formFeedback);
      }
    } catch (error) {
      container.clearHTML();
      container.append(
        blueprints.feedback(
          "We encountered an error with the update avatar form",
          "warning"
        )
      );
    }
  }
}
