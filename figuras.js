//Square Code
console.group('Square')
const ladoCuadrado = 5
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado * 4
console.log(`El perímetro del cuadrado es ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`)
console.groupEnd()

//Triangle Code
console.group('Triangle')
const sideTriangle1 = 6
const sideTriangle2 = 6
const baseTriangle = 4
const heightTriangle = 5.5

console.log(
    `Los lados del triángulo miden: 
    ${sideTriangle1}cm, 
    ${sideTriangle2}cm, 
    ${baseTriangle}cm`)
console.log(`El altura del triángulo es: ${heightTriangle}cm`)

const perimetroTrinagle = sideTriangle1 + sideTriangle2 + baseTriangle
console.log(`El perímetro del tríangulo es: ${perimetroTrinagle}cm`)

const areaTriangle = (baseTriangle * heightTriangle) / 2
console.log(`El área del triángulo es: ${areaTriangle}cm^2`)

console.groupEnd()

//Circle Code
console.group('Circle')
//Radio
const radioCircle = 4
console.log(`El radio del círculo es: ${radioCircle}cm`)
//Diameter
const diameterCircle = radioCircle * 2
console.log(`El diámetro es: ${diameterCircle}cm`)
//PI
const PI = Math.PI
console.log(`PI: ${PI}`)
//Circumference
const  perimetroCircle = diameterCircle * PI
console.log(`El perímetro de la circunferencia es: ${perimetroCircle}cm`)
//Area
const areaCircle = (radioCircle * radioCircle) * PI
console.log(`El área del círculo es: ${areaCircle}`)



console.groupEnd()