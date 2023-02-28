import listings from "./listings/index.mjs";
import profile from "./profile/index.mjs";
import validation from "./validation/index.mjs";

export default {
  ...listings,
  ...profile,
  ...validation,
};
