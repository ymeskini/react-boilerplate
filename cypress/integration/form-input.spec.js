describe('Form Input', () => {
  it('Focuses the input on load', () => {
    cy.visit('/todo');
    // focus the first element on the page
    cy.focused().should('have.class', 'new-todo');
  });
});
