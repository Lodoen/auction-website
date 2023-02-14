import listener from "./listeners/index.mjs";
import validation from "./validation/index.mjs";

switch (location.pathname) {
  case "/register/":
    listener.register();
    break;
  case "/login/":
    listener.login();
    break;
  case "/":
  case "/create/":
  case "/listing/":
  case "/profile/":
    validation.loggedIn();
}
