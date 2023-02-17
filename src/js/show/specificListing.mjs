import display from "../display/index.mjs";
import listings from "../api/listings/index.mjs";

/**
 * Shows a specific auction listings (based on id in URL)
 * @example
 * ```js
 * show.specificListing();
 * ```
 */
export default async function specificListing() {
  const container = document.querySelector("main");
  try {
    const parameters = new URLSearchParams(document.location.search);
    const id = parameters.get("id");

    if (!id) {
      throw new Error("Auction listing must have a valid ID");
    }

    const listing = await listings.getById(id);
    display.listing(listing);
  } catch (error) {
    container.innerHTML = "";
    container.append(display.feedback(error.message, "warning"));
  }
}
