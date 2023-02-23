/**
 * Calculates highest bid from an array of bids
 * @param {*} bids Array of bids
 * @returns {number} Highest bid from the array
 * @example
 * ```js
 * const bid = calculateHighestBid(bids);
 * ```
 */
export default function calculateHighestBid(bids) {
  if (typeof bids !== "object" || bids.length <= 0) {
    return 0;
  }
  return Math.max(...bids.map(({ amount }) => amount));
}
