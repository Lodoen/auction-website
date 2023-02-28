/**
 * @jest-environment jsdom
 */
import logoutListener from "./logoutListener.mjs";

class LocalStorageMock {
  constructor() {
    this.storage = {
      accessToken: "token",
      name: `jonas`,
    };
  }

  getItem(key) {
    return this.storage[key] || null;
  }

  removeItem(key) {
    delete this.storage[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("clears the accessToken and name from local storage", () => {
    logoutListener();
    expect(localStorage.getItem("accessToken")).toBeNull();
    expect(localStorage.getItem("name")).toBeNull();
  });
});
