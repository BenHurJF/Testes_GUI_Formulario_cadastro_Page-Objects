// Ações de interação com a página

// Ação -> Critérios de Aceitação
// Campos -> Nome, E-mail e Senha tem que estar vazio.
// Quando eu acionar a opção Cadastrar sem preencher algum dos campos obrigatórios, sistema exibe mensagem de erro para cada um dos campos.

class CriterioDeAceitacao {
    acessarCadastro(){
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
    }

    validarCampos(){
        
    }
}

export default new CriterioDeAceitacao();