/**Escreva uma função arrow que receba um número e retorne true se ele
for positivo e false se for negativo. */

const valorPositivo = (valor) => {
    console.log(`Se esse valor ${valor} for positivo vai ser verdadeiro`)
    if(valor > 0){
        return true
    }
    else if (valor < 0){
        return false
    }
}

console.log(valorPositivo(3))


