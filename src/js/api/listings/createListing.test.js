import createListing from "./createListing.mjs";

const mockObject = {
  id: "id",
  title: "title",
  description: "description",
  media: [],
  tags: ["electronics"],
  created: "2023-01-01T12:00:00.000Z",
  updated: "2023-01-01T12:00:00.000Z",
  endsAt: "2024-01-01T12:00:00.000Z",
  _count: {
    bids: 0,
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

describe("create", () => {
  it("creates an auction listing", async () => {
    const listing = await createListing({
      title: "title",
      description: "description",
      media: [],
      tags: ["electronics"],
      endsAt: "2024-01-01T12:00:00.000Z",
    });
    expect(listing).toMatchObject(mockObject);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
