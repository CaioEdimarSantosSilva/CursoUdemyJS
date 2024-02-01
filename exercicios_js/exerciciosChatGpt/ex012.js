/**Desenvolva uma arrow function que receba um número inteiro e 
retorne true se ele for primo, false caso contrário.*/

const numeroPrimo = (valor) => {
    console.log(`O numero ${valor} se for primo é verdadeiro`)
    if(valor % 2 != 0 && valor % 3 != 0 && valor % 5 != 0 && valor % 7 != 0){
        return true
    }
    else{
        return false
    }
}

console.log(numeroPrimo(11))