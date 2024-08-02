//log es una funcion de consola (como has, get, keys, ...)

function myFunction(){
    console.log("¡Hola, mi función!")
}

myFunction()

function myFunctionConParametros(name){
    console.log(`¡Hola, ${name}!`)
}

myFunctionConParametros("Pica")
myFunctionConParametros("Anto")

// Funciones anónimas: hay que asignarla a una variable o a una constante
const myFunc2 = function (name){
    console.log(`¡Hola, ${name}!`)
}

myFunc2 ("Er Pica")

// arrow functions: una forma mas concisa de escribir funciones (de la epoca de quitar el punto y coma)
// hay que asignarla a una variable o a una constante
// en este caso se puede utilizar porque solo quiero que reciba un parámetro: name
const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)
myFunc4("hola hola hola")

function defaultSum (a=0, b=0){ //podemos inicializar los parámetros para que no de error si me la mandan sin parámetros
    console.log(a + b)
}
defaultSum()
defaultSum(4)
defaultSum(4,5)

function mult(a,b){
    return a*b
}

console.log(mult(5,10))



