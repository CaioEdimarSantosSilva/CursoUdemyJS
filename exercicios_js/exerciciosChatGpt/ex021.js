/**Crie uma arrow function que receba uma frase e retorne a mesma frase, mas com cada palavra invertida. */
const fraseInvertida = frase => {
    const fraseFormatada = frase.split(' ')
    for (indice in fraseFormatada) {
        fraseFormatada[indice] = fraseFormatada[indice].split('').reverse().join('')
    }
    console.log(`A frase "${frase}" invertida é "${fraseFormatada.join(' ')}"`)
}
fraseInvertida('Olá Mundo!')

 