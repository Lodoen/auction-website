import render from "../render/index.mjs";
import listings from "../api/listings/index.mjs";
import blueprints from "../blueprints/index.mjs";

/**
 * Prepares a specific auction listings (based on id in URL) for rendering
 * @example
 * ```js
 * prepareSpecificAuctionListing();
 * ```
 */
export default async function prepareSpecificAuctionListing() {
  const container = document.querySelector("main");
  try {
    const parameters = new URLSearchParams(document.location.search);
    const id = parameters.get("id");

    if (!id) {
      throw new Error("Auction listing must have a valid ID");
    }

    const listing = await listings.getById(id);

    if (!listing) {
      throw new Error(
        "Oops! Seems like there is no auction listing matching the selected ID in our database."
      );
    }

    render.specificListing(listing);
  } catch (error) {
    container.innerHTML = "";
    container.append(blueprints.feedback(error.message, "warning"));
  }
}
