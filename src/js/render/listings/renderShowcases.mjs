import blueprints from "../../blueprints/index.mjs";
import "../clearHTML/index.mjs";

/**
 * Renders the auction listings on the home page
 * @param {*} auctionListings Auctions to display
 * @example
 * ```js
 * renderShowcases(auctionListings);
 * ```
 */
export default async function renderShowcases(auctionListings) {
  const container = document.getElementById("listings");
  if (container) {
    container.clearHTML();
    try {
      if (typeof auctionListings !== "object" || auctionListings.length <= 0) {
        throw blueprints.error(
          "There are no listings under these requirements"
        );
      }
      container.append(...auctionListings.map(blueprints.listingShowcase));
    } catch (error) {
      container.clearHTML();

      if (error.isCustomError) {
        container.append(blueprints.feedback(error.message, "warning"));
      } else {
        container.append(
          blueprints.feedback(
            "Something went wrong when rendering auction listings",
            "warning"
          )
        );
      }
    }
  }
}
