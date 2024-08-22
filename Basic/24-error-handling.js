//Esto produce una excepcion:
let myObject
//console.log(myObject.email)

//Captura de errores
//try-catch

try{
    //segun el console log que ponga de los dos ejecutará uno de los dos string
    console.log(myObject.email)
    console.log(myObject)
    console.log("finaliza la ejecución sin errores")
}catch{
    console.log("se ha producido un error")
}

try{
    console.log(myObject.email)
}catch (error){
    console.log("se ha producido un error: " + error)
}finally{
    console.log("Este código se ejecuta siempre")
}

//Lanzamiento de errores
console.log()
console.log("-----")
console.log("Lanzamiento de errores:")
console.log()

console.log("Lanzamiento de errores:")
//throw new Error("Se ha productido un error")

function sum(a,b){
    if (typeof a === "number"){                     // UNA FORMA DE CONTROLAR QUE ES Nº
        console.log("Es instancia de un número")
    }
    if (Number.isInteger(a)){                       // OTRA FORMA DE CONTROLAR QUE ES Nº PERO ENTERO 
                                                    // (LA MEJOR FORMA SI ME VALE ENTER)
        console.log("Es un número entero")          // TAMBIÉN isNaN (NOT A NUMBER)
    }
    return a + b
}

console.log(sum(5, 10))
let a = 5
console.log("typeof: " + typeof 5.5)

console.log()
console.log("-----")
console.log("Lanzamiento de errores: ahora bien")
console.log()

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    if (a == 0 || b == 0){
        throw new Sum0IntegerError("Los ceritos no valen nene")
    }
    return a + b
}

try{
    console.log(sumInteger(5,10))
    console.log(sumIntegers("5aa",10)) // si comento esta línea ya no hay error
}catch (error){
    console.log("Se ha producido un error", error.message) // (1) aquí hago la llamada el mensage que creé antes
}

//tipos de excepciones
// error, TypeError, RangeError, ...

// capturar varios tipos de errores
console.log("---")
console.log("capturar varios tipos de errores:")
console.log("---")
try {
    console.log(sumIntegers(5.5,10))
    //console.log(sumInteger("5",10))
} catch (error){
    if (error instanceof TypeError){
        console.log("se ha producido un error de tipo: ", error.message)
    }else if (error instanceof Error){
        console.log("se ha producido un error de tipo: ", error.message)
    }
}

// crear excepciones personalizadas

class Sum0IntegerError extends Error {
    constructor (message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(this.a, " + ", this.b)
    }
}


try{
    console.log(SumInteger(0,10))
    //console.log(sumIntegers("5aa",10)) // si comento esta línea ya no hay error
}catch (error){
    console.log("Se ha producido un error", error.message) // (1) aquí hago la llamada el mensage que creé antes
    error.printNumbers()
}