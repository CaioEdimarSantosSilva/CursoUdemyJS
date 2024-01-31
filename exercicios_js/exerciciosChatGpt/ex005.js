/**Crie uma função arrow que receba um número e verifique se ele é par. 
 * Retorne true se for par, false se for ímpar. */

const par = (numero) => {
    console.log(`O numero ${numero} é PAR se for verdadeiro!`)
    if (numero % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

console.log(par(4))
console.log(par(7))