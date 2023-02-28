import editProfileIcon from "./editProfileIcon.mjs";

const mockObject = {
  name: "name",
  email: "email",
  avatar: "url",
  credits: 1000,
  wins: ["wins"],
  _count: {
    listings: 0,
  },
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockObject),
});

global.fetch = mockFetchSuccess;

class LocalStorageMock {
  constructor() {
    this.storage = {
      accessToken: JSON.stringify("token"),
    };
  }

  getItem(key) {
    return this.storage[key] || null;
  }
}

global.localStorage = new LocalStorageMock();

describe("update entry media", () => {
  it("allows for profile avatar images to be set or changed", async () => {
    const response = await editProfileIcon("name", { avatar: "url" });
    expect(response).toEqual(mockObject);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
