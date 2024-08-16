const tarefa = require('./tarefa')

const instancia = new tarefa()
instancia.adicionar('estudar')
instancia.adicionar('trabalhar')
instancia.adicionar('dormir')

instancia.remover('dormir')

instancia.listarTarefas()