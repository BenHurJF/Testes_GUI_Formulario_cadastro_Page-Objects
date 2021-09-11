// Requerindo as functions do arquivo functions.js
const func = require('./functions').func;
// Requerindo os elementos do arquivo elements.js
const element = require('./elements').ELEMENTS;

class CadastrarUsuario { 
      cadastrarUsuario() {
          cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
          func.inserirDados();
          cy.get(element.cadastrar).click().should('be.visible');
      }

      validarCadastro() {
          func.validarUser();
      }    

      selectButtonExcluir() {
          func.selectExcluir();
      }

      excluirUsuario() {
          func.excluirUser();
      }
}

export default new CadastrarUsuario();