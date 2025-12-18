// Funciones avanzadas - Las funciones son ciudadanos / objetos de primera clase
// Entidades que las podemos tratar con cualquier otro valor del lenguaje, 
// almacenar en una variable / constante / objeto
// Lo podemos pasar como parámetro, lo podemos retornar...

// Ciudadanos de primera clase
// 1) La podemos guardar en una constante y no hay que poner nombre a la función
const greet = function (name) {
    console.log(`Hola, ${name}`)
}

// console.log(typeof(greet)) => function
greet("Pica")

// 2) La puedo pasar como parámetro a otra función
function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "Anto")

// 3) La puedo retornar dentro de otra función
function returnGreeting(name) {
    return greet
}

const greet2 = returnGreeting()

greet2("Erpica")

// Arrow function advanced
// Retorno implícito:
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// this léxico:
const handler = {
    name: "Pikaxo",
    greeting: function(){
        console.log(`Hola, ${this.name}`)
    },
    // ... y con arrow function:
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`) // En las arrow funtion, el this crea su propio contexto
    }
}

// ... y con arrow function:

handler.greeting()
handler.arrowGreeting()

// IIFE: inmediatly invoque function expresion - Expresión de función invocada inmediatamente

; // para aislar la IIFE
(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})()

// Parámetros Rest (...)
function sum (...numbers){
    let result = 0
    for (let number of numbers){
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))

// Operador Spread (...)
const numbers = [1, 2, 3]
function sumWithSpread(a, b, c){
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3))
console.log(sumWithSpread(...numbers))  // Para que expanda un parámetro (array) en varios parámetros (en este caso tres number. Si meto más coge 3, si meto menos NaN)

// Clousures (Clausuras)
function createCounter(){
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()

const counter2 = createCounter()
counter2()
counter2()

// Recursividad
// SIEMPRE: definir condición
function factorial(n){
    if (n <= 1){
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(3))

// Funciones parciales
function partialSum(a){
    return function (b, c){
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))

// Currying



function currySum(a){
    return function (b){
        return function (c){
            return function (d){
                return sum(a, b, c, d)
            }
        }
    }
}


const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7)) 

// Callbacks: A un afunción le pasamos otra función como argumento para personalizar su comportamiento
console.log()
console.log("## Callbacks ##")
function processData(data, callback) {
    const result = sum(...data) // Parámetros rest: Como no se cuantos te voy a pasar, te lo pongo así. EN UN ARRAY
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}


processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})

/* function sum (...numbers){
    let result = 0
    for (let number of numbers){
        result += number
    }
    return result
} */