
/// <reference types = "Cypress"/> 

describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get(' #product tbody tr td:nth-child(2)').each(($el, index, list)=>{
         
         if ($el.text().includes('Python')){
//below next() method is used here to immediate DOM element with get()
            cy.get(' #product tbody tr td:nth-child(2)').eq(index).next().then(function(price){
                const pythinPrice=price.text()
                cy.log(Number(pythinPrice))
                expect(pythinPrice).to.equal('25')
            })
         }

        })
    })
})