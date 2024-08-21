const _ = require('lodash')

module.exports = {
    combinarArraysSemDuplicados(...arrays) {
        const novoArray = []
        const arrayModificado = _.uniq(arrays)
        for (index in arrayModificado) {
            novoArray.push(arrayModificado[index].join(''))
        }
        return novoArray
    }
}