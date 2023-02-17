import listings from "../api/listings/index.mjs";
import blueprint from "../blueprints/index.mjs";
import display from "../display/index.mjs";

/**
 * Attaches the create auction functionality to the create auction form
 * @example
 * ```js
 * validation.authenticated(listener.createAuction);
 * ```
 */
export default async function setCreateAuctionListener() {
  try {
    const form = document.querySelector("form");
    const formFeedback = document.getElementById("form-feedback");
    if (form && formFeedback) {
      const mediaUrls = new Set();
      form.addEventListener("submit", async (event) => {
        try {
          event.preventDefault();
          formFeedback.innerHTML = "";
          formFeedback.append(display.loading());

          const formData = new FormData(form);
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
      });

      const mediaInput = form.querySelector("#add-media");
      mediaInput.addEventListener("click", () => {
        const mediaUrl = form.querySelector("#media").value.trim();
        if (mediaUrl && !mediaUrls.has(mediaUrl)) {
          mediaUrls.add(mediaUrl);
          document
            .querySelector("ol")
            .append(blueprint.mediaListElement(mediaUrl, mediaUrls));
        }
      });
      form.querySelector(`button[type="submit"]`).disabled = false;
    }
  } catch (error) {
    const container = document.querySelector("main");
    container.innerHTML = "";
    container.append(
      display.feedback(
        "Something went wrong when displaying the create page",
        "warning"
      )
    );
  }
}
