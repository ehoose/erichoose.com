describe("app", () => {
  it("works", () => {
    cy.visit("/").contains(/Eric Hoose's Blog/i)
  })
})
