Array.prototype.map2 = function(callback){
    const novoLista = []
    for (let i = 0; i < this.length; i++) {
        novoLista.push(callback(this[i], i, this))
    }   
    return novoLista
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis ", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)