/**
 * Creates HTML for a customisable feedback message
 * @param {string} message The customisable feedback message
 * @param {string} status The alert status
 * @returns {HTMLElement} HTML for displaying a customisable feedback message
 * @example
 * ```js
 * const feedback = feedbackBlueprint("Registration successful!", "success");
 * ```
 */
export default function feedbackBlueprint(message, status = "danger") {
  const feedback = document.createElement("div");
  feedback.setAttribute("class", `alert alert-${status} w-100`);
  feedback.setAttribute("role", "alert");
  feedback.innerText = message;
  return feedback;
}
