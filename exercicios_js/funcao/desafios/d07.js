function Bhaskara(a, b, c){
    const delta = b**2 -4 * a * c
    console.log(`O delta é ${delta}`)
    if (delta >= 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)
    
        console.log(`[${x1}, ${x2}]`)
        
    } else {
        console.log("Delta Negativo")
    }

}

Bhaskara(1, 12, -13)

