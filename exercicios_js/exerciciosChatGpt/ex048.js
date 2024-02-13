/**Escreva uma função construtora para representar um objeto Retangulo com propriedades como largura e altura. */

function Retangulo(largura, altura) {
    this.largura = largura
    this.altura = altura

}
const novoRetangulo = new Retangulo(3, 4)
console.log(novoRetangulo)