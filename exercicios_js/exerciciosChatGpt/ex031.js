/**31 Crie uma arrow function que receba dois números como parâmetros e retorne um objeto contendo as seguintes propriedades: soma, subtração, multiplicação e divisão desses números. */
const objAritimetica = {}
const aritimetica = (valor1, valor2) => {
    objAritimetica.soma = valor1 + valor2
    objAritimetica.subtracao = valor1 - valor2
    objAritimetica.multiplicacao = valor1 * valor2
    objAritimetica.divisao = valor1 / valor2
    return objAritimetica
}
const numero1 = 2
const numero2 = 3
aritimetica(numero1, numero2)
for (chave in objAritimetica) {
    let simbolo = ''
    switch (chave) {
        case 'soma':
            simbolo = '+'
            break
        case 'subtracao':
            simbolo = '-'
            break
        case 'multiplicacao':
            simbolo = 'x'
            break
        case 'divisao':
            simbolo = '/'
            break
    }
    console.log(`A ${chave} de ${numero1} ${simbolo} ${numero2} = ${objAritimetica[chave]}`)
}