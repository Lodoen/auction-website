import display from "../display/index.mjs";
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
      event.preventDefault();
      const formData = new FormData(searchForm);
      const { search, sort } = Object.fromEntries(formData.entries());

      let filteredAuctions = [...unfilteredListings];
      switch (sort) {
        case "active":
          filteredAuctions = filteredAuctions.filter(({ endsAt }) => calculations.timeLeft(endsAt) !== "Already ended");
          break;
        case "price-low-high":
          filteredAuctions.sort((a, b) => (calculations.highestBid(a.bids) > calculations.highestBid(b.bids) ? 1 : -1));
          break;
        case "price-high-low":
          filteredAuctions.sort((a, b) => (calculations.highestBid(a.bids) < calculations.highestBid(b.bids) ? 1 : -1));
          break;
      }

      if (search.trim()) {
        filteredAuctions = filteredAuctions.filter(({ title }) => title.toLowerCase().includes(search.trim()));
      }

      display.showcases(filteredAuctions);
    });
  }
}
