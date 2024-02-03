/**Escreva uma arrow function que receba um objeto com as propriedades base e altura e retorne o valor da área do retângulo.*/

const retangulo = { base: 2, altura: 5 }
const areaRetangulo = objeto => objeto.base * objeto.altura

console.log(`Área do retângulo ${areaRetangulo(retangulo)}cm2`)