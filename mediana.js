function mediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

const lista = [
    100,
    200,
    8000,
    2000,
    500,
    200
]

const mitadLista = parseInt(lista.length / 2)

function esPar(numerito){
    if(numerito % 2 == 0){
        return true
    }else{
        return false
    }
}
let mediana;
if(esPar(lista.length)){
    const elemento1 = lista[mitadLista - 1]
    const elemento2 = lista[mitadLista]

    const promedioElemento1y2 = mediaAritmetica([
        elemento1,
        elemento2
    ])
    mediana = promedioElemento1y2;
}else{
    mediana = lista[mitadLista]
}