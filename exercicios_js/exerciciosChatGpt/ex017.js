/**Crie uma função arrow que receba um número e retorne uma string indicando se é positivo, negativo ou zero.*/

const verificandoNumero2 = (numero) => {
    if(numero > 0){
        console.log(`${numero} é um numero positivo`)
    } else if(numero < 0){
        console.log(`${numero} é um numero negativo`)
    }else{
        console.log(`${numero} é um numero nulo`)
    }
}
verificandoNumero2(7)
verificandoNumero2(-2)
verificandoNumero2(0)