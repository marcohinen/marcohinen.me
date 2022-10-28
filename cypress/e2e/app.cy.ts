describe('app spec', () => {
  it('should display the correct content', () => {
    cy.visit('/');
    cy.get('h1').should('contain', "I'm Marco 👋");
    cy.get('h2').should('contain', 'Frontend Engineer at AusPost');
  });
});
