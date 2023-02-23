import calculations from "../calculations/index.mjs";
import blueprints from "../blueprints/index.mjs";
import listeners from "../listeners/index.mjs";
import storage from "../storage/index.mjs";
import { basePath } from "../constants/index.mjs";

/**
 * Renders a specific auction listing, and sets listeners for changing media and for submitting a bid
 * @param {*} listing Listing details to display
 * @example
 * ```js
 * renderSpecificListing(listing);
 * ```
 */
export default function renderSpecificListing({
  id,
  bids,
  seller,
  description,
  endsAt,
  media,
  title,
}) {
  const container = document.querySelector("main");

  if (container) {
    container.innerHTML = "";

    document.title = `${title} | Electroneer`;

    const productMedia = document.createElement("img");
    productMedia.setAttribute("class", "mw-100 mh-100");
    productMedia.setAttribute("alt", "Product media");
    productMedia.setAttribute("data-position", "0");
    productMedia.src =
      media.length > 0 ? media[0] : `${basePath}/img/no-image-available.png`;

    const position = document.createElement("p");
    position.setAttribute("class", "m-0 px-2");
    position.innerText = media.length > 1 ? `1 / ${media.length}` : "";
    const positionWrapper = document.createElement("div");
    positionWrapper.setAttribute(
      "class",
      "position-absolute bottom-0 number-of number-of-media bg-dark text-light"
    );
    positionWrapper.append(position);

    const productMediaWrapper = document.createElement("div");
    productMediaWrapper.setAttribute(
      "class",
      "col-8 d-flex justify-content-center p-0 position-relative product-showcase-wrapper"
    );
    productMediaWrapper.append(productMedia, positionWrapper);

    const nextMediaWrapper = document.createElement("div");
    nextMediaWrapper.setAttribute(
      "class",
      "col-2 p-0 d-flex align-items-center justify-content-center media-button-wrapper"
    );

    const previousMediaWrapper = document.createElement("div");
    previousMediaWrapper.setAttribute(
      "class",
      "col-2 p-0 d-flex align-items-center justify-content-center media-button-wrapper"
    );

    const galleryWrapper = document.createElement("div");
    galleryWrapper.setAttribute("class", "col-8 d-block mx-auto p-0");

    if (media.length > 0) {
      productMediaWrapper.addEventListener("click", (event) =>
        container.append(
          blueprints.modal(event.currentTarget.querySelector("img").src)
        )
      );
    }

    if (media.length > 1) {
      const nextIcon = document.createElement("img");
      nextIcon.setAttribute("class", "w-100 d-block m-auto");
      nextIcon.setAttribute("alt", "Next media");
      nextIcon.src = `${basePath}/img/icons/next.png`;
      const nextIconWrapper = document.createElement("div");
      nextIconWrapper.setAttribute("class", "icon-product-media");
      nextIconWrapper.append(nextIcon);

      const nextMedia = document.createElement("button");
      nextMedia.setAttribute("type", "button");
      nextMedia.setAttribute(
        "class",
        "w-100 px-0 py-4 btn btn-link d-flex align-items-center justify-content-center"
      );
      nextMedia.setAttribute("data-direction", "1");
      nextMedia.append(nextIconWrapper);
      listeners.changeMedia(nextMedia, media, productMedia, position);
      nextMediaWrapper.append(nextMedia);

      const previousIcon = document.createElement("img");
      previousIcon.setAttribute("class", "w-100 d-block m-auto");
      previousIcon.setAttribute("alt", "Previous media");
      previousIcon.src = `${basePath}/img/icons/previous.png`;
      const previousIconWrapper = document.createElement("div");
      previousIconWrapper.setAttribute("class", "icon-product-media");
      previousIconWrapper.append(previousIcon);

      const previousMedia = document.createElement("button");
      previousMedia.setAttribute("type", "button");
      previousMedia.setAttribute(
        "class",
        "w-100 px-0 py-4 btn btn-link d-flex align-items-center justify-content-center"
      );
      previousMedia.setAttribute("data-direction", "-1");
      previousMedia.append(previousIconWrapper);
      listeners.changeMedia(previousMedia, media, productMedia, position);
      previousMediaWrapper.append(previousMedia);

      const gallery = document.createElement("div");
      gallery.setAttribute(
        "class",
        "w-100 d-flex justify-content-between mt-2 mt-sm-3 gallery-overview"
      );
      gallery.append(...media.slice(0, 4).map(blueprints.galleryImage));
      galleryWrapper.append(gallery);
    }

    const mediaGallery = document.createElement("div");
    mediaGallery.setAttribute("class", "row mt-3 mb-4 m-sm-0 image-gallery");
    mediaGallery.append(
      previousMediaWrapper,
      productMediaWrapper,
      nextMediaWrapper,
      galleryWrapper
    );

    const mediaGalleryWrapper = document.createElement("div");
    mediaGalleryWrapper.setAttribute(
      "class",
      "d-flex align-items-center justify-content-center col-12 col-sm-5"
    );
    mediaGalleryWrapper.append(mediaGallery);

    const border = document.createElement("div");
    border.setAttribute("class", "border-start");
    const borderWrapper = document.createElement("div");
    borderWrapper.setAttribute(
      "class",
      "d-none d-sm-flex justify-content-center col-sm-1"
    );
    borderWrapper.append(border);

    const h1 = document.createElement("h1");
    h1.innerText = title;

    const timeLeftIcon = document.createElement("img");
    timeLeftIcon.setAttribute("class", "w-100 d-block m-auto");
    timeLeftIcon.setAttribute("alt", "Time left");
    timeLeftIcon.src = `${basePath}/img/icons/time-left.png`;
    const timeLeftIconWrapper = document.createElement("span");
    timeLeftIconWrapper.setAttribute("class", "icon-product me-2");
    timeLeftIconWrapper.append(timeLeftIcon);

    const endsAtDate = new Date(endsAt);
    const date = endsAtDate.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const time = endsAtDate.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
    const deadline = document.createElement("span");
    deadline.innerText = `${date} at ${time}`;

    const deadlineWrapper = document.createElement("p");
    deadlineWrapper.setAttribute("class", "m-0 d-flex align-items-center");
    deadlineWrapper.append(timeLeftIconWrapper, deadline);

    const sellerIcon = document.createElement("img");
    sellerIcon.setAttribute("class", "w-100 d-block m-auto");
    sellerIcon.setAttribute("alt", "Seller");
    sellerIcon.src = `${basePath}/img/icons/profile.png`;
    const sellerIconWrapper = document.createElement("span");
    sellerIconWrapper.setAttribute("class", "icon-product me-2");
    sellerIconWrapper.append(sellerIcon);

    const sellerName = document.createElement("a");
    sellerName.setAttribute("class", "text-dark hover-link");
    sellerName.setAttribute("href", `${basePath}/profile/?name=${seller.name}`);
    sellerName.innerText = seller.name;
    const sellerNameWrapper = document.createElement("p");
    sellerNameWrapper.setAttribute("class", "my-2 d-flex align-items-center");
    sellerNameWrapper.append(sellerIconWrapper, sellerName);

    const creditsIcon = document.createElement("img");
    creditsIcon.setAttribute("class", "w-100 d-block m-auto");
    creditsIcon.setAttribute("alt", "Highest bid");
    creditsIcon.src = `${basePath}/img/icons/tokens-black.png`;
    const creditsIconWrapper = document.createElement("span");
    creditsIconWrapper.setAttribute("class", "icon-product me-2");
    creditsIconWrapper.append(creditsIcon);

    const highestBid = calculations.highestBid(bids);
    const auctionPrice = document.createElement("span");
    auctionPrice.innerText = highestBid;

    const auctionPriceWrapper = document.createElement("p");
    auctionPriceWrapper.setAttribute("class", "d-flex align-items-center");
    auctionPriceWrapper.append(creditsIconWrapper, auctionPrice);

    const makeBidHeader = document.createElement("h2");
    makeBidHeader.innerText = "Make a bid";

    const makeBidWrapper = document.createElement("div");
    if (storage.get("name") == seller.name) {
      makeBidWrapper.append(
        blueprints.feedback(
          "You can not make a bid on your own auction listing",
          "info"
        )
      );
    } else if (new Date(endsAt) - new Date() < 0) {
      makeBidWrapper.append(
        blueprints.feedback("Auction has already ended", "info")
      );
    } else {
      const amountInput = document.createElement("input");
      amountInput.setAttribute("type", "number");
      amountInput.setAttribute("value", highestBid + 1);
      amountInput.setAttribute("min", highestBid + 1);
      amountInput.setAttribute(
        "class",
        "rounded py-1 px-2 border border-gray ms-2 ms-sm-0 mb-2 me-sm-2"
      );
      amountInput.setAttribute("id", "bid");
      amountInput.setAttribute("name", "amount");
      amountInput.setAttribute("placeholder", "Auction title ...");
      amountInput.setAttribute("required", "true");
      amountInput.setAttribute(
        "Title",
        "A new bid must be higher than the last"
      );

      const amountLabel = document.createElement("label");
      amountLabel.setAttribute("class", " mb-0 d-block");
      amountLabel.setAttribute("for", "amount");
      amountLabel.innerText = "Number of credits:";

      const amountFeedback = document.createElement("p");
      amountFeedback.setAttribute(
        "class",
        "form-input-feedback m-0 text-danger fst-italic d-block"
      );

      const makeBidButton = document.createElement("button");
      makeBidButton.setAttribute(
        "class",
        "btn btn-secondary hover-secondary ms-2 mb-2 ms-sm-0"
      );
      makeBidButton.setAttribute("type", "submit");
      makeBidButton.innerText = "Make bid";

      const makeBidForm = document.createElement("form");
      makeBidForm.setAttribute("class", "mb-3");
      makeBidForm.append(
        amountLabel,
        amountInput,
        makeBidButton,
        amountFeedback
      );
      makeBidForm.addEventListener("submit", (event) =>
        listeners.makeBid(event, id)
      );
      listeners.validateFormInputs(makeBidForm);

      makeBidWrapper.append(makeBidForm);
    }

    const makeBidFeedback = document.createElement("div");
    makeBidFeedback.setAttribute("id", "form-feedback");

    const bidWrapper = document.createElement("section");
    bidWrapper.append(makeBidHeader, makeBidWrapper, makeBidFeedback);

    const listingDetails = document.createElement("section");
    listingDetails.setAttribute("class", "col-12 col-sm-6");
    listingDetails.append(
      h1,
      deadlineWrapper,
      sellerNameWrapper,
      auctionPriceWrapper,
      bidWrapper
    );

    const listingDetailsWrapper = document.createElement("div");
    listingDetailsWrapper.setAttribute("class", "row mt-3 mt-sm-5");
    listingDetailsWrapper.append(
      mediaGalleryWrapper,
      borderWrapper,
      listingDetails
    );

    const descriptionHeader = document.createElement("h3");
    descriptionHeader.innerText = "Description";
    const descriptionContent = document.createElement("p");
    descriptionContent.innerText = description
      ? description
      : "No description given";
    const descriptionWrapper = document.createElement("div");
    descriptionWrapper.setAttribute("class", "my-5");
    descriptionWrapper.append(descriptionHeader, descriptionContent);

    const biddingHistoryHeader = document.createElement("h3");
    biddingHistoryHeader.innerText = "Bidding history";
    biddingHistoryHeader.setAttribute("class", "mb-3");
    const biddingHistory = document.createElement("span");
    biddingHistory.setAttribute("id", "bidding-history");
    if (bids.length > 0) {
      bids.sort((a, b) => (a.amount < b.amount ? 1 : -1));
      biddingHistory.append(...bids.map(blueprints.bid));
    } else {
      biddingHistory.append(
        blueprints.feedback(
          "There are currently no bids on this auction listing",
          "info"
        )
      );
    }

    const biddingHistoryWrapper = document.createElement("div");
    biddingHistoryWrapper.setAttribute("class", "mb-5 pb-3");
    biddingHistoryWrapper.append(biddingHistoryHeader, biddingHistory);

    container.append(
      listingDetailsWrapper,
      descriptionWrapper,
      biddingHistoryWrapper
    );
  }
}
