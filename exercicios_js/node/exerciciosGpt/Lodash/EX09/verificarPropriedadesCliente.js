const verificar = require('./verificarPropriedades')

let arrayObjeto = [


    {
        nome: 'Zapidos',
        tipo: 'Elétrico',
        Alfa: 'Não',
        lendario: true
    },
    {
        nome: 'Entei',
        tipo: 'Fogo',
        Alfa: 'Não',
        lendario: true
    }
]

const v = verificar.verificarPropriedadeEmObjetos(arrayObjeto)

if(v === false){
    console.log('Na sua party nem todos os pokemons são Lendarios!')
}
else{
    console.log('Na sua party todos os pokemons são Lendarios!')
}
