describe("Edit Contact", function () {
    var clickOptions = { force: true };

    beforeEach(() => {
        cy.visit('/');
    });

    it("can be navigated to for Person", function () {
        var name = "Pascal Precht";

        //From Home - Click on Pascal Precht to get see his detail view
        var listItemPascal = cy.get(".contact-li");
        listItemPascal.contains(name).click(clickOptions);

        //Details view title con
        var detailsContent = cy.get(".main-content");
        detailsContent.get("mat-card-title.mat-card-title").contains(name);
        detailsContent.get("a.mat-button[title='Edit']").contains("Edit").click(clickOptions);


    });
});