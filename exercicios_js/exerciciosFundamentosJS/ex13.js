/**Crie uma funcao que receba um array de elementos e retorne um array somente com os numeros presentes no 
 
array recebido como parametro
ex:
filtrarNumeros(["javascript", 1, "3", "web", 20]) // retornara [1, 20]
filtrarNumeros(["a", "c"]) // retornara []
*/

const filtrarNumeros = lista => {
    const resposta = []
    for(contador = 1; contador <= lista.length -1; contador++) {
        if(typeof lista[contador] !== 'string'){
            resposta.push(lista[contador])
        }
    }
    console.log(resposta)
}

filtrarNumeros(["javascript", 1, "3", "web", 20]) // retornara [1, 20]
filtrarNumeros(["a", "c"]) // retornara []