import storage from "../storage/index.mjs";
import editProfileIcon from "../api/profile/editProfileIcon.mjs";
import blueprints from "../blueprints/index.mjs";

/**
 * Attaches the update profile icon functionality to the update profile icon form
 * @param {*} event event
 * @example
 * ```js
 * form.addEventListener("submit", (event) => listeners.updateAvatar(event));
 * ```
 */
export default async function updateAvatarListener(event) {
  const formFeedback = document.getElementById("form-feedback");
  if (formFeedback) {
    try {
      event.preventDefault();
      formFeedback.innerHTML = "";
      formFeedback.append(blueprints.loading());

      const formData = new FormData(event.currentTarget);
      const details = Object.fromEntries(formData.entries());
      console.log(details);
      const name = storage.get("name");

      if (!name) {
        throw new Error("You have to be logged in to update your profile icon");
      }

      const response = await editProfileIcon(name, details);
      formFeedback.innerHTML = "";
      if (!response) {
        throw new Error(
          "Oops! Something does not seem quite right... Are you sure that the image is a fully formed url?"
        );
      }

      document.querySelector(".profile-showcase .icon-profile img").src =
        response.avatar;
      document.querySelector("nav .nav-profile-icon").src = response.avatar;
      formFeedback.append(
        blueprints.feedback(`The profile image has been updated!`, "success")
      );
    } catch (error) {
      formFeedback.append(blueprints.feedback(error.message, "danger"));
    }
  }
}
