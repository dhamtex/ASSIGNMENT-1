describe ("Automation2", () => {
    it("Sprint 2", () => {
    cy.visit("https://ultimateqa.com/sample-application-lifecycle-sprint-2/");
    cy.get ("input[name=firstname]").type("Dami");
    cy.get ("input[name=lastname]").type("Damilola");
    cy.get("input[type=submit]").click();
    
    
    });
    
    })