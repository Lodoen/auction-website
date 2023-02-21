import { basePath } from "../constants/index.mjs";

/**
 * Creates HTML for a not authenticated message and a link to the register page
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
  link.setAttribute("href", `${basePath}/register`);
  link.innerText = "Visit the register page to create a new account";

  const messageWrapper = document.createElement("div");
  messageWrapper.setAttribute(
    "class",
    "maxw-650 mx-auto warning alert alert-danger mt-3"
  );
  messageWrapper.append(message, link);

  return messageWrapper;
}
