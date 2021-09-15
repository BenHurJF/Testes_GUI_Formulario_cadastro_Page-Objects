# language: pt

Funcionalidade: Cadastro de Usuário

   EU COMO usuário do sistema
   DESEJO realizar o cadastro de novos usuários
   PARA QUE seja possível armazenar e gerenciar seus dados

Contexto: Dado que eu acesse a Tela de Cadastro

Cenário: Dado que eu cadastre um usuário, sistema deve exibe usuário em tabela
  Dado que eu acesse a Tela de cadastro
  E eu preencha os campos
  Quando eu acionar a opção cadastrar
  Então o sistema exibe tabela com usuário cadastrado

  Cenário: Dado que eu acione a opção excluir, sistema deve remover usuário
  Dado que tenha um usuário na tabela
  E que eu clique na opção excluir
  Então usuário é removido da tabela