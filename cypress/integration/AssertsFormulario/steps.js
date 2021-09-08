/// <reference types="cypress" />
import CriterioDeAceitacao from '../../support/pagesObjects/PaginaCadastroAsserts/index.js';
//import CadastrarUsuario from '../support/pages/Cadastrar/';

Given(/^que eu acesse o sistema$/, () => {
	CriterioDeAceitacao.acessarCadastro();
});

Then(/^eu visualizo os campos do formulário com valor inicial vazio$/, () => {
	CriterioDeAceitacao.validarCriteriosCamposVazios();
});

When(/^Eu acionar a opção cadastrar sem preencher os campos obrigatórios exibe mensagem de erro$/, () => {
	CriterioDeAceitacao.validarMensagemCamposObrigatorios();
});
