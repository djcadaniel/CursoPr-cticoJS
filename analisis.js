//Helpers
function esPar(n){
    return (n % 2 === 0) //automaticamente te da true, si no cumple te da false
}
//Calculadora mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2)

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad] - 1
        const personaMitad2 = lista[mitad]
        const mediana = mediaAritmetica([personaMitad1,personaMitad2])
        return mediana
    }else{
        const personaMitad = lista[mitad]
        return personaMitad
    }
}
//Mediana general
const salariosPeru = colombia.map(personita => personita.salary)

const salOrdenado = salariosPeru.sort((a,b)=> a - b)

function mediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}


//Mediana del top 10%

const spliceStart = (salOrdenado.length * (90) / 100)
const spliceCount = salOrdenado.length - spliceStart

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
    ) //splice corta
    
const medianaGeneralCol = medianaSalarios(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col
})