/**Escreva uma função construtora para criar objetos Carro com propriedades como marca, modelo e ano. */

function Carro(marca, modelo, ano) {
    this.marca = marca 
    this.modelo = modelo
    this.ano = ano
}
let novoCarro = new Carro("Volkswagen","Fusca", 1989)
console.log(novoCarro)