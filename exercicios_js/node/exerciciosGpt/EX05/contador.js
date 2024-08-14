class Contador {
    static totalInstancias = 0

    constructor() {
        Contador.totalInstancias += 1
    }

    static incrementar() {
        return Contador.totalInstancias
    }
}

module.exports = Contador
