# language: pt

Funcionalidade: AssertsFormulario

   EU COMO usuário do sistema 
   DESEJO validar as regras de negócio
   PARA QUE o sistema esteja de acordo com especificação

Contexto: Dado que eu acesso a Tela de Cadastro

Cenário: Quando eu acessar o sistema os campos devem estar com valor vazio
  Dado que eu acesse o sistema
  E tenha os seguintes campos Nome, E-mail e Senha
  Então os campos devem estar com valor vazio

Cenário: Acionar a opção cadastrar sem preencher os campos, deve exibir hint de erro
  Dado que eu não preencha nenhum campo
  E eu acione o botão cadastrar
  Então sistema exibe hint de erro em cada campo

Cenário: Dado que eu preencha o campo nome com apenas o 1° nome, sistema exibe hint de erro
  Dado que eu preencha os campos.
  E que eu preencha o campo nome com apenas o 1° nome
  Quando eu acionar a opção cadastrar
  Então sistema exibe hint de erro no campo nome

Cenário: Dado que eu preencha o campo E-mail com um inválido, sistema exibe hint de erro
   Dado que eu preencha o campo e-mail com um inválido
   E que eu preencha os demais campos
   Quando eu acionar a opção cadastrar
   Então sistema exibe hint de erro no campo e-mail

Cenário: Dado que eu preencha o campo senha com uma inválida, sistema exibe hint de erro
   Dado que eu preencha os campos
   E que eu preencha o campo senha com menos de 8 caracteres
   Quando eu acionar a opção cadastrar
   Então sistema exibe hint de erro no campo Senha