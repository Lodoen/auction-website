/**
 * Attaches the change media functionality to a change media button
 * @param {*} btn Change media button
 * @param {*} media Array of media elements
 * @example
 * ```js
 * listeners.changeMedia(btn, media)
 * ```
 */
export default function setChangeMediaListener(btn, media) {
  btn.addEventListener("click", (event) => {
    const image = document.getElementById("product-showcase");
    const position =
      parseInt(image.dataset.position) +
      parseInt(event.currentTarget.dataset.direction);
    if (position >= 0 && position <= media.length - 1) {
      image.dataset.position = position;
      image.src = media[position];
      document.querySelector(".product-showcase-wrapper p").innerText = `${
        position + 1
      } / ${media.length}`;
    }
  });
}
