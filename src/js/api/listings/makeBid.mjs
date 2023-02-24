import auth from "../auth/index.mjs";

/**
 * Sends a POST request to the API to submit a bid on a listing
 * @param {string} id ID of auction listing
 * @param {*} bid Bid information
 * @returns {*} Response of fetch request
 * @example
 * ```js
 * const response = await makeBid(id, bid);
 * ```
 */
export default async function makeBid(id = "undefined", bid) {
  return await auth.fetch(`/listings/${id}/bids?_bids=true`, {
    method: "POST",
    body: JSON.stringify(bid),
  });
}
