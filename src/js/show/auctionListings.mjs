import listings from "../api/listings/index.mjs";
import listeners from "../listeners/index.mjs";
import display from "../display/index.mjs";

/**
 * Shows auction listings, and sets event listener for filtering auction listings
 * @example
 * ```js
 * show.auctionListings();
 * ```
 */
export default async function auctionListings() {
  try {
    const auctions = await listings.getAll();
    display.showcases([...auctions]);
    listeners.filterAuctions([...auctions]);
  } catch (error) {
    const container = document.getElementById("listings-wrapper");
    container.innerHTML = "";
    container.append(display.feedback("Something went wrong when retrieving the auctions", "danger"));
  }
}
