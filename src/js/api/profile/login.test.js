import login from "./login.mjs";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    name: "name",
    email: "email",
    credits: 1000,
    avatar: null,
    accessToken: "token",
  }),
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
    localStorage.clear();
    const user = {
      email: "email",
      password: "password",
    };
    await login(user);
    const accessToken = localStorage.getItem("accessToken");
    expect(accessToken).not.toBeNull();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
