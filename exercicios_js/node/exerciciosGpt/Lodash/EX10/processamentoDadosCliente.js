const processamento = require('./processamentoDados')

let arrayObjeto = [
    {
        nome: 'Pikachu',
        tipo: 'Elétrico',
        nivel: 1,
        alfa: false
    },
    {
        nome: 'Jolteon',
        tipo: 'Elétrico',
        nivel: 100,
        alfa: true
    },
    {
        nome: 'Zapidos',
        tipo: 'Elétrico',
        nivel: 90,
        alfa: false
    },
    {
        nome: 'Charmander',
        tipo: 'Fogo',
        nivel: 80,
        alfa: true
    },
    {
        nome: 'Entei',
        tipo: 'Fogo',
        nivel: 30,
        alfa: false
    },
    {
        nome: 'Lapras',
        tipo: 'Agua',
        nivel: 20,
        alfa: true
    },
    {
        nome: 'Peliper',
        tipo: 'Agua',
        nivel: 70,
        alfa: false
    }
]
const proc = processamento.processarDados(arrayObjeto)
console.log(proc)