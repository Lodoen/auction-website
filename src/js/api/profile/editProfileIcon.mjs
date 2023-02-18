import auth from "../auth/index.mjs";

/**
 * Sends a PUT request to the API to change the profile icon
 * @param {string} name Name of profile
 * @param {*} body Body of fetch request
 * @returns {*} Response of fetch request
 * @example
 * ```js
 * const response = await editProfileIcon(name, body);
 * ```
 */
export default async function editProfileIcon(name = "", body) {
  return await auth.fetch(`/profiles/${name}/media`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}
