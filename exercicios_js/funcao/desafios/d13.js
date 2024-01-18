function dias(dia){
    switch(dia){
        case 1: case 7:
            console.log(`O dia ${dia} é fim de semana!`)
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log(`O dia ${dia} é dia útil!`)
            break
        default:
            console.log(`O dia ${dia} é dia invalido!`)
            break 
    }
}
dias(1)
dias(5)
dias(9)