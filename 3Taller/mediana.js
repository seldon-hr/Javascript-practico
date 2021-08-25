const list = [
    4,
    2,
    5,
    1,
    3
]

function ordenarArray(list) {
    list.sort(
        (a,b) => a - b)
    return list
}



function calcularMediana(list) {
    const list = ordenarArray(list)
    const midleList = parseInt(list.length / 2)
    let mediana

    if (esPar(list.length)) {
        const elemento1 = list[midleList - 1]
        const elemento2 = list[midleList]

        const promedioElemento1y2 = calcularMediaArimetica([
            elemento1,
            elemento2
        ])

        mediana = promedioElemento1y2
        return mediana

    } else {
        mediana = list[midleList]
        return mediana
    }
}


function esPar(numero) {
    if(numero % 2 === 0){
        return true
    } else {
        return false
    }
}





function calcularMediaArimetica(list) {
    const sumaList = list.reduce(
        (acum = 0, valor) => (acum + valor)
        ) //Suma con método reduce.

    const promedioList = sumaList /list.length
    
    return promedioList
}