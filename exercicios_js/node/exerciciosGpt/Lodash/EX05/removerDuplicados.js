const _ = require('lodash')


this.removerDuplicadosArray = array => _.uniq(array)

this.removerDuplicadosObjeto = array => _.uniqBy(array, 'nome')