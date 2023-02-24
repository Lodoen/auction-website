/**
 * Removes all child elements from a container
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
