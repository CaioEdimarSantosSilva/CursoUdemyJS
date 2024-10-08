const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/produtos', (req, res) => {
    const produtos = req.body
    for(let contador = 0; contador < produtos.length; contador++){
        produtos[contador].id = contador
    }
    res.json(produtos)
})

// Inicia o servidor
app.listen(3000, () => {
    console.log('Backend rodando na porta 3000...')
})