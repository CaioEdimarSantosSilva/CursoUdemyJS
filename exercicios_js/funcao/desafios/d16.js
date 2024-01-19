/** Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora(valor1 = 1, valor2 = 1, operacao = '') {
    switch (operacao) {
        case 'soma':
            console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`)
            break
        case 'subtração':
            console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`)
            break
        case 'multiplicação':
            console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`)
            break
        case 'divisão':
            console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`)
            break
        default:
            console.log(`ERRO!!! A operação ${operacao} não foi encotrada!`)
            break
    }
}

calculadora(5, 5, 'soma')
calculadora(5, 5, 'subtração')
calculadora(5, 5, 'multiplicação')
calculadora(5, 5, 'divisão')
calculadora(5, 5, 'Potenciação')