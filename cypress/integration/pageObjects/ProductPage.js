
class ProductPage{
getProductTitles(){

    return cy.get('h4.card-title')
}
getAddButons(){
    return cy.get('button.btn.btn-info')
}
getCheckoutButton(){
    return cy.get('#navbarResponsive > ul > li > a')
}

}

export default ProductPage