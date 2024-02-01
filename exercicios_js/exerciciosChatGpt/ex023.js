/**Escreva uma arrow function que receba um número e retorne true 
se ele for um número triangular, false caso contrário. */

const numeroTriangular = valor => {
    let triangular = (-1 + (Math.sqrt(1 + 8 * valor))) / 2
    if (Number.isInteger(triangular)) {
        console.log(`${valor} é um número inteiro.`)
    } else {
        console.log(`${valor} não é um número inteiro.`)
    }
}
numeroTriangular(45)

/**
Number.isInteger() é uma função nativa do JS para verificar se 
o numero é inteiro e ja retorna um valor boleano sendo true quando
o valor é inteiro e false quando o valor é com ponto flutuante*/