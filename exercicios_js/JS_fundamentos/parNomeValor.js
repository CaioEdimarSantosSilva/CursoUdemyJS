// par nome/valor
const suadacao = ' Opa' // contexto léxico 1

function exec() {
    const suadacao = 'Falaa' // contexto léxico 2
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(suadacao)
console.log(exec())