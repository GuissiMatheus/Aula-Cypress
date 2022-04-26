/// <reference types="Cypress" />

describe("Testando Formulário!", () => {
    
    it("Preenchendo formulário", () => {
        
        // Acessando a Url Base
        cy.visit("/");

        // Encontrando um <form>
        cy.get("form");

        // Encontrando um <input name="nome">
        //cy.get('input[name="nome"]').type('Matheus');
        cy.get('input[name="nome"]').type('Matheus').should('have.value', 'Matheus');

        cy.get('input[name="email"]').type('teste@teste.com').should('have.value', 'teste@teste.com');

        cy.get('textarea[name="mensagem"]').type('Isso aqui é uma mensagem!').should('have.value', 'Isso aqui é uma mensagem!');
    
        //cy.get("form").submit();
    });

    it("Limpando formulário", () => {
        cy.get('input').clear().should('have.value', '');
        cy.get('textarea').clear().should('have.value', '');;
    });
});