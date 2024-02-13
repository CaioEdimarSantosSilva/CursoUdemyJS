/**Escreva uma função construtora para representar um objeto Produto com propriedades como nome, preco e quantidade. */

function Produto(nome, preco, quantidade) {
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
}
const novoProduto = new Produto("Refri-Cola", 9.99, 2)
console.log(novoProduto)