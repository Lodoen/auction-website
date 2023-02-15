/**
 * Calculates time between a deadline and now
 * @param {string} deadline Deadline to use in calculation
 * @returns {string} Time between the deadline and now
 * @example
 * ```js
 * timeLeft(endsAt);
 * ```
 */
export default function timeLeft(deadline) {
  const millisecondsLeft = new Date(deadline) - new Date();
  if (millisecondsLeft <= 0) {
    //already ended
    return "Already ended";
  }
  if (millisecondsLeft > 31536000000) {
    //more than a year
    return "More than a year";
  }
  if (millisecondsLeft > 2592000000) {
    //more than 30 days
    return `${Math.trunc(millisecondsLeft / 2592000000)} month(s)`;
  }
  if (millisecondsLeft > 86400000) {
    //more than a day
    return `${Math.trunc(millisecondsLeft / 86400000)} day(s)`;
  }
  if (millisecondsLeft > 3600000) {
    //more than a hour
    return `${Math.trunc(millisecondsLeft / 3600000)} hour(s)`;
  }
  if (millisecondsLeft > 60000) {
    //more than a minute
    return `${Math.trunc(millisecondsLeft / 60000)} minute(s)`;
  }
  if (millisecondsLeft > 1000) {
    //more than a second
    return `${Math.trunc(millisecondsLeft / 1000)} seconds(s)`;
  }
  return "Ending shortly"; //less than a second
}
