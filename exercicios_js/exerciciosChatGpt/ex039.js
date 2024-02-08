/** Desenvolva uma arrow function que receba um objeto representando um carro com as propriedades marca, modelo e ano e retorne uma string formatada com essas informações. */

const carro = {marca: 'Volkswagen', modelo: 'fusca', ano: 1975}

const stringFormatada = objt => `O modelo do carro é ${objt.modelo}, a marca é ${objt.marca} e o ano é ${objt.ano}!`

console.log(stringFormatada(carro))