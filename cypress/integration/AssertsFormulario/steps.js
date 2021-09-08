/// <reference types="cypress" />
import CriterioDeAceitacao from '../../support/pagesObjects/PaginaCadastroAsserts/index.js';

Given(/^que eu acesse o sistema$/, () => {
	CriterioDeAceitacao.acessarCadastro();
});

Then(/^eu visualizo os campos do formulário com valor inicial vazio$/, () => {
	CriterioDeAceitacao.validarCriteriosCamposVazios();
});

//

When(/^Eu acionar a opção cadastrar sem preencher os campos obrigatórios exibe mensagem de erro$/, () => {
	CriterioDeAceitacao.validarMensagemCamposObrigatorios();
});


When(/^Eu acionar a opção cadastrar com apenas o primeiro nome, o sistema exibe a mensagem mensagem - Por favor, insira um nome completo.$/, () => {
	CriterioDeAceitacao.validarNomeCompleto();
});


When(/^Eu acionar a opção cadastrar tendo preenchido o campo E-mail com um email inválido, sistema exibe mensagem - Por favor, insira um e-mail válido.$/, () => {
	CriterioDeAceitacao.acessarCadastro();
    CriterioDeAceitacao.validarEmail();
});


When(/^Eu acionar a opção cadastrar tendo preenchido o campo senha com menos de 8 caracteres, sistema exibe mensagem - A senha deve conter ao menos 8 caracteres.$/, () => {
	CriterioDeAceitacao.acessarCadastro();
    CriterioDeAceitacao.validarSenha();
});