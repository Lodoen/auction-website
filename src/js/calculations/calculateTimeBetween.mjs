/**
 * Calculates time between a now and a moment in time
 * @param {string} pointInTime Point in time to use in calculation
 * @param {boolean} isBid Whether the time is connected to a bid
 * @returns {string} Time between the point in time and now
 * @example
 * ```js
 * calculateTimeBetween(deadline);
 * ```
 */
export default function calculateTimeBetween(pointInTime, isBid = false) {
  const millisecondsBetween = isBid
    ? new Date() - new Date(pointInTime)
    : new Date(pointInTime) - new Date();
  if (millisecondsBetween > 31536000000) {
    //more than a year
    return `More than a year ${isBid ? "ago" : ""}`;
  }
  if (millisecondsBetween > 2592000000) {
    //more than 30 days
    return `${Math.trunc(millisecondsBetween / 2592000000)} month(s) ${
      isBid ? "ago" : ""
    }`;
  }
  if (millisecondsBetween > 86400000) {
    //more than a day
    return `${Math.trunc(millisecondsBetween / 86400000)} day(s) ${
      isBid ? "ago" : ""
    }`;
  }
  if (millisecondsBetween > 3600000) {
    //more than a hour
    return `${Math.trunc(millisecondsBetween / 3600000)} hour(s) ${
      isBid ? "ago" : ""
    }`;
  }
  if (millisecondsBetween > 60000) {
    //more than a minute
    return `${Math.trunc(millisecondsBetween / 60000)} minute(s) ${
      isBid ? "ago" : ""
    }`;
  }
  if (millisecondsBetween > 1000) {
    //more than a second
    return `${Math.trunc(millisecondsBetween / 1000)} seconds(s) ${
      isBid ? "ago" : ""
    }`;
  }
  return isBid ? "Now" : "Already ended";
}
