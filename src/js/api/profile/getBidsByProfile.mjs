import auth from "../auth/index.mjs";

/**
 * Sends a GET request to the API to fetch all bids by a specific profile
 * @param {*} name name of profile
 * @returns {*} Response of fetch request
 * @example
 * ```js
 * const bidsByProfile = await getBidsByProfile(username);
 * ```
 */
export default async function getBidsByProfile(name = "") {
  return await auth.fetch(`/profiles/${name}/bids?_listings=true`);
}
