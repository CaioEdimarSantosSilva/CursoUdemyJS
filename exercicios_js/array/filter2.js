Array.prototype.filter2 = function(callback){
    const novoArray = []
    for(let indice = 0; indice < this.length; indice++) {
        if(callback(this[indice], indice, this)) {
            novoArray.push(this[indice])
        }
    }
        return novoArray
}
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))