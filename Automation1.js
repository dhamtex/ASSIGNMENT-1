describe ("Automation", () => {
    it ("Sprint 1", () => {
    cy.visit ("https://ultimateqa.com/sample-application-lifecycle-sprint-1/");
    cy.get ("input[name=firstname]").type("Dammy");
    cy.get ("input[id=submitForm]").click();
    });
    
    })