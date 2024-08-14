const conversor = require('./conversor')

console.log(`A temperatura de 82°F em Celsius é ${conversor.converterParaCelsius(82, 'F').toFixed(2)}°C`)
console.log(`A temperatura de 82°K em Celsius é ${conversor.converterParaCelsius(82, 'K').toFixed(2)}°C`)


console.log(`A temperatura de 82°C em Fahrenheit é ${conversor.converterParaFahrenheit(82, 'C').toFixed(2)}°F`)
console.log(`A temperatura de 82°K em Fahrenheit é ${conversor.converterParaFahrenheit(82, 'K').toFixed(2)}°F`)

console.log(`A temperatura de 82°C em kelvin é ${conversor.converterParaKelvin(82, 'C').toFixed(2)}°K`)
console.log(`A temperatura de 82°F em Kelvin é ${conversor.converterParaKelvin(82, 'F').toFixed(2)}°K`)
