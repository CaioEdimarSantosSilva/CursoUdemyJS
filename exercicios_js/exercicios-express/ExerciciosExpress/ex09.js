const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))





// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});



