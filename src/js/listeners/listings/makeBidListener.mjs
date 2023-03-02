import listings from "../../api/listings/index.mjs";
import blueprints from "../../blueprints/index.mjs";
import render from "../../render/index.mjs";
import "../../render/clearHTML/index.mjs";

/**
 * Attaches the make a bid functionality to the make a bid form
 * @param {*} event Form that called the function
 * @param {string} id ID of auction listing
 * @example
 * ```js
 * listeners.makeBid(event, id);
 * ```
 */
export default async function makeBidListener(event, id) {
  event.preventDefault();
  const formFeedback = document.getElementById("form-feedback");

  if (formFeedback) {
    try {
      formFeedback.clearHTML();
      formFeedback.append(blueprints.loading());

      const formData = new FormData(event.currentTarget);
      const amount = { amount: parseInt(formData.get("amount")) };
      const response = await listings.makeBid(id, amount);

      formFeedback.clearHTML();
      if (!response) {
        throw blueprints.error(
          "Oops! Something does not seem quite right... A bid must be higher than the last, and you must have enough credits."
        );
      }

      formFeedback.append(
        blueprints.feedback(`You bid ${amount.amount} credit(s)`, "success")
      );

      const input = document.getElementById("bid");
      if (input) {
        input.value = amount.amount + 1;
        input.min = amount.amount + 1;
      }

      const creditsLeft = document.querySelector("#user-details p");
      if (creditsLeft) {
        creditsLeft.textContent =
          parseInt(creditsLeft.textContent) - amount.amount;
      }

      const highestBid = document.getElementById("highest-bid");
      if (highestBid) {
        highestBid.textContent = amount.amount;
      }

      const container = document.getElementById("bidding-history");
      if (container) {
        const { bids } = response;
        render.bidHistory(container, bids);
      }
    } catch (error) {
      formFeedback.clearHTML();
      if (error.isCustomError) {
        formFeedback.append(blueprints.feedback(error.message, "warning"));
      } else {
        formFeedback.append(
          blueprints.feedback("Something went wrong with the make a bid form")
        );
      }
    }
  }
}
