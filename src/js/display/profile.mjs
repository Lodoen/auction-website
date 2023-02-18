import blueprints from "../blueprints/index.mjs";
import calculations from "../calculations/index.mjs";
import display from "../display/index.mjs";
import storage from "../storage/index.mjs";

/**
 * Populates profile page with information about the given profile
 * @example
 * ```js
 * display.profile();
 * ```
 */
export default function profile({ name, avatar, listings, bids }) {
  try {
    document.querySelector("h1").innerText = name;

    const profileImageContainer = document.getElementById("profile-image");
    profileImageContainer.querySelector("img").src = avatar
      ? avatar
      : "../img/icons/profile-big.png";

    if (storage.get("name") == name) {
      display.editProfileIcon();
    }

    const listingsContainer = document.getElementById("listings-by-profile");
    listingsContainer.querySelector("h2").innerText = `Listings by ${name}`;
    const listingsWrapper = listingsContainer.querySelector("div.row");
    if (listings.length > 0) {
      listingsWrapper.append(...listings.map(blueprints.listingShowcase));
    } else {
      listingsWrapper.append(
        display.feedback(`${name} has not made any listings.`, "info")
      );
    }

    const bidsContainer = document.getElementById("bids-by-profile");
    bidsContainer.querySelector("h2").innerText = `Bids by ${name}`;
    const bidsWrapper = bidsContainer.querySelector("div.row");
    if (bids.length > 0) {
      let bidsToFilter = [...bids];
      let filteredBids = [];
      while (bidsToFilter.length > 0) {
        const match = [...bidsToFilter].filter(
          (bid) => bid.listing.id == bidsToFilter[0].listing.id
        );
        const highestBid = calculations.highestBid(match);
        const { listing, ...bid } = match.find(
          (bid) => bid.amount == highestBid
        );
        listing["bids"] = [bid];
        filteredBids.push(listing);
        bidsToFilter = [...bidsToFilter].filter(
          (bid) => bid.listing.id !== listing.id
        );
      }
      bidsWrapper.append(...filteredBids.map(blueprints.listingShowcase));
    } else {
      bidsWrapper.append(
        display.feedback(`${name} has not made any bids.`, "info")
      );
    }
  } catch (error) {
    throw new Error("Something went wrong when loading profile");
  }
}
