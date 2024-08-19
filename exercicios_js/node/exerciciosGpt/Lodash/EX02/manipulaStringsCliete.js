const manipulaString = require('./manipulaStrings')

const string = 'olá Mundo !'

const cap = manipulaString.capitalizar(string)
const junH = manipulaString.juntarComHifen(string)
const junM = manipulaString.juntarMaiuscula(string)

console.log(cap)
console.log(junH)
console.log(junM)