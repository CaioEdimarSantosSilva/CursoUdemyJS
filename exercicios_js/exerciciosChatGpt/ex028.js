/**Desenvolva uma função que receba um array de números e retorne
um novo array com os números ordenados de forma decrescente. */

const lista = [2, 8, 3, 6, 7, 5, 9, 1, 4]
const listaOrdenada = []

const ordenadosDecrescente = lista => lista.sort((a, b) => b - a)
console.log(`[${lista.join(', ')}] em ordem decrescente é [${ordenadosDecrescente(lista).join(', ')}]`)