import getProfile from "../api/profile/getProfile.mjs";
import getBidsByProfile from "../api/profile/getBidsByProfile.mjs";
import getListingsByProfile from "../api/profile/getListingsByProfile.mjs";
import render from "../render/index.mjs";
import storage from "../storage/index.mjs";
import blueprints from "../blueprints/index.mjs";
import "../render/clearHTML/index.mjs";

/**
 * Prepares a specific profile for rendering on the profile page
 * @example
 * ```js
 * prepareProfile()
 * ```
 */
export default async function prepareProfile() {
  try {
    const parameters = new URLSearchParams(document.location.search);
    let nameParam = parameters.get("name");
    const name = nameParam ? nameParam : storage.get("name");

    if (!name) {
      throw blueprints.error("Profile page must have valid name");
    }

    const profile = await getProfile(name);

    if (!profile) {
      throw blueprints.error(
        `No profile with the name "${name}" exists in our database`
      );
    }

    const bids = await getBidsByProfile(name);
    profile["bids"] = bids ? bids : [];

    const listings = await getListingsByProfile(name);
    profile["listings"] = listings ? listings : [];

    render.profile(profile);
  } catch (error) {
    const container = document.querySelector("main");
    if (container) {
      container.setAttribute("class", "maxw-650 mx-auto");
      container.clearHTML();
      if (error.isCustomError) {
        container.append(blueprints.feedback(error.message, "warning"));
      } else {
        container.append(
          blueprints.feedback(
            "Something went wrong when rendering the profile page"
          )
        );
      }
    }
  }
}
