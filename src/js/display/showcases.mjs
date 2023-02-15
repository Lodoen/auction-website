import blueprints from "../blueprints/index.mjs";
import display from "./index.mjs";

/**
 * Displays auction listing showcases
 * @param {*} auctionListings Auctions to display
 * @example
 * ```js
 * display.showcases([...auctions]);
 * ```
 */
export default async function showcases(auctionListings) {
  const container = document.getElementById("listings");
  if (container) {
    container.innerHTML = "";
    try {
      if (typeof auctionListings !== "object" || auctionListings.length <= 0) {
        throw new Error("There are no listings under these requirements");
      }
      container.append(...auctionListings.map(blueprints.listingShowcase));
    } catch (error) {
      container.append(display.feedback(error.message, "warning"));
    }
  }
}
