// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    expect(true).to.equal(true);
    cy.visit("http://127.0.0.1:5173/zzemalpwa/");
    cy.contains("김재현입니다");
    cy.contains("TestPage").click();

    cy.get(".inputBox").type("Hello World").should("have.value", "Hello World");
  });
});
