function notas(nota = 120) {
    if (nota > 100 || nota < 0) {
        console.log(`Nota ${nota}, invalida!`)
    } else if (nota < 38) {
        console.log(`Nota ${nota}, reprovada!`)
    } else {
        const notaFinal = Math.round(nota / 5) * 5
        console.log(`Nota ${notaFinal}, foi aprovado!`)
    }

}

notas(-1)
notas(3)
notas(37)
notas(42.3)
notas(73)
notas(68)
