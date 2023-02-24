import { baseUrl } from "../constants.mjs";
/**
 * Sends a GET request to the API to fetch a specific auction listing
 * @param {string} id ID of auction listing
 * @returns {*} Response of fetch request
 * @example
 * ```js
 * const listing = await getListingsById(id);
 * ```
 */
export default async function getListingsById(id = "undefined") {
  try {
    const response = await fetch(
      `${baseUrl}/listings/${id}?_seller=true&_bids=true`
    );
    return response.ok ? await response.json() : undefined;
  } catch (error) {
    return undefined;
  }
}
