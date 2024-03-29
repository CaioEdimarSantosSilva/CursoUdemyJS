/**O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */

function cardapio(codigo, quantidade){
    switch(codigo){
        case 100:
            console.log(`${quantidade} Cachorro Quente da R$${(3 * quantidade).toFixed(2)}`)
            break
        case 200:
            console.log(`${quantidade} Hambúrguer Simples da R$${(4 * quantidade).toFixed(2)}`)
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer R$${(5.50 * quantidade).toFixed(2)}`)
            break
        case 400:
            console.log(`${quantidade} Bauru da R$${(7.50 * quantidade).toFixed(2)}`)
            break
        case 500:
            console.log(`${quantidade} Refrigerante da R$${(3.50 * quantidade).toFixed(2)}`)
            break
        case 600:
            console.log(`${quantidade} Suco da R$${(2.80 * quantidade).toFixed(2)}`)
            break
        default:
            console.log('Produto não existente!')
            break         
    }
}
cardapio(100, 3)
cardapio(200, 1)
cardapio(300, 7)
cardapio(400, 5)
cardapio(500, 1)
cardapio(600, 4)
cardapio(700, 1)
