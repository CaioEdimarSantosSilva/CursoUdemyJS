Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

// Array de aprovados
const aprovados = ['Caio', 'Lorax', 'Kdu', 'Pedro']

// Usando o forEach2
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

