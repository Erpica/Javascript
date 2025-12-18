console.log("Hola Pic")
console.error("Este es un mensaje de error", new Error("Conexión fallida"))
console.warn("Este es un mensaje de advertencia")
console.info("Información adicional")

let data = [
    ["Brais", 27],
    ["Pic", 45]
]
console.table(data)

data = [
    {name: "Brais", age: 27},
    {name: "Pic", age: 45}
]

console.table(data)

// group (pareja)

console.group("Usuario: ")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()

console.time("Tiempo de ejecución")
for (let i = 0; i<10000; i++){

}

console.timeEnd("Tiempo de ejecución")

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

console.count("Click")
console.count("Click")
console.count("Click")

console.countReset("Click")

console.count("Click")


function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecución.")
}

funcA()

//console.clear()
