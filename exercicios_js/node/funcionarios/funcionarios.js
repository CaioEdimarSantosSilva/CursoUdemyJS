const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data
    

    // mulher chinesa com menor salario?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})


/*
axios.get(url).then(response => {
    const funcionarios = response.data
    let mulheresChinesas = []
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].pais === "China" && funcionarios[i].genero === "F") {
            mulheresChinesas.push(funcionarios[i])
        }
    }
    const mulherChinesaMenorSalario = mulheresChinesas.reduce((menor, atual) => {
        return atual.salario < menor.salario ? atual : menor
    })
    console.log(mulherChinesaMenorSalario)
})
*/




