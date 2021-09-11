const element = require('./elements').ELEMENTS;
export const func = {
// function inserir dados + validações (elemento visível).
inserirDados() {
    cy.get(element.name).type('BenHur Jeffer').should('be.visible');
    cy.get(element.email).type('beiujeffer@hotmail.com').should('be.visible');
    cy.get(element.password).type('Teste1234567').should('be.visible');
},

// validar usuário cadastrado
validarUser() {
    cy.contains(element.titulo, /^Usuários cadastrados/).should('be.visible')
    cy.contains(element.id, /^1/).should('be.visible');
    cy.contains(element.userName, /^BenHur Jeffer/).should('be.visible');
    cy.contains(element.userEmail, /^beiujeffer@hotmail.com/).should('be.visible');
},

selectExcluir() {
    cy.get(element.excluir).should('be.visible');
},

// Excluir usuário e validar que tabela de usuários foi retirada
 excluirUser() {
    cy.get(element.excluir).click();
    cy.contains(element.titulo).should('not.exist');
}
}