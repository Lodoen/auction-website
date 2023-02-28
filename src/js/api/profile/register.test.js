/**
 * @jest-environment jsdom
 */
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
    const container = document.createElement("div");
    container.setAttribute("id", "form-feedback");
    document.body.append(container);

    const user = {
      name: "name",
      email: "email",
      password: "password",
    };

    await register(user);
    expect(fetch).toHaveBeenCalledTimes(1);
    const feedbackContainer = container.querySelector("div.alert");
    expect(feedbackContainer.innerText).toEqual("Registration successful!");
  });
});
