/**
 * Attaches the change media functionality to a change media button
 * @param {*} btn Change media button
 * @param {*} media Array of media elements
 * @param {*} image Image to display media in
 * @param {*} positionWrapper Container to display position in media list
 * @example
 * ```js
 * listeners.changeMedia(btn, media, img, position)
 * ```
 */
export default function changeMediaListener(
  btn,
  media,
  image,
  positionWrapper
) {
  if (image && positionWrapper) {
    btn.addEventListener("click", (event) => {
      const position =
        parseInt(image.dataset.position) +
        parseInt(event.currentTarget.dataset.direction);
      if (position >= 0 && position <= media.length - 1) {
        image.dataset.position = position;
        image.src = media[position];
        positionWrapper.innerText = `${position + 1} / ${media.length}`;
      }
    });
  }
}
