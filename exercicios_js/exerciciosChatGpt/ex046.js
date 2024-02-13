/**Crie uma função construtora para objetos Cachorro com propriedades como nome, raca e idade. */

function Cachorro(nome, raca, idade) {
    this.nome = nome
    this.raca = raca
    this.idade = idade
}
const novoCachorro = new Cachorro("Hera", "Rottweiler", 9)
console.log(novoCachorro)