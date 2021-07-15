//Square Code
console.group('Square')

function perimetroCuadrado(lado) {
    return lado * 4
} 

function areaCuadrado(lado) {
    return lado * lado
}
console.groupEnd()

//Triangle Code
console.group('Triangle')

function perimetroTrinagle (side1, side2, base) {
    return side1 + side2 + base
}

function areaTriangle(base, height) {
    return (base * height) / 2
}

console.groupEnd()

//Circle Code
console.group('Circle')
//Radio

//Diameter
function diameterCircle(radio){
   return radio * 2 
}
//PI
const PI = Math.PI
console.log(`PI: ${PI}`)
//Circumference
function perimetroCircle (radio) {
    const diameter = diameterCircle(radio)
    return diameter * PI
}
//Area
function areaCircle (radio) {
    return (radio * radio) * PI
}

console.groupEnd()

//Start connect to HTML

//Square

function calcularPerimetroSquare() {
    const input = document.getElementById("InputSquare")
    const value = input.value //Recibimos solo el valor que pedimos arriba.

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calculaAreaSquare() {
    const input = document.getElementById("InputSquare")
    const value = input.value 

    const area = areaCuadrado(value)
    alert(area)
}

//Triangle

function calcularPerimetroTriangle() {
    const inputSide1 = document.getElementById("InputSTriangleSide1")
    const valueSide1 = parseInt(inputSide1.value)

    const inputSide2 = document.getElementById("InputSTriangleSide2")
    const valueSide2 = parseInt(inputSide2.value)

    const inputBase = document.getElementById("InputTriangleBase")
    const valueBase = parseInt(inputBase.value)

    const perimetro = perimetroTrinagle(valueSide1, valueSide2, valueBase)
    alert(perimetro)
}

function calculaAreaTriangle() {

    const inputHeight = document.getElementById("InputTriangleHeight")
    const valueHeight = parseInt(inputHeight.value)

    const inputBase = document.getElementById("InputTriangleBase")
    const valueBase = parseInt(inputBase.value)

    const area =  areaTriangle(valueBase, valueHeight)
    alert(area)
}

//Square

function calcularPerimetroCircle() {
    const input = document.getElementById("InputCircle")
    const value = input.value

    const perimetro = perimetroCircle(value)
    alert(perimetro)
}

function calculaAreaSquareCircle() {
    const input = document.getElementById("InputCircle")
    const value = input.value

    const area = areaCircle(value)
    alert(area)
}