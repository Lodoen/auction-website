import auth from "../auth/index.mjs";

/**
 * Sends a GET request to the API to fetch a specific profile
 * @param {string} name name of profile
 * @returns {*} Response of fetch request
 * @example
 * ```js
 * const profile = await getProfile(username);
 * ```
 */
export default async function getProfile(name = "") {
  return await auth.fetch(`/profiles/${name}`);
}
