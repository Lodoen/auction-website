import listings from "../api/listings/index.mjs";
import blueprints from "../blueprints/index.mjs";

/**
 * Attaches the create auction functionality to the create auction form
 * @param {*} event event
 * @param {*} mediaUrls List of media URLs
 * @example
 * ```js
 * form.addEventListener("submit", (event) => listeners.createAuction(event, mediaUrls));
 * ```
 */
export default async function createAuctionListener(event, mediaUrls) {
  event.preventDefault();
  const formFeedback = document.getElementById("form-feedback");
  if (formFeedback) {
    try {
      formFeedback.innerHTML = "";
      formFeedback.append(blueprints.loading());

      const formData = new FormData(event.currentTarget);
      const body = Object.fromEntries(formData.entries());
      body["media"] = Array.from(mediaUrls);
      body["tags"] = ["electronics"];

      const response = await listings.create(body);

      formFeedback.innerHTML = "";
      if (!response) {
        throw blueprints.error(
          "Oops! Looks like there is a problem with your auction listing. Look over the details and try again."
        );
      }

      formFeedback.append(blueprints.createSuccess(response.id));
    } catch (error) {
      formFeedback.innerHTML = "";
      if (error.isCustomError) {
        formFeedback.append(blueprints.feedback(error.message, "warning"));
      } else {
        formFeedback.append(
          blueprints.feedback(
            "Something went wrong with the create auction form",
            "warning"
          )
        );
      }
    }
  }
}
