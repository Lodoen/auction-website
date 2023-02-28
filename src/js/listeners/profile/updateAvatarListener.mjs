import storage from "../../storage/index.mjs";
import editProfileIcon from "../../api/profile/editProfileIcon.mjs";
import blueprints from "../../blueprints/index.mjs";
import "../../render/clearHTML/index.mjs";

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
      formFeedback.clearHTML();
      formFeedback.append(blueprints.loading());

      const formData = new FormData(event.currentTarget);
      const details = Object.fromEntries(formData.entries());
      const name = storage.get("name");

      if (!name) {
        throw blueprints.error(
          "You have to be logged in to update your profile icon"
        );
      }

      const response = await editProfileIcon(name, details);
      formFeedback.clearHTML();
      if (!response) {
        if (!name) {
          throw blueprints.error(
            "Oops! Something does not seem quite right... Are you sure that the image is a fully formed url?"
          );
        }
      }

      document.querySelector(".profile-showcase .icon-profile img").src =
        response.avatar;
      document.querySelector("nav .nav-profile-icon").src = response.avatar;
      formFeedback.append(
        blueprints.feedback(`The profile image has been updated!`, "success")
      );
    } catch (error) {
      formFeedback.clearHTML();
      if (error.isCustomError) {
        formFeedback.append(blueprints.feedback(error.message, "warning"));
      } else {
        formFeedback.append(
          blueprints.feedback(
            "Something went wrong with the update avatar form",
            "warning"
          )
        );
      }
    }
  }
}
