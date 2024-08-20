const agrupamento = require('./agrupamento')

let arrayObjeto = [
    {
        nome: 'Pikachu',
        tipo: 'Elétrico'
    },
    {
        nome: 'Jolteon',
        tipo: 'Elétrico'
    },
    {
        nome: 'Zapidos',
        tipo: 'Elétrico'
    },
    {
        nome: 'Charmander',
        tipo: 'Fogo'
    },
    {
        nome: 'Entei',
        tipo: 'Fogo'
    },
    {
        nome: 'Lapras',
        tipo: 'Agua'
    },
    {
        nome: 'Peliper',
        tipo: 'Agua'
    }
]

agrupamento.agruparPorCategoria(arrayObjeto)