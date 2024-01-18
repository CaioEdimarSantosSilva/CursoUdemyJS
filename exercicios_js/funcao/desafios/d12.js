function fatorial(valor) {
    if (valor === 0 || valor === 1) {
        return 1
    } else {
        return valor * fatorial(valor - 1)
    }
}
const valor = 5
console.log(`O valor ${5} tem como fatorial o ${fatorial(valor)}`)