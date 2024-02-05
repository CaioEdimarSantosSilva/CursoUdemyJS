function triangulos(n1 = 1, n2 = 1, n3 = 1) {
    if (n1 == n2 && n2 == n3) {
        console.log(`O triangulo com os lados ${n1}, ${n2} e ${n3} é Triangulo Equilátero`)
    } else if (n1 == n2 || n2 == n3) {
        if (n1 != n2 || n2 != n3) {
            console.log(`O triangulo com os lados ${n1}, ${n2} e ${n3} é Triangulo Isósceles`)
        }
    }
    else if (n1 != n2 && n2 != n3) {
        console.log(`O triangulo com os lados ${n1}, ${n2} e ${n3} é Triangulo Escaleno`)
    }

}
triangulos(2, 2, 2)
triangulos(2, 3, 3)
triangulos(2, 3, 4) 
