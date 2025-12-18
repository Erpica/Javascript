//excepción
let myObject

//TRATAMIENTO DE ERRORES
//try-catch, finaly
console.log()
console.log("\t## try-catch, finaly ##")
try{
    console.log(myObject.name)
    console.log("Finaliza sin errores")
} catch (error){
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Este código siempre se ejecuta")
}

// Lanzamiento de errores
console.log()
console.log("\t## Lanzamiento de errores - throw ##")
function sumIntegers (a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError ("Esta operación solo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error ("Esta operación solo suma números enteros")
    }
    if (a == 0 || b == 0){
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

try {
    //console.log(sumIntegers(5.4,10))
    console.log(sumIntegers("5",10))
    //console.log(sumIntegers(0,10))
    console.log(sumIntegers(5,10))
} catch (error) { 
    console.log("Se ha producido un error:", error.message)
}


console.log()
console.log("\t## Capturar varios tipos de errores ##")

try {
    console.log(sumIntegers("5", 10))
    //console.log(sumIntegers(5, 10.6))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

console.log()
console.log("\t## Crear excepciones personalizadas ##")
class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super (message)
        this.a = a
        this.b = b
    }
    printNumbers () {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(5, 0))
} catch (error) {
    console.log("Se ha producido un error personalizado: ", error.message)
    error.printNumbers()
}
