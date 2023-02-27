import register from "./register.mjs";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    id: 1,
    name: "name",
    email: "email",
    avatar: null,
    credits: 1000,
  }),
});

global.fetch = mockFetchSuccess;

describe("register", () => {
  it("registers a user with valid credentials", async () => {
    localStorage.clear();
    const user = {
      name: "name",
      email: "email",
      password: "password",
    };
    await register(user);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
