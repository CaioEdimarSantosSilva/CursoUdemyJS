/**Desenvolva uma função que receba um array de números e retorne a soma de todos os números positivos. */
const numeros = [-3, -2, -1, 0, 1, 2, 3, 4, 5]
const somaPositiva = lista => {
    let soma = 0
    for (indice in lista) {
        if (lista[indice] > 0) {
            soma += lista[indice]
        }
    }
    return soma
}
console.log(`A lista [${numeros.join(', ')}] tem como soma de todos os numeros positivo o valor ${somaPositiva(numeros)}!`)