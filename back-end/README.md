# Desafio Cashforce - Back-end

## 📜 Descrição

Esta API foi desenvolvida para o desafio técnico da Cashforce. O objetivo desta API é retornar todas as `orders` (notas fiscais) de um determinado cliente. Para isso, foi utilizado o framework [Express](https://expressjs.com/pt-br/), o ORM [Sequelize](https://sequelize.org/) e o banco de dados [MySQL](https://www.mysql.com/).

## Menu de navegação

- [**📌 Requisitos**](#📌-requisitos)
- [**🚀 Tecnologias utilizadas**](#🚀-tecnologias-utilizadas)
- [**👨🏾‍💻 Instalação e execução na sua máquina**](#👨🏾‍💻-instalação-e-execução-na-sua-máquina)
  - [Criar um banco de dados localmente](#criar-um-banco-de-dados-localmente)
  - [Criar um banco de dados na nuvem](#criar-um-banco-de-dados-na-nuvem)
- [**🃏 Rodando os testes unitários**](#🃏-rodando-os-testes-unitários)
- [**🧭 Decisões técnicas de projeto**](#🧭-decisões-técnicas-de-projeto)
- [**👉🏾 Status do projeto**](#👉🏾-status-do-projeto)
- [**🔗 Link para acessar a API na nuvem**](#🔗-link-para-acessar-a-api-na-nuvem)
- [**🔚 Endpoints**](#🔚-endpoints)
  - [GET /](#get-''')
  - [GET /orders](#get-orders)
- [**📚 Documentação da API**](#📚-documentação-da-api)

## 📌 Requisitos

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [Nodemon](https://nodemon.io/)
- [Jest](https://jestjs.io/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Swagger](https://swagger.io/)
- [Railway](https://railway.app/)
- [Thunder Client](https://www.thunderclient.com/)
- [VSCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)

## 👨🏾‍💻 Instalação e execução na sua máquina

1. Acesse a pasta do back-end

```bash
cd back-end
```

2. Instale as dependências

```bash
npm install
```

Existem dois caminhos a serem seguidos, ambos **mandatórios para a aplicação rodar**:

#### Criar um banco de dados localmente

- Caso queira rodar o projeto localmente, é necessário criar um banco de dados MySQL localmente, para que seja possível acessar os dados.

Para criar o banco de dados localmente, basta seguir os seguintes passos:

- Instalar o MySQL na sua máquina;
- Criar um banco de dados com o nome `cashforce_v3` usando arquivo de referência `database.sql`;

#### Criar um banco de dados na nuvem

- Caso queira rodar o projeto utilizando o banco de dados na nuvem, é necessário criar um banco de dados MySQL na nuvem, para que seja possível acessar os dados.

Para criar o banco de dados na nuvem, basta seguir os seguintes passos:

- Criar uma conta no [Railway](https://railway.app/);
- Criar um projeto no Railway;
- Criar um banco de dados MySQL no Railway;
- Criar um banco de dados com o nome `cashforce_v3` usando arquivo de referência `database.sql`;

3. Para ambos os caminhos, é necessário criar um arquivo `.env` na raiz do projeto, seguindo o modelo do arquivo `.env.example`

```bash
MYSQLUSER=
MYSQLPASSWORD=
MYSQLDATABASE=
MYSQLHOST=
MYSQLPORT=
```

Esse arquivo é responsável por armazenar as variáveis de ambiente do projeto, como por exemplo, as credenciais do banco de dados.

**Observação 1**: Caso tenha criado o banco de dados na nuvem, basta copiar as credenciais do banco de dados e colar no arquivo `.env`.

**Observação 2**: Caso tenha criado o banco de dados localmente, basta copiar as credenciais do banco de dados e colar no arquivo `.env`.

**Observação 3**: Como foi dado um arquivo de referência para criar o banco de dados, não é necessário criar as tabelas manualmente, pois basta utilizar o arquivo `database.sql` para criar as tabelas e populá-las. Por isso não foi criado um arquivo de migrations e seeders.

**Observação 4**: O padrão de variáveis de ambiente foi utilizado para que o projeto possa ser rodado tanto localmente quanto na nuvem, sem a necessidade de alterar o código. Além disso, este é o padrão utilizado pela RailWay, onde foi hospedado o banco deste projeto.

4. Após criar o banco de dados, inicie o servidor

```bash
npm run dev
```

5. Acesse a rota que retorna todas as `orders` (notas fiscais) da API através do endereço `http://localhost:3001/orders`

   1. Faça isso ou no navegador ou utilizando o [Insomnia](https://insomnia.rest/download/), [Postman](https://www.postman.com/downloads/) ou qualquer outro software que faça requisições HTTP.

## 🃏 Rodando os testes unitários

Garantir a qualidade do código é muito importante para qualquer projeto, por isso, foi utilizado o Jest, Mocha, Chai e Sinon para rodar os testes unitários.

Para rodar os testes unitários, basta executar o comando:

```bash
npm run test
```

## 🧭 Decisões técnicas de projeto

- Para o desenvolvimento do projeto, foi utilizado o [Node.js](https://nodejs.org/en/), pois é uma plataforma de desenvolvimento de aplicações web, que utiliza JavaScript no back-end.

- Para o desenvolvimento do back-end, foi utilizado o framework [Express](https://expressjs.com/pt-br/), pois é um framework de fácil utilização e leve, além de ser um framework muito utilizado no mercado.

- Foi utilizado o ORM Sequelize por uma questão de produtividade e sugestão da Cashforce.

- Para o banco de dados, foi utilizado o [MySQL](https://www.mysql.com/), pois é um banco de dados muito utilizado no mercado, possui uma grande comunidade de desenvolvedores e pelo fato de eu possuir conhecimento e experiência.

- Para a documentação da API, foi utilizado o [Swagger](https://swagger.io/), pois é uma ferramenta muito utilizada para documentar APIs.

- Para a hospedagem do banco de dados, foi utilizado o [Railway](https://railway.app/), pois é uma ferramenta de hospedagem de banco de dados na nuvem, que possui um plano gratuito e é muito fácil de utilizar.

- Para testar as rotas da API, foi utilizada extensão do VSCODE **Thunder Client**, pois é uma ferramenta muito fácil e na qual é possível testar as rotas da API no próprio editor.

- Para o desenvolvimento do projeto, foi utilizado o [VSCode](https://code.visualstudio.com/), pois é um editor de código muito utilizado no mercado e possui uma grande comunidade de desenvolvedores.

- Para o versionamento do projeto, foi utilizado o [Git](https://git-scm.com/), pois é uma ferramenta muito utilizada para versionamento de projetos.

- Para o armazenamento do projeto, foi utilizado o [GitHub](https://github.com), pois é uma ferramenta muito utilizada para armazenamento de projetos.

- Foi utilizado o Jest, Mocha, Chai e Sinon para rodar os testes unitários, pois é uma ferramenta que eu já tenho conhecimento e experiência.

- Apesar de possuir conhecimento e experiência com o Docker, não foi utilizado, pois não foi solicitado.

- Apesar de ter apenas um endpoint, a ideia é seguir o padrão REST, onde cada endpoint é responsável por uma única ação.

- Foi utilizado o padrão de projeto MSC (Model, Server e Controller), um padrão de projeto muito utilizado no mercado, que separa as responsabilidades de cada camada do projeto.

  - **Camada Model**
    - Responsável por fazer a comunicação com o banco de dados;
  - **Camada Service**
    - Responsável por fazer a validação dos dados;
    - Responsável por fazer a comunicação com a camada Controller;
    - Responsável por fazer a comunicação com a camada Model;
  - **Camada Controller**
    - Responsável por fazer a comunicação com a camada Service;
    - Responsável por dar o retorno da requisição HTTP;

- Para a criação do banco de dados, foi utilizado o arquivo de referência `database.sql`, que está na raiz do projeto.

## 👉🏾 Status do projeto

- [x] Desenvolvimento do back-end
- [x] Documentação da API
- [x] Deploy da API

## 🔗 Link para acessar a API na nuvem

- [https://cashforce-api.up.railway.app/orders](https://cashforce-api.up.railway.app/orders)

## 🔚 Endpoints

### GET `/`

- Retorna uma mensagem de boas vindas.

#### Parâmetros

- Nenhum.

### GET `/orders`

- Retorna todos os pedidos cadastrados.

#### Parâmetros

- Nenhum.

## 📚 Documentação da API

A documentação da API foi feita utilizando o Swagger, para facilitar o entendimento das rotas e seus parâmetros.

Para acessar a documentação da API, basta acessar o link:

- [http://localhost:3001/api-docs/](http://localhost/api-docs/)
- [https://cashforce-api.up.railway.app/api-docs/](https://cashforce-api.up.railway.app/api-docs/)
