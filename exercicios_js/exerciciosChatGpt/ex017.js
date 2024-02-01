/**Crie uma função arrow que receba um número e retorne uma string indicando se é positivo, negativo ou zero.*/

const verificandoNumero2 = (numero) => {
    switch (numero) {
        case 0:
            console.log(`zero`)
        case numero > 0:
            console.log(`positivo`)
        case numero < 0:
            console.log(`negativo`)
    }
}
verificandoNumero2(7)
verificandoNumero2(-2)
verificandoNumero2(0)