/// <reference types="cypress" />
import CriterioDeAceitacao from '../support/pages/Cadastro/index';


describe('Acessar página de cadastro', () => {
    it('Acessar home Cadastro', () => { 
        CriterioDeAceitacao.acessarCadastro();
});
});

describe('Critérios de aceitação', () => {   
    it('Asserções campos vazios formulário Cadastro', () => {
        // Validando se os campos do Formulário inicialmente estão vazios e visíveis.
        CriterioDeAceitacao.validarCriteriosCamposVazios();
    });

    it('Asserção Mensagem de campos obrigatórios', () => {
        // Validando se após eu clicar na opção Cadastrar sem preencher os campos exibe mensagem de erro.
        CriterioDeAceitacao.validarMensagemCamposObrigatorios();
    });

    it('Validar Nome completo', () => {
        // Preenchendo campo Nome com apenas o primeiro nome
        // sistema deve exibir a mensagem "Por favor, insira um nome completo."
        CriterioDeAceitacao.validarNomeCompleto();
    });

    it('Validar E-mail', () => {
        // Preenchendo campo E-mail com um e-mail inválido
        // sistema deve exibir a mensagem "Por favor, insira um e-mail válido."
        CriterioDeAceitacao.acessarCadastro();
        CriterioDeAceitacao.validarEmail();
    }); 

    it('Validar senha', () => {
        // Preenchendo campo senha com menos de 8 caracteres
        // sistema deve exibir a mensagem "A senha deve conter ao menos 8 caracteres."
        CriterioDeAceitacao.acessarCadastro();
        CriterioDeAceitacao.validarSenha();
    });
        
});