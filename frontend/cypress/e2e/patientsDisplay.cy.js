describe("N5.Display all patients", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:3000/");
    cy.get(".ml-8").click();
    cy.get("#email-address").type("admin@test.com");
    cy.get("#password").type("password");
    cy.get('[data-cy="submit"]').click();
    cy.wait(600);
    cy.get('[href="/patients"] > .text-base').click();
    cy.get(
      "#root > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(3) > .text-center"
    ).contains("Danika Brando");
    cy.get(".ml-8").click();
  });
});
