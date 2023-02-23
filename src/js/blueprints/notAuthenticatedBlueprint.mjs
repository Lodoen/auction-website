/**
 * Creates HTML for a not authenticated message and a link to the register page
 * @returns {*} HTML for a not authenticated message
 * @example
 * ```js
 * const feedback = notAuthenticatedBlueprint();
 * ```
 */
export default function notAuthenticatedBlueprint() {
  const message = document.createElement("p");
  message.setAttribute("class", `m-0`);
  message.setAttribute("role", "alert");
  message.innerText = `You have to be logged in to view the ${location.pathname.replaceAll(
    "/",
    ""
  )} page.`;

  const link = document.createElement("a");
  link.setAttribute("class", "fst-italic");
  link.setAttribute("href", `/register`);
  link.innerText = "Visit the register page to create a new account";

  const messageWrapper = document.createElement("div");
  messageWrapper.setAttribute(
    "class",
    "maxw-650 mx-auto warning alert alert-danger mt-3"
  );
  messageWrapper.append(message, link);

  return messageWrapper;
}
