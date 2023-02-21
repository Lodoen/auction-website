/**
 * Creates HTML for a customisable feedback message
 * @example
 * ```js
 * const feedback = feedbackBlueprint("Registration successful!", "success");
 * ```
 */
export default function feedbackBlueprint(message, status) {
  const feedback = document.createElement("div");
  feedback.setAttribute("class", `alert alert-${status} w-100`);
  feedback.setAttribute("role", "alert");
  feedback.innerText = message;
  return feedback;
}
