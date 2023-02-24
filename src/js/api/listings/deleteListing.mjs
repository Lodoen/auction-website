import authHeaders from "../auth/authenticatedHeaders.mjs";
import { baseUrl } from "../constants.mjs";

/**
 * Sends a DELETE request to the API to remove an auction listing
 * @param {string} id Auction listing ID
 * @example
 * ```js
 * await deleteListing(body);
 * ```
 */
export default async function deleteListing(id) {
  try {
    return await fetch(`${baseUrl}/listings/${id}`, {
      headers: authHeaders(),
      method: "DELETE",
    });
  } catch (error) {
    return undefined;
  }
}
