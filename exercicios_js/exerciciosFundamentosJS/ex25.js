/** A fim de criar um mecanismo de busca para sua aplicação, você precisar iniciar criando uma função para identificar palavras semelhantes. 
 * Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. a função deverá filtrar as palabras do array que contêm nelas a string do primeiro parâmetro.
 
buscarPalavrasSemelhantes("pro", ["programaçãop", "mobile", "profissional"]) // retornará ["programação","profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
*/

const buscarPalavrasSemelhantes = (teste, lista) => {
    console.log(lista.filter(function(palavra){
        return palavra.includes(teste)
    }))
}
buscarPalavrasSemelhantes("pro", ["programaçãop", "mobile", "profissional"]) // retornará ["programação","profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
