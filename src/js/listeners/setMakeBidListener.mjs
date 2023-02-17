import listings from "../api/listings/index.mjs";
import blueprints from "../blueprints/index.mjs";
import display from "../display/index.mjs";

/**
 * Attaches the make a bid functionality to the make a bid form
 * @param {string} id ID of auction listing
 * @example
 * ```js
 * listeners.makeBid(id);
 * ```
 */
export default async function setMakeBidListener(id) {
  const formContainer = document.getElementById("form-container");
  const form = formContainer.querySelector("form");
  const formFeedback = document.getElementById("form-feedback");

  if (formContainer && form && formFeedback) {
    form.addEventListener("submit", async (event) => {
      try {
        event.preventDefault();
        formFeedback.innerHTML = "";
        formFeedback.append(display.loading());

        const formData = new FormData(form);
        const amount = { amount: parseInt(formData.get("amount")) };
        const response = await listings.makeBid(id, amount);

        formFeedback.innerHTML = "";
        if (!response) {
          throw new Error(
            "Oops! Something does not seem quite right... A bid must be higher than the last, and you must have enough credits."
          );
        }

        formFeedback.append(
          display.feedback(`You bid ${amount.amount} credit(s)`, "success")
        );

        const { bids } = response;
        const container = document.getElementById("bidding-history");
        const input = document.getElementById("bid");
        input.value = amount.amount + 1;
        input.min = amount.amount + 1;
        const creditsLeft = document.getElementById("number-of-tokens");
        creditsLeft.textContent =
          parseInt(creditsLeft.textContent) - amount.amount;
        document.getElementById("highest-bid").textContent = amount.amount;
        bids.sort((a, b) => (a.amount < b.amount ? 1 : -1));
        container.innerHTML = "";
        container.append(...bids.map(blueprints.bid));
      } catch (error) {
        formFeedback.append(display.feedback(error.message, "danger"));
      }
    });
    form.querySelector(`button[type="submit"]`).disabled = false;
  }
}
