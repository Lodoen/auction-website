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
export default function setChangeMediaListener(
  btn,
  media,
  image,
  positionWrapper
) {
  if (image && positionWrapper) {
    btn.addEventListener("click", (event) => {
      try {
        let position =
          parseInt(image.dataset.position) +
          parseInt(event.currentTarget.dataset.direction);
        if (position < 0) {
          position = media.length - 1;
        } else if (position > media.length - 1) {
          position = 0;
        }
        image.dataset.position = position;
        image.src = media[position];
        positionWrapper.innerText = `${position + 1} / ${media.length}`;
      } catch (error) {
        positionWrapper.innerHTML = "";
        positionWrapper.innerText =
          "We encountered an error with the media element(s)";
      }
    });
  }
}
