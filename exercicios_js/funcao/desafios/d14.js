function frutas(fruta = '') {
    switch (fruta.toLowerCase()) {
        case 'maçã':
            console.log(`Não vendemos ${fruta} aqui.`)
            break
        case 'kiwi':
            console.log(`Estamos com escassez de ${fruta}.`)
            break
        case 'melancia':
            console.log(`Aqui a ${fruta} está, são 3 reais o quilo.`)
            break
        default:
            console.log(`Erro, o ${fruta} não tem.`)
            break
    }
}

frutas('maçã')
frutas('kiwi')
frutas('melancia')
frutas('Marmitex')

