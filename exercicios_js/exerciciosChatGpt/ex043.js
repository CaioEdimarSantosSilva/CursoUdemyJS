/**Crie uma função construtora para representar um objeto Livro com propriedades como titulo, autor e anoPublicacao. */

function Livro(titulo, autor, anoPublicacao) {
    this.titulo = titulo
    this.autor = autor
    this.anoPublicacao = anoPublicacao
}
let novoLivro = new Livro("O Hobbit", "J. R. R. Tolkien", 1937)
console.log(novoLivro)