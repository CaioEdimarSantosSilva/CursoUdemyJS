/**Crie uma arrow function que receba um objeto representando um triângulo com as propriedades base e altura e retorne a área desse triângulo. A = b*h/2, onde b é a base e h é a altura*/

const triangulo = {base: 2, altura: 3}
const encotraTriangulo = (objeto) => (objeto.base * objeto.altura) / 2
console.log(`Área do triângulo com a base ${triangulo.base} e altura ${triangulo.altura} é ${encotraTriangulo(triangulo)}!`)
