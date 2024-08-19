const funcoesArray = require('./operacoesArray')

const itensPala = ['Dichavador','Pitera','Seda','Pote']
console.log(itensPala)

funcoesArray.adicionarElemento(itensPala, 'Bong')
console.log(itensPala)

funcoesArray.removerElemento(itensPala, 3)
console.log(itensPala)

console.log(funcoesArray.buscarElemento(itensPala, 2))



