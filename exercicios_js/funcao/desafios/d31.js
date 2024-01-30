/**Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

const numeros = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
const numerosN = []
let numerosNegativos = 0
for (let indice in numeros) {
    if (numeros[indice] < 0) {
        numerosN.push(numeros[indice])
        numerosNegativos++
    }
}
const numerosFormatados = numeros.join(', ')
const numerosNFormatados = numerosN.join(', ')
console.log(`A lista de numero é [${numerosFormatados}]!`)
console.log(`Nessa lista tem ${numerosNegativos} numeros negativos.`)
console.log(`Os numeros negativos são ${numerosN}.`)