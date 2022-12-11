describe("N1.Login Test", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ml-8").click();
    cy.get("#email-address").type("admin@test.com");
    cy.get("#password").type("password");
    cy.get('[data-cy="submit"]').click();
    cy.contains("Sign out");
  });
});
