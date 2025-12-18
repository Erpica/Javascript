console.log("Hi, Pica")
console.error("Error")
console.error("Error al conectarse a la BBDD", new Error("Conexión fallida"))

console.warn("Advertencia")
console.info("Info")

let data = [
    ["Anto", 44],
    ["Sara", 1]

]

data = [
    {name: "Pica", age: 44},
    {name: "Sara", age: 1}
]

console.table(data)

console.group("Usuario: ")
console.log("Nombre: Pica")
console.log("Edad: 44")
console.groupEnd()

console.time("tiempo de ejecución") // hay que ponerle un nombre
for (let i = 0; i<10000; i++){

}
console.timeEnd("tiempo de ejecución") //tiene que coincidir con la etiqueta de apertura del console.time

let age = 17
console.assert(age>=18, "El usuario debe ser mayor de edad")

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

function funcA(){
    funcB()
}

function funcB(){
    console.trace("seguimiento de ejecucin")
}
funcA()

console.clear()