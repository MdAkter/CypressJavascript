/// <reference types="Cypress"/>

describe('First test suite',function(){

it('First test case',function(){

 
    cy.LoginAPI().then(function(){

        cy.visit('https://rahulshettyacademy.com/client',
        {

        onBeforeLoad : function(window){
            window.localStorage.setItem('token', Cypress.env('token'))
        }
        })
    })

    cy.get('.card-body button:last-of-type').eq(1).click()
    cy.get("[routerlink*='cart']").click()
    cy.contains('Checkout').click()
    cy.get("[placeholder*='Select Country']").type('india')
    cy.contains('Place Order').click()
})
})