class Jogador {
    constructor(valor){
        this.valor = valor
    }

}

class Inimigo {
    constructor(valor){
        this.valor = valor
    }

}

class Jogo {
    calcular(jogador, inimigo){
        if(jogador.valor < inimigo.valor){
            console.log('Jogador Venceu! (:')
        }
        else if(jogador.valor > inimigo.valor){
            console.log('Jogador Perdeu! ):')
        }
        else{
            console.log('Empate! |:')
        }
    }
}


module.exports = {
    Jogador,
    Inimigo,
    Jogo
}








