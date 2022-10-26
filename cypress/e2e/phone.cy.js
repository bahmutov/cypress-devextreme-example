// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('formats the phone number', () => {
  cy.visit('app/index.html')
  // starts with a 10 digit number
  cy.get('input[name=Mobile]')
    .should('have.prop', 'value')
    .should('match', /^\d{10}$/)
  cy.get('input[name=Mobile]')
    .parent()
    .find('input[role=textbox]')
    .clear()
    .type('1234567890')
    .blur()
  cy.get('input[name=Mobile]')
    .should('have.value', '1234567890')
    .parent()
    .find('input[role=textbox]')
    // the text box has formatted phone number
    .should('have.value', '+1 (123) 456-7890')
})
