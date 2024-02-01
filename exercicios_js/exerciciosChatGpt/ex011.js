/**Crie uma função arrow que receba um array de números e retorne o menor número. */
const lista = [5, 2, 3, 4, 1]
const menorLista = (valor) => {
    let menor = 0
    for (indice in valor) {
        if (indice == 0) {
            menor = valor[indice]
        }
        else {
            if (valor[indice] < menor) {
                menor = valor[indice]
            }
        }

    }
    console.log(`O menor numero é ${menor}`)
}

menorLista(lista)
