/// <reference types="cypress" />
import Cadastro from '../../support/pagesObjects/Cadastrar/index.js';

// CADASTRAR USUÁRIO - VALIDAR USUÁRIO - EXCLUIR USUÁRIO

Given(/^que eu acesse a Tela de cadastro$/, () => {
	Cadastro.acessar();
});

And(/^eu preencha os campos$/, () => {
	Cadastro.preencher();
});

When(/^eu acionar a opção cadastrar$/, () => {
	Cadastro.click();
});

Then(/^o sistema exibe tabela com usuário cadastrado$/, () => {
	Cadastro.tabela(),
	Cadastro.usuarioAssert();
});

/// REMOVER USUARIO

Given(/^que tenha um usuário na tabela$/, () => {
	Cadastro.usuario();
});

And(/^que eu clique na opção excluir$/, () => {
	Cadastro.btnExcluirUser1();
});

Then(/^usuário é removido da tabela$/, () => {
	Cadastro.aposRemoverUser1();
});
