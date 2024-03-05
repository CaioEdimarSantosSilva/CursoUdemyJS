const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsisrta?
const resultado = alunos.map(aluno => aluno.bolsista).reduce(function(acumulador,atual){
    return acumulador && atual
}, true)
console.log(resultado)

// Desafio 2: Algum aluno é bolsista?
const AlgumBolsista = alunos.map(aluno => aluno.bolsista).filter(bolsista => bolsista).reduce((acumulador, atual) => acumulador || atual, false)
console.log(AlgumBolsista)

const bolsistas = alunos
    .filter(aluno => aluno.bolsista) // Filtrar apenas os bolsistas (onde bolsista é true)
    .map(aluno => aluno.nome); // Mapear para obter apenas os nomes dos bolsistas
console.log(bolsistas)

// Desafio 1 Professor: Todos os alunos são bolsisrta?
const todosbolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosbolsistas))

// Desafio 2 Professor: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
