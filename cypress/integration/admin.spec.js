describe('Admin app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4300');
  });

  it('shows the temporary title component', () => {
    cy.get('blv-title').should('have.text', 'Blaasveld.net Admin pages');
  });
});
