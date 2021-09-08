const element = require('./elements').ELEMENTS;

class CadastrarUsuario { 
      cadastrarUsuario() {
          cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
          inserirDados();
          cy.get(element.cadastrar).click().should('be.visible');
      }

      validarCadastro() {
          validarUser(alert('Usuário validado!'));
      }    

      excluirUsuario() {
          excluirUser(alert('Usuário excluído com sucesso!'));
      }
}

export default new CadastrarUsuario();


// function inserir dados + validações (elemento visível).
function inserirDados() {
    cy.get(element.name).type('BenHur Jeffer').should('be.visible');
    cy.get(element.email).type('beiujeffer@hotmail.com').should('be.visible');
    cy.get(element.password).type('Teste1234567').should('be.visible');
}

// validar usuário cadastrado
function validarUser() {
    cy.contains(element.titulo, /^Usuários cadastrados/).should('be.visible')
    cy.contains(element.id, /^1/).should('be.visible');
    cy.contains(element.userName, /^BenHur Jeffer/).should('be.visible');
    cy.contains(element.userEmail, /^beiujeffer@hotmail.com/).should('be.visible');
}

// Excluir usuário e validar que tabela de usuários foi retirada
function excluirUser() {
    cy.get(element.excluir).should('be.visible').click();
    cy.contains(element.titulo).should('not.exist');
}