function moeda(valor=1){
    console.log(`Real = R$${valor.toFixed(2).replace('.',',')}`)
    console.log(`Euro = €${valor.toFixed(2).replace('.',',')}`)
    console.log(`Dólar = $${valor.toFixed(2).replace('.',',')}`)
    
}
moeda(53.33333)
