console.log()
console.log("1. Captura una excepción utilizando try-catch.")
try {    
    console.log(restDiv.result)
} catch (err) {
    console.log("No existe esa variable")
}

console.log()
console.log("2. Captura una excepción utilizando try-catch y finally.")
try {
    functionHiHowAreU ()
} catch (err){
    console.log("No existe la función")
} finally {
    console.log("Pero no me enfado y sigo")
}

console.log()
console.log("3. Lanza una excepción genérica.")
try {
    let arrayError = (1, 2, 3)
    arrayError[3].toString()
} catch (myErrorName) {
    console.log("Error genérico")
}

console.log()
console.log("4. Crea una excepción personalizada.")
console.log("5. Lanza una excepción personalizada.")
//console.log("4. Crea una excepción personalizada.\n5. Lanza una excepción personalizada.")

try {
    console.log(myInexistentVariable.lenth())
} catch (err) {
    if (typeof(myInexistentVariable) == "undefined"){
        console.log("Errorcito: " + err)
    }
}
//let myInexistentVariable = "a"
//console.log(typeof(myInexistentVariable.le))

console.log()
console.log("6. Lanza varias excepciones según una lógica definida.")
let myNewArray = (1, 2, 3)
try {
    console.log(inexistentVariable2)
    //console.log(typeof(aRandomVariable))
} catch (newError) {
    if (typeof(inexistentVariable2) == "undefined"){
        console.log("Error variable indefinida: " + newError)
    }

}

//console.log(typeof(inexistentVariable2))

console.log()
console.log("7. Captura varias excepciones en un mismo try-catch.") // No es posible, solo lanza uno. Aquí puedo ir activando el que quiero que salte:
try {
    // 🔹 1. ReferenceError (variable no declarada)
    // a++;

    // 🔹 2. TypeError (usar un método que no existe)
    // let num = 3;
    // num.toUpperCase();

    // 🔹 3. SyntaxError (error en eval)
    // eval("console.log('Hola'");

    // 🔹 4. RangeError (tamaño de array inválido)
    new Array(-5);

} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("❌ ReferenceError: La variable no está definida.");
    } 
    else if (error instanceof TypeError) {
        console.log("⚙️ TypeError: Tipo de dato incorrecto o método inexistente.");
    } 
    else if (error instanceof SyntaxError) {
        console.log("🧩 SyntaxError: Error de sintaxis.");
    } 
    else if (error instanceof RangeError) {
        console.log("📏 RangeError: Valor fuera del rango permitido.");
    } 
    else {
        console.log("❗ Otro tipo de error:", error);
    }

    console.log("🔍 Detalle:", error.message);
}
    




console.log()
console.log("8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.")
let myArrayToFloat = ([1.3, 3, 5, "hola", NaN])
let myFloatedArray = []

//myArrayToFloat.forEach((oneNumber) => myFloatedArray.push(parseFloat(oneNumber)))

for (oneNumber of myArrayToFloat){
    if (oneNumber == NaN){
        throw new MyOwnError ("Esto no es un número")
    }
}

console.log(typeof(myFloatedArray[0]))
console.log(myFloatedArray)

class MyOwnError extends Error {
    constructor(myMessage){
        super(message)
    }
    
    fallInError(){
        console.log("caíste en la trampa")
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad especíica y lance una excepción personalizada.

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10.