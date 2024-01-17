function jurosSimples(inicial=1, taxa=1, aplicacao=1) {
    let calculo1 = inicial * (1 + taxa * aplicacao)
    console.log(`O montante da aplicação financeira sob o regime de juros simples é ${calculo1.toFixed(2)}`)
}

function jurosComposto(inicial=1, taxa=1, aplicacao=1) {
    let calculo2 = inicial * (1 + taxa)**aplicacao
    console.log(`O valor da aplicação sob o regime de juros compostos é ${calculo2.toFixed(2)}`)
}

jurosSimples(1000,0.13,5)
jurosComposto(1000,0.13,5)