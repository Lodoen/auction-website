import { baseUrl } from "../constants.mjs";

/**
 * Sends a GET request to the API to fetch auction listings
 * @returns {*} The fetched auction listings or undefined
 * @example
 * ```js
 * const listings = await getListings();
 * ```
 */
export default async function getListings() {
  try {
    const response = await fetch(
      `${baseUrl}/listings?_tag=electronics&_bids=true`
    );
    return response.ok ? await response.json() : undefined;
  } catch (error) {
    return undefined;
  }
}
