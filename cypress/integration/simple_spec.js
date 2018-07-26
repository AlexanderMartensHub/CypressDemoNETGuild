describe('Home', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it(`should fail`, () => {
        expect(true).to.be.false;
    });
});