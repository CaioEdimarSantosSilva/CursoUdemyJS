/**Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares. */
const todosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const todosPares = []

const pares = (lista) => { for (indice in lista) if (lista[indice] % 2 == 0) { todosPares.push(lista[indice]) }}
pares(todosNumeros)
console.log(`A lista com todos os numeros é [${todosNumeros.join(', ')}]`)
console.log(`A lista só com os numeros pares é [${todosPares.join(', ')}]`)














/**const pares2 = (lista) => {
    for (indice in lista) {
        if (lista[indice] % 2 == 0) {
            todosPares.push(lista[indice])
        }
    }
    (console.log(todosPares))
}
pares2(todosNumeros)*/
