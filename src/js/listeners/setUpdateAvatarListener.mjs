import storage from "../storage/index.mjs";
import editProfileIcon from "../api/profile/editProfileIcon.mjs";
import display from "../display/index.mjs";

/**
 * Attaches the update profile icon functionality to the update profile icon form
 * @example
 * ```js
 * form.addEventListener("submit", (event) => listeners.updateAvatar(event));
 * ```
 */
export default async function setUpdateAvatarListener(event) {
  const formFeedback = document.getElementById("form-feedback");
  if (formFeedback) {
    try {
      event.preventDefault();
      formFeedback.innerHTML = "";
      formFeedback.append(display.loading());

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

      document.querySelector("#profile-image img").src = response.avatar;
      document.getElementById("profile-icon").src = response.avatar;
      formFeedback.append(
        display.feedback(`The profile image has been updated!`, "success")
      );
    } catch (error) {
      formFeedback.append(display.feedback(error.message, "danger"));
    }
  }
}
