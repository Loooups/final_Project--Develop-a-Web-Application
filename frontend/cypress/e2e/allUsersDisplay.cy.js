describe("N3.Display all Users", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:3000/");
    cy.get(".ml-8").click();
    cy.get("#email-address").type("admin@test.com");
    cy.get("#password").type("password");
    cy.get('[data-cy="submit"]').click();
    cy.wait(500);
    cy.get('[href="/users"] > .text-base').click();
    cy.get(":nth-child(2) > :nth-child(1) > .bg-white").contains(
      "admin@test.com"
    );
    cy.get(".ml-8").click();
  });
});
