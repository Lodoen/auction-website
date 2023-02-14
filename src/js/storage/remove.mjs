/**
 * Removes item from local storage under specified key
 * @param {string} key Key to remove
 * @example
 * ```js
 * remove("name");
 * ```
 */
export default function remove(key) {
  localStorage.removeItem(key);
}
