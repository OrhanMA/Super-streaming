const baseUrl = "http://localhost:3000";

describe("Super streaming homepage", () => {
  beforeEach(() => {
    // Before each test on that file
    cy.visit(baseUrl);
    //visit the homepage of the site
  });

  it("clicking on the home link should navigate to home", () => {
    // getting the DOM element <a> with the ID "home" and click on it
    cy.get("#home").click();

    // The url should stay http://localhost:3000/
    cy.url().should("eq", `${baseUrl}/`);
  });

  it("clicking on the popular link should navigate to popular section", () => {
    // getting the DOM element <a> with a text that contains "Popular" and click on it
    cy.get("a").contains("Popular").click();

    // now the url should be http://localhost:3000/popular
    cy.url().should("eq", `${baseUrl}/popular`);
  });

  it("clicking on the top link should navigate to top section", () => {
    // getting the DOM element <a> with a text that contains "Top" and click on it
    cy.get("a").contains("Top").click();

    // now the url should be http://localhost:3000/top
    cy.url().should("eq", `${baseUrl}/top`);
  });

  it("clicking on the soon link should navigate to upcoming section", () => {
    // getting the DOM element <a> with a text that contains "Soon" and click on it
    cy.get("a").contains("Soon").click();

    // now the url should be http://localhost:3000/soon
    cy.url().should("eq", `${baseUrl}/upcoming`);
  });

  it("clicking on the favorite link should navigate to favorites section", () => {
    // getting the DOM element <a> with the ID "favorites" and click on it
    cy.get("#favorites").click();

    // now the url should be http://localhost:3000/favorites
    cy.url().should("eq", `${baseUrl}/favorites`);
  });

  it("submitting a search should navigate to /search", () => {
    cy.get("input[name='query']").type("Spiderman");
    cy.get("form").submit();

    cy.url().should("contain", `${baseUrl}/search`);
  });
});
