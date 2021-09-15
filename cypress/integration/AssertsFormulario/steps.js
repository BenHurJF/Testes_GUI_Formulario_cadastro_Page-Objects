/// <reference types="cypress" />
import Assert from '../../support/pagesObjects/PaginaCadastroAsserts/index.js';


Given(/^que eu acesse o sistema$/, () => {
	Assert.acessar();
});

And(/^tenha os seguintes campos Nome, E-mail e Senha$/, () => {
	Assert.campos();
});

Then(/^os campos devem estar com valor vazio$/, () => {
	Assert.Vazios();
});


/// SEM PREENCHER OS CAMPOS OBRIGATORIOS

Given(/^que eu não preencha nenhum campo$/, () => {
	Assert.campos();
});

And(/^eu acione o botão cadastrar$/, () => {
	Assert.btnCadastrar();
});

Then(/^sistema exibe mensagem de erro em cada campo$/, () => {
	Assert.Obrigatorios();
});


/// PREENCHER APENAS O PRIMEIRO NOME

Given(/^que eu preencha o campo nome com apenas o 1° nome$/, () => {
	Assert.OneNome();
});

And(/^que eu preencha os demais campos$/, () => {
	Assert.DemaisCampos();
});

When(/^eu acionar a opção cadastrar$/, () => {
	Assert.btnCadastrar();
});

Then(/^sistema exibe hint de erro no campo nome$/, () => {
	Assert.hintError();
});


/// E-MAIL INVALIDO

Given(/^que eu preencha o campo e-mail com um inválido$/, () => {
	Assert.email();
});

And(/^que eu preencha os demais campos$/, () => {
	Assert.demaisCampos2();
});

When(/^eu acionar a opção cadastrar$/, () => {
	Assert.btnCadastrar();
});

Then(/^sistema exibe hint de erro no campo e-mail$/, () => {
	 Assert.hintError2();
});


/// SENHA INVALIDA

Given(/^que eu preencha o campo senha com menos de 8 caracteres$/, () => {
	Assert.senha();
});

And(/^que eu preencha os demais campos$/, () => {
	Assert.demaisCampos3();
});

When(/^eu acionar a opção cadastrar$/, () => {
	Assert.btnCadastrar();
});

Then(/^sistema exibe hint de erro no campo Senha$/, () => {
	Assert.hintError3();
});
