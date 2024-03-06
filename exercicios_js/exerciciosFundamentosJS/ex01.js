// Crie uma função que retorna a string "Olá", concatenada com um argumento text ( a ser passado parra a função) e com ponto de exclamação "!" no final.

const comprimentar = pessoa => `Olá, ${pessoa}!`
console.log(comprimentar("Clebersons"))

const comprimentar2 = pessoa => 'Olá,' + pessoa + '!'
console.log(comprimentar2("Clebersons"))

const comprimentar3 = pessoa => console.log('Olá,' + pessoa + '!')
comprimentar3("Clebersons")

const comprimentar4 = pessoa => {
    return console.log('Olá,' + pessoa + '!')
}
comprimentar4("Clebersons")