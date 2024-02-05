function indentificar( nome, idade) {
    if (idade <= 0 || idade > 120) {
        console.log(`Essa idade nao existe${idade}`)
    } else if (idade <= 10 && idade > 0) {
        console.log(`${nome} tem ${idade} e vai pagar R$ 180,00`)
    } else if (idade <= 30 && idade > 10) {
        console.log(`${nome} tem ${idade} e vai pagar R$ 150,00`)
    } else if(idade >= 30 && idade < 60) {
        console.log(`${nome} tem ${idade} e vai pagar R$ 195,00`)
    } else if(idade > 60) {
        console.log(`${nome} tem ${idade} e vai pagar R$ 230,00`)
    }
}
indentificar(idade = -1)
indentificar('maria', 5)
indentificar('carlos', 17)
indentificar('tereza',55)
indentificar('cleide',67)
