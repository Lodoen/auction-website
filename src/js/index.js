import listener from "./listeners/index.mjs";
import validation from "./validation/index.mjs";
import prepare from "./prepare/index.mjs";
import render from "./render/index.mjs";

switch (location.pathname) {
  case "/register/":
  case "/register/index.html":
    listener.register();
    break;
  case "/login/":
  case "/login/index.html":
    listener.login();
    break;
  case "/":
  case "/index.html":
    prepare.auctionListings();
    break;
  case "/listing/":
  case "/listing/index.html":
    prepare.specificAuctionListing();
    break;
  case "/create/":
  case "/create/index.html":
    validation.authenticated(render.publishAuction);
    break;
  case "/profile/":
  case "/profile/index.html":
    validation.authenticated(prepare.profile);
    break;
}
