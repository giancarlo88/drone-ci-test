describe('Test environment', () => {
  before(() => cy.visit('http://localhost:3000/test'))

  it('renders a button', () => {
    cy.get('button').contains('Show message').should('exist')
  })

  it('clicks the button', () => {
    cy.get('button').contains('Show message').click()
  })

  it('makes text appear', () => {
    cy.contains('Test message').should('be.visible')
  })
})
