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

