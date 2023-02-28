/**
 * @jest-environment jsdom
 */
import login from "./login.mjs";

const mockObject = {
  name: "name",
  email: "email",
  credits: 1000,
  avatar: null,
  accessToken: "token",
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockObject),
});

global.fetch = mockFetchSuccess;

class LocalStorageMock {
  constructor() {
    this.storage = {};
  }

  clear() {
    this.storage = {};
  }

  setItem(key, value) {
    this.storage[key] = String(value);
  }

  getItem(key) {
    return this.storage[key] || null;
  }
}

global.localStorage = new LocalStorageMock();

describe("login", () => {
  it("stores a token when provided with valid credentials", async () => {
    const container = document.createElement("div");
    container.setAttribute("id", "form-feedback");
    document.body.append(container);

    localStorage.clear();

    const user = {
      email: "email",
      password: "password",
    };

    await login(user);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem("accessToken")).not.toBeNull();
    expect(localStorage.getItem("name")).not.toBeNull();
  });
});
