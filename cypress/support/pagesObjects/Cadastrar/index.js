// Requerindo os elementos do arquivo elements.js
const element = require('./elements').ELEMENTS;

class Cadastro { 
      acessar() {
          cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
      }

      preencher() {
        cy.get(element.name).type('Ben-Hur Jeffer');
        cy.get(element.email).type('beiujeffer@hotmail.com');
        cy.get(element.password).type('Teste1234567');
      }
      
      click() {
          cy.get(element.cadastrar).click();
          cy.wait(300);
      }

       tabela() {
        expect('Usuários cadastrados').to.be.equal('Usuários cadastrados');
        cy.contains(element.titulo, /^Usuários cadastrados/).should('be.visible');
       }

      usuarioAssert() {
          cy.contains(element.id, /^1/).should('be.visible');
          cy.contains(element.userName, /^Ben-Hur Jeffer/).should('be.visible');  //  se está visível -> ).should('be.visible');
          cy.contains(element.userEmail, /^beiujeffer@hotmail.com/).should('be.visible'); // se está visível -> ).should('be.visible');
      }    

       /// REMOVER USUARIO

       usuario() {
        if(cy.get(element.id).should('be.visible')) {
            console.log('usuário encontrado.')
        }
        return cy.wait(300);
       }

      btnExcluirUser1() {
        cy.get(element.excluir).click();
        cy.wait(200);
      }

      aposRemoverUser1() {
        cy.contains(element.titulo).should('not.exist');
        cy.contains(element.id).should('not.exist');
        cy.contains(element.userName).should('not.exist');
        cy.contains(element.userEmail).should('not.exist');
      }
}

export default new Cadastro();