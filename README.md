# **`Sistema de Cadastro de Produtos 🛒📦`**
#### Os arquivos acima possuem todo o necessário para rodar o projeto localmente. ####
##### ✏️🗒️ Contendo todos os códigos — Frontend, Backend e Banco de Dados 🗒️✏️ #####

<details closed>
  <summary><h2>Informações relevantes ‼️</h2></summary>

  ---

  ° Projeto desenvolvido com **Express.js** no backend e **Fetch API** no frontend: ✅📃

  ---

  ° Banco de dados **SQLite** local para persistência dos produtos: ✅🗄️

  ---

  ° CRUD completo — **Create, Read, Update, Delete**: ✅⚙️

  ---

  ° Interface com busca em tempo real e resumo de estoque: ✅🔍

  ---

</details>

---

<details closed>
  <summary><h2>Tecnologias utilizadas 🛠️</h2></summary>

  ---

  - **Node.js** — Ambiente de execução JavaScript no servidor
  - **Express.js** — Framework para criação das rotas da API REST
  - **SQLite3** — Banco de dados relacional embutido, sem necessidade de instalação externa
  - **Fetch API** — Comunicação assíncrona entre frontend e backend
  - **HTML5 / CSS3** — Estrutura e estilização da interface
  - **Font Awesome** — Ícones de ação (editar, deletar, fechar)

  ---

</details>

---

<details closed>
  <summary><h2>Funcionalidades do sistema ⚙️</h2></summary>

  ---

  ### ➕ Criar Produto
  Preencha o formulário com **nome**, **preço**, **categoria** e **quantidade**, e clique em **Enviar** para cadastrar o produto via `POST /produtos`.

  ---

  ### 📋 Listar Produtos
  Todos os produtos cadastrados são carregados automaticamente via `GET /produtos` e exibidos em lista. Produtos com preço **≥ R$ 1.000** são destacados em **verde**.

  ---

  ### ✏️ Editar Produto
  Clique no ícone de caneta <kbd>✏️</kbd> em qualquer produto para abrir o pop-up de edição. Altere os campos desejados e confirme via `PUT /produtos/:id`.

  ---

  ### 🗑️ Deletar Produto
  Clique no ícone de lixeira <kbd>🗑️</kbd> para abrir o pop-up de confirmação. Ao confirmar, o produto é removido via `DELETE /produtos/:id`.

  ---

  ### 🧹 Limpar Tudo
  O botão **Limpar Tudo** abre o pop-up de confirmação e, ao confirmar, apaga todos os registros via `DELETE /produtoslimpar`.

  ---

  ### 🔍 Busca em Tempo Real
  O campo de busca filtra os produtos exibidos na lista conforme o texto digitado, sem necessidade de recarregar a página.

  ---

  ### 📊 Resumo do Estoque
  Exibe automaticamente o **total de produtos cadastrados** e a **soma de todos os preços** em tempo real.

  ---

</details>

---

<details closed>
  <summary><h2>Rotas da API 🔗</h2></summary>

  ---

  | Método | Rota | Descrição |
  |--------|------|-----------|
  | `GET` | `/produtos` | Lista todos os produtos |
  | `POST` | `/produtos` | Cadastra um novo produto |
  | `PUT` | `/produtos/:id` | Atualiza um produto pelo ID |
  | `DELETE` | `/produtos/:id` | Deleta um produto pelo ID |
  | `DELETE` | `/produtoslimpar` | Deleta todos os produtos |
  | `GET` | `/produtos/busca?nome=` | Busca produtos pelo nome |

  ---

</details>

---

<details closed>
  <summary><h2>Como executar o projeto ▶️</h2></summary>

  ---

  ### Pré-requisitos
  - **Node.js** instalado (versão 14 ou superior)
  - **npm** disponível no terminal

  ---

  ### Passo a passo

  **1. Clone o repositório ou baixe os arquivos**
  ```bash
  git clone https://github.com/seu-usuario/seu-repositorio.git
  cd seu-repositorio
  ```

  **2. Instale as dependências**
  ```bash
  npm install
  ```

  **3. Inicie o servidor**
  ```bash
  node server.js
  ```

  **4. Acesse no navegador**
  ```
  http://localhost:3000
  ```

  > O banco de dados `Loja.db` será criado automaticamente na primeira execução. ✅

  ---

</details>

---

<details closed>
  <summary><h2>Estrutura de arquivos 📁</h2></summary>

  ---

  ```
  📦 projeto-crud
  ├── 📄 server.js          # Servidor Express + rotas da API
  ├── 📄 Loja.db            # Banco de dados SQLite (gerado automaticamente)
  ├── 📁 public/
  │   ├── 📄 index.html     # Interface principal
  │   ├── 📄 style.css      # Estilização da página
  │   └── 📄 script.js      # Lógica do frontend (Fetch API)
  └── 📄 package.json       # Dependências do projeto
  ```

  ---

</details>

---

<details closed>
  <summary><h2>Dependências do projeto 📦</h2></summary>

  ---

  ```json
  {
    "dependencies": {
      "cors": "^2.8.5",
      "express": "^4.18.2",
      "sqlite3": "^5.1.6"
    }
  }
  ```

  Instale tudo com:
  ```bash
  npm install express sqlite3 cors
  ```

  ---

</details>

---

<details closed>
  <summary><h2>Observações e melhorias futuras 💡</h2></summary>

  ---

  - 🔐 Implementar **autenticação** para proteger as rotas
  - 📄 Adicionar **paginação** na listagem de produtos
  - 📱 Melhorar o **design responsivo** para dispositivos móveis
  - 🌐 Fazer o **deploy** em uma plataforma como Railway ou Render
  - ✅ Adicionar **validações** mais robustas no backend

  ---

</details>
