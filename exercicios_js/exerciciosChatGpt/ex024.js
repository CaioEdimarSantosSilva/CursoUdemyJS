/**Crie uma função arrow que receba um array de strings e retorne o total de caracteres dessas strings. */

const listaStrings = ['Lorax']
const tamanhoString = strings => {
    return strings.join('').length
}

console.log(`${listaStrings} tem como total de ${tamanhoString(listaStrings)} caracteres!`)