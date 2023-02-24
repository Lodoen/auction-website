import render from "../render/index.mjs";
import calculations from "../calculations/index.mjs";
import blueprints from "../blueprints/index.mjs";

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
          case "newest":
            filteredAuctions.sort((a, b) => (a.updated < b.updated ? 1 : -1));
            break;
          case "oldest":
            filteredAuctions.sort((a, b) => (a.updated > b.updated ? 1 : -1));
            break;
          case "closest-deadline":
            filteredAuctions.sort((a, b) => (a.endsAt > b.endsAt ? 1 : -1));
            break;
          case "furthest-deadline":
            filteredAuctions.sort((a, b) => (a.endsAt < b.endsAt ? 1 : -1));
            break;
        }

        if (active || sort == "closest-deadline") {
          filteredAuctions = filteredAuctions.filter(
            ({ endsAt }) => calculations.timeBetween(endsAt) !== "Already ended"
          );
        }

        if (search.trim()) {
          filteredAuctions = filteredAuctions.filter(({ title }) =>
            title.toLowerCase().includes(search.toLowerCase().trim())
          );
        }

        const feedbackContainer = document.getElementById("form-feedback");
        if (feedbackContainer) {
          const feedback = blueprints.feedback(
            "Filtering auctions ...",
            "info"
          );
          feedbackContainer.append(feedback);
          setTimeout(() => feedback.remove(), 2000);
        }

        render.showcases(filteredAuctions);
      } catch (error) {
        render.showcases(undefined);
      }
    });
  }
}
