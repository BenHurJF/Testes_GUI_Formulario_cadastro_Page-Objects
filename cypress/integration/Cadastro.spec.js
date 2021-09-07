/// <reference types="cypress" />


describe('Acessar página de cadastro', () => {
    it('Acessar home Cadastro', () => { 
    cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
});
   
    it('Asserções campos vazios formulário Cadastro', () => {
        // Validando se os campos do Formulário inicialmente estão vazios e visíveis.
        cy.contains('#name', /^/).should('be.visible');
        cy.contains('#email', /^/).should('be.visible');
        cy.contains('#password', /^/).should('be.visible');
    });

    it('Asserção Mensagem de campos obrigatórios', () => {
        // Validando se após eu clicar na opção Cadastrar sem preencher os campos exibe mensagem de erro.
        cy.wait(500);
        cy.get('#register').click();
        cy.contains('.error', /^O campo Nome é obrigatório./).should('be.visible');
        cy.contains('.error', /^O campo E-mail é obrigatório./).should('be.visible');
        cy.contains('.error', /^O campo Senha é obrigatório./).should('be.visible');
    });
});

