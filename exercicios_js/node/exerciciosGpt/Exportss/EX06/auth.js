
module.exports = {
    login(objetoUsuario) {
        if (objetoUsuario.email === 'generico@gmail.com' && objetoUsuario.senha === 'ArroCom_0v0') {
            return 'O login esta correto!'
        }
        else {
            return 'Email ou senha incorreto'
        }

    },
    logout(objetoUsuario){
        if (objetoUsuario.email === 'generico@gmail.com') {
            return 'O logout foi feito com sucesso!'
        }
        else {
            return 'Algo deu errado'
        }

    }
}
/*class Auth {

    login(usuario) {
        if (this.verificarUsuario(usuario)) {
            //console.log('Login realizado com sucesso!')
            return true
        } else {
            //console.log('Falha no login: Usuário ou senha incorretos.')
            return false
        }
    }

    logout() {
        console.log('Logout realizado com sucesso!')
        return true
    }

    verificarUsuario(usuario) {
        // Método fictício de verificação do usuário
        // Exemplo: Pode adicionar uma lógica para verificar se o usuário existe e se a senha está correta
        return usuario.nome === 'admin' && usuario.senha === '1234'
    }
}

const auth = new Auth()

module.exports = {
    login: auth.login.bind(auth),
    logout: auth.logout.bind(auth)
}*/