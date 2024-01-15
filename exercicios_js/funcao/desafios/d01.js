function calculos (n1 = 1, n2 = 1){
    let soma = n1 + n2
    let subtração = n1 - n2
    let multiplicação = n1 * n2
    let divisão = n1 / n2
    console.log(`A soma dos valores ${n1} e ${n2} é ${soma}`)
    console.log(`A subtração dos valores ${n1} e ${n2} é ${subtração}`)
    console.log(`A multiplicação dos valores ${n1} e ${n2} é ${multiplicação}`)
    console.log(`A divisão dos valores ${n1} e ${n2} é ${divisão.toFixed(2)}`)

}
calculos(2, 3)