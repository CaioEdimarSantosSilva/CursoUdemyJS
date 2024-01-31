/**Crie uma arrow function que calcule e retorne o fatorial de um número. */

const fatorial = (valor) => {
    let resultado = 1
    for(let contador = valor; contador >= 1 ; contador--){
        resultado *= contador
    }
    return console.log(`O fatorial de ${valor} é ${resultado}!`)
}

fatorial(5)


