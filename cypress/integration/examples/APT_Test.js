/// <reference types="Cypress"/>

describe('First test suite',function(){



    it('First test case',function(){
    
    
      cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{

      "name":"Learn Appium Automation with Java",
      "isbn":"bcdasd",
      "aisle":"2271",
      "author":"John foe"
      }).then(function(response){
        console.log(response.body)
        cy.log(response.body)
      })
        
    })
    
    
    })