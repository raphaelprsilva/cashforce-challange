<h1 align="center">Desafio Fullstack Cashforce</h1>

<div align="center">
  <img src="./front-end/src/assets/images/cashforce-logo.svg" alt="Blogs API" />
</div>

---

## :memo: Sobre o Projeto

Este desafio consiste uma aplicação full-stack, ou seja, conecta banco de dados, back-end e front-end, de maneira que é possível, através desta, consumir dados de uma API renderizando as informações na tela.

## 📋 Tabela de conteúdos

- [**🎯 Objetivo do desafio**](#🎯-objetivo-do-desafio)
- [**🤔 Por que um Mono-repositório?**](#🤔-por-que-um-mono-repositório)
- [**🏗 Estrutura do Projeto**](#🏗-estrutura-do-projeto)
  - [🎲 Banco de Dados](#🎲-banco-de-dados)
  - [🔙 Back-end](#🔙-back-end)
  - [🖥 Front-end](#🖥-front-end)
- [**🔗 Link dos repositórios (back e front)**](#🔗-link-dos-repositórios-back-e-front)
- [**📝 O que pratiquei**](#📝-o-que-pratiquei)
- [**🛠 Tecnologias utilizadas**](#🛠-tecnologias-utilizadas)
- [**🚀 Rodando o projeto na sua máquina**](#🚀-rodando-o-projeto-na-sua-máquina)
  - [📍Pre Requisitos](#📍-pre-requisitos)
- [**📚 Documentação da API**](#📚-documentação-da-api)
- [**👉🏾 Status do projeto**](#👉🏾-status-do-projeto)
- [**🔗 Link para acessar o projeto**](#🔗-link-para-acessar-o-projeto)
- [**🤝 Colaboradores**](#🤝-colaboradores)

## 🎯 Objetivo do desafio

Dado um banco de dados com SQL já populado, criar uma aplicação full-stack que consuma os dados do banco de dados, através de um ORM (Sequelize) e exiba as informações na tela usando o framework Vue.js.

## 🤔 Por que um Mono-repositório?

O projeto foi desenvolvido em um mono-repositório, ou seja, contém o back-end e o front-end em um único repositório.

Decidi fazer desta maneira, pois acredito que é uma forma mais simples de se trabalhar com o projeto, pois não é necessário ficar abrindo vários repositórios para desenvolver o projeto.

Acredito que assim, o projeto fica mais simples de se entender e de se trabalhar. Além de ter uma "única fonte de verdade" para o projeto. Posso destacar o fato disso possibilitar uma única linha do tempo para o projeto, ou seja, se eu quiser ver o histórico de commits do projeto, posso ver em um único repositório.

## 🏗 Estrutura do Projeto

O projeto é composto de 3 entidades importantes para sua estrutura:

### 🎲 Banco de Dados

- Foi fornecida a estrutura de um banco de dados SQL já populado;
- O banco de dados, tem o papel de fornecer dados para o serviço de back-end;
- Com isso, foi possível criar um banco de dados MySQL na nuvem via [Railway](https://railway.app/) de maneira a dar mais flexibilidade, facilidade de implementação e acesso aos dados;
- O banco de dados escolhido foi o MySQL, baseado na estrutura fornecida pela empresa Cashforce;

### 🔙 Back-end

- O back-end é a estrutura responsável por consumir os dados do banco de dados, contendo todas as regras de negócio da aplicação;
- O back-end foi desenvolvido em Node.js, utilizando o framework Express;
- O back-end foi desenvolvido utilizando o ORM Sequelize, algo sugerido pela Cashforce;
- O back-end foi documentado utilizando o Swagger, para facilitar o entendimento das rotas e seus parâmetros;

### 🖥 Front-end

- O front-end é a estrutura responsável por consumir os dados do back-end, contendo todas as regras de negócio da aplicação;
- O front-end foi desenvolvido utilizando o framework [Vue.js](https://vuejs.org/), sugerido pela empresa Cashforce;

## 🔗 Link dos repositórios (back e front)

Abaixo estão os links para os repositórios do projeto:

- [Back-end](https://github.com/raphaelprsilva/cashforce-challange/tree/main/back-end)
- [Front-end](https://github.com/raphaelprsilva/cashforce-challange/tree/main/front-end)

## 🚀 Rodando o projeto na sua máquina

Para rodar o projeto na sua máquina é necessário alguns pre requisitos:

#### 📍Pre Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 📦 Começando com o desenvolvimento local

O projeto consiste num mono-repositório, ou seja, contém o back-end e o front-end em um único repositório.

Siga as instruções abaixo para rodar o projeto na sua máquina:

1. Clone o repositório

```bash
git clone git@github.com:raphaelprsilva/cashforce-challange.git
```

2. Acesse a pasta do projeto

```bash
cd cashforce-challange
```

3. Repare que o projeto contém 2 pastas, uma para o `back-end` e outra para o `front-end`.

```bash
cashforce-challange/
├── back-end
└── front-end
```

4. A partir daqui, é necessário ir até o repositorio tanto do `front-end` quanto do `back-end` para seguir as instruções de instalação das dependências e execução do projeto. Clique nos links para acessar os repositórios:

- [Para execução Back-end na sua máquina](https://github.com/raphaelprsilva/cashforce-challange/tree/main/back-end)
- [Para execução Fack-end na sua máquina](https://github.com/raphaelprsilva/cashforce-challange/tree/main/front-end)

## 📝 O que pratiquei

Neste projeto, foi possível testar as habilidades:

- Utilizar o `MySQL` para criar tabelas e relacionamentos;

- Utilizar o `Express` para criar uma API;

- Utilizar o `Sequelize` para integrar o banco de dados com sua aplicação;

- Utilizar o `Sequelize` para criar relacionamento entre tabelas;

- Utilizar o `Swagger` para documentar a API;

- Utilizar o `Vue.js` para criar uma aplicação web;

- Utilizar `CSS` para estilizar a aplicação;

- Utilizar o `Figma` como referência para o layout da aplicação;

- Utilizar o `RailWay` para criar um banco de dados na nuvem;

- Utilizar o `Railway` para criar um serviço de back-end na nuvem;

- Utilizar o `Git` para versionar o projeto;

- Utilizar o `Netlify` para fazer o deploy do front-end;

## 👉🏾 Status do projeto

- [x] Desenvolvimento do back-end
- [x] Desenvolvimento do front-end
- [x] Documentação da API
- [x] Deploy da API
- [x] Deploy do front-end

## 🔗 Link para acessar o projeto

- [Tela de Notas Fiscais](https://cashforce-frontend.netlify.app/)
- [API das Notas Fiscais](https://cashforce-api.up.railway.app/orders)

## 🙏 Agradecimentos

Agradeço a oportunidade de participar do processo seletivo da Cashforce. Foi um desafio e uma experiência bastante enriquecedora para mim!

Independe do resultado do processo seletivo, eu me sinto muito feliz por ter tido esta oportunidade e espero que eu possa contribuir com a empresa no futuro!

Abraços! Que a força esteja com vocês!

## 🤝 Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/raphaelprsilva">
        <img src="https://avatars.githubusercontent.com/u/50886915?s=400&u=fa3df0caab0c83b9f88678abd93e8d5a81a5cd6f&v=4" width="100px;" alt="Foto de Raphael Silva no GitHub"/><br>
        <sub>
          <b>raphaelprsilva</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
