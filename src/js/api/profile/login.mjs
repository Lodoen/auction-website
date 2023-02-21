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

    if (!response.ok) {
      throw new Error("Oops! Something went wrong with the login.");
    }

    const result = await response.json();

    storage.save("name", result.name);
    storage.save("accessToken", result.accessToken);
    window.location.replace("../profile");
  } catch (error) {
    feedback.innerHTML = "";
    feedback.append(blueprints.feedback(error.message, "danger"));
  }
}
