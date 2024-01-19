/** Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo. */

function numeros(numero = 0) {
    switch (numero) {
        case 0:
            console.log(`O numero ${numero} por extenso fica ZERO`)
            break
        case 1:
            console.log(`O numero ${numero} por extenso fica UM`)
            break
        case 2:
            console.log(`O numero ${numero} por extenso fica DOIS`)
            break
        case 3:
            console.log(`O numero ${numero} por extenso fica TRÊS`)
            break
        case 4:
            console.log(`O numero ${numero} por extenso fica QUATRO`)
            break
        case 5:
            console.log(`O numero ${numero} por extenso fica CINCO`)
            break
        case 6:
            console.log(`O numero ${numero} por extenso fica SEIS`)
            break
        case 7:
            console.log(`O numero ${numero} por extenso fica SETE`)
            break
        case 8:
            console.log(`O numero ${numero} por extenso fica OITO`)
            break
        case 9:
            console.log(`O numero ${numero} por extenso fica NOVE`)
            break     
        case 10:
            console.log(`O numero ${numero} por extenso fica DEZ`)
            break
        default:
            console.log(`O numero ${numero} está fora do intervalo`)
            break
    }
}
numeros(0)
numeros(1)
numeros(2)
numeros(3)
numeros(4)
numeros(5)
numeros(6)
numeros(7)
numeros(8)
numeros(9)
numeros(10)
numeros(11)
