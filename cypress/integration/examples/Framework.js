/// <reference types="Cypress"/>

import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage' 
describe('First test suite',function(){


    before(()=>{
        cy.fixture('example').then(function(data){

            this.data=data;
        })
    })

it('First test case',function(){

 const homePage = new HomePage()
 const productPage = new ProductPage()
cy.visit(Cypress.env('url')+"/angularpractice/");
homePage.getNameText().type(this.data.name)
homePage.getGenderComboBox().select(this.data.gender)
homePage.getTwowayBindingText().should('have.value', this.data.name)
homePage.getNameText().should('have.attr','minlength', 2)
homePage.getEntreprenuerDisableRadioButton().should('be.disabled');
Cypress.config('defaultCommandTimeout', 10000)
homePage.getShopTab().click();

//cy.pause(); // exit out this, just simply click resume button on test runner

cy.get(':nth-child(2) > .nav-link').click();
    
this.data.productName.forEach((element) =>{
    cy.selectProduct(element);

})
productPage.getCheckoutButton().click()
var sum=0
cy.get('tr td:nth-child(4) strong').each(($el, index, list)=>{

    const actualAmount = $el.text();
var res= actualAmount.split(" ")[1].trim();
sum = Number(sum) + Number(res)

}).then(function(){

    cy.log(sum)
})

cy.get('h3 strong').then(function(element){

    const finalAmaount= element.text()
    var totalAmount = finalAmaount.split(" ")[1].trim();
    cy.log(totalAmount)
    expect(Number(totalAmount)).to.equal(sum);
})
cy.contains('Checkout').click()
cy.get('#country').type('india')
cy.get('.suggestions > ul > li > a',{ timeout: 60000 }).click()
cy.get('#checkbox2').click({force: true})
cy.get('input[type=submit]').click();
//cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(element){

    const actualText=element.text()
    expect(actualText.includes('Success')).to.be.true

})



})






})