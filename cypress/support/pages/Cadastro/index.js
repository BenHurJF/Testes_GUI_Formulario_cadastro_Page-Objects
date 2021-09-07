// Ações de interação com a página

// Ação -> Critérios de Aceitação
// Campos -> Nome, E-mail e Senha tem que estar vazio.
// Quando eu acionar a opção Cadastrar sem preencher algum dos campos obrigatórios, sistema exibe mensagem de erro para cada um dos campos.

class CriterioDeAceitacao {
    acessarCadastro(){
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
    }

    validarCriteriosCamposVazios(){
        cy.contains('#name', /^/).should('be.visible');
        cy.contains('#email', /^/).should('be.visible');
        cy.contains('#password', /^/).should('be.visible');
    }

    validarMensagemCamposObrigatorios(){
        cy.wait(500);
        cy.get('#register').click();
        cy.contains('.error', /^O campo Nome é obrigatório./).should('be.visible');
        cy.contains('.error', /^O campo E-mail é obrigatório./).should('be.visible');
        cy.contains('.error', /^O campo Senha é obrigatório./).should('be.visible');
    }
}

export default new CriterioDeAceitacao();