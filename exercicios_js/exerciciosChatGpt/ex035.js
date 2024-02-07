/**Escreva uma arrow function que receba um objeto com as propriedades valor e moeda e retorne uma string formatada com o valor e a moeda. */

const carteira = {valor: 250.30, moeda: 'R$'}

const stringFormatada = objeto => `Você tem ${objeto.moeda}${Number(objeto.valor).toFixed(2).replace('.',',')} na carteira!`

console.log(stringFormatada(carteira))