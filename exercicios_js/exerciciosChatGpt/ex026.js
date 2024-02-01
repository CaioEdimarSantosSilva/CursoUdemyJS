/**Escreva uma função que receba um número e retorne um array com todos os seus divisores. */
const listaDivisores = []
const encontrarDivisores = numero => {
    for (let contador = 0; contador <= numero; contador++) {
        if (numero % contador === 0) {
            listaDivisores.push(contador)
        }
    }
    return listaDivisores
}
const numero = 12
const formatado = encontrarDivisores(numero).join(', ')
console.log(`Os divisores de ${numero} são: [${formatado}]`)


