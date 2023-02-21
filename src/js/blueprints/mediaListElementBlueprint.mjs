/**
 * Creates HTML for a list element in the media list on the create page
 * @param {string} url New url
 * @param {*} bids List of all urls
 * @returns {*} HTML for displaying a list element in the media list
 * @example
 * ```js
 * const listElement = mediaListElement(url, mediaUrls);
 * ```
 */
export default function mediaListElementBlueprint(url, mediaUrls) {
  const media = document.createElement("span");
  media.setAttribute("class", "text-break");
  media.innerText = url;

  const icon = document.createElement("img");
  icon.setAttribute("class", "w-100");
  icon.setAttribute("alt", "Remove media");
  icon.src = "../img/icons/remove.png";

  const button = document.createElement("button");
  button.setAttribute(
    "class",
    "icon-product ms-3 p-0 btn btn-link d-flex align-items-center"
  );
  button.setAttribute("type", "button");
  button.addEventListener("click", () => {
    const listElement = document.querySelector(`ol li[data-src="${url}"]`);
    if (listElement && mediaUrls.has(url)) {
      listElement.remove();
      mediaUrls.delete(url);
    }
  });
  button.append(icon);

  const buttonWrapper = document.createElement("div");
  buttonWrapper.setAttribute("class", "d-flex align-items-center");
  buttonWrapper.append(media, button);

  const listElementWrapper = document.createElement("li");
  listElementWrapper.dataset.src = url;
  listElementWrapper.append(buttonWrapper);
  return listElementWrapper;
}
