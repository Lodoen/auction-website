import listings from "../api/listings/index.mjs";
import blueprints from "../blueprints/index.mjs";
import render from "../render/index.mjs";
import "../render/clearHTML/index.mjs";

/**
 * Attaches the publish auction functionality to the publish auction form
 * @param {*} event event
 * @param {*} mediaUrls List of media URLs
 * @example
 * ```js
 * form.addEventListener("submit", (event) => listeners.publishAuction(event, mediaUrls));
 * ```
 */
export default async function publishAuctionListener(
  event,
  mediaUrls,
  id = undefined
) {
  event.preventDefault();
  const formFeedback = document.getElementById("form-feedback");
  if (formFeedback) {
    try {
      formFeedback.clearHTML();
      formFeedback.append(blueprints.loading());

      const formData = new FormData(event.currentTarget);
      const body = Object.fromEntries(formData.entries());
      body["media"] = Array.from(mediaUrls);
      body["tags"] = ["electronics"];

      const response = id
        ? await listings.update(id, body)
        : await listings.create(body);

      formFeedback.clearHTML();
      if (!response) {
        throw blueprints.error(
          "Oops! Looks like there is a problem with your auction listing. Look over the details and try again."
        );
      }

      if (id) {
        render.specificListing(response, true);
      } else {
        formFeedback.append(blueprints.createSuccess(response.id));
      }
    } catch (error) {
      formFeedback.clearHTML();
      if (error.isCustomError) {
        formFeedback.append(blueprints.feedback(error.message, "warning"));
      } else {
        formFeedback.append(
          blueprints.feedback(
            "Something went wrong with the publish auction form",
            "warning"
          )
        );
      }
    }
  }
}
