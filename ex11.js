/**crie uma funcao que receba um array e retorne o primeiro e o ultimo elemento desse array como um novo array ex:
 
receberPrimeiroeUltimoElemento([7,14,"ola"]) //retornara [7, "ola"]
receberPrimeiroeUltimoElemento([-100, "aplicativo", 16]) //retornara [-100, 16]
*/

const receberPrimeiroeUltimoElemento = lista => {
    const resultado = []
    resultado.push(lista[0], lista[lista.length - 1])
    return console.log(resultado)
}

receberPrimeiroeUltimoElemento([7,14,"ola"]) 
receberPrimeiroeUltimoElemento([-100, "aplicativo", 16])