import getProfile from "../api/profile/getProfile.mjs";
import getBidsByProfile from "../api/profile/getBidsByProfile.mjs";
import getListingsByProfile from "../api/profile/getListingsByProfile.mjs";
import display from "../display/index.mjs";
import storage from "../storage/index.mjs";

/**
 * Shows a profile page, if the name is valid and the user is authenticated
 * @example
 * ```js
 * show.profile();
 * ```
 */
export default async function profile() {
  const container = document.querySelector("main");
  try {
    const parameters = new URLSearchParams(document.location.search);
    let nameParam = parameters.get("name");
    const name = nameParam ? nameParam : storage.get("name");

    if (!name) {
      throw new Error("Profile page must have valid name");
    }

    const profile = await getProfile(name);

    if (!profile) {
      throw new Error(
        `No profile with the name "${name}" exists in our database`
      );
    }

    const bids = await getBidsByProfile(name);
    profile["bids"] = bids;

    const listings = await getListingsByProfile(name);
    profile["listings"] = listings;

    display.profile(profile);
  } catch (error) {
    container.innerHTML = "";
    container.setAttribute("class", "maxw-650 mx-auto");
    container.append(display.feedback(error.message, "warning"));
  }
}
