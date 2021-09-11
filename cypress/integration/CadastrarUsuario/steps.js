/// <reference types="cypress" />
import CadastrarUsuario from '../../support/pagesObjects/Cadastrar/index.js';

// CADASTRAR USUÁRIO - VALIDAR USUÁRIO - EXCLUIR USUÁRIO

When(/^Eu acionar a opção cadastrar, o sistema exibe abaixo do form as info do usuário.$/, () => {
	CadastrarUsuario.cadastrarUsuario();
});


Given(/^que o usuário é cadastrado, quero validar os dados exibidos na tela.$/, () => {
	CadastrarUsuario.validarCadastro();
});


Given(/^que eu acione a opção excluir$/, () => {
	CadastrarUsuario.selectButtonExcluir();
});

Then(/^o sistema exclui o usuário da tabela.$/, () => {
	CadastrarUsuario.excluirUsuario();
});
