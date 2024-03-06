// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora.O retorno da função deve ser string"Salario igual a R$ X", é o quanto o funcionário ganhou no mês.

const calcularSalario = (horas, pagamento) => console.log(`Salario igual a R$ ${horas * pagamento}`)
calcularSalario(150, 40.5)