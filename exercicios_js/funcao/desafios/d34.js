/**Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
 */
function strings(valor1, valor2) {
    const string1 = valor1.toLowerCase()
    const string2 = valor2.toLowerCase()
    if ((string1) === (string2)) {
        return true
    }else {
        return false
    }
}
console.log(`${strings('Pedro', 'pedro')}`)
console.log(`${strings('Pedro', 'Lorax')}`)

