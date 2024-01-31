/**Desenvolva uma função que receba dois números e retorne o maior deles.*/

const maior = (numero1, numero2) => {
    console.log(`Os numeros são ${numero1} e ${numero2}.`)
    if(numero1 > numero2){
        return numero1
    }
    else{
        return numero2
    }
}

console.log(`O maior numero é ${maior(2,9)}!`)