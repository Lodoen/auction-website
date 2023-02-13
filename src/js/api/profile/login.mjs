import { baseUrl } from "../constants.mjs";
import storage from "../../storage/index.mjs";
import display from "../../display/index.mjs";

export default async function login(profile) {
  const feedback = document.getElementById("form-feedback");

  try {
    feedback.innerHTML = "";
    feedback.append(display.loading());

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
    feedback.append(display.feedback(error.message, "danger"));
  }
}
