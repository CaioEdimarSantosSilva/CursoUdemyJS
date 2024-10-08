const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



function salvar(req, res, next){
    console.log(`Método: ${req.method} | URL: ${req.url}`)
    next()
}

app.use(salvar)

app.post('/usuario', (req,res) => {
    res.send('Usuario Criado!')
})

// Inicia o servidor
app.listen(3000, () => {
    console.log('Backend rodando na porta 3000...')
})