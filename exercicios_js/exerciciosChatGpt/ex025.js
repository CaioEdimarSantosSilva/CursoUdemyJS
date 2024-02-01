/**Desenvolva uma arrow function que receba um número e retorne a soma dos seus dígitos. */

const soma = numero => {
    let somador = 0
    string = numero.toString()
    for(indice in string){
        somador += parseInt(string[indice]) 
    }
    console.log(`${numero} tem como soma dos dígitos o valor ${somador}`)
}
soma(420)
