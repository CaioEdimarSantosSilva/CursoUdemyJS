/**Escreva uma arrow function que receba um número e retorne true
se ele for um quadrado perfeito, false caso contrário. */

const quadradoPerfeito = numero => {
    let quadrado = Math.sqrt(numero)
    if (Number.isInteger(quadrado)) {
        console.log(`${numero} é um quadrado perfeito!`)
    } else {
        console.log(`${numero} não é um quadrado perfeito!`)
    }
}
quadradoPerfeito(9)
quadradoPerfeito(2)