const analiseTexto = require('./analiseTexto')

const frase = 'Quem é este pokemon'

const aT = analiseTexto.contarPalavras(frase) 
const cC = analiseTexto.contarCaracteres(frase)
const eP = analiseTexto.encontrarPalavraMaisLonga(frase)

console.log(`A frase tem ${aT} palavras!`)
console.log(`A frase tem ${cC} letras!`)
console.log(`A maior palavra da frase é ${eP}!`)