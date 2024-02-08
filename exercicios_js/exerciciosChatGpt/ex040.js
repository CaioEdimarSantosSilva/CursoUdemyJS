/**Crie uma arrow function que receba um objeto representando um livro com as propriedades titulo, autor e ano e retorne uma string formatada com essas informações. */

const livro = {titulo: "Percy Jackson e o ladrão de Raio", autor: "Rick Riordan", ano: 2010}
const stringFormatada = obj => `O livro ${obj.titulo} foi lançado em ${obj.ano} pelo autor ${obj.autor}!`
console.log(stringFormatada(livro))