const precioOriginal = 100
const descuento = 15
const precioConDescuento = (precioOriginal - descuento)

console.log({
    precioOriginal,
    descuento,
    precioConDescuento
})

function btnCalcular(){
    const precio = document.getElementById("precioId")
    const p = precio.value
    const descuento = document.getElementById("descuentoId")
    const d = descuento.value

    const calcular = p - d

    const info = document.getElementById("ResultP")
    info.innerText = "El precio a pagar es: " + calcular
}