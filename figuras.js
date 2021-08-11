//Código del cuadrado
console.group("Cuadrados")
const l = 5;
// console.log(`el lado al cuadrado es: ${l}`)
const perimetro = l * 4
function periCuadrado(l){
    return l * 4
}
console.log(`el perímetro del cuadrado es: ${perimetro}`)
console.groupEnd()

//Código del triángulo
console.group("Triángulo")
const a = 5;
const b = 3;
console.log(`el lado del triangulo es: ${a} y la base es: ${b}`)

const peri = l * 3
console.log(`el perímetro del triángulo es: ${peri}`)
console.groupEnd()

//código del círculo
console.group("Círculo")
const PI = Math.PI
console.log("PI es: " + PI)
console.groupEnd()

//interactuan con html
function calcPeri(){
    const input = document.getElementById("idcuadrado")
    const value  = input.value
    const perimetro = periCuadrado(value)
    alert(perimetro)
}

function areaIsosceles(a,b){
    let area = a/4*(Math.sqrt(b))
    return area
}

function areaisos(){
    let ladoA = document.getElementById("ladoA")
    let valorA = ladoA.value
    let ladoB = document.getElementById("ladoB")
    let valorB = ladoB.value
    const c = areaIsosceles(valorA, valorB)
    // const area2 = areaIsosceles(valueIgual,valueDesigual)
    alert(c)
}