class HomePage 
{
getNameText(){
    return cy.get('body > app-root > form-comp > div > form > div:nth-child(1) > input');
}
getGenderComboBox(){
    return cy.get('#exampleFormControlSelect1')
}
getEntreprenuerDisableRadioButton(){
    return cy.get('#inlineRadio3')
}
getTwowayBindingText(){
    return cy.get(':nth-child(4) > .ng-untouched')
}
getShopTab(){
    return cy.get(':nth-child(2) > .nav-link')
}
}

export default HomePage;