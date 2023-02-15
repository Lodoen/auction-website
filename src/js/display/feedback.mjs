/**
 * Returns a customisable feedback message
 * @example
 * ```js
 * feedback.append(display.feedback("Registration successful!", "success"));
 * ```
 */
export default function feedback(message, status) {
  const feedback = document.createElement("div");
  feedback.setAttribute("class", `alert alert-${status} w-100`);
  feedback.setAttribute("role", "alert");
  feedback.innerText = message;
  return feedback;
}
