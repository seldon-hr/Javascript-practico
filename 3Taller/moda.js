const list = []

function calcularModa(list) {
    const listCount = {}

    list.map(
        function (elemento) {
            if(listCount[elemento]) {
                listCount[elemento] += 1
            } else {
                listCount[elemento] = 1
            }
            
        }
    )

    const listArray = Object.entries(listCount).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    )

    const moda = listArray[listArray.length-1]

    return moda

}

