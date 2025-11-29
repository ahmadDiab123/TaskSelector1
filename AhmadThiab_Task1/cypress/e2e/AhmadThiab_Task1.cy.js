// task1.cy.js
/// <reference types="cypress" />

describe('Ahmad Thiab Task 1 ', () => {
    

    it('Selector Task 1', () => {
        

        cy.visit('https://demo.productionready.io/#/register')

    
        cy.wait(1000)

        cy.get('h1.text-xs-center').should('be.visible').and('contain', 'Sign up') //.click()

     
        cy.get('input[placeholder="Username"]') // .type('')

        cy.get('input[placeholder="Email"]') // .type('')

        //cy.get('fieldset:nth-child(2) input') //.type('')

        cy.get('input[type="password"]') // .type('')
        
   
        cy.get('button[type="submit"].btn-primary').should('be.visible').and('contain', 'Sign up') //.click()

        cy.get('a.navbar-brand').should('be.visible').and('contain', 'conduit')

        cy.get('a.nav-link').contains('Home').should('be.visible')
        
     
    })
})