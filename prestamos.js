function calcular(m,c){
    let calculo = m / c;
    return calculo
}

function montoxDia(){
    const montoHtml = document.getElementById("montoId")
    const monto = montoHtml.value
    const cuotaHtml = document.getElementById("cuotaId")
    const cuota = cuotaHtml.value
    const rpta = calcular(monto,cuota)

    const textCalculo = document.getElementById("diaId")
    textCalculo.innerText = "Es: " + rpta
}