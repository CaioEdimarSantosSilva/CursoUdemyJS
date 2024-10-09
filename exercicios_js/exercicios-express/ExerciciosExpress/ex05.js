const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const produtos = [
    { id: 0, nome: 'Produto 1', preco: 10.00 },
    { id: 1, nome: 'Produto 2', preco: 20.00 },
    { id: 2, nome: 'Produto 3', preco: 30.00 },
]

app.put('/produtos/:id', (req, res) => { 
    const {id} = req.params
    const {nome, preco} = req.body
    const produto = produtos.find(p => p.id === parseInt(id))

    if(!produto){
        res.status(404).json({Error: "Produto não encontrado!"})
    }
    if(nome){
        produto.nome = nome
    }
    if(preco){
        produto.preco = preco
    } 
    res.json(produtos)   
})

app.listen(3000, () => {
    console.log('Backend rodando na porta 3000...')
})