// Ações de interação com a página

// Ação -> Critérios de Aceitação
// Campos -> Nome, E-mail e Senha tem que estar vazio.
// Quando eu acionar a opção Cadastrar sem preencher algum dos campos obrigatórios, sistema exibe mensagem de erro para cada um dos campos.

const el = require('./elements').ELEMENTS;

class Assert {

    acessar() {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
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
        cy.wait(1000);
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
    }

    /// PRIMEIRO NOME

    OneNome() {
        cy.get(el.name).type('BenHur');
    }

    DemaisCampos() {
        cy.get(el.email).type('beiujeffer@hotmail.com');
        cy.get(el.password).type('TST12345678');
    }

    hintError() {
        cy.wait(1000);
        // Validar mensagem de erro -> "Por favor, insira um nome completo."
        cy.contains(el.error, /^Por favor, insira um nome completo./).should('be.visible');
        cy.wait(1000);
    }

    /// E-MAIL INVALIDO

    email() {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
        cy.get(el.email).type('beiujeffer@122');
    }

    demaisCampos2() {
        cy.get(el.name).type('Ben-Hur Jeffer');
        cy.get(el.password).type('TST12345678');
    }

    hintError2() {
        cy.wait(1000);
        // Validar mensagem de erro -> "Por favor, insira um e-mail válido."
        cy.contains(el.error, /^Por favor, insira um e-mail válido./).should('be.visible');
        cy.wait(1000);
    }

    /// SENHA INVALIDA

    limpar() {
        cy.get(el.name).clear();
        cy.get(el.email).clear();
        cy.get(el.password).clear();
    }

    senha() {
        cy.get(el.password).type('1234');
        cy.wait(1000);
    }

    demaisCamposSenha() {
        cy.get(el.name).type('Ben-Hur Jeffer');
        cy.get(el.email).clear();

        cy.get(el.email).type('beiujeffer@hotmail.com');
    }

    hintError3() {
        cy.wait(1000);
        // Validar mensagem de erro -> "A senha deve conter ao menos 8 caracteres."
        cy.contains(el.error, /^A senha deve conter ao menos 8 caracteres./).should('be.visible');
    }
}

export default new Assert();