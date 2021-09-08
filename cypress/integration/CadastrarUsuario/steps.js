/// <reference types="cypress" />
import CadastrarUsuario from '../../support/pagesObjects/Cadastrar/index.js';

// CADASTRAR USUÁRIO

When(/^Eu acionar a opção cadastrar e os campos estiverem preenchidos com dados válidos, sistema exibe abaixo do formulário uma tabela com os dados do usuário informados anteriormente e a opção Excluir.$/, () => {
	CadastrarUsuario.cadastrarUsuario();
});


Given(/^que o usuário é cadastrado com sucesso, quero validar os dados exibidos na tabela abaixo do formulário.$/, () => {
	CadastrarUsuario.validarCadastro();
});


When(/^Eu acionar a opção Excluir de um elemento da tabela de usuários, sistema exclui a linha em questão do cadastro.$/, () => {
	CadastrarUsuario.excluirUsuario();
});
