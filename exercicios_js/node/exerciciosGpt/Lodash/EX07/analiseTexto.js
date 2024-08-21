const _ = require('lodash')

this.contarPalavras = frase => _.split(frase, ' ').length

this.contarCaracteres = frase => _.replace(frase, /\s/g, '').length

this.encontrarPalavraMaisLonga = frase =>  _.maxBy(_.split(frase, ' '),'length')
