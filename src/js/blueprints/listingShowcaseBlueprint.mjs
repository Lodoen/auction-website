import calculations from "../calculations/index.mjs";
import { basePath } from "../constants/index.mjs";

/**
 * Creates HTML for a listing showcase
 * @param {*} listing Data to display
 * @returns {*} HTML for displaying a listing showcase
 * @example
 * ```js
 * const listing = listingShowcaseBlueprint(listing);
 * ```
 */
export default function listingShowcaseBlueprint({
  id,
  title,
  media,
  endsAt,
  bids,
}) {
  const productShowcase = document.createElement("img");
  productShowcase.setAttribute("class", "mw-100 mh-100");
  productShowcase.setAttribute("alt", `${title} showcase`);
  productShowcase.src =
    media.length > 0 ? media[0] : `${basePath}/img/no-image-available.png`;

  const price = document.createElement("p");
  price.setAttribute("class", "m-0 ps-1");
  price.innerText = calculations.highestBid(bids);

  const creditsIcon = document.createElement("img");
  creditsIcon.setAttribute("class", "w-100");
  creditsIcon.setAttribute("alt", "Number of credits");
  creditsIcon.src = `${basePath}/img/icons/tokens.png`;
  const creditsIconWrapper = document.createElement("div");
  creditsIconWrapper.setAttribute(
    "class",
    "icon-product-tokens d-flex align-items-center mx-1"
  );
  creditsIconWrapper.append(creditsIcon);

  const creditsWrapper = document.createElement("div");
  creditsWrapper.setAttribute(
    "class",
    "d-flex align-items-center position-absolute start-0 bottom-0 number-of bg-dark text-light p-1"
  );
  creditsWrapper.append(price, creditsIconWrapper);

  const productShowcaseWrapper = document.createElement("div");
  productShowcaseWrapper.setAttribute(
    "class",
    "product-showcase rounded-top d-flex justify-content-center border-dark border-bottom p-0 position-relative"
  );
  productShowcaseWrapper.append(productShowcase, creditsWrapper);

  const listingTitle = document.createElement("h3");
  listingTitle.innerText = title;

  const timeLeftIcon = document.createElement("img");
  timeLeftIcon.setAttribute("class", "w-100");
  timeLeftIcon.setAttribute("alt", "Time left");
  timeLeftIcon.src = `${basePath}/img/icons/time-left.png`;
  const timeLeftIconWrapper = document.createElement("div");
  timeLeftIconWrapper.setAttribute(
    "class",
    "icon-product d-flex align-items-center me-1"
  );
  timeLeftIconWrapper.append(timeLeftIcon);

  const timeLeft = document.createElement("p");
  timeLeft.setAttribute("class", "m-0 number-of-days-left");
  timeLeft.innerText = calculations.timeBetween(endsAt);

  const timeLeftWrapper = document.createElement("div");
  timeLeftWrapper.setAttribute("class", "d-flex align-items-center pb-2");
  timeLeftWrapper.append(timeLeftIconWrapper, timeLeft);

  const detailsWrapper = document.createElement("div");
  detailsWrapper.setAttribute("class", "py-2 px-3");
  detailsWrapper.append(listingTitle, timeLeftWrapper);

  const linkToListing = document.createElement("a");
  linkToListing.setAttribute(
    "class",
    "border border-dark rounded-4 rounded-end-0 overflow-hidden text-decoration-none text-dark d-block hover-auction-item"
  );
  linkToListing.setAttribute("href", `${basePath}/listing/?id=${id}`);
  linkToListing.append(productShowcaseWrapper, detailsWrapper);

  const listing = document.createElement("div");
  listing.setAttribute("class", "col p-3");
  listing.append(linkToListing);

  return listing;
}
