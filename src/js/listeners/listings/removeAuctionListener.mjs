import listings from "../../api/listings/index.mjs";
import blueprints from "../../blueprints/index.mjs";
import "../../render/clearHTML/index.mjs";

/**
 * Attaches the remove auction functionality to the remove auction button
 * @param {string} id Auction to remove
 * @example
 * ```js
 * removeAuctionListener(id)
 * ```
 */
export default async function removeAuctionListener(id = undefined) {
  const container = document.querySelector("main");
  if (container) {
    try {
      if (window.confirm("Are you sure you want to delete this listing?")) {
        container.clearHTML();
        container.append(blueprints.loading());
        const response = await listings.remove(id);

        if (!response.ok) {
          throw blueprints.error(
            "We encountered an error when trying to delete your auction listing"
          );
        }

        container.clearHTML();
        container.append(
          blueprints.feedback(
            "Auction listing was successfully deleted",
            "success"
          )
        );
      }
    } catch (error) {
      container.clearHTML();

      if (error.isCustomError) {
        container.append(blueprints.feedback(error.message, "warning"));
      } else {
        container.append(
          blueprints.feedback(
            "Something went wrong when trying to delete your auction listing",
            "warning"
          )
        );
      }
    }
  }
}
