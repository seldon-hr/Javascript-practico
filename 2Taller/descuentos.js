// const precioOriginal = 120
// const descuento = 18


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('InputPrice')
    const priceValue = inputPrice.value
    const inputDiscount = document.getElementById('InputDiscount')
    const priceDiscount = inputDiscount.value

    const preicioConDescuento = calcularPrecioConDescuento(priceValue, priceDiscount)

    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = `El precio con descuento son $${preicioConDescuento}`
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })