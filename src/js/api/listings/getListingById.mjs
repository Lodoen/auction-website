import auth from "../auth/index.mjs";

/**
 * Sends a GET request to the API to fetch a specific auction listing
 * @param {*} id ID of auction listing
 * @returns {*} Response of fetch request
 * @example
 * ```js
 * const listing = await getListingsById(id);
 * ```
 */
export default async function getListingsById(id = "undefined") {
  return await auth.fetch(`/listings/${id}?_seller=true&_bids=true`);
}
