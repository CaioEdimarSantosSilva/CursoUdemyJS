/**Crie uma arrow function que receba dois arrays e retorne um novo 
array que contenha os elementos em comum entre os dois arrays.*/

const lista1 = [1, 2, 3, 4, 6]
const lista2 = [1, 3, 4, 5, 6]
const lista3 = []
const emComum = (array1, array2) => {
    for (indice1 in array1) {
        for (indice2 in array2) {
            if (array1[indice1] === array2[indice2]) {
                lista3.push(array1[indice1])
            }
        }
    }
    console.log(lista3)
}
emComum(lista1, lista2)
