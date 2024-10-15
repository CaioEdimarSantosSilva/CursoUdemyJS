import React from 'react'
import ReactDOM from 'react-dom'
import BomDia from './componentes/BomDia'



ReactDOM.render(<BomDia nome = 'Xamis' idade = {1}/>, document.getElementById('root'))

//Forma atual
//import React from 'react'
//import ReactDOM from 'react-dom/client'

//const elemento = <h1>React 2</h1>

// Crie uma raiz para o elemento DOM
//const root = ReactDOM.createRoot(document.getElementById('root'))

// Use o método render da nova API
//root.render(elemento)