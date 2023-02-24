import { baseUrl } from "../constants.mjs";
import blueprints from "../../blueprints/index.mjs";
import "../../render/clearHTML/index.mjs";

/**
 * Sends a post request to the API to register a new user
 * @param {*} profile Data to send in the post request
 * @example
 * ```js
 * register(profileDetails);
 * ```
 */
export default async function register(profile) {
  const feedback = document.getElementById("form-feedback");
  if (feedback) {
    try {
      feedback.append(blueprints.loading());

      const response = await fetch(`${baseUrl}/auth/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(profile),
      });

      feedback.clearHTML();

      if (!response.ok) {
        const result = await response.json();
        throw blueprints.error(result.errors[0].message);
      }

      feedback.append(
        blueprints.feedback("Registration successful!", "success")
      );
    } catch (error) {
      feedback.clearHTML();
      if (error.isCustomError) {
        feedback.append(blueprints.feedback(error.message, "warning"));
      } else {
        feedback.append(
          blueprints.feedback(
            "Something went wrong with the register form",
            "warning"
          )
        );
      }
    }
  }
}
