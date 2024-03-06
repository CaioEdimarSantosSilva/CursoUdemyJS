/**Crie uma funcao que receba 4 numeros como parametro(numero, minimo, maximo, inclusivo) e retorne se o parametro numero ( o primeiro) esta entre o minimo e o maximo. Quando o parametro, inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou maximo. caso o parametro inclusivo nao seja informado, seu valor padrao devera ser false, portanto, a logica sera exclusiva, nao considerando se o numero é igual a minimo ou a maximo
 
Exemplos:
estaEntre(10, 50, 100) // retornara true
estaEntre(16, 100, 160) // retornara false
estaEntre(3, 3, 150) // retornara false
estaEntre(3, 3, 150, true) // retornara true
*/

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo
        return numero > minimo && numero < maximo
    }
console.log(estaEntre(10, 50, 100))       // true
console.log(estaEntre(16, 100, 160))      // false
console.log(estaEntre(3, 3, 150))         // false
console.log(estaEntre(3, 3, 150, true))   // true