/**Crie uma arrow function que receba um objeto representando uma pessoa com propriedades nome, sobrenome, idade e altura, e retorne true se a pessoa for maior de idade e false caso contrário */
const pessoa = { nome: 'Vitor', sobrenome: 'Santos', idade: 27, altura: 1.67 }

const maiorIdade = objeto => objeto.idade >= 18

if(maiorIdade(pessoa) == true){
    console.log(`${pessoa.nome} ${pessoa.sobrenome} é maior de idade!`)
}else{
    console.log(`${pessoa.nome} ${pessoa.sobrenome} não é maior de idade!`)
}