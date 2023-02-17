/**
 * Creates HTML for an image in the media gallery
 * @param {string} src SRC of the image element
 * @returns {*} HTML for displaying a image in the media gallery
 * @example
 * ```js
 * const image = galleryImage(url);
 * ```
 */
export default function galleryImage(src) {
  const image = document.createElement("img");
  image.setAttribute("class", "mw-100 mh-100");
  image.setAttribute("alt", "Product showcase");
  image.src = src;
  const imageWrapper = document.createElement("div");
  imageWrapper.setAttribute(
    "class",
    "icon mx-2 border d-flex align-items-center justify-content-center "
  );
  imageWrapper.append(image);
  return imageWrapper;
}
