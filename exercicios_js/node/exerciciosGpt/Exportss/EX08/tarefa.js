class Tarefa {
    constructor(lista){
        this.lista = []
    }

    adicionar(tarefa){
        this.lista.push(tarefa)
        console.log(`A tarefa ${tarefa} foi adicionada!`)
    }
    remover(tarefa){
         this.lista.splice(this.lista.indexOf(tarefa))
         console.log(`A tarefa ${tarefa} foi removida!`)

    }
    listarTarefas(){
        const listaTarefa = this.lista
        console.log(`Essa é sua lista de tarefas: ${listaTarefa}!`)
    }
}

module.exports = Tarefa

