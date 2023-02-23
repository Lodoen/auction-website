import { baseUrl } from "../constants.mjs";
import storage from "../../storage/index.mjs";
import blueprints from "../../blueprints/index.mjs";

/**
 * Sends a post request to the API to login a user
 * @param {*} profile Data to send in the post request
 * @example
 * ```js
 * login(profileDetails);
 * ```
 */
export default async function login(profile) {
  const feedback = document.getElementById("form-feedback");
  if (feedback) {
    try {
      feedback.innerHTML = "";
      feedback.append(blueprints.loading());

      const response = await fetch(`${baseUrl}/auth/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(profile),
      });

      const result = await response.json();

      if (!response.ok) {
        throw blueprints.error(result.errors[0].message);
      }

      storage.save("name", result.name);
      storage.save("accessToken", result.accessToken);
      window.location.replace("../profile");
    } catch (error) {
      feedback.innerHTML = "";
      if (error.isCustomError) {
        feedback.append(blueprints.feedback(error.message, "warning"));
      } else {
        feedback.append(
          blueprints.feedback(
            "Something went wrong with the login page",
            "warning"
          )
        );
      }
    }
  }
}
