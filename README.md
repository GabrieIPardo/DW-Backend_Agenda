# 📒 API de Agenda de Contatos

Este projeto é uma **API simples de agenda de contatos**, permitindo a aplicação de operações básicas de **CRUD** em contatos.

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* SQLite

## ▶️ Como executar o projeto

1. Instalar as dependências:

```
npm install
```

2. Iniciar o servidor:

```
node app.js
```

3. O servidor será iniciado em:

```
http://localhost:3000
```

---

# 📌 Rotas da API

## GET /

Verifica se o servidor está funcionando.

**Resposta**

```
Servidor rodando
```

---

# 📇 Rotas de Contatos

### GET /contatos

Retorna todos os contatos cadastrados.

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "nome": "João",
    "idade": 25,
    "empresa": "IBM",
    "email": "joao@email.com"
  }
]
```

---

## GET /contatos/:id

Retorna um contato específico, buscando por ID.

**Exemplo**

```
GET /contatos/1
```

---

## POST /contatos/criar

Cria um novo contato na agenda.

**exemplo Body (JSON):**

```json
{
  "nome": "Maria",
  "idade": 30,
  "empresa": "Google",
  "email": "maria@email.com"
}
```

**Resposta**

```
Contato criado com sucesso!
```

---

## PUT /contatos/:id

Atualiza os dados de um contato existente.

**Exemplo**

```
PUT /contatos/1
```

**Body (JSON)**

```json
{
  "nome": "Maria Silva",
  "idade": 31,
  "empresa": "Google",
  "email": "maria@email.com"
}
```

---

## DELETE /contatos/:id

Remove um contato da agenda.

**Exemplo**

```
DELETE /contatos/1
```

**Resposta**

```
Contato removido com sucesso!
```

---

Projeto desenvolvido para fins de estudo na disciplina **Desenvolvimento Web III**.
