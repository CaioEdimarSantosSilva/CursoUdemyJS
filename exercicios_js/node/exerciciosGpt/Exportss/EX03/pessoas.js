class Pessoa {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    saudar() {
        console.log(`Bom dia ${this.nome}!!!`)
    }
}

module.exports = Pessoa