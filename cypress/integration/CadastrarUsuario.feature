# language: pt

Funcionalidade: Cadastro de Usuário

   EU COMO usuário do sistema
   DESEJO realizar o cadastro de novos usuários
   PARA QUE seja possível armazenar e gerenciar seus dados

Cenário: Quando eu acionar a opção Cadastrar tendo preenchido os campos Nome, E-mail e Senha com dados válidos, o sistema deve exibir abaixo do formulário uma tabela com os dados do usuário informados anteriormente e a opção Excluir para cada um dos mesmos.
  When Eu acionar a opção cadastrar e os campos estiverem preenchidos com dados válidos, sistema exibe abaixo do formulário uma tabela com os dados do usuário informados anteriormente e a opção Excluir.

  