const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

//Meu Exercicio
const pessoas = [
    {nome: 'Maria', sexo: "Feminino", idade: 22, nacionalidade: "Brasileiro"},
    {nome: 'Carlos', sexo: "Masculino", idade: 12, nacionalidade: "Brasileiro"},
    {nome: 'Geovane', sexo: "Masculino", idade: 21, nacionalidade: "Brasileiro"},
    {nome: 'Ana', sexo: "Feminino", idade: 15, nacionalidade: "Brasileiro"},
    {nome: 'Pedro', sexo: "Masculino", idade: 35, nacionalidade: "Jamaicano"}
]
const homens = pessoa => pessoa.sexo == 'Masculino'
const maiorDeIdade = pessoa => pessoa.idade >= 18
const nacionalidadeBR = pessoa => pessoa.nacionalidade == 'Brasileiro'

console.log(pessoas.filter(homens).filter(maiorDeIdade).filter(nacionalidadeBR))