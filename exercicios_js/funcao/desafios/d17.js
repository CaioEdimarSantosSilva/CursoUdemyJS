/**Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10% 1,10
B 15% 1,15
C 20% 1,20
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumentos(salario = 0.99, aumento = 1) {
    switch (aumento) {
        case 10:
            console.log(`O sálario do funcionario era ${salario} e com o plano de aumento ${aumento} ficou ${(salario * 1.10).toFixed(2)}`)
            break
        case 15:
            console.log(`O sálario do funcionario era ${salario} e com o plano de aumento ${aumento} ficou ${(salario * 1.15).toFixed(2)}`)
            break
        case 20:
            console.log(`O sálario do funcionario era ${salario} e com o plano de aumento ${aumento} ficou ${(salario * 1.20).toFixed(2)}`)
            break
        default:
            console.log('plano é inválido')
    }
}

aumentos(1320, 10)
aumentos(1320, 15)
aumentos(1320, 20)
aumentos(1320, 25)
