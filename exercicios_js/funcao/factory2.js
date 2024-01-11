function criarPreco(nome = 'Desconhecido', valor = 0) {
    const Desconto = valor - (10 / 100 * valor )
    return{
        nomeCliente: nome,
        valor: valor,
        valorDesconto: `${nome} você teve um desconto de 10% e vai pagar ${Desconto.toFixed(2)}`

    }
}

console.log(criarPreco('', 1.50))

//Versão do professor
function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1

    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('ipad', 1199.49))

