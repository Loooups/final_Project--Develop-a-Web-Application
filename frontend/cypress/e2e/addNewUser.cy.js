describe("N4.Add new study", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ml-8").click();
    cy.get("#email-address").type("admin@test.com");
    cy.get("#password").type("password");
    cy.get('[data-cy="submit"]').click();
    cy.wait(600);
    cy.get('button:contains("Administration")').click();
    cy.get('a[href="/formUser"] > .-m-3').click();
    cy.get(".min-h-full").click();
    cy.get("#name").type("poulet");
    cy.get("#email-address").type("poulet@test.com");
    cy.get("#password").type("poulet");
    cy.wait(500);
    cy.get(":nth-child(3) > .group").click();
    cy.wait(100);
    cy.get(":nth-child(2) > :nth-child(1) > .bg-white").contains(
      "poulet@test.com"
    );
    cy.get(".ml-8").click();
  });
});
