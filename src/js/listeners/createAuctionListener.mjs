import display from "../display/index.mjs";
import listings from "../api/listings/index.mjs";

/**
 * Attaches the create auction functionality to the create auction form
 * @example
 * ```js
 * createAuctionListener();
 * ```
 */
export default async function createAuctionListener(event, mediaUrls) {
  event.preventDefault();
  const formFeedback = document.getElementById("form-feedback");
  if (formFeedback) {
    try {
      formFeedback.innerHTML = "";
      formFeedback.append(display.loading());

      const formData = new FormData(event.currentTarget);
      const body = Object.fromEntries(formData.entries());
      body["media"] = Array.from(mediaUrls);
      body["tags"] = ["electronics"];

      const response = await listings.create(body);

      formFeedback.innerHTML = "";
      if (!response) {
        throw new Error(
          "Oops! Looks like there is a problem with your auction listing. Look over the details and try again."
        );
      }

      formFeedback.append(display.createSuccess(response.id));
    } catch (error) {
      formFeedback.append(display.feedback(error.message, "warning"));
    }
  }
}
