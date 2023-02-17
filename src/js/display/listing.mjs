import calculations from "../calculations/index.mjs";
import blueprints from "../blueprints/index.mjs";
import listeners from "../listeners/index.mjs";
import storage from "../storage/index.mjs";
import display from "./index.mjs";

/**
 * Populates HTML with details about a specific auction listing, and sets listeners for changing media and for submitting a bid
 * @param {*} listing Listing details to display
 * @example
 * ```js
 * display.listing(listing);
 * ```
 */
export default function listing({
  id,
  bids,
  seller,
  description,
  endsAt,
  media,
  title,
}) {
  try {
    const productShowcase = document.getElementById("product-showcase");
    const formContainer = document.getElementById("form-container");
    const bidHistory = document.getElementById("bidding-history");

    //Auction details
    document.title = `${title} | Electroneer`;
    document.querySelector("h1").innerText = title;
    document.getElementById("seller").innerText = seller.name;
    const deadline = new Date(endsAt);
    const date = deadline.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const time = deadline.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
    document.getElementById("deadline").innerText = `${date} at ${time}`;
    const highestBid = calculations.highestBid(bids);
    document.getElementById("highest-bid").innerText = highestBid;
    document.getElementById("description").innerText = description
      ? description
      : "No description given";
    document.getElementById("bid").value = highestBid + 1;
    document.getElementById("bid").min = highestBid + 1;

    //Auction media
    if (media.length > 0) {
      productShowcase.src = media[0];
      document.querySelector(
        ".product-showcase-wrapper p"
      ).innerText = `1 / ${media.length}`;
      document
        .querySelector(".gallery-overview")
        .append(...media.slice(0, 4).map(blueprints.galleryImage));
      document
        .querySelectorAll(".media-button-wrapper button")
        .forEach((btn) => listeners.changeMedia(btn, media));
    } else {
      productShowcase.src = "../img/no-image-available.png";
      document
        .querySelectorAll(".media-button-wrapper")
        .forEach((btn) => (btn.innerHTML = ""));
    }

    //Owner can not bid on their own auction and user can not bid on outdated auction
    if (storage.get("name") == seller.name) {
      formContainer.innerHTML = "";
      formContainer.append(
        display.feedback(
          "You can not make a bid on your own auction listing",
          "info"
        )
      );
    } else if (new Date(endsAt) - new Date() < 0) {
      formContainer.innerHTML = "";
      formContainer.append(
        display.feedback("Auction has already ended", "info")
      );
    } else {
      listeners.makeBid(id);
    }

    //bids
    bidHistory.innerHTML = "";
    if (bids.length > 0) {
      bids.sort((a, b) => (a.amount < b.amount ? 1 : -1));
      bidHistory.append(...bids.map(blueprints.bid));
    } else {
      bidHistory.append(
        display.feedback(
          "There are currently no bids on this auction listing",
          "info"
        )
      );
    }
  } catch (error) {
    throw new Error("Something went wrong when loading the auction listing");
  }
}
