describe ("Test Google search", () => {
    it("Go to Google", () =>{
       cy.visit("https://google.com")
    });


 it("Agree to terms and conditions",() =>{
    cy.get('[id=L2AGLb]').click();
    });
     
    it("Search for African Food", () => {

        cy.get('input[name=q]').type("African Food").type("{enter}");
    });

});