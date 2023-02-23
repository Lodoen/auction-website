import storage from "../../storage/index.mjs";

/**
 * Creates authenticated header property to be used in fetch request
 * @returns {*} Authenticated header object
 * @example
 * ```js
 * const headers = authHeaders();
 * ```
 */
export default function authHeaders() {
  const accessToken = storage.get("accessToken");
  if (!accessToken) {
    throw new Error("User is not authenticated");
  }
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}
