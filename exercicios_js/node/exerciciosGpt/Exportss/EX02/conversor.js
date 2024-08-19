
this.converterParaCelsius = (valor, unidadeMedida) => {
    if (unidadeMedida == 'F') {
        return (valor - 32) * 5/9
    }
    else if (unidadeMedida == 'K') {
        return valor - 273.15
    }
    else {
        return 'Coloque uma unidade de medida'
    }

}
this.converterParaFahrenheit = (valor, unidadeMedida) => {
    if (unidadeMedida == 'C') {
        return  valor * 1.8 + 32
    }
    else if (unidadeMedida == 'K') {
        return  (valor - 273.15) * 9/5 + 32
    }
    else {
        return 'Coloque uma unidade de medida'
    }
}
this.converterParaKelvin = (valor, unidadeMedida) => {
    if (unidadeMedida == 'C') {
        return valor + 273.15
    }
    else if (unidadeMedida == 'F') {
        return (valor - 32) * 5/9 + 273.15 
    }
    else {
        return 'Coloque uma unidade de medida'
    }
}
