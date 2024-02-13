/**Desenvolva uma função construtora para criar objetos Funcionario com propriedades como nome, cargo e salario. */

function Funcionario(nome, cargo, salario) {
    this.nome = nome
    this.cargo = cargo
    this.salario = salario
}
const novoFuncionario = new Funcionario("Cleberson","Atendente", 2500)
console.log(novoFuncionario)