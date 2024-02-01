/**Crie uma arrow function que receba um número e retorne um array com todos os números primos até o número informado.*/
/**for (inicialização; condição; incremento)  */
let todosPrimos = []
const numerosPrimos = numero => {
    for (let contador = 2; contador <= numero; contador++) {
        if (contador === 2 || contador === 3 || contador === 5 || contador === 7) {
            todosPrimos.push(contador)
        } else if (contador % 2 !== 0 && contador % 3 !== 0 && contador % 5 !== 0 && contador % 7 !== 0) {
            todosPrimos.push(contador)
        }
    }
    console.log(`Os numeros primos do 0 até o ${numero} é [${todosPrimos.join(', ')}]`)
}
numerosPrimos(15)

