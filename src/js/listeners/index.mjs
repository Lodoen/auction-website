import register from "./setRegisterListener.mjs";
import login from "./setLoginListener.mjs";
import logout from "./logoutListener.mjs";
import filterAuctions from "./setFilterAuctionsListener.mjs";
import changeMedia from "./setChangeMediaListener.mjs";
import makeBid from "./makeBidListener.mjs";
import createAuction from "./createAuctionListener.mjs";
import updateAvatar from "./updateAvatarListener.mjs";
import validateFormInputs from "./setValidateFormInputsListener.mjs";

export default {
  register,
  login,
  logout,
  filterAuctions,
  changeMedia,
  makeBid,
  createAuction,
  updateAvatar,
  validateFormInputs,
};
