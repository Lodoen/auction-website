import register from "./setRegisterListener.mjs";
import login from "./setLoginListener.mjs";
import logout from "./logoutListener.mjs";
import filterAuctions from "./setFilterAuctionsListener.mjs";
import changeMedia from "./setChangeMediaListener.mjs";
import makeBid from "./makeBidListener.mjs";
import publishAuction from "./publishAuctionListener.mjs";
import updateAvatar from "./updateAvatarListener.mjs";
import validateFormInputs from "./setValidateFormInputsListener.mjs";
import removeAuction from "./removeAuctionListener.mjs";

export default {
  register,
  login,
  logout,
  filterAuctions,
  changeMedia,
  makeBid,
  publishAuction,
  updateAvatar,
  validateFormInputs,
  removeAuction,
};
