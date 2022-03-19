describe('Client app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('shows the temporary title component', () => {
    cy.get('blv-title').should('have.text', 'Welcome to Blaasveld.net');
  });
});
