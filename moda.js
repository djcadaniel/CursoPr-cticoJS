const listax = [
    4,
    8,
    7,
    5,
    7,
    3,
    7,
    5,
    8,
    7,
    3,
    3,
    3,
    7
]

/*Obeteniendo la moda con una función*/
function rptaModa(lista){
    const listaCount = {}
    lista.map(elemento => {
        if(listaCount[elemento]){ //si este elemento ya existe
            listaCount[elemento] += 1
        }else{
            listaCount[elemento] = 1
        }
    })
    const listaArray = Object.entries(listaCount).sort((a,b) => {
        return a[1] - b[1] //estoy ordenando ascendentemente
    }) //con object entries convertirmos a un array a listaCount
    
    const moda = listaArray[listaArray.length - 1]
    return moda
}