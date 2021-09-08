/// <reference types="cypress" />
import CriterioDeAceitacao from '../support/pagesObjects/PaginaCadastroAsserts';
import CadastrarUsuario from '../support/pagesObjects/Cadastrar';

describe('Acessar página de cadastro', () => {
    it('Acessar home Cadastro', () => {    ////// OK
        CriterioDeAceitacao.acessarCadastro();
});
});

describe('Critérios de aceitação', () => {   
    it('Asserções campos vazios formulário Cadastro', () => { ////// OK
        // Validando se os campos do Formulário inicialmente estão vazios e visíveis.
        CriterioDeAceitacao.validarCriteriosCamposVazios();
    });

    it('Asserção Mensagem de campos obrigatórios', () => { ////// OK
        // Validando se após eu clicar na opção Cadastrar sem preencher os campos exibe mensagem de erro.
        CriterioDeAceitacao.validarMensagemCamposObrigatorios();
    });

    it('Validar Nome completo', () => { ////// OK
        // Preenchendo campo Nome com apenas o primeiro nome
        // sistema deve exibir a mensagem "Por favor, insira um nome completo."
        CriterioDeAceitacao.validarNomeCompleto();
    });

    it('Validar E-mail', () => { ////// OK
        // Preenchendo campo E-mail com um e-mail inválido
        // sistema deve exibir a mensagem "Por favor, insira um e-mail válido."
        CriterioDeAceitacao.acessarCadastro();
        CriterioDeAceitacao.validarEmail();
    }); 

    it('Validar senha', () => { ////// OK
        // Preenchendo campo senha com menos de 8 caracteres
        // sistema deve exibir a mensagem "A senha deve conter ao menos 8 caracteres."
        CriterioDeAceitacao.acessarCadastro();
        CriterioDeAceitacao.validarSenha();
    });

describe('Cadastrar usuário', () => { ////// OK
     it('Preencher campos com dados válidos e Cadastrar', () => {
         // Cadastrar usuário
        CadastrarUsuario.cadastrarUsuario();
     });

     it('Validar usuário cadastrado', () => { ////// OK
         // Validar usuário
         CadastrarUsuario.validarCadastro();
     });
});

describe('Excluir usuário', () => {
    it('Removendo usuário clicando em excluir', () => {
        // Excluir usuário
        CadastrarUsuario.excluirUsuario();
    });
});
        
});