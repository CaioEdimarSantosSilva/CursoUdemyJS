/**Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console. */

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

console.log(`VetorPilha = [${vetorPilha.join(', ')}]`)

for(indice in vetorAdiciona){
    vetorPilha.push(vetorAdiciona[indice])
}

console.log(`VetorPilha com VetorAdicional = [${vetorPilha.join(', ')}]`)