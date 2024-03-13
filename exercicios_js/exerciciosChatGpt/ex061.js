const primeiroUltimo = lista => {
    const resultado = []
    resultado.push(lista[0], lista[lista.length - 1])
    return console.log(resultado)
}
primeiroUltimo([7, 14, "olá"])
primeiroUltimo([-100, "aplicativo", 16])