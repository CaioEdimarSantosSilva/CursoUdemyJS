/**Desenvolva uma funcao que recebe um numero correspondente a um ano e retorna se ele  é bissexto ou nao: 
EX:
checarAnoBissexto(2020) // retorna true 
checarAnoBissexto(2100) // retorna false pois é multiplo de 100 e nao e multiplo de 400*/

const checarAnoBissexto = ano => {
    if((ano % 100 !== 0 && ano % 4 == 0) || (ano % 400 == 0)){
        console.log(true)
    }
    else{
        console.log(false)
    }
} 
checarAnoBissexto(2020) // retorna true 
checarAnoBissexto(2100) // retorna false pois é multiplo de 100 e nao e multiplo de 400*/