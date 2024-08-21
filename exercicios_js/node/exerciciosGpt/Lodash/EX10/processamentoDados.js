const _ = require('lodash')


this.processarDados = arrayObjeto => _.groupBy(_.filter(_.sortBy(arrayObjeto, 'nivel'), 'alfa'), 'tipo')