/* eslint-disable */
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let usuarios = [
    { id: 1, nome: "João", idade: 25 },
    { id: 2, nome: "Maria", idade: 30 }
]

let nextId = 3


app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})


app.get('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const usuario = usuarios.find(u => u.id === id)

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" })
    }

    res.json(usuario)
})


app.post('/usuarios', (req, res) => {
    const { nome, idade } = req.body

    if (!nome || !idade) {
        return res.status(400).json({ erro: "Nome e idade são obrigatórios" })
    }

    const novoUsuario = {
        id: nextId++,
        nome,
        idade
    }

    usuarios.push(novoUsuario)

    res.status(201).json(novoUsuario)
})


app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const usuario = usuarios.find(u => u.id === id)

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" })
    }

    const { nome, idade } = req.body

    if (nome) usuario.nome = nome
    if (idade) usuario.idade = idade

    res.json(usuario)
})


app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const index = usuarios.findIndex(u => u.id === id)

    if (index === -1) {
        return res.status(404).json({ erro: "Usuário não encontrado" })
    }

    usuarios.splice(index, 1)

    res.status(204).send()
})

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})