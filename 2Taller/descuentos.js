// const precioOriginal = 120
// const descuento = 18

function calculardescuentos(FirstDescuento, SegundoDescuento) {
    const descuentos = []
    descuentos.push(FirstDescuento)
    descuentos.push(SegundoDescuento)

    const sumaDescuentos = descuentos.reduce((a, b) => a + b)
    const productoDescuentos = descuentos.reduce((a, b) => a * b)
    //Function reduce; a take the first value, and b the second,
    //but if there another value a take the value of a + b and b take the third value
    // and so on, so on.
    const descuentoTotal = (sumaDescuentos) - (productoDescuentos/100)
    
    return descuentoTotal

}

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('InputPrice')
    const priceValue = parseInt(inputPrice.value)
    
    const inputFirstDiscount = document.getElementById('FirstDiscount')
    const priceFirstDiscount = parseInt(inputFirstDiscount.value)
    const inputSecondDiscount = document.getElementById('SecondDiscount')
    const priceSecondDiscount = parseInt(inputSecondDiscount.value)

    const descuentoTotal = calculardescuentos(priceFirstDiscount, priceSecondDiscount)
    

    const preicioConDescuento = calcularPrecioConDescuento(priceValue, descuentoTotal)

    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = `El precio con descuento son $${preicioConDescuento}`
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

