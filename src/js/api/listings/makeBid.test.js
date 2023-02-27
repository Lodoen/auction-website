import makeBid from "./makeBid.mjs";

const mockObject = {
  id: "id",
  title: "title",
  description: "description",
  tags: ["electronics"],
  media: ["media"],
  created: "2023-01-01T00:00:00.000Z",
  updated: "2023-01-01T00:00:00.000Z",
  endsAt: "2024-01-01T00:00:00.000Z",
  _count: {
    bids: 1,
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

describe("make bid", () => {
  it("allows for the creation of a new bid on a listing", async () => {
    const bid = await makeBid("id", { amount: 1 });
    expect(bid).toMatchObject(mockObject);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
