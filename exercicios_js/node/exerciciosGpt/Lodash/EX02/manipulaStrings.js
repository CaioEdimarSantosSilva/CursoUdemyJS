const {capitalize, camelCase,  kebabCase} = require('lodash')


module.exports = {
    capitalizar(string){
        return capitalize(string)
    },
    juntarMaiuscula(string){
        return camelCase(string)
    },
    juntarComHifen(string){
        return kebabCase(string)
    }
}