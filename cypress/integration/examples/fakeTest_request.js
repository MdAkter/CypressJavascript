/// <reference types="Cypress"/>

describe('First test suite',function(){



it('First test case',function(){


    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
    
    (req)=>
    {
    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

    req.continue((res)=>
    
    {
   // expect(res.statusCode).to.be.true(403)
      })

    }).as('dummyUrl')
    cy.get('button[class="btn btn-primary"]').click();
    cy.wait('@dummyUrl')   
    
})


})