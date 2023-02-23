import render from "../render/index.mjs";
import calculations from "../calculations/index.mjs";

/**
 * Sets event listener for auction listings filtering
 * @param {*} unfilteredListings Auctions to filter
 * @example
 * ```js
 * setFilterAuctionsListener([...auctions]);
 * ```
 */
export default async function setFilterAuctionsListener(unfilteredListings) {
  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      try {
        event.preventDefault();
        const formData = new FormData(searchForm);
        const { search, sort, active } = Object.fromEntries(formData.entries());
        let filteredAuctions = [...unfilteredListings];

        if (active) {
          filteredAuctions = filteredAuctions.filter(
            ({ endsAt }) => calculations.timeBetween(endsAt) !== "Already ended"
          );
        }

        switch (sort) {
          case "price-low-high":
            filteredAuctions.sort((a, b) =>
              calculations.highestBid(a.bids) > calculations.highestBid(b.bids)
                ? 1
                : -1
            );
            break;
          case "price-high-low":
            filteredAuctions.sort((a, b) =>
              calculations.highestBid(a.bids) < calculations.highestBid(b.bids)
                ? 1
                : -1
            );
            break;
        }

        if (search.trim()) {
          filteredAuctions = filteredAuctions.filter(({ title }) =>
            title.toLowerCase().includes(search.trim())
          );
        }

        render.showcases(filteredAuctions);
      } catch (error) {
        render.showcases(undefined);
      }
    });
  }
}
