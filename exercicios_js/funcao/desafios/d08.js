const stringPontuacoe = "10 20 20 8 25 3 0 30 10"
const pontuacao = stringPontuacoe.split(' ').map(Number)
let maior = pontuacao[0]
let menor = pontuacao[0]
let quebrouRecorde = [0, 0];

for(let indice = 1; indice < pontuacao.length; indice++){
    if(maior < pontuacao[indice]){
        maior = pontuacao[indice]
        quebrouRecorde[0]++;
    }else if (menor > pontuacao[indice]){
        menor = pontuacao[indice]
        quebrouRecorde[1] = indice + 1; 
    }
}
console.log(quebrouRecorde)
