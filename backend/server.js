/* eslint-disable */
const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let usuarios = [
  { id: 1, nome: "João", idade: 25 },
  { id: 2, nome: "Maria", idade: 30 },
];

let nextId = 3;

// LISTAR USUÁRIOS
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// CRIAR USUÁRIO
app.post("/usuarios", (req, res) => {
  const { nome, idade } = req.body;

  if (!nome || !idade) {
    return res.status(400).json({
      erro: "Nome e idade são obrigatórios",
    });
  }

  const novoUsuario = {
    id: nextId++,
    nome,
    idade,
  };

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

// DELETAR USUÁRIO
app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);

  usuarios = usuarios.filter((u) => u.id !== id);

  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
