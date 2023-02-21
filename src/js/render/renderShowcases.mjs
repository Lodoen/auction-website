import blueprints from "../blueprints/index.mjs";

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
    container.innerHTML = "";
    try {
      if (typeof auctionListings !== "object" || auctionListings.length <= 0) {
        throw new Error("There are no listings under these requirements");
      }
      container.append(...auctionListings.map(blueprints.listingShowcase));
    } catch (error) {
      container.append(blueprints.feedback(error.message, "warning"));
    }
  }
}
