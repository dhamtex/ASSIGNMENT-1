describe ("Automation 5" , () => {
    it("Sprint 5"  , () => {
    cy.visit("https://ultimateqa.com/sample-application-lifecycle-sprint-5/");
    cy.get('[id="radio1-0"]').check("other");
    cy.get("input[id=f1]").type("Damilola");
    cy.get("input[id=l1]").type("Software");
    cy.get("input[id=f2]").type("Matthew");
    cy.get("input[id=l2]").type("DTester");
    cy.get('[id="radio2-0"]').check("other");

    cy.get("input[id=submit2]").click();

    });
    })
    //cy.get('[type="radio"]').check("female");
