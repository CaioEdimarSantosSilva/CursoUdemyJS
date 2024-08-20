const contador = require('./contador')

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
        nome: 'Lapras',
        tipo: 'Agua'
    },
    {
        nome: 'Peliper',
        tipo: 'Agua'
    }
]

const funcaoContar = contador.contarElementos(arrayObjeto)
console.log(funcaoContar)