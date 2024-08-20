const removerD = require('./removerDuplicados')

let bancoDeDados = [
    'Jolteon',
    'Zapdos',
    'Jolteon',
    'Charmander',
    'Jolteon',
    'Peliper',
    'Charmander'
]
let bancoDeDados2 = [
    {
        nome: 'Jolteon',
        tipo: 'Elétrico'
    },
    {
        nome: 'Jolteon',
        tipo: 'Elétrico'
    },
    {
        nome: 'Charmander',
        tipo: 'Fogo'
    },
    {
        nome: 'Jolteon',
        tipo: 'Elétrico'
    },
    {
        nome: 'Peliper',
        tipo: 'Agua'
    }
]
const removerDuplicadosArray = removerD.removerDuplicadosArray(bancoDeDados)
const removerDuplicadosObjeto = removerD.removerDuplicadosObjeto(bancoDeDados2)

console.log(removerDuplicadosArray)
console.log(removerDuplicadosObjeto)