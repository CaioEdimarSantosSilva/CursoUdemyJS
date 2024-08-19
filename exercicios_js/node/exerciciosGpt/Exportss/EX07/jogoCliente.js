const jogo = require('./jogo')
const _ = require('lodash')

let jogador = new jogo.Jogador(_.random(1, 20))
let inimigo = new jogo.Inimigo(_.random(1, 20))

let jogo0 = new jogo.Jogo()
jogo0.calcular(jogador,inimigo)