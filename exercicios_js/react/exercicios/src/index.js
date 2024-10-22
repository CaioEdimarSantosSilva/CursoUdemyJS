import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// Crie uma raiz para o elemento DOM
const root = ReactDOM.createRoot(document.getElementById('root'))

// Use o método render da nova API
root.render(<div>
    <Pai nome="Paulo" sobrenome="Silva">
        <Filho nome="Pedro"/>
        <Filho nome="Paulo"/>
        <Filho nome="Carla"/>
    </Pai>
</div>)




