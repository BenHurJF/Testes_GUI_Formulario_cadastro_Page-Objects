/// <reference types="cypress" />
import CriterioDeAceitacao from '../support/Cadastro/index.js';


describe('Acessar página de cadastro', () => {
    it('Acessar home Cadastro', () => { 
    cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
});
   
    it('Asserções campos vazios formulário Cadastro', () => {
        // Validando se os campos do Formulário inicialmente estão vazios e visíveis.
        CriterioDeAceitacao.validarCriteriosCamposVazios();
    });

    it('Asserção Mensagem de campos obrigatórios', () => {
        // Validando se após eu clicar na opção Cadastrar sem preencher os campos exibe mensagem de erro.
        CriterioDeAceitacao.validarMensagemCamposObrigatorios();
    });
});

