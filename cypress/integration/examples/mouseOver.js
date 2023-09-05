
/// <reference types = "Cypress"/> 

describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

  cy.get('div.mouse-hover-content').invoke('show')
  cy.contains('Top').click()
  //cy.contains('Top').click({force: true})
  cy.url().should('contain', 'top')
    })
})