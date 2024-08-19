const _ = require('lodash')


module.exports = {
    filtrarEOrdenar(array, numero){
         const novoArray = []
        _.filter(array, function(valor){ 
            if(valor > numero){
               return novoArray.push(valor)
            }
        })
        console.log(_.orderBy(novoArray))
    }
}