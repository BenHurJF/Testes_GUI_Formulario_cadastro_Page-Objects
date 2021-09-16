// Ações de interação com a página

// Ação -> Critérios de Aceitação
// Campos -> Nome, E-mail e Senha tem que estar vazio.
// Quando eu acionar a opção Cadastrar sem preencher algum dos campos obrigatórios, sistema exibe mensagem de erro para cada um dos campos.

const el = require('./elements').ELEMENTS;

class Assert {

    acessar() {
        cy.visit(Cypress.env('url'));
    }

    campos() {
        cy.get(el.name).should('be.visible');
        cy.get(el.email).should('be.visible');
        cy.get(el.password).should('be.visible');
    }

    Vazios() {
        cy.contains(el.name, /^/).should('be.visible');
        cy.contains(el.email, /^/).should('be.visible');
        cy.contains(el.password, /^/).should('be.visible');
    }

    /// OBRIGATORIOS

    btnCadastrar() {
        cy.get(el.cadastrar).click();
    }

    Obrigatorios() {
        cy.contains(el.error, /^O campo Nome é obrigatório./).should('be.visible');
        cy.contains(el.error, /^O campo E-mail é obrigatório./).should('be.visible');
        cy.contains(el.error, /^O campo Senha é obrigatório./).should('be.visible');
        cy.visit(Cypress.env('url'));
    }

    /// PRIMEIRO NOME

    OneNome() {
        cy.get(el.name).type(Cypress.env('OneName'));
    }

    DemaisCampos() {
        cy.get(el.email).type(Cypress.env('email'));
        cy.get(el.password).type(Cypress.env('passwordValido'));
    }

    hintError() {
        // Validar mensagem de erro -> "Por favor, insira um nome completo."
        cy.contains(el.error, /^Por favor, insira um nome completo./).should('be.visible');
    }

    /// E-MAIL INVALIDO

    email() {
        cy.visit(Cypress.env('url'));
        cy.get(el.email).type(Cypress.env('emailInvalido'));
    }

    camposEmail() {
        cy.get(el.name).type(Cypress.env('name'));
        cy.get(el.password).type(Cypress.env('password'));
    }

    hintError2() {
        // Validar mensagem de erro -> "Por favor, insira um e-mail válido."
        cy.contains(el.error, /^Por favor, insira um e-mail válido./).should('be.visible');
        cy.visit(Cypress.env('url'));
    }

    /// SENHA INVALIDA

    senha() {
        cy.get(el.password).type(Cypress.env('password'));
        //cy.get(el.password).type('1234');
        cy.wait(1000);
    }

    camposSenha() {
        cy.get(el.name).type(Cypress.env('name'));
        cy.get(el.email).type(Cypress.env('email'));
    }

    hintError3() {
        cy.wait(1000);
        // Validar mensagem de erro -> "A senha deve conter ao menos 8 caracteres."
        cy.contains(el.error, /^A senha deve conter ao menos 8 caracteres./).should('be.visible');
    }
}

export default new Assert();