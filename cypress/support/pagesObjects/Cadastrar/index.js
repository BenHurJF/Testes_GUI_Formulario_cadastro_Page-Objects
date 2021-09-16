// Requerindo os elementos do arquivo elements.js
const element = require('./elements').ELEMENTS;

class Cadastro { 
      acessar() {
          cy.visit(Cypress.env('url'));
      }

      preencher() {
        cy.get(element.name).type(Cypress.env('name'));
        cy.get(element.email).type(Cypress.env('email'));
        cy.get(element.password).type(Cypress.env('passwordValido'));
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
          let email = Cypress.env('email');
          let nome = Cypress.env('name');
          cy.contains(element.id, /^1/).should('be.visible');
          cy.contains(element.userName, nome).should('be.visible');  //  se está visível -> ).should('be.visible');
          cy.contains(element.userEmail, email ).should('be.visible'); // se está visível -> ).should('be.visible');
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