const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas Personales",
        note: 7,
        credit: 5,
    },
]

/*Creaaremos un nuevo arreglo de solo números a partir de mu
multiplicar cada nota con sus créditos */

const notesWithCredit = notes.map(
    function (noteObject){
        return noteObject.note * noteObject.credit
    }
)

/*Sumar todos los elementos del arreglo de elementos
multiplicados por su peso. */

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal
    }
)

/*Sumar todos los pesos (créditos) */

const credits = notes.map(function (noteObject){
    return noteObject.credit
})

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal
    }
)

/* Hacer la división entre ambosas sumas */

const promedioPonderadNotasConCreditos = sumOfNotesWithCredit /sumOfCredits
