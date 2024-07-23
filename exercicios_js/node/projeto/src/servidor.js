const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
   res.send(bancoDeDados.getProdutos()) // esse retorna a lista de objetos com os produtos
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // aqui retorna cada objeto de produto dependendo do ID selecionado
 })
 

app.post('/produtos', (req, res, next) => { // post envia os dados
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => { // put modifica os dados
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => { // delete deleta os dados
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})