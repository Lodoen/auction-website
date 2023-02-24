/**
 * Removes all child elements from a container
 * @param {*} container Container to remove child elements
 * @example
 * ```js
 * container.clearHTML();
 * ```
 */
function clearHTML() {
  while (this.firstChild) {
    this.removeChild(this.firstChild);
  }
}

HTMLElement.prototype.clearHTML = clearHTML;
