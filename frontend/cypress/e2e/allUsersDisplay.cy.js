describe("N2.Add new study", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[href="/studies"] > .text-base').click();
  });
});
