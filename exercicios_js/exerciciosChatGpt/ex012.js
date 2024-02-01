/**Desenvolva uma arrow function que receba um número inteiro e 
retorne true se ele for primo, false caso contrário.*/

const numeroPrimo = (valor) => {

    if (valor % 2 != 0 && valor % 3 != 0 && valor % 5 != 0 && valor % 7 != 0) {
        console.log(`${valor} é um número primo.`)
        return true 
    }
    else {
        console.log(`${valor} não é um número primo.`)
        return false
    }
}

console.log(numeroPrimo(11))


