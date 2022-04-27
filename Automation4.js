describe ("Automation 4" , () => {
    it("Sprint 4"  , () => {
    cy.visit("https://ultimateqa.com/sample-application-lifecycle-sprint-4/");
    cy.get("input[id=f1]").type("Dam");
    cy.get("input[id=l1]").type("Tester");
    cy.get("input[id=f2]").type("Matt");
    cy.get("input[id=l2]").type("Tester");
    cy.get('[type="radio2-m"]').check("male");
    cy.get("input[type=submit2]").click()
    
    });
    })