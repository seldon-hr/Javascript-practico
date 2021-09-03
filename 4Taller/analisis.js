//Data
const salariosCol = colombia.map(
    function (persona) {
        return persona.salario
    }
)

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA -salaryB
    }
)

console.log(salariosCol)

//Feautures Helpers
function esPar(numero) {
    return (numero % 2 === 0)
}

function calcularMediaArimetica(list) {
    const sumaList = list.reduce(
        (acum = 0, valor) => (acum + valor)
        ) //Suma con método reduce.

    const promedioList = sumaList /list.length
    
    return promedioList
}

//Calculate Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.lenght / 2)

    if(esPar(lista.lenght)){
        const personaMitad = lista[mitad - 1]
        const personaMitad2 = lista[mitad]

        const mediana = calcularMediaArimetica(personaMitad, personaMitad2)
        return mediana
    } else {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

console.log(
    medianaSalarios(salariosColSorted)
)