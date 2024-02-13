/**Desenvolva uma função construtora para criar objetos Ponto com propriedades como x e y. */

function Ponto(x, y) {
    this.x = x
    this.y = y
}
const novoPonto = new Ponto(2, 3)
console.log(novoPonto)