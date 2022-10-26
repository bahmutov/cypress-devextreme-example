// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('selects the state', () => {
  cy.visit('app/index.html')
  // by default CA state is selected
  cy.get('input[name=State]')
    .should('have.value', 'CA')
    .parent()
    .find('[aria-label=Select]')
    .click()
  cy.get('[role=listbox]')
    .should('be.visible')
    .contains('[role=option]', 'MA')
    .scrollIntoView()
    .click()
  // the input field now has the value "MA"
  cy.get('input[name=State]').should('have.value', 'MA')
})
