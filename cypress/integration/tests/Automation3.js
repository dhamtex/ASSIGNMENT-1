describe ("Automation 3.0" , () => {
    it("Sprint 3.0" , () => {
    cy.visit ("https://ultimateqa.com/sample-application-lifecycle-sprint-3/");
    cy.get("input[name=firstname]").type("Dam");
    cy.get("input[name=lastname]").type("Tester");
    cy.get('[type="radio"]').check("female");
    cy.get("input[type=submit").click()
    });
    
    
    
    })