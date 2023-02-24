import auth from "../auth/index.mjs";

/**
 * Sends a PUT request to the API to update an auction listing
 * @param {string} id Auction listing ID
 * @param {*} body Auction listing details
 * @returns {*} Response of fetch request
 * @example
 * ```js
 * const response = await updateListing(body);
 * ```
 */
export default async function updateListing(id, body) {
  return await auth.fetch(`/listings/${id}?_seller=true&_bids=true`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}
