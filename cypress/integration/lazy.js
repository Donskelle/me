describe('Async Components', function() {
  it('Loads React Player on scroll', function() {
    cy.visit('/')
    cy.get('.react-player').should('not.exist')
    cy.contains('Serverless Music Player').scrollIntoView()
    cy.get('.react-player').should('exist')
  })
})
