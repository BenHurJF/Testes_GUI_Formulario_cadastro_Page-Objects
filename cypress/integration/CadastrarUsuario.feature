# language: pt

Funcionalidade: Cadastro de Usuário

   EU COMO usuário do sistema
   DESEJO realizar o cadastro de novos usuários
   PARA QUE seja possível armazenar e gerenciar seus dados

Contexto: Ao acessar a tela de cadastro deve ser possível cadastrar um usuário.

Cenário: Quando eu acionar a opção Cadastrar, o sistema deve exibir abaixo do formulário uma tabela com os dados do usuário.
  Quando Eu acionar a opção cadastrar, o sistema exibe abaixo do form as info do usuário.

Cenário: Quando eu cadastrar um usuário quero validar se os dados conferem.
  Dado que o usuário é cadastrado, quero validar os dados exibidos na tela.

Cenário: Quando eu acionar a opção Excluir, o sistema exclui o usuário.
  Dado que eu acione a opção excluir
  Então o sistema exclui o usuário da tabela.