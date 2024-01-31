/**6 Escreva uma arrow function que receba um valor em reais e 
*retorne o equivalente em dólares, considerando uma taxa de câmbio fixa.*/

const moedas = (real) => {
    let dolar = real * 4.94
    let euro = real * 5.35
    let iene = real * 29.70
    console.log(`O valor de R$${real.toFixed(2).replace('.',',')} em dolares é $${dolar.toFixed(2).replace('.',',')}`)
    console.log(`O valor de R$${real.toFixed(2).replace('.',',')} em euros é €${euro.toFixed(2).replace('.',',')}`)
    console.log(`O valor de R$${real.toFixed(2).replace('.',',')} em Ienes é ¥${iene.toFixed(2).replace('.',',')}`)
}

moedas(1)