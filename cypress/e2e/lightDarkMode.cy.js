/// <reference types="cypress" />

describe('Light-Dark Mode', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/')
    })

    it('test toogle features', () => {
        cy.get('.toggle-text').should('have.text', 'Light mode !')
        cy.get('.slider').click()
        cy.get('.toggle-text').should('have.text', 'Dark Mode !')
        cy.get('.slider').click()
        cy.get('.toggle-text').should('have.text', 'Light mode ! ')
    })
    it('test about section', () => {
        cy.get('[href="#about"]').click()
        cy.get('.about-container > :nth-child(1)').should('have.class', 'image-container')
        cy.get('#image1').should('have.css', 'font-size')
        cy.get('.about-container > :nth-child(1)').should('have.css', 'padding', '10px 20px').and('have.css', 'border-radius', '10px').and('have.css', 'margin-right', '25px')
        cy.get('.about-container > :nth-child(2)').should('have.class', 'image-container')
        cy.get('#image1').should('have.css', 'font-size')
        cy.get('.slider').click()
        cy.get('.about-container > :nth-child(2)').should('have.css', 'padding', '10px 20px').and('have.css', 'border-radius', '10px').and('have.css', 'margin-right', '25px')
        cy.get('.about-container > :nth-child(3)').should('have.class', 'image-container')
        cy.get('#image1').should('have.css', 'font-size')
        cy.get('.about-container > :nth-child(3)').should('have.css', 'padding', '10px 20px').and('have.css', 'border-radius', '10px').and('have.css', 'margin-right', '25px')
    })
    it('test projects features', () => {
        cy.get('a[href="#projects"]').click()
        cy.get('#projects > h1').should('have.text', 'Buttons')
        cy.get('.slider').click()
        cy.get('#text-box').should('have.css', 'padding', '30px')
        cy.get('.buttons').should('have.css', 'margin-top', '15px').and('have.css', 'margin-bottom', '50px')
    })
    it('test contact features', () => {
        cy.get('[href="#contact"]').click()
        cy.get('.social-icons').should('have.css', 'font-size', '16px')
        cy.get('.slider').click()
        cy.get('.toggle-text').should('have.text', 'Dark Mode !')
        cy.get('.fa-brands.fa-ethereum').should('have.css', 'font-size', '100px').and('have.css', 'margin-right', '50px').and('have.css', 'cursor', 'pointer')
    })
})


