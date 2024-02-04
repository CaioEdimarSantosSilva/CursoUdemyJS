/**Desenvolva uma arrow function que receba um objeto com as propriedades nome, idade e cidade e retorne uma string formatada com essas informações. */

const pessoa = { nome: 'Caio', idade: 23, cidade:'Peruibe' }
const stringFormatada = objeto => { console.log(`Nome: ${objeto.nome}, Idade: ${objeto.idade} anos, Cidade: ${objeto.cidade}`)

}
stringFormatada(pessoa)