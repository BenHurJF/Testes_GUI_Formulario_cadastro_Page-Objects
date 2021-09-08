# language: pt

Funcionalidade: AssertsFormulario

   EU COMO usuário do sistema
   DESEJO realizar o cadastro de novos usuários
   PARA QUE seja possível armazenar e gerenciar seus dados

Contexto: Ao acessar a url em que o sistema está hospedado, o usuário deverá visualizar uma tela que será utilizada para o cadastro de novos usuários. A tela deverá conter uma descrição sobre sua finalidade, os campos para preenchimento de Nome, E-mail e Senha do usuário a ser cadastrado e a opção para cadastrar que, quando acionada, irá exibir os dados do novo usuário em uma tabela abaixo dos campos anteriormente citados, Validação dos critérios de aceitação.

Cenário: Quando eu acessar o sistema devo visualizar os campos com valor inicial vazio.
  Dado que eu acesse o sistema
  Entao eu visualizo os campos do formulário com valor inicial vazio

Cenário: Quando eu acionar a opção Cadastrar sem preencher os campos, o sistema exibe uma mensagem de erro para cada um dos campos.
  Quando Eu acionar a opção cadastrar sem preencher os campos obrigatórios exibe mensagem de erro

Cenário: Quando eu acionar a opção Cadastrar tendo preenchido o campo Nome com apenas o primeiro nome, o sistema exibe a mensagem "Por favor, insira um nome completo." para o campo Nome.
  Quando Eu acionar a opção cadastrar com apenas o primeiro nome, o sistema exibe a mensagem mensagem - Por favor, insira um nome completo.

Cenário: Quando eu acionar a opção Cadastrar tendo preenchido o campo E-mail com um e-mail inválido, o sistema deve exibir a mensagem "Por favor, insira um e-mail válido." Para o campo E-mail.
   Quando Eu acionar a opção cadastrar tendo preenchido o campo E-mail com um email inválido, sistema exibe mensagem - Por favor, insira um e-mail válido.

Cenário: Quando eu acionar a opção Cadastrar tendo preenchido o campo Senha com um menos de 8 caracteres, o sistema deve exibir a mensagem "A senha deve conter ao menos 8 caracteres." Para o campo Senha.
   Quando Eu acionar a opção cadastrar tendo preenchido o campo senha com menos de 8 caracteres, sistema exibe mensagem - A senha deve conter ao menos 8 caracteres.

