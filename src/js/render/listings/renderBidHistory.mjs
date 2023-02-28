import blueprints from "../../blueprints/index.mjs";
import "../clearHTML/index.mjs";
/**
 * Renders the bid history of a selected listing
 * @param {HTMLElement} container Container of bidding history
 * @param {*} bids Bids of listing
 * @example
 * ```js
 * renderBidHistory(bids);
 * ```
 */
export default function renderBidHistory(container, bids = []) {
  if (container) {
    container.clearHTML();
    bids.sort((a, b) => (a.amount < b.amount ? 1 : -1));
    container.append(...bids.map(blueprints.bid));
  }
}
