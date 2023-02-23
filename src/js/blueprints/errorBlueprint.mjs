/**
 * Creates an object to be used in a customisable feedback message
 * @param {string} message The customisable feedback message
 * @returns {*} The error message object
 * @example
 * ```js
 * const error = errorBlueprint("Error message");
 * ```
 */
export default function errorBlueprint(
  message = "Seems like we encountered a problem"
) {
  return {
    isCustomError: true,
    message,
  };
}
