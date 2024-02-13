//Exemplo de Função construtora 
/**function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.descricao = function() {
        return this.marca + " " + this.modelo + " " + this.ano;
    };
}
// Para criar um novo objeto Carro usando a função construtora
var meuCarro = new Carro("Toyota", "Corolla", 2020);
// Acessando propriedades do objeto
console.log(meuCarro.marca); // Saída: Toyota
console.log(meuCarro.descricao()); // Saída: Toyota Corolla 2020 */

/**Crie uma função construtora para representar um objeto Pessoa com propriedades como nome, idade e profissao. */

function Pessoa(nome, idade, profissao) {
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
}
let novaPessoa = new Pessoa("Mario", 25, "Encanador")
console.log(novaPessoa)