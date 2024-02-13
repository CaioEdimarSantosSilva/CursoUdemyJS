/**Crie uma função construtora para objetos Aluno com propriedades como nome, matricula e curso. */

function Aluno(nome, matricula, curso) {
    this.nome = nome
    this.matricula = matricula
    this.curso = curso
}
const novoAluno = new Aluno("Xamis", 125000, "Filosofia")
console.log(novoAluno)