describe('Async Components', () => {
  it('Loads React Player on scroll', () => {
    cy.visit('/')
    cy.get('.react-player').should('not.exist')
    cy.contains('Serverless Music Player').scrollIntoView()
    cy.get('.react-player').should('exist')
  })
})
