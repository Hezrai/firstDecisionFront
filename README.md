Desafio Técnico: Cadastro de Usuários

Este projeto é parte de um desafio técnico que visa implementar funcionalidades de cadastro de usuários em uma aplicação web desenvolvida utilizando Java (Spring) no back-end e Angular no front-end.
Funcionalidades Implementadas

    Cadastro de Usuários: Desenvolvi uma página de registro de usuário no lado do Angular, permitindo que os usuários preencham campos como nome, e-mail, senha e confirmação de senha. Implementei validações para garantir que os dados inseridos atendam aos critérios especificados, como comprimento mínimo e máximo para o nome e a senha, e que o e-mail seja válido. Além disso, desabilitei o botão de envio enquanto houver erros de validação.

    API Java / Spring: Desenvolvi uma API RESTful no lado do Java / Spring para processar o registro de usuários. Esta API valida os dados recebidos da solicitação, incluindo a confirmação de senha, e armazena os usuários registrados em um banco de dados PostgreSQL. Implementei respostas apropriadas para o front-end, indicando sucesso ou erro no registro.

    Testes Unitários: Escrevi testes unitários tanto para a API Java quanto para a página Angular. Esses testes verificam se os dados são validados corretamente, se são armazenados no banco de dados e se as validações e o comportamento do botão de envio na página Angular estão funcionando conforme o esperado.

    Integração Angular / Java: Integrei a página de registro Angular com a API Java, permitindo que os dados do formulário sejam enviados para o back-end. Também implementei um tratamento de erro adequado na página Angular para lidar com falhas na comunicação com o back-end, garantindo uma experiência mais robusta para o usuário final.

Pré-requisitos

    Node.js
    Angular CLI
    Java Development Kit (JDK)
    PostgreSQL

Como Executar o Projeto

    Clone este repositório para sua máquina local.
    Instale as dependências do projeto Angular executando o comando npm install.
    Inicie o servidor Angular com o comando ng serve.
    Execute a API Java / Spring em seu ambiente de desenvolvimento.
    Certifique-se de configurar corretamente o banco de dados PostgreSQL.

Autor

Este projeto foi desenvolvido por [Seu Nome].