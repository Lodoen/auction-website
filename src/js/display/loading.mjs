/**
 * Returns a loading spinner
 * @example
 * ```js
 * feedback.append(display.loading());
 * ```
 */
export default function loading() {
  const spinner = document.createElement("div");
  spinner.setAttribute("class", "spinner-border text-primary");
  spinner.setAttribute("role", "status");
  const spinnerContent = document.createElement("span");
  spinnerContent.setAttribute("class", "visually-hidden");
  spinnerContent.innerText = "Loading...";
  spinner.append(spinnerContent);
  return spinner;
}
