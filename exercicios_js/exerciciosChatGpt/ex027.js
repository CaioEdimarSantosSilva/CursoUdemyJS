/**Crie uma arrow function que receba dois objetos como
parâmetros e retorne um novo objeto com as propriedades
dos dois objetos combinadas. */
const primeiroObjeto = { lanche: 'xbacon', refrigerante: 'Gás-Cola' }
const segundoObjeto = { lasanha: 'quatro queijos', sorvete: 'morango' }
const terceiroObjeto = {}
const mistura = (obj1, obj2) => {
    for (indice in obj1) {
        terceiroObjeto[indice] = obj1[indice]
    }
    for (indice2 in obj2) {
        terceiroObjeto[indice2] = obj2[indice2]
    }
    console.log('teceiroObjeto:')
    return terceiroObjeto
}

console.log(mistura(primeiroObjeto, segundoObjeto))










/**const primeiroObjeto = {lanche: 'xbacon', refrigerante: 'Gás-Cola'}
const segundoObjeto = {lasanha: 'quatro queijos', sorvete: 'morango'}
const terceiroObjeto = {}
const mistura = (obj1, obj2) => {
    terceiroObjeto.objeto1 = obj1
    terceiroObjeto.objeto2 = obj2
    console.log('objeto3:')
    return terceiroObjeto
}

console.log(mistura(primeiroObjeto, segundoObjeto)) */
