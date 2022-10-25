describe('app spec', () => {
  it('should display the correct content', () => {
    cy.visit('/');
    cy.get('h1').should('contain', "I'm Marco 👋");
    cy.get('h2').should('contain', 'Frontend Engineer at AusPost');
  });

  describe('Dark mode toggle', () => {
    it('should switch to light mode if user has dark mode system wide', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          cy.stub(win, 'matchMedia')
            .withArgs('(prefers-color-scheme: dark)')
            .returns({
              matches: true,
              addListener: () => {},
              removeListener: () => {},
            });
        },
      });
      cy.get('[data-testid="dark-mode-toggle"]').click();

      cy.get('html').should('have.class', 'light');
    });

    it('should switch to dark mode if user has light mode system wide', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          cy.stub(win, 'matchMedia')
            .withArgs('(prefers-color-scheme: dark)')
            .returns({
              matches: false,
              addListener: () => {},
              removeListener: () => {},
            });
        },
      });
      cy.get('[data-testid="dark-mode-toggle"]').click();

      cy.get('html').should('have.class', 'dark');
    });

    it('should switch to dark mode if user has light mode already set', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          cy.stub(win.localStorage, 'getItem')
            .withArgs('theme')
            .returns('light');
        },
      });
      cy.get('[data-testid="dark-mode-toggle"]').click();

      cy.get('html').should('have.class', 'dark');
    });

    it('should switch to light mode if user has dark mode already set', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          cy.stub(win.localStorage, 'getItem')
            .withArgs('theme')
            .returns('dark');
        },
      });
      cy.get('[data-testid="dark-mode-toggle"]').click();

      cy.get('html').should('have.class', 'light');
    });
  });
});
