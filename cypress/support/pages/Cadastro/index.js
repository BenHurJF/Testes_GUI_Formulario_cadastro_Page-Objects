// Ações de interação com a página

// Ação -> Critérios de Aceitação
// Campos -> Nome, E-mail e Senha tem que estar vazio.
// Quando eu acionar a opção Cadastrar sem preencher algum dos campos obrigatórios, sistema exibe mensagem de erro para cada um dos campos.

const el = require('./elements').ELEMENTS;

class CriterioDeAceitacao {
    acessarCadastro(){
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
    }

    validarCriteriosCamposVazios(){
        cy.contains(el.name, /^/).should('be.visible');
        cy.contains(el.email, /^/).should('be.visible');
        cy.contains(el.password, /^/).should('be.visible');
    }

    validarMensagemCamposObrigatorios(){
        cy.wait(200);
        cy.get(el.cadastrar).click();
        cy.wait(200);
        cy.contains(el.error, /^O campo Nome é obrigatório./).should('be.visible');
        cy.contains(el.error, /^O campo E-mail é obrigatório./).should('be.visible');
        cy.contains(el.error, /^O campo Senha é obrigatório./).should('be.visible');
    }

    validarNomeCompleto() {
        // Inserção de dados para cadastro com apenas primeiro nome.
        insercaoCamposCadastro();
        // Validar mensagem de erro -> "Por favor, insira um nome completo."
        cy.contains(el.error, /^Por favor, insira um nome completo./).should('be.visible');
    }

    validarEmail() {
        // Inserção de dados para cadastro com E-mail inválido.
        insercaoCamposCadastro();
        cy.get(el.email).clear();
        cy.get(el.name).type(' Jeffer');
        cy.get(el.email).type('beiujeffer@');
        //const email = cy.get(el.email).type('beiujeffer@');
        // Validar mensagem de erro -> "Por favor, insira um e-mail válido."
        cy.contains(el.error, /^Por favor, insira um e-mail válido./).should('be.visible');
     }

    validarSenha() {
        insercaoCamposCadastro();
        cy.get(el.name).type(' Jeffer');
        cy.get(el.password).clear();
        cy.get(el.password).type('123');
        // Validar mensagem de erro -> "A senha deve conter ao menos 8 caracteres."
        cy.contains(el.error, /^A senha deve conter ao menos 8 caracteres./).should('be.visible');
    }
}

export default new CriterioDeAceitacao();

/// Dados
function insercaoCamposCadastro() {
        cy.get(el.name).type('BenHur');
        cy.get(el.email).type('beiujeffer@hotmail.com');
        cy.get(el.password).type('TST12345678');
        cy.get(el.cadastrar).click();
        cy.wait(200);
}