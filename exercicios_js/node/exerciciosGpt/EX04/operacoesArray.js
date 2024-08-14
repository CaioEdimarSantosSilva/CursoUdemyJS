module.exports = {
    adicionarElemento(array, elemento) {
        array.push(elemento)
    },
    removerElemento(array, indice) {
        array.splice(indice, 1)
    },
    buscarElemento(array, indice) {
        return array[indice]
    }
}