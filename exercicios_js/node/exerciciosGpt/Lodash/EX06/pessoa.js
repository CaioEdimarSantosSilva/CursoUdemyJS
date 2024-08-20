const _ = require('lodash')

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    saudar(){
        console.log('Ola Ninho!')
    }
    obterInicias(){
        console.log(_.map(_.split(this.nome,' '), letras => letras.charAt(0)).join('.'))  
    }

}
module.exports = Pessoa