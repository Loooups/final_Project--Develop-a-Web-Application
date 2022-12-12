describe("N2.Add new study", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ml-8").click();
    cy.get("#email-address").type("admin@test.com");
    cy.get("#password").type("password");
    cy.get('[data-cy="submit"]').click();
    cy.wait(500);
    cy.get('button:contains("Administration")').click();
    cy.get('a[href="/formStudy"] > .-m-3').click();
    cy.get("#name").type("poulet@test.com");
    cy.get("#startDate").type("2022-12-11T18:02:00");
    cy.get("#endDate").type("2022-12-12T19:00:00");
    cy.get("#status").type("Sceduled");
    cy.get("#drugSubstance").type("poulet");
    cy.get("#image").type(
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    );
    cy.get('[data-cy="submit"]').click();
    cy.wait(500);
    cy.get('[href="/studies"] > .text-base').click();
    cy.get(".min-h-full").contains("poulet@test.com");
    cy.get(".ml-8").click();
  });
});
