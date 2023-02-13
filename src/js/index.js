import listener from "./listeners/index.mjs";

switch (location.pathname) {
  case "/register/":
    listener.register();
    break;
  case "/login/":
    listener.login();
    break;
}
