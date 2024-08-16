const { capitalize } = require("lodash")

module.exports = {
    reverterString(string){
        console.log(`A string ${string} revertida é ${string.split('').reverse().join('')}!`)
    },
    capitalizar(string){
        console.log(`A string ${string} com capitalizar ${capitalize(string)}!`)
    },
    contarVogais(string){
        const stringLista = string.toLowerCase().split('')
        let contador = 0
        
        for(letra in stringLista){
            if(string[letra] == 'a' || string[letra] == 'e' || string[letra] == 'i' || string[letra] == 'o' || string[letra] == 'u'){
                contador += 1
            }
        }
        console.log(`A string ${string} tem no total ${contador} vogais!`)
    }
}