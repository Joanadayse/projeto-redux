# Projeto Redux + Redux Saga

Este projeto utiliza **Redux** com **Redux Toolkit** e **Redux-Saga** para gerenciar o estado da aplicação. O objetivo é implementar um fluxo de usuários com requisições assíncronas.

## 📌 Tecnologias Utilizadas
- React.js
- Redux Toolkit
- Redux-Saga
- React Router DOM

## 🚀 Como Executar o Projeto
### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instalar dependências
```bash
yarn install
# ou
npm install
```

### 3️⃣ Rodar o projeto
```bash
yarn dev
# ou
npm run dev
```



## 📌 Fluxo de Dados
1. O usuário clica no botão **Buscar Usuários**.
2. A action `fetchUser` é disparada pelo `dispatch`.
3. O Redux-Saga escuta essa action e faz a requisição de dados.
4. Quando os dados são retornados, a action `fetchUserSuccess` é disparada para atualizar o estado global.
5. A tela exibe os usuários retornados.

## ✨ Funcionalidades
✅ Gerenciamento de estado com Redux Toolkit  
✅ Middleware assíncrono com Redux-Saga  
✅ Estrutura modular para Redux  
✅ Suporte a múltiplas páginas com React Router  

