import blueprints from "../blueprints/index.mjs";
export default function showModalListener(img) {
  const container = document.querySelector("main");
  if (container) {
    container.append(blueprints.modal(img.src));
  }
}
