/**Desenvolva uma função que receba uma string e retorne a mesma string, 
mas com todas as vogais substituídas por '*'.*/

const substituirVogais = string => {
    let lista = []
    for (var indice = 0; indice < string.length; indice++) {
        if(string[indice] === 'a' || string[indice] === 'e' || string[indice] === 'i' || string[indice] === 'o' || string[indice] === 'u'){
           lista.push('*')
        }
        else{
            lista.push(string[indice])
        }
    }
    console.log(lista.join(''))
}
substituirVogais('Lorax')



