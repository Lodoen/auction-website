import listener from "./listeners/index.mjs";
import validation from "./validation/index.mjs";
import show from "./show/index.mjs";
import { basePath } from "./constants/index.mjs";

switch (location.pathname) {
  case `${basePath}/register/`:
  case `${basePath}/register/index.html`:
    listener.register();
    break;
  case `${basePath}/login/`:
  case `${basePath}/login/index.html`:
    listener.login();
    break;
  case `${basePath}/`:
  case `${basePath}/index.html`:
    validation.loggedIn();
    show.auctionListings();
    break;
  case `${basePath}/listing/`:
  case `${basePath}/listing/index.html`:
    validation.authenticated(show.specificListing);
    break;
  case `${basePath}/create/`:
  case `${basePath}/create/index.html`:
    validation.authenticated(listener.createAuction);
    break;
  case `${basePath}/profile/`:
  case `${basePath}/profile/index.html`:
    validation.authenticated(show.profile);
    break;
}
