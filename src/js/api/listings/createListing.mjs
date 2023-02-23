import auth from "../auth/index.mjs";

/**
 * Sends a POST request to the API to submit an auction listing
 * @param {*} body Auction listing details
 * @returns {*} Response of fetch request
 * @example
 * ```js
 * const response = await createListing(body);
 * ```
 */
export default async function createListing(body) {
  return await auth.fetch("/listings", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
