const combinarArray = require('./combinarArrays')

let inicialFogo = ['Charmander']
let inicialGrama = ['Bulbassaur']
let inicialAgua = ['Squirtle']

let teste = combinarArray.combinarArraysSemDuplicados(inicialFogo,inicialAgua,inicialGrama,inicialFogo)

console.log(teste)