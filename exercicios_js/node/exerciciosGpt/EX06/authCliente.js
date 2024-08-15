const auth = require('./auth')

const usuario = {
    email: 'generico@gmail.com', 
    senha: 'ArroCom_0v0'
}
const usuario2 = {
    email: 'generico2@gmail.com',
    senha: 'dozetrinta5'
}

console.log(auth.login(usuario))
console.log(auth.login(usuario2))

console.log(auth.logout(usuario))

/* const { login, logout } = require('./auth.js')

const usuario = {
    nome: 'admin',
    senha: '1234',
}

// Realiza o login
if (login(usuario)) {
    console.log('Usuário logado com sucesso!')
} else {
    console.log('Erro ao realizar o login.')
}

// Realiza o logout
logout()*/

