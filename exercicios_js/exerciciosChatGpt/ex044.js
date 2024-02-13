/**Desenvolva uma função construtora para criar objetos ContaBancaria com propriedades como titular, saldo e tipo. */

function ContaBancaria(titular, saldo, tipo) {
    this.titular = titular
    this.saldo = saldo
    this.tipo = tipo
}
let suaContaBancaria = new ContaBancaria("Buda", 0, "Conta corrente")
console.log(suaContaBancaria)