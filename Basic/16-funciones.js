//log es una funcion de consola

function myFunction(){
    console.log("¡Hola, mi función!")
}

myFunction()

function myFunctionConParametros(name){
    console.log(`¡Hola, ${name}!`)
}

myFunctionConParametros("Pica")
myFunctionConParametros("Anto")

// Funciones anónimas
const myFunc2 = function (name){
    console.log(`¡Hola, ${name}!`)
}

myFunc2 ("Er Pica")

// arrow functions: una forma mas concisa de escribir funciones (de la epoca de quitar el punto y coma)
const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)
myFunc4("hola hola hola")