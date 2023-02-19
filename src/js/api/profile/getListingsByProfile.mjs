import auth from "../auth/index.mjs";

/**
 * Sends a GET request to the API to fetch all listings by a specific profile
 * @param {*} name name of profile
 * @returns {*} Response of fetch request
 * @example
 * ```js
 * const bidsByProfile = await getListingsByProfile(username);
 * ```
 */
export default async function getListingsByProfile(name = "") {
  return await auth.fetch(`/profiles/${name}/listings?_bids=true`);
}
