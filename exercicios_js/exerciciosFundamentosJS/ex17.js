/** Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 * somarNumeros([10,10,10]) // retornará 30
 * somarNumeros([15,15,15,15]) // retornará 60
*/

const somarNumeros = lista => {
    let somador = 0
    for(let indice = 0; indice <= lista.length -1; indice++){
        somador += lista[indice]
    }
    console.log(somador)
}
somarNumeros([10,10,10]) // retornará 30
somarNumeros([15,15,15,15]) // retornará 60

