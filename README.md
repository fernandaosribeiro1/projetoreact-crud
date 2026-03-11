Sistema de Gestão de Veículos
📌 Descrição do Projeto

Este projeto consiste em um sistema web para gerenciamento de veículos, permitindo cadastrar, visualizar, editar e excluir informações de veículos armazenados em uma API.

A aplicação foi desenvolvida utilizando React com Next.js no front-end e uma API para gerenciamento dos dados, simulando o funcionamento de um sistema de controle de estoque automotivo.

O objetivo da atividade é aplicar conceitos de:

Consumo de API

Manipulação de estado em React

Operações CRUD (Create, Read, Update, Delete)

Organização de componentes

Interface de usuário utilizando CSS

🎯 Funcionalidades

O sistema possui as seguintes funcionalidades principais:

✅ Cadastro de veículos

✅ Listagem de veículos disponíveis

✅ Edição de informações de um veículo

✅ Exclusão de veículos

✅ Atualização automática da interface após alterações

Cada veículo possui os seguintes dados:

Modelo

Marca

Ano

Preço

🛠 Tecnologias Utilizadas

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

React

Next.js

JavaScript

CSS

API REST

HTML

🧩 Estrutura do Projeto

A aplicação foi organizada em componentes para facilitar a manutenção e reutilização do código.

src/
│
├── pages/
│ └── index.js
│
├── components/
│ ├── CarForm.jsx
│ ├── CarList.jsx
│ └── Loading.jsx
│
└── styles/
└── globals.css

Descrição dos Arquivos

index.js

Página principal da aplicação

Responsável por carregar os dados da API

Controla as operações de adicionar, editar e excluir veículos

CarForm.jsx

Componente responsável pelo formulário de cadastro e edição de veículos

CarList.jsx

Componente que exibe a lista de veículos cadastrados

Loading.jsx

Componente de carregamento exibido enquanto os dados são buscados

globals.css

Arquivo responsável pela estilização da aplicação

🔄 Operações CRUD

A aplicação utiliza operações CRUD para manipular os dados dos veículos:

Create → Cadastrar um novo veículo

Read → Listar veículos cadastrados

Update → Editar informações de um veículo

Delete → Remover um veículo do sistema

▶️ Como Executar o Projeto

1️⃣ Instalar as dependências do projeto

npm install

2️⃣ Iniciar o servidor de desenvolvimento

npm run dev

3️⃣ Abrir o navegador e acessar

http://localhost:3000

👩‍💻 desenvolvido por Fernanda Ribeiro como parte de atividade acadêmica.
