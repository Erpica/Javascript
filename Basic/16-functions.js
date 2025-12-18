function myFuncWithParams(name){
    console.log(`Hola ${name}`)
}
myFuncWithParams("Pic")

//Funciones anónimas
const myFunc2 = function(name){
    console.log(`Hola ${name}`)
}
myFunc2("Pica")

// Arrow functions
const myFunc3 = (name) => {
    console.log(`Hola ${name}`)
}
myFunc3("Pica")

const myFunc4 = (name) => console.log(`Hola ${name}`)
myFunc4("ErPica")

// Parámetros
function sum(a, b){
    console.log(a + b)
}
sum(5, 4)

function defaultSum(a = 0, b = 0){
    console.log(a + b)
}
defaultSum(5)

// Retorno de valores
function mult(a, b){
    return a*b
}

console.log(mult(5, 10))
let result = mult(5, 10)
console.log(result)

function extern(){
    console.log("Función externa")
    function intern (){
        console.log("Función interna")
    }
    intern()
}

extern()
//intern() // Fuera de scope

//Funciones de orden superios (funciones que reciben otras funciones como argumentos)
function applyFunc(func, param){
    func(param)
}
applyFunc(myFunc4, "función de orden superior")

// forEach
myArray = ["Anto", "ErPica", "picadev"]
mySet = new Set(["Anto", "ErPica", "DePica", 45])
myMap = new Map([
        ["name", "Brais"],
        ["email", "erpica@pic.es"],
        ["age", 45]
    ]
)

myArray.forEach((value) => console.log(value))
// O lo mismo en más "pasos":
myArray.forEach(function(value) { 
    console.log(value)
})

mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))