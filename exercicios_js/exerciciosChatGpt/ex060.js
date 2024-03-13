const simboloMais = quantidade => {
    const todosMais = []
    for(contador = 1; contador <= quantidade; contador++){
        todosMais.push("+")
    }
    return console.log(todosMais.join(""))
}
simboloMais(2) // retorna ++
simboloMais(4) // retorna ++++