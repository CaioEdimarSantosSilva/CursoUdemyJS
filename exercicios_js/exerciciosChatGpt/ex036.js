/**Desenvolva uma arrow function que receba um objeto representando um produto com propriedades nome, preco e quantidade e retorne o valor total desse produto. */

const produto = {nome: 'Café', preco: 14.64, quantidade: 3}

const valorTotal = objeto => objeto.preco * objeto.quantidade
console.log(`O valor Total da compra de ${produto.quantidade} ${produto.nome} com o preço de R$${produto.preco.toFixed(2).replace('.',',')} a unidade. Ficar por R$${valorTotal(produto).toFixed(2).replace('.',',')}!`)