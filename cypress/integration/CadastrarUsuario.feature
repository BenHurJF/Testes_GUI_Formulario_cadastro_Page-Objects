# language: pt

Funcionalidade: Cadastro de Usuário

   EU COMO usuário do sistema
   DESEJO realizar o cadastro de novos usuários
   PARA QUE seja possível armazenar e gerenciar seus dados

Cenário: Quando eu acionar a opção Cadastrar tendo preenchido os campos Nome, E-mail e Senha com dados válidos, o sistema deve exibir abaixo do formulário uma tabela com os dados do usuário informados anteriormente e a opção Excluir para cada um dos mesmos.
  Quando Eu acionar a opção cadastrar e os campos estiverem preenchidos com dados válidos, sistema exibe abaixo do formulário uma tabela com os dados do usuário informados anteriormente e a opção Excluir.

Cenário: Quando eu cadastrar um usuário quero validar se os dados fornecidos e os dados salvos no cadastro conferem.
  Dado que o usuário é cadastrado com sucesso, quero validar os dados exibidos na tabela abaixo do formulário.

Cenário: Quando eu acionar a opção Excluir de um elemento da tabela de usuários, o sistema deve excluir a linha em questão, exibindo a tabela sem interferir nos ids dos demais itens e em sua ordenação.
  Quando Eu acionar a opção Excluir de um elemento da tabela de usuários, sistema exclui a linha em questão do cadastro.


  Exemplos:
  | Cadastro | Nome             | E-mail            | Senha     |
  |    -     | Nome SegundoNome | teste@hotmail.com | teste1234 |