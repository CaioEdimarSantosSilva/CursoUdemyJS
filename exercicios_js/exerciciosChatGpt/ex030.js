/**Crie uma função arrow que receba uma string e retorne a mesma string, 
mas com todas as letras maiúsculas transformadas em minúsculas e vice-versa. */
const frase = 'Olá Mundo!'
const viceVersa = string => {
    let resultado = ''
    for(contador = 0; contador < string.length; contador++){
        let letra = string[contador]
        if(letra === string[contador].toUpperCase()){
            resultado += letra.toLowerCase()
        }else {
            resultado += letra.toUpperCase()
        }
    }
    return resultado
}
console.log(`["${frase}"] com as letras maiúsculas e minúsculas trocadas é ["${viceVersa(frase)}"]`)