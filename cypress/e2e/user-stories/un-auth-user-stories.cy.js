describe("User stories", () => {
  beforeEach(() => {
    cy.intercept(
      `https://api.noroff.dev/api/v1/auction/listings?_tag=electronics&_bids=true`
    ).as("auctions");
    cy.visit("/");
    cy.wait("@auctions");
    cy.get("#listings").children().should("have.length.greaterThan", 1);
    cy.get("nav #user-details a.btn").should("contain", "Login");
  });
  it("can search through listings", () => {
    cy.get("#listings")
      .children()
      .then((beforeFilter) => {
        cy.get("#search-form #search").type("search string");
        cy.get(`#search-form button[type="submit"]`).click();
        cy.get("#form-feedback").should("contain", "Filtering auctions ...");
        cy.get("#listings").children().should("not.equal", beforeFilter);
      });
  });
  it("can select and view a listing", () => {
    cy.get("#listings .col").first().click();
    cy.url().should("include", "/listing/?id=");
  });
});
