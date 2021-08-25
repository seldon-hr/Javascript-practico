const list1 = [
    100,
    200,
    300,
    500,
]


function calcularMediaArimetica(list) {
    const sumaList = list.reduce(
        (acum = 0, valor) => (acum + valor)
        ) //Suma con método reduce.

    const promedioList = sumaList /list.length
    
    return promedioList
}