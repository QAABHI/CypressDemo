before(()=>{
    cy.writeFile("browserDetails.json", Cypress.browser)
    cy.writeFile("OSDetails.json", {'name':Cypress.platform})
})