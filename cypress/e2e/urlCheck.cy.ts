// https://docs.cypress.io/api/introduction/api.html

describe("1.Check Url", () => {
    it("visits the app root url", () => {
      expect(true).to.equal(true);
      cy.visit("http://127.0.0.1:5173/zzemalpwa/");
      cy.contains("김재현입니다");
      cy.contains("TestPage").click();

      // move to TestPage
      cy.get('h1').contains('Test Page')
      cy.url().should('include','testPage')
  
    });
});
  