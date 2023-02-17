import listener from "./listeners/index.mjs";
import validation from "./validation/index.mjs";
import show from "./show/index.mjs";

if (location.pathname == "/create/" || location.pathname == "/profile/") {
  validation.loggedIn();
}

switch (location.pathname) {
  case "/register/":
    listener.register();
    break;
  case "/login/":
    listener.login();
    break;
  case "/index.html":
  case "/":
    validation.loggedIn();
    show.auctionListings();
    break;
}
