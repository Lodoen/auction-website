/**
 * Removes item from local storage under specified key
 * @param {string} key Key to remove
 * @example
 * ```js
 * removeFromStorage("name");
 * ```
 */
export default function removeFromStorage(key) {
  localStorage.removeItem(key);
}
