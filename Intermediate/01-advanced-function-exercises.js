// 1. Crea una función que retorne a otra función. (como fué complicado, decidí hacer varias)

const myAddfunction = function (myNumber){
    console.log(myNumber+1)
}

myAddfunction(4)

function myAddedNumber (myOtherFunction, myOtherNumber){
    myOtherFunction (myOtherNumber)
}

myAddedNumber(myAddfunction, 5)

function returnFunction(aNumber) {
    return myAddfunction
}

const theAddedNumber = returnFunction()
theAddedNumber(6)
theAddedNumber(7)

console.log("")
console.log("Ejercicio 1:")


function builtMultiplier (y){
    return function (x){
        return y * x
    }
}

function multiplyBy (functionReceived, x){
    return functionReceived * x
}

const threeTimes = builtMultiplier(3);
console.log(threeTimes(4)); // 12



console.log("")
console.log("Ejercicio 2:")

const crearSaludo = function (nombre){
    return function (){
        console.log(`Hola ${nombre}`)
    }
}

function SaludaYa (conFuncion){
    conFuncion()
}

const saludoParaPica = crearSaludo ("pica")
SaludaYa(saludoParaPica)



console.log("")
console.log(`Escribe una función retornaLogger(mensaje) que devuelva una función que muestre ese mensaje en consola cuando se invoque.`)

function retornaLogger(mensaje){
    return function(){
        console.log(`Mensaje generado: "${mensaje}"`)
    }
}

function imprimeMensaje (funcioncita){
    funcioncita()
}

const mensajito = retornaLogger("Error total")
imprimeMensaje (mensajito)






console.log("")
console.log("Crea una función retornaOperacion(tipo) que devuelva una función que sume, reste o multiplique dos números según el tipo.")

function retornaOperacion(tipo){
    if (tipo == "suma"){
        return function (a, b){
            console.log(a + b)
        }
    } else if (tipo == "resta"){
        return function (a, b){
            console.log(a - b)
        }
    } else if (tipo == "multiplicación"){
        return function (a, b){
            console.log(a * b)
        }
    }
}

function ejecutaOperacion (functiony, a, b){
    functiony(a, b)
}

const miSuma = retornaOperacion("suma")
ejecutaOperacion (miSuma, 2, 3)

const miResta = retornaOperacion("resta")
ejecutaOperacion (miResta, 2, 3)

const miMultiply = retornaOperacion("multiplicación")
ejecutaOperacion (miMultiply, 2, 3)


console.log("")
console.log(`2. Implementa una función currificada que multiplique 3 números`)
function currimulti (a){
    return function (b){
        return function (c){
            return a * b * c
        }
    }
}

const multiA = currimulti(2)
const multiAB = multiA(3)
//const multiABC = currimulti(4)
console.log(multiAB(4))


console.log("")
console.log(`3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente`)
function numberPower (n, p){
    if (p === 0) return 1
    return n * numberPower(n, p - 1)
}

console.log(numberPower (2, 5))

function factorialRecursiva (n){
    if (n == 1){
        return 1
    }
    return resultado = n * factorialRecursiva (n - 1)
}

console.log(`Y el factorial para practicar: ${factorialRecursiva(5)}`)

console.log("")
console.log(`4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), 
decrement() y getValue(), utilizando un closure para mantener el estado`)
console.log("#####")

function createCounter(initialValue){
    let myClousure = initialValue
    return {
        incrementMethod(){
            ++myClousure
            console.log("incrementando: "+myClousure)
        },
        decrementMethod(){
            --myClousure
            console.log("decrementando: "+myClousure)
        },
        getValueMethod(){
            console.log("Su valor: "+myClousure)
        }
    }
}

const myInitialValue = createCounter(5)
myInitialValue.decrementMethod()
myInitialValue.decrementMethod()
myInitialValue.incrementMethod()
myInitialValue.getValueMethod()
console.log("#####")

console.log()
console.log("... y un par de ejercicios más para practicar: ")
console.log("1) Crea una función llamada crearSaludador(nombre) que devuelva otra función que diga por consola: “Hola, [nombre]”")

function crearSaludador(nombre){
    return function (){
        console.log("Hola " + nombre)
    }
}

const saludaPica = crearSaludador("Pica")
saludaPica()

console.log("2) Crea una función llamada crearSumador(base) que devuelva otra función que, al recibir un número, lo sume con la base.")
function crearSumador(base){
    return function (numero){
        console.log(base + numero)
    }
}

const conBaseUno = crearSumador(1)
conBaseUno(5)





console.log()
console.log(`5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) 
     y luego multiplique el resultado por multiplier`)
function sumManyTimes(multiplier, ...numbers){
    let mySum = 0
    for (oneNumber of numbers){
        mySum += oneNumber
    }
    return multiplier * mySum
}

console.log(sumManyTimes (3, 4, 3, 2))

console.log()
console.log(`6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función`)
function myCallbackFunction (callback, ...numeros){
    console.log("Realizando la suma... ")
    callback(...numeros)
}

function mySum(...numeros) {
    let mySum = 0
    for (aNumber of numeros){
        mySum += aNumber
    }
    console.log(mySum)
}


myCallbackFunction(mySum, 3, 2, 1)



console.log()
console.log(`7. Desarrolla una función parcial`)
function myGreet(greet){
    return  function (name){
        console.log(greet + name)
    }
}

const hiOrBye = myGreet("Hola, ")
const hiOrBye2 = myGreet("Bye, ")
hiOrBye("Anto")
hiOrBye("Pics")
hiOrBye2("Pics")


console.log()
console.log(`8. Implementa un ejemplo que haga uso de Spread`)
const myLetters = ["a", "b", "c"]
function toWord (a, b, c){
    let theWord = console.log(a + b + c)
    return theWord
}

(toWord(...myLetters))


console.log()
console.log(`9. Implementa un retorno implí­cito`)
const thatsALLFolks = (message1, message2) => console.log("Y con esto todo terminó: " + message1, message2)
thatsALLFolks("adios", "pica")



console.log()
console.log(`10. Haz uso del this léxico`)

const myObject = {
    name: "Car",
    colour: "blue",
    sayMyName: function() {
        return this.name
    },
    sayMyColour: function() {
        return this.colour
    },
    giveMeEverything: function() {
        iGiveYouEverything(() => {
            console.log(this.name + " " + this.colour)
        })
    }
}

function iGiveYouEverything(callback) {
    console.log("Preparando para darte todo...")
    callback()
}

const myNewObject = myObject
console.log(myNewObject.sayMyName())     // Car
console.log(myNewObject.sayMyColour())   // blue
myNewObject.giveMeEverything()           // "Preparando para darte todo..." + "Car blue"

























