/**
 * @jest-environment jsdom
 */

import renderBidHistory from "./renderBidHistory.mjs";

const bids = [
  {
    amount: 3,
    bidderName: "user 3",
    created: "2023-01-03T00:00:00.000Z",
    id: "id 3",
  },
  {
    amount: 2,
    bidderName: "user 2",
    created: "2023-01-02T00:00:00.000Z",
    id: "id 2",
  },
  {
    amount: 1,
    bidderName: "user 1",
    created: "2023-01-01T00:00:00.000Z",
    id: "id 1",
  },
];

describe("render bid history", () => {
  it("may view Bids made on a Listing", () => {
    const container = document.createElement("div");
    renderBidHistory(container, bids);
    expect(container.childElementCount).toEqual(bids.length);
  });
});
