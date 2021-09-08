# language: pt

Funcionalidade: AssertsFormulario

   EU COMO usuário do sistema
   DESEJO realizar o cadastro de novos usuários
   PARA QUE seja possível armazenar e gerenciar seus dados

Cenário: Quando eu acessar o sistema devo visualizar os campos com valor inicial vazio.
  Dado que eu acesse o sistema
  Entao eu visualizo os campos do formulário com valor inicial vazio

Cenário: Quando eu acionar a opção Cadastrar sem preencher os campos, o sistema exibe uma mensagem de erro para cada um dos campos.
  Quando Eu acionar a opção cadastrar sem preencher os campos obrigatórios exibe mensagem de erro

Cenário: Quando eu acionar a opção Cadastrar tendo preenchido o campo Nome com apenas o primeiro nome, o sistema exibe a mensagem "Por favor, insira um nome completo." para o campo Nome.
  Given que eu acione