import { baseUrl } from "../constants.mjs";
import display from "../../display/index.mjs";

export default async function register(profile) {
  const feedback = document.getElementById("form-feedback");

  try {
    feedback.append(display.loading());

    const response = await fetch(`${baseUrl}/auth/register`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(profile),
    });

    feedback.innerHTML = "";

    if (!response.ok) {
      throw new Error("Oops! Something went wrong with the registration.");
    }

    feedback.append(display.feedback("Registration successful!", "success"));
  } catch (error) {
    feedback.append(display.feedback(error.message, "danger"));
  }
}
