 BlogsApi

## Sobre o Projeto

Este projeto foi concluído como parte de um repositório de curso, porém, o código foi clonado para o meu portfólio pessoal. Ele consiste em uma API para gerenciamento de blogs, incluindo funcionalidades de autenticação de usuários, gerenciamento de categorias e publicações de blogs. O projeto foi desenvolvido seguindo boas práticas de desenvolvimento e respeitando os requisitos fornecidos.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL

## Como Iniciar o Projeto

1. Clone o repositório
2. Navegue até o diretório clonado usando o comando `cd BlogsApi`
3. Instale as dependências utilizando o comando `npm install`
4. Inicie a aplicação com o comando `npm start`
5. Acesse a API através do endpoint local `http://localhost:3000`

## Endpoints Principais

1. POST /login - Autentica um usuário existente
2. POST /user - Adiciona um novo usuário
3. GET /user - Obtém todos os usuários
4. GET /user/:id - Obtém um usuário específico por ID
5. POST /categories - Adiciona uma nova categoria
6. GET /categories - Obtém todas as categorias
7. POST /post - Adiciona um novo blog post e associa categorias
8. GET /post - Obtém todos os blog posts
9. GET /post/:id - Obtém um blog post específico por ID
10. PUT /post/:id - Atualiza um blog post existente
11. DELETE /post/:id - Deleta um blog post existente
12. DELETE /user/me - Deleta o usuário atual
13. GET /post/search?q=:searchTerm - Procura blog posts com base em um termo de pesquisa

## Autor

Se precisar de mais alguma informação ou ajuda, estou disponível para contato.

[Alexandre ] - <a href='https://www.linkedin.com/in/oliveira-xand/'>Linkedin<a>
