# Desafio Cashforce - front-end

## 📜 Descrição

A tela de **Notas Fiscais** foi desenvolvida para o desafio técnico da Cashforce. O objetivo desta tela é renderizar todas as `orders` (notas fiscais) de um determinado cliente provenientes do back-end. Para isso, foi utilizado o framework [Vue.js](https://vuejs.org/).

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

Os requisitos para rodar o projeto na sua máquina são:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

Também recomenda-se a utilização de um editor de código e extensões, como por exemplo:

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 🚀 Tecnologias utilizadas

- [Vue.js](https://vuejs.org/)
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

3. Após instalar as dependências, inicie o servidor

```bash
npm run dev
```

4. Acesse no navegador o endereço `http://localhost:5173/` e verá o projeto rodando

## ✅ Linter

Para verificar se o código está de acordo com as regras do linter, execute o comando:

```bash
npm run lint
```

## 🏙 Build do projeto

Para gerar o build do projeto, execute o comando:

```bash
npm run build
```

## 🧭 Decisões técnicas de projeto

- Para o desenvolvimento do projeto, foi utilizado o [Vue.js](https://vuejs.org/), pois é um framework de fácil utilização, leve, além de ser um framework muito utilizado no mercado. Também vale ressaltar que esta foi uma recomendação da Cashforce.

  - Usei o comando `npm init vue@latest` para criar o projeto.
  - Usei a versão 3 do Vue.js.
  - Optei por não utilizar o [Vue CLI](https://cli.vuejs.org/) pois não vi a necessidade de utilizar um CLI para este projeto.
  - Optei por não utilizar o [Vue Router](https://router.vuejs.org/) pois não vi a necessidade de utilizar um router para este projeto.
  - Optei por não utilizar o [Vuex](https://vuex.vuejs.org/) pois não vi a necessidade de utilizar um state manager para este projeto.
  - Optei por não utilizar o [Vue Test Utils](https://vue-test-utils.vuejs.org/) por questão de gerenciamento de tempo.

- Não desenvolvi um layout responsivo pois me baseei no layout do [Figma](https://www.figma.com/file/NY1fe6PAZ6DKeD9eOzyrju/Teste-Cashfroce?node-id=0%3A1&t=oOYt7cRR2cCJTjqV-0) e este não é responsivo. Além disso, parti do pressuposto que esta é uma aplicação para desktop. Caso fosse uma aplicação para mobile, eu desenvolveria um layout responsivo.

- Foi utilizado CSS puro para estilizar o projeto, pois não vi a necessidade de utilizar um framework de CSS. Além disso, a utilização de um framework, como o Tailwind, custaria mais tempo para desenvolver o projeto.

- Para a hospedagem do projeto, foi utilizado o [Netlify](https://www.netlify.com/), pois é uma ferramenta de hospedagem gratuita e muito utilizada no mercado. Além disso, enfrentei problemas de deploy no [Railway](https://railway.app/) e não consegui resolver. Por isso, optei por utilizar o Netlify.

- Para o desenvolvimento do projeto, foi utilizado o [VSCode](https://code.visualstudio.com/), pois é um editor de código muito utilizado no mercado e possui uma grande comunidade de desenvolvedores.

- Para o versionamento do projeto, foi utilizado o [Git](https://git-scm.com/), pois é uma ferramenta muito utilizada para versionamento de projetos.

- Para o armazenamento do projeto, foi utilizado o [GitHub](https://github.com), pois é uma ferramenta muito utilizada para armazenamento de projetos.

- Foi utilizado o Jest, Mocha, Chai e Sinon para rodar os testes unitários, pois é uma ferramenta que eu já tenho conhecimento e experiência.

- Para a criação do banco de dados, foi utilizado o arquivo de referência `database.sql`, que está na raiz do projeto.

## 👉🏾 Status do projeto

- [x] Desenvolvimento do front-end
- [x] Deploy do front-end

## 🔗 Link para acessar a Tela de Notas Fiscais na nuvem

- [https://cashforce-frontend.netlify.app](https://cashforce-frontend.netlify.app)

## Possíveis melhorias Futuras

- [ ] Desenvolvimento de testes unitários
- [ ] Utilização de algum framework de CSS
- [ ] Uso de TypeScript para tipagem
- [ ] Desenvolvimento de um layout responsivo, caso necessário
