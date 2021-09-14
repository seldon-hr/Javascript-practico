//Feautures Helpers
function esPar(numero) {
    return (numero % 2 === 0)
}

function calcularMediaAritmetica(list) {
    const sumaList = list.reduce(
        (acum = 0, valor) => (acum + valor)
        ) 

    const promedioList = sumaList /list.length
    
    return promedioList
}

//Calculate Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)
  
    if (esPar(lista.length)) {
      const personaMitad = lista[mitad - 1]
      const personaMitad2 = lista[mitad]
  
      const mediana = calcularMediaAritmetica([personaMitad, personaMitad2])
      return mediana
    } else {
      const personaMitad = lista[mitad]
      return personaMitad
    }
  }


//Mediana General
const salarios = colombia.map(
    function (persona) {
        return persona.salary
    }
)

const salariosSorted = salarios.sort(
    function (salaryA, salaryB) {
        return salaryA -salaryB
    }
)


const medianaGeneral = medianaSalarios(salariosSorted)


//Meidana del top 10%


const spliceStart = (salariosSorted.length * 90) / 100
const spliceCount = salariosSorted.length - spliceStart

const salariosTop10 = salariosSorted.splice(
    spliceStart,
    spliceCount,
)

const medianaTop10 = medianaSalarios(salariosTop10)


console.log({
    medianaGeneral,
    medianaTop10,
})