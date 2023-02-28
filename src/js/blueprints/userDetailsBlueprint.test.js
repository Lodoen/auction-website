/**
 * @jest-environment jsdom
 */
import userDetailsBlueprint from "./userDetailsBlueprint.mjs";

describe("user details", () => {
  it("can view their total credit", async () => {
    const details = { credits: 1000, avatar: "url" };
    const renderedUserDetails = userDetailsBlueprint(details);
    const numberOfCredits = renderedUserDetails.querySelector("p.text-light");
    expect(numberOfCredits.innerText).toEqual(details.credits);
  });
});
