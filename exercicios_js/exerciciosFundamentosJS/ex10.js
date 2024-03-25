// Elabore uma função que recebe um número como parâmetro e retorne uma string com o síbolo "+" na quantidade no parâmetro.

const simboloMais = quantidade => {
        let resultado = ""
        for(contador = 1; contador <= quantidade; contador++) {
            resultado += "+"
        }
        return console.log(resultado)
}
simboloMais(2)
simboloMais(4)