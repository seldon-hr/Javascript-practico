//Square Code
console.group('Square')
// const ladoCuadrado = 5
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)

function perimetroCuadrado(lado) {
    return lado * 4
} 

// console.log(`El perímetro del cuadrado es ${perimetroCuadrado}cm`)

// const areaCuadrado = ladoCuadrado * ladoCuadrado
function areaCuadrado(lado) {
    return lado * lado
}
// console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`)
console.groupEnd()

//Triangle Code
console.group('Triangle')
// const sideTriangle1 = 6
// const sideTriangle2 = 6
// const baseTriangle = 4
// const heightTriangle = 5.5

// console.log(
//     `Los lados del triángulo miden: 
//     ${sideTriangle1}cm, 
//     ${sideTriangle2}cm, 
//     ${baseTriangle}cm`)
// console.log(`El altura del triángulo es: ${heightTriangle}cm`)

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