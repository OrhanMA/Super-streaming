const baseUrl = "http://localhost:3000";

describe("Search feature", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Searching for a movie get the user to the search page", () => {
    cy.get("input[name='query']").type("spiderman");

    cy.get("button").contains("search").click();

    cy.url().should("eq", `${baseUrl}/search?query=spiderman`);

    cy.get("h1").should("have.text", "Search results for: spiderman");
  });

  it("Clicking on a movie in the search page should get the user to its details page", () => {
    cy.visit(`${baseUrl}/search?query=spiderman`);

    cy.get("ul.grid > li")
      .first()
      .should("be.visible")
      .within(() => {
        cy.get("a").click();
      });

    cy.url().should("match", /\/movie\/\d+/);
  });
});
