import listings from "../api/listings/index.mjs";
import listeners from "../listeners/index.mjs";
import blueprints from "../blueprints/index.mjs";
import render from "../render/index.mjs";

/**
 * Prepares auction listings for rendering, and sets event listener for filtering auction listings
 * @example
 * ```js
 * prepareAuctionListings();
 * ```
 */
export default async function prepareAuctionListings() {
  try {
    const auctions = await listings.getAll();

    if (!auctions) {
      throw new Error("Could get auctions from database");
    }

    render.showcases([...auctions]);
    listeners.filterAuctions([...auctions]);
  } catch (error) {
    const container = document.getElementById("listings-wrapper");
    container.innerHTML = "";
    container.append(
      blueprints.feedback(
        "Something went wrong when retrieving the auctions",
        "danger"
      )
    );
  }
}
