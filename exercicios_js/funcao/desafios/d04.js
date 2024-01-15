function restoDivisão(dividendo, divisor){
    let divisao = Math.floor(dividendo / divisor)
    let restoDivisao = dividendo % divisor
    console.log(`A divisão do dividendo ${dividendo} e do divisor ${divisor} é ${divisao}`)
    console.log(`O resto da divisão do dividendo ${dividendo} e do divisor ${divisor} é ${restoDivisao}`)
}
restoDivisão(5,2)