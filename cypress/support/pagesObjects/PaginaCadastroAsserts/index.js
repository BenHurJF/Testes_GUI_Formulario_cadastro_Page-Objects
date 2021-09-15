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
       cy.get(el.name);
       cy.get(el.email);
       cy.get(el.password);
    }

    Vazios() {
        cy.contains(el.name, /^/).should('be.visible');
        cy.contains(el.email, /^/).should('be.visible');
        cy.contains(el.password, /^/).should('be.visible');
    }
    
    /// OBRIGATORIOS

    btnCadastrar() {
        cy.get(el.cadastrar).click();
        cy.wait(200);
    }

    Obrigatorios() {
        cy.contains(el.error, /^O campo Nome é obrigatório./).should('be.visible');
        cy.contains(el.error, /^O campo E-mail é obrigatório./).should('be.visible');
        cy.contains(el.error, /^O campo Senha é obrigatório./).should('be.visible');
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
        // Validar mensagem de erro -> "Por favor, insira um nome completo."
        cy.contains(el.error, /^Por favor, insira um nome completo./).should('be.visible');
        cy.wait(200);
    }
    
    /// E-MAIL INVALIDO

    email() {
        cy.get(el.email).type('beiujeffer@122');
    }

    demaisCampos2() {
        cy.get(el.name).type('Ben-Hur Jeffer');
        cy.get(el.password).type('TST12345678');
    }
    
    hintError2() {
        // Validar mensagem de erro -> "Por favor, insira um e-mail válido."
        cy.contains(el.error, /^Por favor, insira um e-mail válido./).should('be.visible');
    }

    /// SENHA INVALIDA

    senha() {
        cy.get(el.password).type('123');
    }

    demaisCampos3() {
        cy.get(el.name).type('Ben-Hur Jeffer');
        cy.get(el.email).type('beiujeffer@hotmail.com');
    }

    hintError3() {
        // Validar mensagem de erro -> "A senha deve conter ao menos 8 caracteres."
        cy.contains(el.error, /^A senha deve conter ao menos 8 caracteres./).should('be.visible');
    }
}

export default new Assert();