import render from "../render/index.mjs";
import listings from "../api/listings/index.mjs";
import blueprints from "../blueprints/index.mjs";
import validation from "../validation/index.mjs";
import "../render/clearHTML/index.mjs";

/**
 * Prepares a specific auction listings (based on id in URL) for rendering
 * @example
 * ```js
 * prepareSpecificAuctionListing();
 * ```
 */
export default async function prepareSpecificAuctionListing() {
  try {
    const isLoggedIn = await validation.loggedIn();
    const parameters = new URLSearchParams(document.location.search);
    const id = parameters.get("id");

    if (!id) {
      throw blueprints.error("Auction listing must have a valid ID");
    }

    const listing = await listings.getById(id);

    if (!listing) {
      throw blueprints.error(
        "Oops! Seems like there is no auction listing matching the selected ID in our database."
      );
    }

    render.specificListing(listing, isLoggedIn);
  } catch (error) {
    const container = document.querySelector("main");
    if (container) {
      container.clearHTML();

      if (error.isCustomError) {
        container.append(blueprints.feedback(error.message, "warning"));
      } else {
        container.append(
          blueprints.feedback(
            "Something went wrong when rendering the listing page",
            "warning"
          )
        );
      }
    }
  }
}
