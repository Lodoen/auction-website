import authHeaders from "./authenticatedHeaders.mjs";
import { baseUrl } from "../constants.mjs";

/**
 * Sends an authenticated fetch request to the auction API
 * @param {string} url Which part of the API the fetch request is targeting
 * @param {*} options Additional data to accompany the fetch request
 * @returns {*} response.json() || undefined
 * @example
 * ```js
 * const loggedInUser = await authenticatedFetch(`/profiles/${username}`);
 * ```
 */
export default async function authenticatedFetch(url, options = {}) {
  try {
    const response = await fetch(baseUrl + url, {
      headers: authHeaders(),
      ...options,
    });
    return response.ok ? await response.json() : undefined;
  } catch (error) {
    console.log(error);
  }
}
